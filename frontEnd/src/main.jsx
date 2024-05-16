import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import SellerProfile from "./pages/SellerProfile.jsx";
import Products from "./pages/Products.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Login from "./pages/login/Login.jsx";
import Product from "./pages/Product.jsx";
import Layout from "./components/Layout.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./components/CheckOut/CheckOut.jsx";
// import { AuthProvider } from "./context/AuthProvider.jsx";
import createStore from "react-auth-kit/createStore";
// import { AuthProvider } from "react-auth-kit";
import AuthProvider from "react-auth-kit";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import WishList from "./pages/WishList";
import Dashboard from "./pages/Dashboard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <Product /> },
      { path: "about", element: <About /> },
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "userProfile",
        element: (
          <RequireAuth fallbackPath="/login">
            <UserProfile />
          </RequireAuth>
        ),
      },
      {
        path: "sellerProfile",
        element: (
          <RequireAuth fallbackPath="/login">
            <SellerProfile />
          </RequireAuth>
        ),
      },

      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      {
        path: "cart",
        element: (
          <RequireAuth fallbackPath="/login">
            <Cart />
          </RequireAuth>
        ),
      },
      { path: "/checkout", element: <Checkout /> },
      {
        path: "/wishlist",
        element: (
          <RequireAuth fallbackPath="/login">
            <WishList />
          </RequireAuth>
        ),
      },
    ],
  },
]);

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthProvider store={store}>
    <RouterProvider router={router} />
  </AuthProvider>
  // </React.StrictMode>
);
