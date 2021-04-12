import { LocaleOption, DefaultAxiosInstance } from "@/interface/Common";
// export const SiteDomain =process.env.NODE_ENV === "production" ? "bekaku.com" : "localhost";
// export const SiteUrl: string = `https://${SiteDomain}`;
export const AppPrefix = "vue3_vite";
export const AppVersion = "1.0.0";
export const CodeVersion = 1;
export const PoroductionMode = false;
export const DefaultLocale = "th";
export const DefaultPassword = "en";
export const LocaleOptions: LocaleOption[] = [
  { id: "en", name: "English" },
  { id: "th", name: "ไทย" },
];
export const ThemeColors: string[] = [
  "#00D1B2",
  "#008bf2",
  "#7367F0",
  "#02C39A",
  "#ff5e3a",
  "#28C76F",
  "#EA5455",
  "#FF2768",
  "#FFD60A",
  "#FF9F43",
  "#3B295D",
  "#5BC0EB",
  "#A5BE00",
  "#b8c2cc",
];
export const LocalStorageAtt = {
  USER: `${AppPrefix}_user`,
  LANGUGE: `${AppPrefix}_languge`,
  THEME: `${AppPrefix}_theme`,
  COOKIE_POLICY: `${AppPrefix}_cookie_policy`,
  UNIQE_TOKEN: `${AppPrefix}_uniqe_token`,
};
// export const DefaultApiEndpoint = PoroductionMode
//   ? "https://centerapi.appedr.com"
//   : "http://localhost/grandats_project/grand-center-api";
export const DefaultApiEndpoint = "https://reqres.in/api";
export const ApiClient = "default";
export const UniqeTokenAtt = "X-uniqe-token";
export const DefaultContentType = "application/json; charset=UTF-8";
export const DefaultAxiosHeader: DefaultAxiosInstance = {
  // baseURL: DefaultApiEndpoint,
  Accept: "application/json",
  "Content-Type": DefaultContentType,
  "X-language": DefaultLocale,

  "Code-Version": CodeVersion,
  "X-Api-Client": ApiClient,
  Authorization: "",
};
//   export const DefaultAxios = axios.create({
//     baseURL: DefaultApiEndpoint,
//     withCredentials: false,
//     headers: DefaultAxiosHeader,
//     timeout: 60 * 1000,
//   });

// export const AxiosMethod = { GET: 1, POST: 2, PUT: 3, DELETE: 4 };
// export const CookieExpire = { Languge: 365, Theme: 365, Auth: 7 };
export enum CookieExpire {
  Languge = 365 * 10,
  Theme = 365 * 10,
  Auth = 7,
}
