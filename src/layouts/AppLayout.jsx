import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen max-w-6xl mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
