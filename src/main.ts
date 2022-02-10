import { createApp } from "vue";
import { i18n } from "./plugins/i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Quasar
import { Quasar } from "quasar";
// import quasarIconSet from 'quasar/icon-set/svg-mdi-v6'
// import "@quasar/extras/mdi-v6/mdi-v6.css";
// import "quasar/src/css/index.sass";
import quasarConfig from "./plugins/quasar";
const app = createApp(App)
  .use(store)
  .use(i18n)
  .use(router)
  .use(Quasar, quasarConfig);
// const app = createApp(App).use(store).use(i18n).use(router).use(Quasar, {
//   plugins: {}, // import Quasar plugins and add here
//   iconSet: quasarIconSet,
//   config: {
//     /*
//     brand: {
//       // primary: '#e46262',
//       // ... or all other brand colors
//     },
//     notify: {...}, // default set of options for Notify Quasar plugin
//     loading: {...}, // default set of options for Loading Quasar plugin
//     loadingBar: { ... }, // settings for LoadingBar Quasar plugin
//     // ..and many more (check Installation card on each Quasar component/directive/plugin)
//     */
//   }
// });

router.isReady().then(() => {
  app.mount("#app");
});
