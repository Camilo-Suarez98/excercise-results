const InputForm = ({ id, label, name, value, handleChange }) => {
  return (
    <>
      <label className="mt-3 text-xl" htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        className="bg-[#4c6d59] border-none rounded-md p-2.5 mb-3 outline-none"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default InputForm;
