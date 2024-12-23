import React from "react";
import { useSidebar } from "./sidebar-context";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";

interface SidebarItemProps {
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
  isActive?: boolean;
  tooltip?: string;
  className?: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  onClick,
  isActive = false,
  tooltip,
  className,
}) => {
  const { isOpen } = useSidebar();

  const content = (
    <button
      /* className={`flex w-full items-center rounded-lg p-2 font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-sm ${
        isActive ? "bg-gray-100 dark:bg-gray-700" : ""
      }`} */
      className={`flex w-full items-center rounded-lg p-2 font-normal transition duration-150 text-sm
        ${
          isActive
            ? "text-primary bg-blue-100 hover:bg-blue-200 dark:bg-gray-900 dark:hover:bg-gray-700"
            : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        } ${className}
      `}
      onClick={onClick}
    >
      {icon && <span className="inline-flex w-5 h-5 justify-center items-center mr-3">{icon}</span>}
      <span className={`overflow-hidden whitespace-nowrap`}>{text}</span>
    </button>
  );

  return (
    <div className="px-1 py-1">
      {!isOpen && tooltip ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>{content}</TooltipTrigger>
            <TooltipContent side="right">{tooltip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        content
      )}
    </div>
  );
};
