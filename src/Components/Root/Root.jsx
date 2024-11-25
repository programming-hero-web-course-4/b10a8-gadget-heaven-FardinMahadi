import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-[rgb(237,237,237)]">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
