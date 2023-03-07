import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { UpdateRecipe, UploadImage } from "../axios/recipe.axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Popup = ({ recipe, setIsPopup }) => {
  const [title, setTitle] = useState(recipe.blog_title);
  const [description, setDescription] = useState(recipe.blog_description);
  const [image, setImage] = useState(recipe.blog_img);
  const [time, setTime] = useState(recipe.blog_time);
  const navigate = useNavigate()

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "otevtlmi");
    toast.info("Your recipe is being updated", { theme: "dark" });

    await UploadImage(formData).then(async (res) => {
      handlePopupClose()
      await UpdateRecipe(recipe.blog_id, title, description, res.data.secure_url, time).then(()=> {
        toast.success("Recipe Updated!", {theme: "dark"})
        window.location.reload()
      })
    });
  };

  const handlePopupClose = (e)=> {
    setIsPopup(false)
  }

  return (
    <div className="bg-black h-[100%] w-[100%] flex fixed top-0 left-0  flex-col items-center justify-center z-10">
      <div className="bg-white flex flex-col items-center justify-center rounded-lg p-5">
        <div className="w-full flex lg:justify-between items-center px-5">
          <h1 className="text-3xl py-5 lg:mr-0 mr-24">Update recipe</h1>
          <button onClick={handlePopupClose}>
            <img
              src="https://img.icons8.com/ios-glyphs/256/multiply.png"
              width="40px"
              alt="Close button"
            />
          </button>
        </div>
        <form
          action=""
          onSubmit={handleUpdate}
          className="flex flex-col items-start justify-center"
        >
          <TextField
            id="outlined-basic"
            defaultValue={title}
            label="Title"
            variant="filled"
            fullWidth="true"
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setTitle(e.target.value)}
            // required
            sx={{
              width: "22rem",
              "@media(min-width: 1024px)": {
                width: "55rem",
              },
              color: "success.main",
              margin: "1rem",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            defaultValue={description}
            variant="filled"
            fullWidth="true"
            multiline="true"
            // required
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              width: "22rem",
              "@media(min-width: 1024px)": {
                width: "55rem",
              },
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
            defaultValue={time}
            variant="filled"
            fullWidth="true"
            multiline="true"
            // required
            className="rounded-md  bg-[#F8F0E3]"
            onChange={(e) => setTime(e.target.value)}
            sx={{
              width: "22rem",
              "@media(min-width: 1024px)": {
                width: "55rem",
              },
              color: "success.main",
              margin: "1rem",
            }}
          />
          <Button
            variant="contained"
            type="submit"
            onClick={handleUpdate}
            sx={{
              margin: "1rem",
              '@media(min-width: 1024px)': {
                margin: "1rem",
                padding: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
              },
              backgroundColor: "#ffffff",
              color: "#000000",
              borderColor: "#ffb3b3",
              "&:hover": { backgroundColor: "#ffb3b3", color: "#000000" },
            }}
          >
            Update recipe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
