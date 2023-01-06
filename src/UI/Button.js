import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={style["btnCont"]}>
      <button className={style["btn"]} onClick={props.Onclick}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
