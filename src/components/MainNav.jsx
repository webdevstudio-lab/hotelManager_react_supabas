import {
  Album,
  House,
  LayoutDashboard,
  Settings,
  UsersRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <nav className="">
        <ul className="flex flex-col gap-5">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "flex w-full cursor-pointer flex-row items-center space-x-4 rounded-md border-l-4 border-cyan-900 bg-slate-50 px-3 py-4 font-semibold text-cyan-900"
                : "flex w-full cursor-pointer flex-row items-center space-x-4 rounded-md px-3 py-4 hover:bg-slate-50"
            }
          >
            {" "}
            <LayoutDashboard /> <p>Home</p>{" "}
          </NavLink>

          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              isActive
                ? "flex w-full cursor-pointer flex-row items-center space-x-4 rounded-md border-l-4 border-cyan-900 bg-slate-50 px-3 py-4 font-semibold text-cyan-900"
                : "flex w-full cursor-pointer flex-row items-center space-x-4 rounded-md px-3 py-4 hover:bg-slate-50"
            }
          >
            {" "}
            <Album /> <p>Bookings</p>{" "}
          </NavLink>

          <NavLink
            to="/cabins"
            className={({ isActive }) =>
              isActive
                ? "flex w-full cursor-pointer flex-row items-center space-x-4 rounded-md border-l-4 border-cyan-900 bg-slate-50 px-3 py-4 font-semibold text-cyan-900"
                : "flex w-full cursor-pointer flex-row items-center space-x-4 rounded-md px-3 py-4 hover:bg-slate-50"
            }
          >
            {" "}
            <House /> <p>Cabins</p>{" "}
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "flex w-full cursor-pointer flex-row items-center space-x-4 rounded-md border-l-4 border-cyan-900 bg-slate-50 px-3 py-4 font-semibold text-cyan-900"
                : "flex w-full cursor-pointer flex-row items-center space-x-4 rounded-md px-3 py-4 hover:bg-slate-50"
            }
          >
            {" "}
            <UsersRound /> <p>Users</p>{" "}
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "flex w-full cursor-pointer flex-row items-center space-x-4 rounded-md border-l-4 border-cyan-900 bg-slate-50 px-3 py-4 font-semibold text-cyan-900"
                : "flex w-full cursor-pointer flex-row items-center space-x-4 rounded-md px-3 py-4 hover:bg-slate-50"
            }
          >
            {" "}
            <Settings /> <p>Settings</p>{" "}
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
