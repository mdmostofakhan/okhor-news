import React from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1F2659] grid justify-center bottom-0   items-center mt-6 w-full ">
      <img className="bg-transparent mt-4 text-white " src={logo} alt="" />
      <div className="bg-transparent gap-4 mt-4  flex">
        <div className="bg-transparent ">
          <Icon
            className="w-6 h-6 rounded-full p-1 text-black"
            icon="ri:facebook-fill"
          />
        </div>
        <p className="bg-transparent text-white">in</p>
  
        <div className="bg-transparent">
          <Icon
            className="w-8 h-6  rounded text-black  "
            icon="mdi:youtube"
          />
        </div>
      </div>
      <div className="bg-transparent mt-4">
        <p className="text-white text-left bg-transparent">Lorem Ipsum is simply dummy text of the printing and <br /> typesetting
        industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever
        since the 1500s,</p>
      </div>
      
      <div  className="bg-transparent flex gap-4 mt-4 ">
      <Icon className="bg-transparent text-2xl  text-white" icon="mdi:email" />
      <p className="bg-transparent text-white">e-education.info@gmail.com</p>
      </div> <br />
     <div className="bg-transparent flex  gap-4  ">
     <Icon className="bg-transparent text-2xl  mb-10 text-white"  icon="fluent:call-12-filled" />
     <p className="bg-transparent text-white"> 017-0000-0000</p>
     </div>
      
    </footer>
  );
};

export default Footer;
