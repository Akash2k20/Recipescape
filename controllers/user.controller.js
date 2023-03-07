const { User } = require("../database/database");

exports.CreateUser = async (req, res) => {
  const { userid, email, username, proficiency } = req.body;

  const createuser = await User.create({
    userid,
    email,
    username,
    proficiency,
  });
  res.json("Created");
};

exports.GetUser = async (req, res) => {
  const { email } = req.params;
  console.log(email);
  const getuser = await User.findOne({where: {email: email} }).then((response) => {
    res.json(response);
  });
};
