import React, { useState } from "react";
import Navbar from "../components/navbar.component";
import { TextField, Button } from "@mui/material";
import { AddRecipe } from "../axios/recipe.axios";
import Footer from "../components/footer.component";
import { useNavigate } from "react-router-dom";

const Addrecipe = () => {
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault()
    await AddRecipe(title, description, image, time).then((response) => {
      navigate("/homepg");
    });
    console.log("Hello");
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen">
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl m-2">Showcase your recipe!</h1>
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-start justify-center"
        >
          <TextField
            id="outlined-basic"
            label="Title"
            variant="filled"
            fullWidth="true"
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setTitle(e.target.value)}
            // required
            sx={{
              width: "55rem",
              color: "success.main",
              margin: "1rem",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="filled"
            fullWidth="true"
            multiline="true"
            // required
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              width: "55rem",
              color: "success.main",
              margin: "1rem",
            }}
          />

          <Button
            variant="contained"
            type="submit"
            hidden="true"
            sx={{
              margin: "1rem",
              padding: "0.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              backgroundColor: "#ffffff",

              color: "#000000",
              borderColor: "#ffb3b3",
              // "&:hover": { backgroundColor: "#ffb3b3", color: "#000000" },
            }}
          >
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <TextField
            id="outlined-adornment-amount"
            label="Time to make:"
            variant="filled"
            fullWidth="true"
            multiline="true"
            // required
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setTime(e.target.value)}
            sx={{
              width: "55rem",
              color: "success.main",
              margin: "1rem",
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              margin: "1rem",
              padding: "0.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              backgroundColor: "#ffffff",

              color: "#000000",
              borderColor: "#ffb3b3",
              "&:hover": { backgroundColor: "#ffb3b3", color: "#000000" },
            }}
          >
            Add recipe
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Addrecipe;
