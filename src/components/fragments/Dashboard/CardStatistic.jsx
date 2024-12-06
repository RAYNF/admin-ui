import { expensesStatistics } from "../../../data/expense";
import Card from "../../elements/card";
import BarDataset from "../../elements/BarChart";

const CardStatistic = () => {
  return (
    <Card
      variant="lg:col-span-2 min-h-max"
      title="Statistics"
      desc={
        <div className="h-72">
          <select className="font-bold text-lg ring-0 focus:outline-none bg-transparent">
            <option>Weekly Comparison</option>
          </select>
          <BarDataset desc={expensesStatistics} />
        </div>
      }
    />
  );
};

export default CardStatistic;
