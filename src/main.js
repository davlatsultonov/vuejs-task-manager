import { createApp } from 'vue'
import './scss/style.scss'
import store from "./store/index.js";
import App from './App.vue'
import router from "./router.js";

createApp(App).use(store).use(router).mount('#app')
