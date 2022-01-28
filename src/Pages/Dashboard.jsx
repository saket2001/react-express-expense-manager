import React, { useEffect, useState } from "react";
import { Dropdown } from "../Components/Dropdown";
import { ExpenseItem } from "../Components/ExpenseItem";
import { Layout } from "../Components/Layout";
import { Loader } from "../Components/Loader";
import { MainLogo } from "../Components/MainLogo";
import { Overall } from "../Components/Overall";

const dummyList = [
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
];

const filterOptions = [
  {
    name: "By Latest",
    link: "/dashboard?filter=latest",
  },
  {
    name: "By Oldest",
    link: "/dashboard?filter=oldest",
  },
];

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <Layout>
          <div className="bg-blue-800 h-48 flex flex-col gap-1 text-gray-100 px-3 py-2">
            <div className="flex items-center justify-between py-2">
              <MainLogo color="white" />
              <h2 className="text-xl flex flex-col items-end">
                Hello, John Doe
                <span className="text-gray-300 text-sm">
                  Today is {new Date().toDateString()}
                </span>
              </h2>
            </div>
            {/* overall */}
            <div className="flex justify-center relative">
              <Overall />
            </div>
            {/* expenses list */}
            <div className="flex items-center justify-between text-gray-700 p-2 my-3">
              <h2 className="font-bold text-lg">All Expenses</h2>
              <Dropdown title="Filter By" options={filterOptions} />
            </div>
            {/* expenses list items */}
            <ul className="flex flex-col gap-3">
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
      )}
    </>
  );
};
