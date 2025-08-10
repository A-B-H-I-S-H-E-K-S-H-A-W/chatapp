import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`px-6 py-2 border rounded-full bg-accent text-background text-semibold cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
