import MainLayout from "../components/layout/MainLayout";
import Card from "../components/elements/card";
import bills from "../data/bills";
import expensesBreakdowns from "../data/expense";
import transactions from "../data/transaction";
import { Icon } from "../components/elements/icon";
import { useState } from "react";

const DashboardPage = () => {
  const tabs = ["All", "Revenue", "Expense"];
  const [activateTab, setActiveTab] = useState("All");
  const [trxs, setTrx] = useState(transactions);

  function handleClick(e) {
    const transactionFiltered =
      e.target.value != "All"
        ? transactions.filter(({ type }) => type == e.target.value)
        : transactions;

        setActiveTab(e.target.value)
        setTrx(transactionFiltered)
  }

  const billCard = bills.map((bill) => (
    <div key={bill.id} className="lg:flex lg:justify-between pt-3 pb-3">
      <div className="flex">
        <div className="bg-special-bg me-3 px-3 rounded-lg flex place-content-center flex-col">
          <span className="text-xs"> {bill.month}</span>
          <span className="text-2xl font-bold"> {bill.date}</span>
        </div>
        <div className="">
          <img src={`/images/${bill.logo}`} className="h-6" />
          <span className="font-bold">{bill.name}</span>
          <br />
          <span className="text-xs"> Last Charge - {bill.lastCharge}</span>
        </div>
      </div>
      <div className="flex flex-col place-content-center">
        <span className="p-2 border rounded-lg font-bold text-center">
          ${bill.amount}
        </span>
      </div>
    </div>
  ));
  const transactionCard = trxs.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {transaction.icon}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-02">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">
          {transaction.amount}
        </span>
        <br />
        <span className="text-gray-02">{transaction.date}</span>
      </div>
    </div>
  ));
  const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
    <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {expensesBreakdown.icon}
        </div>
        <div className="ms-4">
          <span className="text-gray-02">{expensesBreakdown.category}</span>
          <br />
          <span className="font-bold text-lg">{expensesBreakdown.amount}</span>
          <div className="flex">
            <span className="text-gray-02">
              {expensesBreakdown.percentage}%*
            </span>{" "}
            {expensesBreakdown.arrow}
          </div>
        </div>
      </div>
      <div className="flex place-content-center flex-col me-8">
        <Icon.ArrowRight />
      </div>
    </div>
  ));

  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card
          title="Goals"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like"
        />
        <Card
          title="Upcoming Bill"
          desc={
            <div className="h-full flex flex-col justify-around">
              {billCard}
            </div>
          }
        />
        <div className="md:col-span-1">
          <Card
            variant="md:col-span-1 md:row-span-2"
            title="Recent Transaction"
            desc={
              <div>
                <div className="mb-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      value={tab}
                      className={
                        activateTab == tab
                          ? "px-4 font-bold border-b-4 border-primary text-primary"
                          : "px-4 font-bold text-gray-01"
                      }
                      onClick={handleClick}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                {transactionCard}
              </div>
            }
          />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card
            variant="md:col-span-2"
            title="Expenses Breakdown"
            desc={
              <div className="h-full md:grid md:grid-cols-3">{expenseCard}</div>
            }
          />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
