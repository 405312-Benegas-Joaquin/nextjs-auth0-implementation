import AppSidebar from "@components/app-sidebar";
import AppMain from "@components/app-main";
import Navbar from "@/common/components/app-navbar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <AppSidebar />
      <AppMain navbar={<Navbar />}>{children}</AppMain>
    </div>
  );
}
