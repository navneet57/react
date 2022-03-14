// import React, { useState } from "react";
import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated !");
  //   console.log(title);
  // };
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseAmount = "Car Insurance";
  // const expenseTitle = 10000;
  // const month = props.date.toLocaleString("en-us", { month: "long" });
  // const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  // const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      {/* <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div> */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
