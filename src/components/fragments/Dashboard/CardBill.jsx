import Card from "../../elements/card";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const CardBill = () => {
  const [bills, setBills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);

      const refreshToken = localStorage.getItem("refreshToken");

      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/bills",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      setBills(response.data.data);
      console.group("CardBill Response");
      console.log("Response Data: ", response.data.data);
      console.groupEnd();
    } catch (error) {
      if (error.response) {
        // console.log(error.response);
        if (error.response.status == 401) {
          setOpen(true);
          setMsg({
            severity: "error",
            desc: "Session Has Expired. Please Login. ",
          });

          setIsLoggedIn(false);
          setName("");
          localStorage.removeItem("refreshToken");
          Navigate("/login");
        } else {
          console.log(error.response);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
    console.group("CardBill");
    console.log("GetData Bill");
    console.groupEnd();
  }, []);

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

  return (
    <Card
      title="Upcoming Bill"
      desc={
        isLoading ? (
          <div className="flex justify-center items-center h-full">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <div className="h-full flex flex-col justify-around">{billCard}</div>
        )
      }
      // isLoading={isLoading}
    />
  );
};

export default CardBill;
