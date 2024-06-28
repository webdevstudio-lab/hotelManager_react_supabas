/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

const CabinsRow = ({ cabin }) => {
  const { image, name, regularPrice, discount, maxCapacity } = cabin;
  return (
    <tr className="border-b border-neutral-200 text-start dark:border-white/10">
      <td className="whitespace-nowrap px-6 py-4">
        {" "}
        <img src={image} alt="img cabin" className="w-[5rem]" />
      </td>
      <td className="whitespace-nowrap px-6 py-4"> {name} </td>
      <td className="whitespace-nowrap px-6 py-4">{maxCapacity}</td>
      <td className="whitespace-nowrap px-6 py-4">{regularPrice} $</td>
      <td className="whitespace-nowrap px-6 py-4">{discount} $</td>
      <td className="whitespace-nowrap px-6 py-4"></td>
    </tr>
  );
};

export default CabinsRow;
