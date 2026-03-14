"use client";

import { useRef, useState } from "react";

interface CodeBlockProps {
  children: React.ReactNode;
  filename?: string;
  className?: string;
}

export default function CodeBlock({
  children,
  filename,
  className,
}: CodeBlockProps) {
  const preRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!preRef.current) return;
    const text = preRef.current.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group ${className ?? ""}`}>
      {filename && (
        <div className="flex items-center gap-2 rounded-t-lg border border-b-0 border-[#222] bg-[#0d0d0d] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-neon-purple/40" />
          <span className="font-mono text-xs text-foreground/40">
            {filename}
          </span>
        </div>
      )}
      <div
        className={`code-block relative ${filename ? "rounded-t-none" : ""}`}
      >
        <button
          aria-label="Copy code to clipboard"
          onClick={handleCopy}
          className="absolute right-3 top-3 rounded border border-[#333] bg-[#1a1a1a] px-2.5 py-1 font-mono text-xs text-foreground/40 opacity-0 transition-all hover:border-neon-cyan/40 hover:text-neon-cyan group-hover:opacity-100"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <div ref={preRef}>{children}</div>
      </div>
    </div>
  );
}
