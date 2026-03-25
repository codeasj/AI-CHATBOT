import { generateGeminiResponse } from "./gemini.service.js";
import { generateOpenAIResponse } from "./openai.service.js";
import { getSystemPrompt } from "../utils/promptBuilder.js";

const DEFAULT_PROVIDER = process.env.AI_PROVIDER || "gemini";

export const generateAIResponse = async (message, mode, provider = DEFAULT_PROVIDER) => {
  const systemPrompt = getSystemPrompt(mode);

  try {
    if (provider === "openai") {
      return await generateOpenAIResponse(message, systemPrompt);
    }

    if (provider === "gemini") {
      return await generateGeminiResponse(message, systemPrompt);
    }

    throw new Error("Invalid provider");

  } catch (err) {
    console.error("AI error:", err);
    throw err;
  }
};
