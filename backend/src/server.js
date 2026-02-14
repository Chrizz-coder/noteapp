import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import nroutes from "./routes/nroutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";
import { fileURLToPath } from "url";

//const express = require("express")
dotenv.config();
console.log();
const app = express();
const PORT = process.env.PORT || 5001;

// Proper __dirname replacement for ES modules (points to backend/src)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server has started on port ", PORT);
  });
});

if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173" }));
}
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", nroutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  // Catch-all route for SPA in Express 5: use a RegExp so we avoid path-to-regexp wildcards
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"));
  });
}
