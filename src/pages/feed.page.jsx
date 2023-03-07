import Card from "../components/card.component";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import Popup from "../components/popup.component";
import { useState } from "react";
import { useSelector } from "react-redux";

const Feedpage = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [recipe, setRecipe] = useState();

  const { user } = useSelector((state) => ({ ...state }));

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
        <Card
          setIsPopup={setIsPopup}
          setRecipe={setRecipe}
          text="No recipes to show"
        />

        <Footer />
      </div>
    </>
  );
};

export default Feedpage;
