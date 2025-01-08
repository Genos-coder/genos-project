type PropsType = {
  name: string;
  description: string;
  size: string;
  isAvailable: boolean;
};
function RamCards({ name, description, size, isAvailable }: PropsType) {
  return (
    <div className="h-[250px] w-[200px] rounded-[2.5rem] flex flex-col overflow-hidden bg-black items-center ">
      <div className="flex-1 p-2 mt-2">
        <h3 className="text-left text-md text-amber-700 font-medium">{name}</h3>
        <p className="mt-4 text-sm"> {description}</p>
      </div>
      {isAvailable ? (
        <div className="bg-green-500 w-full flex justify-between h-1/4 items-center p-2 text-sm">
          <p>{size}</p>
          <p>inStock</p>
        </div>
      ) : (
        <div className="bg-red-600 w-full flex justify-between h-1/4 items-center p-2 text-sm">
          <p>{size}</p>
          <p>Out of stock</p>
        </div>
      )}
    </div>
  );
}
export default RamCards;
