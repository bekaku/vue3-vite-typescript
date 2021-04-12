import { LocalStorageAtt, CookieExpire } from "@/config/config";
import { UserCredential } from "@/interface/Common";
import Cookies from "js-cookie";
export default () => {
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
