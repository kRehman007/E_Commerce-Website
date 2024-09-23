import React from "react";
import { NavLink } from "react-router-dom";
import { PiTelegramLogo } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black w-full mt-16   pl-11 pt-16  pb-16 pr-11">
      <div
        className=" flex flex-col lg:justify-center space-y-16  md:grid 
      md:grid-cols-2 md:gap-7 lg:flex lg:flex-row lg:space-x-7 lg:space-y-0
       "
      >
        <div className="mr-8 md:mt-16 lg:mt-0">
          <h1 className="text-white font-bold text-2xl">Exclusive</h1>
          <br />
          <h3 className="text-white text-xl">Subscribe</h3>
          <br />
          <p className="text-white text-sm">Get 10% of your first order</p>
          <div
            className="flex  justify-center items-center border border-white
    py-2 mt-2 md:mt-3 w-[min-content] px-2"
          >
            <input
              type="email"
              autoSave="false"
              autoComplete="false"
              placeholder="Enter your email"
              className="bg-transparent outline-none
    placeholder-gray-400 text-white"
            />
            <p className="text-2xl text-white">
              <PiTelegramLogo />
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 text-white">
          <h1 className="font-bold text-2xl">Support</h1>
          <p>Kotmomin, Sargodha, Punjab</p>
          <p className="text-sm">kashisial2327@gmail.com</p>
          <p>+923314315567</p>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-3xl">Account</h1>
          <div className="flex flex-col space-y-3 mt-3">
            <NavLink to="">My Account</NavLink>
            <NavLink to="">Login/Register</NavLink>
            <NavLink to="">Cart</NavLink>
            <NavLink to="">Wishlist</NavLink>
            <NavLink to="">Shop</NavLink>
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-3xl">Quick Link</h1>
          <div className="flex flex-col space-y-3 mt-3">
            <NavLink to="">Privacy Policy</NavLink>
            <NavLink to="">Terms of Use</NavLink>
            <NavLink to="">FAQ</NavLink>
            <NavLink to="">Contact</NavLink>
          </div>
        </div>
        <div className="flex space-x-5 lg:flex-col space-y-4 mt-3 text-white text-3xl">
          <p className="mt-3 lg:mt-0 lg:ml-5">
            <FaFacebookSquare />
          </p>
          <p>
            <FaTwitterSquare />
          </p>
          <p>
            <FaInstagramSquare />
          </p>
          <p>
            <FaLinkedin />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
