(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{uu0O:function(e,t,o){"use strict";o.r(t),o.d(t,"IonCheckbox",function(){return c});var i=o("gDZG"),r=o("FEEj"),n=o("ybXd");class c{constructor(){this.inputId=`ion-cb-${a++}`,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onFocus=(()=>{this.ionFocus.emit()}),this.onBlur=(()=>{this.ionBlur.emit()})}componentWillLoad(){this.emitStyle()}checkedChanged(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()}emitStyle(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}onClick(){this.setFocus(),this.checked=!this.checked,this.indeterminate=!1}setFocus(){this.buttonEl&&this.buttonEl.focus()}hostData(){const{inputId:e,disabled:t,checked:o,color:i,el:c}=this,a=e+"-lbl",s=Object(n.d)(c);return s&&(s.id=a),{role:"checkbox","aria-disabled":t?"true":null,"aria-checked":`${o}`,"aria-labelledby":a,class:Object.assign({},Object(r.c)(i),{[`${this.mode}`]:!0,"in-item":Object(r.d)("ion-item",c),"checkbox-checked":o,"checkbox-disabled":t,"checkbox-indeterminate":this.indeterminate,interactive:!0})}}render(){Object(n.e)(!0,this.el,this.name,this.checked?this.value:"",this.disabled);let e=this.indeterminate?Object(i.b)("path",{d:"M6 12L18 12"}):Object(i.b)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===this.mode&&(e=this.indeterminate?Object(i.b)("path",{d:"M2 12H22"}):Object(i.b)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),[Object(i.b)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},e),Object(i.b)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:e=>this.buttonEl=e})]}static get is(){return"ion-checkbox"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},indeterminate:{type:Boolean,attr:"indeterminate",mutable:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"onClick"}]}static get style(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(0,0,0,0.54);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"}static get styleMode(){return"md"}}let a=0}}]);