import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Authrouter from "./Routes/Auth.Routes.js";
dotenv.config();

const app = express();

app.listen(3000, (req, res) => {
  console.log(`Server is running on port :${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log("Mongodb is ready to store the data");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cookieParser());
app.use(express.json());

app.use("/todo/auth", Authrouter);




app.use((err, req, res, next) => {
  const message = err.message || "Internal server Error";
  const statuscode = err.statuscode || 500;
  res.status(statuscode).json({
    success: false,
    message,
    statuscode,
  });
});
