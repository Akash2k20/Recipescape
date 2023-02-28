import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between w-full px-10 py-3 bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] relative h-[10vh] ">
      <Link
        to="/homepg"
        className="no-underline px-10 py-5 mx-5 text-white hover:text-red-700 transition duration-150 ease-in-out"
      >
        Home
      </Link>
      <Link
        to="/feed"
        className="no-underline px-10 py-5 mx-5 text-white hover:text-red-700 transition duration-150 ease-in-out"
      >
        Feed
      </Link>

      <Link
        to="/addrecipe"
        className='className="no-underline px-10 py-5 mx-5 text-white hover:text-red-700 transition duration-150 ease-in-out'
      >
        Add recipe
      </Link>
      <Link
        to="/account"
        className='className="no-underline px-10 py-5 mx-5 text-white hover:text-red-700 transition duration-150 ease-in-out'
      >
        Account
      </Link>

      {user && (
        <Link
          to="/"
          onClick={() => {
            dispatch({ type: "LOGOUT_USER" });
            navigate("/");
          }}
          className='className="no-underline px-10 py-5 mx-5 text-white hover:text-red-700 transition duration-150 ease-in-out'
        >
          Logout
        </Link>
      )}
    </div>
  );
};

export default Navbar;
