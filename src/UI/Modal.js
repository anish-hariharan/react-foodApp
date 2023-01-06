import React from "react";
import style from "./Modal.module.css";
import ReactDOM from "react-dom";

//for blurring background to clear portrait the model
const BackDrop = () => {
  return (
    <>
      <div className={style["BackDrop"]}></div>
    </>
  );
};

const ModelLay = (props) => {
  return (
    <div className={style["modal"]}>
      <div className={style["prop"]}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalId = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalId)}
      {ReactDOM.createPortal(<ModelLay>{props.children}</ModelLay>, portalId)}
    </>
  );
};

export default Modal;
