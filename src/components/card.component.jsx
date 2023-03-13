/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { DeleteRecipe, ShowRecipe, ShowRecipeByUser } from "../axios/recipe.axios";
import { Button, IconButton } from "@mui/material";
import { Image } from "cloudinary-react";
import { useSelector } from "react-redux";

const Card = ({ setIsPopup, setRecipe,image,title,desc,time,setDeletePopup, recipe, username }) => {
  // const [recipes, setRecipes] = useState([]);
  // const user = useSelector((state) => state.user)

  // const [title, setTitle] = useState("");

  // const [description, setDescription] = useState("")
  // const [time, setTime] = useState("")
  // const [img, setImg] = useState("")

  // const Deleterecipe = (id) => {
  //   DeleteRecipe(id).then(() => {
  //     setRecipes(recipes.filter((recipe) => recipe.blog_id !== id));
  //   });
  // };

  // useEffect(() => {
  //   console.log(user.user_id);
  //   ShowRecipeByUser(user.user_id).then((response) => {
  //     console.log(response);
  //     setRecipes(response.data);
  //   });
  // }, []) ;




  const handlePopup = (recipe) => {
    setRecipe(recipe);
    setIsPopup(true);
  };

  const handleDeletePopup = (recipe) => {
    setRecipe(recipe);
    setDeletePopup(true);
  };

  return (
    <>
      {/* {JSON.stringify(recipes)} */}
      <div className=" lg:w-[80%] w-[90%] flex flex-col justify-center items-start bg-[#F8F0E3] shadow-md lg:px-8 rounded-md lg:m-2.5 ml-5 p-3 my-2">
        <Image
          className="object-contain w-[400px] h-[300px]"
          cloudName="dxll1lfir"
          publicId={image}
        />

        <h1 className="font-semibold text-xl py-2">{title}</h1>
        <p className="py-2">{desc}</p>
        <p className="py-2">Time to make: {time} </p>
        <p className="py-2"> By user: {username}</p>
        <div className="flex justify-between w-full">
          <Button
            variant="contained"
            // type=""
            onClick={() => handlePopup(recipe)}
            sx={{
              marginTop: "1rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderColor: "#000000",
              "&:hover": {
                backgroundColor: "#023020",
                color: "#ffffff",
              },
            }}
          >
            ✎ Edit Recipe
          </Button>
          <Button
            variant="contained"
            // type=""
            onClick={() => handleDeletePopup(recipe)}
            sx={{
              marginTop: "1rem",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",  
              backgroundColor: "#ffffff",
              color: "#000000",
              borderColor: "#000000",
              "&:hover": {
                backgroundColor: "#ff0000",
                color: "#ffffff",
              },
            }}
          >
            🗑️ Delete Recipe
          </Button>
          
        </div>
      </div>
    </>
  );
};

{
  /* <div className="flex flex-col justify-center items-start py-2">
        <h2 className="font-bold ">S.No</h2>
        <p>1</p>
      </div>
      <div className="flex flex-col justify-center items-start py-2">
        <h2 className="font-bold ">Step Name</h2>
        <p>Document Upload</p>
      </div>
      <div className="flex flex-col justify-center items-start py-2">
        <h2 className="font-bold">Description</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
        </p>
      </div> */
}

export default Card;
