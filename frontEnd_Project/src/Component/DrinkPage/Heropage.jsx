import React from "react";
import { Button } from "@nextui-org/react";

function Heropage() {
  return (
    <section className="bg-[url(DrinkpageHeroImage.png)] w-full h-[70vh] bg-no-repeat bg-top  md:bg-cover overflow-hidden mx-auto mt-4">
      <div className="flex flex-col justify-start items-center lg:items-start lg:py-[100px] p-4 pt-6 w-[80%] mx-auto ">
        <div className="bg-[#FBFCFF]/75 container w-full max-w-[330px] md:max-w-[600px] rounded-lg p-[18px] md:py-[30px] md:px-8 ">
          <h1 className="text-2xl lg:text-[42px] font-bold text-desc mt-4">Our top pick for the week!</h1>
          <h2 className="text-xl lg:text-[32px] text-desc font-bold mt-4 mb-3">Nok by Alara</h2>
          <p className="text-desc w-[70%] leading-tight text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor .
          </p>
          <div className="flex justify-end items-center">
            <Button color="primary" className="w-36" >Reserve Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Heropage;
