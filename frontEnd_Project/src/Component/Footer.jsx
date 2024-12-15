import { Button } from "@nextui-org/react";
import React from "react";

const footData = {
  socialIcon: [
    "facebook.png",
    "twiter.png",
    "Instagram.png",
    "linkdin.png",
    "youtube.png",
    "tiktok.png",
  ],
  section: [
    {
      title: "MENU",
      menus: [
        { item: ["Home", "Eat", "Drink", "Events", "Club", "Recreation"] },
        { item: ["Blog", "Careers", "Contact", "FAQs"] },
      ],
    },
    {
      title: "Utility Pages",
      menus: [
        {
          item: [
            "Start Here",
            "Pay with Crypto",
            "Style Guide",
            "Password Protected",
            "404 Not Found",
            "Licenses",
            "Changelog ",
          ],
        },
      ],
    },
  ],
  partnerSection: {
    img: "footerIcon.png",
    heading: "Become a Partner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",
  },
  logo: "footerLogo.png",
  copyright: `Copyright ${new Date().getFullYear()} ©  `,
};

const MenuData = ({ title, menus }) => {
  return (
    <div>
      <p className="font-semibold text-[#26395C]  uppercase mb-5 border-b-1 py-3">{title}</p>
      <div className="flex gap-10 ">
        {menus.map((menu, index) => (
          <ul key={index}>
            {menu.item.map((item, idx) => (
              <li key={idx} className="mt-2 text-[#656B89]">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

function Footer() {
  const { socialIcon, section, partnerSection, logo, copyright } = footData;
  return (
    <footer className="px-5 my-5 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* left side */}
        <div className="col-span-1">
          <img src={logo} alt="" />
          <p>{copyright}</p>
          <div className="flex space-x-3 mt-3 ">
            {socialIcon.map((icon, index) => (
              <a href="" key={index}>
                <img className="w-4 h-4" src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ms-auto col-span-3 mt-5">
          {section.map((item, index) => (
            <MenuData keys={index} title={item.title} menus={item.menus} />
          ))}
          <div className="bg-[#F5FAFF] p-5 space-y-4 mt-4">
            <img src={partnerSection.img} alt="" />
            <h3 className="text-2xl font-bold text-[#26395C]">{partnerSection.heading}</h3>
            <p className="text-[#656B89] ">{partnerSection.description}</p>
            <Button color="primary" className="w-full" size="lg">Join Now</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
