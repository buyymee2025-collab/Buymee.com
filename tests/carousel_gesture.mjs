import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'
const source = fs.readFileSync(new URL('../src/pages/Home.jsx', import.meta.url), 'utf8')
const effect = source.slice(source.indexOf('    const carousel = carouselRef.current'), source.indexOf('\n  }, [])', source.indexOf('    const carousel = carouselRef.current')))
const events = new Map(), windowEvents = new Map()
let frame, clock = 0
const carousel = { classList: {add(){},remove(){}}, addEventListener:(n,f)=>events.set(n,f), removeEventListener(){}, setPointerCapture(){},hasPointerCapture:()=>false }
const track = {children:[{offsetLeft:0}, {offsetLeft:2000}],style:{}}
const cleanup = vm.runInNewContext(`(function(){${effect}})()`, {
 carouselRef:{current:carousel}, trackRef:{current:track},shopAngleCards:[{}],
 window:{addEventListener:(n,f)=>windowEvents.set(n,f),removeEventListener(){}},
 ResizeObserver:class{observe(){}disconnect(){}}, requestAnimationFrame:f=>(frame=f,1),cancelAnimationFrame(){},
 setTimeout:()=>1,clearTimeout(){}, performance:{now:()=>clock}, Math,
})
const offset=()=>Number(track.style.transform.match(/translate3d\(([-\d.]+)px/)[1])
const emit=(type,x,y,t)=>{clock=t;const e={type,isPrimary:true,pointerId:1,pointerType:'touch',button:-1,clientX:x,clientY:y,timeStamp:t,preventDefault(){}};(events.get(type)||windowEvents.get(type))(e)}
const advance=t=>{clock=t;frame(t)}
advance(0);advance(16)
const start=offset()
emit('pointerdown',300,100,20);emit('pointermove',200,102,40)
assert.ok(Math.abs(offset()-(start-100))<0.01,'Track follows finger displacement directly')
emit('pointermove',100,102,60);emit('pointerup',100,102,62)
advance(64);const released=offset();advance(80)
assert.ok(Math.abs(offset()-released)>10,'Fast touch release has visible momentum')
advance(3100);const settled=offset();advance(3116)
assert.ok(Math.abs(Math.abs(offset()-settled)-1.28)<0.01,'Cruise resumes after three seconds')
emit('pointerdown',100,100,3120);emit('pointermove',220,102,3140);emit('pointerup',220,102,3142)
advance(3144);const reversed=offset();advance(3160)
assert.ok(offset()>reversed,'A rightward flick reverses travel')
const beforeScroll=offset();emit('pointerdown',100,100,3200);emit('pointermove',102,220,3220)
assert.equal(offset(),beforeScroll,'Vertical page gestures do not drag the carousel')
cleanup()
console.log('Touch carousel passed: direct tracking, flick momentum, direction reversal, normal speed at three seconds, vertical scroll preserved.')
