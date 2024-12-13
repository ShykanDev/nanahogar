<template>
  <div class="">
    <MainLayout>
      <template #main>
        <div
          class="flex-wrap justify-center px-1 lg:px-6 lg:w-full lg:flex lg:justify-between lg:flex-nowrap"
        >
          <article>
            <h1
              class="py-1 mb-4 text-2xl text-left uppercase md:mb-8 md:py-4 text-slate-700 md:text-5xl font-lilita-one"
            >
            Un espacio para <span class="text-rose-800">asesoras del hogar</span> y <span class="text-sky-800">quienes</span> las <span class="text-sky-800">contratan</span>: <span class="">compartiendo experiencias</span>
            </h1>
            <h2 class="pr-2 font-poppins text-slate-600">
              Queremos conocer tu experiencia: ya sea positiva o negativa, cada historia es
              importante. Comparte tus vivencias con las asesoras del hogar para ayudar a otros a
              tomar decisiones informadas. Tu testimonio puede hacer una gran diferencia en la
              elección de la persona adecuada para el hogar. ¡No dudes en contar tu historia y ser
              parte de esta comunidad de apoyo!
            </h2>
            <div class="flex flex-wrap mt-5 space-x-2 space-y-1 font-poppins">
              <a
                href="#opiniones"
                class="p-1 text-white border rounded-lg minh bg-sky-800 animate-fade-left"
              >
                <i class="fas fa-comment-alt"></i> Opiniones
              </a>
              <router-link
                :to="{ name: 'histories' }"
                class="p-1 text-white border rounded-lg minh bg-sky-800 animate-fade-left animate-delay-100"
              >
                <i class="fas fa-thumbs-up"></i> Recomendaciones
              </router-link>
              <router-link
                :to="{ name: 'us' }"
                class="p-1 text-white border rounded-lg minh bg-sky-800 animate-fade-left animate-delay-200"
              >
                <i class="fas fa-users"></i> Nosotros
              </router-link>
              <router-link
                :to="{ name: 'histories' }"
                class="p-1 text-white border rounded-lg minh bg-sky-800 animate-fade-left animate-delay-300"
              >
                <i class="fas fa-comment-dots"></i> Comentar
              </router-link>
            </div>

            <div v-if="!useUserValues().isUserAuth" class="flex mt-3 space-x-4">
              <router-link
                to="/registro"
                class="flex items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                <i class="fas fa-user-plus"></i>
                <span>Registrarse</span>
              </router-link>
              <router-link
                to="/login"
                class="flex items-center px-4 py-2 space-x-2 text-white bg-green-600 rounded hover:bg-green-700"
              >
                <i class="fas fa-sign-in-alt"></i>
                <span>Iniciar Sesión</span>
              </router-link>
            </div>
          </article>

          <img
            :src="imgHeader"
            alt=""
            :key="imgHeader"
            class="py-3 animate-fade-up lg:w-1/2 md:w-1/2"
          />
        </div>
        <section>
          <h2 class="px-3 text-left font-poppins max-w-[80%]">
            Esta página está diseñada para ayudarle a que se informe sobre las asesoras del hogar,
            si usted tiene recomendaciones puede comentar en nuestra seccion de
            <RouterLink
              :to="{ name: 'home' }"
              class="font-semibold underline uppercase text-sky-800"
              >comentarios</RouterLink
            >, el uso de esta página es libre, seguro y gratuito
          </h2>
          <!-- Slider Cards -->
          <div id="opiniones" class="pt-10">
            <SliderCards />
          </div>

          <!-- <section class="py-12">
   <div class="container px-4 mx-auto">
    <h2 class="mb-8 text-3xl font-bold text-center">
     La Importancia de las Asesoras del Hogar
    </h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
     <div class="p-6 bg-white rounded-lg shadow-lg">
      <img alt="Asesora del hogar limpiando una mesa con dedicación" class="object-cover w-full h-48 rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/vLgIcNEA2Ea3B1GYSMFKumgJ1PfZjWKPgoYw3selN9uQZ65TA.jpg" width="600"/>
      <h3 class="mt-4 text-xl font-semibold">
       Limpieza y Orden
      </h3>
      <p class="mt-2 text-gray-600">
       Las asesoras del hogar mantienen nuestros espacios limpios y ordenados, lo que contribuye a un ambiente saludable y agradable. Su dedicación y atención al detalle aseguran que cada rincón de la casa esté impecable, creando un entorno acogedor y libre de estrés.
      </p>
     </div>
     <div class="p-6 bg-white rounded-lg shadow-lg">
      <img alt="Asesora del hogar cocinando una comida saludable" class="object-cover w-full h-48 rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/A4nMJhMbtuLFItiiG7hbjyAMgmEuIl6B6fsgb0mxfo0TZ65TA.jpg" width="600"/>
      <h3 class="mt-4 text-xl font-semibold">
       Preparación de Alimentos
      </h3>
      <p class="mt-2 text-gray-600">
       Ellas preparan comidas nutritivas y deliciosas, asegurando que nuestras familias se alimenten bien. Con su habilidad culinaria, pueden adaptar los menús a las necesidades y preferencias de cada miembro de la familia, promoviendo una dieta balanceada y saludable.
      </p>
     </div>
     <div class="p-6 bg-white rounded-lg shadow-lg">
      <img alt="Asesora del hogar cuidando a un niño pequeño con cariño" class="object-cover w-full h-48 rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/WdemcMnfq2nYt0LdKHVPLVSf520M4tDKYn6iUwEkvx2py0znA.jpg" width="600"/>
      <h3 class="mt-4 text-xl font-semibold">
       Cuidado de Niños
      </h3>
      <p class="mt-2 text-gray-600">
       Las asesoras del hogar también cuidan de nuestros hijos, brindándoles atención y cariño mientras estamos ocupados. Su presencia no solo garantiza la seguridad de los niños, sino que también les proporciona un ambiente afectuoso y estimulante para su desarrollo.
      </p>
     </div>
     <div class="p-6 bg-white rounded-lg shadow-lg">
      <img alt="Asesora del hogar planchando ropa con esmero" class="object-cover w-full h-48 rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/lNYEf4uIjV2uB6o4DEmU1xPef0ccCXsUGgjeIsr0J6WXlpnPB.jpg" width="600"/>
      <h3 class="mt-4 text-xl font-semibold">
       Cuidado de la Ropa
      </h3>
      <p class="mt-2 text-gray-600">
       Se encargan de lavar y planchar la ropa, manteniéndola en perfectas condiciones para su uso diario. Gracias a su esmero, nuestras prendas siempre están listas y presentables, lo que nos permite lucir bien en cualquier ocasión.
      </p>
     </div>
     <div class="p-6 bg-white rounded-lg shadow-lg">
      <img alt="Asesora del hogar organizando una despensa con eficiencia" class="object-cover w-full h-48 rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/ZeFjwww1Sh2sLqYTv1w0kxNf6se6sLicfW8KW494eWm9JTPfE.jpg" width="600"/>
      <h3 class="mt-4 text-xl font-semibold">
       Organización del Hogar
      </h3>
      <p class="mt-2 text-gray-600">
       Ayudan a organizar y mantener el hogar en orden, facilitando la vida diaria de todos los miembros de la familia. Su habilidad para gestionar el espacio y los recursos del hogar asegura que todo esté en su lugar, lo que mejora la eficiencia y reduce el desorden.
      </p>
     </div>
     <div class="p-6 bg-white rounded-lg shadow-lg">
      <img alt="Asesora del hogar asistiendo a una persona mayor con amabilidad" class="object-cover w-full h-48 rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/rk3ueakVapWUaiAufEIC2mwd9h43LbEkVdGDyWYqxezdy0znA.jpg" width="600"/>
      <h3 class="mt-4 text-xl font-semibold">
       Asistencia a Personas Mayores
      </h3>
      <p class="mt-2 text-gray-600">
       Proveen asistencia y compañía a las personas mayores, mejorando su calidad de vida y bienestar. Su apoyo no solo incluye ayuda con las tareas diarias, sino también una presencia reconfortante que combate la soledad y promueve la felicidad.
      </p>
     </div>
    </div>
   </div>
  </section> -->
        </section>

        <section class="flex w-full">
          <!-- section info -->
          <article class="w-3/4 min-h-screen p-6 overflow-scroll bg-white rounded-lg shadow-lg max-h-2 font-poppins">
  <h1 class="mb-4 text-2xl font-semibold text-rose-800">
    <i class="mr-2 fas fa-user-friends text-rose-800"></i> Asesoras del Hogar y Dueños del Hogar
  </h1>
  <p class="mb-4">
    Las asesoras del hogar a menudo enfrentan situaciones difíciles en su lugar de trabajo. Es común que algunos jefes no paguen a tiempo y que las hagan trabajar horas extras sin compensación adecuada. Además, hay casos en los que hombres intentan sobrepasarse con las mujeres, lo cual es inaceptable y debe ser denunciado.
  </p>
  <div class="container mx-auto">
        <div class="flex flex-col w-full md:flex-row">
            <!-- Sección de Problemas y Consejos para la Asesora -->
            <div class="w-full p-4 md:w-1/2">
                <h1 class="mb-4 text-2xl font-bold text-rose-800">Asesora</h1>
                <div class="mb-4">
                    <h2 class="mb-2 text-xl font-semibold text-rose-800">
                        <i class="mr-2 fas fa-exclamation-circle"></i> Problemas Comunes
                    </h2>
                    <ul class="list-disc list-inside">
                        <li>
                            <i class="mr-2 fas fa-clock"></i> Retrasos en el pago de salarios
                            <p class="text-gray-700">Los empleados no reciben sus salarios a tiempo, lo que afecta su estabilidad financiera.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-hourglass-half"></i> Horas extras no remuneradas
                            <p class="text-gray-700">Los empleados trabajan horas adicionales sin recibir compensación adecuada.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-genderless"></i> Acoso y abuso por parte de empleadores
                            <p class="text-gray-700">Los empleados enfrentan comportamientos inapropiados y abusivos en el lugar de trabajo.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-exclamation-triangle"></i> Falta de contratos formales
                            <p class="text-gray-700">Los empleados no tienen contratos escritos que definan sus términos de empleo.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-user-shield"></i> Inseguridad laboral
                            <p class="text-gray-700">Los empleados temen perder sus trabajos sin previo aviso o justificación.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-money-bill-wave"></i> Deducciones injustas en el salario
                            <p class="text-gray-700">Los empleadores realizan deducciones no autorizadas o injustas en los salarios de los empleados.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-home"></i> Condiciones de trabajo insalubres
                            <p class="text-gray-700">Los empleados trabajan en entornos que no cumplen con los estándares de salud y seguridad.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-user-times"></i> Despidos injustificados
                            <p class="text-gray-700">Los empleados son despedidos sin una razón válida o sin seguir el debido proceso.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-heart-broken"></i> Falta de beneficios de salud
                            <p class="text-gray-700">Los empleados no tienen acceso a seguros de salud o beneficios médicos.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-user-clock"></i> Exceso de carga laboral
                            <p class="text-gray-700">Los empleados tienen una carga de trabajo excesiva que afecta su bienestar.</p>
                        </li>
                    </ul>
                </div>
                <div class="mb-4">
                    <h2 class="mb-2 text-xl font-semibold text-rose-800">
                        <i class="mr-2 fas fa-tools"></i> Consejos y Recursos
                    </h2>
                    <ul class="list-disc list-inside">
                        <li>
                            <i class="mr-2 fas fa-clipboard-list"></i> Documentar todas las horas trabajadas
                            <p class="text-gray-700">Llevar un registro detallado de las horas trabajadas para evitar disputas salariales.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-balance-scale"></i> Conocer los derechos laborales
                            <p class="text-gray-700">Informarse sobre los derechos laborales para poder defenderse adecuadamente.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-hand-holding-heart"></i> Buscar apoyo en organizaciones de defensa de derechos
                            <p class="text-gray-700">Contactar a organizaciones que ofrezcan asesoramiento y apoyo legal.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-book"></i> Informarse sobre leyes laborales
                            <p class="text-gray-700">Leer y entender las leyes laborales aplicables en su país o región.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-users"></i> Unirse a sindicatos o grupos de apoyo
                            <p class="text-gray-700">Participar en sindicatos o grupos que defiendan los derechos de los trabajadores.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-phone-alt"></i> Tener a mano números de contacto de emergencia
                            <p class="text-gray-700">Guardar números de contacto de emergencia para situaciones críticas.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-file-alt"></i> Guardar copias de todos los documentos importantes
                            <p class="text-gray-700">Mantener copias de contratos, recibos de pago y otros documentos relevantes.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-comments"></i> Mantener una comunicación abierta con el empleador
                            <p class="text-gray-700">Fomentar una comunicación clara y abierta con el empleador para resolver problemas.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-user-friends"></i> Buscar apoyo emocional en amigos y familiares
                            <p class="text-gray-700">Contar con el apoyo emocional de seres queridos en momentos difíciles.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-chalkboard-teacher"></i> Participar en talleres y capacitaciones
                            <p class="text-gray-700">Asistir a talleres y capacitaciones para mejorar habilidades y conocimientos.</p>
                        </li>
                    </ul>
                </div>

            </div>
            <!-- Sección de Problemas y Consejos para el Dueño -->
            <div class="w-full p-4 md:w-1/2">
                <h1 class="mb-4 text-2xl font-bold text-sky-800">Dueño</h1>
                <div class="mb-4">
                    <h2 class="mb-2 text-xl font-semibold text-sky-800">
                        <i class="mr-2 fas fa-exclamation-circle"></i> Problemas Comunes
                    </h2>
                    <ul class="list-disc list-inside">
                        <li>
                            <i class="mr-2 fas fa-clock"></i> Dificultad para encontrar personal confiable
                            <p class="text-gray-700">Los empleadores tienen problemas para encontrar empleados en los que puedan confiar.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-hourglass-half"></i> Problemas de comunicación
                            <p class="text-gray-700">Existen barreras de comunicación que dificultan la relación laboral.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-genderless"></i> Desacuerdos sobre responsabilidades
                            <p class="text-gray-700">Los empleadores y empleados no están de acuerdo sobre las tareas y responsabilidades.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-exclamation-triangle"></i> Falta de formación adecuada
                            <p class="text-gray-700">Los empleados no reciben la formación necesaria para realizar sus tareas correctamente.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-user-shield"></i> Inseguridad sobre la legalidad de contratos
                            <p class="text-gray-700">Los empleadores no están seguros de si sus contratos cumplen con las leyes laborales.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-exclamation-triangle"></i> Acoso o abuso por parte del personal
                            <p class="text-gray-700">Los empleadores enfrentan comportamientos inapropiados y abusivos por parte de los empleados.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-exclamation-triangle"></i> Robo o pérdida de propiedad
                            <p class="text-gray-700">Los empleadores sufren pérdidas debido al robo o mal manejo de la propiedad.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-user-times"></i> Alta rotación de personal
                            <p class="text-gray-700">Los empleadores tienen dificultades para mantener a los empleados a largo plazo.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-money-bill-wave"></i> Costos inesperados de indemnización
                            <p class="text-gray-700">Los empleadores enfrentan gastos imprevistos relacionados con indemnizaciones.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-home"></i> Dificultad para mantener un ambiente de trabajo seguro
                            <p class="text-gray-700">Los empleadores luchan por garantizar un entorno de trabajo seguro y saludable.</p>
                        </li>
                    </ul>
                </div>
                <div class="mb-4">
                    <h2 class="mb-2 text-xl font-semibold text-sky-800">
                        <i class="mr-2 fas fa-tools"></i> Consejos y Recursos
                    </h2>
                    <ul class="list-disc list-inside">
                        <li>
                            <i class="mr-2 fas fa-clipboard-list"></i> Establecer un contrato claro
                            <p class="text-gray-700">Definir claramente los términos y condiciones del empleo en un contrato escrito.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-balance-scale"></i> Ofrecer formación y recursos
                            <p class="text-gray-700">Proporcionar la formación y los recursos necesarios para que los empleados realicen su trabajo de manera efectiva.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-hand-holding-heart"></i> Crear un ambiente de trabajo respetuoso
                            <p class="text-gray-700">Fomentar un entorno de trabajo donde se respete a todos los empleados.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-book"></i> Informarse sobre leyes laborales
                            <p class="text-gray-700">Conocer y cumplir con las leyes laborales aplicables para evitar problemas legales.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-users"></i> Participar en asociaciones de empleadores
                            <p class="text-gray-700">Unirse a asociaciones que ofrezcan apoyo y recursos a los empleadores.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-shield-alt"></i> Implementar medidas de seguridad
                            <p class="text-gray-700">Adoptar medidas de seguridad para proteger a los empleados y la propiedad.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-comments"></i> Mantener una comunicación abierta y honesta
                            <p class="text-gray-700">Fomentar una comunicación clara y honesta con los empleados para resolver problemas.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-user-check"></i> Realizar evaluaciones periódicas del personal
                            <p class="text-gray-700">Evaluar regularmente el desempeño de los empleados para identificar áreas de mejora.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-handshake"></i> Fomentar la confianza mutua
                            <p class="text-gray-700">Construir una relación de confianza mutua con los empleados.</p>
                        </li>
                        <li>
                            <i class="mr-2 fas fa-chalkboard-teacher"></i> Ofrecer incentivos y beneficios
                            <p class="text-gray-700">Proporcionar incentivos y beneficios para motivar a los empleados y mejorar la retención.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  <div class="mb-4">
    <h2 class="mb-2 text-xl font-semibold text-rose-800">
      <i class="mr-2 fas fa-comments"></i> Historias de Asesoras del Hogar
    </h2>
    <div class="flex flex-col md:flex-row md:space-x-4">
      <div class="mb-4 md:mb-0">
        <img alt="Una asesora del hogar trabajando en una cocina" height="200" src="https://storage.googleapis.com/a1aa/image/xUkymvtpDToYPllvYa4E32JuM48J7A3b9G8Jo8Aov6igQkeJA.jpg" width="300"/>
        <p class="mt-2">
          María, 35 años, ha trabajado como asesora del hogar durante 10 años. A pesar de las dificultades, sigue luchando por sus derechos.
        </p>
      </div>
      <div class="mb-4 md:mb-0">
        <img alt="Una asesora del hogar limpiando una sala de estar" height="200" src="https://storage.googleapis.com/a1aa/image/AtMJ9BHVEZo2E9Mi4AyKTC2kXPMkjAt9VXa5n9ePgZReBR6TA.jpg" width="300"/>
        <p class="mt-2">
          Ana, 28 años, ha enfrentado acoso en su lugar de trabajo, pero ha encontrado apoyo en una organización local.
        </p>
      </div>
      <div class="mb-4 md:mb-0">
        <img alt="Una asesora del hogar planchando ropa" height="200" src="https://storage.googleapis.com/a1aa/image/VPglkdGb90p3FdkHei06y3qnJTllUtGqzoY2GpKyeRRfDi0nA.jpg" width="300"/>
        <p class="mt-2">
          Luisa, 40 años, trabaja largas horas y a menudo no recibe pago por las horas extras.
        </p>
      </div>
    </div>
  </div>
  <div class="mb-4">
    <h2 class="mb-2 text-xl font-semibold text-rose-800">
      <i class="mr-2 fas fa-users"></i> Punto de Vista de los Dueños del Hogar
    </h2>
    <p class="mb-4">
      No todas las experiencias con asesoras del hogar son negativas. Muchos dueños del hogar valoran y respetan a sus asesoras, creando un ambiente de trabajo justo y amigable. Sin embargo, también hay casos en los que los dueños del hogar abusan de su poder y tratan mal a las asesoras.
    </p>
    <div class="flex flex-col md:flex-row md:space-x-4">
      <div class="mb-4 md:mb-0">
        <img alt="Un dueño del hogar agradeciendo a su asesora" height="200" src="https://storage.googleapis.com/a1aa/image/RLMteP2RUO2zaqYx3DC1yb3wf9Z47fmqTaweL7zLdVnHIEpPB.jpg" width="300"/>
        <p class="mt-2">
          Carlos, 45 años, siempre se asegura de pagar a tiempo y valora el trabajo de su asesora, María, quien ha sido parte de su familia durante años.
        </p>
      </div>
      <div class="mb-4 md:mb-0">
        <img alt="Una familia compartiendo una comida con su asesora" height="200" src="https://storage.googleapis.com/a1aa/image/lxUr8y4qEMKSJh2nCfCcWhxi3qzfa0ZYTcvZkzGBuM97BR6TA.jpg" width="300"/>
        <p class="mt-2">
          La familia López considera a su asesora, Ana, como un miembro más de la familia. Siempre la incluyen en celebraciones y eventos familiares.
        </p>
      </div>
      <div class="mb-4 md:mb-0">
        <img alt="Un dueño del hogar ayudando a su asesora" height="200" src="https://storage.googleapis.com/a1aa/image/lnvYhll5NvpmLFlfKhwgSDRS1ISGSwgtNemXa3T8j6VeDi0nA.jpg" width="300"/>
        <p class="mt-2">
          Jorge, 50 años, trabaja junto a su asesora, Luisa, para asegurarse de que no tenga que trabajar horas extras y siempre la trata con el respeto que merece.
        </p>
      </div>
    </div>
  </div>
  <div class="mb-4">
    <h2 class="mb-2 text-xl font-semibold text-rose-800">
      <i class="mr-2 fas fa-frown"></i> Experiencias Negativas de Dueños del Hogar
    </h2>
    <p class="mb-4">
      Aunque muchos dueños del hogar tratan bien a sus asesoras, también hay casos en los que abusan de su poder. Algunos dueños no pagan a tiempo, exigen horas extras sin compensación y, en los peores casos, intentan sobrepasarse con las asesoras.
    </p>
    <div class="flex flex-col md:flex-row md:space-x-4">
      <div class="mb-4 md:mb-0">
        <img alt="Un dueño del hogar discutiendo con su asesora" height="200" src="https://storage.googleapis.com/a1aa/image/975f7e70-121d-46f4-ae19-ef3b540c04ec.jpeg" width="300"/>
        <p class="mt-2">
          Laura, 32 años, ha tenido que lidiar con un jefe que constantemente retrasa su pago y la obliga a trabajar horas extras sin compensación.
        </p>
      </div>
      <div class="mb-4 md:mb-0">
        <img alt="Una asesora del hogar siendo acosada" height="200" src="https://storage.googleapis.com/a1aa/image/035542fe-91d7-4595-8b73-f7e303bb0ad7.jpeg" width="300"/>
        <p class="mt-2">
          Marta, 29 años, ha enfrentado acoso por parte de su jefe, quien intenta sobrepasarse con ella en múltiples ocasiones.
        </p>
      </div>
      <div class="mb-4 md:mb-0">
        <img alt="Una asesora del hogar trabajando largas horas" height="200" src="https://storage.googleapis.com/a1aa/image/50e22bd7-4fc5-42d6-94e2-e6444f029cd2.jpeg" width="300"/>
        <p class="mt-2">
          Rosa, 38 años, trabaja largas horas sin descanso y sin recibir pago por las horas extras, lo que la ha llevado a una situación de agotamiento extremo.
        </p>
      </div>
    </div>
  </div>
  <div class="mb-4">
    <h2 class="mb-2 text-xl font-semibold text-rose-800">
      <i class="mr-2 fas fa-smile"></i> Experiencias Positivas de Dueños del Hogar
    </h2>
    <p class="mb-4">
      Afortunadamente, hay muchos dueños del hogar que valoran y respetan a sus asesoras. Estos dueños crean un ambiente de trabajo justo y amigable, y se aseguran de que sus asesoras sean tratadas con dignidad y respeto.
    </p>
    <div class="flex flex-col md:flex-row md:space-x-4">
      <div class="mb-4 md:mb-0">
        <img alt="Un dueño del hogar celebrando el cumpleaños de su asesora" height="200" src="https://storage.googleapis.com/a1aa/image/27976573-b0cd-4f15-8bf5-cccfee215983.jpeg" width="300"/>
        <p class="mt-2">
          La familia García celebra el cumpleaños de su asesora, Carmen, cada año, mostrando su aprecio y respeto por su trabajo.
        </p>
      </div>
      <div class="mb-4 md:mb-0">
        <img alt="Un dueño del hogar ofreciendo un aumento de salario" height="200" src="https://storage.googleapis.com/a1aa/image/d0504e7a-3345-47d0-8825-ad048f5c25e3.jpeg" width="300"/>
        <p class="mt-2">
          Enrique, 52 años, le ofrece un aumento de salario a su asesora, Laura, para compensar las horas adicionales que ha trabajado durante el año.
        </p>
      </div>
      <div class="mb-4 md:mb-0">
        <img alt="Una asesora del hogar recibiendo un regalo de su empleador" height="200" src="https://storage.googleapis.com/a1aa/image/b525df53-6d7d-426e-9333-e574e62af5eb.jpeg" width="300"/>
        <p class="mt-2">
          La Sra. López siempre asegura que su asesora, Teresa, reciba un obsequio por Navidad como muestra de gratitud por su arduo trabajo.
        </p>
      </div>
    </div>
  </div>
