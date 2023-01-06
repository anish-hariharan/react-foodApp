import React, { useContext } from "react";
import Context from "../Context/Context";
import MealsItem from "./MealsItem";

const AvailableMeals = () => {
  const ctx = useContext(Context);
  const foodMenu = ctx.foodMenu;
  return (
    <>
      {foodMenu.length === 0 ? (
        <p>no food Available!</p>
      ) : (
        foodMenu.map((value) => (
          <MealsItem
            key={value.id}
            name={value.name}
            description={value.description}
            price={value.price}
          />
        ))
      )}
    </>
  );
};

export default AvailableMeals;
