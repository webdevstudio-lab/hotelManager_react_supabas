/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../services/apiCabins";
import Loading from "./Loading";
import CabinsRow from "./CabinsRow";

const Table = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isLoading)
    return (
      <div className="relative flex flex-row items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <>
      <div>Table</div>
      <table
        role="table"
        className="text-surface min-w-full text-start text-sm font-light"
      >
        <thead
          role="row"
          className="border-b border-neutral-200 bg-zinc-50 text-left font-medium"
        >
          <th scope="col" className="px-6 py-4"></th>
          <th scope="col" className="px-6 py-4">
            CABIN
          </th>
          <th scope="col" className="px-6 py-4">
            CAPACITY
          </th>
          <th scope="col" className="px-6 py-4">
            PRICE
          </th>
          <th scope="col" className="px-6 py-4">
            DISCOUNT
          </th>
          <th scope="col" className="px-6 py-4"></th>
        </thead>
        <tbody>
          {cabins.map((cabin) => (
            <CabinsRow key={cabin.id} cabin={cabin} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
