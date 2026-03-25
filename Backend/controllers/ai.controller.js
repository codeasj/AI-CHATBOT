import { generateAIResponse } from "../services/ai.service.js";

export const chatController = async (req, res) => {
  try {

    const { message, mode, provider } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message required" });
    }

    const reply = await generateAIResponse(message, mode, provider);

    res.json({ reply });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "AI failed" });
  }
};
