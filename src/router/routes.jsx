import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import UpdateProfile from "../pages/UpdateProfile";
import PhoneSignUp from "../pages/PhoneSignUp";
import EmailLink from "../pages/EmailLink";
import ForgetPassword from "../pages/ForgetPassword";
import Protect from "../pages/Protect";
import Admin from "../pages/Admin";
import User from "../pages/User";
import Instructor from "../pages/Instructor";
import ProtectedRoute from "./ProtectedRoute";
import ProtectToRoute from "./ProtectToRoute";
import MultiRole from "../pages/MultiRole";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "protect",
        element: (
          <ProtectedRoute>
            <Protect />
          </ProtectedRoute>
        ),
      },
      {
        path: "admin",
        element: (
          <ProtectToRoute roles={["admin"]}>
            <Admin />
          </ProtectToRoute>
        ),
      },
      {
        path: "user",
        element: (
          <ProtectToRoute roles={["user"]}>
            <User />
          </ProtectToRoute>
        ),
      },
      {
        path: "instructor",
        element: (
          <ProtectToRoute roles={["instructor"]}>
            <Instructor />
          </ProtectToRoute>
        ),
      },

      {
        path: "multiRole",
        element: (
          <ProtectToRoute roles={["admin", "instructor"]}>
            <MultiRole />
          </ProtectToRoute>
        ),
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "phone-input",
        element: <PhoneSignUp />,
      },
      {
        path: "email-link",
        element: <EmailLink />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);
export default router;
