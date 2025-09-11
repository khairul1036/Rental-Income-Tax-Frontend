import { createBrowserRouter } from "react-router";
import LandingLayout from "../layouts/LandingLayout";
import Signup from "../pages/auth/signup/Signup";
import Login from "../pages/auth/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);

export default router;
