import axios from 'axios'

export const CreateUser = async (email, username, proficiency) => {
  return await axios.post(
    "https://recipescape-server.onrender.com/createuser",
    {
      email: email,
      username: username,
      proficiency: proficiency,
    }
  );
};


export const GetUser = async(email) => {
    return await axios.get(
      `https://recipescape-server.onrender.com/getuser/${email}`
    );
}