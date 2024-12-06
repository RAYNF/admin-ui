import MainLayout from "../components/layout/MainLayout";
import Card from "../components/elements/card";
import CardBill from "../components/fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/fragments/Dashboard/CardTransaction";
import CardBalance from "../components/fragments/Dashboard/CardBalance";
import CardStatistic from "../components/fragments/Dashboard/CardStatistic";
import CardGoal from "../components/fragments/Dashboard/CardGoal";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance />
        <CardGoal />
        <CardBill />
        <CardTransaction />
        <div className="md:col-span-2 flex flex-col flex-1">
          <CardStatistic />
          <CardExpenseBreakdown />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
