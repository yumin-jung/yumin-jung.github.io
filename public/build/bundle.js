var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t){t.parentNode.removeChild(t)}let u;function l(t){u=t}const a=[],i=[],f=[],d=[],$=Promise.resolve();let h=!1;function p(t){f.push(t)}const m=new Set;let g=0;function b(){const t=u;do{for(;g<a.length;){const t=a[g];g++,l(t),y(t.$$)}for(l(null),a.length=0,g=0;i.length;)i.pop()();for(let t=0;t<f.length;t+=1){const n=f[t];m.has(n)||(m.add(n),n())}f.length=0}while(a.length);for(;d.length;)d.pop()();h=!1,m.clear(),l(t)}function y(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(p)}}const _=new Set;function x(t,n){-1===t.$$.dirty[0]&&(a.push(t),h||(h=!0,$.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function v(c,a,i,f,d,$,h,m=[-1]){const g=u;l(c);const y=c.$$={fragment:null,ctx:null,props:$,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(g?g.$$.context:[])),callbacks:e(),dirty:m,skip_bound:!1,root:a.target||g.$$.root};h&&h(y.root);let v=!1;if(y.ctx=i?i(c,a.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return y.ctx&&d(y.ctx[t],y.ctx[t]=o)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](o),v&&x(c,t)),n})):[],y.update(),v=!0,o(y.before_update),y.fragment=!!f&&f(y.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);y.fragment&&y.fragment.l(t),t.forEach(s)}else y.fragment&&y.fragment.c();a.intro&&((k=c.$$.fragment)&&k.i&&(_.delete(k),k.i(E))),function(t,e,c,s){const{fragment:u,on_mount:l,on_destroy:a,after_update:i}=t.$$;u&&u.m(e,c),s||p((()=>{const e=l.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(p)}(c,a.target,a.anchor,a.customElement),b()}var k,E;l(g)}function k(n){let e;return{c(){var t,n,o,r;t="main",e=document.createElement(t),e.innerHTML='<h1 class="svelte-194osl">Hi!</h1> \n\t<h3 class="svelte-194osl">🚀</h3>',n=e,o="class",null==(r="svelte-194osl")?n.removeAttribute(o):n.getAttribute(o)!==r&&n.setAttribute(o,r)},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),v(this,t,null,k,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
