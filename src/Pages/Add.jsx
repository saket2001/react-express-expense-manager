import React, { useState } from "react";
import { BackBtn } from "../Components/BackBtn";
import { Categories } from "../Components/Categories";
import { InputGroup } from "../Components/InputGroup";
import { Layout } from "../Components/Layout";
import { SelectBtn } from "../Components/SelectBtn";
import { TextArea } from "../Components/TextArea";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { WalletActions } from "../Store/WalletSlice";

const WalletsOptions = ["Main"];

const TypeOptions = ["Expense", "Income"];

export const Add = () => {
  const dispatch = useDispatch();
  const [selectWalletValue, setSelectWalletValue] = useState("");
  const [selectTypeValue, setSelectTypeValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const Formik = useFormik({
    initialValues: {
      walletName: "",
      paymentType: "",
      category: "",
      amount: "",
      date: "",
      description: "",
    },
    onSubmit: (values) => {
      values.walletName = selectWalletValue;
      values.paymentType = selectTypeValue;
      values.category = categoryValue;

      const newExpense = {
        walletName: values.walletName,
        paymentType: values.paymentType,
        category: values.category,
        amount: values.amount,
        date: values.date,
        title: values.description,
      };

      console.log(newExpense);
      dispatch(WalletActions.addExpenses(newExpense));
      alert("New Expense Added !!");
    },
  });

  return (
    <Layout>
      <form
        onSubmit={Formik.handleSubmit}
        className="grid grid-cols-1 gap-1 p-2 py-4"
      >
        <BackBtn />
        {/*categories div  */}
        <Categories sendCategory={(value) => setCategoryValue(value)} />
        {/* row 1 */}
        <div className="flex items-center gap-5 p-2">
          <div className="flex flex-col justify-center gap-1">
            <p className="font-semibold text-lg text-gray-800">Wallet</p>
            <SelectBtn
              title="Main"
              name="walletName"
              onChange={(value) => setSelectWalletValue(value)}
              value={Formik.values.walletName}
              options={WalletsOptions}
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="font-semibold text-lg text-gray-800">Type</p>
            <SelectBtn
              title="Expense"
              name="paymentType"
              onChange={(value) => setSelectTypeValue(value)}
              value={Formik.values.paymentType}
              options={TypeOptions}
            />
          </div>
        </div>
        {/* amount */}
        <div className="flex flex-col justify-center gap-1">
          <InputGroup
            label="Amount"
            placeholder="Amount"
            name="amount"
            onChange={Formik.handleChange}
            value={Formik.values.amount}
            onBlur={Formik.handleBlur}
            type="Number"
            required={true}
          />
        </div>
        {/* date time*/}
        <div className="flex flex-col justify-center gap-1">
          <InputGroup
            label="Date"
            name="date"
            onChange={Formik.handleChange}
            value={Formik.values.date}
            onBlur={Formik.handleBlur}
            type="date"
            required={true}
          />
        </div>
        {/* description */}
        <div className="flex flex-col justify-center gap-1">
          <TextArea
            label="Description"
            name="description"
            onChange={Formik.handleChange}
            value={Formik.values.description}
            onBlur={Formik.handleBlur}
            placeholder="Add some description to remember your expense later"
          />
        </div>
        {/* submit button */}
        <button
          type="submit"
          className="bg-blue-800 text-gray-100 my-3 mx-2 px-3 py-1 rounded-md text-lg transition-all hover:bg-blue-700 hover:shadow-lg"
        >
          Submit
        </button>
      </form>
    </Layout>
  );
};
