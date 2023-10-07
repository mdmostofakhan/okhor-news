import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch("file.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
    console.log(news);
  }, []);

  const banners = [
    {
      image: `${banner}`,
      title: "সত্য প্রতিবেদন আমরা আপনার জন্য তৈরি করি সংবাদে আপনার সাথে সবসময়",
      button: "আরও দেখুন",
    },
    {
      image: `${banner}`,
      title: "সত্য প্রতিবেদন আমরা আপনার জন্য তৈরি করি সংবাদে ",
      button: "আরও দেখুন",
    },
    {
      image: `${banner}`,
      title: "সত্য প্রতিবেদন আমরা আপনার জন্য",
      button: "আরও দেখুন",
    },
  ];

  return (
    <div>
      <div
        className="flex   h-96 bg-cover bg-center justify-start items-center "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <p className="bg-transparent font-bold ml-32 text-2xl  ">
          সত্য প্রতিবেদন, <br />
          আমরা আপনার জন্য তৈরি করি, <br />
          <span className="text-blue-800  bg-transparent">
            সংবাদে আপনার সাথে সবসময়
          </span>{" "}
          <br />
          <div className="mt-5 text-sm border border-black w-36 text-center p-2 bg-transparent ">
            <button>আরও দেখুন</button>
          </div>
        </p>
      </div>

      <div className="flex  bg-transparent top-[426px] mx-56 absolute  gap-6">
        {news?.map((news, index) => (
          <div className={`${news.bgColor}  p-2 w-80`} key={index}>
            <p className="bg-transparent   flex justify-center items-center gap-4 text-white">
              <Icon className="bg-transparent" icon="mdi:linkedin" />
              {news.category}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 ">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper h-96"
        >
          {banners?.map((banner, index) => (
            <div key={index}>
              <SwiperSlide>
                <div
                className="h-96 bg-cover  relative"
                style={{
                  backgroundImage: `url(${banner.image})`
                }}
                >
                 
                 <p className="bg-transparent font-bold w-[400px]  leading-10 ml-32 text-2xl  absolute top-28  left-20" >{banner.title}</p> 
                  <div className="bg-transparent top-60 absolute left-52 ">
                  <button className="border font-semibold border-black text-center w-36 p-2">{banner.button}</button>
                  </div>
                
                  
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
