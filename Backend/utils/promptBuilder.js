export const getSystemPrompt = (mode) => {

  switch (mode) {

    case "code":
      return "You are a senior software engineer. Write clean, optimized, production-ready code.";

    case "debug":
      return "You are an expert debugger. Identify bugs and explain fixes clearly.";

    case "explain":
      return "Explain programming concepts in simple terms with examples.";

    case "plan":
      return "Create structured learning plans for developers.";

    default:
      return "You are a helpful AI assistant.";
  }

};