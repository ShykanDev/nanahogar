<template>
  <MainLayout>
    <template #main>

      <section class="mb-8">
    <h2 class="mb-4 text-2xl font-bold text-center">
      Preguntas Frecuentes (FAQ)
    </h2>
    <div class="space-y-4 font-poppins">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="p-4 bg-white rounded-lg shadow-md faq-card"
        @click="toggleFaq(index)"
      >
        <h3 class="text-xl font-bold text-gray-900">
          {{ faq.question }}
        </h3>
        <div
          class="mt-2 faq-answer"
          :class="{ 'max-h-0 overflow-hidden': !faq.active, 'max-h-full': faq.active }"
        >
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
    </template>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

const faqs = ref([
  {
    question: "¿Es segura la página web?",
    answer: "Sí, nuestra página web es completamente segura. Contamos con certificados SSL que garantizan la protección de tus datos personales mientras navegas y interactúas en nuestro sitio.",
    active: true,
  },
  {
    question: "¿La página es gratuita?",
    answer: "¡Sí! El uso de nuestra página es completamente gratuito. Puedes crear una cuenta sin costo y compartir tus experiencias sin preocuparte por pagos ocultos o suscripciones.",
    active: true,
  },
  {
    question: "¿Necesito pagar para comentar o compartir experiencias?",
    answer: "No, puedes comentar y compartir tus experiencias sin ningún costo. No hay ningún tipo de suscripción o cobro oculto.",
    active: true,
  },
  {
    question: "¿Cómo protegen mis datos personales?",
    answer: "Protegemos tus datos con altos estándares de seguridad. No compartimos tu información con terceros sin tu consentimiento. Si deseas que se eliminen tus datos, puedes contactarnos a eliminardatosarrobaemail.com.",
    active: true,
  },
  {
    question: "¿Puedo confiar en que mis datos están seguros?",
    answer: "Absolutamente. Tu privacidad es nuestra prioridad. Usamos medidas de seguridad avanzadas para proteger tus datos y evitar accesos no autorizados.",
    active: true,
  },
  {
    question: "¿Qué debo hacer si tengo más preguntas sobre la seguridad o privacidad?",
    answer: "Si tienes más preguntas, no dudes en contactarnos a través del correo electrónico proporcionado en la página de contacto.",
    active: true,
  },
  {
    question: "¿Cómo puedo crear una cuenta?",
    answer: "Crear una cuenta es muy sencillo. Solo necesitas proporcionar tu nombre, correo electrónico y crear una contraseña. Una vez registrado, podrás acceder a todas las funcionalidades de nuestra página.",
    active: true,
  },
  {
    question: "¿Qué hago si olvido mi contraseña?",
    answer: "Si olvidas tu contraseña, puedes restablecerla fácilmente. Haz clic en '¿Olvidaste tu contraseña?' en la página de inicio de sesión y sigue las instrucciones para crear una nueva.",
    active: true,
  },
  {
    question: "¿Cómo puedo eliminar mi cuenta?",
    answer: "Si deseas eliminar tu cuenta, puedes hacerlo desde la configuración de tu perfil. Si necesitas ayuda adicional, puedes contactarnos a través del correo electrónico proporcionado en la página de contacto.",
    active: true,
  },
]);


const toggleFaq = (index: number) => {
  faqs.value[index].active = !faqs.value[index].active;
};
</script>

<style scoped>
.faq-card {
  cursor: pointer;
  transition: all 0.3s ease;
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.faq-card .max-h-full {
  max-height: 200px; /* Ajusta según sea necesario */
}
</style>
