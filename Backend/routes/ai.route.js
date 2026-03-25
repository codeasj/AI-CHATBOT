import express from 'express';
import { chatController } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/", chatController);

export default router;
