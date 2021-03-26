import { watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import { LocalStorageAtt, CookieExpire } from "@/config/config";
import Cookies from "js-cookie";
import { useStore } from "vuex";
export const useLocale = () => {
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
    Cookies.set(LocalStorageAtt.LANGUGE, lang, {
      expires: CookieExpire.Languge,
    });

    //add to appSetting store
    store.dispatch("appSetting/setLocaleAction", locale.value);
  };
  watch(locale, (newValue, oldValue) => {
    if (newValue != oldValue) {
      console.log(
        "The new locale value is: " + locale.value,
        "from > " + oldValue,
        "to > " + newValue
      );
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
