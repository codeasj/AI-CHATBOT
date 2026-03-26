import axios from "axios";
import { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import ModeSelector, { type ChatMode } from "./components/ModeSelector";
import ProviderSwitch, { type ChatProvider } from "./components/ProviderSwitch";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatApiSuccess = {
  reply?: string;
};

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/chat";
const CONTEXT_WINDOW_SIZE = 4;
const INITIAL_ASSISTANT_TEXT = "Hi, send a message to start chatting.";
const welcomeMessage: ChatMessage = {
  id: crypto.randomUUID(),
  role: "assistant",
  content: INITIAL_ASSISTANT_TEXT,
};

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [mode, setMode] = useState<ChatMode>("explain");
  const [provider, setProvider] = useState<ChatProvider>("gemini");
  const [isLoading, setIsLoading] = useState(false);

  const getErrorMessage = (error: unknown) => {
    if (axios.isAxiosError<{ error?: string }>(error)) {
      return error.response?.data?.error || error.message;
    }

    if (error instanceof Error) {
      return error.message;
    }

    return "Something went wrong.";
  };

  const handleSend = async (input: string) => {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
    };
    const recentMessages = [...messages, userMessage]
      .filter((item) => item.content !== INITIAL_ASSISTANT_TEXT)
      .slice(-CONTEXT_WINDOW_SIZE)
      .map(({ role, content }) => ({ role, content }));

    setMessages((current) => [...current, userMessage]);
    setIsLoading(true);

    try {
      const { data } = await axios.post<ChatApiSuccess>(API_URL, {
        message: input,
        messages: recentMessages,
        mode,
        provider,
      });

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply || "I did not receive a response.",
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: `Error: ${getErrorMessage(error)}`,
      };

      setMessages((current) => [
        ...current,
        errorMessage,
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-6 text-ink">
      <div className="mx-auto flex min-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">
        <section className="border-b border-gray-200 px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold">AI Chatbot</h1>
              <p className="mt-1 text-sm text-gray-600">
                Choose a mode and send a message.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:items-end">
              <ProviderSwitch provider={provider} onChange={setProvider} />
              <ModeSelector mode={mode} onChange={setMode} />
            </div>
          </div>
        </section>

        <section className="flex flex-1 flex-col">
          <ChatBox messages={messages} isLoading={isLoading} />
          <InputBox onSend={handleSend} disabled={isLoading} />
        </section>
      </div>
    </main>
  );
}
