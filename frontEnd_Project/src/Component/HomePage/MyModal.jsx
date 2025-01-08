import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  cn,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { UserIcon } from "@heroicons/react/24/outline";
import Warper from "../ShareComponent/Warper";

const MyModal = ({isDark})=> {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="">
      <div className="flex flex-wrap" >
        <Button variant="flat" onPress={handleOpen} className={cn("bg-white text-desc" , isDark && " bg-black text-white")}>
          <UserIcon className= {cn("text-desc w-4 h-4 " , isDark && "text-white")}  />
          Account
        </Button>
      </div>
      <Modal
       isDismissable={false}
        isOpen={isOpen}
        backdrop="blur"
        onClose={handleClose}
        size="5xl"
        placement="top"
      >
        <ModalContent>
          <ModalBody className="px-0 py-0">
            <div className="flex flex-col md:flex-row w-full h-full md:max-h-[90vh] overflow-y-auto md:overflow-visible">
              {/* left side */}
              <div className="bg-[url('LoginImg.png')] bg-no-repeat bg-cover bg-center flex flex-col text-white md:w-1/3 p-5">
                <h2 className="text-4xl font-bold mt-16">Sign Up</h2>
                <p className="text-sm mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tellus ullamcorper hendrerit quis purus pellentesque. Ac
                  sagittis, convallis non tincidunt interdum eu nullam aliquam
                  maecenas. Enim sed tortor morbi ut suspendisse.{" "}
                </p>
              </div>
              {/* right side */}
              <div className="w-full md:w-2/3 p-4 sm:p-8 bg-white">
                <img src="footerLogo.png" className="w-fit mx-auto" alt="" />
                <h1 className="font-bold text-2xl text-center sm:text-start md:text-4xl text-[#26395C] mt-5 mb-2">
                  Sign up and get exploring!
                </h1>
                <p className="text-[#26395C] mb-4 text-center sm:text-start">
                  Already have an account?{" "}
                  <a href="#" className="text-[#0E8BFF]">
                    Sign In
                  </a>
                </p>

                <div className="space-y-2">
                  <button className="flex justify-center items-center w-full border px-4 py-2 rounded-lg hover:bg-gray-100 text-[#26395C] font-bold text-sm">
                    <img src="google.png" className="mr-2 w-5 h-5" alt="" />
                    Sign Up with Google
                  </button>
                  <button className="flex justify-center items-center w-full border px-4 py-2 rounded-lg hover:bg-gray-100 text-[#26395C] font-bold text-sm">
                    <img src="facebook1.png" className="mr-2 w-5 h-5" alt="" />
                    Sign Up with Facebook
                  </button>
                  <button className="flex justify-center items-center w-full border px-4 py-2 rounded-lg hover:bg-gray-100 text-[#26395C] font-bold text-sm">
                    <img src="apple.png" className="mr-2 w-5 h-5" alt="" />
                    Sign Up with Apple
                  </button>
                </div>
                {/* Devider */}
                <div className="flex items-center my-5 text-[#26395C] text-center text-sm">
                  <div className="flex-grow border-t border-[#E4E7EC]"></div>
                  <span className="px-3">or continue with</span>
                  <div className="flex-grow border-t border-[#E4E7EC]"></div>
                </div>
                {/* Sign up form */}

                <form action="" className="my-10">
                  <div className="mb-4">
                    <Input label="Email:" type="email" placeholder="e.g. johndoe@email.com" labelPlacement="outside"/>
                  </div>
                  <div className="mb-4 mt-10">
                    <Input label="Password:" type="password" placeholder="*************" labelPlacement="outside"/>
                  </div>
                  <Button color="primary" size="lg" className="w-full">Sign Up</Button>
                  <p className="text-center text-xs mt-3">By creating an account, you agree to our <a href="#" className="text-[#0E8BFF]">Terms & Conditions</a> and <a href="#" className="text-[#0E8BFF]">Privacy Policy.</a></p>
                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}

export default MyModal;
