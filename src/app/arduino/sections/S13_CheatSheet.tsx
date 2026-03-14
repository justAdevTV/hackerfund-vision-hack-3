"use client";

const CODE_BASICS = [
  {
    concept: "Set a pin mode",
    code: "pinMode(7, OUTPUT);",
    desc: "Tells Arduino pin 7 will send signals",
  },
  {
    concept: "Turn pin on",
    code: "digitalWrite(7, HIGH);",
    desc: "Sends 5V to pin 7",
  },
  {
    concept: "Turn pin off",
    code: "digitalWrite(7, LOW);",
    desc: "Sends 0V to pin 7",
  },
  {
    concept: "Read a pin",
    code: "digitalRead(3)",
    desc: "Returns HIGH or LOW from pin 3",
  },
  {
    concept: "Analog read",
    code: "analogRead(A0)",
    desc: "Returns 0\u20131023 from analog pin",
  },
  {
    concept: "Print to monitor",
    code: 'Serial.println("hi");',
    desc: 'Shows "hi" in Serial Monitor',
  },
  {
    concept: "Wait",
    code: "delay(1000);",
    desc: "Pause for 1000 ms (1 second)",
  },
  {
    concept: "Play a tone",
    code: "tone(6, 440);",
    desc: "Play 440 Hz on pin 6",
  },
  {
    concept: "Stop tone",
    code: "noTone(6);",
    desc: "Silence pin 6",
  },
  {
    concept: "Map a range",
    code: "map(val, 0, 100, 0, 255)",
    desc: "Scale val from 0\u2013100 to 0\u2013255",
  },
] as const;

const COMMON_ERRORS = [
  {
    error: "expected ';'",
    fix: "Forgot a semicolon at end of line",
  },
  {
    error: "was not declared in this scope",
    fix: "Typo in variable name, or forgot to declare it",
  },
  {
    error: "'Serial' was not declared",
    fix: "Add Serial.begin(9600); in setup()",
  },
  {
    error: "Upload fails",
    fix: "Check right board and port selected in Tools menu",
  },
] as const;

function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-lg border border-neon-purple/30 bg-neon-purple/10 px-4 py-2 font-mono text-xs text-neon-purple transition-colors hover:bg-neon-purple/20 hover:border-neon-purple/50"
    >
      Print This Page
    </button>
  );
}

export default function S13_CheatSheet() {
  return (
    <section id="section-13" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">[14/15]</p>

        <div className="flex items-center justify-between mb-2">
          <h2 className="font-mono text-3xl font-bold text-neon-purple">
            Cheat Sheet
          </h2>
          <PrintButton />
        </div>
        <p className="text-sm text-foreground/40 mb-10">
          Quick reference &mdash; keep this open while you build.
        </p>

        <div className="printable-area space-y-10">
          {/* Arduino Code Basics */}
          <div>
            <h3 className="font-mono text-sm font-bold text-neon-cyan mb-4">
              Arduino Code Basics
            </h3>
            <div className="rounded-lg border border-border overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-[1fr_1.2fr_1.4fr] bg-surface-2 border-b border-border">
                <div className="px-4 py-3 font-mono text-xs font-bold text-foreground/50">
                  Concept
                </div>
                <div className="px-4 py-3 font-mono text-xs font-bold text-foreground/50">
                  Code
                </div>
                <div className="px-4 py-3 font-mono text-xs font-bold text-foreground/50">
                  What It Does
                </div>
              </div>
              {/* Table rows */}
              {CODE_BASICS.map((row, i) => (
                <div
                  key={row.concept}
                  className={`grid grid-cols-[1fr_1.2fr_1.4fr] ${
                    i < CODE_BASICS.length - 1 ? "border-b border-border" : ""
                  } ${i % 2 === 0 ? "bg-surface" : "bg-[#0d0d0d]"}`}
                >
                  <div className="px-4 py-3 text-xs text-foreground/60">
                    {row.concept}
                  </div>
                  <div className="px-4 py-3">
                    <code className="font-mono text-xs text-neon-cyan">
                      {row.code}
                    </code>
                  </div>
                  <div className="px-4 py-3 text-xs text-foreground/50">
                    {row.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Errors */}
          <div>
            <h3 className="font-mono text-sm font-bold text-red-400/80 mb-4">
              Common Errors
            </h3>
            <div className="rounded-lg border border-border overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-[1fr_1.5fr] bg-surface-2 border-b border-border">
                <div className="px-4 py-3 font-mono text-xs font-bold text-foreground/50">
                  Error
                </div>
                <div className="px-4 py-3 font-mono text-xs font-bold text-foreground/50">
                  Fix
                </div>
              </div>
              {/* Table rows */}
              {COMMON_ERRORS.map((row, i) => (
                <div
                  key={row.error}
                  className={`grid grid-cols-[1fr_1.5fr] ${
                    i < COMMON_ERRORS.length - 1
                      ? "border-b border-border"
                      : ""
                  } ${i % 2 === 0 ? "bg-surface" : "bg-[#0d0d0d]"}`}
                >
                  <div className="px-4 py-3">
                    <code className="font-mono text-xs text-red-400/70">
                      {row.error}
                    </code>
                  </div>
                  <div className="px-4 py-3 text-xs text-foreground/50">
                    {row.fix}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick structure reminder */}
          <div className="rounded-lg border border-neon-green/20 bg-neon-green/5 p-5">
            <p className="font-mono text-xs text-neon-green mb-2 font-bold">
              Arduino Sketch Structure
            </p>
            <pre className="font-mono text-xs text-foreground/50 leading-relaxed">
{`void setup() {
  // Runs ONCE at power-on
  Serial.begin(9600);
}

void loop() {
  // Runs FOREVER after setup
  // Your main code here
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
