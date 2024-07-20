import express from "express";
import { ENV_VARS } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});
