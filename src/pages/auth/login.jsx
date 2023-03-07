import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { TextField, Button } from "@mui/material";
import { GetUser } from "../../axios/user.axios";
import { toast } from "react-toastify";

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

        toast.success("Successfully logged in", {theme: "dark"})
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
      await signInWithPopup(auth, googleAuthProvider).then(async (res) => {
        await GetUser(res.user.email).then((resp) => {
          // console.log(typeof resp.data);
          // console.log(resp.data);
          if(resp.data === null ){
            navigate('/signup')
          }
          else{
            dispatch({
              type: "CREATE_USER",
              payload: res.user.providerData[0],
            });
            navigate("/homepg");
            toast.success("Successfully logged in", { theme: "dark" });
          }
        });
        // if(res.user.email === ){

        // }
        // else{
        //   navigate('/signup')
        // }
        // console.log(res.user.providerData[0]);
        // if (user.email === email)
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen lg:flex lg:items-center lg:justify-center flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center p-8 bg-[#f6f6f6] lg:w-fit w-[85%] rounded-lg">
        <h1 className="text-4xl py-3 my-0.5  text-black font-semibold">
          Login
        </h1>
        <p className="text-black my-1 w-[10%]">{err.toUpperCase()}</p>

        <form
          action="submit"
          className="flex flex-col items-center justify-center"
        >
          {/* <label htmlFor="" className="m-1 text-white">
              Email
            </label> */}

          <Button
            variant="contained"
            onClick={handleGoogleSubmit}
            sx={{
              margin: "1rem",
              padding: "0.75rem",
              borderRadius: "999px",
              backgroundColor: "#000000",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#023020",
                color: "#ffffff",
                transitionDuration: "500",
              },
            }}
          >
            <img
              src="https://img.icons8.com/color/256/google-logo.png"
              alt=""
              width="25px"
            />
          </Button>
          <p>or login using e-mail</p>
          <TextField
            id="filled-basic"
            label="E-mail"
            variant="filled"
            className="rounded-md bg-slate-300"
            sx={{
              width: "20rem",
              margin: "1rem",
              marginLeft: "2rem",
              marginRight: "2rem",
            }}
          />
          <TextField
            id="filled-basic"
            label="Password"
            type="password"
            variant="filled"
            className="rounded-md  bg-slate-300"
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
              padding: "0.75rem",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
              backgroundColor: "#000000",
              borderRadius: "1.5rem",
              color: "#ffffff",
              "&:hover": { backgroundColor: "#023020", color: "#ffffff" },
            }}
          >
            Login
          </Button>
          <p className="m-1">
            Don't have an account? &nbsp;
            <Link to="/signup" className="text-blue-500 ">
              Signup
            </Link>
            &nbsp;| <Link to="/" className="text-blue-500"> Go back
            </Link>
          </p>
        </form>
        <hr className="bg-b font-semibold border border-black w-full m-1" />

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
