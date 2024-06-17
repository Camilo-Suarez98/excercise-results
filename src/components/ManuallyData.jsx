const ManuallyData = ({ onClick }) => {
  return (
    <p className="text-xl">
      Or
      {" "}
      <button
        className='bg-transparent p-0 font-black border-none text-green-500 transition duration-500 hover:text-red-500'
        onClick={onClick}
      >
        Click here
      </button>
      {" "}
      to enter the data manually
    </p>
  );
};

export default ManuallyData;
