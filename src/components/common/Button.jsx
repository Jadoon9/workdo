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
  tootip,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-2 md:px-6 py-3 border-2 ${
        borderWhite ? "border-secondary-200" : "border-primary-200"
      } uppercase ${bgColor} ${width} ${tootip} hover:opacity-85 relative font-bold body-small md:body-medium lg:body-18 hover:scale-105 ${textColor} rounded-[45px]`}
    >
      <>{text}</>
    </button>
  );
};

export default Button;
