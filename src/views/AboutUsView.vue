<template>
  <MainLayout>
    <template #main>
      <div class="w-full p-8 bg-white rounded-lg shadow-lg fade-in md:bg-white">
        <div class="mb-6 text-center">
          <h1 class="text-3xl font-bold text-rose-800">Sobre Nosotros</h1>
        </div>
        <div class="mb-6">
          <p class="text-lg text-gray-700">
            Nuestro objetivo principal es ayudar a las personas a compartir sus experiencias, ya
            sean positivas o negativas, relacionadas con las amas del hogar. Queremos que te sientas
            cómodo al compartir tus historias y que encuentres un espacio seguro y acogedor para
            hacerlo.
          </p>
        </div>
        <div class="mb-6">
          <p class="text-lg text-gray-700">
            Esta página fue creada con el propósito de ser totalmente gratuita para los usuarios,
            sin ningún tipo de cobro o suscripción oculta. Queremos asegurarnos de que todos puedan
            expresar sus vivencias sin preocupaciones económicas.
          </p>
        </div>
        <div class="mb-6">
          <p class="text-lg text-gray-700">
            Estamos aquí para servirles. Nuestro equipo está comprometido con ofrecer un espacio
            seguro y útil para la comunidad, donde cada experiencia es valiosa. Tu voz es importante
            para nosotros.
          </p>
        </div>
        <div class="mb-6">
          <p class="text-lg text-gray-700">
            Además, creemos en la importancia de la transparencia y la honestidad. Por eso, nos
            esforzamos en mantener una plataforma libre de publicidad invasiva y de cualquier tipo
            de manipulación de contenido. Queremos que te sientas libre de compartir tus
            experiencias de manera auténtica y sin filtros.
          </p>
        </div>
        <div class="mb-6">
          <p class="text-lg text-gray-700">
            Nuestro equipo está compuesto por profesionales dedicados que trabajan incansablemente
            para mejorar la plataforma y asegurarse de que sea un lugar seguro y confiable para
            todos. Valoramos cada comentario y sugerencia que recibimos, y estamos comprometidos a
            hacer de esta página un recurso valioso para la comunidad.
          </p>
        </div>
        <div class="mb-6 text-center">
          <p class="text-lg text-gray-700">
            Si tienes alguna duda, no dudes en contactarnos a través del correo electrónico
            <a
              class="text-blue-500 transition duration-300 hover:text-blue-700"
              href="mailto:informes@parasadam.mx"
            >
              informes@parasadam.mx
            </a>
          </p>
        </div>
        <div class="text-center">
<!-- router link to contact -->
          <router-link
            class="inline-block px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            to="/contacto"
          >
            Contactanos
          </router-link>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style scoped></style>
