import { useLoginStore } from "@/store/login";

export function usePermission(pageName: string, handleName: string) {
  const loginStore = useLoginStore();
  const permissionsList = loginStore.permissionsList;
  const verifyPermission = `system:${pageName}:${handleName}`;
  return !!permissionsList.find((item) => item === verifyPermission);
}
