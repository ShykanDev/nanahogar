<template>
  <MainLayout>
    <template #main>
      <article class="overflow-hidden">
      <section class="flex overflow-hidden">
        <article class="w-1/2 py-4 space-y-4 animate-fade-left">

          <h2 class="py-5 text-2xl font-semibold text-center uppercase bg-white rounded-lg shadow-md text-sky-800 font-poppins">
  <i class="mr-2 fas fa-comment"></i> Comentarios de Dueños del Hogar  <i class="mr-2 fas fa-home"></i>
</h2>

    <div class="flex justify-center w-full">
      <a href="#comentar" class="px-6 py-2 mt-5 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2" >
        Comentar como dueño
      </a>
    </div>
          <CommentCard v-for="story in stories" :title="story.title" :key="story.name" :name="story.name"
            :date="story.date" :comment="story.comment" :stars="story.stars" />
        </article>
        <article class="w-1/2 space-y-4 bg-slate-50 animate-fade-left animate-delay-200">
            <!-- <h2 class="sticky py-5 text-2xl font-semibold text-center uppercase bg-white rounded-lg shadow-md min-h-20 text-rose-800 font-poppins">Comentarios de Asesoras del Hogar</h2> -->
            <h2 class="sticky top-0 py-5 text-2xl font-semibold text-center uppercase bg-white rounded-lg shadow-md min-h-20 text-rose-800 font-poppins">
  <i class="mr-2 fas fa-female"></i> Comentarios de Asesoras del Hogar <i class="ml-2 fas fa-comment-dots"></i>
