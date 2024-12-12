<template>
  <div class="w-5/6 p-4 mx-auto bg-white rounded-lg shadow-md font-poppins">
    <header class="flex items-center justify-between pb-2 mb-4 border-b">
      <h2 class="text-lg italic font-bold text-gray-800">"{{ title }}"</h2>
      <p class="text-sm text-gray-500">{{ date }}</p>
    </header>
    <h2 class="text-lg font-bold text-gray-800">{{ name }}</h2>
    <div class="mb-4">
      <p class="text-gray-700">{{ comment }}</p>
    </div>
    <p class="py-1 text-xs text-gray-500 text-start">Calificación que dió {{ name }}</p>
    <footer class="flex items-center space-x-1">

      <span
        v-for="n in 5"
        :key="n"
        class="text-xl"
        :class="n <= stars ? 'text-yellow-400' : 'text-gray-300'"
      >
        <i class="fas fa-star"></i>
      </span>
      <!-- likes section at bottom right -->
      <div class="flex items-center justify-end w-full space-x-2 ">
        <button @click="like" class=" hover:text-blue-500" :class="{ 'text-blue-500 animate-jump': liked }">
            <i class="fas fa-thumbs-up" :class="{ 'text-blue-500': liked }" ></i>  Me gusta
        </button>
        <a href="#comentar">
          <button class="text-gray-500 hover:text-blue-500">
            <i class="fas fa-comment"></i> Comentar
          </button>
        </a>
      </div>
    </footer>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

const liked = ref(false);
const likes = ref(Math.floor(Math.random() * 100));
const like = () => {
  if (!liked.value) {
    liked.value = true;
    likes.value++;
  }
  else {
    liked.value = false;
    likes.value--;
  }
}

defineProps({
  title: {
    type: String,
    default: "Titulo no especificado", // Valor por defecto para el titulo
  },
  name: {
    type: String,
    default: "Usuario Anónimo", // Valor por defecto para el nombre
  },
  date: {
    type: String,
    default: "Fecha no especificada", // Valor por defecto para la fecha
  },
  comment: {
    type: String,
    default: "Este usuario no ha dejado ningún comentario.", // Valor por defecto para el comentario
  },
  stars: {
    type: Number,
    default: 3, // Valor por defecto para las estrellas
    validator: (value:number) => value >= 1 && value <= 5,
  },
});
</script>

<style scoped>
/* No necesitas estilos personalizados, ya que TailwindCSS los maneja. */
</style>
