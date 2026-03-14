export default function S02_WhatIsArduino() {
  return (
    <section id="section-1" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">
          [02/16]
        </p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-8">
          What Even Is an Arduino?
        </h2>

        {/* Key points cards */}
        <div className="grid gap-4 md:grid-cols-2 mb-10">
          <div className="rounded-lg border border-neon-purple/10 bg-surface p-6 space-y-2">
            <h3 className="font-mono text-sm font-bold text-neon-cyan">
              Tiny Cheap Computer
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed">
              A $5–15 board that reads sensors and controls things. Buttons,
              lights, motors, buzzers — you wire them up, write code, and it
              does what you tell it.
            </p>
          </div>
          <div className="rounded-lg border border-neon-purple/10 bg-surface p-6 space-y-2">
            <h3 className="font-mono text-sm font-bold text-neon-cyan">
              Not a Raspberry Pi
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Unlike a Raspberry Pi, Arduino has no operating system. It runs{" "}
              <span className="text-neon-green">ONE</span> program over and
              over, thousands of times per second. That&apos;s its superpower.
            </p>
          </div>
        </div>

        {/* Arduino Uno Diagram */}
        <div className="rounded-lg border border-border bg-surface-2 p-6 mb-10">
          <p className="font-mono text-xs text-neon-purple/50 mb-4">
            // Arduino Uno R3 — labeled diagram
          </p>
          <div className="relative mx-auto max-w-md">
            {/* Main board outline */}
            <div className="rounded-lg border-2 border-neon-cyan/30 bg-surface p-4">
              {/* USB Port */}
              <div className="flex items-start justify-between mb-4">
                <div className="rounded border border-foreground/20 bg-surface-2 px-3 py-2">
                  <span className="font-mono text-xs text-foreground/60">
                    USB-B Port
                  </span>
                </div>
                <div className="rounded border border-foreground/20 bg-surface-2 px-3 py-2">
                  <span className="font-mono text-xs text-foreground/60">
                    Power Jack
                  </span>
                </div>
              </div>

              {/* Digital Pins row */}
              <div className="rounded border border-neon-green/20 bg-neon-green/5 p-3 mb-3">
                <p className="font-mono text-xs text-neon-green mb-1">
                  Digital Pins (0–13)
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: 14 }, (_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-sm border border-neon-green/30 bg-surface flex items-center justify-center"
                    >
                      <span className="font-mono text-[8px] text-neon-green/60">
                        {i}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MCU center */}
              <div className="flex items-center justify-center my-4">
                <div className="rounded border-2 border-neon-purple/30 bg-surface-2 px-6 py-4 text-center">
                  <p className="font-mono text-xs text-neon-purple">
                    ATmega328P
                  </p>
                  <p className="font-mono text-[10px] text-foreground/30 mt-1">
                    Microcontroller
                  </p>
                </div>
                <div className="ml-6 rounded border border-foreground/20 bg-surface-2 px-3 py-2">
                  <span className="font-mono text-xs text-foreground/40">
                    Reset
                  </span>
                </div>
              </div>

              {/* Analog Pins row */}
              <div className="rounded border border-neon-cyan/20 bg-neon-cyan/5 p-3">
                <p className="font-mono text-xs text-neon-cyan mb-1">
                  Analog Pins (A0–A5)
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div
                      key={i}
                      className="w-7 h-5 rounded-sm border border-neon-cyan/30 bg-surface flex items-center justify-center"
                    >
                      <span className="font-mono text-[8px] text-neon-cyan/60">
                        A{i}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing callout */}
        <div className="rounded-lg border border-neon-green/20 bg-neon-green/5 p-5 box-glow-green">
          <p className="text-sm text-foreground/60 leading-relaxed">
            The same chip in an Arduino is inside vending machines, elevators,
            car dashboards, and medical devices.{" "}
            <span className="text-neon-green font-semibold">
              This is real engineering.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
