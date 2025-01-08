import React from "react";
import { Button } from "@nextui-org/react";

function ClubHeropage() {
  return (
    <section className="bg-[url(clubHero.png)] w-full h-[60vh] bg-no-repeat bg-top  md:bg-cover overflow-hidden mx-auto mt-4">
      <div className="flex flex-col justify-start items-center lg:items-start lg:py-[100px] p-4 pt-6 w-[90%] mx-auto ">
        <div className="bg-black/60 container w-full max-w-[330px] md:max-w-[600px] rounded-lg p-[18px] md:py-[30px] md:px-8 space-y-7">
          <h1 className="text-2xl lg:text-[42px] font-bold text-shite mt-4">Club Quilox </h1>
          <h2 className="text-xl lg:text-[32px] text-white font-bold mt-4 mb-3">Amaarae & Tems on June 3rd </h2>
         
          <div className="flex justify-end items-center">
            <Button color="primary" className="px-6 py-4 font-bold" >Book A Section Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClubHeropage;
