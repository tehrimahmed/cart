import { Fragment } from "react";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { CartDetails } from "./Pages/CartDetails";
import Login from "./Pages/Login";
import AdminItems from "./Pages/AdminItems";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/items" element={<Home />} />
        <Route path="/itemdetails" element={<CartDetails />} />
        <Route path="/admin" element={<AdminItems />} />
      </Routes>
    </Fragment>
  );
}

export default App;
