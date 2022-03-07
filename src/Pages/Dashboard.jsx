import React, { useEffect, useState } from "react";
import { Dropdown } from "../Components/Dropdown";
import { ExpenseItem } from "../Components/ExpenseItem";
import { Layout } from "../Components/Layout";
import { Loader } from "../Components/Loader";
import { Overall } from "../Components/Overall";
import { useSelector } from "react-redux";
import { SignIn } from "./SignIn";

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
  const { data } = useSelector((state) => state?.wallet);
  const { isLoggedIn } = useSelector((state) => state?.auth);
  const [expensesData] = useState(data.expenses);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoggedIn && <SignIn />}
      {!isLoading && isLoggedIn && (
        <Layout>
          <div className="bg-blue-800 h-48 flex flex-col gap-1 text-gray-100 px-3 py-2">
            <div className="flex items-center justify-between p-2">
              <h2 className="text-xl flex flex-col">
                Hello, John Doe
                <span className="text-gray-300 text-sm">
                  Today is {new Date().toDateString()}
                </span>
              </h2>
            </div>
            {/* overall */}
            <div className="flex justify-center relative mx-2">
              <Overall />
            </div>
            {/* expenses list */}
            <div className="flex items-center justify-between text-gray-700 p-2 my-3">
              <h2 className="font-bold text-lg">All Expenses</h2>
              <Dropdown title="Filter By" options={filterOptions} />
            </div>
            {/* expenses list items */}
            <ul className="flex flex-col gap-3 pb-6">
              {expensesData.map((item) => (
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
