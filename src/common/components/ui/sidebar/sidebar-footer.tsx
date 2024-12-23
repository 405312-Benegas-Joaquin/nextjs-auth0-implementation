import React from "react";

interface SidebarFooterProps {
  children: React.ReactNode;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ children }) => {
  return (
    <div className=" space-y-2 overflow-y-auto overflow-x-hidden mt-auto border-t border-gray-200 pt-4 dark:border-gray-700 pb-4">
      {children}
    </div>
  );
};