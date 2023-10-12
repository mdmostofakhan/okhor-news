import React from "react";
import image from "../assets/bg-images.png";
import image2 from "../assets/imag-2.png";
import { Icon } from "@iconify/react";
import image3 from "../assets/image-3.jpg";
// import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div className="my-28 container mx-auto  ">
      {/* <div className="">
     <div
        className=" w-full  h-96 bg-cover flex-col   flex justify-center items-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
       <div className="flex bg-transparent  ">
        <h1 className="text-5xl bg-transparent  text-[rgb(241,241,245)] font-bold">
          A <span className="text-red-600 bg-transparent">B</span> O{" "}
          <span className="text-red-600 bg-transparent">U</span> T   <span className="text-red-600 bg-transparent">U</span> S
        </h1>
      </div>
      </div>
     </div> */}

      <div className="flex flex-col mx-5 lg:mx-5 lg:flex-row gap-8">
        <div className="">
          <h1 className="font-semibold leading-10 mt-2 text-red-700">
            বাংলাদেশের সার্কুলার বিষয়ে
          </h1>
          <p>
            <span className="text-5xl bg-transparent font-semibold mt-4 text-black">
              Best Company <br /> Especially In Business
            </span>{" "}
            <br /> <br />
            <p className="mt-6">
              আপনি কোনও নির্দিষ্ট বিষয়ে বা সেই বিষয়গুলির সাথে সম্প্রতি ঘটা
              ঘটনা বা বাংলাদেশের সার্কুলার বিষয়ে কোনও প্রশ্ন বা তথ্য চান, তাহলে
              দয়া করে সম্পর্ককরে জিজ্ঞাসআপনি কোনও নির্দিষ্ট বিষয়ে বা সেই
              বিষয়গুলির
            </p>
          </p>
          <div className="border w-64 p-4 mt-8 rounded border-green-600 flex justify-center items-center gap-2 ">
            <button className="font-semibold text-xl">DISCOVER MORE</button>
            <Icon className="text-xl" icon="mdi:arrow-right-bold" />
          </div>
        </div>
        <div className="">
          <img src={image2} alt="" />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
