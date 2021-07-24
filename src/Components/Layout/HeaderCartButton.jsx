import React, { useContext } from "react";
import { CartContext } from "../../Store/CartContextProvider";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const value = useContext(CartContext);
  const numbeOfCartItems = value.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numbeOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
