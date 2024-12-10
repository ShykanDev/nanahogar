<template>
  <section>
    <article
      class="flex items-center justify-center gap-10 p-10 bg-gradient-to-r from-orange-700 via-yellow-500 to-orange-700"
    >
      <!-- Contenedor de texto con estilos modernos -->
      <div class="flex flex-col gap-5 p-6 bg-white rounded-lg shadow-lg bg-opacity-90">
        <h2 class="text-3xl font-bold text-orange-800">
          FLEX-IMAC FORTE: Alivie y Revitalice sus Articulaciones y Músculos
        </h2>
        <h2 class="text-xl font-semibold text-black">
          <i class="text-green-400 fas fa-hand-holding-medical"></i> Apoyo Directo a sus
          Articulaciones <i class="text-green-400 fas fa-hand-holding-medical"></i>
        </h2>
        <h2 class="text-xl font-semibold text-black">
          <i class="text-orange-400 fas fa-dumbbell"></i> Mejore su Flexibilidad y Fuerza
          <i class="text-orange-400 fas fa-dumbbell"></i>
        </h2>
        <h2 class="text-xl font-semibold text-black">
          <i class="text-white fas fa-heartbeat"></i> Fortalezca y Cuide sus Músculos
          <i class="text-white fas fa-heartbeat"></i>
        </h2>
        <div class="flex items-center w-full gap-4 bg-white rounded-lg shadow-lg bg-opacity-90">
          <img
            src="https://i.ibb.co/VqZ4mch/saint-Indian-removebg-preview.png"
            alt="Representación de la medicina ayurvédica"
            class="w-24 h-24 border-4 border-yellow-400 rounded-full shadow-md md:w-32 md:h-32"
          />
          <p class="text-lg font-medium text-center text-black md:text-xl">
            Medicina ayurvédica con origen milenario en la India para el bienestar articular.
          </p>
        </div>
      </div>

      <!-- Imagen con esquinas redondeadas y sombreado -->
      <img
        src="https://i.ibb.co/x8jP5bQ/insta-Go-Main.jpg"
        class="w-[40%] rounded-lg shadow-md"
        alt="Imagen representativa de InstaGo"
      />
    </article>

    <!-- Sección de imágenes en grid con título en cada una -->
    <section
      class="grid grid-cols-2 gap-4 p-4 font-bold md:grid-cols-3 lg:grid-cols-4 font-poppins bg-gradient-to-r from-orange-700 via-yellow-500 to-orange-700"
    >
      <div class="relative overflow-hidden bg-white rounded-lg shadow-lg">
        <img
          src="https://files.oaiusercontent.com/file-71wLV49UkWyoA3AL4nsq6r?se=2024-11-29T23%3A09%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D57b746b8-fe71-45d9-a3f9-7ac1e80e22a4.webp&sig=CmlG1W4N9ftuIv9K9xm3uth0WKr%2BGPWNlRz0foDhR24%3D"
          alt="Problemas de relación"
          class="object-cover w-full h-full"
        />
        <h2
          class="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-black bg-opacity-50"
        >
          Alivio al dolor de espalda
        </h2>
      </div>

      <div class="relative overflow-hidden bg-white rounded-lg shadow-lg">
        <img
          src="https://storage.googleapis.com/a1aa/image/vQmvgmEt6xYaNlMXBy1zhLE6sRf9eAq4V7JbfkU7RGfobeveE.jpg"
          alt="Conflicto de pareja"
          class="object-cover w-full h-full"
        />
        <h2
          class="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-black bg-opacity-50"
        >
          Solución al dolor de rodilla
        </h2>
      </div>

      <div class="relative overflow-hidden bg-white rounded-lg shadow-lg">
        <img
          src="https://storage.googleapis.com/a1aa/image/y0VncefBlokgF0K6HgxRkE5ftyBNabmmdHGf77RDSCYvgeveE.jpg"
          alt="Dificultades sexuales"
          class="object-cover w-full h-full"
        />
        <h2
          class="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-black bg-opacity-50"
        >
          Alivio al dolor articular de manos
        </h2>
      </div>

      <div class="relative overflow-hidden bg-white rounded-lg shadow-lg">
        <img
          src="https://storage.googleapis.com/a1aa/image/x17JIXDx614KDFmnX8sG5GLhJWvCTpGyk1adOJ6eSd8M0f1TA.jpg"
          alt="Tensión en la relación"
          class="object-cover w-full h-full"
        />
        <h2
          class="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-black bg-opacity-50"
        >
          Solución al dolor muscular de cuello
        </h2>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped></style>
