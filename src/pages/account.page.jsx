import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar.component";
import { Button, IconButton } from "@mui/material";
import Footer from "../components/footer.component";

const Accountpage = () => {
  // const {user} = useSelector((state)=>({...state}))
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen">
      <Navbar />
      <div className=" pt-[1vh] ">
        <div className="flex flex-col justify-center items-center m-20">
          <h1 className="text-4xl text-white">Account Details</h1>
          <img src={user.photoURL} alt="" className="m-4"/>
          <h1 className="text-white text-xl py-3">
            Name: {user.displayName}
            <IconButton
              aria-label="edit"
              className="text-white bg-white "
              size="large"
              color="white"
            ></IconButton>
          </h1>
          <h1 className="text-white text-md py-3">Email: {user.email}</h1>
          {user.phoneNumber === null ? (
            <h1 className="text-white text-md py-3">
              Contact information: No info
            </h1>
          ) : (
            <h1 className="text-white text-md py-3">
              Contact: {user.phoneNumber}
            </h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accountpage;
