(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{308:function(t,n,e){"use strict";var i=e(169),l=e(168),r=e(6),s=e(23),u=e(96),c=e(170),o=e(13),a=e(171),h=e(68),p=e(1),g=[].push,d=Math.min,f=!p((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,n,e){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(s(this)),r=void 0===e?4294967295:e>>>0;if(0===r)return[];if(void 0===t)return[i];if(!l(t))return n.call(i,t,r);for(var u,c,o,a=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=new RegExp(t.source,p+"g");(u=h.call(f,i))&&!((c=f.lastIndex)>d&&(a.push(i.slice(d,u.index)),u.length>1&&u.index<i.length&&g.apply(a,u.slice(1)),o=u[0].length,d=c,a.length>=r));)f.lastIndex===u.index&&f.lastIndex++;return d===i.length?!o&&f.test("")||a.push(""):a.push(i.slice(d)),a.length>r?a.slice(0,r):a}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var l=s(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,l,e):i.call(String(l),n,e)},function(t,l){var s=e(i,t,this,l,i!==n);if(s.done)return s.value;var h=r(t),p=String(this),g=u(h,RegExp),v=h.unicode,x=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(f?"y":"g"),b=new g(f?h:"^(?:"+h.source+")",x),m=void 0===l?4294967295:l>>>0;if(0===m)return[];if(0===p.length)return null===a(b,p)?[p]:[];for(var y=0,k=0,w=[];k<p.length;){b.lastIndex=f?k:0;var E,D=a(b,f?p:p.slice(k));if(null===D||(E=d(o(b.lastIndex+(f?0:k)),p.length))===y)k=c(p,k,v);else{if(w.push(p.slice(y,k)),w.length===m)return w;for(var I=1;I<=D.length-1;I++)if(w.push(D[I]),w.length===m)return w;k=y=E}}return w.push(p.slice(y)),w}]}),!f)},309:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var i={props:{block:{type:Object,require:!0}},computed:{settings:function(){return this.block.attributes.settings}}}},410:function(t,n,e){"use strict";e.r(n);e(178),e(43),e(308);var i={name:"DruxtBlockBlockContent",mixins:[e(309).a],computed:{propsData:function(){var t=this.block.attributes.dependencies.content[0].split(":");return{type:"".concat(t[0],"--").concat(t[1]),uuid:t[2]}}}},l=e(42),r=Object(l.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("DruxtEntity",this._b({},"DruxtEntity",this.propsData,!1))],1)}),[],!1,null,null,null);n.default=r.exports}}]);