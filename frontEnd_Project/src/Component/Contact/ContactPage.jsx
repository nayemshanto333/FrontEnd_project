import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function ContactPage() {
  const cardData = [
    {
      img: "Influencer.png",
      title: "Become an Influencer",
      desc: " Join a company thats passionate about design and technology",
      web: "chills@chillsbay.com",
    },
    {
      img: "NeedHelp.png",
      title: "Need Help?",
      desc: " Questions about using  Market? Our support team is here to help.",
      web: "chills@chillsbay.com",
    },
    {
      img: "RefundandOthers.png",
      title: "Refunds & Others",
      desc: " Join a company thats passionate about design and technology",
      web: "chills@chillsbay.com",
    },
  ];

  return (
    <section className="w-full lg:w-[70%] mx-auto my-20 px-5">
      <div className="flex flex-col md:flex-row  gap-5 lg:gap-10">
        {/* left side */}
        <div className="w-full lg:w-1/2 space-y-3 items-center lg:items-start flex flex-col">
          <h1 className="text-desc font-bold text-[35px] sm:text-[42px]">
            Contact Us
          </h1>
          <p className="text-[#656B89] leading-[27px] w-[80%] text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc,
            quisque ultricies netus elit massa aliquam quis cras. Enim leo, in
            massa sapien facilisi netu.
          </p>
          <div className="flex gap-5">
            <img className="h-5 w-6" src="phone.png" alt="" />
            <p className="text-desc">(840) 371 - 2514</p>
          </div>
          <div className="flex gap-5">
            <img className="h-5 w-6" src="gmail.png" alt="" />
            <p className="text-desc">chills@chillsbay.com</p>
          </div>
        </div>

        {/* Right side */}

        <div className="w-full lg:w-1/2 shadow-lg p-3 lg:p-6 space-y-5  mt-5 lg:mt-0">
          <div className="flex gap-6">
            <Input
              isClearable
              className="max-w-xs"
              label="First Name"
              labelPlacement="outside"
              placeholder="First Name"
              type="text"
              onClear={() => console.log("input cleared")}
            />
            <Input
              isClearable
              className="max-w-xs"
              label="Last Name"
              labelPlacement="outside"
              placeholder="Last Name"
              type="text"
              onClear={() => console.log("input cleared")}
            />
          </div>

          <div className="flex gap-6  ">
            <Input
              isClearable
              className="max-w-xs"
              label="Email Address"
              labelPlacement="outside"
              placeholder="e.g. johndoe@email.com"
              type="text"
              onClear={() => console.log("input cleared")}
            />
            <Input
              isClearable
              className="max-w-xs"
              label="Phone number"
              labelPlacement="outside"
              placeholder="Phone Number"
              type="text"
              onClear={() => console.log("input cleared")}
            />
          </div>

          <div className="flex ">
            <Select
              className="w-full"
              label="Subject"
              placeholder="Select Option"
              labelPlacement="outside"
            >
              <SelectItem>UI/UX Design</SelectItem>
              <SelectItem>Graphic Design</SelectItem>
              <SelectItem>Web Design</SelectItem>
            </Select>
          </div>

          <div className="flex">
            <Input
              label="Message"
              labelPlacement="outside"
              placeholder="Enter your comments"
              type="text"
            />
          </div>
          <Button color="primary" className="w-full">
            SEND MESSAGE
          </Button>
        </div>
      </div>
      {/* card section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 mb-32 justify-center items-center p-5 gap-5 md:gap-20 w-full mx-auto">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-4 w-[280px]"
          >
            <img src={item.img} alt="" />

            <h1 className="text-[22px] font-bold text-desc">{item.title}</h1>
            <p className="text-center py-3 text-[#656B89]">{item.desc}</p>
            <p className="text-[#0E8BFF]">{item.web}</p>
          </div>
        ))}
      </div>

      {/*  Faq section */}

      <div className="mt-20  w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-desc text-center leading-tight font-bold  text-2xl sm:text-[32px]">
            Frequently Asked Questions
          </h1>
          <p className="text-[#656B89] text-[14px] sm:text-base w-full sm:w-[60%] text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
            nunc, purus est sem volutpat at at. Ultricies erat leo risus, eget
            venenatis tristique morbi.
          </p>
        </div>
        <div className="mt-10">
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={
                <span className="text-desc text-base md:text-xl font-bold">
                  How does Chillsbay work?
                </span>
              }
            >
              <p className="text-[#656B89]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title={
                <span className="text-desc text-base md:text-xl font-bold">
                  Can I pay with Crypto on Chillsbay.com?
                </span>
              }
            >
              <p className="text-[#656B89]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title={
                <span className="text-desc text-base md:text-xl font-bold">
               How can I become a Chillsbay Host?
              </span>
              }
            >
              <p className="text-[#656B89]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
