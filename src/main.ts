import "./main.css";
import { createApp } from "vue";
import { i18n } from "./plugins/i18n";
import router from "./plugins/router";
import App from "./App.vue";

// createApp(App).use(i18n).mount("#app");
const app = createApp(App)
  .use(i18n)
  .use(router);
router.isReady().then(() => {
    app.mount("#app");
  });