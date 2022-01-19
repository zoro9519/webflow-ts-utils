var D=Object.defineProperty;var N=(t,e,r)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var s=(t,e,r)=>(N(t,typeof e!="symbol"?e+"":e,r),r);var u=(t,e,r)=>new Promise((n,i)=>{var o=c=>{try{l(r.next(c))}catch(f){i(f)}},a=c=>{try{l(r.throw(c))}catch(f){i(f)}},l=c=>c.done?n(c.value):Promise.resolve(c.value).then(o,a);l((r=r.apply(t,e)).next())});var b=(t,e="flex")=>new Promise(r=>{t.style.opacity="0",t.style.display=e,function n(){let i=parseFloat(t.style.opacity);if(i>=1){r();return}let o=i+.1;t.style.opacity=o.toString(),requestAnimationFrame(n)}()}),E=t=>new Promise(e=>{t.style.opacity="1",function r(){let i=parseFloat(t.style.opacity)-.1;t.style.opacity=i.toString(),i<=0?(t.style.display="none",e()):requestAnimationFrame(r)}()});var L=class{constructor({element:e,copyData:r,successText:n,errorText:i,notificationDuration:o,successCSSClass:a}){s(this,"element");s(this,"hiddenTrigger");s(this,"successCSSClass");s(this,"textNode");s(this,"copyData");s(this,"successText","Copied!");s(this,"errorText","Something went wrong");s(this,"notificationDuration",500);s(this,"notificationActive",!1);s(this,"originalText");this.element=e,this.copyData=r,n&&(this.successText=n),i&&(this.errorText=i),o&&(this.notificationDuration=o),a&&(this.successCSSClass=a),this.textNode=g(e)||e,this.originalText=this.textNode.textContent||"",this.hiddenTrigger=this.createHiddenTrigger(),this.init()}init(){let{element:e,hiddenTrigger:r}=this;e.addEventListener("click",()=>this.handleClick()),r.addEventListener("copy",n=>this.handleCopy(n))}createHiddenTrigger(){let{element:e}=this,r=document.createElement("button");return r.contentEditable="true",Object.assign(r.style,{position:"absolute",clip:"rect(1px, 1px, 1px, 1px)",clipPath:"inset(0px 0px 99.9% 99.9%)",overflow:"hidden",height:"1px",width:"1px",padding:"0",border:"0"}),(e.parentElement||document.body).appendChild(r),r}handleClick(){this.hiddenTrigger.focus(),document.execCommand("copy")}handleCopy(e){var r;try{(r=e.clipboardData)==null||r.setData("application/json",JSON.stringify(this.copyData).trim()),e.preventDefault(),this.triggerNotification("success")}catch(n){this.triggerNotification("error")}}triggerNotification(e){let{notificationActive:r,notificationDuration:n,originalText:i,element:o,successCSSClass:a,successText:l,errorText:c}=this;r||(this.notificationActive=!0,this.textNode.textContent=e==="success"?l:c,a&&o.classList.add(a),window.setTimeout(()=>{this.textNode.textContent=i,a&&o.classList.remove(a),this.notificationActive=!1},n))}updateCopyData(e){this.copyData=e}updateTextContent(e){this.textNode.textContent=e,this.originalText=e}};var m=class{static activateAlerts(){this.alertsActivated=!0}static alert(e,r){if(this.alertsActivated&&window.alert(e),r==="error")throw new Error(e)}};s(m,"alertsActivated",!1);var Ee="w--current",Se="w-richtext",Ce="w-embed",we={slider:"w-slider",slide:"w-slide",sliderMask:"w-slider-mask",sliderNav:"w-slider-nav",sliderDot:"w-slider-dot",activeSliderDot:"w-active"},ve={tabs:"w-tabs",tabsContent:"w-tab-content",tabPane:"w-tab-pane",tabsMenu:"w-tab-menu",tabLink:"w-tab-link",activeTab:"w--tab-active"},Te={navMenu:"w-nav-menu"},y={wrapper:"w-dyn-list",list:"w-dyn-items",item:"w-dyn-item",paginationWrapper:"w-pagination-wrapper",paginationNext:"w-pagination-next",paginationPrevious:"w-pagination-previous",pageCount:"w-page-count",emptyState:"w-dyn-empty"},k={formBlock:"w-form",checkboxField:"w-checkbox",checkboxInput:"w-checkbox-input",radioField:"w-radio",radioInput:"w-radio-input",checkboxOrRadioLabel:"w-form-label",checkboxOrRadioFocus:"w--redirected-focus",checkboxOrRadioChecked:"w--redirected-checked",successMessage:"w-form-done",errorMessage:"w-form-fail"},Le={dropdown:"w-dropdown",dropdownToggle:"w-dropdown-toggle",dropdownList:"w-dropdown-list"},ke={addToCartForm:"w-commerce-commerceaddtocartform"},Pe={trigger:"w-lightbox"};var p=(t,e)=>(Array.isArray(e)||(e=[e]),e.map(n=>t.dispatchEvent(new Event(n,{bubbles:!0}))).every(n=>n));var{radioInput:I,checkboxOrRadioFocus:O,checkboxOrRadioChecked:A}=k,W=(t,e=[])=>{let{type:r}=t;if(t instanceof HTMLInputElement&&["checkbox","radio"].includes(r)){if(!t.checked||(t.checked=!1,p(t,["click","input","change"].filter(o=>!e.includes(o))),r==="checkbox"))return;let{parentElement:n}=t;if(!n)return;let i=n.querySelector(`.${I}`);if(!i)return;i.classList.remove(O,A);return}t.value="",p(t,["input","change"].filter(n=>!e.includes(n)))};var H=(t,e=!0)=>t.cloneNode(e);var S=(t,e)=>!!t&&e.includes(t);function _(t,e,r,n=!0){let i=r?[r]:[];if(!t)return i;let o=t.split(",").reduce((a,l)=>{let c=l.trim();return(!n||c)&&a.push(c),a},[]);if(e){let a=o.filter(l=>S(l,e));return a.length?a:i}return o}var R=t=>{let e=t.split("-"),r=parseInt(e[e.length-1]);if(!isNaN(r))return r};var g=t=>{var r;let e;for(let n of t.childNodes)if(n instanceof HTMLElement&&n.childNodes.length?e=g(n):n.nodeType===Node.TEXT_NODE&&((r=n.textContent)==null?void 0:r.trim())&&(e=n),e)break;return e};var q=t=>{let e=[],r=({parentElement:n})=>{n&&!n.isEqualNode(document.body)&&(e.push(n),r(n))};return r(t),e};var B=t=>{let e=t.getBoundingClientRect(),r=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop;return e.top+r};var K=t=>{var r;let{value:e}=t;if(t.type==="checkbox"&&(e=t.checked.toString()),t.type==="radio"){let n=(r=t.closest("form"))==null?void 0:r.querySelector(`input[name="${t.name}"]:checked`);e=n instanceof HTMLInputElement?n.value:""}return e.toString()};var V=t=>{if(d(t))return;let e=t,r=({parentElement:n})=>{!n||d(n)||(e=n,r(n))};return r(t),e};var $=t=>Object.entries(t);var j=t=>Object.keys(t);var X=t=>{let{overflow:e}=getComputedStyle(t);return e==="auto"||e==="scroll"};var d=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length);var x=(t,e,r=document)=>{let n=r.querySelector(t);if(n instanceof e)return n};var J=(t,e)=>{t.querySelectorAll(e||"*").forEach(n=>n.remove())};var U=t=>t.replace(/\s/g,"");var G=t=>t.replace(/\/+$/,"");var Q=(t,e)=>t.every(r=>e.includes(r))&&e.every(r=>t.includes(r));var Y=(t,e=!0)=>(e!==t.checked&&(t.checked=e,p(t,["click","input","change"])),t.type==="checkbox"?t.checked:t.value);var z=(t,e)=>{let{type:r}=t;if(typeof e=="boolean"){if(!(t instanceof HTMLInputElement)||r!=="radio"&&r!=="checkbox"||r==="checkbox"&&e===!1||e===t.checked)return;t.checked=e}else{if(r==="radio"||r==="checkbox"||t.value===e)return;t.value=e}p(t,["click","input","change"])};var Z=t=>{throw new Error(t)};var C=t=>new Promise(e=>setTimeout(e,t));var h=class{constructor({element:e,duration:r}){s(this,"element");s(this,"active",!1);s(this,"running",!1);s(this,"runningPromise");s(this,"duration");s(this,"isActive",()=>this.active);s(this,"isRunning",()=>this.running);s(this,"untilFinished",()=>this.runningPromise);var n,i;this.element=typeof e=="string"?x(e,HTMLElement)||m.alert(`No interaction with the ${e} selector was found.`,"error"):e,this.duration={first:typeof r=="number"?r:(n=r==null?void 0:r.first)!=null?n:0,second:typeof r=="number"?r:(i=r==null?void 0:r.second)!=null?i:0}}trigger(e){return u(this,null,function*(){return e==="first"&&this.active||e==="second"&&!this.active?!1:(e||(e=this.active?"second":"first"),p(this.element,"click"),this.running=!0,this.runningPromise=C(this.duration[e]),yield this.runningPromise,this.running=!1,this.active=e==="first",!0)})}};var w=class{constructor({element:e,interaction:r,displayProperty:n,noTransition:i,startsHidden:o}){s(this,"interaction");s(this,"noTransition");s(this,"displayProperty");s(this,"visible");s(this,"element");s(this,"isVisible",()=>this.visible);if(this.element=typeof e=="string"?x(e,HTMLElement)||m.alert(`No element with the ${e} selector was found.`,"error"):e,this.noTransition=i,this.displayProperty=n||"block",o?(this.element.style.display="none",this.visible=!1):this.visible=d(this.element),r){let{element:a,duration:l}=r;this.interaction=new h({element:a,duration:l})}}show(){return u(this,null,function*(){this.visible||(this.interaction?yield this.interaction.trigger("first"):this.noTransition?this.element.style.display=this.displayProperty:yield b(this.element,this.displayProperty),this.visible=!0)})}hide(){return u(this,null,function*(){!this.visible||(this.interaction?yield this.interaction.trigger("second"):this.noTransition?this.element.style.display="none":yield E(this.element),this.visible=!1)})}};s(w,"displayProperties",["block","flex","grid","inline-block","inline"]);var P=class{constructor(e){this.value=e;s(this,"subscribeCallbacks",[])}get(){return this.value}set(e){this.value=e,this.subscribeCallbacks.forEach(r=>r(e))}update(e){this.set(e(this.value))}subscribe(e){return this.subscribeCallbacks.push(e),e(this.value),()=>{this.subscribeCallbacks=this.subscribeCallbacks.filter(r=>e!==r)}}};var ee=t=>t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement;var te=t=>t!=null;var F=new Map([["tiny","(max-width: 479px)"],["small","(max-width: 767px)"],["medium","(max-width: 991px)"],["main","(min-width: 992px)"]]);var{wrapper:re,list:ne,paginationWrapper:oe,paginationNext:ie,paginationPrevious:se,emptyState:ae,pageCount:le}=y;function v(t,e,r=document){let n=typeof t=="string"?r.querySelector(t):t;if(!n)return;let i=n.closest(`.${re}`);if(!i)return;let o=i.querySelector(`.${ne}`);return e==="wrapper"?i:e==="list"?o:e==="items"?[...(o==null?void 0:o.children)||[]]:e==="pageCount"?i.querySelector(`.${le}`):e==="empty"?i.querySelector(`:scope > .${ae}`):e==="pagination"?i.querySelector(`.${oe}`):i.querySelector(`.${e==="next"?ie:se}`)}var ce=(t,e=document)=>{t=t.filter(o=>o);let r=t.join(", ")||`.${y.wrapper}`;return[...e.querySelectorAll(r)].reduce((o,a)=>{if(!a)return o;let l=v(a,"wrapper");return!l||o.includes(l)||o.push(l),o},[])};var pe=()=>{for(let[t,e]of F)if(window.matchMedia(e).matches)return t;return"main"};var ue=()=>{var e;let t="Last Published:";for(let r of document.childNodes)if(r.nodeType===Node.COMMENT_NODE&&((e=r.textContent)==null?void 0:e.includes(t))){let n=r.textContent.trim().split(t)[1];if(n)return new Date(n)}};var T=()=>document.documentElement.getAttribute("data-wf-site");var me=t=>u(void 0,null,function*(){var r,n,i;let{Webflow:e}=window;if(!(!e||!("destroy"in e)||!("ready"in e)||!("require"in e))&&!(t&&!t.length)){if(t||(e.destroy(),e.ready()),!t||t.includes("ix2")){let o=e.require("ix2");if(o){let{store:a,actions:l}=o,{eventState:c}=a.getState().ixSession,f=Object.entries(c);t||o.destroy(),o.init(),yield Promise.all(f.map(M=>a.dispatch(l.eventStateChanged(...M))))}}if(!t||t.includes("commerce")){let o=e.require("commerce"),a=T();o&&a&&(o.destroy(),o.init({siteId:a,apiUrl:"https://render.webflow.com"}))}return(t==null?void 0:t.includes("lightbox"))&&((r=e.require("lightbox"))==null||r.ready()),(t==null?void 0:t.includes("slider"))&&((n=e.require("slider"))==null||n.redraw()),(t==null?void 0:t.includes("tabs"))&&((i=e.require("tabs"))==null||i.redraw()),new Promise(o=>e.push(()=>o(void 0)))}});export{y as CMS_CSS_CLASSES,ke as COMMERCE_CSS_CLASSES,Ee as CURRENT_CSS_CLASS,L as CopyJSONButton,Le as DROPDOWN_CSS_CLASSES,m as Debug,w as DisplayController,k as FORM_CSS_CLASSES,Ce as HTML_EMBED_CSS_CLASS,h as Interaction,Pe as LIGHTBOX_CSS_CLASSES,Te as NAVBAR_CSS_CLASSES,Se as RICH_TEXT_BLOCK_CSS_CLASS,we as SLIDER_CSS_CLASSES,ve as TABS_CSS_CLASSES,F as WEBFLOW_BREAKPOINTS,P as WritableStore,W as clearFormField,H as cloneNode,_ as extractCommaSeparatedValues,R as extractNumberSuffix,b as fadeIn,E as fadeOut,g as findTextNode,q as getAllParents,v as getCollectionElements,ce as getCollectionListWrappers,pe as getCurrentBreakpoint,B as getDistanceFromTop,K as getFormFieldValue,V as getHiddenParent,$ as getObjectEntries,j as getObjectKeys,ue as getPublishDate,T as getSiteId,ee as isFormField,S as isKeyOf,te as isNotEmpty,X as isScrollable,d as isVisible,x as queryElement,J as removeChildElements,U as removeSpaces,G as removeTrailingSlash,me as restartWebflow,Q as sameValues,Y as selectInputElement,z as setFormFieldValue,p as simulateEvent,Z as throwError,C as wait};