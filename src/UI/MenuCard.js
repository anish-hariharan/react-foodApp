import React from "react";
import style from "./MenuCard.module.css";

const MenuCard = (props) => {
  return (
    <div className={style["body"]}>
      <div className={style["Container"]}>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default MenuCard;
