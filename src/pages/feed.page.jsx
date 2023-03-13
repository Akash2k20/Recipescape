import Card from "../components/card.component";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import Popup from "../components/popup.component";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { ShowRecipeByUser, ShowRecipe } from "../axios/recipe.axios";
import { GetUser } from "../axios/user.axios";

const Feedpage = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [recipe, setRecipe] = useState();
  const [searchText, setSearchText] = useState("");
  const [recipes, setRecipes] = useState([]);
  // const [username, setUsername] = useState("");

  const {user} = useSelector((state) => ({...state }))


  useEffect(() => {
    ShowRecipe().then(async(response) => {
      console.log(response);
      setRecipes(response.data);
    });
  }, []);

  

  return (
    <>
      {isPopup && <Popup recipe={recipe} />}

      <Navbar />
      <div className=" bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen lg:w-full min-w-screen flex flex-col justify-center items-center">
        {/* <h1 className="text-white text-4xl flex flex-col justify-start items-center pt-7">
          Welcome {user.displayName}
        </h1> */}
        {/* <p className="text-white text-lg flex flex-col justify-start p-3">
          Your recipes
        </p> */}
        <p className="text-white text-2xl m-4">Feed</p>
        <TextField
          id="outlined-basic"
          label="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          variant="filled"
          fullWidth="true"
          className="rounded-md  bg-[#F8F0E3]"
          sx={{
            width: "23rem",
            "@media(min-width: 1024px)": {
              width: "35rem",
            },
            color: "success.main",
            margin: "1rem",
          }}
        />
        <div className="lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:place-items-center mx-auto gap-0 my-5">
          {recipes.length > 0 ? (
            recipes
              .filter((recipes) =>
                recipes.blog_title
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
              .map((recipe) => {
                return (
                  <Card
                    setIsPopup={setIsPopup}
                    setRecipe={setRecipe}
                    recipe={recipe}
                    image={recipe.blog_img}
                    title={recipe.blog_title}
                    desc={recipe.blog_description}
                    time={recipe.blog_time}
                    username={recipe.username}
                  />
                );
              })
          ) : (
            null
          )}
        </div>
        {recipes.length === 0 && (
          <>
            <h1 className="text-2xl text-white flex flex-col items-center justify-center h-[40vh]">
              No recipes to show
            </h1>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Feedpage;
