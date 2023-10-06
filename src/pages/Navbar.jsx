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
      <div className="flex  justify-around items-center">
        <img src={logo} alt="" />
        <div className="">
          {document?.map((text, index) => (
            <div key={index}>
              <div className="flex gap-8">
                <p>{text.home}</p>
                <Link to="/about"><p>{text.about}</p></Link>
                <p>{text.book}</p>
                <p>{text.job}</p>
                <Link to="/contact"><p>{text.contact}</p></Link>
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
