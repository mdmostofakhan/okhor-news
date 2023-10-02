import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import { data } from "autoprefixer";
import { Icon } from "@iconify/react";

const Banner = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("file.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    console.log(users);
  }, []);





  return (
    <div>

      <div
        className="flex  bg-blue-600 h-96 bg-cover bg-center justify-start items-center "
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
        {users?.map((user, index) => (
          <div className={`${user.bgColor}  p-2 w-80`} key={index}>
              <p className="bg-transparent   flex justify-center items-center gap-4 text-white"> <Icon className="bg-transparent" icon="mdi:linkedin" /> {user.category}  </p>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Banner;
