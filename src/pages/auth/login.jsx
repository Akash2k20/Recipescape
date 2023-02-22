import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { TextField, Button } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass).then((res) => {
        console.log(res.data);
        dispatch({
          type: "CREATE_USER",
          payload: res.data,
        });
        navigate("/homepg");
      });
    } catch (error) {
      console.log(error);
      setErr(error.code);
    }
  };

  const googleAuthProvider = new GoogleAuthProvider();
  const handleGoogleSubmit = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider).then((res) => {
        console.log(res.user.providerData[0]);
        dispatch({
          type: "CREATE_USER",
          payload: res.user.providerData[0],
        });
        navigate("/homepg");
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center pb-16">
        <h1 className="text-4xl py-3 my-3 text-white">Login</h1>
        <p className="text-white">{err.toUpperCase()}</p>
        <form
          action="submit"
          className="flex flex-col items-center justify-center"
        >
          {/* <label htmlFor="" className="m-1 text-white">
              Email
            </label> */}

          <TextField
            id="filled-basic"
            label="E-mail"
            variant="filled"
            className="rounded-md bg-red-300"
            sx={{
              width: "20rem",
              margin: "1rem",
            }}
          />
          <TextField
            id="filled-basic"
            label="Password"
            type="password"
            variant="filled"
            className="rounded-md  bg-red-300"
            sx={{
              width: "20rem",
              margin: "1rem",
            }}
          />

          {/* <input
              type="email"
              width={"50px"}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="border-black border-1 m-2 p-1 bg-red-300 rounded-sm hover:bg-red-400 focus:bg-red-400 transition ease-in-out duration-300 w-[100%]"
            />
            <label htmlFor="" className="m-1 text-white">
              Password
            </label>
            <input
              type="password"
              required
              onChange={(e) => setPass(e.target.value)}
              className="border-red-500 m-2 p-1 bg-red-300 rounded-sm hover:bg-red-400 focus:bg-red-400 transition ease-in-out duration-300 w-[100%]"
            /> */}
          {/* <button
              className="rounded-md m-5 text-black border-white bg-white border-1 p-2 px-5 "
              onClick={handleSubmit}
            >
              Login
            </button> */}
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              margin: "1rem",
              padding: "0.5rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              "&:hover": { backgroundColor: "#ffb3b3" },
            }}
          >
            Login
          </Button>
        </form>
        <p className="text-white p-2">or by using google</p>
        <Button
          variant="contained"
          onClick={handleGoogleSubmit}
          className="bg-red-500"
          sx={{
            margin: "1rem",
            padding: "0.5rem",
            paddingLeft: "0.5rem",
            paddingRight: "1rem",
            backgroundColor: "#ffffff",
            color: "#000000",
            "&:hover": { backgroundColor: "#ffb3b3" },
          }}
        >
          <img
            src="https://img.icons8.com/color/256/google-logo.png"
            alt=""
            width="25px"
            className="mx-2"
          />
          Login using Google
        </Button>
        {/* <button
            className="rounded-md m-5 text-black border-white bg-white border-1 p-2 flex justify-center items-center "
            onClick={handleGoogleSubmit}
          >
            <img
              src="https://img.icons8.com/color/256/google-logo.png"
              alt=""
              width="25px"
            />
            <p className="pl-2">Login using Google</p>
          </button> */}
      </div>
    </div>
  );
};

export default Login;
