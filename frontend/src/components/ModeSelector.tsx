export type ChatMode = "code" | "debug" | "explain" | "plan";

type ModeSelectorProps = {
  mode: ChatMode;
  onChange: (mode: ChatMode) => void;
};

const modes: Array<{ value: ChatMode; label: string }> = [
  { value: "explain", label: "Explain" },
  { value: "code", label: "Code" },
  { value: "debug", label: "Debug" },
  { value: "plan", label: "Plan" },
];

export default function ModeSelector({ mode, onChange }: ModeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {modes.map((item) => {
        const active = item.value === mode;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={[
              "rounded-full border px-4 py-2 text-sm transition",
              active
                ? "border-ember bg-ember text-white"
                : "border-ink/10 bg-white/80 text-ink hover:border-ember/40",
            ].join(" ")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