</article>

          <!-- section ads -->
          <aside class="flex flex-col items-center w-1/4 gap-3 min-h-dvh">
            <h2 class="text-2xl text-white">Right Section</h2>
            <!-- ads cards -->
            <div class="relative w-3/4 bg-black min-h-56 rounded-xl">
              <a href="https://negocioamerica.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  class="absolute top-0 left-0 object-cover w-full h-full"
                />
                <div
                  class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"
                ></div>
                <!-- Overlay -->
                <h2 class="relative z-10 text-2xl text-center text-white" translate="no">
                  negocioamerica.com
                </h2>
                <h3 class="relative z-10 mt-4 text-center text-white lg:text-lg">
                  ¿Desea importar productos de México hacia su país? Somos su mejor opción
                </h3>
              </a>
            </div>
            <div class="relative w-3/4 bg-white min-h-56 rounded-xl">
              <a href="https://miexnovio.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://images.pexels.com/photos/18262410/pexels-photo-18262410/free-photo-of-man-kissing-bride-in-cheek.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  class="absolute top-0 left-0 object-cover w-full h-full"
                />
                <div
                  class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"
                ></div>
                <!-- Overlay -->
                <h2 class="relative z-10 text-2xl text-center text-white" translate="no">
                  miexnovio.com
                </h2>
                <h3 class="relative z-10 mt-4 text-center text-white lg:text-lg">
                  ¿Mala experiencia con una exnovia?
                </h3>
                <h3 class="relative z-10 mt-4 text-center text-white lg:text-lg">
                  Comparta sus experiencias con nuestros usuarios
                </h3>
              </a>
            </div>
            <div class="relative w-3/4 bg-white min-h-56 rounded-xl">
              <a href="https://miarrendatario.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://images.pexels.com/photos/8292879/pexels-photo-8292879.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  class="absolute top-0 left-0 object-cover w-full h-full"
                />
                <div
                  class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"
                ></div>
                <!-- Overlay -->
                <h2 class="relative z-10 text-2xl text-center text-white" translate="no">
                  miarrendatario.com
                </h2>
                <h3 class="relative z-10 text-center text-white lg:text-lg">
                  ¿Necesita ayuda para encontrar un arrendatario?
                </h3>
                <h3 class="relative z-10 text-center text-white lg:text-lg">
                  Visitenos y descubra lo que necesita
                </h3>
              </a>
            </div>
          </aside>
        </section>

        <!-- histories summary -->
        <section class="p-6 bg-gray-100 rounded-lg shadow-md comments-section">
          <h2 class="mb-4 text-xl font-bold">Comentarios y Experiencias</h2>

          <!-- Lista de Comentarios -->
          <ExampleComment
            v-for="comment in comments"
            :key="comment.id"
            :image="comment.image"
            :name="comment.name"
            :date="comment.date"
            :summary="comment.summary"
          />

          <!-- Botón para agregar nuevo comentario -->
          <router-link
            :to="{ name: 'histories' }"
            class="block px-4 py-2 mt-4 text-center text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
          >
            Crear Comentario <i class="fas fa-comment-alt"></i>
          </router-link>
          <router-link
            :to="{ name: 'histories' }"
            class="block px-4 py-2 mt-4 text-center text-white rounded-lg shadow bg-sky-600 hover:bg-blue-700"
          >
            Leer más experiencias <i class="fas fa-angle-double-right"></i>
          </router-link>
        </section>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import ExampleComment from '@/components/comments/ExampleComment.vue'
