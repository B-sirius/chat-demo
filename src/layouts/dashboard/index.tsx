import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="h-full flex">
      <div className="bg-gray-600 p-4">MENU</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
