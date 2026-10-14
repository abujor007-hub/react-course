
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Laptop from "./Pages/Laptop";
import Phone from  "./Pages/Phone";
import Camera from "./Pages/Camera";



const App = () => {
  return (
   
<Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="Product" element={<Product />}>
        <Route path="Phone" element={<Phone />} />
        <Route path="Laptop" element={<Laptop />} />
        <Route path="Camera" element={<Camera />} />
      </Route>
    </Route>
  </Routes>
</Router>

  );
};

export default App;
