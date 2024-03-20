/* eslint-disable react/prop-types */
import Button from "./Button";

const Input = ({
  type,
  placeholder,
  handleInputChange,
  renderButton,
  buttonOnClick,
  buttonText,
  label,
  borderWhite,
  showIcon,
  icon,
}) => {
  return (
    <div className="relative my-4">
      {label && (
        <label
          htmlFor=""
          className="body-medium uppercase mb-4 md:mb-6 font-[500] text-primary-200 my-8 md:my-4"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={`w-full px-6 lg:px-12 py-3 ${
          borderWhite ? "bg-white " : "bg-secondary-200"
        } border-2 rounded-[60px] outline-none border-primary-200 hover:opacity-85`}
        style={{ "::placeholder": { color: "#0C190E" } }}
      />
      {renderButton && (
        <div className="absolute top-0 right-2 h-full flex items-center">
          <Button
            text="Subscribe"
            width="auto"
            bgColor="bg-primary-200"
            textColor="text-white"
            onClick={buttonOnClick}
          />
        </div>
      )}
      {showIcon && (
        <div className="absolute top-2 right-8 h-full flex items-center">
          <img src={icon} alt="" />
        </div>
      )}
    </div>
  );
};

export default Input;
