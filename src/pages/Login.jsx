import React from "react";
import logo from "../assets/logo.png";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
  
   <div className=" container mx-auto  my-20">
      <div className="  shadow-2xl w-1/2 bg-white ">
        <div className=" bg-transparent p-8 ">
          <div className=" bg-transparent">
            <p className="bg-transparent">Welcome to</p>
            <img className="bg-transparent" src={logo} alt="" />
          </div>
          <div className="mt-4 bg-transparent w-full">
            <div className="w-full bg-transparent">
              <input
                name="Email"
                type="Email"
                placeholder="Email"
                required
                className=" border bg-transparent w-full border-black p-3 "
              />
            </div>
          </div>
          <div className="mt-4  bg-transparent w-full">
            <div className=" w-full relative">
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className=" border w-full border-black p-3 "
              />
               <div className='absolute right-1 top-3'><Icon icon="mdi:eye-off" className='text-3xl' /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
     

  );
};

export default Login;
