import axios from "axios";

export const AddRecipe = async (title, description, image, time, user_id, username) => {
  console.log(user_id);
  return await axios.post(
    "https://recipescape-server.onrender.com/addrecipe",
    {
      blog_title: title,
      blog_description: description,
      blog_img: image,
      blog_time: time,
      user_id,
      username,
    }
  );
};

export const ShowRecipe = async () => {
  return await axios.get("https://recipescape-server.onrender.com/homepg");
};

export const DeleteRecipe = async (id) => {
  return await axios.delete(
    `https://recipescape-server.onrender.com/delete/${id}`
  );
};

export const UpdateRecipe = async (id, title, description, image, time) => {
  return await axios.put(
    `https://recipescape-server.onrender.com/update/${id}`,
    {
      blog_title: title,
      blog_description: description,
      blog_img: image,
      blog_time: time,
    }
  );
};

export const UploadImage = async (formData) => {
  return await axios.post(
    "https://api.cloudinary.com/v1_1/dxll1lfir/image/upload",
    formData
  );
};

export const ShowRecipeByUser = async (id)=> {
  return await axios.get(
    `https://recipescape-server.onrender.com/recipe/${id}`
  );
}