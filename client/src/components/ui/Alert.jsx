import React from "react";

const Alert = ({ type = "info", message = "" }) => {
  const colorMap = {
    success: "text-green-500",
    error: "text-red-500",
    warning: "text-yellow-500",
    info: "text-blue-500",
  };

  return message ? (
    <p className={`text-sm font-medium ${colorMap[type] || colorMap.info}`}>
      {message}
    </p>
  ) : null;
};

export default Alert;
