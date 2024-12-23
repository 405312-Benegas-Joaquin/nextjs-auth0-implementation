import { SidebarItem } from "@components/ui/sidebar/sidebar-item";
import { LogOut } from "lucide-react";
import { handleSignOut } from "../actions/auth-actions";

export function SignOutButton() {
  return (
    <SidebarItem
      icon={<LogOut className="h-5 w-5" />}
      text="Logout"
      tooltip="Logout"
      className="hover:text-red-600 dark:hover:text-red-500"
      onClick={handleSignOut}
    />
  );
}