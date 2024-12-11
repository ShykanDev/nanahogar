<template>
   <div class="mx-auto overflow-hidden transition-transform duration-300 bg-white shadow-lg rounded-3xl hover:scale-105">
   <div class="flex items-center p-5 space-x-4">
    <!-- Avatar Section -->
    <div class="flex-shrink-0">
     <img alt="User avatar with a neutral expression, short hair, and a plain background" class="object-cover rounded-full w-14 h-14" height="56" :src="img" width="56"/>
    </div>
    <div>
     <p class="text-xl font-semibold text-gray-800">
{{name}}
     </p>
     <p class="text-sm text-gray-500">
      {{date}}
     </p>
    </div>
   </div>
   <div class="p-5 space-y-3">
    <!-- Description Section -->
    <p class="text-base text-gray-700">
{{description}}
    </p>
    <p class="flex items-center space-x-2 text-sm text-gray-600">
     <i class="text-gray-500 fas fa-comment-alt">
     </i>
     <span>
     {{comment}}
     </span>
    </p>
   </div>
   <div class="flex items-center justify-between p-4 border-t border-gray-200">
    <!-- Like Button -->
    <div class="flex items-center space-x-2">
     <button class="flex items-center text-gray-600 transition duration-300 ease-in-out hover:text-blue-600 focus:outline-none">
      <i class="fas fa-thumbs-up">
      </i>
      <span class="ml-2">
       Me gusta
      </span>
     </button>
    </div>
   </div>
  </div>
</template>


<script lang="ts" setup>

const props = defineProps({
    img: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_WE4hUxUFNJ_WC_5NwTBjUxSr1xMF7batA&s'
    },
    name:{
        type: String,
        default: 'Jonty Andrews'
    },
    description:{
        type: String,
        default: '"Me ha ayudado bastante"'
    },
    date: {
        type: String,
        default: 'March 13, 2020'
    },
    rating: {
        type: String,
        default: '⭐⭐⭐⭐⭐'
    },
    comment: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, perspiciatis impedit officia quaerat'
    }
})
</script>

<style scoped></style>
