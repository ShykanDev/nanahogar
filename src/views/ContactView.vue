<template>
  <div>
    <MainLayout>
      <template #main>
        <section class="flex items-center justify-center py-2 bg-gray-100">
  <div class="w-full max-w-3xl p-8 bg-white shadow-2xl rounded-xl">
    <h2 class="mb-8 text-4xl font-semibold text-center text-teal-800">Contacto</h2>
    <p class="mb-10 text-lg text-center text-gray-500">Llene el formulario y nos pondremos en contacto con usted.</p>
    <form @submit.prevent="sendEmail" class="space-y-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label for="name" class="block text-sm font-medium text-teal-700">Nombre</label>
          <input v-model="name" type="text" id="name" name="name" :class="{'border-red-500': noName}" required
            placeholder="Raúl Jiménez"
            class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition ease-in-out border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none" />
          <p v-if="noName" class="mt-1 text-xs text-red-500">Este campo es obligatorio.</p>
        </div>
        <div>
          <label for="subject" class="block text-sm font-medium text-teal-700">Asunto</label>
          <input v-model="subject" type="text" id="subject" name="subject" :class="{'border-red-500': noSubject}" required
            placeholder="Ejemplo: Asesoría sobre asesoras del hogar"
            class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition ease-in-out border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none" />
          <p v-if="noSubject" class="mt-1 text-xs text-red-500">Este campo es obligatorio.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label for="email" class="block text-sm font-medium text-teal-700">Correo Electrónico</label>
          <input v-model="email" type="email" id="email" name="email" :class="{'border-red-500': noEmail}" required
            placeholder="correo@ejemplo.com"
            class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition ease-in-out border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none" />
          <p v-if="noEmail" class="mt-1 text-xs text-red-500">Este campo es obligatorio.</p>
        </div>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-teal-700">Mensaje</label>
        <textarea id="message" name="message" rows="6" v-model="message" :class="{'border-red-500': noMessage}" required
          placeholder="Escriba su mensaje"
          class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 transition ease-in-out border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"></textarea>
        <p v-if="noMessage" class="mt-1 text-xs text-red-500">Este campo es obligatorio.</p>
      </div>

      <div class="text-center">
        <button type="submit"
          class="w-full px-6 py-3 text-lg font-medium text-white transition duration-300 bg-teal-800 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50">
          Enviar
        </button>
      </div>
    </form>
  </div>
</section>

      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const name = ref('');
const subject = ref('');
const email = ref('');
const message = ref('');

const noName = ref(false);
const noSubject = ref(false);
const noEmail = ref(false);
const noMessage = ref(false);

const sendEmail = async () => {
  if (!name.value || !subject.value || !email.value || !message.value) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const templateParams = {
    name: name.value,
    subject: subject.value,
    email: email.value,
    message: message.value,
    reply_to: email.value
  };

  try {
    await emailjs.send(
      'service_3nl9wkf.', // Reemplaza con tu Service ID
      'template_2q2mc52', // Reemplaza con tu Template ID
      templateParams,
      'fXlbInB-wrOGPiUbH' // Reemplaza con la clave pública que obtuviste
    );
    notify();
    name.value = '';
    subject.value = '';
    email.value = '';
    message.value = '';

  } catch (error) {
    console.error('Error al enviar el correo:', error);

  }
};

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const notify = () => {

  toast.success("Su mensaje ha sido enviado, pronto nos pondremos en contacto", {
    position: toast.POSITION.TOP_RIGHT,
  });


};

</script>

<style scoped>
/* Puedes añadir más estilos personalizados si lo deseas */
</style>
