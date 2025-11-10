
import { createRouter, createWebHistory } from 'vue-router'
import PageLandingSite from '../pages/PageLandingSite.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: PageLandingSite },
        { path: '/old', component: () => import('../pages/PageHome.vue') },
        { path: '/product', component: () => import('../pages/PageProduct.vue') },
        { path: '/checkout', component: () => import('../pages/PageCheckout.vue') },
        { path: '/payment-success', component: () => import('../pages/PagePaymentSuccess.vue') },
        { path: '/download', component: () => import('../pages/PageDownload.vue') },
        { path: '/register', component: () => import('../pages/PageRegister.vue') },
        { path: '/login', component: () => import('../pages/PageLogin.vue') },
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

export default router