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
  useEffect(() => {
    setListExpenses([...listExpenses, { category, ammount }]);
  }, [ammount]);
  return (
    <div id="expense-data">
      {listExpenses.map(
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
      )}
    </div>
  );
}
