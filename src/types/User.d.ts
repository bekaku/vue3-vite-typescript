import { AuditInfo } from "@/types/Base";
export interface User extends AuditInfo {
  id: number;
  userName: string;
  fullName?: string;
}
