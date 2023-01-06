import React, { useContext } from "react";
import Context from "./Context/Context";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import style from "./App.module.css";
import Meals from "./Meals/Meals";
import CartModal from "./Cart/CartModal";

function App() {
  const ctx = useContext(Context);
  let model = ctx.modalHandler;
  return (
    <>
      <Header />
      <div className={style["body"]}>
        <Meals />
        {!model ? "" : <CartModal />}
      </div>
      <Footer />
    </>
  );
}

export default App;