import SliderCards from '@/components/home/SliderCards.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useUserValues } from '@/stores/userValues';
import { onMounted, ref } from 'vue'

const comments = [
  {
    id: 1,
    image: 'https://i.ibb.co/pJW1WwQ/Mar-a.jpg',
    name: 'María López',
    date: '2024-12-11',
    summary:
      'Mi nombre es María López y quiero compartir una experiencia muy especial que viví gracias a Clara Martínez, una ama de hogar que trabajó para mi familia durante más de tres años. Clara llegó a nuestra casa cuando yo estaba pasando por un momento muy complicado. Tenía dos hijos pequeños, un trabajo a tiempo completo y, como muchas madres, estaba agotada tratando de equilibrar todo. Desde el primer día, Clara se mostró increíblemente dedicada, amable y con una actitud muy profesional. Siempre llegaba a tiempo, hacía su trabajo con esmero y no solo se encargaba de las tareas domésticas, sino que se preocupaba por mi familia, como si fuera parte de ella. Un día, después de que Clara terminara su jornada y se fuera, nos dimos cuenta de que faltaba algo muy importante: una pequeña caja con dinero que habíamos dejado en la mesa de la sala. Era una cantidad significativa, no mucha, pero suficiente como para preocuparnos. No pudimos encontrarla por ningún lado. Tras un par de días buscando, comenzamos a pensar lo peor, pero nadie en la casa parecía tener la respuesta. Recuerdo que esa tarde Clara llegó para limpiar la cocina, y decidimos preguntarle si había visto algo extraño en la sala. Clara, con una calma sorprendente, nos confesó que había encontrado la caja de dinero en el suelo cuando pasó por allí, ya que se había caído sin que nadie se diera cuenta. Sin pensarlo, Clara la había guardado en su bolso y estaba esperando el momento adecuado para devolverla. Lo más impresionante de todo fue la forma en que nos lo dijo: sin vergüenza, sin tratar de esconder nada, simplemente con sinceridad. Nos explicó que había pensado en todo momento que lo correcto era devolver el dinero, ya que pertenecía a nosotros, y aunque ella nunca pensó en quedárselo, tampoco quería que pensáramos que lo había tomado sin más. Nosotros, en shock por la honestidad de Clara, le agradecimos profundamente. A lo largo de esos años trabajando con nosotros, nunca habíamos tenido ninguna queja sobre su trabajo, pero esta situación nos hizo darnos cuenta de que Clara era mucho más que una empleada doméstica, era una persona íntegra y de confianza. En un mundo donde, muchas veces, se duda de las buenas intenciones, Clara nos mostró que aún existen personas honestas que hacen lo correcto sin esperar nada a cambio.',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/wCD38j0/Ana.jpg',
    name: 'Ana Pérez',
    date: '2024-12-10',
    summary:
      'Soy Ana Pérez Ruiz, y quiero contar una historia increíble sobre Laura Méndez, una ama de hogar que trabajó para nosotros durante casi dos años. Cuando decidimos contratar a Laura, mi familia ya estaba atravesando un momento difícil. Mi esposa había estado enferma durante algún tiempo y, con los niños en casa, el hogar se estaba volviendo un caos. Necesitábamos ayuda, pero también sabíamos que debía ser alguien confiable y con buen corazón. Desde que Laura comenzó a trabajar con nosotros, nuestra vida cambió por completo. Ella no solo se encargó de las tareas de limpieza, sino que también se encargó de organizar la casa de una manera que jamás imaginamos. Siempre con una actitud positiva, hizo todo lo posible para que mi esposa estuviera cómoda, y sus pequeños gestos de cariño fueron realmente notables. Si algún día mi esposa no podía levantarse de la cama, Laura no dudaba en darle un poco de compañía, asegurándose de que se sintiera atendida y cuidada. Lo que más me impactó de Laura fue algo que sucedió un día por accidente. Estábamos de vacaciones fuera de la ciudad, y por razones de seguridad, habíamos dejado una suma de dinero en efectivo en una de las habitaciones de nuestra casa, ya que no queríamos dejarlo en el banco. Cuando regresamos, nos dimos cuenta de que algo no estaba en su lugar. La caja con el dinero había desaparecido. Aunque pensamos que el dinero estaba seguro, comenzamos a preocuparnos. Una noche, mientras estábamos en medio de la incertidumbre, Laura se presentó en nuestra casa, un poco nerviosa pero con una expresión seria en su rostro. Nos dijo que había algo importante que quería contarnos. Nos explicó que, mientras limpiaba la habitación donde había dejado el dinero, se dio cuenta de que había un sobre con algo dentro, pero al abrirlo, vio que era mucho más de lo que pensaba. El dinero que pensábamos perdido estaba en sus manos, y sin dudarlo, lo había guardado para devolvérnoslo cuando regresáramos. Nos quedamos absolutamente sorprendidos. Laura no solo había sido cuidadosa al encontrar el dinero, sino que su honestidad al venir a devolverlo fue algo que nos dejó sin palabras. Agradecimos mucho su gesto, no solo por devolver el dinero, sino por demostrarnos que aún existen personas que valoran la confianza y la honestidad por encima de cualquier otra cosa.',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/P5TM3Z2/Daniela.jpg',
    name: 'Daniela Galván',
    date: '2024-12-10',
    summary:
      'Quiero compartir una mala experiencia que tuvimos con una ama de hogar llamada Claudia Ramírez. Decidimos contratarla para que se encargara de la limpieza y organización de nuestra casa, ya que mi esposo y yo estábamos trabajando muchas horas y no teníamos tiempo para mantener todo en orden. Al principio, Claudia parecía ser muy amable y profesional. Se adaptó rápidamente a nuestra rutina y parecía entender nuestras necesidades. Sin embargo, con el paso de las semanas, comenzamos a notar comportamientos extraños. A veces, cuando llegábamos a casa, nos dábamos cuenta de que cosas en la cocina y el salón estaban en lugares distintos a donde las habíamos dejado. Además, hubo ocasiones en las que Claudia no cumplía con las tareas que le habíamos asignado, como limpiar ciertas áreas o incluso dejar de hacer la colada. Una tarde, cuando regresamos, encontramos que una de las habitaciones estaba cerrada con llave, algo que nunca había sucedido antes. Al pedirle que nos explicara qué había pasado, Claudia se mostró evasiva y nerviosa, pero nunca nos dio una respuesta clara. Decidimos revisar la habitación y, para nuestra sorpresa, encontramos objetos personales nuestros que estaban fuera de lugar, además de pertenencias que no nos pertenecían, como artículos de ropa y productos de belleza. Nos sentimos profundamente traicionados y tuvimos que despedirla inmediatamente. Después de investigar un poco más, descubrimos que Claudia había estado robando cosas de la casa durante semanas, pero nunca lo había admitido. Fue una experiencia muy desagradable que nos hizo ser más cautelosos al contratar a alguien para trabajar en nuestro hogar.',
  },
  {
    id: 4,
    image: 'https://i.ibb.co/ngpkHGz/Raul.jpg',
    name: 'Raúl González',
    date: '2024-12-10',
    summary:
      'Mi nombre es Raúl y quiero contarles la experiencia negativa que tuvimos con una ama de hogar llamada Lucía Pérez. La contratamos para que se encargara de la limpieza y organización de nuestra casa, ya que teníamos horarios complicados y necesitábamos ayuda en las tareas del hogar. Lucía parecía ser una persona responsable y con buena disposición al principio. Sin embargo, después de unas semanas, empezamos a notar que las cosas no estaban saliendo como esperábamos. Primero, comenzó a llegar tarde y, cuando llegaba, parecía estar poco motivada para hacer su trabajo. Las áreas que se suponía que debía limpiar, como la cocina y los baños, no se hacían correctamente. A menudo, dejaba suciedad en lugares evidentes o simplemente no completaba las tareas asignadas. Cuando le comentamos sobre estos problemas, Lucía nos dio excusas y prometió mejorar, pero la situación no cambió. Lo peor vino cuando empezamos a encontrar objetos personales de nuestra familia en lugares extraños, y notamos que ciertos artículos de valor empezaron a faltar. Al principio pensamos que podríamos haberlos perdido, pero nos dimos cuenta de que algunos objetos solo podían haber sido tomados por alguien que conocía bien la casa. Decidimos despedirla, pero lo más sorprendente fue su reacción. En lugar de asumir su responsabilidad, Lucía trató de culpar a otros miembros de la familia y negó cualquier acusación, lo que nos dejó muy disgustados. La experiencia nos dejó una sensación de desconfianza, y desde entonces, hemos sido mucho más cuidadosos al elegir personal para el hogar.',
  },
  {
    id: 4,
    image: 'https://i.ibb.co/wMfbbJS/Jose.jpg',
    name: 'José Martínez',
    date: '2024-12-10',
    summary:
      'Mi nombre es José y quiero contarles sobre una increíble ama de hogar llamada Elena Torres, quien trabajó con nosotros durante más de un año. Desde el primer día que llegó a nuestra casa, supimos que habíamos tomado la decisión correcta. Teníamos una rutina agitada, con mi esposa y yo trabajando a tiempo completo y nuestros hijos siempre ocupados con sus actividades. Necesitábamos alguien que no solo se encargara de las tareas domésticas, sino que también pudiera ayudar a que el ambiente de la casa fuera más armonioso. Elena no solo cumplió con todas sus tareas de limpieza y organización, sino que siempre mostró una actitud positiva y un cariño especial por nuestra familia. Era como si hubiera sentido que formaba parte de nosotros. Siempre tenía una sonrisa en el rostro y hacía que los días difíciles fueran mucho más fáciles de llevar. En una ocasión, mi esposa estaba pasando por un momento complicado debido a estrés en el trabajo, y Elena no solo se encargó de su labor habitual, sino que, al ver que estaba agotada, le preparó una taza de té y se quedó un rato para conversar y hacerle compañía. Un gesto pequeño, pero que significó mucho para nosotros. Lo que más nos impresionó de Elena fue su honestidad. Un día, mientras estaba limpiando el salón, encontró un sobre con dinero que había caído entre unos muebles. En lugar de quedárselo, lo trajo inmediatamente a nuestra habitación, diciéndonos que lo había encontrado y que debíamos asegurarnos de que no se hubiera perdido de alguna parte. Ese tipo de integridad es algo que realmente apreciamos. Elena se ganó nuestra confianza por completo, y siempre la recordaremos como una persona que no solo hizo su trabajo, sino que aportó valor humano a nuestra vida.',
  },
]
const listImg = [
  'https://i.ibb.co/19fHNJs/IMG-20241213-022720.png',
  'https://i.ibb.co/pR94fNW/IMG-20241213-022934.png',
  'https://i.ibb.co/1n0yxTJ/IMG-20241213-022840.png',
  'https://i.ibb.co/tCrVzdq/Picsart-24-12-10-23-37-36-338.png',
  'https://i.ibb.co/DGTj74S/Picsart-24-12-10-23-42-33-422.png',
  'https://i.ibb.co/x66r2Rg/Picsart-24-12-10-23-45-48-253.png',
  'https://i.ibb.co/HnC2k7T/Picsart-24-12-10-23-39-40-756.png',,
  'https://i.ibb.co/JFChmWx/Picsart-24-12-10-23-44-23-157.png',
]

// img to use
const imgHeader = ref(listImg[0])

// intervalo en milisegundos
const intervalTime = 5000 // 5 segundos

const toggleImg = (): void => {
  let i = 0 // Inicializamos el índice aquí

  // Primero, cambiamos la imagen inmediatamente
  imgHeader.value = listImg[i]

  // Luego, usamos setInterval para los siguientes cambios a partir del segundo ciclo
  const interval = setInterval(() => {
    i = (i + 1) % listImg.length // Avanzamos al siguiente índice y reiniciamos cuando llegamos al final
    imgHeader.value = listImg[i] // Cambiamos la imagen
  }, intervalTime)
}

onMounted(() => {
  toggleImg()
})
</script>

<style scoped></style>
