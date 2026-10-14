import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Profile from "./Components/Profile";

import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

// Fetch GitHub Profile Data
async function githubProfileLoader() {
  const res = await fetch("https://api.github.com/users/abujor007-hub");

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub profile data");
  }

  return res.json();
}

// Layout Component
function Layout() {
  return (
    <div>
      <header>
        <h1>My Shop</h1>

        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
          <Link to="/about">About</Link> | <Link to="/profile">Profile</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2025 My Shop</p>
      </footer>
    </div>
  );
}

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile",
        element: <Profile />,
        loader: githubProfileLoader,
      },
    ],
  },
]);

const My_App = () => {
  return <RouterProvider router={router} />;
};

export default My_App;
