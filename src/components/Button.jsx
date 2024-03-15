const Button = ({ onClick, bgColor = "", text }) => {
  return (
    <button onClick={onClick} className={bgColor}>{text}</button>
  );
};

export default Button;
