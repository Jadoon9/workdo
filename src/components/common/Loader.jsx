import React from "react";
import { ThreeDots } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="#0C190E"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default LoadingSpinner;
