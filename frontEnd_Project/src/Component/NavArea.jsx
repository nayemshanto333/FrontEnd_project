import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Button,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";
import ProfileDropdown from "./HomePage/ProfileDropdown";
import MyModal from "./HomePage/MyModal";
import { NavLink } from "react-router-dom";
import { themeColor } from "./lib/Utils";
import { ShopingIcon } from "./Cart/Icon";
import MyModal2 from "./HomePage/MyModal2";
const value = true;

const NavArea = ({ isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuitems = [
    "Events",
    "club",
    "Things to do ",
    "my profile",
    "pay with crypto",
    "cart",
    "contact us",
    "log out",
  ];
  return (
    <section>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
        className={themeColor(isDark)}
      >
        <NavbarContent className="md:hidden pr-3">
        <NavLink to={"/"}>
                <img src="logo.png" alt="logo" className="w-44" />
              </NavLink>
        </NavbarContent>
        <NavbarContent className="md:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          ></NavbarMenuToggle>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4  w-full justify-center">
          <NavbarBrand>
            <NavbarBrand>
              <NavLink to={"/"}>
                <img src="logo.png" alt="logo" className="w-44" />
              </NavLink>
            </NavbarBrand>
          </NavbarBrand>
          <NavbarItem>
            <NavLink
              to={"/drink"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#0E8BFF]"
                  : isDark
                  ? "text-white"
                  : "text-desc"
              }
            >
              Eat & Drink
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to={"/club"}
              className={({ isActive }) =>
                isActive ? "text-[#0E8BFF]" : "text-desc"
              }
            >
              Club{" "}
              <sup className="!bg-blue-600 text-[8px] px-2 rounded-full text-white  ">
                +HOT
              </sup>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <Dropdown className={isDark ? "bg-slate-800 text-white " : ""}>
              <DropdownTrigger>
                <Button
                  className={isDark ? "text-white" : "text-desc"}
                  variant="none"
                >
                  Things to do{" "}
                  <ChevronDownIcon className="text-[#0E8BFF] w-4 h-4" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem>Water Sports</DropdownItem>
                <DropdownItem>Day Parties</DropdownItem>
                <DropdownItem>Outdoors</DropdownItem>
                <DropdownItem>Rentals</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <NavLink to={"/cart"}>
              <ShopingIcon isDark={isDark} />
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            {value === true ? <MyModal isDark={isDark} /> : <ProfileDropdown />}
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/contact">
              <button className="px-8 py-2 font-bold rounded-lg bg-[#0e8bff] text-white">
                Contact
              </button>
            </NavLink>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}

        <div className="md:hidden">
          <NavbarMenu className="py-8 bg-black/75">
            <NavbarItem className="flex flex-col space-y-6 text-lg text-primary justify-start items-start ">
              <NavLink
                to={"/drink"}
                className={({ isActive }) =>
                  isActive ? "text-[#fff]" : "text-primary"
                }
              >
                Eat & Drink
              </NavLink>
              <NavLink>Events</NavLink>
              <NavLink
                to={"/club"}
                className={({ isActive }) =>
                  isActive ? "text-[#fff]" : "text-primary"
                }
              >
                Club
              </NavLink>
              <Dropdown className={isDark ? "bg-slate-800 text-white " : ""}>
                <DropdownTrigger>
                  <Button
                    className={
                      isDark
                        ? "text-primary text-lg justify-between flex w-full  "
                        : "text-primary text-lg justify-between flex w-full border-b border-[#C4C4C4] pb-5 "
                    }
                    variant="none"
                  >
                    Things to do{" "}
                    <ChevronDownIcon className="text-[#0E8BFF] w-6 h-6" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem>Water Sports</DropdownItem>
                  <DropdownItem>Day Parties</DropdownItem>
                  <DropdownItem>Outdoors</DropdownItem>
                  <DropdownItem>Rentals</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavLink><MyModal2/></NavLink>
              <NavLink>Pay With Crypto</NavLink>
              <NavLink
                to={"/cart"}
                className={({ isActive }) =>
                  isActive ? "text-[#fff]" : "text-primary"
                }
              >
                Cart
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-primary"
                }
              >
                Contact Us
              </NavLink>
              <NavLink>Log Out</NavLink>
              <Button color="primary" className="px-16">Get Started</Button>
            </NavbarItem>
            {/* {menuitems.map((item, index) => (
              <NavbarItem key={index}>
                <Link className="w-full text-black capitalize">{item}</Link>
              </NavbarItem>
            ))}
            <NavbarItem className="mt-5">
              <Button
                color="primary"
                className="px-5 py-2 font-bold rounded-lg"
              >
                Get Started
              </Button>
            </NavbarItem> */}
          </NavbarMenu>
        </div>
      </Navbar>
    </section>
  );
};

export default NavArea;
