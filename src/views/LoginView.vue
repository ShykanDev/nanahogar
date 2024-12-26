<template>
  <MainLayout>
    <template #main>
      <section class="flex items-center justify-center py-16 bg-gray-50 alfa">
        <article v-if="emailNotVerified" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-35 font-poppins">
          <div class="flex flex-col items-center max-w-md p-6 mx-4 bg-white rounded-lg shadow-2xl">
            <!-- Ícono de seguridad -->
            <i class="text-4xl text-yellow-500 fas fa-lock"></i>

            <h2 class="mt-4 text-lg text-center text-gray-800 font-poppins">
              Solo un paso más.
            </h2>
            <p class="text-sm text-center text-gray-600">
              Por medidas de seguridad, necesitamos que verifique su correo a través del enlace que hemos enviado.
            </p>

            <button
              class="px-6 py-2 mt-5 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              @click="toggleModal">
              Cerrar
            </button>
          </div>
        </article>

        <div class="z-10 w-3/6 p-8 bg-white rounded-lg shadow-2xl fade-in font-poppins animate-fade">
          <div class="mb-6 text-center">
            <h1 class="text-sm font-semibold text-sky-800">
              <i class="text-sky-500 fas fa-exclamation-circle"></i> Inicio de sesión requerido para
              poder comentar y compartir experiencias
            </h1>
          </div>
          <div class="mb-6 text-center">
            <h1 class="text-2xl font-bold text-slate-700 font-poppins">Iniciar Sesión</h1>
          </div>
          <form>
            <div class="mb-4">
              <label class="block text-gray-700" for="email"> Correo Electrónico </label>
              <div class="flex items-center overflow-hidden border border-gray-300 rounded-lg">
                <span class="px-3 text-gray-500">
                  <i class="fas fa-envelope"></i>
                </span>
                <input v-model="email" class="w-full px-3 py-2 text-gray-700 focus:outline-none" id="email"
                  placeholder="correo@ejemplo.com" type="email" />
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700" for="password"> Contraseña </label>
              <div class="flex items-center overflow-hidden border border-gray-300 rounded-lg">
                <span class="px-3 text-gray-500">
                  <i class="fas fa-lock"></i>
                </span>
                <input v-model="password" class="w-full px-3 py-2 text-gray-700 focus:outline-none" id="password"
                  placeholder="********" type="password" />
              </div>
            </div>
            <div class="mb-6 text-right">
        <!-- olvidaste tu contraseña router link -->
              <RouterLink :to="{ name: 'forgotPassword' }" class="font-semibold underline text-sky-800 hover:text-sky-500">¿Olvidó su contraseña?</RouterLink>
            </div>
            <div class="mb-6">
              <button @click.prevent="login"
                class="w-full px-4 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-700"
                type="submit">
                Iniciar Sesión
              </button>
            </div>
            <div class="text-center">
              <RouterLink :to="{ name: 'register' }" class="font-semibold underline text-sky-900 hover:text-sky-500">
                Crear cuenta</RouterLink>
            </div>
          </form>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { useUserValues } from '@/stores/userValues';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue'
import {  useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const email = ref('')
const password = ref('')

const auth = getAuth();
const storeUserValues = useUserValues();

const router = useRouter();

const login = async () => {
  // verify if user values are valid
  if(email.value === "" || password.value === ""){
    toast.error("Por favor, rellene todos los campos", {
      position: toast.POSITION.TOP_RIGHT,
      theme:"dark",
      autoClose: 2000
    })
    return
  }
  if(
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)
  ){
    toast.error("Por favor, ingrese un correo valido", {
      position: toast.POSITION.TOP_RIGHT,
      theme:"dark",
      autoClose: 2000
    })
    return
  }
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // setting user uid
    if(user.uid){
      useUserValues().setUserUid(user.uid);

    }
    // Verificar si el correo está verificado
    if (user.emailVerified) {
      emailNotVerified.value = false;
      useUserValues().setUserAuth();

      if(user.displayName){
        useUserValues().setUserName(user.displayName);
        setTimeout(() => {
          notify();
        },200)
        router.push({ name: 'histories' });
      }
    }
    else {
      emailNotVerified.value = true;
    }

  } catch (error) {
    toast.error("Error al iniciar sesión. Por favor, verifique sus credenciales.", {
      position: toast.POSITION.TOP_RIGHT,
      theme:"dark",
      autoClose: 2000
    })
  }
};

const notify = () => {

  toast.success(`Le damos la bienvenida ${useUserValues().getUserName}!`, {
    position: toast.POSITION.TOP_CENTER,
    theme:"dark",
    autoClose: 5000,
    transition: toast.TRANSITIONS.FLIP
  });

  // toast.error("Error Notification !", {
  //   position: toast.POSITION.TOP_LEFT,
  //   theme:"dark"
  // });

  // toast.warn("Warning Notification !", {
  //   position: toast.POSITION.BOTTOM_LEFT,
  // });

  // toast.info("Info Notification !", {
  //   position: toast.POSITION.BOTTOM_CENTER,
  // });

};
const emailNotVerified = ref(false);
const toggleModal = () => {
  emailNotVerified.value = !emailNotVerified.value
}
</script>

<style scoped lang="scss">

</style>
