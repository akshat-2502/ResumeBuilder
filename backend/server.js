import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import resumeRouter from "./routes/resume.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

app.use(cors());

//CONNECT DATABASE
connectDB();
//MIDDLEWARE
app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/resume", resumeRouter);
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, _path) => {
      res.set("Access-Control-Allow-Origin", "http://localhost:5173");
    },
  })
);

//Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
