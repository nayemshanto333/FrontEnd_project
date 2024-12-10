import React from 'react';

function ThingsToDo() {
    const cardData =[
        {imgSrc:"img5.png", title:"Sight Seeing"},
        {imgSrc:"img6.png", title:"Volley Ball Game"},
        {imgSrc:"img7.png", title:"Wizkid Show"},
        {imgSrc:"img7.png", title:"Wizkid Show"},
        {imgSrc:"img5.png", title:"Sight Seeing"},
        {imgSrc:"img6.png", title:"Volley Ball Game"},
        {imgSrc:"img7.png", title:"Wizkid Show"},
        {imgSrc:"img7.png", title:"Wizkid Show"},
        
        
    ]
  return (
    <section className='bg-[#F5FAFF] py-3 sm:py-5'>
        <div className='container mx-auto px-2.5'>
            <h1 className='text-2xl lg:text-3xl text-center lg:text-start text-[#26395C] font-bold my-10'>Top things to do in Lagos
            </h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container mx-auto my-5 gap-4'>
                {cardData.map((item, index)=>(
                    <div key={index}>
                        <img className='w-full h-[300px] rounded-3xl' src={item.imgSrc} alt="" />
                        <div className='text-center my-3 font-semibold text-base lg:text-2xl text-[#26395C] '> 
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}

            </div>
        </div>
      
    </section>
  );
}

export default ThingsToDo;