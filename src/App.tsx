import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landinglayout from "./pages/Landinglayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
//import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Newdash from "./components/Newdash";
import Notfound from "./pages/Notfound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Landinglayout />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/newdash" element={<Newdash/> } />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
  );
}
