"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import Sidebar from "./Sidebar";
import PresenterControls from "./PresenterControls";
import ModeToggle from "./ModeToggle";

interface WorkshopShellProps {
  sections: Array<{ id: string; title: string; shortTitle: string }>;
  children: React.ReactNode;
}

export default function WorkshopShell({
  sections,
  children,
}: WorkshopShellProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const mode = searchParams.get("mode") === "present" ? "present" : "participate";
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleMode = useCallback(() => {
    if (mode === "present") {
      router.push("?");
    } else {
      router.push("?mode=present");
    }
  }, [mode, router]);

  const navigateTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, sections.length - 1));
      const el = document.getElementById(sections[clamped].id);
      el?.scrollIntoView({ behavior: "smooth" });
    },
    [sections]
  );

  // Scroll-snap class control
  useEffect(() => {
    if (mode === "present") {
      document.documentElement.classList.add("presenter-mode");
    } else {
      document.documentElement.classList.remove("presenter-mode");
    }
    return () => {
      document.documentElement.classList.remove("presenter-mode");
    };
  }, [mode]);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionEls = Array.from(
      document.querySelectorAll<HTMLElement>('section[id^="section-"]')
    );

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible entry
        let bestEntry: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!bestEntry ||
              entry.intersectionRatio > bestEntry.intersectionRatio)
          ) {
            bestEntry = entry;
          }
        }
        if (bestEntry) {
          const idx = sectionEls.indexOf(bestEntry.target as HTMLElement);
          if (idx !== -1) {
            setActiveIndex(idx);
          }
        }
      },
      { threshold: 0.3 }
    );

    sectionEls.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Keyboard navigation in presenter mode
  useEffect(() => {
    if (mode !== "present") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) => {
            const next = Math.min(prev + 1, sections.length - 1);
            navigateTo(next);
            return next;
          });
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) => {
            const next = Math.max(prev - 1, 0);
            navigateTo(next);
            return next;
          });
          break;
        case "Escape":
          toggleMode();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mode, sections.length, navigateTo, toggleMode]);

  return (
    <>
      {mode === "participate" ? (
        <>
          <Sidebar sections={sections} activeIndex={activeIndex} />
          <div className="md:ml-56">{children}</div>
        </>
      ) : (
        <>
          <PresenterControls
            totalSections={sections.length}
            activeIndex={activeIndex}
          />
          <div className="pt-8">{children}</div>
        </>
      )}
      <ModeToggle mode={mode} onToggle={toggleMode} />
    </>
  );
}
