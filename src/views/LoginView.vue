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
    console.log(user);

    // Verificar si el correo está verificado
    if (user.emailVerified) {
      console.log("El correo está verificado. Acceso permitido.");
      emailNotVerified.value = false;
      useUserValues().setUserAuth();
      if(user.displayName){
        useUserValues().setUserName(user.displayName);
        setTimeout(() => {
          notify();
        },200)
        router.push({ name: 'histories' });
        console.log(storeUserValues.isUserAuthenticated);
      }
    }
    else {
      console.log("El correo no está verificado. Por favor verifica tu correo.");
      emailNotVerified.value = true;
      console.log(storeUserValues.isUserAuthenticated);
    }

  } catch (error) {
    console.log(error);
    console.log(storeUserValues.isUserAuthenticated);
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
// .alfa {
//   background-color: #EEEEEE;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%230083FF'/%3E%3Cstop offset='1' stop-color='%23EEEEEE'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%2377b9f7'/%3E%3Cstop offset='1' stop-color='%23EEEEEE'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
// background-attachment: fixed;
// background-size: cover;

// }
</style>
