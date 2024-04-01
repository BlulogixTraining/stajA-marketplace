import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from "./pages/UserProfile.jsx";
import SellerProfile from "./pages/SellerProfile.jsx";
import Products from "./pages/Products.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Login from "./pages/login/Login.jsx";
import Product from "./pages/Product.jsx";
import Layout from "./components/Layout.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFoundPage />,
//   },
//   { path: "/about", element: <About /> },
//   {
//     path: "/contact",
//     element: <h1>Contact</h1>,
//   },
//   {
//     path: "/userProfile",
//     element: <UserProfile />,
//   },

//   {
//     path: "/sellerProfile",
//     element: <SellerProfile />,
//   },
//   { path: "/signup", element: <SignUp /> },
//   { path: "/login", element: <Login /> },
//   {
//     path: "/products",
//     element: <Products />,

//     children: [
//       {
//         path: "/products/:productId",
//         element: <Product />,
//       },
//     ],
//   },
//   {
//     path: "/products/:productId",
//     element: <Product />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <Product /> },
      { path: "about", element: <About /> },
      { path: "userProfile", element: <UserProfile /> },
      { path: "sellerProfile", element: <SellerProfile /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
