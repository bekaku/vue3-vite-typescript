import { watch } from "vue";
import { useI18n } from "vue-i18n";
import { LocalStorageAtt, CookieExpire } from "@/config/config";
import Cookies from "js-cookie";
export const useLocale = () => {
  const { t, locale } = useI18n({ useScope: "global" });
  const WeeTranslate = (field: string, pluralization?: any): string => {
    return pluralization ? t(field, pluralization) : t(field);
  };
  const SetLocale = (lang: string): void => {
    locale.value = lang;
    Cookies.set(LocalStorageAtt.LANGUGE, lang, {
      expires: CookieExpire.Languge,
    });
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
    locale,
    WeeTranslate,
    SetLocale,
  };
};
