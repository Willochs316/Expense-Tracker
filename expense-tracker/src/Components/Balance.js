import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

//pull from transaction list
//reduce to round them up
//tofix 2 decimal places

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  //output the total replace $0.00
  return (
    <>
      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
      </div>
    </>
  );
};

export default Balance;
