import { watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import { LocalStorageAtt } from "@/config/config";
// import { useLocalStorage, useStorage } from "@vueuse/core";
// import Cookies from "js-cookie";
import { useStore } from "vuex";
export default () => {
  const store = useStore();
  const { t, locale } = useI18n({ useScope: "global" });
  const WeeTranslate = (field: string, pluralization?: any): string => {
    return pluralization ? t(field, pluralization) : t(field);
  };
  const initAppLocale = () => {
    SetLocale(locale.value);
  };
  const localeStore = computed(() => store.state.appSetting.locale);

  const SetLocale = (lang: string): void => {
    locale.value = lang;
    localStorage.setItem(LocalStorageAtt.LANGUGE, locale.value);
    // localStorage.getItem(LocalStorageAtt.LANGUGE);
    // localStorage.removeItem(LocalStorageAtt.LANGUGE);
    // localStorage.clear();
    // console.log("myStorage", JSON.parse(myStorage.value));

    //add to appSetting store
    store.dispatch("appSetting/setLocaleAction", locale.value);
  };
  watch(locale, (newValue: string, oldValue: string) => {
    if (newValue != oldValue) {
      SetLocale(locale.value);
    }
  });
  return {
    localeStore,
    locale,
    WeeTranslate,
    SetLocale,
    initAppLocale,
  };
};
