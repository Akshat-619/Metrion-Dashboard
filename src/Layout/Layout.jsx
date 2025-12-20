import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row">
        <div className="col-2 pe-0">
          <Sidebar />
        </div>

        <div className="col-10 ps-0">
          <Header />
          <Outlet /> {/* 🔥 page content swaps here */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
