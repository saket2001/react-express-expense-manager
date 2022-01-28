import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Start } from "./Pages/Start";
import { ErrorPage } from "./Pages/ErrorPage";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
import { Dashboard } from "./Pages/Dashboard";
import { Add } from "./Pages/Add";
import { Profile } from "./Pages/Profile";
import { Savings } from "./Pages/Savings";
import { Wallet } from "./Pages/Wallet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-new" element={<Add />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/savings" element={<Savings />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
