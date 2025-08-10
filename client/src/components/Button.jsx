import React from "react";

const Button = ({ className, children, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-2 border rounded-full bg-accent text-background text-semibold cursor-pointer hover:bg-secondary duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
