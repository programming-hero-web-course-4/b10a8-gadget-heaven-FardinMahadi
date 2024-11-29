import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DashboardBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (route) => {
    navigate(route);
  };

  const isActive = (route) => location.pathname === route;

  return (
    <div className="bg-[#9538E2] py-10 text-white text-center flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <p className="w-1/2 mx-auto">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="flex gap-5 mx-auto">
        <button
          onClick={() => handleNavigation("/dashboard")}
          className={`py-2 px-8 rounded-full border ${
            isActive("/dashboard")
              ? "bg-white text-[#9538E2] font-bold border-transparent"
              : "bg-transparent text-white border-white"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => handleNavigation("/dashboard/wishlist")}
          className={`py-2 px-8 rounded-full border ${
            isActive("/dashboard/wishlist")
              ? "bg-white text-[#9538E2] font-bold border-transparent"
              : "bg-transparent text-white border-white"
          }`}
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default DashboardBanner;
