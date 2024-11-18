
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../pages/PageHome.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: PageHome },
        { path: '/imprint', component: () => import('../pages/PageImprint.vue') },
        {
            path: '/:catchAll(.*)',
            name: 'PageNotFound',
            component: () => import('../pages/PageNotFound.vue'),
        },
    ],
})

export default router