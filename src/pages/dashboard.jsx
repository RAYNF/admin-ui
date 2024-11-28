import MainLayout from "../components/layout/MainLayout";
import Card from "../components/elements/card";
import CardBill from "../components/fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/fragments/Dashboard/CardTransaction";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card title="Goals" />
        <CardBill />
        <CardTransaction />
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <CardExpenseBreakdown />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
