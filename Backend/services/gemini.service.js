import gemini from "../config/gemini.js";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";

export const generateGeminiResponse = async (message, systemPrompt) => {
  const response = await gemini.models.generateContent({
    model: GEMINI_MODEL,
    contents: message,
    config: {
      systemInstruction: systemPrompt,
      temperature: 0.4,
    },
  });

  return response.text || "No response from Gemini.";
};
