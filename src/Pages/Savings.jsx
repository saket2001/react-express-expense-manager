import React from "react";
import { BackBtn } from "../Components/BackBtn";
import { Dropdown } from "../Components/Dropdown";
import { ExpenseItem } from "../Components/ExpenseItem";
import { InputGroup } from "../Components/InputGroup";
import { InputMonth } from "../Components/InputMonth";
import { Layout } from "../Components/Layout";
import { SelectBtn } from "../Components/SelectBtn";

const WalletsOptions = ["Main"];

const dummyList = [
  {
    title: "December Savings",
    date: "01 Jan 2022",
    amount: "2000",
  },
];

export const Savings = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-1 p-2 py-4">
        <BackBtn />
        <h1 className="text-lg capitalize text-extrabold text-gray-800 px-4 my-2">
          Transfer money from wallet to savings
        </h1>
        <form action="" className="flex flex-col justify-center px-2">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="flex flex-col justify-center gap-1">
              <p className="font-semibold text-lg text-gray-800">Wallet</p>
              <SelectBtn title="Main" options={WalletsOptions} />
            </div>
            <InputGroup
              label="Amount"
              placeholder="Expense Amount"
              type="Number"
              required={true}
            />
          </div>
          <button
            className="bg-blue-800 text-gray-100 my-1 mx-auto px-3 py-1 rounded-md text-lg transition-all hover:bg-blue-700 hover:shadow-lg"
            style={{ width: "90%" }}
          >
            Transfer Money
          </button>
        </form>
        <hr className="border bg-gray-500 m-4" />
        {/* savings */}
        <div className="flex items-center justify-between text-gray-700 py-2 px-4 my-1">
          <h2 className="font-bold text-lg">All Savings</h2>
          <InputMonth />
        </div>
        {/* savings list */}
        <ul className="flex flex-col gap-3 px-4">
          {dummyList.map((item) => (
            <li>
              <ExpenseItem
                title={item.title}
                date={item.date}
                amount={item.amount}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
