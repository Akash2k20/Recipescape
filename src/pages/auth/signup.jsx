import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  InputLabel,
} from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [prof, setProf] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass).then((res)=> {
         
        navigate("/login");
      })
     
    } catch (err) {
      setErr(err)
    }
  };
  

  const googleAuthProvider = new GoogleAuthProvider();
  const handleGoogleSubmit = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider).then((res) => {
        navigate("/homepg");
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  

  

  return (
    <div className="bg-black h-[100vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl py-10 my-3 text-white">Sign-up</h1>
        <form action="" className="flex flex-col items-center justify-center">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <TextField
              id="filled-basic"
              label="E-mail"
              variant="filled"
              className="rounded-md bg-red-300"
              onClick={(e) => {setEmail(e.target.value)}}
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
              className="rounded-md  bg-red-300"
              onClick={(e) => {setPass(e.target.value)}}
              sx={{
                width: "20rem",
                color: "success.main",
                margin: "1rem",
              }}
            />
            <TextField
              id="filled-basic"
              label="Username"
              onClick={(e) => {setUsername(e.target.value)}}
              variant="filled"
              className="rounded-md  bg-red-300"
              sx={{
                width: "20rem",

                margin: "1rem",
              }}
            />

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
            <TextField
              id="filled-select"
              select
              label="Select proficiency"
              value={prof}
              defaultValue="Beginner"
              variant="filled"
              onChange={(e) => {setProf(e.target.value)}}
              
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
            </TextField>

            {/* </Select> */}
          </FormControl>
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
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              margin: "0.5rem",
              padding: "0.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              "&:hover": { backgroundColor: "#ffb3b3" },
            }}
          >
            Sign-up
          </Button>
        </form>
        <p className="text-white p-2">or using google</p>
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
        <Button
          variant="contained"
          onClick={handleGoogleSubmit}
          className="bg-red-500"
          sx={{
            margin: "0.5rem",
            padding: "0.5rem",
            paddingLeft: "1rem",
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
          Sign-up using Google
        </Button>
      </div>
    </div>
  );
};

export default Signup;

// recipescape - 376818;
