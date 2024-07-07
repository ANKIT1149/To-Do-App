import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log("Mongodb is ready to store the data");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port :${process.env.PORT}`);
});
