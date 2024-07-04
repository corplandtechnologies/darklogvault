import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard";
import Deposit from "./Pages/Deposit";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  useEffect(() => {
    if (
      !currentUser &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      navigate("/login");
    }
  }, [currentUser, navigate, location]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setCurrentUser(user);
  }, []);

  return (
    <>
      <Toaster />
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
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
