import React, { useEffect, useState } from "react";
import { OverallItem } from "./OverallItem";
import { WalletActions } from "../Store/WalletSlice";
import { useDispatch, useSelector } from "react-redux";

export const Overall = () => {
  const dispatch = useDispatch();
  const {
    data: { totalExpenses, totalIncome, totalSavings },
  } = useSelector((state) => state?.wallet);

  dispatch(WalletActions.calcAllExpenses());
  dispatch(WalletActions.calcAllIncomes());
  dispatch(WalletActions.calcAllSavings());

  return (
    <div className="bg-white w-auto h-auto shadow-md mt-5 rounded-xl text-gray-800 p-2">
      <div className="flex justify-evenly gap-1">
        <OverallItem label="Expenses" amount={totalExpenses} />
        <OverallItem label="Income" amount={totalIncome} />
        <OverallItem label="Savings" amount={totalSavings} />
      </div>
    </div>
  );
};
