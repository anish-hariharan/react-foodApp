import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["body"]}>{props.children}</div>
    </div>
  );
};

export default Card;
