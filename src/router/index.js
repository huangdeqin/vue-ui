

import {createRouter,
    createWebHistory,
    createWebHashHistory} from "vue-router";

// import VueRouter from "vue-router";
import Index from '../page/Index.vue'

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: '/father',
        name: 'Father',
        component: () => import(
            '../page/Father.vue'
            ),
    }
    // {
    //     path: '/selector',
    //     name: 'Selector',
    //     component: () => import(
    //         '../page/Selector.vue'
    //         ),
    // }
];

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),

    routes,
});
//
// const router = new VueRouter({
//     routes,
//     // mode: 'history'
// })

export default router;