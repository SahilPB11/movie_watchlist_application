// Import necessary modules and middlewares
import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import movieRoutes from "./routes/movieRoutes.js";
import cors from "cors";

// Initialize Express application
export const app = express();

// Load environment variables from .env file
config({ path: "./.env" });

// Set up middlewares for request parsing and cookie handling
app.use(cors());
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON payloads

// set up routes for movie management
app.use("/api/movies", movieRoutes);

// Use error handling middleware to manage and respond to errors
app.use(errorMiddleware);

// Export the configured Express application for use in other modules
export default app;
