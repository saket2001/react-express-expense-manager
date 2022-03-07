import { configureStore } from "@reduxjs/toolkit";
import { WalletSlice } from "./WalletSlice";
import { authSlice } from "./AuthSlice";

const store = configureStore({
  reducer: {
    wallet: WalletSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
