const router = require("express").Router()
const { Addrecipe, Showrecipes, Deleterecipe, UpdateRecipe } = require("../controllers/recipe.controller");


router.post("/addrecipe", Addrecipe)
router.get("/homepg", Showrecipes)
router.delete("/delete/:blog_id", Deleterecipe)
router.put("/update/:blog_id", UpdateRecipe)

module.exports = router