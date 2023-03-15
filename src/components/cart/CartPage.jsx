import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header";
import CartProducts from "./CartProducts";
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const { cartItemes, qty } = useSelector((state) => state.cart);
  const displayCartItemes = cartItemes.map((item, id) => {
    return <CartProducts key={id} item={item} />;
  });

  // display total quanity of itemes
  let displayQty = qty.map((item) => {
    return item.qty;
  });
  let totalQuantity = [];
  if (displayQty.length) {
    let sum = displayQty.reduce((a, b) => {
      return a + b;
    });
    totalQuantity.push(sum);
  }

  // Total price
  let totalPrice = qty.map((itemes) => {
    return itemes.qty * itemes.price;
  });

  let displatTotalRate = [];
  if (qty.length) {
    let sum = totalPrice.reduce((a, b) => {
      return a + b;
    });
    displatTotalRate.push(sum);
  }

  return (
    <>
      <Header />
      <div className="py-40 w-full h-full flex md:flex-row justify-center items-center flex-col">
        {cartItemes.length ? (
          <>
            <div className="md:w-[80%] w-[95%] flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-[70%]">
                <div className="bg-orange-100 rounded-md p-3">
                  <h1 className="text-xl">Your Cart</h1>
                  <h2 className="">Total Itemes: {cartItemes.length} nos</h2>
                  <h2 className="">Total Quantity: {totalQuantity} nos</h2>
                </div>
                <div className="flex my-4 justify-center items-center flex-col gap-5">
                  {displayCartItemes}
                </div>
              </div>
              <div className="w-full md:w-[30%]">
                <div className="bg-orange-100 rounded-md p-3">
                  <h1 className="text-xl">You Pay</h1>
                  <h2 className="">check our order policy</h2>
                </div>
                <div className="bg-orange-400 text-white p-1 text-center">
                  <h1 className="text-lg font-semibold">
                    You saved ₹ 364.00 on this order
                  </h1>
                </div>
                <div className="bg-slate-100 px-3 py-5 text-center">
                  <div className="flex border-b-[1px] justify-between p-2 items-center text-lg font-semibold">
                    <h1>Total price</h1>
                    <h1>
                      {"₹ "}
                      {Math.ceil(displatTotalRate * 81.97)}
                    </h1>
                  </div>
                  <div className="flex border-b-[1px] justify-between p-2 items-center text-base">
                    <h1>Distributor price discount</h1>
                    <h1>-20 rs</h1>
                  </div>
                  <div className="flex border-b-[1px] justify-between p-2 items-center text-base">
                    <h1>Delivery charges</h1>
                    <h1>free</h1>
                  </div>
                </div>
                <div className="flex justify-center mt-12 items-center">
                  <button className="bg-blue-500 px-10 rounded-xl py-2 text-white text-center">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default CartPage;
