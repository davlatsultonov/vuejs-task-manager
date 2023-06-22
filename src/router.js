import Home from "./pages/Home.vue";
import TodosPage from "./pages/TodosPage.vue";
import { createRouter, createWebHistory } from 'vue-router'

const prefix = import.meta.env.MODE === 'production' ? '/vuejs-task-manager' : ''

export const links = [
    { label: 'Главная', link: prefix + '/' },
    { label: 'Задачи', link: prefix + '/todos' },
];

const routes = [
    { path: prefix + '/', component: Home },
    { path: prefix + '/todos', component: TodosPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
