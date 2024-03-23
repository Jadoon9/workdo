/* eslint-disable react/prop-types */
const Button = ({
  text,
  bgColor,
  textColor,
  width,
  borderWhite,
  smallText,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-6 py-3 border-2 ${
        borderWhite ? "border-secondary-200" : "border-primary-200"
      } uppercase ${bgColor} ${width} hover:opacity-85 font-bold body-medium lg:body-18 hover:scale-105 ${textColor} rounded-[45px]`}
    >
      <>{text}</>
    </button>
  );
};

export default Button;
