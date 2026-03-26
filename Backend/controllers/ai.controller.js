import { generateAIResponse } from "../services/ai.service.js";

export const chatController = async (req, res) => {
  try {

    const { message, messages, mode, provider } = req.body;

    if (!message && (!Array.isArray(messages) || messages.length === 0)) {
      return res.status(400).json({ error: "Message or messages array required" });
    }

    const reply = await generateAIResponse({ message, messages, mode, provider });

    res.json({ reply });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "AI failed" });
  }
};
