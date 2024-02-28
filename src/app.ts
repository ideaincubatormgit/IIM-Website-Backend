import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import connectDB from "./config/db";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3000; // Use the PORT environment variable if available, otherwise default to 3000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
