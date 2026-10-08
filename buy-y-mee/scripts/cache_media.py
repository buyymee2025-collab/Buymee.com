"""Cache the existing Cloudinary and Unsplash image URLs without changing subjects."""
from concurrent.futures import ThreadPoolExecutor, as_completed
from io import BytesIO
from pathlib import Path
import hashlib
import json
import re
import requests
import subprocess
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'images'
OUT.mkdir(parents=True, exist_ok=True)
MAP = ROOT / 'src' / 'data' / 'imageMap.json'
pattern = re.compile(r'https://(?:res\.cloudinary\.com/[^\s\"\'<>]+/image/[^\s\"\'<>]+|images\.unsplash\.com/[^\s\"\'<>]+)')
urls = set()
for path in (ROOT / 'src').rglob('*'):
    if path.suffix in {'.js', '.jsx', '.ts', '.tsx'}:
        urls.update(pattern.findall(path.read_text()))
generated = subprocess.check_output(['node', '--input-type=module', '-e', "import {categoryProducts} from './src/data/categoryProducts.js'; console.log(JSON.stringify(Object.values(categoryProducts).flat().flatMap(p=>[p.image,p.secondaryImage,...p.gallery])))"], cwd=ROOT, text=True)
urls.update(json.loads(generated))
urls = {url for url in urls if '${' not in url and '`' not in url and not url.endswith('/') and ('/image/upload/' in url or 'images.unsplash.com/photo-' in url)}
old = json.loads(MAP.read_text()) if MAP.exists() else {}
records = {}
failures = []


def cache(url):
    key = hashlib.sha256(url.encode()).hexdigest()[:18]
    filename = f'{key}.webp'
    target = OUT / filename
    if target.exists():
        with Image.open(target) as im:
            size = list(im.size)
        return url, f'/images/{filename}', {'width': size[0], 'height': size[1], 'bytes': target.stat().st_size}
    last = None
    for attempt in range(2):
        try:
            response = requests.get(url, timeout=(12, 35))
            response.raise_for_status()
            im = ImageOps.exif_transpose(Image.open(BytesIO(response.content)))
            im.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
            im = im.convert('RGBA' if 'A' in im.getbands() else 'RGB')
            im.save(target, 'WEBP', quality=88, method=5)
            return url, f'/images/{filename}', {'width': im.width, 'height': im.height, 'bytes': target.stat().st_size}
        except Exception as exc:
            last = str(exc)
    return url, None, {'error': last}


print(f'Caching {len(urls)} existing image URLs with 5 workers.', flush=True)
with ThreadPoolExecutor(max_workers=5) as pool:
    futures = [pool.submit(cache, url) for url in sorted(urls)]
    for index, future in enumerate(as_completed(futures), 1):
        url, local, details = future.result()
        if local:
            old[url] = local
            records[local] = {'source': url, **details}
        else:
            failures.append({'source': url, **details})
        print(f'{index}/{len(urls)} {"cached" if local else "FAILED"}: {url.split("/")[-1][:65]}', flush=True)
MAP.write_text(json.dumps(old, indent=2) + '\n')
(ROOT / 'public' / 'image-sources.json').write_text(json.dumps({'images': records, 'failures': failures}, indent=2) + '\n')
print(f'Image cache finished: {len(records)} cached, {len(failures)} failed. Mapping: {MAP}', flush=True)
if failures:
    raise SystemExit(1)
