import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <footer className="w-full">
      <div className="bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] opacity-90 flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-center relative bottom-0 lg:mt-24 mt-12">
        <ul className="pl-2">
          <li>
            <h1 className="text-white text-3xl py-3 text-center lg:text-start">
              Recipescape
            </h1>
          </li>
          <li>
            <p className="text-white py-3 text-center">
              A website for recipe storage
            </p>
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center">
          <ul>
            <li className="py-2 text-center">
              <Link
                to="/homepg"
                onClick={scrolltoTop}
                className='className="no-underline text-white hover:text-red-700 transition duration-150 ease-in-out'
              >
                Home
              </Link>
            </li>
            <li className="py-2 text-center">
              <Link
                to="/addrecipe"
                className='className="no-underline  text-white hover:text-red-700 transition duration-150 ease-in-out'
              >
                Add recipe
              </Link>
            </li>
            {user && (
              <Link
                to="/"
                onClick={() => {
                  dispatch({ type: "LOGOUT_USER" });
                  navigate("/");
                }}
                className='className="no-underline   text-white hover:text-red-700 transition duration-150 ease-in-out'
              >
                <li className="py-2 text-center">Logout</li>
              </Link>
            )}
          </ul>
          <p className="text-white py-3 text-center">
            Copyright 2023 @ Recipescape all rights reserved
          </p>
        </div>

        <ul className="lg:pr-4 flex flex-col items-center justify-center">
          <li>
            <h1 className="text-white font-semibold py-2">Contact Info</h1>
          </li>
          <li>
            <p className="text-white py-2">recipescape@gmail.com</p>
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
