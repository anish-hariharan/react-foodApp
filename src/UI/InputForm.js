import React, { useContext, useRef, useState } from "react";
import Context from "../Context/Context";
import style from "./InputForm.module.css";

const InputForm = React.forwardRef((props, ref) => {
  const ctx = useContext(Context);
  const numberOfOrder = (e) => {
    props.get(e.target.value);
    ctx.send(e.target.value);
  };

  return (
    <>
      <div className={style["inputCont"]}>
        <label className={style["label"]} htmlFor={props.input.id}>
          {props.label}
        </label>
        <input
          className={style["input"]}
          {...props.input}
          onInput={numberOfOrder}
        />
      </div>
    </>
  );
});

export default InputForm;
