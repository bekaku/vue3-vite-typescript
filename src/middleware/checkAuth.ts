import { LocalStorageAtt } from "@/config/config";
import { UserCredential } from "@/interface/Common";
import Cookies from "js-cookie";

export default async (to: any, from: any, next: any) => {
  const getCurrentAuth = (): Promise<UserCredential | null> => {
    return new Promise((resove) => {
      const auth = Cookies.get(LocalStorageAtt.USER);
      resove(auth ? JSON.parse(auth) : null);
    });
  };
  const currentAuth = await getCurrentAuth();
  console.log("CurrentAuth", currentAuth);
  console.log(`from`, from);
  console.log(`to`, to);
  if (currentAuth) {
    next();
  } else {
    next("/auth/login");
  }
};
