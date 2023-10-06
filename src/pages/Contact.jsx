import React from "react";

const Contact = () => {
  return (
    <div className=" container mx-auto  mt-6">
      <div className="flex gap-20">
        <div>
          <h1 className="text-2xl font-semibold">Say Hello!</h1>
          <div className="mt-4 grid grid-cols-2 gap-16">
            <div className="w-full">
              <input
                name="name"
                type="name"
                placeholder="Name*"
                required
                className=" border  border-black p-3 "
              />
            </div>
            <div className="w-full">
              <input
                name=""
                type="text"
                placeholder="Second Name"
                required
                className="  border  border-black p-3 "
              />
            </div>
            <div className=" w-full">
              <input
                name="email"
                type="text"
                placeholder="Email*"
                required
                className=" border  border-black p-3 "
              />
            </div>
            <div className="w-full">
              <input
                name="website"
                type="text"
                placeholder="Website"
                required
                className="  border border-black p-3 "
              />
            </div>
          </div>
          <div
            className="mt-4 w-full
          "
          >
            <textarea
              className="border p-4 w-full"
              placeholder="message"
              name="most"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="w-32 border text-center mt-2 bg-red-600 p-3 rounded">
            <button className="text-white">Submit</button>
          </div>
        </div>

        {/* second */}
        <div>
          <h1 className="text-xl font-semibold">contact</h1>
          <div className="mt-4">
            <h2>Main Office:</h2>
            <p>
              Address: 1600 Pennsylvania Ave NW, Washington, DC 20500 <br />{" "}
              Phone: +990 (312) 123 45 67 <br /> Email: hello@domain.com
            </p>{" "}
            <br /> <br />
            <h1>Secondary Office:</h1>
            <p>
              Address: 1600 Pennsylvania Ave NW, Washington, DC 20500 <br />{" "}
              Phone: +990 (312) 123 45 67 <br /> Email: hello@domain.com
            </p>{" "}
            <br />
          </div>
        </div>
      </div>

      <div className="mt-8 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58421.73195891319!2d90.420095!3d23.770254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77d4db6410b%3A0xd75a6e7f69f545cb!2sTejgaon%20Industrial%20Area%2C%20Dhaka%201208!5e0!3m2!1sen!2sbd!4v1696533482466!5m2!1sen!2sbd"
          width="600"
          height="450"
         className="w-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
