(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"+hPd":function(e,i,t){"use strict";t.r(i),t.d(i,"IonSplitPane",function(){return l}),t("gDZG");const s="split-pane-main",n="split-pane-side",a={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""};class l{constructor(){this.visible=!1,this.disabled=!1,this.when=a.lg}visibleChanged(e){const i={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(i)}componentDidLoad(){this.styleChildren(),this.updateState()}componentDidUnload(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.isServer)return;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)return void(this.visible=!1);const e=this.when;if("boolean"==typeof e)return void(this.visible=e);const i=a[e]||e;if(0!==i.length){if(this.win.matchMedia){const e=e=>{this.visible=e.matches},t=this.win.matchMedia(i);t.addListener(e),this.rmL=(()=>t.removeListener(e)),this.visible=t.matches}}else this.visible=!1}isPane(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains(n)}styleChildren(){if(this.isServer)return;const e=this.contentId,i=this.el.children,t=this.el.childElementCount;let s=!1;for(let n=0;n<t;n++){const t=i[n],a=void 0!==e?t.id===e:t.hasAttribute("main");if(a){if(s)return void console.warn("split pane cannot have more than one main node");s=!0}o(t,a)}s||console.warn("split pane does not have a specified main node")}hostData(){return{class:{[`${this.mode}`]:!0,[`split-pane-${this.mode}`]:!0,"split-pane-visible":this.visible}}}static get is(){return"ion-split-pane"}static get properties(){return{contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["updateState"]},el:{elementRef:!0},isServer:{context:"isServer"},visible:{state:!0,watchCallbacks:["visibleChanged"]},when:{type:"Any",attr:"when",watchCallbacks:["updateState"]},win:{context:"window"}}}static get events(){return[{name:"ionSplitPaneVisible",method:"ionSplitPaneVisible",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-md{--border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"}static get styleMode(){return"md"}}function o(e,i){let t,a;i?(t=s,a=n):(t=n,a=s);const l=e.classList;l.add(t),l.remove(a)}}}]);