import Card from "../components/card.component";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import Popup from "../components/popup.component";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DeleteConfirmPopup from "../components/deletepopup.component";
import { TextField } from "@mui/material";
import { ShowRecipeByUser } from "../axios/recipe.axios";
import { GetUser } from "../axios/user.axios";

const Homepage = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [recipe, setRecipe] = useState();
  const [searchText, setSearchText] = useState("");
  const [recipes, setRecipes] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.user_id) {
      ShowRecipeByUser(user.user_id).then(async (response) => {
        setRecipes(response.data);
      });
    } else {
      GetUser(user.email).then((resp) => {
        console.log(resp);
        ShowRecipeByUser(resp.data.user_id).then((responsee) => {
          setRecipes(responsee.data);
        });
      });
    }
  }, []);

  return (
    <>
      {isPopup && <Popup recipe={recipe} setIsPopup={setIsPopup} />}
      {deletePopup && (
        <DeleteConfirmPopup recipe={recipe} setDeletePopup={setDeletePopup} />
      )}

      <Navbar />
      <div className=" bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen lg:w-full min-w-screen flex flex-col justify-center items-center ">
        {user.username ? (
          <h1 className="text-white text-4xl pt-7">Welcome {user.username}</h1>
        ) : (
          <h1 className="text-white text-4xl pt-7">
            Welcome {user.displayName}
          </h1>
        )}

        <p className="text-white text-lg p-3">Your recipes</p>
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
          {recipes.length > 0
            ? recipes
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
                      setDeletePopup={setDeletePopup}
                      image={recipe.blog_img}
                      title={recipe.blog_title}
                      desc={recipe.blog_description}
                      time={recipe.blog_time}
                    />
                  );
                })
            : null}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
