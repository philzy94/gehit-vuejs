import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css";
import mitt from 'mitt';
import store from './store.js';
import router from "./index";

export const emitter = mitt();


const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
