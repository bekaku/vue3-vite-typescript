import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import th from "../locales/th.json";
import { LocalStorageAtt, DefaultLocale } from "@/config/config";
// import Cookies from "js-cookie";
import { useLocalStorage } from "@vueuse/core";
export const i18n = createI18n({
  legacy: false,
  locale: useLocalStorage(LocalStorageAtt.LANGUGE, DefaultLocale).value,
  messages: {
    en,
    th,
  },
});
// export const i18n = createI18n({
//   legacy: false,
// locale: Cookies.get(LocalStorageAtt.LANGUGE);
//     ? Cookies.get(LocalStorageAtt.LANGUGE)
//     : DefaultLocale,
//   messages: {
//     en,
//     th,
//   },
// });
