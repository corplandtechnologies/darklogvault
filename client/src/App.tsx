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

const App = () => {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

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
          path="/"
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
          path="/usbanks"
          element={currentUser ? <USBanks /> : <Navigate to="/login" />}
        />
        <Route
          index
          path="/ukbanks"
          element={currentUser ? <UKBanks /> : <Navigate to="/login" />}
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
