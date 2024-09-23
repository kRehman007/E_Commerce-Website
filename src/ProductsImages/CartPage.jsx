import React from "react";
import { useEcomContext } from "../Context/ContextAPI";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
const CartPage = () => {
  const {
    cartItem,
    UpdatePlusToCart,
    UpdateMinusToCart,
    TotalPrice,
    calculateTotalPrice,
    RemoveItemsToCart,
    setBuyItem,
  } = useEcomContext();
  const navigate = useNavigate();

  const handleBuy = () => {
    setBuyItem(cartItem);
    navigate("/BuyNow");
  };

  return (
    <>
      {cartItem?.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10  text-red-500">
          <span className="text-2xl"> No Item Added to Cart</span>

          <button
            onClick={() => navigate("/")}
            className="px-3 py-2 text-white text-md mt-4 border border-gray-200"
          >
            Return to Home
          </button>
        </div>
      ) : (
        <div>
          <div
            className="grid grid-cols-4 gap-11 text-sm  mt-8 mb-16 w-[97vw] px-2 md:px-0 md:w-[80vw] items-center justify-center

    relative left-[50%]  translate-x-[-50%] py-2"
            style={{ border: "1px solid lightgrey" }}
          >
            <span>Product</span>
            <p className="px-2">Price</p>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          {cartItem?.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 gap-11 mt-8 w-[97vw] px-2 md:px-0 md:w-[80vw]
relative left-[50%] items-center translate-x-[-50%] py-2 text-sm"
              style={{ border: "1px solid lightgrey" }}
            >
              <p className="flex flex-col">
                <span className="relative">
                  <img src={item.img} className="rounded-full w-14 h-14" />
                  <TiDeleteOutline
                    className="absolute top-0 left-11 text-2xl text-black"
                    onClick={() => RemoveItemsToCart(item)}
                  />
                </span>

                <span className="whitespace-nowrap">{item?.title}</span>
              </p>
              <span className="px-2">{item?.price}</span>
              <span className="flex">
                <span className="text-black">
                  <CiCirclePlus
                    className="text-2xl"
                    onClick={() => UpdatePlusToCart(item)}
                  />
                </span>
                <span className="text-xl mt-[-3px]">{item.qty}</span>
                <span
                  className="text-2xl text-black
 "
                  onClick={() => UpdateMinusToCart(item)}
                >
                  <CiCircleMinus />
                </span>
              </span>
              <span className="px-1 ">{item?.price * item?.qty}</span>
            </div>
          ))}
          <div className="flex flex-col space-y-3 w-full mt-16 justify-center items-center">
            <div className="border border-gray-200 p-3 w-[50%] ">
              <h1 className="text-white font-semibold text-xl mb-4">
                Cart Total
              </h1>
              <div className="flex justify-between mb-4 text-sm items-center ">
                <span>Subtotal</span>
                <span>${TotalPrice}</span>
              </div>
              <hr />
              <div className="flex justify-between mb-4 text-sm items-center mt-6">
                <span>Shipping</span>
                <span>Free</span>
              </div>{" "}
              <hr />
              <div className="flex justify-between pb-8 text-sm mt-6 items-center">
                <span>Total</span>
                <span>${TotalPrice}</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row pt-2 items-center space-y-2 lg:space-y-0 space-x-2">
              <button
                onClick={handleBuy}
                className="px-3 py-2 bg-red-700 text-white  border border-gray-200"
              >
                Buy All Items
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-3 py-2 bg-transparent text-black  border border-black"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
