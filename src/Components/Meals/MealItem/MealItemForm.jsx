import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [quantity, setQuantity] = React.useState(1);
  const handleAdd = () => {
    props.onAdd(quantity);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        changeQuantity={setQuantity}
      />
      <button onClick={handleAdd}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
