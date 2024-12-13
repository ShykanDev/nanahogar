import{d as j,h as u,o as p,c as g,a as e,t as c,F as x,i as v,n as r,g as m,_ as M,f as $,w as S,e as V,l as y,q,v as w,b as C}from"./index-DvEgSrVi.js";const L={class:"w-5/6 p-4 mx-auto bg-white rounded-lg shadow-md font-poppins"},A={class:"flex items-center justify-between pb-2 mb-4 border-b"},D={class:"text-lg italic font-bold text-gray-800"},H={class:"text-sm text-gray-500"},R={class:"text-lg font-bold text-gray-800"},T={class:"mb-4"},E={class:"text-gray-700"},U={class:"py-1 text-xs text-gray-500 text-start"},F={class:"flex items-center space-x-1"},N={class:"flex items-center justify-end w-full space-x-2"},_=j({__name:"CommentCard",props:{title:{type:String,default:"Titulo no especificado"},name:{type:String,default:"Usuario Anónimo"},date:{type:String,default:"Fecha no especificada"},comment:{type:String,default:"Este usuario no ha dejado ningún comentario."},stars:{type:Number,default:3,validator:s=>s>=1&&s<=5}},setup(s){const i=u(!1),f=u(Math.floor(Math.random()*100)),l=()=>{i.value?(i.value=!1,f.value--):(i.value=!0,f.value++)};return(b,n)=>(p(),g("div",L,[e("header",A,[e("h2",D,'"'+c(s.title)+'"',1),e("p",H,c(s.date),1)]),e("h2",R,c(s.name),1),e("div",T,[e("p",E,c(s.comment),1)]),e("p",U,"Calificación que dió "+c(s.name),1),e("footer",F,[(p(),g(x,null,v(5,t=>e("span",{key:t,class:r(["text-xl",t<=s.stars?"text-yellow-400":"text-gray-300"])},n[0]||(n[0]=[e("i",{class:"fas fa-star"},null,-1)]),2)),64)),e("div",N,[e("button",{onClick:l,class:r(["hover:text-blue-500",{"text-blue-500 animate-jump":i.value}])},[e("i",{class:r(["fas fa-thumbs-up",{"text-blue-500":i.value}])},null,2),n[1]||(n[1]=m(" Me gusta "))],2),n[2]||(n[2]=e("a",{href:"#comentar"},[e("button",{class:"text-gray-500 hover:text-blue-500"},[e("i",{class:"fas fa-comment"}),m(" Comentar ")])],-1))])])]))}}),z=M(_,[["__scopeId","data-v-644543ca"]]),B={class:"overflow-hidden"},G={class:"flex overflow-hidden"},P={class:"w-1/2 py-4 space-y-4 animate-fade-left"},Q={class:"w-1/2 space-y-4 bg-slate-50 animate-fade-left animate-delay-200"},I={id:"comentar",class:"py-5 bg-gray-50"},J={class:"w-10/12 p-6 mx-auto bg-white rounded-lg shadow-lg font-poppins"},K={class:"mb-4"},O={class:"flex items-center mt-2 space-x-4"},W={for:"owner",class:"flex items-center cursor-pointer"},X={for:"helper",class:"flex items-center cursor-pointer"},Y={class:"mb-4"},Z={class:"mb-4"},ee={class:"flex items-center mb-4 space-x-1"},ae={class:"flex items-center"},te=j({__name:"HistoriesView",setup(s){const i=[{title:"Mi mejor asesora",name:"Ana Pérez",date:"2024-12-10",comment:"Soy Ana Pérez y quiero contar una historia increíble sobre Laura Méndez, una ama de hogar que trabajó con nosotros durante casi dos años. Laura no solo se encargó de las tareas del hogar, sino que siempre estuvo dispuesta a escuchar y apoyar a cada miembro de la familia. Su dedicación y cariño hacia todos nosotros fueron fundamentales durante un momento complicado de nuestra vida familiar. Gracias a su compromiso, nuestra casa se convirtió en un lugar más organizado y armonioso.",stars:5},{title:"Mi nana me devolvió 12 mil pesos que perdí",name:"Carlos Gómez",date:"2024-12-11",comment:"Quiero compartir mi experiencia con Marta Rodríguez, quien nos ayudó en casa mientras mi esposa y yo trabajábamos. Un día, perdí una suma importante de dinero y Marta, al escuchar mi preocupación, decidió ayudarme a buscarlo. Con su paciencia y dedicación, logramos encontrar los 12 mil pesos que había perdido, lo que me dejó profundamente agradecido por su actitud responsable y su disposición para ayudarnos más allá de sus tareas.",stars:5},{title:"La asesora que me robó el collar",name:"Luis Hernández",date:"2024-12-12",comment:"Contraté a una asesora doméstica llamada Verónica para que me ayudara en casa. Durante su tiempo con nosotros, noté que algunos objetos empezaron a faltar, hasta que un día descubrí que mi collar de 75 mil pesos había desaparecido. Después de hablar con Verónica, no solo negó haberlo tomado, sino que comenzó a inventar excusas. Lamentablemente, tuve que despedirla, y aunque la situación fue muy incómoda, aprendí a ser más cuidadoso con la selección de las personas que invito a mi hogar.",stars:1},{title:"Excelente ayuda pero poco comprometida",name:"Sofía Martínez",date:"2024-12-13",comment:"Contraté a Teresa para que ayudara con las tareas domésticas, pero aunque al principio todo parecía ir bien, poco a poco su compromiso disminuyó. A pesar de que realizaba su trabajo, nunca mostró mucha iniciativa ni ganas de mejorar las cosas en la casa. Finalmente, decidí terminar el contrato porque sentí que no estaba aportando lo que necesitábamos.",stars:3},{title:"Mi ama de hogar siempre fiel",name:"Patricia Ríos",date:"2024-12-14",comment:"Mi experiencia con Carmen fue muy positiva desde el principio. Ella no solo era excelente en su trabajo, sino que también mostraba una dedicación y lealtad que rara vez se encuentran. Siempre estuvo ahí para ayudar en cualquier momento, y su compromiso hizo que nuestra vida fuera mucho más fácil. Estoy muy agradecida con Carmen por su esfuerzo y dedicación.",stars:5}],f=[{title:"Mi mejor empleador",name:"Laura Méndez",date:"2024-12-10",comment:"Soy Laura Méndez y quiero compartir mi experiencia trabajando con la familia Pérez. Durante casi dos años, me encargué de las tareas del hogar, pero lo que realmente me hizo sentir especial fue la forma en que me trataron. Siempre hubo respeto y un ambiente de apoyo mutuo, especialmente en los momentos difíciles. Sentí que no solo era parte del hogar, sino también del bienestar emocional de la familia. Estoy muy agradecida por la oportunidad y por la confianza que me brindaron.",stars:5},{title:"Devolví el dinero perdido con honestidad",name:"Marta Rodríguez",date:"2024-12-11",comment:"Quiero contarles cómo me sentí al ayudar a la familia Gómez a encontrar los 12 mil pesos que habían perdido. Aunque mi trabajo es ayudar en las tareas del hogar, siempre me he esforzado por ser honesta y responsable. Cuando Carlos me mencionó su preocupación por el dinero perdido, no dudé en ofrecer mi ayuda. Me hizo sentir muy bien poder ser de apoyo en ese momento, y agradezco la confianza que me brindaron para resolver la situación.",stars:5},{title:"La familia que no entendió mi situación",name:"Verónica Ruiz",date:"2024-12-12",comment:"Trabajé con la familia Hernández, y aunque siempre traté de hacer lo mejor en mis tareas, nunca pude evitar la sensación de desconfianza. Un día, el señor Luis notó que su collar había desaparecido y me acusó de robarlo sin más pruebas. A pesar de que le expliqué que no lo tomé, la situación no mejoró y fui despedida. Fue un mal momento, y aunque entiendo que cada familia tiene sus preocupaciones, creo que no se dio una oportunidad para aclarar las cosas.",stars:2},{title:"Mi trabajo no fue apreciado",name:"Teresa Sánchez",date:"2024-12-13",comment:"Trabajé con la familia Martínez durante un tiempo, pero a pesar de que realizaba todas mis tareas de manera puntual, nunca sentí que mi esfuerzo fuera apreciado. Siempre traté de mejorar las condiciones del hogar, pero la familia nunca mostró mucho interés en mi compromiso o en reconocer mis aportes. Finalmente, decidí dejar la posición, ya que sentí que no estaban valorando mi trabajo.",stars:3},{title:"Una familia muy agradecida",name:"Carmen Gómez",date:"2024-12-14",comment:"Mi experiencia con la familia Ríos fue increíble. Desde el principio, sentí que mi trabajo tenía un impacto positivo en su vida diaria. No solo me valoraron como trabajadora, sino que también me trataron con respeto y aprecio, lo que me hizo sentir parte de la familia. Siempre intenté hacer lo mejor en mi labor, y me sentí profundamente agradecida por el ambiente de apoyo que crearon.",stars:5}],l=u("dueño"),b=u(""),n=u(""),t=u(3),d=h=>{t.value=h},k=()=>{console.log("Rol:",l.value),console.log("Título del comentario:",b.value),console.log("Comentario completo:",n.value),console.log("Rating:",t.value)};return(h,a)=>(p(),$(V,null,{main:S(()=>[e("article",B,[e("section",G,[e("article",P,[a[9]||(a[9]=e("h2",{class:"py-5 text-2xl font-semibold text-center uppercase bg-white rounded-lg shadow-md text-sky-800 font-poppins"},[e("i",{class:"mr-2 fas fa-comment"}),m(" Comentarios de Dueños del Hogar "),e("i",{class:"mr-2 fas fa-home"})],-1)),a[10]||(a[10]=e("div",{class:"flex justify-center w-full"},[e("a",{href:"#comentar",class:"px-6 py-2 mt-5 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"}," Comentar como dueño ")],-1)),(p(),g(x,null,v(i,o=>C(z,{title:o.title,key:o.name,name:o.name,date:o.date,comment:o.comment,stars:o.stars},null,8,["title","name","date","comment","stars"])),64))]),e("article",Q,[a[11]||(a[11]=e("h2",{class:"sticky top-0 py-5 text-2xl font-semibold text-center uppercase bg-white rounded-lg shadow-md min-h-20 text-rose-800 font-poppins"},[e("i",{class:"mr-2 fas fa-female"}),m(" Comentarios de Asesoras del Hogar "),e("i",{class:"ml-2 fas fa-comment-dots"})],-1)),a[12]||(a[12]=e("div",{class:"flex justify-center w-full"},[e("a",{href:"#comentar",class:"px-6 py-2 mt-5 text-sm font-semibold text-white rounded-md bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2"}," Comentar como asesora de hogar ")],-1)),(p(),g(x,null,v(f,o=>C(z,{title:o.title,key:o.name,name:o.name,date:o.date,comment:o.comment,stars:o.stars},null,8,["title","name","date","comment","stars"])),64))])]),e("section",I,[e("section",J,[a[23]||(a[23]=e("h2",{class:"mb-4 text-2xl font-semibold text-center text-slate-800"},"Compartir historia",-1)),e("div",K,[a[17]||(a[17]=e("label",{class:"text-sm font-semibold text-gray-600"},"Comentar como:",-1)),e("div",O,[e("label",W,[a[13]||(a[13]=e("i",{class:"mr-2 fas fa-user-tie text-sky-900"},null,-1)),y(e("input",{type:"radio",id:"owner","onUpdate:modelValue":a[0]||(a[0]=o=>l.value=o),value:"dueño",class:"mr-2"},null,512),[[q,l.value]]),a[14]||(a[14]=m(" Dueño "))]),e("label",X,[a[15]||(a[15]=e("i",{class:"mr-2 fas fa-female text-rose-600"},null,-1)),y(e("input",{type:"radio",id:"helper","onUpdate:modelValue":a[1]||(a[1]=o=>l.value=o),value:"asesora",class:"mr-2"},null,512),[[q,l.value]]),a[16]||(a[16]=m(" Asesora del hogar "))])])]),e("div",Y,[a[18]||(a[18]=e("h3",{class:"py-2 text-sm italic font-medium text-gray-600"},"Se usará automáticamente el nombre de usuario con el que se registró",-1)),a[19]||(a[19]=e("label",{for:"comment",class:"block text-sm font-medium text-gray-900"},"Título de la Historia",-1)),y(e("input",{type:"text",id:"comment","onUpdate:modelValue":a[2]||(a[2]=o=>b.value=o),placeholder:"Agradezco a mi trabajadora doméstica por su honestidad y compromiso",class:"w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"},null,512),[[w,b.value]])]),e("div",Z,[a[20]||(a[20]=e("label",{for:"fullComment",class:"block text-sm font-medium text-gray-700"},"Historia",-1)),y(e("textarea",{id:"fullComment","onUpdate:modelValue":a[3]||(a[3]=o=>n.value=o),placeholder:"Escribe tu Historia aquí...",class:"w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500",rows:"4"},null,512),[[w,n.value]])]),e("div",ee,[a[21]||(a[21]=e("span",{class:"text-sm font-medium text-gray-700"},"Calificación:",-1)),e("div",ae,[e("span",{onClick:a[4]||(a[4]=o=>d(1)),class:r([{"text-yellow-500":t.value>=1,"text-gray-300":t.value<1},"cursor-pointer fas fa-star fa-lg"])},null,2),e("span",{onClick:a[5]||(a[5]=o=>d(2)),class:r([{"text-yellow-500":t.value>=2,"text-gray-300":t.value<2},"cursor-pointer fas fa-star fa-lg"])},null,2),e("span",{onClick:a[6]||(a[6]=o=>d(3)),class:r([{"text-yellow-500":t.value>=3,"text-gray-300":t.value<3},"cursor-pointer fas fa-star fa-lg"])},null,2),e("span",{onClick:a[7]||(a[7]=o=>d(4)),class:r([{"text-yellow-500":t.value>=4,"text-gray-300":t.value<4},"cursor-pointer fas fa-star fa-lg"])},null,2),e("span",{onClick:a[8]||(a[8]=o=>d(5)),class:r([{"text-yellow-500":t.value>=5,"text-gray-300":t.value<5},"cursor-pointer fas fa-star fa-lg"])},null,2)])]),e("button",{onClick:k,class:"w-full py-2 text-white rounded-md shadow-md bg-sky-800 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"},a[22]||(a[22]=[e("i",{class:"mr-2 fas fa-paper-plane"},null,-1),m(" Enviar Historia ")]))])])])]),_:1}))}});export{te as default};