import { Outlet } from "react-router-dom";
import Navbar from "../components/AppLayout/Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
