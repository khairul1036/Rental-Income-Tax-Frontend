import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import TopNavBar from "../components/TopNavBar";

const DashboardLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 pt-16 pb-16">
        {/* Fixed top nav */}
        <TopNavBar />
        <Outlet />
        {/* Fixed Bottom Navigation */}
        <NavBar />
      </div>
    </>
  );
};

export default DashboardLayout;
