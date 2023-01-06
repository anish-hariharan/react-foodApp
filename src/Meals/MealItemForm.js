import React from "react";
import style from "./MealItemForm.module.css";
import InputForm from "../UI/InputForm";

const MealitemForm = (props) => {
  const getRef = (value) => {
    props.getRef(value);
  };

  const getIt = (e) => {
    props.onInput(e);
  };

  return (
    <div className={style["container"]}>
      <form className={style["container"]}>
        <InputForm
          label="Quantity"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "0",
          }}
          getRef={getRef}
          get={getIt}
        />
      </form>
    </div>
  );
};

export default MealitemForm;
