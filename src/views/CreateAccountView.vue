<template>
   <MainLayout>
        <template #main>
          <section class="flex items-center justify-center bg-gray-100">
          <div class="w-full max-w-4xl p-4 space-y-6 bg-white rounded-lg shadow-md fade-in">
        <h2 class="text-3xl font-bold text-center">Registro de Usuario</h2>
        <form class="space-y-6" action="#" method="POST" onsubmit="return validateForm()">
            <div class="relative">
                <label for="name" class="sr-only">Nombre completo</label>
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i class="text-gray-400 fas fa-user"></i>
                </div>
                <input id="name" name="name" type="text" required class="block w-full p-3 pl-10 border border-gray-300 rounded-md input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nombre completo">
            </div>
            <div class="relative">
                <label for="email" class="sr-only">Correo electrónico</label>
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i class="text-gray-400 fas fa-envelope"></i>
                </div>
                <input id="email" name="email" type="email" required class="block w-full p-3 pl-10 border border-gray-300 rounded-md input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Correo electrónico">
            </div>
            <div class="relative">
                <label for="password" class="sr-only">Contraseña</label>
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i class="text-gray-400 fas fa-lock"></i>
                </div>
                <input id="password" name="password" type="password" required class="block w-full p-3 pl-10 border border-gray-300 rounded-md input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contraseña">
            </div>
            <div class="relative">
                <label for="confirm-password" class="sr-only">Confirmar contraseña</label>
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i class="text-gray-400 fas fa-lock"></i>
                </div>
                <input id="confirm-password" name="confirm-password" type="password" required class="block w-full p-3 pl-10 border border-gray-300 rounded-md input focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirmar contraseña">
            </div>
            <button type="submit" class="w-full py-3 font-bold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600">Registrarse</button>
        </form>
        <p class="text-center text-gray-600">¿Ya tienes una cuenta? <a href="#" class="text-blue-500 hover:underline">Inicia sesión</a></p>
        <p class="mt-4 text-center text-gray-600"><i class="text-blue-500 fas fa-info-circle"></i> Al registrarte, aceptas nuestros <a href="#" class="text-blue-500 hover:underline">Términos y Condiciones</a>.</p>
          </div>
        </section>

        </template>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped>

</style>
