/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { DeleteRecipe, ShowRecipe } from "../axios/recipe.axios";
import { Button } from "@mui/material";
import {Image} from "cloudinary-react"

const Card = ({ setIsPopup, setRecipe, text }) => {
  const [recipes, setRecipes] = useState([]);

  // const [title, setTitle] = useState("");

  // const [description, setDescription] = useState("")
  // const [time, setTime] = useState("")
  // const [img, setImg] = useState("")

  useEffect(() => {
    ShowRecipe().then((response) => {
      console.log(response);
      setRecipes(response.data);
    });
  }, []);

  const Deleterecipe = (id) => {
    DeleteRecipe(id).then(() => {
      setRecipes(recipes.filter((recipe) => recipe.blog_id !== id));
    });
  };

  const handlePopup = (recipe) => {
    setRecipe(recipe);
    setIsPopup(true);
  };

  return (
    <>
      {/* {JSON.stringify(recipes)} */}
      <div className="lg:grid grid-rows-2 grid-cols-3 w-[100%] place-content-evenly mx-auto gap-0 my-5">
        {recipes.length > 0
          ? recipes.map((recipe) => {
              return (
                <div className=" lg:w-[80%] w-[70%] flex flex-col justify-center items-start bg-[#F8F0E3] shadow-md lg:px-8 rounded-md lg:m-2.5 ml-7 p-3 my-2">
                  <Image
                    className="object-contain w-[400px] h-[300px]"
                    cloudName="dxll1lfir"
                    publicId= {recipe.blog_img}
                  />

                  <h1 className="font-semibold text-xl py-2">
                    {recipe.blog_title}
                  </h1>
                  <p className="py-2">{recipe.blog_description}</p>
                  <p className="py-2">Time to make: {recipe.blog_time} </p>
                  <div className="flex justify-between w-full">
                    <Button
                      variant="contained"
                      // type=""
                      onClick={() => handlePopup(recipe)}
                      sx={{
                        marginTop: "1rem",
                        padding: "0.5rem",
                        paddingLeft: "1.5rem",
                        paddingRight: "1.5rem",
                        backgroundColor: "#ffffff",

                        color: "#000000",
                        borderColor: "#000000",
                      }}
                    >
                      Edit Recipe
                    </Button>
                    <Button
                      variant="contained"
                      // type=""
                      onClick={() => Deleterecipe(recipe.blog_id)}
                      sx={{
                        marginTop: "1rem",
                        padding: "0.5rem",
                        paddingLeft: "1.5rem",
                        paddingRight: "1.5rem",
                        backgroundColor: "#ffffff",

                        color: "#000000",
                        borderColor: "#000000",
                      }}
                    >
                      Delete Recipe
                    </Button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      {recipes.length === 0 && (
        <>
          <h1 className="text-2xl text-white flex flex-col items-center justify-center h-[40vh]">
            {text}
          </h1>
        </>
      )}
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
