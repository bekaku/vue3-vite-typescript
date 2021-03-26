import { LocaleOption } from "@/types/Common";
export const SiteDomain =
  process.env.NODE_ENV === "production" ? "bekaku.com" : "localhost";
export const SiteUrl: string = `https://${SiteDomain}`;
export const AppPrefix: string = "vue3_vite";
export const AppVersion: string = "1.0.0";
export const CodeVersion: number = 1;
export const PoroductionMode: boolean = false;
export const DefaultLocale: string = "th";
export const DefaultPassword: string = "en";
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
export const DefaultApiEndpoint = PoroductionMode
  ? "https://centerapi.appedr.com"
  : "http://localhost/grandats_project/grand-center-api";
// export const DefaultApiEndpoint = PoroductionMode ? 'https://centerapi.appedr.com' : 'http://localhost/grandats_project/grand-center-api';
// export const DefaultApiEndpoint = "https://reqres.in/api";
export const ApiClient: string = "default";
export const LocaleParam: string = "X-language";
export const AuthorizationAtt: string = "Authorization";
export const UniqeTokenAtt: string = "X-uniqe-token";
export const DefaultAxiosHeader = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=UTF-8",
  // LocaleParam: DefaultLocale,
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
  Languge = 365,
  Theme = 365,
  Auth = 7,
}
