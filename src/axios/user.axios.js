import axios from 'axios'

export const CreateUser = async (email, username, proficiency) => {
  return await axios.post("http://localhost:8080/createuser", {
    email: email,
    username: username,
    proficiency: proficiency,
  });
};


export const GetUser = async(user_id) => {
    return await axios.get(`http://localhost:8080/${user_id}` );
}