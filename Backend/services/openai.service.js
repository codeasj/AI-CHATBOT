import openai from "../config/openai.js";

const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

export const generateOpenAIResponse = async (message, systemPrompt) => {
  const response = await openai.chat.completions.create({
    model: OPENAI_MODEL,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message },
    ],
    temperature: 0.4,
  });

  return response.choices[0].message.content;
};
