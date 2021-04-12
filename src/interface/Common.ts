export enum AxiosMethod {
  GET,
  POST,
  PUT,
  DELETE,
}
export interface LocaleOption {
  id: string;
  name: string;
}

export interface ApiResponse {
  response?: any;
  error?: any;
}
export interface DefaultAxiosInstance {
  Accept: string;
//   baseURL: string;
  "Content-Type": string;
  "X-language": string;
  "Code-Version": number;
  "X-Api-Client": string;
  Authorization?: string;
}
export interface UserCredentialPicture {
  path: string;
  x: string;
  xx: string;
  xxx: string;
}
export interface UserCredential {
  id: number | string;
  username: string;
  email: string;
  rolesText?: string;
  status: boolean;
  picture: UserCredentialPicture;
  userRoles?: string[];
  apiKey: string;
}

export interface ComplexMessage {
  title: string;
  okMessage: string;
  cancelMessage: string;
}
