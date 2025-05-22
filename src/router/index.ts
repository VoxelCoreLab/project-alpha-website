
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../pages/PageHome.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: PageHome },
        { path: '/world-map', component: () => import('../pages/PageWorldMap.vue') },
        { path: '/game-process', component: () => import('../pages/PageGameProcess.vue') },
        { path: '/skills', component: () => import('../pages/PageSkills.vue') },
        { path: '/characters', component: () => import('../pages/PageCharacters.vue') },
        { path: '/characters/:characterId', component: () => import('../pages/PageCharacter.vue') },
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
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

export default router