import Logo from "./Logo"
import MainNav from "./MainNav"

const Sidebar = () => {

  return (
    <div className="flex flex-col items-center h-screen w-[15rem] border-2 fixed bg-white gap-10 px-3 ">
        <Logo/>
        <MainNav/> 
      </div>
  )
}

export default Sidebar