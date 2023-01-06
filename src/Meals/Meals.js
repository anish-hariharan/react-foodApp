import React from "react";
import AvailableMeals from "./AvailableMeals";
import Mealsummary from "./MealsSummary";
import style from "./Meals.module.css";

const Meals = () => {
  return (
    <div>
      <Mealsummary />
      <div className={style["menu"]}>
        <h1>Menu</h1>
      </div>
      <AvailableMeals />
    </div>
  );
};

export default Meals;
