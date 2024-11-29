<template>
    <div class="">
        <header class="sticky top-0 z-50 w-full">
          <section>

          </section>
            <section class="w-full bg-white">
                <div class="flex justify-start w-full py-2 space-x-4 text-lg bg-white px-9 font-josefin-sans">
                    <RouterLink :class="{'border-b-orange-500 border-b-2 ': route.name === 'home'}" :to="{ name: 'home' }" >Inicio</RouterLink>
                    <RouterLink :class="{'border-b-orange-500 border-b-2': route.name === 'spaOne'}" :to="{ name: 'spaOne' }" >Beneficios</RouterLink>
                    <RouterLink :class="{'border-b-orange-500 border-b-2': route.name === 'spaTwo'}" :to="{ name: 'spaTwo' }" >Ingredientes</RouterLink>
                    <RouterLink :class="{'border-b-orange-500 border-b-2': route.name === 'spaThree'}" :to="{ name: 'spaThree' }" >Preguntas</RouterLink>
                    <RouterLink :class="{'border-b-orange-500 border-b-2': route.name === 'non'}" :to="{ name: 'home' }" >Prasadam</RouterLink>
                </div>
                <div class="flex items-center justify-around py-1 text-xl text-white bg-orange-400 shadow-md font-poppins">
                    <img class="w-12" src="../assets/ssl-certificate.png" alt="">
                    <p class="font-parkinsans">medicinaparaartritis.com</p>
                    <img class="w-12" src="https://medicinaparaansiedad.com/img/logo.png" alt="">
                </div>
            </section>
        </header>
        <main class="overflow-hidden">
            <slot name="main">

            </slot>
        </main>
        <footer class="relative w-full p-6 text-white bg-orange-800 font-poppins">
        <!-- Sección Título -->
        <div class="mb-6 text-center">
            <h2 class="text-3xl font-bold lg:text-5xl">Contacto</h2>
        </div>

        <!-- Imagen de seguridad SSL -->
        <div class="absolute top-4 right-4">
            <img class="w-12 lg:w-16" src="https://shykandev.github.io/medicinaparadiabetes/assets/ssl-Cjd7i8VT.png" alt="SSL Seguridad" />
        </div>

        <!-- Dirección -->
        <div class="mb-8 text-center">
            <div class="flex items-center justify-center gap-2 mb-4">
                <i class="text-3xl fas fa-map-marker-alt lg:text-4xl"></i>
                <a href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México,+CDMX" target="_blank" rel="noopener noreferrer" class="text-sm font-bold lg:text-lg hover:underline">
                    Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
                </a>
            </div>
            <iframe class="w-full h-48 lg:h-72" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5395970522604!2d-99.1760704!3d19.4322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1730328617197!5m2!1sen!2smx" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="border: 0;"></iframe>
        </div>

        <!-- Sección de Contactos -->
        <div class="flex flex-wrap justify-around gap-8 mb-8 text-center">
            <!-- Teléfonos -->
            <div class="flex flex-col items-center">
                <i class="mb-2 text-3xl fas fa-phone"></i>
                <a href="tel:+525563950178" class="text-sm font-bold lg:text-lg hover:text-orange-500">
                    +52 55 6395 0178
                </a>
            </div>
            <div class="flex flex-col items-center">
                <i class="mb-2 text-3xl fas fa-phone"></i>
                <a href="tel:+525563950179" class="text-sm font-bold lg:text-lg hover:text-orange-500">
                    +52 55 6395 0179
                </a>
            </div>

            <!-- Email -->
            <div class="flex flex-col items-center">
                <i class="mb-2 text-3xl fas fa-envelope"></i>
                <a href="mailto:informes@prasadam.mx" class="text-sm font-bold lg:text-lg hover:text-orange-500">
                    informes@prasadam.mx
                </a>
            </div>

            <!-- WhatsApp -->
            <div class="flex flex-col items-center">
                <i class="mb-2 text-3xl fab fa-whatsapp"></i>
                <a href="https://wa.me/525562516687" target="_blank" rel="noopener noreferrer" class="text-sm font-bold lg:text-lg hover:text-orange-500">
                    +52 5562516687
                </a>
            </div>
        </div>

        <!-- Pie de página -->
        <div class="text-center">
            <p class="mb-2 text-sm font-bold lg:text-lg">
                Todos los derechos reservados &copy; {{new Date().getFullYear()}}
            </p>
            <p class="text-sm lg:text-lg">
                Design by <strong>PACA</strong>
            </p>
        </div>
    </footer>


    </div>
</template>

<script lang="ts" setup>
import IntroCard from '@/components/IntroCard.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>

</style>
