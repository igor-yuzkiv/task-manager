import {createRouter, createWebHistory} from 'vue-router'
import {DefaultLayout} from "@/app/layouts/default";
import {defaultRoutes} from "@/app/router/routes";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: defaultRoutes
        }
    ]
})
