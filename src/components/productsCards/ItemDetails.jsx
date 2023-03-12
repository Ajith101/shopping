import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { AllProductsList } from "../../globalDatas/GlobalDatas";
import Header from "../Header";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { datass } = useContext(AllProductsList);

  const filterItem = datass.filter((itemes) => {
    return itemes.id == params.id;
  });

  const [displayimage, setDisplayimage] = useState();

  const displayProducts = filterItem.map((item, id) => {
    return (
      <>
        <div key={id} className="w-full md:flex gap-5 px-3">
          <div className="md:w-[50%] w-full flex justify-center items-center flex-col gap-3">
            <div className="md:w-[450px] w-full h-[250px] md:h-[500px]">
              <img
                className="w-[100%] h-full object-cover"
                src={displayimage ? displayimage : item.thumbnail}
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-1 md:gap-3">
              {item.images.map((itemss) => {
                return (
                  <>
                    <img
                      onClick={() => setDisplayimage(itemss)}
                      src={itemss}
                      className="w-full h-[60px] md:h-[100px] object-cover rounded-lg overflow-hidden"
                      alt=""
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div className="md:w-[50%] w-full flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="md:text-4xl text-2xl font-bold">{item.title}</h1>
              <h2 className="text-xl md:text-2xl">{item.category}</h2>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl">MRP</h2>
              <h1 className="md:text-4xl text-2xl font-bold">
                {"₹  "}
                {item.price * 81.97}
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl">stock</h2>
              <h1 className="md:text-4xl text-2xl font-bold">{item.stock}</h1>
            </div>
            <h1 className="text-xl md:text-2xl">Rating : {item.rating}</h1>
            <div className="flex gap-3">
              <button className="text-2xl text-white rounded-lg bg-green-500 px-5 py-2 text-center">
                By Now
              </button>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="text-2xl text-white rounded-lg bg-green-500 px-5 py-2 text-center"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });

  //   console.log(filterItem);
  return (
    <>
      <Header />
      <section className="flex py-28 flex-col justify-center items-center">
        <div className="md:w-[88%] flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl uppercase">Products</h1>
          {displayProducts}
        </div>
      </section>
    </>
  );
};

export default ItemDetails;
