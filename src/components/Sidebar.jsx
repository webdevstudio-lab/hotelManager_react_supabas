import Logo from "./Logo";
import MainNav from "./MainNav";

const Sidebar = () => {
  return (
    <div className="fixed flex h-screen w-[15rem] flex-col items-center gap-10 border-2 bg-white px-3">
      <Logo />
      <MainNav />
    </div>
  );
};

export default Sidebar;
