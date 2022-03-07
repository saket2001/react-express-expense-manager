import React from "react";
import { BackBtn } from "../Components/BackBtn";
import { ExpenseItem } from "../Components/ExpenseItem";
import { InputGroup } from "../Components/InputGroup";
import { InputMonth } from "../Components/InputMonth";
import { Layout } from "../Components/Layout";
// import { SelectBtn } from "../Components/SelectBtn";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { WalletActions } from "../Store/WalletSlice";

// const WalletsOptions = ["Main"];

export const Savings = () => {
  const dispatch = useDispatch();
  const { savings: data } = useSelector((state) => state?.wallet?.data);

  const Formik = useFormik({
    initialValues: {
      title: "",
      amount: "",
      wallet: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.title) errors.title = "Required";
      if (!values.amount) errors.amount = "Required";
      else if (values.amount <= 0)
        errors.amount = "Please Enter a Positive amount";

      return errors;
    },
    onSubmit: (values) => {
      const newSavings = {
        title: values.title,
        date: new Date().toISOString(),
        amount: values.amount,
      };
      dispatch(WalletActions.addSavings(newSavings));
      alert(JSON.stringify(newSavings));
    },
  });

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-1 p-2 py-4">
        <BackBtn />
        <h1 className="text-lg capitalize text-extrabold text-gray-800 px-4 my-2">
          Transfer money from wallet to savings
        </h1>
        <form
          onSubmit={Formik.handleSubmit}
          className="flex flex-col justify-center px-2 py-4 mx-2 border-2 border-blue-800 rounded-md"
        >
          <div className="flex flex-col gap-1 p-2 py-1">
            <InputGroup
              label="Title"
              placeholder="Savings title"
              type="text"
              required={true}
              name="title"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.title}
              error_msg={Formik.errors.title}
              isBlur={Formik.touched.title}
            />
            <InputGroup
              label="Amount"
              placeholder="Expense Amount"
              type="Number"
              required={true}
              name="amount"
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              value={Formik.values.amount}
              error_msg={Formik.errors.amount}
              isBlur={Formik.touched.amount}
            />
          </div>
          {/* <div className="flex items-center gap-3 px-4 py-1">
            <div className="flex flex-col justify-center gap-1">
              <p className="font-semibold text-lg text-gray-800">Wallet</p>
              <SelectBtn
                name="wallet"
                onChange={Formik.handleChange}
                value={Formik.values.wallet}
                options={WalletsOptions}
              />
            </div>
            <InputGroup
              label="Amount"
              placeholder="Expense Amount"
              type="Number"
              required={true}
              name="amount"
              onChange={Formik.handleChange}
              value={Formik.values.amount}
            />
          </div> */}
          <button
            className="bg-blue-800 text-gray-100 my-1 mx-auto px-3 py-1 rounded-md text-lg transition-all hover:bg-blue-700 hover:shadow-lg"
            type="submit"
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
          {data.map((item) => (
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
