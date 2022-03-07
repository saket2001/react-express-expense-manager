import { createSlice } from "@reduxjs/toolkit";

export const WalletSlice = createSlice({
  name: "wallet",
  initialState: {
    id: "w1",
    wallet_name: "Main",
    data: {
      totalExpenses: 0,
      totalIncome: 0,
      totalSavings: 0,
      incomes: [
        {
          title: "Monthly Pocket Money",
          date: "01 Jan 2022",
          amount: 1000,
        },
      ],
      expenses: [
        {
          title: "Bought an ice cream",
          date: "01 Jan 2022",
          amount: 80,
        },
      ],
      savings: [
        {
          title: "Monthly Savings Added",
          date: "02 Jan 2022",
          amount: 100,
        },
      ],
    },
  },
  reducers: {
    addIncome(state, { payload }) {
      state.data.incomes = [payload, ...state.data.incomes];
    },
    addExpenses(state, { payload }) {
      state.data.expenses = [payload, ...state.data.expenses];
    },
    addSavings(state, { payload }) {
      state.data.savings = [payload, ...state.data.savings];
    },
    calcAllExpenses(state) {
      const amounts = state.data.expenses.map((item) => +item.amount);
      state.data.totalExpenses = amounts.reduce((prev, curr) => prev + curr, 0);
    },
    calcAllIncomes(state) {
      const amounts = state.data.incomes.map((item) => +item.amount);
      state.data.totalIncome = amounts.reduce((prev, curr) => prev + curr, 0);
    },
    calcAllSavings(state) {
      const amounts = state.data.savings.map((item) => +item.amount);
      state.data.totalSavings = amounts.reduce((prev, curr) => prev + curr, 0);
    },
  },
});

export const WalletActions = WalletSlice.actions;
