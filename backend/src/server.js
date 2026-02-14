import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import nroutes from "./routes/nroutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
//const express = require("express")
dotenv.config();
console.log();
const app = express();
const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server has started on port ", PORT);
  });
});
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", nroutes);
