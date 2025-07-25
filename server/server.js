import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import { handleError } from "./middlewares/errorhandler.js";

import express from "express";
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.PRODUCTION_HOST_URL || process.env.LOCAL_HOST_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("server is working 🚀");
});

app.listen(process.env.PORT, () => {
  console.log("server is listening on port 3000");
});

import userRoutes from "./routes/user.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import noteRoutes from "./routes/note.routes.js";

app.use("/api/user", userRoutes);
app.use("/api/ticket", ticketRoutes);
app.use("/api/note", noteRoutes);

app.use(handleError);
