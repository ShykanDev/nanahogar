import{d as B,h as d,o as v,c as y,b as N,w as O,e as C,a as r,m as F,l as w,v as x,n as k,k as j,p as _,_ as K}from"./index-DvEgSrVi.js";class h{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const M=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},l={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:M()},P=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},I=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=P(e);l.publicKey=s.publicKey,l.blockHeadless=s.blockHeadless,l.storageProvider=s.storageProvider,l.blockList=s.blockList,l.limitRate=s.limitRate,l.origin=s.origin||t},T=async(e,t,s={})=>{const i=await fetch(l.origin+e,{method:"POST",headers:s,body:t}),a=await i.text(),n=new h(i.status,a);if(i.ok)return n;throw n},L=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},U=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},V=e=>e.webdriver||!e.languages||e.languages.length===0,E=()=>new h(451,"Unavailable For Headless Browser"),A=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},D=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},J=(e,t)=>e instanceof FormData?e.get(t):e[t],R=(e,t)=>{if(D(e))return!1;A(e.list,e.watchVariable);const s=J(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},S=()=>new h(403,"Forbidden"),z=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},G=async(e,t,s)=>{const i=Number(await s.get(e)||0);return t-Date.now()+i},H=async(e,t,s)=>{if(!t.throttle||!s)return!1;z(t.throttle,t.id);const i=t.id||e;return await G(i,t.throttle,s)>0?!0:(await s.set(i,Date.now().toString()),!1)},q=()=>new h(429,"Too Many Requests"),W=async(e,t,s,i)=>{const a=P(i),n=a.publicKey||l.publicKey,m=a.blockHeadless||l.blockHeadless,p=a.storageProvider||l.storageProvider,b={...l.blockList,...a.blockList},f={...l.limitRate,...a.limitRate};return m&&V(navigator)?Promise.reject(E()):(L(n,e,t),U(s),s&&R(b,s)?Promise.reject(S()):await H(location.pathname,f,p)?Promise.reject(q()):T("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:n,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},X=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},$=e=>typeof e=="string"?document.querySelector(e):e,Q=async(e,t,s,i)=>{const a=P(i),n=a.publicKey||l.publicKey,m=a.blockHeadless||l.blockHeadless,p=l.storageProvider||a.storageProvider,b={...l.blockList,...a.blockList},f={...l.limitRate,...a.limitRate};if(m&&V(navigator))return Promise.reject(E());const g=$(s);L(n,e,t),X(g);const c=new FormData(g);return R(b,c)?Promise.reject(S()):await H(location.pathname,f,p)?Promise.reject(q()):(c.append("lib_version","4.4.1"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n),T("/api/v1.0/email/send-form",c))},Y={init:I,send:W,sendForm:Q,EmailJSResponseStatus:h},Z={class:"flex items-center justify-center py-2 bg-gray-100"},ee={class:"w-full max-w-3xl p-8 bg-white shadow-2xl rounded-xl"},te={class:"grid grid-cols-1 gap-8 md:grid-cols-2"},se={key:0,class:"mt-1 text-xs text-red-500"},oe={key:0,class:"mt-1 text-xs text-red-500"},re={class:"grid grid-cols-1 gap-8 md:grid-cols-2"},ae={key:0,class:"mt-1 text-xs text-red-500"},ie={key:0,class:"mt-1 text-xs text-red-500"},le=B({__name:"ContactView",setup(e){const t=d(""),s=d(""),i=d(""),a=d(""),n=d(!1),m=d(!1),p=d(!1),b=d(!1),f=async()=>{if(!t.value||!s.value||!i.value||!a.value){alert("Por favor, complete todos los campos.");return}const c={name:t.value,subject:s.value,email:i.value,message:a.value,reply_to:i.value};try{await Y.send("service_3nl9wkf.","template_2q2mc52",c,"fXlbInB-wrOGPiUbH"),g(),t.value="",s.value="",i.value="",a.value=""}catch(o){console.error("Error al enviar el correo:",o)}},g=()=>{_.success("Su mensaje ha sido enviado, pronto nos pondremos en contacto",{position:_.POSITION.TOP_RIGHT})};return(c,o)=>(v(),y("div",null,[N(C,null,{main:O(()=>[r("section",Z,[r("div",ee,[o[9]||(o[9]=r("h2",{class:"mb-8 text-4xl font-semibold text-center text-teal-800"},"Contacto",-1)),o[10]||(o[10]=r("p",{class:"mb-10 text-lg text-center text-gray-500"},"Llene el formulario y nos pondremos en contacto con usted.",-1)),r("form",{onSubmit:F(f,["prevent"]),class:"space-y-8"},[r("div",te,[r("div",null,[o[4]||(o[4]=r("label",{for:"name",class:"block text-sm font-medium text-teal-700"},"Nombre",-1)),w(r("input",{"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),type:"text",id:"name",name:"name",class:k([{"border-red-500":n.value},"block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition ease-in-out border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"]),required:"",placeholder:"Raúl Jiménez"},null,2),[[x,t.value]]),n.value?(v(),y("p",se,"Este campo es obligatorio.")):j("",!0)]),r("div",null,[o[5]||(o[5]=r("label",{for:"subject",class:"block text-sm font-medium text-teal-700"},"Asunto",-1)),w(r("input",{"onUpdate:modelValue":o[1]||(o[1]=u=>s.value=u),type:"text",id:"subject",name:"subject",class:k([{"border-red-500":m.value},"block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition ease-in-out border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"]),required:"",placeholder:"Ejemplo: Asesoría sobre asesoras del hogar"},null,2),[[x,s.value]]),m.value?(v(),y("p",oe,"Este campo es obligatorio.")):j("",!0)])]),r("div",re,[r("div",null,[o[6]||(o[6]=r("label",{for:"email",class:"block text-sm font-medium text-teal-700"},"Correo Electrónico",-1)),w(r("input",{"onUpdate:modelValue":o[2]||(o[2]=u=>i.value=u),type:"email",id:"email",name:"email",class:k([{"border-red-500":p.value},"block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition ease-in-out border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"]),required:"",placeholder:"correo@ejemplo.com"},null,2),[[x,i.value]]),p.value?(v(),y("p",ae,"Este campo es obligatorio.")):j("",!0)])]),r("div",null,[o[7]||(o[7]=r("label",{for:"message",class:"block text-sm font-medium text-teal-700"},"Mensaje",-1)),w(r("textarea",{id:"message",name:"message",rows:"6","onUpdate:modelValue":o[3]||(o[3]=u=>a.value=u),class:k([{"border-red-500":b.value},"block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition ease-in-out border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"]),required:"",placeholder:"Escriba su mensaje"},null,2),[[x,a.value]]),b.value?(v(),y("p",ie,"Este campo es obligatorio.")):j("",!0)]),o[8]||(o[8]=r("div",{class:"text-center"},[r("button",{type:"submit",class:"w-full px-6 py-3 text-lg font-medium text-white transition duration-300 bg-teal-800 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"}," Enviar ")],-1))],32)])])]),_:1})]))}}),ce=K(le,[["__scopeId","data-v-26c73567"]]);export{ce as default};