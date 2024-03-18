import {createRouter, createWebHistory} from 'vue-router'
import {DefaultLayout} from "@/app/layouts";
import {AppRoutes} from "@/app/router/AppRoutes.ts";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: Object.values(AppRoutes)
        }
    ]
})
