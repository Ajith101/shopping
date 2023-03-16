import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  AddQty,
  addWishList,
  removeWishList,
  removeFromCart,
} from "../../features/cartSlice";
import { FcLike, FcDislike } from "react-icons/fc";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";

const ProductsCards = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishList, cartItemes } = useSelector((state) => state.cart);
  // console.log(wishList);

  function addtoCartItemes(item, id) {
    dispatch(addToCart(item));
    dispatch(AddQty({ qty: 1, id: id, price: item.price }));
  }
  // console.log(wishList);
  const wish = wishList.filter((itemsss) => {
    if (itemsss === item.id) {
      return item;
    }
  });
  // console.log(wish);

  const checkItemOnCart = cartItemes.filter((itemess) => {
    if (itemess.id === item.id) {
      return item;
    }
  });
  let checking = checkItemOnCart.map((itemesss) => {
    return item.id;
  });

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
      <div className="px-2 pb-2 flex justify-between items-center">
        {wish == item.id ? (
          <AiTwotoneLike
            className="text-red-400"
            onClick={() => dispatch(removeWishList(item.id))}
            size={"25px"}
          />
        ) : (
          <AiOutlineLike
            className="text-red-400"
            onClick={() => dispatch(addWishList(item.id))}
            size={"25px"}
          />
        )}
        <button
          onClick={() =>
            checking == item.id
              ? dispatch(removeFromCart(item))
              : addtoCartItemes(item, item.id)
          }
          className={`${
            checking == item.id ? "bg-green-600" : "bg-yellow-600"
          } font-semibold text-lg rounded-full text-white px-5 py-1 text-center`}
        >
          {checking == item.id ? "added to cart" : "add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductsCards;
