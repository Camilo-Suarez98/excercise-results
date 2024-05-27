const Conditions = () => {
  return (
    <div className="text-xl">
      <p>
        If the box is color {" "}
        <span className="bg-green-500 text-transparent p-1">test</span>
        {" "} it means that the data is real
      </p>
      <p className="mt-2 mb-5">
        If the color is {" "}
        <span className="bg-red-500 text-transparent p-1">test</span>
        {" "} it means that some of the data does not look real
      </p>
    </div>
  );
};

export default Conditions;
