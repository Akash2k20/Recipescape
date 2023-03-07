import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { CreateUser, GetUser } from "../../axios/user.axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [prof, setProf] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass).then(
        async (res) => {
          await CreateUser(email, username, prof).then(() => {
            setEmail("");
            setUsername("");
            setProf("");
          });
           dispatch({
             type: "CREATE_USER",
             payload: res.user.providerData[0],
           });
          navigate("/homepg");
        }
      );
    } catch (err) {
      setErr(err);
    }
  };

  const googleAuthProvider = new GoogleAuthProvider();
  const handleGoogleSubmit = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider).then(async (res) => {
        await GetUser(res.user.email).then(async (resp) => {
          if (resp.data) {
            toast.error("User exists. Please login using this account", {theme: "dark"});
          } else {
            await CreateUser(res.user.email, res.user.displayName, prof);
            console.log(res);
            dispatch({
              type: "CREATE_USER",
              payload: res.user.providerData[0],
            });
            navigate("/homepg");
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen lg:flex lg:items-center lg:justify-center flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center p-8  bg-[#f6f6f6] lg:w-[30%] w-[85%] rounded-lg">
        <h1 className="text-4xl py-3 my-1 text-black font-semibold">Sign-up</h1>
        <p className="text-black my-1">{err.toUpperCase()}</p>
        <form action="" className="flex flex-col items-center justify-center">
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
          <p>or signup the usual way</p>
          <TextField
            id="filled-basic"
            label="E-mail"
            variant="filled"
            className="rounded-md bg-slate-300"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            sx={{
              width: "20rem",
              color: "success.main",
              margin: "1rem",
            }}
          />
          <TextField
            id="filled-basic"
            label="Password"
            type="password"
            variant="filled"
            className="rounded-md  bg-slate-300"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            sx={{
              width: "20rem",
              color: "success.main",
              margin: "1rem",
            }}
          />
          <TextField
            id="filled-basic"
            label="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            variant="filled"
            className="rounded-md  bg-slate-300"
            sx={{
              width: "20rem",
              margin: "1rem",
            }}
          />

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
            Sign-up
          </Button>

          {/* <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Cooking Proficiency"
              value="Beginner"
              onChange=""
              className="rounded-md  bg-red-300"
              sx={{
                width: "18rem",

                margin: "1rem",
              }}
            > */}
          {/* <TextField
              id="filled-select"
              select
              label="Select proficiency"
              value={prof}
              defaultValue="Beginner"
              variant="filled"
              onChange={(e) => {
                setProf(e.target.value);
              }}
              // onChange={handleChange}
              className="rounded-md bg-red-300"
              sx={{
                width: "20rem",
                margin: "1rem",
              }}
            >
              <MenuItem key="Beginner" value="Beginner">
                Beginner
              </MenuItem>
              <MenuItem key="Amateur" value="Amateur">
                Amateur
              </MenuItem>
              <MenuItem key="Professional" value=" Professional">
                Professional
              </MenuItem>
            </TextField> */}

          {/* </Select> */}

          {/* <label htmlFor="" className="m-1 text-white">
            Email
          </label>
          <input
            type="email"
            width={"50px"}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border-black border-1 m-2 p-1 bg-red-300 rounded-sm hover:bg-red-400 focus:bg-red-400 transition ease-in-out duration-300 w-[100%]"
          />
          <label htmlFor="" className="m-1 text-white ">
            Username
          </label>
          <input
            type="text"
            required
            className="border-red-500 m-2 p-1 bg-red-300 rounded-sm hover:bg-red-400 focus:bg-red-400 transition ease-in-out duration-300 w-[100%] "
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

          {/* <label htmlFor="" className="m-3 text-white">
            Cooking Profiency
          </label>
          <select className="m-1 px-10 bg-red-300 p-1 w-[100%]" required>
            <option value="">Beginner</option>
            <option value="">Amateur</option>
            <option value="">Professional</option>
          </select> */}

          {/* <button
            className="rounded-md mt-8 mb-3 text-black border-white bg-white border-1 p-2 "
            onClick={handleSubmit}
          >
            Create Account
          </button> */}
          <p className="m-1">
            Already have an account? &nbsp;
            <Link to="/login" className="text-blue-500 ">
              Login
            </Link>
            &nbsp;|{" "}
            <Link to="/" className="text-blue-500">
              Go back
            </Link>
          </p>
        </form>
        <hr className="bg-b font-semibold border border-black w-full m-1" />
        {/* <button
          className="rounded-md mt-3 mb-5 text-black border-white bg-white border-1 p-2 flex justify-center items-center"
          onClick={handleGoogleSubmit}
        >
          <img
            src="https://img.icons8.com/color/256/google-logo.png"
            alt=""
            width="25px"
          />
          <p className="pl-2">Create Account using Google</p>
        </button> */}
      </div>
    </div>
  );
};

export default Signup;

// recipescape - 376818;
