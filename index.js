import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

// routes
import authRoutes from "./routes/userRoutes.js";
import apartmentRoutes from "./routes/apartmentRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Use Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.use("/api/user", authRoutes);
app.use("/api/apartment", apartmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);