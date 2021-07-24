import React from "react";

export const CartContext = React.createContext();

const CartContextProvider = (props) => {
  const addItemToCart = (item) => {
    // cartContext.items.push(item);
    setItems((prevState) => [...prevState, item]);
    cartContext.totalAmount = cartContext.items.reduce((current, item) => {
      return current + item.amount;
    }, 0);
  };
  const removeItemFromCart = (id) => {};
  const [items, setItems] = React.useState([]);
  const cartContext = {
    items,
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
