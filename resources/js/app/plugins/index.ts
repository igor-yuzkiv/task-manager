import {App} from "vue";
import {router} from "@/app/router";

export function registryPlugins(app: App) {
    app.use(router);
}
