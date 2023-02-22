import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrolltoTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <footer>
      <div className="bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] opacity-90 w-full flex justify-between items-center relative bottom-0 mt-24">
        <ul className="pl-4">
          <li>
            <h1 className="text-white text-3xl py-3">Recipescape</h1>
          </li>
          <li>
            <p className="text-white py-3">A website for recipe storage</p>
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center">
          <ul>
            <li className="py-2">
              <Link
                to="/homepg"
                onClick={scrolltoTop}
                className='className="no-underline   text-white hover:text-red-700 transition duration-150 ease-in-out'
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/login"
                className='className="no-underline  text-white hover:text-red-700 transition duration-150 ease-in-out'
              >
                Login
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/signup"
                className='className="no-underline   text-white hover:text-red-700 transition duration-150 ease-in-out'
              >
                Signup
              </Link>
            </li>
          </ul>
          <p className="text-white py-1">
            Copyright 2023 @Recipiescape all rights reserved
          </p>
        </div>

        <ul className="pr-4">
          <li>
            <h1 className="text-white py-2">Contact Info</h1>
          </li>
          <li>
            <p className="text-white py-2">Email: recipescape@gmail.com</p>
          </li>
          <li>
            <p className="text-white py-2">Phone: 9876543210</p>
          </li>
          <li>
            <p className="text-white "></p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
