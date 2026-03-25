import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

type MessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function Message({ role, content }: MessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[85%] rounded-lg px-4 py-3 text-sm leading-6 sm:max-w-[75%]",
          isUser
            ? "bg-gray-900 text-white"
            : "border border-gray-200 bg-gray-50 text-ink",
        ].join(" ")}
      >
        {isUser ? (
          content
        ) : (
          <ReactMarkdown
            components={{
              code(props) {
                const { children, className, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                const code = String(children).replace(/\n$/, "");

                if (!match) {
                  return (
                    <code
                      className="rounded bg-gray-200 px-1 py-0.5 text-[13px]"
                      {...rest}
                    >
                      {children}
                    </code>
                  );
                }

                return (
                  <SyntaxHighlighter
                    PreTag="div"
                    language={match[1]}
                    style={oneLight}
                    customStyle={{
                      margin: "12px 0",
                      borderRadius: "8px",
                      fontSize: "13px",
                      padding: "12px",
                    }}
                  >
                    {code}
                  </SyntaxHighlighter>
                );
              },
              p({ children }) {
                return <p className="mb-3 last:mb-0">{children}</p>;
              },
              ul({ children }) {
                return <ul className="mb-3 list-disc pl-5 last:mb-0">{children}</ul>;
              },
              ol({ children }) {
                return <ol className="mb-3 list-decimal pl-5 last:mb-0">{children}</ol>;
              },
              h1({ children }) {
                return <h1 className="mb-2 text-lg font-semibold">{children}</h1>;
              },
              h2({ children }) {
                return <h2 className="mb-2 text-base font-semibold">{children}</h2>;
              },
              h3({ children }) {
                return <h3 className="mb-2 text-sm font-semibold">{children}</h3>;
              },
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
