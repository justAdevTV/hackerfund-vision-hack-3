"use client";

import { useState } from "react";

interface SidebarProps {
  sections: Array<{ id: string; title: string; shortTitle: string }>;
  activeIndex: number;
}

export default function Sidebar({ sections, activeIndex }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navContent = (
    <nav className="py-4 px-3 space-y-1 overflow-y-auto h-full">
      {sections.map((section, i) => {
        const isActive = i === activeIndex;
        const isStretch = section.id === "section-9" || section.id === "section-10";
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`w-full text-left px-3 py-1.5 font-mono text-xs rounded transition-colors flex items-center gap-1 ${
              isActive
                ? "text-neon-purple border-l-2 border-neon-purple"
                : "text-foreground/40 hover:text-foreground/60 border-l-2 border-transparent"
            }`}
          >
            <span className="shrink-0">
              [{String(i + 1).padStart(2, "0")}]
            </span>
            <span className="truncate">{section.shortTitle}</span>
            {isStretch && (
              <span className="ml-auto text-foreground/20 text-[10px] shrink-0">
                stretch
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );

  return (
    <div data-sidebar>
      {/* Desktop sidebar */}
      <aside className="hidden md:block fixed left-0 top-14 w-56 h-[calc(100vh-3.5rem)] border-r border-border bg-background/90 backdrop-blur-md z-30">
        {navContent}
      </aside>

      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        className="md:hidden fixed bottom-6 left-6 z-30 rounded-lg border border-border bg-surface/90 backdrop-blur-sm px-3 py-2 font-mono text-xs text-foreground/50 hover:text-neon-purple hover:border-neon-purple/30 transition-all"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="2" y1="4" x2="14" y2="4" />
          <line x1="2" y1="8" x2="14" y2="8" />
          <line x1="2" y1="12" x2="14" y2="12" />
        </svg>
      </button>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="md:hidden fixed left-0 top-14 w-56 h-[calc(100vh-3.5rem)] border-r border-border bg-background/95 backdrop-blur-md z-40">
            {navContent}
          </aside>
        </>
      )}
    </div>
  );
}
