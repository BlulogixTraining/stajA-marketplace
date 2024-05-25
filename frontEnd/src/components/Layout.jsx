import { Outlet } from "react-router";
import TobNav from "./Navbar/Navbar";
import Ad from "./Navbar/Ad";
import Footer from "./Footer/Footer";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const Layout = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div>
      {!isAuthenticated && <Ad />}
      <TobNav isAuthenticated={isAuthenticated} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
