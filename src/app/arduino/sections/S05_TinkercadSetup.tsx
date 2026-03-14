const STEPS = [
  {
    num: 1,
    cmd: "open browser",
    detail: "Navigate to tinkercad.com/circuits",
  },
  {
    num: 2,
    cmd: "create circuit",
    detail: 'Click "Create new Circuit" (free Autodesk account needed)',
  },
  {
    num: 3,
    cmd: "explore canvas",
    detail: "Blank canvas with component panel on the right",
  },
  {
    num: 4,
    cmd: "add arduino",
    detail: 'Search "Arduino Uno R3" → drag onto canvas',
  },
  {
    num: 5,
    cmd: "add sensor",
    detail: 'Search "Ultrasonic" → drag HC-SR04 onto canvas',
  },
  {
    num: 6,
    cmd: "ready",
    detail: "Ready to wire!",
  },
] as const;

export default function S05_TinkercadSetup() {
  return (
    <section id="section-4" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">
          [05/15]
        </p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-8">
          Your Workspace — Tinkercad Setup
        </h2>

        {/* Steps styled as terminal commands */}
        <div className="rounded-lg border border-border bg-surface-2 p-6 mb-8">
          <p className="font-mono text-xs text-foreground/30 mb-4">
            $ setup-workspace
          </p>
          <div className="space-y-4">
            {STEPS.map((step) => (
              <div key={step.num} className="flex items-start gap-3">
                <span className="font-mono text-xs text-neon-purple/60 mt-0.5 flex-shrink-0">
                  {String(step.num).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-sm text-neon-green">
                    <span className="text-foreground/30">$ </span>
                    {step.cmd}
                  </p>
                  <p className="text-xs text-foreground/50 mt-1">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout — sensor difference warning */}
        <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4 space-y-2 mb-6">
          <p className="font-mono text-sm font-bold text-yellow-400">
            ⚠️ Heads up: Tinkercad&apos;s sensor looks different
          </p>
          <p className="text-sm text-foreground/50">
            The real SunFounder kit has a <span className="text-neon-cyan">4-pin HC-SR04</span> (VCC, TRIG, ECHO, GND).
            Tinkercad&apos;s ultrasonic sensor has <span className="text-neon-green">3 pins</span> (VCC, GND, SIG) — it combines
            trigger and echo into one pin. The wiring is simpler in Tinkercad, and the code is slightly different.
            We&apos;ll call out the differences so you can use either.
          </p>
        </div>

        {/* Callout box — cyan border */}
        <div className="rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-5 box-glow-cyan mb-8">
          <p className="text-sm text-foreground/60 leading-relaxed">
            Tinkercad simulates real Arduino hardware in your browser. The code
            you write here is the{" "}
            <span className="text-neon-cyan font-semibold">SAME</span> code
            that runs on a real Arduino. When we rotate to the physical kits,
            you&apos;ll upload your exact code.
          </p>
        </div>

        {/* Starter template link */}
        <div className="rounded-lg border border-border bg-surface p-5 text-center">
          <p className="font-mono text-xs text-foreground/30 mb-2">
            Starter template
          </p>
          <p className="font-mono text-sm text-neon-cyan">
            <a
              href="#"
              className="underline underline-offset-4 hover:text-neon-green transition-colors"
            >
              [TINKERCAD_LINK]
            </a>
          </p>
          <p className="text-xs text-foreground/40 mt-2">
            Copy and Tinker to start from a working base
          </p>
        </div>
      </div>
    </section>
  );
}
