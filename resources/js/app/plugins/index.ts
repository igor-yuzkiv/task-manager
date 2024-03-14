import {App} from "vue";
import PrimeVue from 'primevue/config';

export function registryPlugins (app: App) {
    app.use(PrimeVue)
}
