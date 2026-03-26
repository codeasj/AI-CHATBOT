import { generateGeminiResponse } from "./gemini.service.js";
import { generateOpenAIResponse } from "./openai.service.js";
import { getModeConfig } from "../utils/promptBuilder.js";

const DEFAULT_PROVIDER = process.env.AI_PROVIDER || "gemini";

const normalizeMessages = (message, messages = []) => {
  if (Array.isArray(messages) && messages.length > 0) {
    return messages.map(({ role, content }) => ({
      role,
      content,
    }));
  }

  return [{ role: "user", content: message }];
};

export const generateAIResponse = async ({
  message,
  messages,
  mode,
  provider = DEFAULT_PROVIDER,
}) => {
  const modeConfig = getModeConfig(mode);
  const conversation = normalizeMessages(message, messages);

  try {
    if (provider === "openai") {
      return await generateOpenAIResponse(conversation, modeConfig);
    }

    if (provider === "gemini") {
      return await generateGeminiResponse(conversation, modeConfig);
    }

    throw new Error("Invalid provider");

  } catch (err) {
    console.error("AI error:", err);
    throw err;
  }
};
