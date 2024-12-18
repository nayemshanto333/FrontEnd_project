import React from "react";

function Chillsbay() {
  const cardData = [
    {
      icon: "logo1.png",
      title: "Your  entire  trip in one checkout!",
      desc: "Add multiple experiences to your cart and checkout on one click.",
    },
    {
      icon: "logo2.png",
      title: "Your  entire  trip in one checkout!",
      desc: "Add multiple experiences to your cart and checkout on one click.",
    },
    {
      icon: "logo3.png",
      title: "Your  entire  trip in one checkout!",
      desc: "Add multiple experiences to your cart and checkout on one click.",
    },
  ];
  return (
    <section className="my-10 sm:my-20">
      <div className="container mx-auto px-2.5  ">
        <h1 className="text-2xl lg:text-5xl text-center  text-[#26395C] font-bold my-10">
        Why Use Chillsbay?
        </h1>
        <div className="bg-[#F5FAFF] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto mt-5 gap-4  py-8 shadow-xl">
          {cardData.map((item, index) => (
            <div key={index}>
              <img
                className="w-fit mx-auto"
                src={item.icon}
                alt=""
              />
              <div className="w-[60%] mx-auto text-center my-4 space-y-3">
                <h3 className="font-semibold text-xl lg:text-3xl  ">{item.title}</h3>
                <p className=" text-base lg:text-xl ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Chillsbay;
