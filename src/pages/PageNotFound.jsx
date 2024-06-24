const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
        <div>
            <img src="" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
            <p className="text-[3rem] ">😴</p>
            <p className="text-[3rem] font-semibold text-blue-600">404</p>
            <p className="text-[3.5rem] font-bold text-cyan-950 ">Ooups, Page Note Found!</p>
            <button className="bg-blue-500 py-3 px-4 text-white rounded-md">Back to HomePage</button>

        </div>
    </div>
  )
}

export default PageNotFound