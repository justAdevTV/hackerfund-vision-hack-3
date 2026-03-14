"use client";

interface PresenterControlsProps {
  totalSections: number;
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export default function PresenterControls({
  totalSections,
  activeIndex,
}: PresenterControlsProps) {
  const progress =
    totalSections > 1 ? (activeIndex / (totalSections - 1)) * 100 : 0;

  return (
    <div data-presenter-controls className="fixed top-14 left-0 right-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border/50">
      {/* Progress line */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-neon-purple transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Controls bar */}
      <div className="h-[30px] flex items-center justify-between px-4">
        <span className="font-mono text-xs text-foreground/30">
          [{String(activeIndex + 1).padStart(2, "0")}/
          {String(totalSections).padStart(2, "0")}]
        </span>
        <span className="font-mono text-xs text-foreground/15">
          &larr; &rarr; to navigate
        </span>
      </div>
    </div>
  );
}
