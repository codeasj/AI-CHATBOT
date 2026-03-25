import Message from "./Message";
import type { ChatMessage } from "../App";

type ChatBoxProps = {
  messages: ChatMessage[];
  isLoading: boolean;
};

export default function ChatBox({ messages, isLoading }: ChatBoxProps) {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-4 py-6 sm:px-6">
      {messages.map((message) => (
        <Message key={message.id} role={message.role} content={message.content} />
      ))}

      {isLoading ? (
        <div className="w-fit rounded-3xl rounded-bl-md bg-white px-4 py-3 text-sm text-ink/60 shadow-sm">
          Thinking...
        </div>
      ) : null}
    </div>
  );
}
