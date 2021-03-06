import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import NProgress from 'nprogress';
import Home from '../views/Home.vue';
import Todo from '../views/Todo.vue';
import { countTime } from '@/utils/routerTime';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/todo',
        name: 'todo',
        component: Todo
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
router.beforeEach((to, from, next) => {
    // NProgress.start();
    // if (to.meta.title) {
    //     //判断是否有标题
    //     document.title = to.meta.title;
    // }
    countTime(to, from);
    next();
});
export default router;
