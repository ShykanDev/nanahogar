import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/beneficios',
      name: 'spaOne',
      component: () => import('../views/SpaOneView.vue'),
    },
    {
      path: '/nosotros',
      name: 'us',
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/preguntas',
      name: 'faqs',
      component: () => import('../views/FaqsView.vue'),
    },
    {
      path:'/terminos',
      name:'terms',
      component: () => import('../views/TermsView.vue'),
    },
    {
      path: '/politica',
      name: 'policy',
      component: () => import('../views/PolicyView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/registro',
      name: 'register',
      component: () => import('../views/CreateAccountView.vue'),
    },
    {
      path: '/consejos',
        name: 'advices',
      component: () => import('../views/AdvicesView.vue'),
    },
    {
      path: '/:patchMatch(.*)',
      redirect:{name:'home'}
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

})

export default router
