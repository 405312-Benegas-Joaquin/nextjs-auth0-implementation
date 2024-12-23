import PageHeader from "@/common/components/page/app-page-header";
import DummyList from "./ui/dummy-list";
import PageContainer from "@/common/components/page/app-page-container";

export default async function DashboardPage() {
  return (
    <PageContainer>
      <PageHeader title="Dashboard" description="This is the dashboard page" />
      <DummyList />
    </PageContainer>
  );
}
