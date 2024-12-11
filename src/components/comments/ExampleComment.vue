<template>
  <div class="flex items-start p-4 mb-4 space-x-4 bg-white rounded-lg shadow-sm comment">
    <!-- Imagen del usuario -->
    <img
      :src="image"
      alt="User Avatar"
      class="object-cover w-12 h-12 rounded-full"
    />

    <!-- Contenido del comentario -->
    <div class="flex-1">
      <h3 class="text-sm font-semibold text-gray-800">{{ name }}</h3>
      <p class="flex items-center space-x-2 text-xs text-gray-500">
        <i class="text-gray-400 fas fa-clock"></i>
        <span>{{ date }}</span>
      </p>
      <p class="mt-2 text-sm text-gray-700">{{ summary }}</p>
    </div>

  </div>
</template>

<script lang="ts" setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  }
});
</script>

<style scoped>

</style>
