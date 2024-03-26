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
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="relative my-6">
      {label && (
        <label
          htmlFor=""
          className="body-medium uppercase neue700 text-primary-200 "
        >
          {label}
        </label>
      )}
      <input
        className={`w-full px-6 lg:px-12 py-2 ${
          borderWhite ? "bg-white " : "bg-secondary-200"
        } border-2 rounded-[60px] outline-none border-primary-200 hover:opacity-85 `}
        type={type}
        value={value}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        onChange={handleInputChange}
        {...field}
      />
      {renderButton && (
        <div className="absolute top-0 right-2 h-full flex items-center">
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
      {showIcon && (
        <div className="absolute top-2 right-8 h-full flex items-center">
          <img src={icon} alt="" />
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
