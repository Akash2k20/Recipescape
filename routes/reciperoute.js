const router = require("express").Router()
const { Addrecipe, Showrecipes, Deleterecipe, UpdateRecipe, Showrecipesbyuser } = require("../controllers/recipe.controller");


router.post("/addrecipe", Addrecipe)
router.get("/homepg", Showrecipes)
router.get('/recipe/:user_id',Showrecipesbyuser)
router.delete("/delete/:blog_id", Deleterecipe)
router.put("/update/:blog_id", UpdateRecipe)    

module.exports = router