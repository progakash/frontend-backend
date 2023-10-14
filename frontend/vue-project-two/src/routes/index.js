import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Layout from '../layouts/Layout.vue'
import FeatureOne from '../pages/FeatureOne.vue'
import FeatureTwo from '../pages/FeatureTwo.vue'

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
        component: Layout,
        redirect: {
            name: 'home1', 
            replace: true
        },
        children: [
            {
                path: '',
                name: 'home1',
                component: FeatureOne
            },
            {
                path: 'feature-one',
                name: 'home3',
                component: FeatureOne
            },
            {
                path: 'feature-two',
                name: 'home4',
                component: FeatureTwo
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;