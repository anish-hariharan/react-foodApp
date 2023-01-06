import React, { useContext } from "react";
import Context from "../Context/Context";
import style from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  let ctx = useContext(Context);
  return (
    <>
      <button className={style["button"]} onClick={ctx.close}>
        <span className={style["cart"]}>{`${props.cart ? props.cart : ""} ${
          props.name
        }  `}</span>
        <span className={style["item"]}>{props.number}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
