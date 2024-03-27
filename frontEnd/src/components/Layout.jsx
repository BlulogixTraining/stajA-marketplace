import { Outlet } from "react-router";
import TobNav from "./Navbar/Navbar";
import HeroSlider from "./Slider/HeroSlider";

const Layout = () => {
  return (
    <div>
      <TobNav />
      <Outlet />
    </div>
  );
};

export default Layout;
