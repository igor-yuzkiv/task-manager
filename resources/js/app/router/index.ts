import {createRouter, createWebHistory} from 'vue-router'
import {DefaultLayout} from "@/app/layouts/default";
import ROUTES from '@/app/router/routes.ts'
import {App} from "vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'root',
            component: DefaultLayout,
            children: [
                {...ROUTES.home, component: () => import('@/pages/home/HomePage.vue')}
            ]
        }
    ]
})

export function registryRouter (app: App) {
       app.use(router)
}
