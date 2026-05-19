import React from "react";

function Button({ children, type = "button", onClick, disabled = false, className = "" }) {
  return (
    <button
      type={type}
      className={`btn ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
