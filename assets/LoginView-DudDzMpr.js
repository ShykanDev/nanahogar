import{d as I,h as u,u as l,o as p,f as _,w as c,e as C,j as T,r as N,a as s,c as P,k as O,g as f,l as x,v,b as g,m as V,p as t,_ as A}from"./index-DvEgSrVi.js";import{g as U,s as S}from"./index-2cab5241-QFCFTrMw.js";const E={class:"flex items-center justify-center py-16 bg-gray-50 alfa"},R={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-35 font-poppins"},L={class:"z-10 w-3/6 p-8 bg-white rounded-lg shadow-2xl fade-in font-poppins animate-fade"},q={class:"mb-4"},z={class:"flex items-center overflow-hidden border border-gray-300 rounded-lg"},j={class:"mb-4"},B={class:"flex items-center overflow-hidden border border-gray-300 rounded-lg"},$={class:"mb-6 text-right"},G={class:"mb-6"},H={class:"text-center"},M=I({__name:"LoginView",setup(Z){const o=u(""),a=u(""),b=U(),i=l(),y=T(),w=async()=>{if(o.value===""||a.value===""){t.error("Por favor, rellene todos los campos",{position:t.POSITION.TOP_RIGHT,theme:"dark",autoClose:2e3});return}if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(o.value)){t.error("Por favor, ingrese un correo valido",{position:t.POSITION.TOP_RIGHT,theme:"dark",autoClose:2e3});return}try{const e=(await S(b,o.value,a.value)).user;console.log(e),e.emailVerified?(console.log("El correo está verificado. Acceso permitido."),r.value=!1,l().setUserAuth(),e.displayName&&(l().setUserName(e.displayName),setTimeout(()=>{k()},200),y.push({name:"histories"}),console.log(i.isUserAuthenticated))):(console.log("El correo no está verificado. Por favor verifica tu correo."),r.value=!0,console.log(i.isUserAuthenticated))}catch(n){console.log(n),console.log(i.isUserAuthenticated),t.error("Error al iniciar sesión. Por favor, verifique sus credenciales.",{position:t.POSITION.TOP_RIGHT,theme:"dark",autoClose:2e3})}},k=()=>{t.success(`Le damos la bienvenida ${l().getUserName}!`,{position:t.POSITION.TOP_CENTER,theme:"dark",autoClose:5e3,transition:t.TRANSITIONS.FLIP})},r=u(!1),h=()=>{r.value=!r.value};return(n,e)=>{const m=N("RouterLink");return p(),_(C,null,{main:c(()=>[s("section",E,[r.value?(p(),P("article",R,[s("div",{class:"flex flex-col items-center max-w-md p-6 mx-4 bg-white rounded-lg shadow-2xl"},[e[2]||(e[2]=s("i",{class:"text-4xl text-yellow-500 fas fa-lock"},null,-1)),e[3]||(e[3]=s("h2",{class:"mt-4 text-lg text-center text-gray-800 font-poppins"}," Solo un paso más. ",-1)),e[4]||(e[4]=s("p",{class:"text-sm text-center text-gray-600"}," Por medidas de seguridad, necesitamos que verifique su correo a través del enlace que hemos enviado. ",-1)),s("button",{class:"px-6 py-2 mt-5 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2",onClick:h}," Cerrar ")])])):O("",!0),s("div",L,[e[11]||(e[11]=s("div",{class:"mb-6 text-center"},[s("h1",{class:"text-sm font-semibold text-sky-800"},[s("i",{class:"text-sky-500 fas fa-exclamation-circle"}),f(" Inicio de sesión requerido para poder comentar y compartir experiencias ")])],-1)),e[12]||(e[12]=s("div",{class:"mb-6 text-center"},[s("h1",{class:"text-2xl font-bold text-slate-700 font-poppins"},"Iniciar Sesión")],-1)),s("form",null,[s("div",q,[e[6]||(e[6]=s("label",{class:"block text-gray-700",for:"email"}," Correo Electrónico ",-1)),s("div",z,[e[5]||(e[5]=s("span",{class:"px-3 text-gray-500"},[s("i",{class:"fas fa-envelope"})],-1)),x(s("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>o.value=d),class:"w-full px-3 py-2 text-gray-700 focus:outline-none",id:"email",placeholder:"correo@ejemplo.com",type:"email"},null,512),[[v,o.value]])])]),s("div",j,[e[8]||(e[8]=s("label",{class:"block text-gray-700",for:"password"}," Contraseña ",-1)),s("div",B,[e[7]||(e[7]=s("span",{class:"px-3 text-gray-500"},[s("i",{class:"fas fa-lock"})],-1)),x(s("input",{"onUpdate:modelValue":e[1]||(e[1]=d=>a.value=d),class:"w-full px-3 py-2 text-gray-700 focus:outline-none",id:"password",placeholder:"********",type:"password"},null,512),[[v,a.value]])])]),s("div",$,[g(m,{to:{name:"forgotPassword"},class:"font-semibold underline text-sky-800 hover:text-sky-500"},{default:c(()=>e[9]||(e[9]=[f("¿Olvidó su contraseña?")])),_:1})]),s("div",G,[s("button",{onClick:V(w,["prevent"]),class:"w-full px-4 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-700",type:"submit"}," Iniciar Sesión ")]),s("div",H,[g(m,{to:{name:"register"},class:"font-semibold underline text-sky-900 hover:text-sky-500"},{default:c(()=>e[10]||(e[10]=[f(" Crear cuenta")])),_:1})])])])])]),_:1})}}}),W=A(M,[["__scopeId","data-v-75b32acd"]]);export{W as default};