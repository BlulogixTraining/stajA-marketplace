import { Outlet } from "react-router-dom";
import { NavSeller } from "../../components/Dashborad/NavSeller";
import { SideBarSeller } from "../../components/Dashborad/SideBarSeller";
const Dashboard = () => {
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
