import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard";
import Deposit from "./Pages/Deposit";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

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
        {/* Public routes */}
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected routes */}
        <Route
          path="/"
          element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/deposit"
          element={currentUser ? <Deposit /> : <Navigate to="/login" />}
        />
        {/* Add more protected routes as needed */}
      </Routes>
    </>
  );
};

export default App;
