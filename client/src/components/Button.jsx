import React from "react";

const Button = ({ className, children, onClick, disabled }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`px-6 py-2 border rounded-full text-background text-semibold cursor-pointer hover:bg-secondary duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
