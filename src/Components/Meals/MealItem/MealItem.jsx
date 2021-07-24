import React, { useContext } from "react";
import { CartContext } from "../../../Store/CartContextProvider";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const value = useContext(CartContext);
  const handleAdd = (quantity) => {
    const item = {
      name: props.name,
      price,
      amount: quantity,
    };
    value.addItem(item);
    console.log(value);
  };
  const price = `Rs ${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAdd={handleAdd} />
      </div>
    </li>
  );
};

export default MealItem;
