import {RouteRecordRaw} from "vue-router";

export const AppRoutes: {[key: string]: RouteRecordRaw} = {
    home: {
        name: 'home',
        path: "",
        component: () => import("@/pages/home")
    }
}
