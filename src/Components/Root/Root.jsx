import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-[rgb(237,237,237)]">
      <Outlet />
      <Footer />

      <ToastContainer />
    </div>
  );
};

export default Root;
