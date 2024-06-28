import Table from "../components/Table";

const Cabins = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-[2.5rem] font-bold text-cyan-950">All Cabins</h1>
        <p className="text-sm">Filter/Sort</p>
      </div>

      <div>
        <Table />
      </div>
    </div>
  );
};

export default Cabins;
