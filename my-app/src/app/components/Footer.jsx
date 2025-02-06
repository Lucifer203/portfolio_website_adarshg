import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiLineVerticalBold } from "react-icons/pi";

const Footer = () => {
  const d = new Date();
  return (
    <>
      <div className="h-[150px] bg-[#31A3DC] flex flex-col items-center justify-center ">
        {/*Social Media Icons */}
        <div className="flex flex-row gap-8">
          <div className="bg-white rounded-full p-2 cursor-pointer">
            <a href={"https://x.com/"} target="_blank">
              <FaXTwitter size={25} />
            </a>
          </div>
          <div className="bg-white rounded-full p-2 cursor-pointer">
            <a href={"https://www.facebook.com/adarsh203"} target="_blank">
              <FaFacebookF size={25} />
            </a>
          </div>
          <div className="bg-white rounded-full p-2 cursor-pointer">
            <a
              href="
            https://www.linkedin.com/in/adarsh-ghimire-87b332248/"
              target="_blank"
            >
              <FaLinkedinIn size={25} />
            </a>
          </div>
          <div className="bg-white rounded-full p-2 cursor-pointer">
            <a
              href="
            https://www.instagram.com/adarshghimire/"
              target="_blank"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>

        {/* <div className="flex flex-row gap-4 mt-4 ">
          <span className="text-white">Privacy</span>
          <PiLineVerticalBold className="text-white" size={20} />
          <span className="text-white">Terms</span>
          <PiLineVerticalBold className="text-white" size={20} />

          <span className="text-white">FAQs</span>
          <PiLineVerticalBold className="text-white" size={20} />

          <span className="text-white">Help</span>
        </div> */}

        {/* Copyright Section */}
        <div className="text-white mt-6 ">
          &copy; <span className=""> Adarsh Ghimire {d.getFullYear()}</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
