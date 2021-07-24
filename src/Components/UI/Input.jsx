import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    props.changeQuantity(e.target.value);
  };
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} onChange={handleChange} />
    </div>
  );
};

export default Input;
