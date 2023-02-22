import React, { useState } from "react";
import Navbar from "../components/navbar.component";
import { TextField, Button } from "@mui/material";
import { AddRecipe, UploadImage } from "../axios/recipe.axios";
import Footer from "../components/footer.component";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Addrecipe = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "otevtlmi");
    toast.info("Your recipe is being uploaded", { theme: "dark" });
    
    await UploadImage(formData).then(async (res) => {
      
      await AddRecipe(title, description, res.data.secure_url, time).then(
        (res) => {
          toast.success("Data uploaded", {theme: "dark"});
          navigate("/homepg");
        }
      );
    });
  };

  // const uploadImage = async(e)=> {
  //   const formData = new FormData()
  //   formData.append("file", image)
  //   formData.append("upload_preset", "otevtlmi");
  //   await UploadImage(formData)
  // }

  return (
    <div className="bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen">
      
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl m-2">Showcase your recipe!</h1>
        <form className="flex flex-col items-start justify-center">
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
            component="label"
            // onClick={(e)=> uploadImage(e)}
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
            <input
              type="file"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
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
            onClick={(e) => handleSubmit(e)}
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
