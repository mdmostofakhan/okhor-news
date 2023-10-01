import React from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
      <div className="bg-[#1F2659] grid justify-center w-full ">
          <img className="bg-transparent" src={logo} alt="" />
          <div className="bg-transparent flex">
          <Icon icon="ri:facebook-fill" />
            <p>in</p>
          <Icon icon="ant-design:youtube-outlined" />
          </div>
      </div>
  );
};

export default Footer;
