"use client";

import { AnimatedThemeIcon } from "@components/ui/animated-theme-icon";
import { SidebarContent } from "@components/ui/sidebar/sidebar-content";
import { SidebarFooter } from "@components/ui/sidebar/sidebar-footer";
import { SidebarGroup } from "@components/ui/sidebar/sidebar-group";
import { SidebarHeader } from "@components/ui/sidebar/sidebar-header";
import { SidebarItem } from "@components/ui/sidebar/sidebar-item";
import { Sidebar } from "./ui/sidebar/sidebar";
import { Home, FileText, Calendar, Bell, Users, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@/domain/auth/components/sign-out-button";

export default function AppSidebar() {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <Sidebar>
      <SidebarHeader title="My App" logo={<Home />} />
      <SidebarContent>
        <Link href="/">
          <SidebarItem
            icon={<Home className="h-5 w-5" />}
            text="Dashboard"
            tooltip="Dashboard"
            isActive={pathname === "/"}
          />
        </Link>
        <SidebarItem icon={<FileText className="h-5 w-5" />} text="Documents" tooltip="Documents" />
        <SidebarItem icon={<Calendar className="h-5 w-5" />} text="Calendar" tooltip="Calendar" />
        <SidebarItem
          icon={<Bell className="h-5 w-5" />}
          text="Notifications"
          tooltip="Notifications"
        />

        <SidebarGroup title="Management">
          <SidebarItem icon={<Users className="h-5 w-5" />} text="Users" tooltip="Users" />
          <SidebarItem icon={<Settings className="h-5 w-5" />} text="Settings" tooltip="Settings" />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarItem
          icon={<AnimatedThemeIcon />}
          text="Theme"
          tooltip="Toggle Theme"
          onClick={toggleTheme}
        />
        <SignOutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
