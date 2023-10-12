import React from "react";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import Banner from "./Banner";
import { Link } from "react-router-dom";

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
      <div className="flex  justify-around md:flex-col flex-col lg:flex-row mx-5 lg:mx-0 items-center">
        <img src={logo} alt="" />
        <div className="">
          {document?.map((text, index) => (
            <div key={index}>
              <div className="flex flex-col lg:flex-row mx-5 gap-8">
                <p>{text.home}</p>
                <Link to="/about"><p>{text.about}</p></Link>
                <p>{text.book}</p>
                <p>{text.job}</p>
                <Link to="/contact"><p>{text.contact}</p></Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center lg:flex-row flex-col gap-6">
          <div className="flex border w-32 h-8 p-1 justify-center  border-black gap-2">
            <div>
              <Link to="/login"><button>Log in</button></Link>
            </div>
            <div className="flex justify-center items-center">
              <Icon icon="icon-park:to-right" />
            </div>
          </div>
          <div className="flex items-center justify-center">
          <Icon className="text-4xl" icon="typcn:shopping-cart" />
          </div>
        </div>
      </div>
     <div className=" mt-4">
     <Banner></Banner>
     </div>
    </div>
  );
};

export default Navbar;
