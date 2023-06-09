import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Routes
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoutes.js";
const app = express();

//middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`listening on port ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

//route usage

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
