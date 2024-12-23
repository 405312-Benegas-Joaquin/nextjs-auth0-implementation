import React from "react";

interface PageHeaderProps {
  title?: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h1>
      <p className="text-base text-gray-600 dark:text-gray-400">{description}</p>
    </header>
  );
}
