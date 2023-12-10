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

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
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
