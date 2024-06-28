import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex h-screen flex-row bg-[#f5f6f7a8]">
      <Sidebar />
      <div className="w-full overflow-auto">
        <Header />
        <main className="ml-[15rem] mt-[4rem] overflow-hidden py-[2rem] pl-[2rem] pr-[6.4rem]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
