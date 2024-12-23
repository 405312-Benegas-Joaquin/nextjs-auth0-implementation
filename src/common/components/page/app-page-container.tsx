import React from "react";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="py-8 px-10">{children}</div>;
}
