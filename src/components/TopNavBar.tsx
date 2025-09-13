import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router";

// Top Navigation Bar Component
const TopNavBar = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            JD
          </div>
          <span className="ml-3 font-medium text-gray-800">John Doe</span>
        </div>
        
        <div className="relative">
          <Link to={"/dashboard/notification"}>
            <button className="p-2 text-gray-600 hover:text-blue-600 relative">
            <FaBell size={20} />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {notificationCount}
              </span>
            )}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar