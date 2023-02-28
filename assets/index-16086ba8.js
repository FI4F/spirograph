(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Ze=document.getElementsByTagName("head")[0],Ee=document.createElement("link");Ee.rel="stylesheet";Ee.type="text/css";Ee.href="https://unpkg.com/phosphor-icons@1.4.2/src/css/icons.css";Ze.appendChild(Ee);function ce(){}function Be(e){return e()}function Ie(){return Object.create(null)}function ee(e){e.forEach(Be)}function je(e){return typeof e=="function"}function qe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function $e(e){return Object.keys(e).length===0}function o(e,t){e.appendChild(t)}function xe(e,t,n){e.insertBefore(t,n||null)}function fe(e){e.parentNode&&e.parentNode.removeChild(e)}function et(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function tt(e){return document.createTextNode(e)}function R(){return tt(" ")}function S(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function i(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function z(e){return e===""?null:+e}function nt(e){return Array.from(e.childNodes)}function N(e,t){e.value=t??""}function Pe(e,t){for(let n=0;n<e.options.length;n+=1){const s=e.options[n];if(s.__value===t){s.selected=!0;return}}e.selectedIndex=-1}function lt(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}let de;function ae(e){de=e}function st(){if(!de)throw new Error("Function called outside component initialization");return de}function ze(e){st().$$.on_mount.push(e)}const oe=[],Re=[],ye=[],He=[],ot=Promise.resolve();let ke=!1;function it(){ke||(ke=!0,ot.then(Ge))}function Te(e){ye.push(e)}const De=new Set;let se=0;function Ge(){if(se!==0)return;const e=de;do{try{for(;se<oe.length;){const t=oe[se];se++,ae(t),rt(t.$$)}}catch(t){throw oe.length=0,se=0,t}for(ae(null),oe.length=0,se=0;Re.length;)Re.pop()();for(let t=0;t<ye.length;t+=1){const n=ye[t];De.has(n)||(De.add(n),n())}ye.length=0}while(oe.length);for(;He.length;)He.pop()();ke=!1,De.clear(),ae(e)}function rt(e){if(e.fragment!==null){e.update(),ee(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Te)}}const we=new Set;let Z;function at(){Z={r:0,c:[],p:Z}}function ut(){Z.r||ee(Z.c),Z=Z.p}function ue(e,t){e&&e.i&&(we.delete(e),e.i(t))}function Se(e,t,n,s){if(e&&e.o){if(we.has(e))return;we.add(e),Z.c.push(()=>{we.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function ct(e){e&&e.c()}function Je(e,t,n,s){const{fragment:l,after_update:c}=e.$$;l&&l.m(t,n),s||Te(()=>{const u=e.$$.on_mount.map(Be).filter(je);e.$$.on_destroy?e.$$.on_destroy.push(...u):ee(u),e.$$.on_mount=[]}),c.forEach(Te)}function We(e,t){const n=e.$$;n.fragment!==null&&(ee(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(e,t){e.$$.dirty[0]===-1&&(oe.push(e),it(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ke(e,t,n,s,l,c,u,_=[-1]){const b=de;ae(e);const h=e.$$={fragment:null,ctx:[],props:c,update:ce,not_equal:l,bound:Ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(b?b.$$.context:[])),callbacks:Ie(),dirty:_,skip_bound:!1,root:t.target||b.$$.root};u&&u(h.root);let v=!1;if(h.ctx=n?n(e,t.props||{},(y,r,...g)=>{const d=g.length?g[0]:r;return h.ctx&&l(h.ctx[y],h.ctx[y]=d)&&(!h.skip_bound&&h.bound[y]&&h.bound[y](d),v&&dt(e,y)),r}):[],h.update(),v=!0,ee(h.before_update),h.fragment=s?s(h.ctx):!1,t.target){if(t.hydrate){const y=nt(t.target);h.fragment&&h.fragment.l(y),y.forEach(fe)}else h.fragment&&h.fragment.c();t.intro&&ue(e.$$.fragment),Je(e,t.target,t.anchor,t.customElement),Ge()}ae(b)}class Qe{$destroy(){We(this,1),this.$destroy=ce}$on(t,n){if(!je(n))return ce;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Xe=3.141592653589793,ie=180/Xe,$=Xe/180;function ft(e){let t,n,s,l,c,u,_,b,h,v,y,r,g,d;return{c(){t=f("div"),n=f("input"),s=R(),l=f("input"),c=R(),u=f("input"),_=R(),b=f("input"),h=R(),v=f("select"),y=f("option"),y.textContent="Degrees",r=f("option"),r.textContent="Radians",i(n,"type","number"),n.disabled=e[1],i(n,"class","text-center w-32 p-2 rounded-l-xl bg-base-100"),i(l,"type","number"),l.disabled=e[1],i(l,"step",e[3]),i(l,"class","text-center w-32 p-2 bg-base-100"),i(u,"type","number"),u.disabled=e[1],i(u,"step",e[3]),i(u,"class","text-center w-32 p-2 bg-base-100"),i(b,"type","number"),b.disabled=e[1],i(b,"step",e[3]),i(b,"class","text-center w-32 p-2 bg-base-100"),y.__value="Degrees",y.value=y.__value,r.__value="Radians",r.value=r.__value,v.disabled=e[1],i(v,"class","rounded-r-xl bg-base-100"),e[2]===void 0&&Te(()=>e[9].call(v)),i(t,"class","w-full flex flex-row p-2 rounded-xl")},m(a,w){xe(a,t,w),o(t,n),N(n,e[0].radius),o(t,s),o(t,l),N(l,e[0].phase),o(t,c),o(t,u),N(u,e[0].value),o(t,_),o(t,b),N(b,e[0].delta),o(t,h),o(t,v),o(v,y),o(v,r),Pe(v,e[2]),g||(d=[S(n,"input",e[5]),S(l,"input",e[6]),S(u,"input",e[7]),S(b,"input",e[8]),S(v,"change",e[9]),S(v,"change",e[4])],g=!0)},p(a,[w]){w&2&&(n.disabled=a[1]),w&1&&z(n.value)!==a[0].radius&&N(n,a[0].radius),w&2&&(l.disabled=a[1]),w&8&&i(l,"step",a[3]),w&1&&z(l.value)!==a[0].phase&&N(l,a[0].phase),w&2&&(u.disabled=a[1]),w&8&&i(u,"step",a[3]),w&1&&z(u.value)!==a[0].value&&N(u,a[0].value),w&2&&(b.disabled=a[1]),w&8&&i(b,"step",a[3]),w&1&&z(b.value)!==a[0].delta&&N(b,a[0].delta),w&2&&(v.disabled=a[1]),w&4&&Pe(v,a[2])},i:ce,o:ce,d(a){a&&fe(t),g=!1,ee(d)}}}function pt(e,t,n){let s,{oscillator:l}=t,{disabled:c=!1}=t,u;ze(()=>{n(2,u=l.units)});function _(g){if(u!=l.units)switch(u){case"Radians":n(0,l.units="Radians",l),n(0,l.phase=+(l.phase*$).toFixed(5),l),n(0,l.delta=+(l.delta*$).toFixed(5),l),n(0,l.value=+(l.value*$).toFixed(5),l);break;case"Degrees":n(0,l.units="Degrees",l),n(0,l.phase=+(l.phase*ie).toFixed(5),l),n(0,l.delta=+(l.delta*ie).toFixed(5),l),n(0,l.value=+(l.value*ie).toFixed(5),l)}}function b(){l.radius=z(this.value),n(0,l)}function h(){l.phase=z(this.value),n(0,l)}function v(){l.value=z(this.value),n(0,l)}function y(){l.delta=z(this.value),n(0,l)}function r(){u=lt(this),n(2,u)}return e.$$set=g=>{"oscillator"in g&&n(0,l=g.oscillator),"disabled"in g&&n(1,c=g.disabled)},e.$$.update=()=>{e.$$.dirty&1&&n(3,s=l.units==="Radians"?+$.toFixed(5):1)},[l,c,u,s,_,b,h,v,y,r]}class ht extends Qe{constructor(t){super(),Ke(this,t,pt,ft,qe,{oscillator:0,disabled:1})}}let ve;const _t=new Uint8Array(16);function gt(){if(!ve&&(ve=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ve))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ve(_t)}const F=[];for(let e=0;e<256;++e)F.push((e+256).toString(16).slice(1));function bt(e,t=0){return(F[e[t+0]]+F[e[t+1]]+F[e[t+2]]+F[e[t+3]]+"-"+F[e[t+4]]+F[e[t+5]]+"-"+F[e[t+6]]+F[e[t+7]]+"-"+F[e[t+8]]+F[e[t+9]]+"-"+F[e[t+10]]+F[e[t+11]]+F[e[t+12]]+F[e[t+13]]+F[e[t+14]]+F[e[t+15]]).toLowerCase()}const mt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Oe={randomUUID:mt};function vt(e,t,n){if(Oe.randomUUID&&!t&&!e)return Oe.randomUUID();e=e||{};const s=e.random||(e.rng||gt)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){n=n||0;for(let l=0;l<16;++l)t[n+l]=s[l];return t}return bt(s)}function Ne(e,t,n){const s=e.slice();return s[36]=t[n],s}function yt(e){let t,n,s,l;return{c(){t=f("button"),n=f("span"),n.innerHTML='<i class="ph-play"></i>',i(t,"class","flex-1 btn btn-ghost text-3xl"),t.disabled=e[1]},m(c,u){xe(c,t,u),o(t,n),s||(l=S(t,"click",e[9]),s=!0)},p(c,u){u[0]&2&&(t.disabled=c[1])},d(c){c&&fe(t),s=!1,l()}}}function wt(e){let t,n,s,l,c;return{c(){t=f("button"),n=f("span"),n.innerHTML='<i class="ph-pause"></i>',i(t,"class","flex-1 btn btn-ghost text-3xl"),t.disabled=s=!e[1]},m(u,_){xe(u,t,_),o(t,n),l||(c=S(t,"click",e[10]),l=!0)},p(u,_){_[0]&2&&s!==(s=!u[1])&&(t.disabled=s)},d(u){u&&fe(t),l=!1,c()}}}function Ve(e){let t,n;return t=new ht({props:{oscillator:e[36],disabled:e[1]}}),{c(){ct(t.$$.fragment)},m(s,l){Je(t,s,l),n=!0},p(s,l){const c={};l[0]&1&&(c.oscillator=s[36]),l[0]&2&&(c.disabled=s[1]),t.$set(c)},i(s){n||(ue(t.$$.fragment,s),n=!0)},o(s){Se(t.$$.fragment,s),n=!1},d(s){We(t,s)}}}function Tt(e){let t,n,s,l,c,u,_,b,h,v,y,r,g,d,a,w,V,M,A,pe,x,te,J,P,W,he,B,_e,j,G,ge,q,K,ne,be,le,Ue,re,L,T,m,k,C,H,Le,I,Ae,Fe;function Me(p,E){return p[1]?wt:yt}let me=Me(e),O=me(e),Q=e[0],U=[];for(let p=0;p<Q.length;p+=1)U[p]=Ve(Ne(e,Q,p));const Ye=p=>Se(U[p],1,1,()=>{U[p]=null});return{c(){t=f("div"),n=f("input"),s=R(),l=f("div"),c=f("label"),c.innerHTML='<span><i class="ph-list"></i></span>',u=R(),_=f("canvas"),b=R(),h=f("div"),v=f("label"),y=R(),r=f("div"),g=f("div"),O.c(),d=R(),a=f("button"),w=f("span"),w.innerHTML='<i class="ph-skip-forward"></i>',V=R(),M=f("button"),A=f("span"),A.innerHTML='<i class="ph-arrows-clockwise"></i>',pe=R(),x=f("input"),J=R(),P=f("div"),W=f("button"),W.innerHTML='<span><i class="ph-crosshair-simple"></i></span>',he=R(),B=f("button"),B.innerHTML='<span><i class="ph-line-segments"></i></span>',_e=R(),j=f("button"),G=f("span"),G.innerHTML='<i class="ph-eraser"></i>',ge=R(),q=f("button"),K=f("span"),K.innerHTML='<i class="ph-floppy-disk"></i>',be=R(),le=f("div"),le.innerHTML=`<span class="flex-1 text-center">Radius</span> 
        <span class="flex-1 text-center">Phase</span> 
        <span class="flex-1 text-center">Value</span> 
        <span class="flex-1 text-center">Delta</span> 
        <span class="flex-1 text-center">Units</span>`,Ue=R(),re=f("div");for(let p=0;p<U.length;p+=1)U[p].c();L=R(),T=f("div"),m=f("button"),k=f("span"),k.innerHTML='<i class="ph-plus"></i>',C=R(),H=f("button"),Le=f("span"),Le.innerHTML='<i class="ph-minus"></i>',i(n,"id","my-drawer"),i(n,"type","checkbox"),i(n,"class","drawer-toggle"),i(c,"for","my-drawer"),i(c,"class","btn drawer-button text-3xl float-right order-last"),i(_,"class","absolute w-screen h-screen pointer-events-none"),i(l,"class","drawer-content"),i(v,"for","my-drawer"),i(v,"class","drawer-overlay"),i(a,"class","flex-1 btn btn-ghost text-3xl"),a.disabled=e[1],i(M,"class","flex-1 btn btn-ghost text-3xl"),M.disabled=e[1],i(g,"class","flex flex-row gap-2 w-full"),i(x,"type","range"),i(x,"min",".01"),i(x,"max","1"),i(x,"step",".01"),i(x,"title",te=`${e[4]}`),i(x,"class","range range-xs"),i(W,"class","flex-1 btn btn-ghost text-3xl"),i(B,"class","flex-1 btn btn-ghost text-3xl"),i(j,"class","flex-1 btn btn-ghost text-3xl"),j.disabled=e[1],i(P,"class","flex flex-row gap-2 w-full"),i(q,"class","btn btn-ghost text-3xl w-full"),q.disabled=ne=e[1]||e[6],i(le,"class","flex flex-row gap-2 w-full"),i(m,"class","flex-1 btn btn-ghost text-3xl"),m.disabled=e[1],i(H,"class","flex-1 btn btn-ghost text-3xl"),H.disabled=e[1],i(T,"class","flex flex-row gap-2 w-full"),i(r,"class","flex flex-col bg-base-200 h-full p-4 gap-2 rounded-xl items-center"),i(h,"class","drawer-side"),i(t,"class","drawer drawer-end")},m(p,E){xe(p,t,E),o(t,n),o(t,s),o(t,l),o(l,c),o(l,u),o(l,_),e[20](_),o(t,b),o(t,h),o(h,v),o(h,y),o(h,r),o(r,g),O.m(g,null),o(g,d),o(g,a),o(a,w),o(g,V),o(g,M),o(M,A),o(r,pe),o(r,x),N(x,e[4]),o(r,J),o(r,P),o(P,W),o(P,he),o(P,B),o(P,_e),o(P,j),o(j,G),o(r,ge),o(r,q),o(q,K),o(r,be),o(r,le),o(r,Ue),o(r,re);for(let D=0;D<U.length;D+=1)U[D].m(re,null);o(r,L),o(r,T),o(T,m),o(m,k),o(T,C),o(T,H),o(H,Le),I=!0,Ae||(Fe=[S(a,"click",e[8]),S(M,"click",e[11]),S(x,"change",e[21]),S(x,"input",e[21]),S(W,"click",e[22]),S(B,"click",e[23]),S(j,"click",e[12]),S(q,"click",e[15]),S(m,"click",e[13]),S(H,"click",e[14])],Ae=!0)},p(p,E){if(me===(me=Me(p))&&O?O.p(p,E):(O.d(1),O=me(p),O&&(O.c(),O.m(g,d))),(!I||E[0]&2)&&(a.disabled=p[1]),(!I||E[0]&2)&&(M.disabled=p[1]),(!I||E[0]&16&&te!==(te=`${p[4]}`))&&i(x,"title",te),E[0]&16&&N(x,p[4]),(!I||E[0]&2)&&(j.disabled=p[1]),(!I||E[0]&66&&ne!==(ne=p[1]||p[6]))&&(q.disabled=ne),E[0]&3){Q=p[0];let D;for(D=0;D<Q.length;D+=1){const Ce=Ne(p,Q,D);U[D]?(U[D].p(Ce,E),ue(U[D],1)):(U[D]=Ve(Ce),U[D].c(),ue(U[D],1),U[D].m(re,null))}for(at(),D=Q.length;D<U.length;D+=1)Ye(D);ut()}(!I||E[0]&2)&&(m.disabled=p[1]),(!I||E[0]&2)&&(H.disabled=p[1])},i(p){if(!I){for(let E=0;E<Q.length;E+=1)ue(U[E]);I=!0}},o(p){U=U.filter(Boolean);for(let E=0;E<U.length;E+=1)Se(U[E]);I=!1},d(p){p&&fe(t),e[20](null),O.d(),et(U,p),Ae=!1,ee(Fe)}}}const X=2048,Y=2048;function Et(e,t,n){const u="Degrees";let _=[];G(),G(),G();let b=!1,h=!0,v=!1,y=1,r,g,d,a,w,V,M,A={x:0,y:0};ze(()=>{new ResizeObserver(()=>te()).observe(r),g=new OffscreenCanvas(X,Y),w=n(5,r.width=r.getBoundingClientRect().width,r),V=n(5,r.height=r.getBoundingClientRect().height,r),M=Math.min(w/X,V/Y),d=r.getContext("2d",{antialias:!0}),a=g.getContext("2d",{antialias:!0}),d.imageSmoothingEnabled=!0,A=J()});function pe(){if(!a)return;a.resetTransform(),a.translate(X/2,Y/2),a.strokeStyle="#fff",a.lineCap="round",a.lineJoin="round",a.lineWidth=2,a.beginPath();const L=Math.ceil(1/y);for(let T=0;T<L;T++){const m={x:0,y:0};for(let k of _){k.value+=k.delta*y;const C=k.phase+k.value;k.units==="Degrees"||C*ie;const H=k.units==="Radians"?C:C*$;m.x+=k.radius*Math.cos(H),m.y+=k.radius*Math.sin(H)}a.moveTo(A.x,A.y),a.lineTo(m.x,m.y),A=m}a.closePath(),a.stroke(),n(0,_=[..._])}function x(){if(d){if(d.resetTransform(),d.clearRect(0,0,w,V),d.translate((w-X*M)/2,(V-Y*M)/2),d.scale(M,M),d.drawImage(g,0,0),d.translate(X/2,Y/2),d.strokeStyle="#fff",d.lineCap="round",d.lineJoin="round",d.lineWidth=2,v){d.beginPath();let L={x:0,y:0};for(let T of _){const m=T.phase+T.value;T.units==="Degrees"||m*ie;const k=T.units==="Radians"?m:m*$,C={...L};C.x+=T.radius*Math.cos(k),C.y+=T.radius*Math.sin(k),d.moveTo(L.x,L.y),d.lineTo(C.x,C.y),L=C}d.closePath(),d.stroke()}h&&(d.beginPath(),d.moveTo(-16,0),d.lineTo(16,0),d.moveTo(0,-16),d.lineTo(0,16),d.moveTo(A.x-8,A.y),d.lineTo(A.x+8,A.y),d.moveTo(A.x,A.y-8),d.lineTo(A.x,A.y+8),d.closePath(),d.stroke())}}function te(){r&&(w=n(5,r.width=r.getBoundingClientRect().width,r),V=n(5,r.height=r.getBoundingClientRect().height,r),M=Math.min(w/X,V/Y),d=r.getContext("2d",{antialias:!0}),a=g.getContext("2d",{antialias:!0}),d.imageSmoothingEnabled=!0,x())}function J(){const L={x:0,y:0};for(let T of _){const m=T.phase+T.value;T.units==="Degrees"||m*ie;const k=T.units==="Radians"?m:m*$;L.x+=T.radius*Math.cos(k),L.y+=T.radius*Math.sin(k)}return L}function P(){A=J(),n(1,b=!1),B()}function W(){A=J(),n(1,b=!0),B()}function he(){n(1,b=!1)}function B(){pe(),x(),b&&requestAnimationFrame(()=>B())}function _e(){for(let L of _)L.value=0;n(0,_=[..._]),A=J(),x()}function j(){a.resetTransform(),a.clearRect(0,0,X,Y),x()}function G(){n(0,_=[..._,q()])}function ge(){_.length<2||(_.pop(),n(0,_=[..._]))}function q(){return{radius:256,phase:-90,value:0,delta:_.length+1,units:u}}let K=!1;async function ne(){if(!g)return;n(6,K=!0);const L=await g.convertToBlob({type:"image/png"}),T=URL.createObjectURL(L),m=document.createElement("a");m.href=T,m.download=vt(),m.click(),m.remove(),URL.revokeObjectURL(T),n(6,K=!1)}function be(L){Re[L?"unshift":"push"](()=>{r=L,n(5,r)})}function le(){y=z(this.value),n(4,y)}return[_,b,h,v,y,r,K,x,P,W,he,_e,j,G,ge,ne,256,-90,0,u,be,le,()=>{n(2,h=!h),x()},()=>{n(3,v=!v),x()}]}class xt extends Qe{constructor(t){super(),Ke(this,t,Et,Tt,qe,{DEFAULT_RADIUS:16,DEFAULT_PHASE:17,DEFAULT_VALUE:18,DEFAULT_UNITS:19},null,[-1,-1])}get DEFAULT_RADIUS(){return this.$$.ctx[16]}get DEFAULT_PHASE(){return this.$$.ctx[17]}get DEFAULT_VALUE(){return this.$$.ctx[18]}get DEFAULT_UNITS(){return this.$$.ctx[19]}}new xt({target:document.getElementById("app")});
