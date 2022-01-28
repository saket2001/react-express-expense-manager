import React, { useState } from "react";
import { BackBtn } from "../Components/BackBtn";
import { ExpenseItem } from "../Components/ExpenseItem";
import { InputMonth } from "../Components/InputMonth";
import { Layout } from "../Components/Layout";
import { SelectBtn } from "../Components/SelectBtn";
import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "Food", value: 400 },
  { name: "Travel", value: 300 },
  { name: "Gifts", value: 300 },
  { name: "Home", value: 200 },
  { name: "Grocery", value: 278 },
];

const categoriesOptions = [
  "Food",
  "Travel",
  "Health",
  "Gifts",
  "Education",
  "Grocery",
  "Home",
  "Salon",
  "Payments",
  "Others",
];

const dummyList = {
  Expenses: [
    {
      title: "Bought an ice cream",
      date: "01 Jan 2022",
      amount: "80",
    },
    {
      title: "Bought an ice cream",
      date: "01 Jan 2022",
      amount: "80",
    },
    {
      title: "Bought an ice cream",
      date: "01 Jan 2022",
      amount: "80",
    },
  ],
  Income: [
    {
      title: "January Salary",
      date: "01 Jan 2022",
      amount: "10000",
    },
  ],
};

export const Wallet = () => {
  const tab = "border-0 text-gray-500 lg:text-xl text-lg";
  const activeTab =
    "lg:text-xl text-lg border-b-4 border-gray-800 font-bold text-gray-800";

  const [tabState, setActiveTab] = useState("Expenses");

  const toggleTab = (value) => {
    setActiveTab(value);
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-1 p-2 py-4">
        <BackBtn />
        <div className="grid grid-cols-2 gap-3 py-1 px-2 my-2">
          <button
            className={tabState === "Expenses" ? activeTab : tab}
            onClick={() => {
              toggleTab("Expenses");
            }}
          >
            Expenses
          </button>
          <button
            className={tabState === "Income" ? activeTab : tab}
            onClick={() => {
              toggleTab("Income");
            }}
          >
            Income
          </button>
        </div>
        {tabState === "Expenses" && (
          <div className="my-2 flex justify-center items-center w-full h-3/4 bg-cyan-200 rounded-lg p-3 mx-auto shadow-sm">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#1e40af"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        )}
        {/* expenses list */}
        <div className="flex items-center justify-between text-gray-700 p-2 my-3">
          {tabState === "Expenses" ? (
            <SelectBtn title="Category" options={categoriesOptions} />
          ) : (
            ""
          )}
          <InputMonth />
        </div>
        {/* expenses list items */}
        <ul className="flex flex-col gap-3">
          {dummyList[tabState].map((item) => (
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
