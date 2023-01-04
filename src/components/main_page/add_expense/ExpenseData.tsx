import { useEffect, useState } from "react";

export default function ExpenseData({ category, ammount }) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const today = new Date();
  const dateString = today.toLocaleDateString("en-IN", options);

  const [listExpenses, setListExpenses] = useState([]);
  return (
    <div id="expense-data">
      {/* {listExpenses.map(
        ([category, ammount],
        (idx) =>
          idx > 0 ? (
            <div className="data" key={idx}>
              <div className="title">
                <h5>{category}</h5>
                <h5 className="price">৳{ammount}</h5>
              </div>
              <span>
                <h6>{dateString}</h6>
              </span>
            </div>
          ) : (
            ""
          ))
      )} */}
      <div className="data">
        <div className="title">
          <h5>Food</h5>
          <h5 className="price">৳50</h5>
        </div>
        <span>
          <h6>{dateString}</h6>
        </span>
      </div>
      <div className="data">
        <div className="title">
          <h5>Home Rent</h5>
          <h5 className="price">৳50</h5>
        </div>
        <span>
          <h6>2500</h6>
        </span>
      </div>
      <div className="data">
        <div className="title">
          <h5>Mobile Recharge</h5>
          <h5 className="price">৳39</h5>
        </div>
        <span>
          <h6>2500</h6>
        </span>
      </div>
    </div>
  );
}
