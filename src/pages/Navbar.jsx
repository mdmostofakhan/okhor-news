import React from "react";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import Banner from "./Banner";

const Navbar = () => {
  const document = [
    {
      id: 0,
      home: "Home",
      about: "About",
      book: "Book Shop",
      job: "Job Circular",
      contact: "Contact",
    },
  ];

  return (
    <div className="mx-auto mt-4">
      <div className="flex  justify-around items-center">
        <img src={logo} alt="" />
        <div className="">
          {document?.map((text, index) => (
            <div key={index}>
              <div className="flex gap-8">
                <p>{text.home}</p>
                <p>{text.about}</p>
                <p>{text.book}</p>
                <p>{text.job}</p>
                <p>{text.contact}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6">
          <div className="flex border w-32 h-8 p-1 justify-center  border-black gap-2">
            <div>
              <button>Log in</button>
            </div>
            <div>
              <Icon icon="icon-park:to-right" />
            </div>
          </div>
          <Icon className="text-4xl text-center" icon="typcn:shopping-cart" />
        </div>
      </div>
     <div className=" mt-4">
     <Banner></Banner>
     </div>
    </div>
  );
};

export default Navbar;
