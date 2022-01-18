import { computed } from "vue";
import { LocalStorageAtt, CookieExpire } from "@/config/config";
import { UserCredential } from "@/interface/Common";
import Cookies from "js-cookie";
import { useStore } from "vuex";
export default () => {
  const store = useStore();
  const CurrentAuth = (): UserCredential | null | undefined => {
    const auth = Cookies.get(LocalStorageAtt.USER);
    // let authData : Auth | undefined = auth ? JSON.parse(auth) : undefined;
    // console.log("CurrentAuth", auth);
    return auth ? JSON.parse(auth) : null;
  };

  const initAppAuthen = (): void => {
    SetAuthStore(CurrentAuth());
  };
  const SetAuth = (userData: UserCredential | undefined): void => {
    if (userData !== undefined) {
      Cookies.set(LocalStorageAtt.USER, JSON.stringify(userData), {
        expires: CookieExpire.Auth,
      });
      SetAuthStore(userData);
    }
  };
  const SetAuthStore = (userData: UserCredential | undefined | null): void => {
    store.dispatch("appAuthen/setAuthenAction", userData);
  };
  const SignOut = (): void => {
    Cookies.remove(LocalStorageAtt.USER);
    store.dispatch("appAuthen/logoutAction");
    setTimeout(() => {
      window.location.replace("");
    }, 500);
    return;
  };
  const CurrentAuthStore = computed(() => store.state.appAuthen.auth);

  return {
    SetAuth,
    CurrentAuth,
    CurrentAuthStore,
    initAppAuthen,
    SignOut,
  };
};
