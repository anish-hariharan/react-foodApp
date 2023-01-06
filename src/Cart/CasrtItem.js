import React from "react";
import style from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <>
      <div className={style["container"]}>
        <div className={style["food"]}>
          <p>{props.name}</p>
        </div>
        <div className={style["quantity"]}>
          <p>
            <span className={style["span"]}>
              <button onClick={props.remove} className={style["button"]}>
                -
              </button>
            </span>
            {props.quantity}
            <span className={style["span"]}>
              <button onClick={props.add} className={style["button"]}>
                +
              </button>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
