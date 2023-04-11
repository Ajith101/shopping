import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AddQty,
  decreseQty,
  increseQty,
  removeFromCart,
} from "../../features/cartSlice";

const CartProducts = ({ item }) => {
  const navigate = useNavigate();
  const { cartItemes, qty } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const qtyProducts = qty.filter((items) => {
    if (items.id === item.id) {
      return items;
    }
  });

  let newQty = [];

  let displayOnlyQTy = qtyProducts.map((items, id) => {
    newQty.push(items.qty);
  });

  let displayQTY = qtyProducts.map((items, id) => {
    return <h1 key={id}>{items.qty}</h1>;
  });

  return (
    <div className="md:w-[90%] w-full px-2 md:px-10 flex gap-8 justify-between border-b-[1px] py-3">
      <div className="flex gap-3 md:w-[50%]">
        <div
          onClick={() => navigate(`/itemdetails/${item.id}`)}
          className="w-[100px] h-[100px] rounded-md overflow-hidden gap-5"
        >
          <img
            className="w-full h-full object-cover"
            src={item.thumbnail}
            alt=""
          />
        </div>
        <div className="flex md:w-full w-[30%] flex-col justify-between">
          <div
            onClick={() => navigate(`/itemdetails/${item.id}`)}
            className="inline-flex gap-3"
          >
            {displayQTY} x<h1>{item.title}</h1>
          </div>

          <div className="md:hidden lg:hidden flex flex-col justify-between">
            <h1>
              {"₹"} {Math.ceil(item.price * 81.97)}
            </h1>
            <span
              className="text-red-600 cursor-pointer"
              onClick={() => dispatch(removeFromCart(item))}
            >
              remove
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <div className="">
          <button
            onClick={() =>
              newQty == 1
                ? dispatch(removeFromCart(item))
                : dispatch(decreseQty(item))
            }
            className="rounded-full p-2 text-center bg-amber-300"
          >
            -
          </button>
        </div>
        {displayQTY}
        <div className="">
          <button
            onClick={() => dispatch(increseQty(item))}
            className="rounded-full p-2 text-center bg-amber-300"
          >
            +
          </button>
        </div>
      </div>
      {/* <CiSquareRemove className="text-red-600" size={"25px"} /> */}
      <div className="hidden md:flex flex-col md:justify-between">
        <h1>
          {"₹"} {Math.ceil(item.price * 81.97)}
        </h1>
        <span
          className="text-red-600 cursor-pointer"
          onClick={() => dispatch(removeFromCart(item))}
        >
          remove
        </span>
      </div>
    </div>
  );
};

export default CartProducts;
