import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import PayModal from "./PayModal";

function Payment() {
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);

  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      img: "person1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      location: "Quilox Club",
      time: "9:00 PM ",
      quantity: "1",
      price: " 4500000",
    },
    {
      id: 2,
      img: "person2.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      location: "Quilox Club",
      time: "9:00 PM ",
      quantity: "1",
      price: " 5000000",
    },
  ]);

  const updateQuantity = (id, increment) => {
    setCartItem((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(parseInt(item.quantity) + increment, 1),
              price:
                Math.max(parseInt(item.quantity) + increment, 1) *
                (parseInt(item.price) / parseInt(item.quantity)),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  const addItem = () => {
    const NewItem = {
      id: cartItem.length + 1,
      img: "person1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      location: "Quilox Club",
      time: "9:00 PM ",
      quantity: "1",
      price: "199",
    };
    setCartItem([...cartItem, NewItem]);
  };
  return (
    <section className="container mx-auto px-2.5">
      <div className="flex flex-col lg:flex-row gap-10 my-8 ">
        {/* left side */}
        <div className="flex-1 ">
          <h3>Your Cart</h3>

          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-2 md:gap-10 border-b-1 mb-6 py-4"
            >
              <img className="w-[60px] sm:w-[120px] rounded-xl" src={item.img} alt="" />
              <div className="space-y-3">
                <h1 className="text-desc font-bold text-[14px] md:text-2xl leading-tight">{item.title}</h1>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <img className="h-4 w-4" src="Calendar.png" alt="" />
                    <p className="text-desc">{item.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="h-4 w-4" src="Mark.png" alt="" />
                    <p className="text-desc">{item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img className="h-4 w-4" src="Clock.png" alt="" />
                  <p className="text-desc">{item.date}</p>
                </div>
              </div>

              {/* Quantity Contorls */}
              <div className="flex items-center justify-around bg-[#E4E7EC] h-[30px] w-[15%] sm:w-[10%] rounded">
                <button
                  className="bg-[#FFFFFF33]/25 text-desc font-bold px-2  rounded "
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="text-desc font-bold">{item.quantity}</span>
                <button
                  className="bg-[#FFFFFF33]/25 text-desc font-bold px-2  rounded"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
              {/* Price section */}
              <p className="font-bold text-desc text-[15px]">
                ₦{parseInt(item.price).toLocaleString()}
              </p>

              {/* Remove items */}

              <div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="py-2 px-4 bg-slate-100 hover:bg-slate-200 rounded-full shadow-lg"
                >
                  X
                </button>
              </div>
            </div>
          ))}

          <Button
            onClick={() => addItem()}
            color="primary"
            className="font-bold"
          >
            Add New <span className="text-2xl">+</span>
          </Button>
        </div>


        {/* Right side */}
        <div className="flex-1 border-1 p-6">
          {/* Account info */}
          <div>
            <h3 className="flex  items-center gap-2 font-bold text-lg text-desc">
              <img src="/Check.svg" alt="" />
              Account information
            </h3>
            <div className="text-desc space-y-1 mt-1 ms-8">
              <p>Tunde Chukwu</p>
              <p>tundechukwu12@gmail.com</p>
            </div>
          </div>
          {/* Phone info */}
          <div className="mt-5">
            <h3 className="flex  items-center gap-2 font-bold text-lg text-desc">
              <img src="/Check.svg" alt="" />
              Phone number
            </h3>
            <div className="text-desc space-y-1 mt-1 ms-8">
              <p>+2341123465799</p>
            </div>
          </div>
          {/* card info */}
          <div className="mt-5">
            <h3 className="flex  items-center gap-2 font-bold text-lg text-desc">
              <img src="/Check.svg" alt="" />
              Payment{" "}
              <span className="flex gap-2 text-[#969DAA]">
                card{" "}
                <img
                  onClick={() => setShowPaymentInfo(!showPaymentInfo)}
                  className="cursor-pointer"
                  src="/ChevronDown.svg"
                  alt=""
                />
              </span>
            </h3>
            {showPaymentInfo && (
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Card Number"
                  className="w-full p-2 mt-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                />
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="w-full p-2 mt-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                />
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  className="w-full p-2 mt-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full p-2 mt-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                />
              </div>
            )}
          </div>

          {/* Card Summary */}
          <div className="bg-gray-200 my-4 p-5">
            <ul className="mb-4">
              {cartItem.map((item) => (
                <li key={item.id} className="flex justify-between  text-desc text-sm sm:text-medium">
                  <span>{item.title} </span>
                  <span>{item.quantity}</span>
                  <span>₦ {parseInt(item.price).toLocaleString()}</span>
                </li>
              ))}
            </ul>
            {/* Sub total */}
            <hr className="my-2" />
            <div className="flex justify-between text-desc px-3">
              <span>Sub Total:</span>
              <span>
                ₦{" "}
                {cartItem
                  .reduce((sum, item) => sum + parseInt(item.price), 0)
                  .toLocaleString()}
              </span>
            </div>

            {/* Tax Statements */}

            <div className="flex justify-between  text-desc px-3">
              <span>Tax (5%):</span>
              <span>
                ₦{" "}
                {(
                  cartItem.reduce(
                    (sum, item) => sum + parseInt(item.price),
                    0
                  ) * 0.05
                ).toLocaleString()}
              </span>
            </div>

            {/* Total Ammount */}

            <hr className="my-1 " />
            <div className="flex justify-between  text-desc font-bold border-t-1 border-white my-2 px-3">
              <span>Total Ammount:</span>
              <span>
                ₦{" "}
                {(
                  cartItem.reduce(
                    (sum, item) => sum + parseInt(item.price),
                    0
                  ) * 1.05
                ).toLocaleString()}
              </span>
            </div>

            <PayModal/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
