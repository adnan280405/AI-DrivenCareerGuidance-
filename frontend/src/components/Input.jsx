import React from "react";

function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  ...rest
}) {
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default Input;
