import React, { useContext } from "react";
import { AllProductsList } from "../globalDatas/GlobalDatas";
import CategoryNames from "./CategoryNames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const DiscoverProdutcts = () => {
  const { datass } = useContext(AllProductsList);
  return (
    <section className="flex justify-center items-center my-10">
      <div className="bg-blue-100 rounded-xl w-[97%] p-5">
        <div className="flex justify-center items-center">
          <h1 className="md:text-4xl text-2xl font-bold p-3">
            Discover Produtcts
          </h1>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <div className="grid w-[98%] md:w-[90%] lg:w-[60%] gap-5 grid-cols-2 md:grid-cols-4">
            <CategoryNames />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverProdutcts;
