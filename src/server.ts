import mongoose from "mongoose";
import "dotenv/config";
import app from "./app";
import env from "./utils/validateEnv";

const PORT = env.PORT;

mongoose
  .connect(env.MONGO_DB_URL)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(PORT, () => {
      console.log("Server running on port " + env.PORT);
    });
  })
  .catch(console.error);
