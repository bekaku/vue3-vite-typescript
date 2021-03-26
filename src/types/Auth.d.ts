export interface AuthPicture {
  path: string;
  x: string;
  xx: string;
  xxx: string;
}
export interface Auth {
  id: number | string;
  username: string;
  email: string;
  rolesText?: string;
  status: boolean;
  picture: AuthPicture;
  userRoles?: string[];
  apiKey: string;
}
