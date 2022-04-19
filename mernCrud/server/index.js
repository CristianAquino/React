// import cors from "cors";
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import app from "./app.js";

connectDB();

// app.use(cors());

app.listen(PORT);
console.log("Server in running port 4000");
