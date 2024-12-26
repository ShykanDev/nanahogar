import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserValues } from '@/stores/userValues'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/beneficiosdd',
      name: 'spaOne',
      component: () => import('../views/SpaOneView.vue'),
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/nosotros',
      name: 'us',
      component: () => import('../views/AboutUsView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/preguntas',
      name: 'faqs',
      component: () => import('../views/FaqsView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/terminos',
      name: 'terms',
      component: () => import('../views/TermsView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/politica',
      name: 'policy',
      component: () => import('../views/PolicyView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/registro',
      name: 'register',
      component: () => import('../views/CreateAccountView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/consejos',
      name: 'advices',
      component: () => import('../views/AdvicesView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/historias',
      name: 'histories',
      component: () => import('../views/HistoriesView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/passwordRestore',
      name: 'forgotPassword',
      component: () => import('../views/ForgotPasswordView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/mantenimiento',
      name: 'maintenance',
      component: () => import('../views/MaintenanceModeView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/:patchMatch(.*)',
      redirect: { name: 'home' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  const isUserAuth = useUserValues().isUserAuth;
  const isMaintenanceMode = useUserValues().getMaintenanceMode;

  // Si estamos en modo mantenimiento, pero no estamos ya en la página de mantenimiento
  if (isMaintenanceMode && to.name !== 'maintenance') {
    next({ name: 'maintenance' }); // Redirige solo si no estamos ya en la página de mantenimiento
  } else if (to.meta.requireAuth && !isUserAuth) {
    // Si se requiere autenticación y el usuario no está autenticado, redirige a login
    next({ name: 'login' });
  } else {
    // Si todo está bien, permite la navegación
    next();
  }
});


export default router
