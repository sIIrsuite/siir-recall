import {useEffect,useRef,useState} from 'react';
import {ArrowRight,Pause,Play} from 'lucide-react';

type Point=[number,number,number];
type Collection={title:string;description:string;count:number};
const phi=(1+Math.sqrt(5))/2;
const vertices:Point[]=[];
for(const a of [-1,1])for(const b of [-phi,phi])vertices.push([0,a,b],[a,b,0],[b,0,a]);
const length=Math.hypot(1,phi);
const points=vertices.map(p=>p.map(v=>v/length) as Point);
const edges=points.flatMap((a,i)=>points.slice(i+1).flatMap((b,j)=>Math.hypot(...a.map((v,k)=>v-b[k]))<1.1?[[i,i+j+1]]:[]));
const faces:number[][]=[];
for(let a=0;a<points.length;a++)for(let b=a+1;b<points.length;b++)for(let c=b+1;c<points.length;c++)if([[a,b],[a,c],[b,c]].every(([i,j])=>edges.some(([u,v])=>u===i&&v===j)))faces.push([a,b,c]);
function rotate([x,y,z]:Point,yaw:number,pitch:number):Point{
 const u=x*Math.cos(yaw)+z*Math.sin(yaw),v=z*Math.cos(yaw)-x*Math.sin(yaw);
 return [u,y*Math.cos(pitch)-v*Math.sin(pitch),y*Math.sin(pitch)+v*Math.cos(pitch)];
}

