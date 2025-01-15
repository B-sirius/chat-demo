import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

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
