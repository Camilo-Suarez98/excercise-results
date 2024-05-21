const InputForm = ({ id, label, name, value, handleChange }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type="text" value={value} onChange={handleChange} />
    </>
  );
};

export default InputForm;
