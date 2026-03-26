import openai from "../config/openai.js";

const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

export const generateOpenAIResponse = async (messages, modeConfig) => {
  const response = await openai.chat.completions.create({
    model: OPENAI_MODEL,
    messages: [
      { role: "system", content: modeConfig.systemPrompt },
      ...messages,
    ],
    temperature: modeConfig.temperature,
  });

  return response.choices[0].message.content;
};