</h2>
<div class="flex justify-center w-full">
      <a href="#comentar" class="px-6 py-2 mt-5 text-sm font-semibold text-white rounded-md bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2" >
        Comentar como asesora de hogar
      </a>
    </div>
          <CommentCard v-for="story in storiesNana" :title="story.title" :key="story.name" :name="story.name" :date="story.date"
            :comment="story.comment" :stars="story.stars" />

        </article>
      </section>
      <!-- comment -->
      <section id="comentar" class="py-5 bg-gray-50">
        <section class="w-10/12 p-6 mx-auto bg-white rounded-lg shadow-lg font-poppins">
          <h2 class="mb-4 text-2xl font-semibold text-center text-slate-800">Compartir historia</h2>

          <!-- Toggle para seleccionar el rol -->
          <div class="mb-4">
            <label class="text-sm font-semibold text-gray-600">Comentar como:</label>
            <div class="flex items-center mt-2 space-x-4">
              <label for="owner" class="flex items-center cursor-pointer">
                <i class="mr-2 fas fa-user-tie text-sky-900"></i> <!-- Icono de dueño -->
                <input type="radio" id="owner" v-model="role" value="dueño" class="mr-2" />
                Dueño
              </label>
              <label for="helper" class="flex items-center cursor-pointer">
                <i class="mr-2 fas fa-female text-rose-600"></i> <!-- Icono de asesora -->
                <input type="radio" id="helper" v-model="role" value="asesora" class="mr-2" />
                Asesora del hogar
              </label>
            </div>
          </div>

          <!-- Comentario -->
          <div class="mb-4">
            <h3 class="py-2 text-sm italic font-medium text-gray-600">Se usará automáticamente el nombre de usuario con
              el que se registró</h3>
            <label for="comment" class="block text-sm font-medium text-gray-900">Título de la Historia</label>
            <input type="text" id="comment" v-model="comment"
              placeholder="Agradezco a mi trabajadora doméstica por su honestidad y compromiso"
              class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500" />
          </div>

          <div class="mb-4">
            <label for="fullComment" class="block text-sm font-medium text-gray-700">Historia</label>
            <textarea id="fullComment" v-model="fullComment" placeholder="Escribe tu Historia aquí..."
              class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              rows="4"></textarea>
          </div>

          <!-- Estrellas para Rating -->
          <div class="flex items-center mb-4 space-x-1">
            <span class="text-sm font-medium text-gray-700">Calificación:</span>
            <div class="flex items-center">
              <span @click="setRating(1)" :class="{ 'text-yellow-500': rating >= 1, 'text-gray-300': rating < 1 }"
                class="cursor-pointer fas fa-star fa-lg"></span>
              <span @click="setRating(2)" :class="{ 'text-yellow-500': rating >= 2, 'text-gray-300': rating < 2 }"
                class="cursor-pointer fas fa-star fa-lg"></span>
              <span @click="setRating(3)" :class="{ 'text-yellow-500': rating >= 3, 'text-gray-300': rating < 3 }"
                class="cursor-pointer fas fa-star fa-lg"></span>
              <span @click="setRating(4)" :class="{ 'text-yellow-500': rating >= 4, 'text-gray-300': rating < 4 }"
                class="cursor-pointer fas fa-star fa-lg"></span>
              <span @click="setRating(5)" :class="{ 'text-yellow-500': rating >= 5, 'text-gray-300': rating < 5 }"
                class="cursor-pointer fas fa-star fa-lg"></span>
            </div>
          </div>

          <!-- Botón de Enviar -->
          <button @click="submitComment"
            class="w-full py-2 text-white rounded-md shadow-md bg-sky-800 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500">
            <i class="mr-2 fas fa-paper-plane"></i> Enviar Historia <!-- Icono del botón de envío -->
          </button>
        </section>

      </section>
    </article>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import CommentCard from '@/components/comments/CommentCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const stories = [
  {
    title: "Mi mejor asesora",
    name: "Ana Pérez",
    date: "2024-12-10",
    comment: "Soy Ana Pérez y quiero contar una historia increíble sobre Laura Méndez, una ama de hogar que trabajó con nosotros durante casi dos años. Laura no solo se encargó de las tareas del hogar, sino que siempre estuvo dispuesta a escuchar y apoyar a cada miembro de la familia. Su dedicación y cariño hacia todos nosotros fueron fundamentales durante un momento complicado de nuestra vida familiar. Gracias a su compromiso, nuestra casa se convirtió en un lugar más organizado y armonioso.",
    stars: 5,
  },
  {
    title: "Mi nana me devolvió 12 mil pesos que perdí",
    name: "Carlos Gómez",
    date: "2024-12-11",
    comment: "Quiero compartir mi experiencia con Marta Rodríguez, quien nos ayudó en casa mientras mi esposa y yo trabajábamos. Un día, perdí una suma importante de dinero y Marta, al escuchar mi preocupación, decidió ayudarme a buscarlo. Con su paciencia y dedicación, logramos encontrar los 12 mil pesos que había perdido, lo que me dejó profundamente agradecido por su actitud responsable y su disposición para ayudarnos más allá de sus tareas.",
    stars: 5,
  },
  {
    title: "La asesora que me robó el collar",
    name: "Luis Hernández",
    date: "2024-12-12",
    comment: "Contraté a una asesora doméstica llamada Verónica para que me ayudara en casa. Durante su tiempo con nosotros, noté que algunos objetos empezaron a faltar, hasta que un día descubrí que mi collar de 75 mil pesos había desaparecido. Después de hablar con Verónica, no solo negó haberlo tomado, sino que comenzó a inventar excusas. Lamentablemente, tuve que despedirla, y aunque la situación fue muy incómoda, aprendí a ser más cuidadoso con la selección de las personas que invito a mi hogar.",
    stars: 1,
  },
  {
    title: "Excelente ayuda pero poco comprometida",
    name: "Sofía Martínez",
    date: "2024-12-13",
    comment: "Contraté a Teresa para que ayudara con las tareas domésticas, pero aunque al principio todo parecía ir bien, poco a poco su compromiso disminuyó. A pesar de que realizaba su trabajo, nunca mostró mucha iniciativa ni ganas de mejorar las cosas en la casa. Finalmente, decidí terminar el contrato porque sentí que no estaba aportando lo que necesitábamos.",
    stars: 3,
  },
  {
    title: "Mi ama de hogar siempre fiel",
    name: "Patricia Ríos",
    date: "2024-12-14",
    comment: "Mi experiencia con Carmen fue muy positiva desde el principio. Ella no solo era excelente en su trabajo, sino que también mostraba una dedicación y lealtad que rara vez se encuentran. Siempre estuvo ahí para ayudar en cualquier momento, y su compromiso hizo que nuestra vida fuera mucho más fácil. Estoy muy agradecida con Carmen por su esfuerzo y dedicación.",
    stars: 5,
  },
];
const storiesNana = [
  {
    title: "Mi mejor empleador",
    name: "Laura Méndez",
    date: "2024-12-10",
    comment: "Soy Laura Méndez y quiero compartir mi experiencia trabajando con la familia Pérez. Durante casi dos años, me encargué de las tareas del hogar, pero lo que realmente me hizo sentir especial fue la forma en que me trataron. Siempre hubo respeto y un ambiente de apoyo mutuo, especialmente en los momentos difíciles. Sentí que no solo era parte del hogar, sino también del bienestar emocional de la familia. Estoy muy agradecida por la oportunidad y por la confianza que me brindaron.",
    stars: 5,
  },
  {
    title: "Devolví el dinero perdido con honestidad",
    name: "Marta Rodríguez",
    date: "2024-12-11",
    comment: "Quiero contarles cómo me sentí al ayudar a la familia Gómez a encontrar los 12 mil pesos que habían perdido. Aunque mi trabajo es ayudar en las tareas del hogar, siempre me he esforzado por ser honesta y responsable. Cuando Carlos me mencionó su preocupación por el dinero perdido, no dudé en ofrecer mi ayuda. Me hizo sentir muy bien poder ser de apoyo en ese momento, y agradezco la confianza que me brindaron para resolver la situación.",
    stars: 5,
  },
  {
    title: "La familia que no entendió mi situación",
    name: "Verónica Ruiz",
    date: "2024-12-12",
    comment: "Trabajé con la familia Hernández, y aunque siempre traté de hacer lo mejor en mis tareas, nunca pude evitar la sensación de desconfianza. Un día, el señor Luis notó que su collar había desaparecido y me acusó de robarlo sin más pruebas. A pesar de que le expliqué que no lo tomé, la situación no mejoró y fui despedida. Fue un mal momento, y aunque entiendo que cada familia tiene sus preocupaciones, creo que no se dio una oportunidad para aclarar las cosas.",
    stars: 2,
  },
  {
    title: "Mi trabajo no fue apreciado",
    name: "Teresa Sánchez",
    date: "2024-12-13",
    comment: "Trabajé con la familia Martínez durante un tiempo, pero a pesar de que realizaba todas mis tareas de manera puntual, nunca sentí que mi esfuerzo fuera apreciado. Siempre traté de mejorar las condiciones del hogar, pero la familia nunca mostró mucho interés en mi compromiso o en reconocer mis aportes. Finalmente, decidí dejar la posición, ya que sentí que no estaban valorando mi trabajo.",
    stars: 3,
  },
  {
    title: "Una familia muy agradecida",
    name: "Carmen Gómez",
    date: "2024-12-14",
    comment: "Mi experiencia con la familia Ríos fue increíble. Desde el principio, sentí que mi trabajo tenía un impacto positivo en su vida diaria. No solo me valoraron como trabajadora, sino que también me trataron con respeto y aprecio, lo que me hizo sentir parte de la familia. Siempre intenté hacer lo mejor en mi labor, y me sentí profundamente agradecida por el ambiente de apoyo que crearon.",
    stars: 5,
  },
];

import { ref } from 'vue';

const role = ref('dueño');  // Estado inicial como 'dueño'
const comment = ref('');
const fullComment = ref('');
const rating = ref(3);

// Función para cambiar el rating
const setRating = (star) => {
  rating.value = star;
};

// Función para enviar el comentario
const submitComment = () => {
  // Aquí puedes manejar el envío del comentario y rating
  console.log('Rol:', role.value);
  console.log('Título del comentario:', comment.value);
  console.log('Comentario completo:', fullComment.value);
  console.log('Rating:', rating.value);
  // Puedes enviar estos datos a Firebase u otro backend
};
</script>


<style scoped></style>
