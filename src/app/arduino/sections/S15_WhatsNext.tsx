const RESOURCES = [
  {
    name: "Tinkercad Circuits",
    url: "https://www.tinkercad.com/circuits",
    desc: "Free online Arduino simulator \u2014 no hardware needed",
  },
  {
    name: "Arduino Official Tutorials",
    url: "https://docs.arduino.cc/built-in-examples/",
    desc: "Built-in examples and official reference docs",
  },
  {
    name: "SunFounder Kit Tutorials",
    url: "https://docs.sunfounder.com/",
    desc: "Step-by-step guides for every sensor in your kit",
  },
  {
    name: "r/arduino",
    url: "https://www.reddit.com/r/arduino/",
    desc: "Active community for help, project ideas, and show-and-tell",
  },
  {
    name: "Arduino Project Hub",
    url: "https://projecthub.arduino.cc/",
    desc: "Hundreds of community projects with full tutorials",
  },
] as const;

export default function S14_WhatsNext() {
  return (
    <section id="section-15" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">[16/16]</p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-2">
          What&apos;s Next &mdash; Keep Building
        </h2>
        <p className="text-sm text-foreground/40 mb-10">
          Resources to keep the momentum going after today.
        </p>

        {/* Resource link cards */}
        <div className="space-y-3 mb-10">
          {RESOURCES.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-border bg-surface p-5 transition-colors hover:border-neon-purple/40 hover:bg-surface-2"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-mono text-sm font-bold text-neon-purple group-hover:text-neon-purple/90">
                  {r.name}
                </h3>
                <span className="font-mono text-xs text-neon-purple/50 group-hover:text-neon-purple/80 transition-colors">
                  &rarr;
                </span>
              </div>
              <p className="text-xs text-foreground/50 mb-2">{r.desc}</p>
              <p className="font-mono text-xs text-foreground/25 truncate">
                {r.url}
              </p>
            </a>
          ))}
        </div>

        {/* Kit callout */}
        <div className="rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-5 mb-10">
          <h4 className="font-mono text-sm font-bold text-neon-cyan mb-2">
            Get Your Own Kit
          </h4>
          <p className="text-sm text-foreground/50 leading-relaxed">
            The SunFounder Ultimate Sensor Kit is ~$50&ndash;60 on Amazon and
            comes with everything you used today plus 20+ more sensors. It&apos;s
            the fastest way to keep experimenting at home.
          </p>
        </div>

        {/* Closing message */}
        <div className="mt-12 rounded-lg border border-neon-purple/20 bg-neon-purple/5 p-10 text-center box-glow-purple">
          <p className="font-mono text-lg md:text-xl font-bold text-neon-purple leading-relaxed max-w-2xl mx-auto">
            You just built a gesture controller. You wrote C++ that talks to
            hardware. That&apos;s embedded systems engineering &mdash; and you
            did it in an hour.
          </p>
          <p className="font-mono text-base text-neon-purple/70 mt-4">
            Now imagine what you could build with a weekend.
          </p>
          <p className="font-mono text-xs text-foreground/20 mt-8">
            // end of workshop
          </p>
        </div>
      </div>
    </section>
  );
}
