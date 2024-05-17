const ManuallyData = ({ onClick }) => {
  return (
    <p>
      Ó
      {" "}
      <button
        className='bg-transparent p-0 font-black outline-none text-green-300 transition duration-700 hover:border-none hover:text-green-500'
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
