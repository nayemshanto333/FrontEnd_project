import { Button, cn } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const ClubCard2 = ({ isDark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./clubData.json")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  return (
    <section className="my-14">
      <div className="container mx-auto px-2.5">
        <div className="flex justify-between items-center">
          <p
            variant="outline"
            className={cn("text-[#0E8BFF] text-2xl font-bold", isDark && "text-white")}
          >
            Bars and Night clubs near you
          </p>
          <Button
            variant="outline"
            className={cn("text-[#0E8BFF]", isDark && "text-white")}
          >
            See More
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5">
          {data.map((myData) => (
            <div key={myData.id} className="mt-3 space-y-3">
              <img src={myData.image} className="w-full h-auto" alt="" />
              <div className="space-y-3 mt-4">
                <h3 className="text-2xl font-bold text-white">{myData.title}</h3>
                <p className="text-sm text-white font-semibold">
                  {myData.description}
                </p>

                <div className="flex items-center gap-4 ">
                  <div className="flex gap-2 items-center">
                    <img src="CalendarStrok.png" className="w-4 h-5" alt="" />
                    <p className="text-white text-sm">{myData.date}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src="ClockStrok.png" className="w-4 h-4" alt="" />
                    <p className="text-white text-sm">{myData.time}</p>
                  </div>
                </div>

                <Button color="primary" className="px-10 ">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubCard2;
