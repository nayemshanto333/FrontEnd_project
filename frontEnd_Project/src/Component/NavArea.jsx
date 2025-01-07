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

const value = true;

function NavArea() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuitems = [
    "Eat & Drink",
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
      >
        <NavbarContent className="md:hidden pr-3">
          <NavbarBrand>
            <img src="logo.png" alt="logo" className="w-44" />
          </NavbarBrand>
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
                isActive ? "text-[#0E8BFF]" : "text-desc"
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
              Club <sup className="!bg-blue-600 text-[8px] px-2 rounded-full text-white  ">+HOT</sup>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button className="text-desc" variant="none">
                  Things to do{" "}
                  <ChevronDownIcon className="text-[#0E8BFF] w-4 h-4" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions" className="text-desc">
                <DropdownItem>Water Sports</DropdownItem>
                <DropdownItem>Day Parties</DropdownItem>
                <DropdownItem>Outdoors</DropdownItem>
                <DropdownItem>Rentals</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <NavLink to={"/cart"}>
              <img src="carticon.png" alt="" />
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            {value === true ? <MyModal /> : <ProfileDropdown />}
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/contact">
            <button  className="px-8 py-2 font-bold rounded-lg bg-[#0e8bff] text-white">
              Contact
            </button>
            </NavLink>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}

        <div className="md:hidden">
          <NavbarMenu className="py-8 bg-[#F5FAFF]">
            {menuitems.map((item, index) => (
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
            </NavbarItem>
          </NavbarMenu>
        </div>
      </Navbar>
    </section>
  );
}

export default NavArea;
