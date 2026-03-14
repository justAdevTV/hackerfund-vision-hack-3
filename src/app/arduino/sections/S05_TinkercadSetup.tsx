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

        <div className="space-y-4 mb-8">
          <div className="rounded-xl border border-neon-purple/15 bg-surface p-5 flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neon-purple/10 font-mono text-sm font-bold text-neon-purple">
              1
            </span>
            <div>
              <p className="font-mono text-sm font-bold text-foreground/80">
                🌐 Open your browser
              </p>
              <p className="text-sm text-foreground/50 mt-1">
                Go to{" "}
                <span className="text-neon-cyan font-semibold">
                  tinkercad.com/circuits
                </span>
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-neon-purple/15 bg-surface p-5 flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neon-purple/10 font-mono text-sm font-bold text-neon-purple">
              2
            </span>
            <div>
              <p className="font-mono text-sm font-bold text-foreground/80">
                🖱️ Click &quot;Create new Circuit&quot;
              </p>
              <p className="text-sm text-foreground/50 mt-1">
                You&apos;ll need a free Autodesk account — sign up with Google
                or email if you don&apos;t have one.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-neon-purple/15 bg-surface p-5 flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neon-purple/10 font-mono text-sm font-bold text-neon-purple">
              3
            </span>
            <div>
              <p className="font-mono text-sm font-bold text-foreground/80">
                👀 Explore the canvas
              </p>
              <p className="text-sm text-foreground/50 mt-1">
                You&apos;ll see a blank canvas. On the right side is the{" "}
                <span className="text-neon-green">component panel</span> —
                this is where you find all your parts.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-neon-purple/15 bg-surface p-5 flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neon-purple/10 font-mono text-sm font-bold text-neon-purple">
              4
            </span>
            <div>
              <p className="font-mono text-sm font-bold text-foreground/80">
                🔍 Search &quot;Arduino Uno R3&quot;
              </p>
              <p className="text-sm text-foreground/50 mt-1">
                Type it in the component panel search bar, then{" "}
                <span className="text-neon-green">click and drag</span> it
                onto the canvas.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-neon-purple/15 bg-surface p-5 flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neon-purple/10 font-mono text-sm font-bold text-neon-purple">
              5
            </span>
            <div>
              <p className="font-mono text-sm font-bold text-foreground/80">
                🔍 Search &quot;Ultrasonic&quot;
              </p>
              <p className="text-sm text-foreground/50 mt-1">
                Drag the distance sensor onto the canvas near the Arduino.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-neon-green/20 bg-neon-green/5 p-5 flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neon-green/10 font-mono text-sm font-bold text-neon-green">
              ✓
            </span>
            <div>
              <p className="font-mono text-sm font-bold text-neon-green">
                Ready to wire!
              </p>
              <p className="text-sm text-foreground/50 mt-1">
                Next section walks you through connecting them.
              </p>
            </div>
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

      </div>
    </section>
  );
}
