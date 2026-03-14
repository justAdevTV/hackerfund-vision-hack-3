const PROJECTS = [
  {
    icon: "🦾",
    title: "Open-Source Prosthetic Hands",
    desc: "3D-printed hands controlled by muscle sensors (EMG). $50 replaces $50,000 in developing countries.",
  },
  {
    icon: "🖨️",
    title: "RepRap 3D Printers",
    desc: "First consumer 3D printers ran on Arduino Mega. Every MakerBot and Prusa traces back to this.",
  },
  {
    icon: "✈️",
    title: "DIY Drones & Autonomous Boats",
    desc: "ArduPilot started as Arduino. Now flies real aircraft.",
  },
  {
    icon: "🎨",
    title: "Interactive Art Installations",
    desc: "Museums use Arduino for motion-reactive light/sound pieces.",
  },
  {
    icon: "🌱",
    title: "Smart Greenhouses",
    desc: "Automated watering, temp control, growth monitoring on a $10 board.",
  },
  {
    icon: "🎹",
    title: "MIDI Controllers & Synthesizers",
    desc: "Musicians build custom instruments, beat pads, effects.",
  },
  {
    icon: "🏠",
    title: "Home Automation",
    desc: "Before smart home devices, people built their own with Arduino + relays.",
  },
  {
    icon: "⌚",
    title: "Wearable Tech Prototypes",
    desc: "Fitness trackers, LED clothing, posture monitors — all prototyped on Arduino.",
  },
] as const;

export default function S03_CoolStuff() {
  return (
    <section id="section-2" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">
          [03/16]
        </p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-8">
          Cool Stuff People Built With Arduino
        </h2>

        <div className="grid gap-4 md:grid-cols-2 mb-10">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="rounded-lg border border-border bg-surface p-5 space-y-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{project.icon}</span>
                <h3 className="font-mono text-sm font-bold text-foreground/80">
                  {project.title}
                </h3>
              </div>
              <p className="text-xs text-foreground/50 leading-relaxed pl-10">
                {project.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing callout */}
        <div className="rounded-lg border border-neon-green/20 bg-neon-green/5 p-5 box-glow-green">
          <p className="text-sm text-foreground/60 leading-relaxed">
            Every one of these started as someone wiring a sensor to a board —{" "}
            <span className="text-neon-green font-semibold">
              exactly what you&apos;re about to do.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
