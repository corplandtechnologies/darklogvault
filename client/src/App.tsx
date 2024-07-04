// Import necessary hooks and components
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard";
import Deposit from "./Pages/Deposit";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

// Custom hook for protected routes
const useProtectedRoute = (navigate: ReturnType<typeof useNavigate>) => {
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);
};

const App = () => {
  const navigate = useNavigate();

  // Use the custom hook for protected routes
  useProtectedRoute(navigate);

  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        {/* Protected routes */}
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/deposit"
          element={<Deposit />}
        />

        {/* Public routes */}
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </>
  );
};

export default App;
