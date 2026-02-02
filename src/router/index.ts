
import { createRouter, createWebHistory } from 'vue-router'
import PageLandingSite from '../pages/PageLandingSite.vue'
import { getAuth } from 'firebase/auth'
import { useAuth } from '@vueuse/firebase'

declare module 'vue-router' {
    interface RouteMeta {
        requiresAuth?: boolean
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: PageLandingSite },
        { path: '/old', component: () => import('../pages/PageHome.vue') },
        { path: '/product', component: () => import('../pages/PageProduct.vue') },
        { path: '/checkout', component: () => import('../pages/PageCheckout.vue'), meta: { requiresAuth: true } },
        { path: '/payment-success', component: () => import('../pages/PagePaymentSuccess.vue') },
        { path: '/download', component: () => import('../pages/PageDownload.vue'), meta: { requiresAuth: true } },
        {
            path: '/register', component: () => import('../pages/PageRegister.vue')
        },
        {
            path: '/login', component: () => import('../pages/PageLogin.vue')
        },
        { path: '/world-map', component: () => import('../pages/PageWorldMap.vue') },
        { path: '/game-process', component: () => import('../pages/PageGameProcess.vue') },
        { path: '/skills', component: () => import('../pages/PageSkills.vue') },
        { path: '/characters', component: () => import('../pages/PageCharacters.vue') },
        { path: '/characters/:characterId', component: () => import('../pages/PageCharacter.vue') },
        { path: '/gameplay', component: () => import('../pages/PageGameplay.vue') },
        { path: '/faq', component: () => import('../pages/PageFaq.vue') },
        { path: '/imprint', component: () => import('../pages/PageImprint.vue') },
        { path: '/contact', component: () => import('../pages/PageContact.vue') },
        {
            path: '/privacy-policy',
            component: () => import('../pages/PagePrivacyPolicy.vue'),
        },
        {
            path: '/general-terms-and-conditions',
            component: () => import('../pages/PageGeneralTermsAndConditions.vue'),
        },
        {
            path: '/logout',
            redirect: () => {
                const auth = getAuth()
                auth.signOut()
                return '/'
            },
        },
        {
            path: '/:catchAll(.*)',
            name: 'PageNotFound',
            component: () => import('../pages/PageNotFound.vue'),
        },
    ],
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})


router.beforeEach((to, _from) => {
  const { isAuthenticated } = useAuth(getAuth())
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})

export default router