import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();
const PORT = 4000;

app.use(cors());

//CONNECT DATABASE
connectDB();
//MIDDLEWARE
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
