import React, { useContext } from "react";
import { AllProductsList } from "../globalDatas/GlobalDatas";
import RoundProductCards from "./productsCards/RoundProductCards";

const CategoryNames = () => {
  const { datass } = useContext(AllProductsList);

  let showCategoryNames = datass.map((item) => {
    return item.category;
  });

  const filteredCategoryNames = showCategoryNames.filter((item, id) => {
    return showCategoryNames.indexOf(item) === id;
  });
  const displayCategoryNames = filteredCategoryNames.map((item, id) => {
    if (id < 4) {
      return <RoundProductCards item={item} key={id} />;
    }
  });

  return <>{displayCategoryNames}</>;
};

export default CategoryNames;
