const PageNotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <p className="text-[3rem]">😴</p>
        <p className="text-[3rem] font-semibold text-blue-600">404</p>
        <p className="text-[3.5rem] font-bold text-cyan-950">
          Ooups, Page Note Found!
        </p>
        <button className="rounded-md bg-blue-500 px-4 py-3 text-white">
          Back to HomePage
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
