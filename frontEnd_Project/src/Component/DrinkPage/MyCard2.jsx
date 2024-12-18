import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

function MyCard2() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("./data.json")
    .then((response)=>{
      return response.json()
    })
    .then((jsonData)=>{
      setData(jsonData)
    })
  })
  return (
    <section className="my-14">
      <div className="container mx-auto px-2.5">
        <div className="flex justify-between items-center">
          <p
            className="text-desc font-bold text-xl md:text-2xl
          </Accordion>"
          >
            Resturants nearby
          </p>
          <Button variant="outline" className="text-[#0E8BFF]">
            See More
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5">
          {data.map((myData) => (
            <div key={myData.id} className="mt-3">
              <img src={myData.image} className="w-full h-auto" alt="" />
              <div className="space-y-2 mt-4">
                <h3 className="text-2xl font-bold text-desc">{myData.title}</h3>
                <p className="text-sm text-desc font-semibold">
                  {myData.description}
                </p>
                <p className="text-sm text-desc justify-center gap-2">
                  {myData.tag} . {myData.tag2} . {myData.tag3} .{" "}
                  {myData.tag4}
                </p>
                <Button color="primary" className="w-28">
                  Reserve Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyCard2;
