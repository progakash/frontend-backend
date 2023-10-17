import { createRouter, createWebHistory } from "vue-router";
import Service from '../pages/Service.vue'
import Repository from '../pages/Repository.vue'

const routers = [
    {
        path: '',
        name: 'home',
        component: Service
    },
    {
        path: '/service',
        name: 'service',
        component: Service
    },
    {
        path: '/repo',
        name: 'repository',
        component: Repository
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routers
});

export default router;