import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";
import { Link } from "react-router-dom";

const Accountpage = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[55vh] ">
        <div className="flex flex-col justify-center items-center lg:m-10">
          <h1 className="text-4xl text-white text-center">Account Details</h1>
          <img src={user.photoURL} alt="" className="m-4" />
          <h1 className="text-white text-xl py-3 lg:text-center">
            Name: {user.displayName}
          </h1>
          <h1 className="text-white text-md py-3 text-center">
            Email: {user.email}
          </h1>
          {user.phoneNumber === null ? (
            <h1 className="text-white text-md py-3 text-center">
              Contact information: No info
            </h1>
          ) : (
            <h1 className="text-white text-md py-3 text-center">
              Contact: {user.phoneNumber}
            </h1>
          )}
          <Link to='/savedrecipes' className="text-white">
            View Saved Recipes
          </Link>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accountpage;
