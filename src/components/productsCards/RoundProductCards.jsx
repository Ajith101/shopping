import React, { useContext } from "react";
import { AllProductsList } from "../../globalDatas/GlobalDatas";

const RoundProductCards = ({ item }) => {
  const { datass } = useContext(AllProductsList);

  const fliternames = datass.filter((itemes) => {
    return itemes.category === item;
  });

  let showOnlyOneImage = fliternames.map((itemesss) => {
    return itemesss.thumbnail;
  });

  return (
    <>
      <div className="bg-white rounded-2xl flex p-2 flex-col shadow-2xl gap-3 h-auto">
        <div className="w-full h-[250px] relative rounded-2xl overflow-hidden">
          <img
            className="w-full h-[80%] object-cover"
            src={showOnlyOneImage[1]}
            alt=""
          />
          <div className="flex flex-col text-center">
            <h1 className="text-xl font-semibold">{item}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoundProductCards;
