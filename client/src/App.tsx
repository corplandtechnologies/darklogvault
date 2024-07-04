import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard";
import Deposit from "./Pages/Deposit";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [currentUser, setCurrentUser] = useState<object>({});
  const navigate = useNavigate();

  useEffect(() => {
    const user: object = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user);
    if (!user) {
      return navigate("/login");
    }
  }, []);

  const isAuthPage = () => {
    return ["/register", "/login"].includes(window.location.pathname);
  };

  return (
    <>
      <Toaster />
      {!isAuthPage() && <Navbar />}
      <Routes>
        {currentUser ? (
          <>
            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
              path="/deposit"
              element={<Deposit />}
            />
          </>
        ) : (
          <>
            <Route
              path="/register"
              element={<Register />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
