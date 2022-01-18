import { watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import { LocalStorageAtt } from "@/config/config";
import { useStore } from "vuex";
export default () => {
  const store = useStore();
  const { t, locale } = useI18n({ useScope: "global" });
  const tc = (field: string, pluralization?: any): string => {
    return pluralization ? t(field, pluralization) : t(field);
  };
  const initAppLocale = () => {
    console.log("initAppLocale", locale.value);
    SetLocale(locale.value);
  };
  const localeStore = computed(() => store.state.appSetting.locale);

  const SetLocale = (lang: unknown): void => {
    locale.value = lang;
    localStorage.setItem(LocalStorageAtt.LANGUGE, locale.value as string);
    // localStorage.getItem(LocalStorageAtt.LANGUGE);
    // localStorage.removeItem(LocalStorageAtt.LANGUGE);
    // localStorage.clear();
    // console.log("myStorage", JSON.parse(myStorage.value));

    //add to appSetting store
    store.dispatch("appSetting/setLocaleAction", locale.value);
  };
  watch(locale, (newValue: unknown, oldValue: unknown) => {
    if (newValue != oldValue) {
      SetLocale(locale.value);
    }
  });
  return {
    localeStore,
    locale,
    tc,
    SetLocale,
    initAppLocale,
  };
};
