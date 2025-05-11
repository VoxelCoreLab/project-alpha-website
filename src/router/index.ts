
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../pages/PageHome.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: PageHome },
        { path: '/world-map', component: () => import('../pages/PageWorldMap.vue') },
        { path: '/game-process', component: () => import('../pages/PageGameProcess.vue') },
        { path: '/skills', component: () => import('../pages/PageSkills.vue') },
        { path: '/faq', component: () => import('../pages/PageFaq.vue') },
        { path: '/imprint', component: () => import('../pages/PageImprint.vue') },
        { path: '/contact', component: () => import('../pages/PageContact.vue') },
        {
            path: '/privacy-policy',
            component: () => import('../pages/PagePrivacyPolicy.vue'),
        },
        {
            path: '/:catchAll(.*)',
            name: 'PageNotFound',
            component: () => import('../pages/PageNotFound.vue'),
        },
    ],
})

export default router