import { FormEvent, useState } from "react";

type InputBoxProps = {
  onSend: (message: string) => Promise<void>;
  disabled: boolean;
};

export default function InputBox({ onSend, disabled }: InputBoxProps) {
  const [value, setValue] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = value.trim();
    if (!trimmed || disabled) {
      return;
    }

    setValue("");
    await onSend(trimmed);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-gray-200 bg-white px-4 py-4 sm:px-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Type your message..."
          className="min-h-12 flex-1 rounded-md border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-500"
        />
        <button
          type="submit"
          disabled={disabled}
          className="min-h-12 rounded-md bg-gray-900 px-5 text-sm font-medium text-white hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {disabled ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}
