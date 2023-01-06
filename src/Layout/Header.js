import React, { useContext } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "../UI/HeaderCartButton";
import Context from "../Context/Context";

const Header = () => {
  const ctx = useContext(Context);
  console.log("cart " + ctx.newCount);
  return (
    <div className={styles["header"]}>
      <div className={styles["cont"]}>
        <div className={styles["firstBar"]}>
          <span className={styles["peacock"]}>🍗</span>HOTEL
        </div>
        <div className={styles["secondBar"]}>
          <HeaderCartButton cart={"🛒"} name={"Cart"} number={ctx.newCount} />
        </div>
      </div>
    </div>
  );
};

export default Header;
