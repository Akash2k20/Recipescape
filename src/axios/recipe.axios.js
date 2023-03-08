import axios from "axios";

export const AddRecipe = async (title, description, image, time, user_id) => {
  console.log(user_id);
  return await axios.post("http://localhost:8080/addrecipe", {
    blog_title: title,
    blog_description: description,
    blog_img: image,
    blog_time: time,
    user_id,
  });
};

export const ShowRecipe = async () => {
  return await axios.get("http://localhost:8080/homepg");
};

export const DeleteRecipe = async (id) => {
  return await axios.delete(`http://localhost:8080/delete/${id}`);
};

export const UpdateRecipe = async (id, title, description, image, time) => {
  return await axios.put(`http://localhost:8080/update/${id}`, {
    blog_title: title,
    blog_description: description,
    blog_img: image,
    blog_time: time,
  });
};

export const UploadImage = async (formData) => {
  return await axios.post(
    "https://api.cloudinary.com/v1_1/dxll1lfir/image/upload",
    formData
  );
};

export const ShowRecipeByUser = async (id)=> {
  return await axios.get(`http://localhost:8080/recipe/${id}`);
}