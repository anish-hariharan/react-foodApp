import React, { useContext } from "react";
import Context from "../Context/Context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import style from "./CartModal.module.css";
import CartItem from "./CasrtItem";

const CartModal = () => {
  const ctx = useContext(Context);
  const data = ctx.items;
  let order = ctx.orderModel;

  const remoneHandler = (name) => {
    ctx.removeItem(name);
    ctx.transfer(1, "remove");
  };

  const addHandler = (item) => {
    ctx.addItem(item, 1);
    ctx.transfer(1);
  };

  return (
    <Modal>
      <div className={style["container"]}>
        <div>
          {data.map((value) => {
            return (
              <>
                <CartItem
                  key={value.id}
                  name={value.name}
                  quantity={value.quantity}
                  add={addHandler.bind(null, value)}
                  remove={remoneHandler.bind(null, value.name)}
                />
              </>
            );
          })}
          {data.length === 0 ? (
            <p className={style["para"]}> No orders Placed! </p>
          ) : (
            " "
          )}
        </div>
        <div className={style["total"]}>
          {data.length !== 0 ? (
            <h4>Total Amount: {` Rs. ${ctx.totalAmount}`} </h4>
          ) : (
            ""
          )}
        </div>
        <div className={style["order"]}>
          {order ? <h2> your order placed Sucessfully! </h2> : ""}
        </div>
        <div className={style["btnCont"]}>
          <span className={style["gap"]}>
            <Button name="Close" Onclick={ctx.close} />
          </span>
          {data.length !== 0 ? (
            <span className={style["gap"]}>
              {!order ? <Button name="Order" Onclick={ctx.order} /> : ""}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
