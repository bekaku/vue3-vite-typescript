import quasarIconSet from "quasar/icon-set/svg-mdi-v6";
import { Loading, Notify, Dialog } from "quasar";
// import "@quasar/extras/mdi-v6/mdi-v6.css";
import "quasar/src/css/index.sass";
const quasarConfig = {
  plugins: {
    Loading,
    Notify,
    Dialog
  }, // import Quasar plugins and add here
  iconSet: quasarIconSet,
  config: {
    /*
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
      */
  },
};
export default quasarConfig;
