import {RouteRecordRaw} from "vue-router";

export const ROUTE_NAME = "home";

export const route: RouteRecordRaw = {
    name: ROUTE_NAME,
    path: "",
    component: () => import("@/pages/home")
};
