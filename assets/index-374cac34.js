(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function f(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(t){if(t.ep)return;t.ep=!0;const i=f(t);fetch(t.href,i)}})();window.addEventListener("load",function(){w()});async function w(){window.addEventListener("load",function(){this.document.querySelector("#textInput");const a=this.document.querySelector("#canvas1"),d=a.getContext("2d");a.width=window.innerWidth,a.height=window.innerHeight;const f=1e3/60;class u{constructor(s,h,n,e){this.effect=s,this.x=Math.random()*s.canvasWidth,this.y=this.effect.canvasHeight,this.color=e,this.originX=h,this.originY=n,this.size=this.effect.gap,this.dx=0,this.dy=0,this.vx=0,this.vy=0,this.force=0,this.angle=0,this.distance=0,this.friction=Math.random()*.1+.15,this.ease=Math.random()*.6+.0355}draw(){this.effect.context.fillStyle=this.color,this.effect.context.fillRect(this.x,this.y,this.size,this.size)}update(){this.dx=this.effect.mouse.x-this.x,this.dy=this.effect.mouse.y-this.y,this.distance=this.dx*this.d+this.dy*this.dy,this.force=this.effect.mouse.radius/this.distance,this.distance<this.effect.mouse.radius&&(this.angle=Math.atan2(this.dy,this.dx),this.vx+=this.force*Math.cos(this.angle),this.vy+=this.force*Math.sin(this.angle)),this.x+=(this.vx*=this.friction)+(this.originX-this.x)*this.ease,this.y+=(this.vy*=this.friction)+(this.originY-this.y)*this.ease}}class t{constructor(s,h,n){this.context=s,this.canvasWidth=h,this.canvasHeight=n,this.textX=this.canvasWidth/2,this.textY=this.canvasHeight/2,this.fontSize=130,this.lineHeight=this.fontSize*.9,this.maxTextWidth=this.canvasWidth*.8,this.textInput=document.getElementById("textInput"),this.verticalOffset=-160,this.textInput.addEventListener("keyup",e=>{e.key!==""&&(this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.warpText(e.target.value))}),this.particles=[],this.gap=3,this.mouse={radius:2e4,x:0,y:0},window.addEventListener("mousemove",e=>{this.mouse.x=e.x,this.mouse.y=e.y})}warpText(s){const h=this.context.createLinearGradient(0,0,this.canvasWidth,this.canvasHeight);h.addColorStop(.3,"red"),h.addColorStop(.5,"orange"),h.addColorStop(.7,"yellow"),this.context.fillStyle=h,this.context.textAlign="center",this.context.textBaseline="middle",this.context.lineWidth=3,this.context.strokeStyle="white",this.context.font=this.fontSize+"px Impact";let n=[],e=s.split(" "),x=0,l="";for(let o=0;o<e.length;o++){let c=l+e[o]+" ";this.context.measureText(c).width>this.maxTextWidth?(l=e[o]+" ",x++):l=c,n[x]=l}let v=this.lineHeight*x;this.textY=this.canvasHeight/2-v/2+this.verticalOffset,n.forEach((o,c)=>{this.context.fillText(o,this.textX,this.textY+c*this.lineHeight),this.context.strokeText(o,this.textX,this.textY+c*this.lineHeight)}),this.convertToParticles()}convertToParticles(){this.particles=[];const s=this.context.getImageData(0,0,this.canvasWidth,this.canvasHeight).data;this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight);for(let h=0;h<this.canvasHeight;h+=this.gap)for(let n=0;n<this.canvasWidth;n+=this.gap){const e=(h*this.canvasWidth+n)*4;if(s[e+3]>0){const l=s[e],v=s[e+1],o=s[e+2],c=`rgb(${l},${v},${o})`;this.particles.push(new u(this,n,h,c))}}}render(){this.particles.forEach(s=>{s.update(),s.draw()})}}const i=new t(d,a.width,a.height);i.warpText("Input text"),i.render();let r,g,y=Date.now();function p(){r=Date.now(),g=r-y,requestAnimationFrame(p),!(g<f)&&(d.clearRect(0,0,a.width,a.height),i.render(),y=r-g%f,requestAnimationFrame(p))}p()})}
