import React from "react";
const Button = ({ classname = "button", onClick = () => {}, children }) => {
  return (
    <button className={classname} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
