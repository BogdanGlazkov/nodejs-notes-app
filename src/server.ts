import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import env from "./util/validateEnv";

const app = express();
const PORT = env.PORT;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

mongoose
  .connect(env.MONGO_DB_URL)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch(console.error);
