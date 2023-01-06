import React, { useContext, useState } from "react";
import MenuCard from "../UI/MenuCard";
import style from "./MealsItem.module.css";
import MealitemForm from "./MealItemForm";
import Context from "../Context/Context";

const MealsItem = (props) => {
  const price = props.price.toFixed(2);
  const ctx = useContext(Context);
  let [currentAmount, setAmount] = useState(0);
  const getValue = (e) => {
    setAmount(e);
  };
  const addItems = () => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: props.price,
      description: props.description,
      quantity: currentAmount,
    });

    ctx.send(0);
    ctx.transfer(currentAmount);
  };

  return (
    <div>
      <div>
        <MenuCard>
          <div className={style["container"]}>
            <div className={style["cont"]}>
              <div>
                <h2>{props.name}</h2>
              </div>
              <div className={style["description"]}>
                <p>description: {props.description}</p>
              </div>
              <p>
                price: <span className={style["price"]}>Rs. {price}</span>
              </p>
            </div>
            <div className={style["butCont"]}>
              <div className={style["form"]}>
                <MealitemForm onInput={getValue} />

                <button
                  type="submit"
                  className={style["btn"]}
                  onClick={addItems}
                  disabled={
                    currentAmount >= 0 && currentAmount <= 5 ? false : true
                  }
                >
                  <span className={style["plus"]}>+</span>{" "}
                  <span className={style["add"]}>Add</span>
                </button>
              </div>
            </div>
          </div>
        </MenuCard>
      </div>
    </div>
  );
};

export default MealsItem;
