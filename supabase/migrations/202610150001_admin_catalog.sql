-- Run once in a new Supabase project's SQL editor.
create table public.admin_members (
 user_id uuid primary key references auth.users(id) on delete cascade
);
alter table public.admin_members enable row level security;
revoke all on public.admin_members from anon, authenticated;
grant select on public.admin_members to authenticated;
create policy "Owners can verify their membership" on public.admin_members for select to authenticated using (user_id = (select auth.uid()));
create table public.catalog_products (
 id text primary key,
 slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
 payload jsonb not null check (jsonb_typeof(payload) = 'object' and payload->>'id' = id and payload->>'slug' = slug),
 deleted boolean not null default false,
 updated_at timestamptz not null default now()
);
alter table public.catalog_products enable row level security;
revoke all on public.catalog_products from anon, authenticated;
grant select, insert, update on public.catalog_products to authenticated;
create policy "Approved owners read products" on public.catalog_products for select to authenticated using (exists (select 1 from public.admin_members where user_id = (select auth.uid())));
create policy "Approved owners add products" on public.catalog_products for insert to authenticated with check (exists (select 1 from public.admin_members where user_id = (select auth.uid())));
create policy "Approved owners edit products" on public.catalog_products for update to authenticated using (exists (select 1 from public.admin_members where user_id = (select auth.uid()))) with check (exists (select 1 from public.admin_members where user_id = (select auth.uid())));
-- Visitors receive live products and only IDs for hidden products; no owner data.
create function public.public_catalog() returns table(id text, payload jsonb, deleted boolean)
language sql stable security definer set search_path = '' as $$
 select p.id, case when p.deleted then null else p.payload end, p.deleted from public.catalog_products p;
$$;
revoke all on function public.public_catalog() from public;
grant execute on function public.public_catalog() to anon, authenticated;
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('product-media', 'product-media', true, 52428800, array['image/jpeg','image/png','image/webp','image/avif','video/mp4','video/webm']);
create policy "Owners upload product media" on storage.objects for insert to authenticated with check (bucket_id = 'product-media' and exists (select 1 from public.admin_members where user_id = (select auth.uid())));
create policy "Owners inspect product media" on storage.objects for select to authenticated using (bucket_id = 'product-media' and exists (select 1 from public.admin_members where user_id = (select auth.uid())));
