import assert from 'node:assert/strict'
import { beginModalHistory } from '../src/lib/modalHistory.js'
function browserMock() {
  const entries = [{state:{key:'home',idx:0},url:'https://buyymee.com/'},{state:{key:'men',idx:1,usr:{filter:'sets'}},url:'https://buyymee.com/men'}]
  let index=1
  const listeners=new Set(),frames=[],scrolls=[]
  const browser={location:{href:entries[index].url},scrollX:0,scrollY:1460,requestAnimationFrame:fn=>frames.push(fn),scrollTo:p=>scrolls.push(p),addEventListener:(type,fn)=>listeners.add(fn),removeEventListener:(type,fn)=>listeners.delete(fn)}
  browser.history={get state(){return entries[index].state}, pushState(state,_,url){entries.splice(++index);entries.push({state,url});browser.location.href=url},back(){if(index){--index;browser.location.href=entries[index].url;[...listeners].forEach(fn=>fn())}}}
  return {browser,entries,listeners,scrolls,flush(){while(frames.length)frames.shift()()}}
}
{
 const m=browserMock();let closed=0
 const controller=beginModalHistory(()=>closed++,m.browser)
 assert.equal(m.browser.location.href,'https://buyymee.com/men')
 assert.equal(m.browser.history.state.key,'men','Router key is preserved: no catalogue remount')
 assert.deepEqual(m.browser.history.state.usr,{filter:'sets'})
 m.browser.history.back();m.flush()
 assert.equal(closed,1,'Phone Back dismisses the modal')
 assert.equal(m.browser.location.href,'https://buyymee.com/men','Back stays on the originating category')
 assert.equal(m.scrolls.at(-1).top,1460,'Original scroll position is restored')
 assert.equal(m.listeners.size,0)
 controller.close();controller.dispose()
 assert.equal(m.browser.location.href,'https://buyymee.com/men','Cleanup cannot navigate back again')
 // A later normal Back still navigates to the previous page.
 m.browser.history.back();assert.equal(m.browser.location.href,'https://buyymee.com/')
}
{
 const m=browserMock();let closed=0
 const controller=beginModalHistory(()=>closed++,m.browser)
 controller.close();controller.close();assert.equal(closed,1)
 assert.equal(m.browser.location.href,'https://buyymee.com/men')
 const second=beginModalHistory(()=>closed++,m.browser)
 m.browser.history.pushState({key:'contact',idx:3},'','https://buyymee.com/contact')
 second.dispose()
 assert.equal(m.browser.location.href,'https://buyymee.com/contact','Unmount must not undo real navigation')
 assert.equal(m.listeners.size,0)
}
console.log('Modal history passed: phone Back and close button retain category, filters, and scroll; no duplicate Back or stale listeners; normal navigation preserved.')
