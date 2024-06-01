import { Outlet } from "react-router-dom";
import { NavSeller } from "../../components/Dashborad/NavSeller";
import { SideBarSeller } from "../../components/Dashborad/SideBarSeller";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { role } = useAuthUser();
  console.log("role", role);

  if (role !== "seller") {
    return <Navigate to="/" />;
  }

  return (
    <div className={`container-fluid m-0 p-0 d-flex  `}>
      <SideBarSeller />
      <div className={`container-fluid m-0 p-0 flex-grow-1  `}>
        <NavSeller />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
