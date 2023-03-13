import React from "react";
import Card from "../components/card.component";
import Navbar from "../components/navbar.component";
import { Link } from "react-router-dom";

const SavedRecipes = () => {
  return (
    <div className=" bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen lg:w-full min-w-screen flex flex-col justify-center items-center ">
      <Link to='/account' className="text-white text-left"> ← Go back</Link>
      <h1 className="text-white text-2xl">Saved Recipes</h1>
      <div className="lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:place-items-center mx-auto gap-0 my-5">
        <Card />
      </div>
    </div>
  );
};

export default SavedRecipes;
