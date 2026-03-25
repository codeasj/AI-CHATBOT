import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRoutes from "./routes/ai.route.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/chat", aiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
