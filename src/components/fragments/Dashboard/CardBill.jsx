import Card from "../../elements/card";
import bills from "../../../data/bills";

const CardBill = () => {
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

  return(
    <Card
    title="Upcoming Bill"
    desc={
      <div className="h-full flex flex-col justify-around">
        {billCard}
      </div>
    }
  />
  )
};

export default CardBill
