import React, { useContext } from "react";
import { AllProductsList } from "../../globalDatas/GlobalDatas";
import { useNavigate } from "react-router-dom";

const RoundProductCards = ({ item }) => {
  const navigate = useNavigate();
  const { datass } = useContext(AllProductsList);

  const fliternames = datass.filter((itemes) => {
    return itemes.category === item;
  });

  let showOnlyOneImage = fliternames.map((itemesss) => {
    return itemesss.thumbnail;
  });

  return (
    <>
      <div
        onClick={() => navigate(`/category/${item}`)}
        className="bg-white rounded-2xl flex flex-col shadow-2xl gap-3 h-auto"
      >
        <div className="w-full relative rounded-2xl overflow-hidden">
          <div className="h-[200px]">
            <img
              className="w-full h-[100%] object-cover"
              src={showOnlyOneImage[1]}
              alt=""
            />
          </div>
          <div className="flex p-1 flex-col text-center">
            <h1 className="text-xl font-semibold">{item}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoundProductCards;
