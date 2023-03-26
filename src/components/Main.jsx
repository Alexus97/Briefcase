import React from "react";
//images
import Images from "../assets/avatar.jpg";
//import animation
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={Images}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Jonathan Romero</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm
            <TypeAnimation
              sequence={[
                "Developer full stack", // Types 'One'
                1000, // Waits 1s
                "Passionate about technology, innovation and creation,", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "If you need a solution for your company here you will find it.", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            {/*icons*/}
            <FaTwitter className='cursor-pointer' size={20}/>
            <FaFacebookF className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20}/>
            <FaLinkedinIn className='cursor-pointer' size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
