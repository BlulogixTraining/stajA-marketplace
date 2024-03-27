import { Outlet } from "react-router";
import TobNav from "./Navbar/Navbar";
import Ad from "./Navbar/Ad";

const Layout = () => {
  return (
    <div>
      <Ad />
      <TobNav />
      <Outlet />
    </div>
  );
};

export default Layout;
