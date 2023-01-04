import "./add_expense.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ExpenseCategory from "./ExpenseCategory";
import ExpenseData from "./ExpenseData";
import { useState } from "react";

export default function AddExpense() {
  const date = new Date();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );
  const day = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date);
  const [inputSalary, setInputSalary] = useState(Number);
  const [salary, setSalary] = useState("0");
  const [dailyLimit, setDailyLimit] = useState("0");
  const [dailyExpense, setDailyExpense] = useState("0");
  const [sst, setSST] = useState("0");
  const [lst, setLST] = useState("0");
  const [inputExpenseAmmount, setInputExpenseAmmount] = useState(Number);
  const [expenseAmmount, setExpenseAmmount] = useState(Number);
  const [categoryValue, setCategoryValue] = useState("");
  const [category, setCategory] = useState("");
  function calculateSalary() {
    let calc_expandable: any = (inputSalary / 100) * 70;
    let calc_dailylimit: any = calc_expandable / 30;
    let calc_sst: any = (inputSalary / 100) * 15;
    let calc_lst: any = (inputSalary / 100) * 15;
    setSalary(
      calc_expandable.toLocaleString("en-IN", { minimumFractionDigits: 2 })
    );
    setDailyLimit(
      calc_dailylimit.toLocaleString("en-IN", { minimumFractionDigits: 2 })
    );
    setSST(calc_sst.toLocaleString("en-IN", { minimumFractionDigits: 2 }));
    setLST(calc_lst.toLocaleString("en-IN", { minimumFractionDigits: 2 }));
  }
  const [totalDailyExpense, setTotalDailyExpense] = useState(Number);
  function calculateAddExpense() {
    setCategory(categoryValue);
    let exp_amnt = parseInt(inputExpenseAmmount);
    setTotalDailyExpense(totalDailyExpense + exp_amnt);
    setDailyExpense(totalDailyExpense.toLocaleString("en-IN"));
    setExpenseAmmount(exp_amnt.toLocaleString("en-IN"));
  }
  return (
    <div id="add_expense">
      <div className="header-info">
        <div className="monthly-expense-remaining">
          <h2>৳{salary}</h2>
          <h5>Expandable</h5>
        </div>
        <div className="daily-limit">
          <h2>৳{dailyLimit}</h2>
          <h5>Daily Limit</h5>
        </div>
        <div className="daily-expense">
          <h2>৳{dailyExpense}</h2>
          <h5>Total Daily Expense</h5>
        </div>
      </div>
      <div className="header-info savings">
        <div className="sts">
          <h2>৳{sst}</h2>
          <h5>Short Term Saving</h5>
        </div>
        <div className="lts">
          <h2>৳{lst}</h2>
          <h5>Long Term Saving</h5>
        </div>
      </div>
      <div className="user-input-area">
        <div className="saving-input">
          <span className="inp">
            <TextField
              id="outlined-basic"
              label="Salary"
              variant="outlined"
              className="inp"
              type={"number"}
              value={inputSalary}
              onChange={(e) => setInputSalary(e.target.value)}
            />
          </span>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => calculateSalary()}
          >
            submit
          </Button>
        </div>
        <div className="add-expense">
          <span className="inp">
            <TextField
              id="outlined-basic"
              label="Expense Amount"
              variant="outlined"
              className="inp"
              type={"number"}
              value={inputExpenseAmmount}
              onChange={(e) => setInputExpenseAmmount(e.target.value)}
            />
          </span>
          <ExpenseCategory setCategoryValue={setCategoryValue} />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => calculateAddExpense()}
          >
            Expense
          </Button>
        </div>
        <div className="expense-data-container">
          <ExpenseData category={category} ammount={expenseAmmount} />
        </div>
      </div>
    </div>
  );
}
