const SAFETY_RULES = [
  {
    icon: "⚡",
    title: "Don't wire while powered on",
    desc: "Always unplug USB before changing wires on real hardware. In Tinkercad, stop the simulation first.",
  },
  {
    icon: "🚫",
    title: "Don't force components",
    desc: "If it doesn't fit, it's the wrong spot. Pins bend and break easily — be gentle.",
  },
  {
    icon: "🔌",
    title: "USB ports aren't unlimited power",
    desc: "Don't connect motors directly to the Arduino — you'll fry the board or your laptop's USB port. Use a driver board.",
  },
  {
    icon: "⚠️",
    title: "Capacitors hold charge",
    desc: "Don't touch big caps with bare hands after the board has been powered. They can bite.",
  },
  {
    icon: "🔥",
    title: "If something smells hot or looks wrong",
    desc: "Unplug immediately. Don't debug while it's smoking. Call the instructor over.",
  },
] as const;

export default function S04_Safety() {
  return (
    <section id="section-3" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">
          [04/16]
        </p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-2">
          Safety
        </h2>
        <p className="text-sm text-foreground/40 mb-8">
          Quick rules so nobody fries a board (or a finger).
        </p>

        <div className="space-y-4 mb-10">
          {SAFETY_RULES.map((rule) => (
            <div
              key={rule.title}
              className="rounded-lg border border-border bg-surface p-5 flex items-start gap-4"
            >
              <span className="text-3xl flex-shrink-0">{rule.icon}</span>
              <div className="space-y-1">
                <h3 className="font-mono text-sm font-bold text-foreground/80">
                  {rule.title}
                </h3>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing callout */}
        <div className="rounded-lg border border-neon-green/20 bg-neon-green/5 p-5 box-glow-green">
          <p className="text-sm text-foreground/60 leading-relaxed">
            Electronics are safe when you respect them.{" "}
            <span className="text-neon-green font-semibold">
              None of this is dangerous if you follow these rules.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
