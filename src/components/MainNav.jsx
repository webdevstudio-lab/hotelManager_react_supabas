import { Album, House, LayoutDashboard,  Settings, UsersRound } from "lucide-react"
import { NavLink } from "react-router-dom"


const MainNav = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <nav className="">
        <ul className="flex flex-col gap-5">

          <NavLink to="/dashboard" className={({isActive}) => isActive ? " font-semibold text-cyan-900 border-l-4 border-cyan-900 bg-slate-50 py-4 px-3 w-full rounded-md cursor-pointer flex flex-row items-center space-x-4" : "hover:bg-slate-50  py-4 px-3 w-full rounded-md cursor-pointer flex flex-row items-center space-x-4 "}> <LayoutDashboard/>  <p>Home</p> </NavLink>

          <NavLink to="/bookings" className={({isActive}) => isActive ? " font-semibold text-cyan-900 border-l-4 border-cyan-900 bg-slate-50 py-4 px-3 w-full rounded-md cursor-pointer flex flex-row items-center space-x-4" : "hover:bg-slate-50  py-4 px-3 w-full rounded-md cursor-pointer flex flex-row items-center space-x-4"}> <Album/> <p>Bookings</p>  </NavLink>

          <NavLink to="/cabins" className={({isActive}) => isActive ? " font-semibold text-cyan-900 border-l-4 border-cyan-900 bg-slate-50 py-4 px-3 w-full rounded-md cursor-pointer flex flex-row items-center space-x-4" : "hover:bg-slate-50  py-4 px-3 w-full rounded-md cursor-pointer flex flex-row items-center space-x-4"}> <House/> <p>Cabins</p>  </NavLink>

          <NavLink to="/users" className={({isActive}) => isActive ? " font-semibold text-cyan-900 border-l-4 border-cyan-900 bg-slate-50 py-4 px-3 w-full rounded-md cursor-pointer flex flex-row items-center space-x-4" : "hover:bg-slate-50  py-4 px-3 w-full rounded-md cursor-pointer flex flex-row items-center space-x-4"}> <UsersRound/>  <p>Users</p> </NavLink>

          <NavLink to="/settings" className={({isActive}) => isActive ? " font-semibold text-cyan-900 border-l-4 border-cyan-900 bg-slate-50 py-4 px-3 w-full rounded-md cursor-pointer flex flex-row items-center space-x-4" : "hover:bg-slate-50  py-4 px-3 w-full rounded-md cursor-pointer flex flex-row items-center space-x-4"}> <Settings/> <p>Settings</p>  </NavLink>
          
          
        </ul>
      </nav>
    </div>
  )
}

export default MainNav