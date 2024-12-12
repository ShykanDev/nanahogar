import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill, PrTimes } from 'oh-vue-icons/icons'
addIcons(FaFlag, RiZhihuFill, PrTimes)
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_pfGUTKNQGvGh9Z7_Bc2zIqaK373uD2Y',
  authDomain: 'asesorahogar-fdb56.firebaseapp.com',
  projectId: 'asesorahogar-fdb56',
  storageBucket: 'asesorahogar-fdb56.firebasestorage.app',
  messagingSenderId: '481645848103',
  appId: '1:481645848103:web:2da3864773b95b0a319002',
}

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)
const app = createApp(App)
app.component('v-icon', OhVueIcon)

app.use(createPinia())
app.use(router)
app.use(
  Vue3Toastify,
  {
    autoClose: 3000,
    // ...
  } as ToastContainerOptions,
)
app.mount('#app')
