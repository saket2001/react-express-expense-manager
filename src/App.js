import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Start } from "./Pages/Start";
import { ErrorPage } from "./Pages/ErrorPage";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
import { Dashboard } from "./Pages/Dashboard";
import { Add } from "./Pages/Add";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-new" element={<Add />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
