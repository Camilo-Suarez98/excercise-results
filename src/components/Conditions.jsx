const Conditions = () => {
  return (
    <>
      <p>
        Si el cuadro es color {" "}
        <span className="bg-green-500 p-1">verde</span>
        {" "} significa que los datos son reales
      </p>
      <p className="mt-2 mb-5">
        Si es de color {" "}
        <span className="bg-red-500 p-1">amarillo</span>
        {" "} significa que alguno de los datos no parecen reales
      </p>
    </>
  );
};

export default Conditions;
