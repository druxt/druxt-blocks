(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1109:function(t,e,n){"use strict";n.r(e);n(36),n(152),n(285),n(103),n(71),n(153),n(554);var i={props:{wrapper:{type:Object,default:function(){return{component:"div",props:{}}}}}},s=n(16),r=n(17),u={name:"DruxtBlock",mixins:[i,s.b,r.b],props:{type:{type:String,default:"block--block"}},computed:{props:function(){return{block:this.entity}},suggestionDefaults:function(){var t=[];return this.tokens?(t.push(this.tokens.prefix+this.tokens.plugin+this.tokens.pluginId+this.tokens.region+this.tokens.theme),t.push(this.tokens.prefix+this.tokens.plugin+this.tokens.region+this.tokens.theme),t.push(this.tokens.prefix+this.tokens.plugin+this.tokens.pluginId+this.tokens.region),t.push(this.tokens.prefix+this.tokens.plugin+this.tokens.region),t.push(this.tokens.prefix+this.tokens.plugin+this.tokens.pluginId+this.tokens.theme),t.push(this.tokens.prefix+this.tokens.plugin+this.tokens.theme),t.push(this.tokens.prefix+this.tokens.plugin+this.tokens.pluginId),t.push(this.tokens.prefix+this.tokens.plugin),t.filter((function(t,e,n){return n.indexOf(t)===e})).map((function(t){return{value:t}}))):t},tokens:function(){if(!this.entity)return!1;var t={prefix:"DruxtBlock",plugin:this.suggest(this.entity.attributes.plugin),pluginId:"",region:this.suggest(this.entity.attributes.region),theme:this.suggest(this.entity.attributes.theme)};if(this.entity.attributes.plugin.includes(":")){var e=this.entity.attributes.plugin.split(":");t.plugin=this.suggest(e[0]),t.pluginId=this.suggest(e[1])}return t},tokenType:function(){return"block"}},created:function(){!this.$fetch&&r.b.fetch&&r.b.fetch.call(this)}},o=n(70),l=Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.wrapper.component,t._b({tag:"component"},"component",t.wrapper.props,!1),[t.entity?n(t.component,t._b({tag:"component"},"component",t.props,!1)):t._e()],1)}),[],!1,null,null,null);e.default=l.exports},554:function(t,e,n){"use strict";var i=n(282),s=n(281),r=n(15),u=n(37),o=n(557),l=n(283),p=n(29),h=n(284),c=n(105),g=n(2),a=[].push,f=Math.min,k=!g((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(u(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===t)return[i];if(!s(t))return e.call(i,t,r);for(var o,l,p,h=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,k=new RegExp(t.source,g+"g");(o=c.call(k,i))&&!((l=k.lastIndex)>f&&(h.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&a.apply(h,o.slice(1)),p=o[0].length,f=l,h.length>=r));)k.lastIndex===o.index&&k.lastIndex++;return f===i.length?!p&&k.test("")||h.push(""):h.push(i.slice(f)),h.length>r?h.slice(0,r):h}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var s=u(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,s,n):i.call(String(s),e,n)},function(t,s){var u=n(i,t,this,s,i!==e);if(u.done)return u.value;var c=r(t),g=String(this),a=o(c,RegExp),d=c.unicode,v=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(k?"y":"g"),x=new a(k?c:"^(?:"+c.source+")",v),b=void 0===s?4294967295:s>>>0;if(0===b)return[];if(0===g.length)return null===h(x,g)?[g]:[];for(var m=0,y=0,w=[];y<g.length;){x.lastIndex=k?y:0;var I,_=h(x,k?g:g.slice(y));if(null===_||(I=f(p(x.lastIndex+(k?0:y)),g.length))===m)y=l(g,y,d);else{if(w.push(g.slice(m,y)),w.length===b)return w;for(var E=1;E<=_.length-1;E++)if(w.push(_[E]),w.length===b)return w;y=m=I}}return w.push(g.slice(m)),w}]}),!k)},557:function(t,e,n){var i=n(15),s=n(73),r=n(3)("species");t.exports=function(t,e){var n,u=i(t).constructor;return void 0===u||null==(n=i(u)[r])?e:s(n)}}}]);