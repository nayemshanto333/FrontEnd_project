import React from "react";
import ClubHeropage from "./Heropage";
import ClubCard from "./Card";
import CarouselClub from "./CarouselDrink";
import ClubCard2 from "./Card2";
import ClubMap from "./Map";




const Clubpage = () => {
  return (
    <div>
      <ClubHeropage/>
      <ClubCard isDark/>
      <CarouselClub isDark/>
      <ClubCard2 isDark/>
      <ClubMap/>
     
    </div>
  );
};

export default Clubpage;
