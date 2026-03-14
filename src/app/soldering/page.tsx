import type { Metadata } from "next";
import SlideNav from "@/components/SlideNav";

export const metadata: Metadata = {
  title: "Soldering Workshop — Hacker Fund",
  description: "Learn to solder — safety, technique, and hands-on practice",
};

function Slide({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="slide px-6">
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}

function SlideLabel({ num, total }: { num: number; total: number }) {
  return (
    <p className="font-mono text-xs text-neon-cyan/30 mb-6">
      [{String(num).padStart(2, "0")}/{String(total).padStart(2, "0")}]
    </p>
  );
}

const TOTAL = 8;

export default function SolderingPage() {
  return (
    <div>
      <SlideNav slideCount={TOTAL} color="cyan" />

      {/* Slide 0: Title */}
      <Slide id="slide-0">
        <SlideLabel num={1} total={TOTAL} />
        <p className="font-mono text-sm text-neon-cyan/50 tracking-widest mb-4">
          // workshop 01
        </p>
        <h1 className="glow-cyan font-mono text-5xl font-bold text-neon-cyan md:text-7xl">
          Soldering
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/50 leading-relaxed">
          From zero to your first solder joint. Safety, tools, technique, and
          hands-on practice with through-hole components.
        </p>
        <p className="mt-12 font-mono text-xs text-foreground/20">
          ↓ scroll to begin
        </p>
      </Slide>

      {/* Slide 1: Safety First */}
      <Slide id="slide-1">
        <SlideLabel num={2} total={TOTAL} />
        <h2 className="font-mono text-3xl font-bold text-neon-cyan mb-8">
          Safety First
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: "⚠️",
              title: "Eye Protection",
              desc: "Always wear safety glasses. Solder can splash and flux can pop.",
            },
            {
              icon: "🌬️",
              title: "Ventilation",
              desc: "Use a fume extractor or work near a fan. Solder fumes are toxic over time.",
            },
            {
              icon: "🔥",
              title: "Heat Awareness",
              desc: "Soldering irons reach 350°C+. Never touch the tip. Use a stand.",
            },
            {
              icon: "🧤",
              title: "Clean Hands",
              desc: "Wash hands after soldering. Lead-based solder requires hand hygiene.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-neon-cyan/10 bg-surface p-6 space-y-2"
            >
              <p className="text-2xl">{item.icon}</p>
              <h3 className="font-mono text-sm font-bold text-neon-cyan">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* Slide 2: Your Tools */}
      <Slide id="slide-2">
        <SlideLabel num={3} total={TOTAL} />
        <h2 className="font-mono text-3xl font-bold text-neon-cyan mb-8">
          Your Tools
        </h2>
        <div className="space-y-4">
          {[
            {
              name: "Soldering Iron",
              spec: "Temperature-controlled, 40W+",
              note: "Chisel tip recommended for beginners",
            },
            {
              name: "Solder Wire",
              spec: "60/40 or 63/37 tin-lead, 0.8mm",
              note: "Lead-free (SAC305) available but harder to work with",
            },
            {
              name: "Flux",
              spec: "Rosin-core (built into solder wire)",
              note: "Extra flux pen helps with tricky joints",
            },
            {
              name: "Brass Sponge",
              spec: "For cleaning the iron tip",
              note: "Better than wet sponge — doesn't thermal shock the tip",
            },
            {
              name: "Third Hand / Helping Hands",
              spec: "Holds your workpiece steady",
              note: "PCB holders and vises also work great",
            },
          ].map((tool) => (
            <div
              key={tool.name}
              className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5"
            >
              <span className="font-mono text-neon-cyan/40 text-sm mt-1">
                $
              </span>
              <div>
                <h3 className="font-mono text-sm font-bold text-foreground">
                  {tool.name}{" "}
                  <span className="text-foreground/30 font-normal">
                    — {tool.spec}
                  </span>
                </h3>
                <p className="text-xs text-foreground/40 mt-1">{tool.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* Slide 3: The Technique */}
      <Slide id="slide-3">
        <SlideLabel num={4} total={TOTAL} />
        <h2 className="font-mono text-3xl font-bold text-neon-cyan mb-8">
          The Technique
        </h2>
        <div className="space-y-6">
          <div className="code-block">
            <p className="text-neon-cyan/60 mb-4">
              {"// step-by-step solder joint"}
            </p>
            <ol className="space-y-3 text-foreground/70">
              <li>
                <span className="text-neon-cyan">1.</span> Clean the tip — wipe
                on brass sponge, then tin with fresh solder
              </li>
              <li>
                <span className="text-neon-cyan">2.</span> Heat the joint — touch
                iron to BOTH the pad and the component lead
              </li>
              <li>
                <span className="text-neon-cyan">3.</span> Feed solder — apply
                solder to the joint (not the iron), let it flow
              </li>
              <li>
                <span className="text-neon-cyan">4.</span> Wait 1-2 seconds — let
                solder wick around the joint
              </li>
              <li>
                <span className="text-neon-cyan">5.</span> Remove solder wire
                first, then remove the iron
              </li>
              <li>
                <span className="text-neon-cyan">6.</span> Inspect — should be
                shiny, concave, and smooth (volcano shape)
              </li>
            </ol>
          </div>
          <div className="rounded-lg border border-neon-green/20 bg-neon-green/5 p-4">
            <p className="font-mono text-xs text-neon-green">
              {">"} KEY: Heat the joint, not the solder. Let the joint melt the
              solder — this ensures a proper bond.
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 4: Good vs Bad Joints */}
      <Slide id="slide-4">
        <SlideLabel num={5} total={TOTAL} />
        <h2 className="font-mono text-3xl font-bold text-neon-cyan mb-8">
          Good vs Bad Joints
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neon-green/20 bg-surface p-6 space-y-4">
            <h3 className="font-mono text-lg font-bold text-neon-green">
              ✓ Good Joint
            </h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>• Shiny, smooth surface</li>
              <li>• Concave fillet (volcano shape)</li>
              <li>• Solder wets both pad and lead</li>
              <li>• No gaps or voids</li>
              <li>• Component sits flush on PCB</li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-500/20 bg-surface p-6 space-y-4">
            <h3 className="font-mono text-lg font-bold text-red-400">
              ✗ Bad Joint
            </h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                • <span className="text-red-400/80">Cold joint</span> — dull,
                grainy, not heated enough
              </li>
              <li>
                • <span className="text-red-400/80">Too much solder</span> —
                blobby, can bridge pads
              </li>
              <li>
                • <span className="text-red-400/80">Insufficient solder</span>{" "}
                — barely covers the joint
              </li>
              <li>
                • <span className="text-red-400/80">Solder bridge</span> —
                connects adjacent pads
              </li>
              <li>
                • <span className="text-red-400/80">Lifted pad</span> — too
                much heat damaged the PCB
              </li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* Slide 5: Through-Hole Practice */}
      <Slide id="slide-5">
        <SlideLabel num={6} total={TOTAL} />
        <h2 className="font-mono text-3xl font-bold text-neon-cyan mb-8">
          Through-Hole Practice
        </h2>
        <div className="space-y-6">
          <p className="text-foreground/50 leading-relaxed">
            Through-hole components have wire leads that pass through holes in
            the PCB. This is the easiest type of soldering to learn.
          </p>
          <div className="code-block">
            <p className="text-neon-cyan/60 mb-4">
              {"// practice order (easy → hard)"}
            </p>
            <div className="space-y-2 text-foreground/70">
              <p>
                <span className="text-neon-green">LVL 1</span> → Resistors
                (flat, forgiving, non-polar)
              </p>
              <p>
                <span className="text-neon-green">LVL 2</span> → Ceramic
                capacitors (small, non-polar)
              </p>
              <p>
                <span className="text-neon-cyan">LVL 3</span> → LEDs (polar —
                watch the flat edge / long leg)
              </p>
              <p>
                <span className="text-neon-cyan">LVL 4</span> → Electrolytic
                capacitors (polar, heat sensitive)
              </p>
              <p>
                <span className="text-neon-purple">LVL 5</span> → IC sockets
                (many pins, alignment matters)
              </p>
              <p>
                <span className="text-neon-purple">LVL 6</span> → Headers &
                connectors (need to be straight)
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-4">
            <p className="font-mono text-xs text-neon-cyan">
              {">"} TIP: Always solder the shortest components first (resistors),
              then work up to tallest (capacitors, connectors).
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 6: Troubleshooting */}
      <Slide id="slide-6">
        <SlideLabel num={7} total={TOTAL} />
        <h2 className="font-mono text-3xl font-bold text-neon-cyan mb-8">
          Troubleshooting
        </h2>
        <div className="space-y-4">
          {[
            {
              problem: "Solder won't stick",
              fix: "Tip isn't tinned, joint not hot enough, or surface is oxidized. Clean and re-tin the tip. Add flux.",
            },
            {
              problem: "Solder balls up on the pad",
              fix: "Surface contamination. Clean with IPA and apply flux before soldering.",
            },
            {
              problem: "Joint looks dull / grainy",
              fix: "Cold joint — not heated enough. Reheat and add a touch of fresh solder.",
            },
            {
              problem: "Solder bridges between pads",
              fix: "Too much solder. Use solder wick or a desoldering pump to remove excess.",
            },
            {
              problem: "Component moves while soldering",
              fix: "Tack one pin first, adjust, then solder the rest. Use helping hands.",
            },
          ].map((item) => (
            <div
              key={item.problem}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <p className="font-mono text-sm font-bold text-red-400 mb-1">
                {">"} {item.problem}
              </p>
              <p className="text-sm text-foreground/50">{item.fix}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* Slide 7: Resources */}
      <Slide id="slide-7">
        <SlideLabel num={8} total={TOTAL} />
        <h2 className="font-mono text-3xl font-bold text-neon-cyan mb-8">
          Resources
        </h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-mono text-sm font-bold text-foreground/70">
              📖 Guides & References
            </h3>
            <ul className="space-y-2 text-sm text-foreground/50">
              <li className="flex items-center gap-2">
                <span className="text-neon-cyan">→</span>
                Adafruit Guide to Excellent Soldering
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-cyan">→</span>
                SparkFun — How to Solder
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-cyan">→</span>
                IPC-A-610 Acceptability Standards (reference)
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-mono text-sm font-bold text-foreground/70">
              🛒 Starter Kits
            </h3>
            <ul className="space-y-2 text-sm text-foreground/50">
              <li className="flex items-center gap-2">
                <span className="text-neon-cyan">→</span>
                Pinecil V2 Soldering Iron (USB-C powered)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-cyan">→</span>
                Practice PCB kits (search &quot;SMD practice board&quot;)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-cyan">→</span>
                63/37 leaded solder, 0.8mm (easiest for beginners)
              </li>
            </ul>
          </div>
          <div className="mt-8 rounded-lg border border-neon-green/20 bg-neon-green/5 p-6 text-center">
            <p className="font-mono text-neon-green text-lg">
              Now go solder something! 🔥
            </p>
            <p className="font-mono text-xs text-foreground/30 mt-2">
              // end of soldering workshop
            </p>
          </div>
        </div>
      </Slide>
    </div>
  );
}
