import ConditionsColors from "./ConditionsColors"

const Conditions = () => {
  return (
    <div className="text-xl">
      <p>
        If the box is color {" "}
        <ConditionsColors color="green-500" />
        {" "} it means that the data is real
      </p>
      <p className="mt-2 mb-5">
        If the color is {" "}
        <ConditionsColors color="red-500" />
        {" "} it means that some of the data does not look real
      </p>
    </div>
  );
};

export default Conditions;
