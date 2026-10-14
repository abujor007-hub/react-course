import React from "react";
import {Link,Outlet} from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Welcome to products Cpmponent</h1>
      <div>
        <h2>Products Page</h2>
        <nav>
          <Link to="Phone">Phones</Link> | <Link to="Laptop">Laptops</Link> |{" "}
          <Link to="Camera">Camera</Link>
        </nav>
        <Outlet /> 
      </div>
    </div>
  );
};

export default Product;


