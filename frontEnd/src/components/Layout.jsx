import { Outlet } from "react-router";
import TobNav from "./Navbar/Navbar";
import Ad from "./Navbar/Ad";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Ad />
      <TobNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
