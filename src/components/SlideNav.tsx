"use client";

import { useState, useEffect } from "react";

interface SlideNavProps {
  slideCount: number;
  color: "cyan" | "purple";
}

export default function SlideNav({ slideCount, color }: SlideNavProps) {
  const [active, setActive] = useState(0);

  const colorClass =
    color === "cyan" ? "bg-neon-cyan" : "bg-neon-purple";
  const dimClass =
    color === "cyan" ? "bg-neon-cyan/20" : "bg-neon-purple/20";

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const idx = Math.round(window.scrollY / vh);
      setActive(Math.min(idx, slideCount - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slideCount]);

  return (
    <div className="fixed right-6 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2">
      {Array.from({ length: slideCount }).map((_, i) => (
        <button
          key={i}
          onClick={() => {
            document
              .getElementById(`slide-${i}`)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`h-2 w-2 rounded-full transition-all ${
            i === active ? `${colorClass} scale-150` : dimClass
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
