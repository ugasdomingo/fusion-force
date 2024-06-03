import { createRouter, createWebHistory } from 'vue-router';
//Import COmponents
import { useUserStore } from '@/stores/user-store';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/comparador',
            name: 'comparador',
            component: () => import('@/views/ServicesView.vue')
        },
        {
            path: '/compra-colectiva',
            name: 'colectiva',
            component: () => import('@/views/servicesView/ColectiveView.vue')
        },
        {
            path: '/paneles-solares',
            name: 'paneles-solares',
            component: () => import('@/views/SolarPanelView.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('@/views/BlogView.vue')
        },
        {
            path: '/blog/:id',
            name: 'blog-single-view',
            component: () => import('@/views/SingleBlogView.vue')
        },
        {
            path: '/politicas',
            name: 'politicas',
            component: () => import('@/views/PoliticasView.vue')
        },
        {
            path: '/rgdp',
            name: 'rgdp',
            component: () => import('@/views/RgdpView.vue')
        },
        /* Auth Views -----------------*/
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue')
        },
        /* Private Views -----------------*/
        {
            path: '/escritorio',
            name: 'escritorio',
            component: () => import('@/views/DeskView.vue'),
            meta: {
                auth: true
            }
        },
        /* Not Found path -----------------*/
        {
            path: '/:catchAll(.*)*',
            name: 'not-found',
            component: () => import('@/views/ErrorNotFoundView.vue')
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    //Validación para rutas protegidas
    const requiredAuth = to.meta.auth;
    const userStore = useUserStore();

    if (userStore.token) {
        return next();
    }

    if (requiredAuth) {
        if (localStorage.getItem('user')) {
            await userStore.refreshToken();
            userStore.token ? next() : next('login');
        }

        if (userStore.token) {
            return next();
        }
        return next('login');
    }

    return next();
});

export default router;
