/* eslint-disable react/prop-types */
import { useField } from "formik";
import Button from "./Button";
import { useRef } from "react";

const Input = ({
  type,
  placeholder,
  handleInputChange,
  renderButton,
  buttonOnClick,
  buttonText,
  onKeyDown,
  value,
  name,
  label,
  borderWhite,
  showIcon,
  pending,
  icon,
  showStartIcon,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="relative my-4" style={{ width: "100%" }}>
      {label && (
        <label
          htmlFor=""
          className="block body-medium uppercase neue700 text-primary-200"
        >
          {label}
        </label>
      )}

      <div className="relative !w-full" style={{ width: "100%" }}>
        {showStartIcon && (
          <div className="absolute top-0 left-8 text-black h-full flex items-center">
            £
          </div>
        )}
        <input
          className={`!w-full px-6 lg:px-12 py-2 ${
            borderWhite ? "bg-white " : "bg-secondary-200"
          } border-2 rounded-[60px] outline-none border-primary-200 hover:opacity-85 `}
          type={type}
          value={value}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          onChange={handleInputChange}
          {...field}
          style={{ width: "100%" }} // Ensure the input fills the container's width
        />
        {showIcon && (
          <div className="absolute top-2 right-8 h-full flex items-center">
            <img src={icon} alt="" />
          </div>
        )}
      </div>
      {renderButton && (
        <div className="mt-2">
          <Button
            text="Subscribe"
            width="auto"
            bgColor="bg-primary-200"
            textColor="text-white"
            onClick={buttonOnClick}
            disabled={pending}
          />
        </div>
      )}
      {meta?.touched && meta?.error && (
        <p className="text-red-700 futura500 body-medium">
          {meta?.error || "\u00A0"}
        </p>
      )}
    </div>
  );
};

export default Input;
