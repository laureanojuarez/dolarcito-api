export const InputDolar = ({ name }) => {
  return (
    <div className="flex flex-col items-center bg-gray-300 ">
      <span>{name}</span>
      <input type="text" className="h-full w-full" />
    </div>
  );
};
