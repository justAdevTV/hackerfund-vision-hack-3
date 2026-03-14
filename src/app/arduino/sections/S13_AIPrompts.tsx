"use client";

import { useRef, useState } from "react";

function PromptCard({
  label,
  emoji,
  children,
}: {
  label: string;
  emoji: string;
  children: string;
}) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!ref.current) return;
    await navigator.clipboard.writeText(ref.current.textContent ?? "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group rounded-xl border border-neon-purple/15 bg-surface p-6 space-y-4 transition-all hover:border-neon-purple/30">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-sm font-bold text-neon-purple flex items-center gap-2">
          <span>{emoji}</span> {label}
        </h3>
        <button
          aria-label={`Copy ${label} prompt to clipboard`}
          onClick={handleCopy}
          className="rounded border border-[#333] bg-[#1a1a1a] px-3 py-1.5 font-mono text-xs text-foreground/40 transition-all hover:border-neon-purple/40 hover:text-neon-purple"
        >
          {copied ? "Copied!" : "Copy prompt"}
        </button>
      </div>
      <pre
        ref={ref}
        className="whitespace-pre-wrap text-sm text-foreground/60 leading-relaxed font-mono overflow-x-auto"
      >
        {children}
      </pre>
    </div>
  );
}

function Placeholder({ children }: { children: string }) {
  return (
    <span className="text-neon-cyan/70 italic">{children}</span>
  );
}

export default function S13_AIPrompts() {
  return (
    <section id="section-13" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">
          [14/16]
        </p>
        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-4">
          What Should I Build Next?
        </h2>
        <p className="text-foreground/50 leading-relaxed mb-8 max-w-2xl">
          You&apos;ve got a working gesture controller. Now use AI to help you
          take it further. Copy one of the prompts below, paste it into{" "}
          <span className="text-neon-green">any AI chatbot</span> (Claude,
          ChatGPT, Gemini — they all work), and try building what it suggests.
          If the code doesn&apos;t work on the first try, paste the error back
          in and ask it to fix it. That&apos;s how real engineers use these
          tools.
        </p>

        <div className="space-y-6">
          <PromptCard label="Add something new to your build" emoji="🚀">
            {`I'm a beginner working in Tinkercad Circuits (browser-based Arduino simulator).

Here's what I currently have wired up on an Arduino Uno:
- Ultrasonic distance sensor (3-pin) on pin 7
- LED on pin 4 with a 220 ohm resistor
- Piezo buzzer on pin 3

These components are also available in Tinkercad that I haven't used yet:
- Servo motor
- Potentiometer
- Temperature sensor (TMP36)
- Photoresistor (light sensor)
- RGB LED
- DC motor
- Push buttons
- Second ultrasonic sensor

Give me 3 simple project ideas where I add just ONE new component to my existing setup. For each idea tell me:
1. What component to add and exactly which pins to wire it to
2. What the project does in one sentence
3. The complete Arduino code I can paste into Tinkercad (use my existing pin assignments: sensor on 7, LED on 4, buzzer on 3)

Keep it beginner-friendly. I have about 10 minutes.`}
          </PromptCard>

          <PromptCard label="Something not working? Paste this." emoji="🔧">
            {`I'm a beginner using Tinkercad Circuits with an Arduino Uno.

Here's my code:
[PASTE YOUR FULL CODE HERE]

Here's what's happening:
[DESCRIBE THE PROBLEM - what you expected vs what actually happened]

My wiring:
- Ultrasonic distance sensor (3-pin) SIG on pin 7
- LED on pin 4 with 220 ohm resistor
- Piezo buzzer on pin 3
[ADD ANY OTHER COMPONENTS YOU WIRED]

What's wrong and how do I fix it? Explain the fix so I understand what went wrong.`}
          </PromptCard>

          <PromptCard
            label="Understand what your code actually does"
            emoji="🧠"
          >
            {`I'm a beginner learning Arduino. Can you explain this code to me line by line in plain English? Don't skip anything — I want to understand what every line does and why it's there.

[PASTE YOUR CODE HERE]`}
          </PromptCard>

          <PromptCard label="Keep building after today" emoji="🏗️">
            {`I just finished a 1-hour Arduino workshop where I built a gesture controller using an ultrasonic distance sensor, an LED, and a buzzer. I'm a beginner but I now understand:
- Basic Arduino wiring on a breadboard
- Writing C++ in the Arduino IDE
- Reading sensor input and triggering outputs with if/else logic
- Using tone() for sound and digitalWrite() for LEDs

I have a SunFounder Ultimate Sensor Kit at home with an Arduino Uno R4 Minima. The kit includes: ultrasonic sensor, servo motor, LCD1602 display, IR remote + receiver, joystick, temperature sensor, photoresistor, potentiometer, RGB LED, relay module, buzzer, buttons, DC motor, stepper motor, and a bunch of LEDs and resistors.

Give me 5 weekend project ideas ranked from easiest to hardest. For each one, tell me:
1. What it does
2. Which components from my kit I'd use
3. How long it would realistically take a beginner
4. A quick description of the approach (not full code, just the concept)`}
          </PromptCard>
        </div>

        <div className="mt-8 rounded-lg border border-foreground/10 bg-surface-2 p-4">
          <p className="font-mono text-xs text-foreground/30">
            {">"} Tip: The bracket placeholders like{" "}
            <Placeholder>[PASTE YOUR CODE HERE]</Placeholder> are meant to be
            replaced with your actual code or description.
          </p>
        </div>
      </div>
    </section>
  );
}
