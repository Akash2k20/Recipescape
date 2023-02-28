const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user", {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proficiency: {
      type: DataTypes.STRING,
      // allowNull: false,
    },

  });
  return User;
};

//   created_on: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   updated_on: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
