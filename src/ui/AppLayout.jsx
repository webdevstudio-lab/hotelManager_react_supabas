import { Outlet } from "react-router-dom"
import Header from "../components/Header.jsx"
import Sidebar from "../components/Sidebar"

const AppLayout = () => {
  return (
    <div className="bg-[#F5F6FB] flex flex-row ">
      <Sidebar/>
      <div className="w-full overflow-auto">
      <Header/>
      <main className="py-[2rem] pl-[2rem] pr-[6.4rem] mt-[4rem] ml-[15rem] overflow-hidden ">
        <Outlet />
      </main>
      </div>
      
    </div>
  )
}

export default AppLayout