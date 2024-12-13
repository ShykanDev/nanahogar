<template>
  <div class="">
    <header class="sticky top-0 z-50 bg-white shadow-md font-poppins">
      <div class="container flex items-center justify-between px-6 py-4 mx-auto">
        <img src="../assets/sslLogo.png" alt="Logo" class="absolute left-0 w-11" />
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <img src="../assets/img/header/retrowoman3.svg" alt="Logo" class="w-8" />
          <!-- <span class="text-xl font-bold text-gray-800">Nanahogar</span> -->
          <h2 class="absolute bottom-0 md:font-semibold text-xs md:text-lg left-[5%]" translate="no" v-html="currentDomain" ></h2>
        </div>

        <!-- Navegación -->
        <nav class="hidden space-x-6 md:flex">
          <router-link :to="{ name: 'home' }" class="text-gray-600 hover:text-gray-800"
            >Inicio</router-link
          >
          <router-link :to="{ name: 'histories' }" class="text-gray-600 hover:text-gray-800"
            >Historias</router-link
          >
          <router-link :to="{ name: 'advices' }" class="text-gray-600 hover:text-gray-800"
            >Consejos Útiles</router-link
          >
          <router-link :to="{ name: 'contact' }" class="text-gray-600 hover:text-gray-800"
            >Contacto</router-link
          >
          <router-link :to="{ name: 'policy' }" class="text-gray-600 hover:text-gray-800"
            >Política de privacidad</router-link
          >
          <router-link :to="{ name: 'us' }" class="text-gray-600 hover:text-gray-800"
            >Nosotros</router-link
          >
          <router-link :to="{ name: 'faqs' }" class="text-gray-600 hover:text-gray-800"
            >Ayuda</router-link
          >
        </nav>

        <!-- CTA y Extras -->
        <div class="flex items-center space-x-4">
          <RouterLink
            :to="{ name: 'histories' }"
            class="px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700"
            >Comparte tu historia</RouterLink
          >
          <button
            @click="useHeaderStore().toggleMenu"
            :class="{
              'opacity-0': storeHeader.isMenuToggled,
              'animate-jump-in': !storeHeader.isMenuToggled,
            }"
            class="text-gray-600 md:hidden hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <main class="overflow-hidden">
      <!-- sidebar -->
      <aside
        @click="storeHeader.toggleMenu()"
        :class="{
          'translate-x-0': useHeaderStore().isMenuToggled,
          'translate-x-full': !storeHeader.isMenuToggled,
        }"
        class="fixed top-0 bottom-0 left-0 right-0 z-50 w-full transition-transform duration-200 ease-out cursor-pointer bg-opacity-80 bg-slate-700 md:hidden"
      >
        <v-icon name="pr-times" class="absolute top-0 right-0 text-black" scale="3.1" />
        <!-- <h2 class="absolute text-2xl font-bold text-slate-800 top-4 left-4">nanahogar.com</h2> -->
        <div
          v-if="storeHeader.isMenuToggled"
          class="absolute flex items-center justify-center text-2xl font-bold text-slate-800 top-4 left-4"
        >
          <span class="animate-fade-up animate-delay-0">nana</span
          ><span class="animate-fade-down animate-delay-200">hogar</span
          ><span class="animate-fade-up animate-delay-300">.com</span>
        </div>
        <!-- nav menu for mobile only -->
        <article
          class="flex flex-col items-center w-full h-full text-xl bg-white justify-evenly font-poppins"
        >
          <RouterLink
            :class="{ 'animate-fade-left animate-delay-0': storeHeader.isMenuToggled }"
            :to="{ name: 'home' }"
          >
            <i class="fas fa-home"></i> Inicio
          </RouterLink>
          <RouterLink
            :class="{ 'animate-fade-left animate-delay-200': storeHeader.isMenuToggled }"
            :to="{ name: 'home' }"
          >
            <i class="fas fa-user"></i> Iniciar Sesión
          </RouterLink>
          <RouterLink
            :class="{ 'animate-fade-left animate-delay-75': storeHeader.isMenuToggled }"
            :to="{ name: 'home' }"
          >
            <i class="fas fa-book-open"></i> Historias
          </RouterLink>
          <RouterLink
            :class="{ 'animate-fade-left animate-delay-100': storeHeader.isMenuToggled }"
            :to="{ name: 'home' }"
          >
            <i class="fas fa-lightbulb"></i> Consejos Útiles
          </RouterLink>
          <RouterLink
            :class="{ 'animate-fade-left animate-delay-150': storeHeader.isMenuToggled }"
            :to="{ name: 'home' }"
          >
            <i class="fas fa-users"></i> Participar
          </RouterLink>

          <RouterLink
            :class="{ 'animate-fade-left animate-delay-200': storeHeader.isMenuToggled }"
            :to="{ name: 'terms' }"
          >
            <i class="fas fa-user"></i> Terminos y condiciones
          </RouterLink>
          <RouterLink
            :class="{ 'animate-fade-left animate-delay-200': storeHeader.isMenuToggled }"
            :to="{ name: 'terms' }"
          >
            <i class="fas fa-user"></i> Politica de privacidad
          </RouterLink>
        </article>
      </aside>
      <slot name="main"> </slot>
    </main>
    <footer
      class="relative w-full p-6 bg-white border-t-2 text-sky-700 font-poppins border-t-sky-700"
    >
      <!-- Imagen de seguridad SSL -->
      <div class="absolute top-4 right-4">
        <i class="text-3xl fas fa-shield-alt text-sky-700"></i>
      </div>

      <!-- Dirección -->
      <!-- <div class="mb-8 text-center">
    <div class="flex items-center justify-center gap-2 mb-4">
      <i class="text-3xl fas fa-map-signs lg:text-4xl"></i>
      <RouterLink
        :to="{name:'home'}"
        class="text-sm font-bold lg:text-lg hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
      </RouterLink>
    </div>
  </div> -->

      <!-- Sección adicional de información -->
      <div class="mb-8 text-center">
        <p class="mb-4 font-semibold text-gray-950">
          Sitio gratuito y de uso exclusivo para revisar y compartir experiencias.
        </p>
        <p class="mb-4 text-gray-950">
         Comparta sus experiencias con los demás, sea asesora del hogar o sea empleador, este sitio es gratuito y seguro.
        </p>
      </div>

      <!-- Sección de enlaces principales -->
      <div class="grid grid-cols-2 gap-4 mb-8 text-center md:grid-cols-3">
        <RouterLink
          :to="{ name: 'home' }"
          class="font-semibold underline text-sky-900 hover:text-sky-500"
          >Página Principal</RouterLink
        >
        <RouterLink
          :to="{ name: 'us' }"
          class="font-semibold underline text-sky-900 hover:text-sky-500"
          >Nosotros</RouterLink
        >
        <RouterLink
          :to="{ name: 'faqs' }"
          class="font-semibold underline text-sky-900 hover:text-sky-500"
          >Ayuda</RouterLink
        >
        <RouterLink
          :to="{ name: 'histories' }"
          class="font-semibold underline text-sky-900 hover:text-sky-500"
          >Comentarios</RouterLink
        >
        <RouterLink
          :to="{ name: 'contact' }"
          class="font-semibold underline text-sky-900 hover:text-sky-500"
          >Contacto</RouterLink
        >
        <!-- <RouterLink :to="{name:'home'}" class="font-semibold underline text-sky-900 hover:text-sky-500">Acciones</RouterLink> -->
        <RouterLink
          :to="{ name: 'register' }"
          class="font-semibold underline text-sky-900 hover:text-sky-500"
          >Registrarse</RouterLink
        >
        <RouterLink
          :to="{ name: 'login' }"
          class="font-semibold underline text-sky-900 hover:text-sky-500"
          >Iniciar Sesión</RouterLink
        >
        <!-- <RouterLink :to="{name:'home'}" class="font-semibold underline text-sky-900 hover:text-sky-500">Seguridad</RouterLink> -->
        <RouterLink
          :to="{ name: 'policy' }"
          class="font-semibold underline text-sky-900 hover:text-sky-500"
          >Aviso de Privacidad</RouterLink
        >
        <RouterLink
          :to="{ name: 'terms' }"
          class="font-semibold underline text-sky-900 hover:text-sky-500"
          >Términos y Condiciones</RouterLink
        >
      </div>

      <!-- Pie de página -->
      <div class="text-center">
        <p class="mb-2 text-sm font-bold lg:text-lg">
          Todos los derechos reservados &copy; {{ new Date().getFullYear() }}
        </p>
        <p class="text-sm lg:text-lg">Design by <strong>PACA</strong></p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useHeaderStore } from '@/stores/UseHeaderStore'
