import React, { createContext, useState, useReducer } from "react";

const Context = createContext({
  foodMenu: [],
  modalHandler: false,
  close: () => {},
  order: () => {},
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  transfer: (e) => {},
  newCount: 0,
  totalAmount: 0,
  send: (e) => {},
  input: "",
  clear: () => {},
  add: (item) => {},
  orderModel: false,
});

const defaultCartItems = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    let newTotalAmount;
    let existingCartItemIndex = state?.items?.findIndex(
      (item) => item.name === action?.item?.name
    );
    let existingItem = state.items[existingCartItemIndex];
    console.log(existingItem);
    if (existingItem) {
      let addy = action?.num ? action?.num : Number(existingItem?.quantity);
      let updatedItem = {
        ...existingItem,
        amount:
          Number(
            action?.item?.name === "Meen Chatti"
              ? 22
              : "" || action?.item?.name === "idly sambar vadai"
              ? 16
              : "" || action?.item.name === "Kothu Kozhi"
              ? 12
              : "" || action?.item?.name === "Avial"
              ? 18
              : ""
          ) + Number(state?.totalAmount),
        quantity: addy + Number(action?.item?.quantity),
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      newTotalAmount = updatedItem?.amount;
    } else {
      const sample = action?.item;
      updatedItems = state.items.concat(sample);
      newTotalAmount =
        state?.totalAmount + action?.item?.amount * action?.item?.quantity;
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    console.log(action?.name);
    let existingCartItemIndex = state?.items?.findIndex(
      (item) => item?.name === action?.name
    );

    let existingItem = state?.items[existingCartItemIndex];
    console.log(existingItem);
    let updatedAmount =
      Number(state?.totalAmount) -
      Number(
        action?.name === "Meen Chatti"
          ? 22
          : "" || action?.name === "idly sambar vadai"
          ? 16
          : "" || action?.name === "Kothu Kozhi"
          ? 12
          : "" || action?.name === "Avial"
          ? 18
          : ""
      );
    let updatedItems;
    if (Number(existingItem?.quantity) === 1) {
      updatedItems = state.items.filter((item) => item.name !== action?.name);
    } else {
      let updatedItem = {
        ...existingItem,
        quantity: Number(existingItem?.quantity) - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartItems;
};

export const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartItems
  );

  const addItem = (item, num) => {
    dispatchCartAction({ type: "ADD", item: item, num: num });
  };

  const removeItem = (name) => {
    dispatchCartAction({ type: "REMOVE", name: name });
  };
  const add = (item) => {
    const add = 1;
    let change = item;
    return change + add;
  };

  let [modal, setmodel] = useState(false);
  const close = () => {
    modal === true ? setmodel(false) : setmodel(true);
  };

  let [orderModel, setOrder] = useState(false);
  const order = () => {
    orderModel === true ? setOrder(false) : setOrder(true);
  };

  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Meen Chatti",
      description: "Finest fish and veggies",
      price: 22,
    },
    {
      id: "m2",
      name: "idly sambar",
      description: "A tamil specialty!",
      price: 16,
    },
    {
      id: "m3",
      name: "Kothu Kozhi",
      description: "South TamilNadu, raw, meaty",
      price: 12,
    },
    {
      id: "m4",
      name: "Avial",
      description: "Healthy...and green...",
      price: 18,
    },
  ];

  const [newCart, setCart] = useState(0);

  const get = (e, type) => {
    if (type === "remove") {
      setCart(newCart - 1);
    } else {
      setCart((value) => value + Number(e));
    }
  };

  let [input, SetInput] = useState(0);
  const send = (e) => {
    return SetInput(e);
  };

  const clear = () => {
    SetInput(0);
  };

  return (
    <>
      <Context.Provider
        value={{
          foodMenu: DUMMY_MEALS,
          modalHandler: modal,
          close: close,
          order: order,
          addItem: addItem,
          items: cartState.items,
          transfer: get,
          newCount: newCart,
          totalAmount: cartState.totalAmount,
          send: send,
          input: input,
          clear: clear,
          add: add,
          removeItem: removeItem,
          orderModel: orderModel,
        }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
};

export default Context;
