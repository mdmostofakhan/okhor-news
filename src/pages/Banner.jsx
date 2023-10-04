import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch("file.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
    console.log(news);
  }, []);

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
        { 
           news?.map((news, index) => (
           <div className={`${news.bgColor}  p-2 w-80`} key={index}>
              <p className="bg-transparent   flex justify-center items-center gap-4 text-white">            
            <Icon className="bg-transparent" icon="mdi:linkedin" />
              {news.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
