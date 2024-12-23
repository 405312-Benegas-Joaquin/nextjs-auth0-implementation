import React from "react";

interface SidebarHeaderProps {
  title?: string;
  logo?: React.ReactNode;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ title, logo }) => {
  return (
    <div className="mb-5 flex items-center px-3 p-4 h-16 border-b border-gray-200 dark:border-gray-700">
      {logo && <div className="inline-flex h-5 w-5 justify-center items-center mr-3">{logo}</div>}

      {title && (
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white overflow-hidden whitespace-nowrap">
          {title}
        </h2>
      )}
    </div>
  );
};
