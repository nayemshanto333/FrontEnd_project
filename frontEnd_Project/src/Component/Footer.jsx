import { Button, cn } from "@nextui-org/react";
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

const MenuData = ({ title, menus, isDark }) => {
  return (
    <div>
      <p className={cn("font-semibold text-[#26395C]  uppercase mb-5 border-b-1 py-3" , isDark && "text-white")}>{title}</p>
      <div className="flex gap-10 ">
        {menus.map((menu, index) => (
          <ul key={index} >
            {menu.item.map((item, idx) => (
              <li key={idx} className={ cn("mt-2 text-[#656B89]", isDark && "text-[#E4E7EC]")}>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ isDark})=> {
  const { socialIcon, section, partnerSection, logo, copyright } = footData;
  return (
    <footer>
      <div className="container px-5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 ">
        {/* left side */}
        <div className="col-span-1 mt-8">
          <img src={logo} alt="" />
          <p className={cn("text-desc", isDark && "text-[#969DAA]")}>{copyright}</p>
          <div className="flex space-x-3 mt-3 ">
            {socialIcon.map((icon, index) => (
              <a href="" key={index}  >
                <img className="w-4 h-4 "  src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="mb-5 md:mb-10 lg:mb-20 flex flex-col-reverse md:flex-row gap-0 md:gap-10 lg:gap-20 ms-auto col-span-3 mt-5 justify-between mx-auto">
          {section.map((item, index) => (
            <MenuData  isDark={isDark} keys={index} title={item.title} menus={item.menus}  />
          ))}
          <div className={cn("bg-[#F5FAFF] md:w-[350px] p-5 space-y-4 mt-4 rounded-xl" , isDark && "bg-[#D0D8E71A]/10")}>
            <img src={partnerSection.img} alt="" />
            <h3 className={cn("text-2xl font-bold text-[#26395C]", isDark && "text-white")}>{partnerSection.heading}</h3>
            <p className={cn("text-[#656B89] " , isDark && "text-[#969DAA]")}>{partnerSection.description}</p>
            <Button color="primary" className="w-full" size="lg">Join Now</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
