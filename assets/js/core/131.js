(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{m5Fr:function(t,n,e){"use strict";e.r(n),e.d(n,"IonRippleEffect",function(){return i}),e("gDZG");class i{constructor(){this.type="bounded"}async addRipple(t,n){return new Promise(e=>{this.queue.read(()=>{const i=this.el.getBoundingClientRect(),r=i.width,s=i.height,c=Math.sqrt(r*r+s*s),l=Math.max(s,r),f=this.unbounded?l:c+a,m=Math.floor(l*o),u=f/m;let p=t-i.left,d=n-i.top;this.unbounded&&(p=.5*r,d=.5*s);const b=p-.5*m,w=d-.5*m,h=.5*r-p,y=.5*s-d;this.queue.write(()=>{const t=this.win.document.createElement("div");t.classList.add("ripple-effect");const n=t.style;n.top=w+"px",n.left=b+"px",n.width=n.height=m+"px",n.setProperty("--final-scale",`${u}`),n.setProperty("--translate-end",`${h}px, ${y}px`),(this.el.shadowRoot||this.el).appendChild(t),setTimeout(()=>{e(()=>{!function(t){t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)}(t)})},325)})})})}get unbounded(){return"unbounded"===this.type}hostData(){return{role:"presentation",class:{[`${this.mode}`]:!0,unbounded:this.unbounded}}}static get is(){return"ion-ripple-effect"}static get encapsulation(){return"shadow"}static get properties(){return{addRipple:{method:!0},el:{elementRef:!0},queue:{context:"queue"},type:{type:String,attr:"type"},win:{context:"window"}}}static get style(){return".sc-ion-ripple-effect-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}.unbounded.sc-ion-ripple-effect-h{contain:layout size style}.ripple-effect.sc-ion-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out.sc-ion-ripple-effect{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"}}const a=10,o=.5}}]);