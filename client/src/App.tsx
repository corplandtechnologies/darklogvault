import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard";
import Deposit from "./Pages/Deposit";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DumpsAndPins from "./Pages/DumpsAndPins";
import CashApp from "./Pages/CashApp";
import Paypal from "./Pages/Paypal";
import MyOrders from "./Pages/MyOrders";
import Support from "./Pages/Support";
import USBanks from "./Pages/USBanks";
import UKBanks from "./Pages/UKBanks";
import { getCurrentUser } from "./utils/index";
import CanadaBanks from "./Pages/CanadaBanks";

interface ApiResponse {
  data: any;
}

const App = () => {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState<ApiResponse | null>(() => {
    const userFromStorage = localStorage.getItem("user");
    return userFromStorage ? JSON.parse(userFromStorage) : null;
  });

  const getLoggedInUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <>
      <Toaster />
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Routes>
        {/* Public routes */}
        <Route index path="/register" element={<Register />} />
        <Route index path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          index
          path="/dashboard"
          element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/deposit"
          element={currentUser ? <Deposit /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/dumps"
          element={currentUser ? <DumpsAndPins /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/banks/us"
          element={currentUser ? <USBanks /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/banks/uk"
          element={currentUser ? <UKBanks /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/banks/canada"
          element={currentUser ? <CanadaBanks /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/cashapp"
          element={currentUser ? <CashApp /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/paypal"
          element={currentUser ? <Paypal /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/orders"
          element={currentUser ? <MyOrders /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/orders"
          element={currentUser ? <MyOrders /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/support"
          element={currentUser ? <Support /> : <Navigate to="/login" />}
        />
        {/* Add more protected routes as needed */}
      </Routes>
    </>
  );
};

export default App;
