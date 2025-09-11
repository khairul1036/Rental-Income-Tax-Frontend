import { createBrowserRouter } from "react-router";
import LandingLayout from "../layouts/LandingLayout";
import Signup from "../pages/auth/signup/Signup";
import Login from "../pages/auth/login/Login";
import ForgotPassword from "../pages/auth/forgotPass/ForgotPassword";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
  // Public / Landing routes
  {
    path: "/",
    element: <LandingLayout />,
    children: [
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
      { path: "manager", element: <h1 className="p-6">Manager Dashboard</h1> },
    ],
  },
]);

export default router;
