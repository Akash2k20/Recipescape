import React from "react";
import { Link } from "react-router-dom";


const Landingpage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cover bg-[url('https://burst.shopifycdn.com/photos/ripe-red-strawberries-in-a-white-bowl.jpg?width=1200&format=pjpg&exif=1&iptc=1')]">
      <div className="flex justify-between w-full px-10 py-5">
        <Link
          to="/login"
          className="no-underline px-10 py-5 mx-5 text-white hover:text-red-700 transition duration-150 ease-in-out"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="no-underline px-10 py-5 mx-5 text-white hover:text-red-700 transition duration-150 ease-in-out"
        >
          Sign-up
        </Link>
        <Link
          to="/about"
          className='className="no-underline px-10 py-5 mx-5 text-white hover:text-red-700 transition duration-150 ease-in-out'
        >
          About
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center my-10 p-10">
        <h1 className="text-9xl text-white ">Recipescape</h1>
        <p className="text-white text-xl p-10">
          View, share and save recipes, all in one place.
        </p>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Landingpage;
