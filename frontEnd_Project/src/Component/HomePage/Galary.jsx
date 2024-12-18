import React from "react";

function Galary() {
  const  imageGalary =[
        {img:"image8.png"},
        {img:"image9.png"},
        {img:"image10.png"},
        {img:"image11.png"},
        {img:"image12.png"},
        {img:"image13.png"},
    ]

  return (
    <section className="my-5 md:my-14 border p-10">
      <div className="container mx-auto">
        <h3 className="mb-4 text-lg lg:text-2xl font-bold text-[#26395C] text-center lg:text-start">
          See How people are chilling on{" "}
          <span className="text-[#0E8BFF]">Chillsbay</span>{" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
            {
                imageGalary.map((source)=>(
                    <div key={source}><img className="w-full h-full object-cover"  src={source.img} alt="" /></div>
                ))
            }

        </div>
      </div>
    </section>
  );
}

export default Galary;
