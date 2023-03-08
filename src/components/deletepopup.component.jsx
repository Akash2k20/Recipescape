import React from 'react'
import {Button} from '@mui/material'
import { DeleteRecipe } from '../axios/recipe.axios';
import {toast} from 'react-toastify'

const DeleteConfirmPopup = ({ setDeletePopup, recipe }) => {
  const handlePopup = (e) => {
    setDeletePopup(false);
    console.log(recipe.blog_id);
  };

//   const Deleterecipe = async (id) => {
//     await DeleteRecipe(id).then(() => {
//       toast.success("Recipe succesfully deleted", { theme: "dark" });
//     });
//   };

const Deleterecipe = async(id) => {
    toast.success("Recipe succesfully deleted", { theme: "dark" });
    await DeleteRecipe(id).then(() => {
    //   setRecipes(recipes.filter((recipe) => recipe.blog_id !== id));
    // console.log("Deleted");
    setDeletePopup(false)
    window.location.reload()
    });
  };

  return (
    <div className="bg-black bg-opacity-95 w-full  min-h-screen flex flex-col items-center justify-center fixed top-0 left-0  z-10">
      <div className="bg-white flex flex-col items-center justify-center p-8 rounded-xl">
        <h1 className="p-3 font-bold">
          Are you sure you want to delete this recipe?
        </h1>
        <div className="flex items-center justify-center">
          <Button
            variant="contained"
            type="submit"
            onClick={()=>handlePopup()}
            sx={{
              margin: "0.5rem",
              "@media(min-width: 1024px)": {
                margin: "0.5rem",
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
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            onClick={() => {
              Deleterecipe(recipe.blog_id);
            }}
            sx={{
              margin: "1rem",
              "@media(min-width: 1024px)": {
                margin: "1rem",
                padding: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
              },
              backgroundColor: "#ffb3b3",
              color: "#000000",
              borderColor: "#ffb3b3",
              "&:hover": { backgroundColor: "#ffb3b3", color: "#000000" },
            }}
          >
            Delete recipe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmPopup