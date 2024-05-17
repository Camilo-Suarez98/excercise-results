const Conditions = () => {
  return (
    <>
      <p>
        If the box is color {" "}
        <span className="bg-green-500 p-1">Green</span>
        {" "} it means that the data is real
      </p>
      <p className="mt-2 mb-5">
        If the color is {" "}
        <span className="bg-red-500 p-1">Red</span>
        {" "} it means that some of the data does not look real
      </p>
    </>
  );
};

export default Conditions;
