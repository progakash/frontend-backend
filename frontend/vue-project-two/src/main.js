import { createApp } from 'vue'
import router from './routes'
import store from './stores'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')


    router.beforeEach((to, from) => {
        console.log("global - beforeach clalled");
        console.log("Form: ", from);
        console.log("To:", to);
        //return false //for cancel
        // if(to.path === '/') {
        //     router.push('/about');
        // }
    })
