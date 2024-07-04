import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard";
import Deposit from "./Pages/Deposit";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/deposit"
          element={<Deposit />}
        />
      </Routes>
    </>
  );
};

export default App;
