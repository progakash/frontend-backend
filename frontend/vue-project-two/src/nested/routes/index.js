import { createRouter, createWebHistory } from 'vue-router';
import Hello from '../pages/Hello.vue'

const routes = [
    {
        path: '/test',
        name: 'hello',
        component: Hello
    }
];

const router = createRouter({
    base: '/nested',
    history: createWebHistory(),
    routes
});

export default router;