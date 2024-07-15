import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import NProgress from 'nprogress';
import Home from '../views/Home.vue';
// import Todo from '../views/Todo.vue';
// import { countTime } from '@/utils/routerTime';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/todo',
    //     name: 'Todo',
    //     component: Todo
    // },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        /* webpackPrefetch: 20000 */ // true
        component: () => import(/* webpackChunkName: "about" */ /* webpackPrefetch: 400 */ '../views/About.vue')
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
