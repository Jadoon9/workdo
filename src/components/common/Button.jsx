/* eslint-disable react/prop-types */
const Button = ({
  text,
  bgColor,
  textColor,
  width,
  borderWhite,
  smallText,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 border-2 ${
        borderWhite ? "border-secondary-200" : "border-primary-200"
      } uppercase ${bgColor} ${width} hover:opacity-85 font-bold ${
        !smallText ? "body-regular" : "body-small"
      } hover:scale-105 ${textColor} rounded-[45px]`}
    >
      <>{text}</>
    </button>
  );
};

export default Button;
