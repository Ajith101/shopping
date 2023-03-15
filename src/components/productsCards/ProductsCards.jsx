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
    <div className="bg-white rounded-2xl flex flex-col justify-between shadow-2xl gap-1 h-auto">
      <div className="w-full h-[250px] relative rounded-2xl overflow-hidden">
        <img
          onClick={() => navigate(`/itemdetails/${item.id}`)}
          className="w-full h-[90%] object-cover"
          src={item.thumbnail}
          alt=""
        />
        <h1 className="text-black px-2">{item.brand}</h1>
        <span
          onClick={() => navigate(`/category/${item.category}`)}
          className="bg-red-400 cursor-pointer absolute text-sm bottom-10 left-2 text-white px-2 py-1 text-center rounded-md"
        >
          {item.category}
        </span>
      </div>

      <div
        onClick={() => navigate(`/itemdetails/${item.id}`)}
        className="flex px-2 flex-col"
      >
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <h1>{item.stock}</h1>
      </div>
      <div className="flex gap-4 px-2 items-center">
        <h3>Price:</h3>
        <h1 className="text-xl font-semibold">
          {"₹"} {Math.ceil(item.price * 81.97)}
        </h1>
      </div>
      <div className="px-2 pb-2">
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
