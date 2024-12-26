<template>
   <MainLayout>
    <template #main>
      <section class="flex items-center justify-center min-h-screen bg-gray-100 font-poppins">
  <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
    <h2 class="mb-4 text-2xl font-bold text-center text-gray-800">Restaurar Contraseña</h2>
    <p class="mb-6 text-sm text-center text-gray-600">Introduzca su dirección de correo electrónico para recibir un enlace de restablecimiento de contraseña.</p>
    <form>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Correo</label>
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="text-gray-400 fas fa-envelope"></i>
          </span>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="w-full px-3 py-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="correo@ejemplo.com"
            required>
        </div>
      </div>
      <button
      @click.prevent="restorePassword"
        type="submit"
        class="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
        Enviar link de restablecimiento
      </button>
    </form>
    <div class="mt-4 text-center">
      <!-- router-link to="/login" -->
      <router-link :to="{ name: 'login' }" class="font-semibold text-blue-500 hover:underline"><i class="mr-2 fas fa-arrow-left"></i>Regresar al Inicio de Sesión</router-link>
    </div>
  </div>
</section>
    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
const auth = getAuth();
const email = ref('')
const restorePassword = async() => {
  try {
    const credentials = await sendPasswordResetEmail(auth, email.value);
    const user  = credentials;
    toast.success('Si el correo electrónico proporcionado está registrado, se le enviará un enlace para restablecer su contraseña, verifique su bandeja de entrada',{
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 50000
    });
  } catch (error) {
    console.log(error);
  }
}


</script>

<style scoped>

</style>
