require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const RecipeRoute = require("./routes/reciperoute")
const UserRoute = require("./routes/userroute")
const path = require("path");
const app = express();

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");

app.use(express.static(buildPath));

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const db = require("./database/database");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())
app.use("/", RecipeRoute)
app.use("/", UserRoute)

app.listen(process.env.PORT, (result) => {
  console.log(`Server running in port ${process.env.PORT}`);
});
 