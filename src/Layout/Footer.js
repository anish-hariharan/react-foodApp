import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <span className={styles["copyCont"]}>
        <span className={styles["copy"]}>&copy;</span>Anish_2001
      </span>
    </div>
  );
};

export default Footer;
