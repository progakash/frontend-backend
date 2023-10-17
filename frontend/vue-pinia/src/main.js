import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './routes';
import './style.css'
import App from './App.vue'

//create pinia instance
const pinia = createPinia();

const app = createApp(App);

app.use(router)
app.use(pinia)
app.mount('#app')