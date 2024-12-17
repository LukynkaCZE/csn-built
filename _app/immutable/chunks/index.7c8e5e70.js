var E=Object.defineProperty;var C=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as m,n as y,l as w,m as B,p as A,q as j,v as b,w as O,x as L,y as N,z as P,A as T,B as D}from"./scheduler.36c22887.js";let $=!1;function I(){$=!0}function M(){$=!1}function q(e,t,n,i){for(;e<t;){const a=e+(t-e>>1);n(a)<=i?e=a+1:t=a}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let a=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(a>0&&t[n[a]].claim_order<=s?a+1:q(1,a,d=>t[n[d]].claim_order,s))-1;i[r]=n[o]+1;const c=o+1;n[c]=r,a=Math.max(c,a)}const u=[],l=[];let f=t.length-1;for(let r=n[a]+1;r!=0;r=i[r-1]){for(u.push(t[r-1]);f>=r;f--)l.push(t[f]);f--}for(;f>=0;f--)l.push(t[f]);u.reverse(),l.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<l.length;r++){for(;s<u.length&&l[r].claim_order>=u[s].claim_order;)s++;const o=s<u.length?u[s]:null;e.insertBefore(l[r],o)}}function H(e,t){if($){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ne(e,t,n){$&&!n?H(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function re(){return x(" ")}function se(){return x("")}function le(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function W(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const F=["width","height"];function ae(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&F.indexOf(i)===-1?e[i]=t[i]:W(e,i,t[i])}function fe(e){return e.dataset.svelteH}function G(e){return Array.from(e.childNodes)}function J(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,a=!1){J(e);const u=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,a||(e.claim_info.last_index=l),f}}for(let l=e.claim_info.last_index-1;l>=0;l--){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,a?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,f}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function K(e,t,n,i){return S(e,a=>a.nodeName===t,a=>{const u=[];for(let l=0;l<a.attributes.length;l++){const f=a.attributes[l];n[f.name]||u.push(f.name)}u.forEach(l=>a.removeAttribute(l))},()=>i(t))}function ue(e,t,n){return K(e,t,n,V)}function Q(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ce(e){return Q(e," ")}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function _e(e,t){e.value=t??""}function de(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function he(e,t){return new e(t)}const h=new Set;let _;function me(){_={r:0,c:[],p:_}}function $e(){_.r||m(_.c),_=_.p}function U(e,t){e&&e.i&&(h.delete(e),e.i(t))}function pe(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),_.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ye(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function xe(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function X(e,t,n){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),b(()=>{const u=e.$$.on_mount.map(P).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...u):m(u),e.$$.on_mount=[]}),a.forEach(b)}function Y(e,t){const n=e.$$;n.fragment!==null&&(O(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&(T.push(e),D(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,a,u,l,f=[-1]){const r=L;N(e);const s=e.$$={fragment:null,ctx:[],props:u,update:y,not_equal:a,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};l&&l(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(c,d,...g)=>{const v=g.length?g[0]:d;return s.ctx&&a(s.ctx[c],s.ctx[c]=v)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](v),o&&Z(e,c)),d}):[],s.update(),o=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){I();const c=G(t.target);s.fragment&&s.fragment.l(c),c.forEach(R)}else s.fragment&&s.fragment.c();t.intro&&U(e.$$.fragment),X(e,t.target,t.anchor),M(),B()}N(r)}class we{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Y(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const k="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(k);export{ae as A,ye as B,fe as C,_e as D,we as S,ne as a,$e as b,ce as c,U as d,se as e,R as f,V as g,ue as h,ve as i,G as j,W as k,de as l,x as m,Q as n,oe as o,me as p,he as q,xe as r,re as s,pe as t,ge as u,X as v,Y as w,H as x,ie as y,le as z};