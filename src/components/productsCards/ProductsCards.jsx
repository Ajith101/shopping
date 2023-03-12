import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, AddQty } from "../../features/cartSlice";

const ProductsCards = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function addtoCartItemes(item, id) {
    dispatch(addToCart(item));
    dispatch(AddQty({ qty: 1, id: id, price: item.price }));
  }

  return (
    <div className="bg-white rounded-2xl flex p-2 flex-col justify-between shadow-2xl gap-3 h-auto">
      <div
        onClick={() => navigate(`/itemdetails/${item.id}`)}
        className="w-full h-[300px] relative rounded-2xl overflow-hidden"
      >
        <img
          className="w-full h-[90%] object-cover"
          src={item.thumbnail}
          alt=""
        />
        <h1 className="text-black">{item.brand}</h1>
        <span className="bg-red-400 absolute text-sm bottom-10 left-2 text-white px-2 py-1 text-center rounded-md">
          {item.category}
        </span>
      </div>

      <div
        onClick={() => navigate(`/itemdetails/${item.id}`)}
        className="flex flex-col"
      >
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <h1>{item.stock}</h1>
      </div>
      <div className="flex gap-4 items-center">
        <h3>Price:</h3>
        <h1 className="text-xl font-semibold">
          {"₹"} {item.price * 81.97}
        </h1>
      </div>
      <div className="">
        <button
          onClick={() => addtoCartItemes(item, item.id)}
          className="bg-yellow-500 font-semibold text-lg rounded-full text-white px-5 py-1 text-center"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCards;