export function CollectionPolyhedron({collections,onSelect}:{collections:Collection[];onSelect:(title:string)=>void}){
 const stage=useRef<HTMLDivElement>(null);
 const geometry=useRef<SVGGElement>(null);
 const leaders=useRef<SVGGElement>(null);
 const motionPaused=useRef(false);
 const [paused,setPaused]=useState(false);
 const [filter,setFilter]=useState('');
 const featured=collections.slice(0,6);
 const remaining=collections.slice(6).filter(collection=>collection.title.toLowerCase().includes(filter.toLowerCase()));
 useEffect(()=>{
  const host=stage.current!,mesh=geometry.current!,links=leaders.current!;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let yaw=.35,pitch=.18,frame=0,last=0,hover=false,focused=false,width=1000,height=460;
  let drag:{id:number;x:number;y:number}|null=null;
  const ns='http://www.w3.org/2000/svg';
  function element(tag:string,attributes:Record<string,string>){const el=document.createElementNS(ns,tag);for(const [name,value]of Object.entries(attributes))el.setAttribute(name,value);return el;}
  function draw(){
   const mobile=width<600,radius=Math.min(mobile?width*.27:width*.25,188);
   const projected=points.map(point=>{const [x,y,z]=rotate(point,yaw,pitch);const scale=3.8/(3.8-z);return [width/2+x*radius*scale,height/2+y*radius*scale,z] as Point;});
   mesh.replaceChildren();links.replaceChildren();
   [...faces].sort((a,b)=>a.reduce((s,i)=>s+projected[i][2],0)-b.reduce((s,i)=>s+projected[i][2],0)).forEach(face=>{
    const depth=face.reduce((s,i)=>s+projected[i][2],0)/3;
    mesh.append(element('polygon',{points:face.map(i=>`${projected[i][0]},${projected[i][1]}`).join(' '),class:'polyhedron-face',opacity:String(.035+(depth+1)*.045)}));
   });
   edges.forEach(([a,b])=>mesh.append(element('line',{x1:String(projected[a][0]),y1:String(projected[a][1]),x2:String(projected[b][0]),y2:String(projected[b][1]),class:'polyhedron-edge',opacity:String(.14+(projected[a][2]+projected[b][2]+2)*.18)})));
   projected.forEach(([x,y,z])=>mesh.append(element('circle',{cx:String(x),cy:String(y),r:'2.5',class:'polyhedron-vertex',opacity:String(.3+(z+1)*.3)})));
   const labels=host.querySelectorAll<HTMLButtonElement>('.polyhedron-label');
   labels.forEach((label,i)=>{
    const side=i%2===0?-1:1,row=Math.floor(i/2),rows=3;
    const labelWidth=mobile?Math.min(145,width*.43):Math.min(240,width*.28);
    const x=side===-1?0:width-labelWidth;
    const y=(row+1)*height/(rows+1)-label.offsetHeight/2;
    label.style.width=`${labelWidth}px`;label.style.left=`${x}px`;label.style.top=`${y}px`;
    const p=projected[(i*3+2)%points.length],endX=side===-1?x+labelWidth:x,endY=y+label.offsetHeight/2;
    links.append(element('path',{d:`M ${p[0]} ${p[1]} L ${endX-side*14} ${endY} L ${endX} ${endY}`,class:'polyhedron-leader'}));
    links.append(element('circle',{cx:String(p[0]),cy:String(p[1]),r:'4',class:'polyhedron-anchor'}));
   });
  }
  function resize(){width=host.clientWidth;height=width<600?440:460;host.style.height=`${height}px`;host.querySelector('svg')!.setAttribute('viewBox',`0 0 ${width} ${height}`);draw();}
  const observer=new ResizeObserver(resize);observer.observe(host);resize();
  function down(e:PointerEvent){if(e.button!==0||(e.target as Element).closest('button'))return;drag={id:e.pointerId,x:e.clientX,y:e.clientY};host.setPointerCapture(e.pointerId);}
  function move(e:PointerEvent){if(!drag||drag.id!==e.pointerId)return;yaw+=(e.clientX-drag.x)*.007;pitch=Math.max(-1.1,Math.min(1.1,pitch+(e.clientY-drag.y)*.007));drag.x=e.clientX;drag.y=e.clientY;draw();}
  function up(){drag=null;}
  function enter(){hover=true;}function leave(){hover=false;}
  function focus(){focused=true;}function blur(e:FocusEvent){focused=host.contains(e.relatedTarget as Node);}
  host.addEventListener('pointerdown',down);host.addEventListener('pointermove',move);host.addEventListener('pointerup',up);host.addEventListener('pointercancel',up);host.addEventListener('pointerenter',enter);host.addEventListener('pointerleave',leave);host.addEventListener('focusin',focus);host.addEventListener('focusout',blur);
  function tick(now:number){const dt=Math.min(now-last,40);last=now;if(!motionPaused.current&&!reduced.matches&&!hover&&!focused&&!drag&&!document.hidden){yaw+=dt*.00009;draw();}frame=requestAnimationFrame(tick);}
  frame=requestAnimationFrame(tick);
  return()=>{cancelAnimationFrame(frame);observer.disconnect();host.removeEventListener('pointerdown',down);host.removeEventListener('pointermove',move);host.removeEventListener('pointerup',up);host.removeEventListener('pointercancel',up);host.removeEventListener('pointerenter',enter);host.removeEventListener('pointerleave',leave);host.removeEventListener('focusin',focus);host.removeEventListener('focusout',blur);};
 },[collections]);
 return <section className="collection-map" aria-label="Collections">
  <div className="polyhedron-stage" ref={stage}>
   <svg className="polyhedron-geometry" aria-hidden="true"><g ref={geometry}/><g ref={leaders}/></svg>
   {featured.map((collection,i)=><button className="polyhedron-label" key={collection.title} onClick={()=>onSelect(collection.title)}><span className="polyhedron-number">{String(i+1).padStart(2,'0')}</span><span><h2>{collection.title}</h2><small>{collection.count} notes</small><span className="polyhedron-open">Explore <ArrowRight size={14}/></span></span></button>)}
  </div>
  <div className="polyhedron-controls"><p>Drag to rotate · select a collection</p><button onClick={()=>{motionPaused.current=!paused;setPaused(!paused);}} aria-label={paused?'Resume rotation':'Pause rotation'} aria-pressed={paused}>{paused?<Play size={14}/>:<Pause size={14}/>}</button></div>
  {collections.length>featured.length&&<details className="collection-directory"><summary>Browse all {collections.length} collections</summary><label>Find a collection<input value={filter} onChange={event=>setFilter(event.target.value)} placeholder="Search collections…"/></label><ul>{remaining.map(collection=><li key={collection.title}><button onClick={()=>onSelect(collection.title)}><span>{collection.title}</span><small>{collection.count} notes</small><ArrowRight size={15}/></button></li>)}{remaining.length===0&&<li className="directory-empty">No collections match that search.</li>}</ul></details>}
 </section>;
}
