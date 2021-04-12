import { useRouter, useRoute } from "vue-router";
import { watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import { LocalStorageAtt } from "@/config/config";
import { useStore } from "vuex";
import { CookieExpire } from "@/config/config";
import { UserCredential } from "@/interface/Common";
import Cookies from "js-cookie";
export const useBase = () => {
  const route = useRoute();
  const router = useRouter();
  //   console.log("HelloI18n > route Params", route.params, route.query); // fullPath ,  hash, meta, params, path, query, redirectedFrom
  const WeeGetParam = (field: string): any => {
    if (!field) {
      return;
    }
    return route.params ? route.params[field] : null;
  };
  const WeeGetQuery = (field: string): any => {
    if (!field) {
      return;
    }
    return route.query ? route.query[field] : null;
  };
  const WeeGoTo = (link: string, replace?: boolean): void => {
    if (!link) {
      return;
    }
    if (!replace) {
      router.push(link);
    } else {
      // window.location.replace(link);
      router.replace({ path: link });
    }
  };

  return {
    WeeGetParam,
    WeeGetQuery,
    WeeGoTo,
  };
};

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
export const useAppSetting = () => {
  const store = useStore();
  // access a state in computed function store.state.count
  const count = computed(() => store.state.appSetting.count);
  // access a getter in computed function store.getters.isMoreThanTen
  const isMoreThanTen = computed(
    () => store.getters["appSetting/isMoreThanTen"]
  );

  // access a mutation
  const increment = () => store.commit("appSetting/increment");

  // access an action
  const incrementAction = () => store.dispatch("appSetting/incrementAction");

  return {
    // count : computed(() => store.state.count)
    count,
    isMoreThanTen,
    increment,
    incrementAction,
  };
};

export const useAuth = () => {
  const SetAuth = (userData: UserCredential | undefined): void => {
    if (userData !== undefined) {
      Cookies.set(LocalStorageAtt.USER, JSON.stringify(userData), {
        expires: CookieExpire.Auth,
      });
    }
  };
  const CurrentAuth = () => {
    const auth = Cookies.get(LocalStorageAtt.USER);
    // let authData : Auth | undefined = auth ? JSON.parse(auth) : undefined;
    // console.log("CurrentAuth", auth);
    return auth ? JSON.parse(auth) : null;
  };
  return {
    SetAuth,
    CurrentAuth,
  };
};
