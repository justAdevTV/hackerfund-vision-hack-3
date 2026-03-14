"use client";

interface ModeToggleProps {
  mode: "present" | "participate";
  onToggle: () => void;
}

export default function ModeToggle({ mode, onToggle }: ModeToggleProps) {
  return (
    <button
      data-mode-toggle
      onClick={onToggle}
      aria-label={
        mode === "present"
          ? "Switch to Participant Mode"
          : "Switch to Presenter Mode"
      }
      title={
        mode === "present"
          ? "Switch to Participant Mode"
          : "Switch to Presenter Mode"
      }
      className="fixed bottom-6 right-6 z-30 rounded-lg border border-border bg-surface/90 backdrop-blur-sm px-3 py-2 font-mono text-xs text-foreground/50 hover:text-neon-purple hover:border-neon-purple/30 transition-all"
    >
      {mode === "present" ? (
        /* Monitor/screen icon */
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="2" width="14" height="9" rx="1" />
          <line x1="8" y1="11" x2="8" y2="14" />
          <line x1="5" y1="14" x2="11" y2="14" />
        </svg>
      ) : (
        /* Scroll/list icon */
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="4" x2="13" y2="4" />
          <line x1="3" y1="8" x2="13" y2="8" />
          <line x1="3" y1="12" x2="10" y2="12" />
        </svg>
      )}
    </button>
  );
}
