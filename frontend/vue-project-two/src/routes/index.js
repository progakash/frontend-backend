import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import FeatureOne from '../pages/FeatureOne.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/content-management',
        name: 'content',
        component: About,
        childred: [
            {
                path: 'feature-one',
                name: 'home1',
                component: FeatureOne
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;