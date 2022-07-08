import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueMq from "vue-mq";

const app = createApp(App).use(router).mount("#app");

app.use(VueMq, {
    breakpoints: {
        mobile: 450,
        tablet: 900,
        laptop: 1250,
        desktop: Infinity,
    }
})