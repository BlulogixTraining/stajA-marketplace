import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import SellerProfile from "./pages/SellerProfile.jsx";
import Products from "./pages/Products.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Login from "./pages/login/Login.jsx";
import Product from "./pages/Product.jsx";
import Layout from "./components/Layout.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./components/Check/Checkout.jsx";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import WishList from "./pages/WishList";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import ProductsSeller from "./components/Dashborad/ProductsSeller.jsx";
import Sellerhome from "./components/Dashborad/Sellerhome.jsx";
import AddProduct from "./components/Dashborad/AddProduct.jsx";
import EditProductPage from "./components/Dashborad/EditProductPage.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import OrderDetials from "./pages/OrderDetials.jsx";
import Category from "./components/Dashborad/Category/Category.jsx";
import AddCategory from "./components/Dashborad/Category/AddCategory.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Adresses from "./pages/UserProfile/Adresses.jsx";

// import loader
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <Product /> },
      { path: "myorders", element: <MyOrders /> },
      { path: "orderdetails", element: <OrderDetials /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "adresses",
        element: (
          <RequireAuth fallbackPath="/login">
            <Adresses />
          </RequireAuth>
        ),
      },
      {
        path: "userProfile",
        element: (
          <RequireAuth fallbackPath="/login">
            <UserProfile />
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
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { index: "/", element: <Sellerhome /> },
      { path: "products", element: <ProductsSeller /> },
      { path: "add-product", element: <AddProduct /> },
      { path: "edit-product/:id", element: <EditProductPage /> },
      { path: "categories", element: <Category /> },
      { path: "categories/add", element: <AddCategory /> },
      {
        path: "sellerProfile",
        element: <SellerProfile />,
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
