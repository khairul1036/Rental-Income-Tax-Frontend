import { createBrowserRouter } from "react-router-dom"; // ✅ react-router-dom
import LandingLayout from "../layouts/LandingLayout";
import Signup from "../pages/auth/signup/Signup";
import Login from "../pages/auth/login/Login";
import ForgotPassword from "../pages/auth/forgotPass/ForgotPassword";
import DashboardLayout from "../layouts/DashboardLayout";
import DashBoard from "../pages/cManager/DashBoard";
import Property from "../pages/cManager/Property";
import ViewProperty from "../pages/cManager/ViewProperty";
import Notification from "../pages/common/Notification";
import Owners from "../pages/cManager/Owners";
import ViewProfile from "../pages/cManager/ViewProfile";
import History from "../pages/cManager/History";
import Settings from "../pages/common/Settings";

const router = createBrowserRouter([
  // Public / Landing routes
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },

  // Dashboard routes (protected area)
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "owner", element: <h1 className="p-6">Owner Dashboard</h1> },
      { path: "tenant", element: <h1 className="p-6">Tenant Dashboard</h1> },

      // c manager routes
      { path: "manager", element: <DashBoard /> },
      { path: "property", element: <Property /> },
      { path: "view-property", element: <ViewProperty /> },
      { path: "notification", element: <Notification /> },
      { path: "owners", element: <Owners /> },
      { path: "settings", element: <Settings /> },
      { path: "owners/view-profile", element: <ViewProfile /> },
      { path: "manager/history", element: <History /> },
    ],
  },
]);

export default router;
