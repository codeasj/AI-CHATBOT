export type ChatProvider = "gemini" | "openai";

type ProviderSwitchProps = {
  provider: ChatProvider;
  onChange: (provider: ChatProvider) => void;
};

const providers: Array<{ value: ChatProvider; label: string }> = [
  { value: "gemini", label: "Gemini" },
  { value: "openai", label: "OpenAI" },
];

export default function ProviderSwitch({
  provider,
  onChange,
}: ProviderSwitchProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-600">Model:</span>
      <div className="flex rounded-md border border-gray-300 p-1">
        {providers.map((item) => {
          const active = item.value === provider;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              className={[
                "rounded px-3 py-1 text-sm",
                active ? "bg-gray-900 text-white" : "text-gray-700",
              ].join(" ")}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
