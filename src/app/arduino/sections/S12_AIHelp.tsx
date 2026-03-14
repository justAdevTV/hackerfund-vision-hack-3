const RULES = [
  {
    number: 1,
    title: "Describe Your Hardware First",
    why: "AI doesn't know what you have connected. Without hardware context, it's guessing.",
    bad: "How do I make a buzzer change pitch?",
    good: `I have an Arduino Uno R4 Minima with an HC-SR04 ultrasonic sensor on pins 9 (TRIG) and 10 (ECHO), and a piezo buzzer on pin 6. I want the buzzer pitch to change based on how far my hand is from the sensor. Can you modify my existing code?`,
  },
  {
    number: 2,
    title: "Paste Your Current Code",
    why: `"Doesn't work" could mean 100 different things. The more context you give, the faster AI can help.`,
    bad: "My Arduino code doesn't work. Help.",
    good: `Here's my code [paste full code]. When I upload it, the Serial Monitor shows 'Distance: 0.00 cm' no matter where my hand is. The sensor is wired: VCC\u21925V, GND\u2192GND, TRIG\u2192Pin 9, ECHO\u2192Pin 10. What's wrong?`,
  },
  {
    number: 3,
    title: "Ask for Explanations, Not Just Code",
    why: "Copy-pasting without understanding means you can't debug when things break.",
    bad: "Write me code for a servo motor.",
    good: `I want to add a servo motor to my gesture controller project. Can you explain how servos work with Arduino, what library I need, and show me example code with comments explaining each line? I'm a beginner.`,
  },
  {
    number: 4,
    title: "Iterate \u2014 Don\u2019t Start Over",
    why: "Don't throw away working code. Fix the broken part, keep what works.",
    bad: "(starts a brand new chat, re-explains everything from scratch)",
    good: `The code you gave me compiles, but the servo jitters instead of moving smoothly. Here's exactly what happens: [describe]. How do I fix just the servo part without changing the sensor code that already works?`,
  },
  {
    number: 5,
    title: "Use AI to Generate Project Ideas",
    why: "AI is great at brainstorming when you tell it exactly what you have available.",
    bad: null,
    good: `I have a SunFounder Ultimate Sensor Kit with an Arduino Uno R4. The kit includes: ultrasonic sensor, LCD1602, servo, buzzer, LEDs, buttons, potentiometer, temperature sensor, IR remote, and a joystick. What are 5 cool beginner project ideas I could build in a weekend? Rank them by 'wow factor.'`,
  },
] as const;

export default function S12_AIHelp() {
  return (
    <section id="section-11" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">[12/15]</p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-2">
          Your AI Co-Pilot for Arduino Projects
        </h2>
        <p className="text-sm text-foreground/40 mb-10 max-w-2xl leading-relaxed">
          You now know enough to be dangerous. But what happens when you want to
          build something new and get stuck? Here&apos;s how to use AI tools
          (ChatGPT, Claude, Gemini &mdash; any of them) effectively for hardware
          projects.
        </p>

        <div className="space-y-10">
          {RULES.map((rule) => (
            <div
              key={rule.number}
              className="rounded-lg border border-border bg-surface p-6 space-y-5"
            >
              {/* Rule heading */}
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-lg font-bold text-neon-purple">
                  #{rule.number}
                </span>
                <h3 className="font-mono text-base font-bold text-foreground/80">
                  {rule.title}
                </h3>
              </div>

              {/* Bad prompt */}
              {rule.bad && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                  <p className="font-mono text-xs font-bold text-red-400/80 mb-2">
                    Bad Prompt
                  </p>
                  <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                    &ldquo;{rule.bad}&rdquo;
                  </p>
                </div>
              )}

              {/* Good prompt */}
              <div className="rounded-lg border border-neon-green/20 bg-neon-green/5 p-4">
                <p className="font-mono text-xs font-bold text-neon-green/80 mb-2">
                  Good Prompt
                </p>
                <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                  &ldquo;{rule.good}&rdquo;
                </p>
              </div>

              {/* Why it matters */}
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs text-neon-cyan shrink-0">
                  why:
                </span>
                <p className="text-xs text-foreground/50 leading-relaxed">
                  {rule.why}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing callout */}
        <div className="mt-10 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-5">
          <p className="font-mono text-xs text-neon-cyan leading-relaxed">
            {"> "}The pattern is simple:{" "}
            <span className="text-foreground/70 font-semibold">
              Hardware + Code + What You Tried + What Went Wrong
            </span>
            . Give AI that context and it becomes a surprisingly good electronics
            partner.
          </p>
        </div>
      </div>
    </section>
  );
}
