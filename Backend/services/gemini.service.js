import gemini from "../config/gemini.js";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";

const formatGeminiMessages = (messages) =>
  messages.map(({ role, content }) => ({
    role: role === "assistant" ? "model" : "user",
    parts: [{ text: content }],
  }));

export const generateGeminiResponse = async (messages, modeConfig) => {
  const response = await gemini.models.generateContent({
    model: GEMINI_MODEL,
    contents: formatGeminiMessages(messages),
    config: {
      systemInstruction: modeConfig.systemPrompt,
      temperature: modeConfig.temperature,
    },
  });

  return response.text || "No response from Gemini.";
};
