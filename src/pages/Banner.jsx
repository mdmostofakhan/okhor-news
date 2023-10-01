import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import { data } from "autoprefixer";

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
        className="flex bg-blue-600 h-96 bg-cover bg-center justify-start items-center "
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

      <div>
        {users?.map((user, index) => (
          <div key={index}>
            <div className="">
                <div className="flex  ml-10 gap-4">
                    <div className=" bg-[#1F2659]">
                       <p>{user.category}</p>
                        <div>
                        <p>{user.title}</p>
                        <p>{user.text}</p>
                        <p>{user.exam}</p>
                        </div>
                    </div>
                    <div>
                       <p>{user.category}</p>
                        <p>{user.title}</p>
                        <p>{user.text}</p>
                        <p>{user.exam}</p>
                    </div>
                    <div>
                       <p>{user.category}</p>
                        <p>{user.title}</p>
                        <p>{user.text}</p>
                        <p>{user.exam}</p>
                    </div>
                    <div>
                       <p>{user.category}</p>
                        <p>{user.title}</p>
                        <p>{user.text}</p>
                        <p>{user.exam}</p>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Banner;
