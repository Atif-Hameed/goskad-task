import { ContainerProps } from "@/app/types";
import React from "react";

const Container: React.FC<ContainerProps> = ({ children, className = "", parentStyle = "",ref }) => {
  return (
    <div className={`w-full flex justify-center ${parentStyle}`}>
      <div ref={ref} className={`max-w-5xl w-full px-4 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
