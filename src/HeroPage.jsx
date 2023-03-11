import React, { useContext } from "react";
import DiscoverProdutcts from "./components/DiscoverProdutcts";
import ProductForYou from "./components/ProductForYou";
import { AllProductsList } from "./globalDatas/GlobalDatas";

const HeroPage = () => {
  const { datass } = useContext(AllProductsList);
  return (
    <section>
      <div className="w-full pt-20 h-[60vh] relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="md:flex-row flex flex-col w-full h-full justify-center absolute text-white top-0">
          {" "}
          <div className="md:w-[30%] w-full pt-20 px-3 flex flex-col justify-center items-center">
            <div className="">
              <h1 className="md:text-4xl text-2xl font-bold">
                Shope your favarote itemes from herer
              </h1>
              <p>To pursue their passion for a healthier tomorrow</p>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <div className="md:w-[70%] lg:w-[70%] w-[90%]">
              <img
                className="w-full h-full object-contain overflow-hidden rounded-lg"
                src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <DiscoverProdutcts />
      <ProductForYou />
    </section>
  );
};

export default HeroPage;
