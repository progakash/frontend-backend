import { createApp } from 'vue'
import router from './routes'
import store from './stores'
import './style.css'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')


    router.beforeEach((to, from) => {
        console.log("global - beforeach clalled");
        console.log("Form: ", from);
        console.log("To:", to);
    })
