<template>
  <MainLayout>
    <template #main>

      <!-- show if email is already in use -->
      <article
        v-if="isModalOpened2"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-35"
      >
        <div class="flex flex-col items-center max-w-md p-6 mx-auto bg-white rounded-lg shadow-2xl">
          <!-- Ícono para el error -->
          <i class="text-4xl text-red-500 fas fa-times-circle"></i>
          <h2 class="mt-4 text-lg text-center text-gray-800 font-poppins">
            El correo electrónico
            <span class="font-semibold text-blue-500">{{ email }}</span>
            ya está en uso. Por favor, utilice otro correo.
          </h2>
          <button
            class="px-6 py-2 mt-5 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            @click="toggleModal2"
          >
            Cerrar
          </button>
        </div>
      </article>

      <section class="flex items-center justify-center bg-gray-100 font-poppins">
        <div class="flex flex-col items-center justify-center w-full p-4 space-y-6 bg-white rounded-lg shadow-md fade-in">
          <h2 class="text-3xl font-bold text-center animate-fade-left text-rose-700">Cree una cuenta, y comience a compartir sus experiencias</h2>
          <form class="w-3/4 space-y-6" action="#" method="POST" onsubmit="return validateForm()">
            <!-- name -->
            <div class="relative animate-fade-left">
              <label for="name" class="sr-only">Nombre completo</label>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i class="text-gray-400 fas fa-user"></i>
              </div>
              <input
                v-model="name"
                id="name"
                name="name"
                type="text"
                required
                class="block w-full p-3 pl-10 border border-gray-300 rounded-md input focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nombre completo"
              />
            </div>
            <!-- email -->
            <div class="relative animate-fade-left animate-delay-100">
              <label for="email" class="sr-only">Correo electrónico</label>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i class="text-gray-400 fas fa-envelope"></i>
              </div>
              <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                required
                class="block w-full p-3 pl-10 border border-gray-300 rounded-md input focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Correo electrónico"
              />
            </div>
            <!-- password -->
            <div class="relative animate-fade-left animate-delay-150">
              <label for="password" class="sr-only">Contraseña</label>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i class="text-gray-400 fas fa-lock"></i>
              </div>
              <input
                v-model="password"
                id="password"
                name="password"
                type="password"
                required
                class="block w-full p-3 pl-10 border border-gray-300 rounded-md input focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contraseña"
              />
            </div>
            <!-- confirm password -->
            <div class="relative animate-fade-left animate-delay-200">
              <label for="confirm-password" class="sr-only">Confirmar contraseña</label>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i class="text-gray-400 fas fa-lock"></i>
              </div>
              <input
                v-model="confirmPassword"
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                class="block w-full p-3 pl-10 border border-gray-300 rounded-md input focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirmar contraseña"
              />
            </div>
            <button
              @click.prevent="createAccount"
              type="submit"
              class="w-full py-3 font-bold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Registrarse
            </button>
          </form>
          <p class="text-center text-gray-600">
            ¿Ya tienes una cuenta?
           <router-link :to="{ name: 'login' }" class="text-blue-500 hover:underline">Iniciar Sesión</router-link>
          </p>
          <p class="mt-4 text-center text-gray-600">
            <i class="text-blue-500 fas fa-info-circle"></i> Al registrarte, aceptas nuestros
            <!-- router link to name terms -->
                <RouterLink class="text-sky-600" :to="{name:'terms'}">Términos y Condiciones</RouterLink>
          </p>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const auth = getAuth()


const router = useRouter();
const createAccount = async () => {
  // validations for the form fields
  if (password.value !== confirmPassword.value) {
    toast.error('Las contraseñas no coinciden');
    return
  }

  if (password.value.length < 6) {
    toast.error('La contraseña debe tener al menos 6 caracteres');
    return
  }

  if (name.value.length < 3) {
    toast.error('El nombre debe tener al menos 3 caracteres');
    return
  }

  if (!email.value.includes('@')) {
    toast.error('El correo electrónico debe ser válido');
    return
  }



  try {
    // Crear usuario con correo y contraseña
    const userValue = await createUserWithEmailAndPassword(auth, email.value, password.value);

    // Actualizar el perfil del usuario con el nombre
    await updateProfile(userValue.user, {
      displayName: name.value, // name.value es el campo donde el usuario ingresa su nombre
    });

    if (!userValue.user.emailVerified) {
      await sendEmailVerification(userValue.user);
    }
    router.push({ name: 'login' });

    // Enviar correo de verificación
    setTimeout(() => {
      toast.success(`Un correo de verificación ha sido enviado a ${email.value}. Por favor verifique su bandeja de entrada para activar su cuenta`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000,
      })
          }, 500);
    setTimeout(() => {
      toast.info('Su cuenta se ha creado, antes de iniciar sesion por primera vez haga click en el enlace de verificación que le hemos enviado, este paso solo es necesario una vez', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 15000
      })

    }, 12000);
    // Abrir modal de éxito
    isModalOpened.value = true;
  } catch (error) {
    // Manejo de errores
    if (error.code === 'auth/email-already-in-use') {
      isModalOpened2.value = true;
    } else {
      console.log(`Error al crear la cuenta: ${error.message}`);
    }
  }
};


const isModalOpened = ref(false)
const isModalOpened2 = ref(false)
const toggleModal = (): void => {
  isModalOpened.value = !isModalOpened.value
  name.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}
const toggleModal2 = (): void => {
  isModalOpened2.value = false
  name.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}
</script>

<style scoped></style>
