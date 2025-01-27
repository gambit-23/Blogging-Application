require('dotenv').config()
const express = require("express");
const path = require("path");
const app = express();
// const PORT = 8000; // only used when you have to run the server // 

const PORT = process.env.PORT || 8000; // for deploying // 
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");
const blogRoute = require("./routes/blog");
const Blog = require("./models/blog");

// Setting the view engine , i.e. Ejs

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

// mongoose
//   .connect("mongodb://localhost:27017/blogzy")
//   .then((e) => console.log("MongoDb connected"));
// app.use("/user", userRoute);
// app.use("/blog", blogRoute); // only used when you have to run on your computer

mongoose
  .connect(process.env.MONGO_URL)// for deploying // 
  .then((e) => console.log("MongoDb connected"));
app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
