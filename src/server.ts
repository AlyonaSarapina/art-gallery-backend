import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import artworkRoutes from "./routes/artwork.routes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/artworks", artworkRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
