<template>
  <MainLayout>
    <template #main>
      <section class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg fade-in">
            <div class="mb-6 text-center">
                <h1 class="text-2xl font-semibold text-gray-800">
                    <i class="text-red-500 fas fa-exclamation-circle"></i> Inicio de sesión requerido para poder comentar y compartir experiencias
                </h1>
            </div>
            <div class="mb-6 text-center">
                <h1 class="text-2xl font-bold text-gray-800">
                    Iniciar Sesión
                </h1>
            </div>
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700" for="email">
                        Correo Electrónico
                    </label>
                    <div class="flex items-center overflow-hidden border border-gray-300 rounded-lg">
                        <span class="px-3 text-gray-500">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <input class="w-full px-3 py-2 text-gray-700 focus:outline-none" id="email" placeholder="correo@ejemplo.com" type="email"/>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700" for="password">
                        Contraseña
                    </label>
                    <div class="flex items-center overflow-hidden border border-gray-300 rounded-lg">
                        <span class="px-3 text-gray-500">
                            <i class="fas fa-lock"></i>
                        </span>
                        <input class="w-full px-3 py-2 text-gray-700 focus:outline-none" id="password" placeholder="********" type="password"/>
                    </div>
                </div>
                <div class="mb-6 text-right">
                    <a class="text-sm text-blue-500 transition duration-300 hover:text-blue-700" href="#">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
                <div class="mb-6">
                    <button class="w-full px-4 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-700" type="submit">
                        Iniciar Sesión
                    </button>
                </div>
                <div class="text-center">
                    <a class="text-sm text-gray-700 transition duration-300 hover:text-gray-900" href="#">
                        Crear cuenta
                    </a>
                </div>
            </form>
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
