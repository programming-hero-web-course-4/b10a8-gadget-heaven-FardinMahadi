import { Outlet } from "react-router-dom";
import DashboardBanner from "../DashboardBanner/DashboardBanner";
import NavBar from "../NavBar/NavBar";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 text-black">
      <NavBar />
      <DashboardBanner />
      <Outlet />
    </div>
  );
};

export default Dashboard;
