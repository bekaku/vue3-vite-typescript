import { AuditInfo } from "@/interface/Base";
export interface User extends AuditInfo {
  id: number;
  userName: string;
  fullName?: string;
}
