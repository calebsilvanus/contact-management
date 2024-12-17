import express from "express";
import searchRouter from "./routes/search.js"; // Import your route file
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mount Routes
app.use("/api", searchRouter); // Mount the 'search' router under '/api'

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
