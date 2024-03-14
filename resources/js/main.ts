import {createApp} from 'vue'
import './style.css'
import App from './app/App.vue'
import {registryPlugins} from "@/app/plugins";

const app = createApp(App)

registryPlugins(app);

app.mount('#app')
