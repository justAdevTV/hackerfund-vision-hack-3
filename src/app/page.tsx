import Link from "next/link";

function HeroSection() {
  return (
    <section className="slide flex items-center justify-center text-center">
      <div className="mx-auto max-w-4xl space-y-8">
        <p className="font-mono text-sm tracking-widest text-neon-green/70 uppercase">
          // initializing workshop...
        </p>
        <h1 className="glow-green font-mono text-5xl font-bold leading-tight tracking-tight text-neon-green md:text-7xl">
          HackerFund
          <br />
          <span className="text-foreground">Workshop</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-foreground/60 leading-relaxed">
          Hands-on hardware hacking. Learn to solder, program Arduino
          microcontrollers, and build real circuits — from zero to prototype.
        </p>
        <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
          <Link
            href="/soldering"
            className="box-glow-cyan group flex items-center gap-3 rounded-lg border border-neon-cyan/30 bg-surface px-8 py-4 font-mono text-sm text-neon-cyan transition-all hover:border-neon-cyan/60 hover:bg-surface-2"
          >
            <SolderIcon />
            <span>01_soldering</span>
            <span className="text-foreground/30 transition-colors group-hover:text-neon-cyan">
              →
            </span>
          </Link>
          <Link
            href="/arduino"
            className="box-glow-purple group flex items-center gap-3 rounded-lg border border-neon-purple/30 bg-surface px-8 py-4 font-mono text-sm text-neon-purple transition-all hover:border-neon-purple/60 hover:bg-surface-2"
          >
            <ChipIcon />
            <span>02_arduino</span>
            <span className="text-foreground/30 transition-colors group-hover:text-neon-purple">
              →
            </span>
          </Link>
        </div>
        <p className="font-mono text-xs text-foreground/20 pt-8">
          {">"} scroll down for overview ↓
        </p>
      </div>
    </section>
  );
}

function OverviewSection() {
  const workshops = [
    {
      id: "01",
      title: "Soldering",
      description:
        "Master the fundamentals of soldering — from tinning tips to through-hole and surface mount techniques. Build your first circuit board.",
      topics: [
        "Safety & equipment",
        "Tinning & technique",
        "Through-hole soldering",
        "SMD basics",
        "Troubleshooting",
      ],
      color: "cyan" as const,
      href: "/soldering",
    },
    {
      id: "02",
      title: "Arduino",
      description:
        "Build a gesture controller with an ultrasonic sensor. Wave your hand to control LEDs, buzzers, and an LCD display — all in your browser.",
      topics: [
        "Tinkercad setup",
        "Ultrasonic sensor",
        "LED & buzzer control",
        "Serial Monitor",
        "Gesture controller project",
      ],
      color: "purple" as const,
      href: "/arduino",
    },
  ];

  const colorMap = {
    cyan: {
      border: "border-neon-cyan/20 hover:border-neon-cyan/40",
      glow: "box-glow-cyan",
      text: "text-neon-cyan",
      dot: "bg-neon-cyan",
      id: "text-neon-cyan/40",
    },
    purple: {
      border: "border-neon-purple/20 hover:border-neon-purple/40",
      glow: "box-glow-purple",
      text: "text-neon-purple",
      dot: "bg-neon-purple",
      id: "text-neon-purple/40",
    },
  };

  return (
    <section className="slide">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-2">
          <p className="font-mono text-xs text-neon-green/50 tracking-widest">
            // workshop modules
          </p>
          <h2 className="font-mono text-3xl font-bold text-foreground">
            What You&apos;ll Learn
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {workshops.map((workshop) => {
            const c = colorMap[workshop.color];
            return (
              <Link
                key={workshop.id}
                href={workshop.href}
                className={`group rounded-xl border ${c.border} ${c.glow} bg-surface p-8 transition-all hover:bg-surface-2`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-sm ${c.id}`}>
                      [{workshop.id}]
                    </span>
                    <span className="font-mono text-xs text-foreground/30 transition-colors group-hover:text-foreground/60">
                      view slides →
                    </span>
                  </div>
                  <h3 className={`font-mono text-2xl font-bold ${c.text}`}>
                    {workshop.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {workshop.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {workshop.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 font-mono text-xs text-foreground/40"
                      >
                        <span
                          className={`h-1 w-1 rounded-full ${c.dot}`}
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono text-xs text-foreground/30">
          {">"} HackerFund Workshop — built for makers, by makers
        </p>
        <p className="font-mono text-xs text-foreground/20 mt-2">
          © {new Date().getFullYear()} HackerFund
        </p>
      </div>
    </footer>
  );
}

function SolderIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4l6 6-8 8-6-6z" />
      <path d="M4 20l4-4" />
      <path d="M20 4l-2 2" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="6" width="12" height="12" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <FooterSection />
    </>
  );
}
