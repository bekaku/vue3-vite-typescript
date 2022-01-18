import { createApp } from "vue";
import { i18n } from "./plugins/i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App).use(store).use(i18n).use(router);
router.isReady().then(() => {
  app.mount("#app");
});
