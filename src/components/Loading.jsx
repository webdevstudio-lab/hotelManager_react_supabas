const Loading = () => {
  return (
    <div
      className="h-10 w-10 animate-spin rounded-full border-[5px] border-solid border-current border-cyan-700 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    ></div>
  );
};

export default Loading;
