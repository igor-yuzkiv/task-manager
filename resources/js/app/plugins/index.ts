import {App} from "vue";
import {registryRouter} from "@/app/router";

export function registryPlugins(app: App) {
    registryRouter(app)
}
