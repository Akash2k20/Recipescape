const { response } = require("express");
const { where } = require("sequelize");
const { Recipe } = require("../database/database");

exports.Addrecipe = async (req, res) => {
  const { blog_title, blog_description, blog_img, blog_time, user_id, username } =
    req.body;

  const addrecipe = await Recipe.create({
    blog_title,
    blog_description,
    blog_img,
    blog_time,
    user_id,
    username
  });
  res.json("OK");
};

exports.Showrecipes = async (req, res) => {
  const showrecipe = await Recipe.findAll().then((response) => {
    res.json(response);
  });
};
exports.Deleterecipe = async (req, res) => {
  const blog_id = req.params.blog_id;
  try {
    await Recipe.destroy({ where: { blog_id: blog_id } }).then((response) => {
      res.json("Data deleted");
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.UpdateRecipe = async (req, res) => {
  const { blog_title, blog_description, blog_img, blog_time } = req.body;
  console.log(req.body);
  const blog_id = req.params.blog_id;
  try {
    await Recipe.update(
      {
        blog_title,
        blog_description,
        blog_img,
        blog_time,
      },
      { where: { blog_id } }
    ).then((response) => {
      res.json("Updated");
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Showrecipesbyuser = async (req, res) => {
  const { user_id } = req.params;
  const showrecipe = await Recipe.findAll({ where:{user_id} });
  res.json(showrecipe);
};