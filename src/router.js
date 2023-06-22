import Home from "./pages/Home.vue";
import TodosPage from "./pages/TodosPage.vue";
import { createRouter, createWebHistory } from 'vue-router'
import {ROUTE_PREFIX} from "./helpers.js";


export const links = [
    { label: 'Главная', link: ROUTE_PREFIX + '/' },
    { label: 'Задачи', link: ROUTE_PREFIX + '/todos' },
];

const routes = [
    { path: ROUTE_PREFIX + '/', component: Home },
    { path: ROUTE_PREFIX + '/todos', component: TodosPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
