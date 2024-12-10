import React from 'react';

function Card() {
    const cardData =[
        {imgSrc:"img1.png", title:"Eat & Drinks"},
        {imgSrc:"img2.png", title:"Events"},
        {imgSrc:"img3.png", title:"Club"},
        {imgSrc:"img4.png", title:"Things to do"},
        
    ]
  return (
    <section >
        <div className='container mx-auto px-2.5'>
            <h1 className='text-2xl lg:text-5xl text-center text-[#26395C] font-bold my-10'>What are you in the mood for?
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container mx-auto my-5'>
                {cardData.map((item, index)=>(
                    <div key={index}>
                        <img className='w-full h-[500px] sm:h-[650px]' src={item.imgSrc} alt="" />
                        <div className='text-center my-2 font-semibold text-base lg:text-2xl text-[#26395C] '> 
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}

            </div>
        </div>
      
    </section>
  );
}

export default Card;