import { onMounted, ref } from 'vue';
const currentDomain = ref( '<h2 class="animate-fade"><span class="text-pink-700">asesora</span><span class="text-red-800">de</span><span class="text-sky-950">hogar</span><span class="text-red-800">.com</span></h2>',); // Usamos un array como el valor inicial

const domains = [
  '<h2 class="animate-fade"><span class="text-pink-700">asesora</span><span class="text-red-800">de</span><span class="text-sky-950">hogar</span><span class="text-red-800 animate-fade-left" >.com</span></h2>',
  '<h2 class="animate-fade"><span class="text-pink-700">asesora</span><span class="text-red-800">hogar</span><span class="text-pink-950 animate-fade-left" >.com</span></h2>',
  '<h2 class="animate-fade"><span class="text-pink-700">empleado</span><span class="text-red-800">domestico</span><span class="text-pink-950 animate-fade-left" >.com</span></h2>',
  '<h2 class="animate-fade"><span class="text-pink-700">nana</span><span class="text-red-800">domestica</span><span class="text-pink-950 animate-fade-left" >.com</span></h2>',
  '<h2 class="animate-fade"><span class="text-pink-700">nana</span><span class="text-red-800">hogar</span><span class="text-sky-950 animate-fade-left" >.com</span></h2>'
];

let intervalId: number | null = null; // Variable para guardar el ID del temporizador
const toggleDomains = ()=>{
  if(intervalId){
    clearInterval(intervalId);
  }
  currentDomain.value = domains[Math.floor(Math.random() * domains.length)];
  intervalId = setInterval(() => {
    currentDomain.value = domains[Math.floor(Math.random() * domains.length)];
  }, 3000);
}

onMounted(() => {
  toggleDomains();
})
const storeHeader = useHeaderStore()
</script>

<style scoped></style>
