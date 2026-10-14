
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My Shop</h1>

        <nav>
          <Link to="/">Home</Link> 
          <Link to="/product">Products</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 My Shop</p>
      </footer>
    </div>
  );
};

export default Layout;
