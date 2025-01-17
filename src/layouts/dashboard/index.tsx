import Menu from "@/components/menu";
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
      <Menu />
      <div className="bg-dashboard grow">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
