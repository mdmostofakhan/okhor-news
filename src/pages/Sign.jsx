import React from 'react';
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Sign = () => {
    return (
        <div className=" container mx-auto  my-20">
        <div className="  shadow-2xl w-1/2 flex-col  mx-5 lg:mx-0 md:flex-col    bg-white ">
          <div className=" bg-transparent p-20 ">
            <div className=" bg-transparent">
              <p className="bg-transparent">Welcome to</p>
              <img className="bg-transparent my-2 w-48" src={logo} alt="" />
            </div>
            <div className="mt-4 bg-transparent w-full">
              <div className="w-full bg-transparent">
                <input
                  name="name"
                  type="name"
                  placeholder="Name*"
                  required
                  className=" border bg-transparent w-full border-black p-4 "
                />
              </div>
            </div>
            <div className="mt-4 bg-transparent w-full">
              <div className="w-full bg-transparent">
                <input
                  name="phone"
                  type="phone"
                  placeholder="Mobile Number*"
                  required
                  className=" border bg-transparent w-full border-black p-4 "
                />
              </div>
            </div>
            <div className="mt-4 bg-transparent w-full">
              <div className="w-full bg-transparent">
                <input
                  name="Email"
                  type="Email"
                  placeholder="Email*"
                  required
                  className=" border bg-transparent w-full border-black p-4 "
                />
              </div>
            </div>
            <div className="mt-4  bg-transparent w-full">
              <div className=" bg-transparent  w-full relative">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className=" border w-full  border-black p-4 "
                />
                <div className="absolute right-1 top-3">
                  <Icon icon="mdi:eye-off" className="text-3xl" />
                </div>
              </div>
            </div>
            <div className="mt-4  bg-transparent w-full">
              <div className=" bg-transparent  w-full relative">
                <input
                  name="password"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className=" border w-full  border-black p-4 "
                />
                <div className="absolute right-1 top-3">
                  <Icon icon="mdi:eye-off" className="text-3xl" />
                </div>
              </div>
            </div>
            <div className="bg-[#1F2659] flex justify-center hover:bg-[#5b68c6] items-center w-full p-4 mt-8">
              <button className="text-white ">Log In</button>
            </div>
            <div className="flex bg-transparent justify-end ">
              <Link
                href="#"
                className="label-text-alt bg-transparent link link-hover text-[16px]  mt-6 text-[#1877F2]"
              >
                Forget Password?
              </Link>
            </div>
  
            <div className="text-center bg-transparent mt-4 lg:px-20">
              <p className="text-[17px] bg-transparent">
                New Member?{" "}
                <Link to="/login" className="bg-transparent text-[#1877F2]">
                Log in Now
                </Link>
              </p>
              <div className="divider w-10/12 bg-transparent mx-auto text-black p-8">Or</div>
            </div>
  
          <div className="flex bg-transparent lg:w-full gap-4 w-full">
          <div className="border w-1/2 flex gap-2 items-center  hover:bg-gray-200 rounded-none  justify-center border-black p-3 mt-4">
              <Icon
                icon="entypo-social:google"
                className="text-white bg-red-600 rounded-full p-2 text-3xl"
              />
              <span className="normal-case bg-transparent">Log in with Google</span>
            </div>
            <div className="border w-1/2 flex gap-2 items-center hover:bg-gray-200 rounded-none lg-w-auto bg-transparent justify-center border-black p-3 mt-4">
            <Icon icon="ic:baseline-facebook" className='text-4xl bg-transparent text-[#1877F2]' />
              <span className="normal-case bg-transparent">Log in with Facebook</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Sign;