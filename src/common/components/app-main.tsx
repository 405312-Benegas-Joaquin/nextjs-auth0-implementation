"use client";

import { useSidebar } from "@components/ui/sidebar/sidebar-context";

export default function AppMain({
  children,
  navbar,
}: {
  children: React.ReactNode;
  navbar?: React.ReactNode;
}) {
  const { isOpen } = useSidebar();

  return (
    <main
      className={`transition-all duration-300 ease-in-out min-h-screen bg-white-100 dark:bg-gray-900 ${
        isOpen ? "ml-64" : "ml-[70px]"
      }`}
    >
      <div className="flex flex-col min-h-screen">
        {navbar}
        {children}
      </div>
    </main>
  );
}
