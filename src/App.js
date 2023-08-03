import { Fragment } from "react";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { CartDetails } from "./Pages/CartDetails";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;
