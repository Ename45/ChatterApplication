const cookieParser = require("cookie-parser");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const feedRoutes = require('./routes/feedRoutes')
const cors = require("cors");

require("dotenv").config();
const app = express();

// Default/Regular middleware
app.use(express.json()); //allows us to use the json from the request body
app.use(express.urlencoded({ extended: true })); //check from express js documentation/ how to get started
app.use(cors());

//cookie middleware
app.use(cookieParser()); //jsonwebtoken npm documentation


app.use("/api/1.0/users", userRoutes);
app.use("/api/1.0/feeds", feedRoutes);




app.get("/", (req, res) => {
  res.send("Hi from me");
});

app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
