import CodeBlock from "@/components/CodeBlock";
import WiringTable from "@/components/WiringTable";

export default function S08_AddLED() {
  return (
    <section id="section-8" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">[09/16]</p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-2">
          Step 3 — Add an LED Reaction
        </h2>
        <p className="text-foreground/40 mb-8 text-sm">
          Hand gets close → LED lights up.
        </p>

        <div className="mb-8">
          <WiringTable
            title="Additional wiring — LED"
            rows={[
              {
                component: "LED (long leg / anode)",
                pin: "Pin 4",
                wire: "Green",
                note: "Through 220\u03A9 resistor",
              },
              {
                component: "LED (short leg / cathode)",
                pin: "GND",
                wire: "Black",
              },
            ]}
          />
        </div>

        <details className="rounded-lg border border-border bg-surface mt-4 mb-8">
          <summary className="cursor-pointer px-5 py-3 font-mono text-sm text-foreground/50 hover:text-foreground/70">
            Why 220Ω? (Optional — for the curious) →
          </summary>
          <div className="px-5 pb-5 space-y-3 text-sm text-foreground/50">
            <p>
              The Arduino outputs 5V. A typical LED needs about 2V to light up and can
              safely handle around 20mA of current. That leaves 3V that the resistor needs to absorb.
            </p>
            <div className="code-block !p-4">
              <p className="text-neon-cyan">Ohm&apos;s Law: V = I × R</p>
              <p className="mt-2">R = V / I = 3V / 0.020A = <span className="text-neon-green">150Ω minimum</span></p>
            </div>
            <p>
              We use <span className="text-neon-green">220Ω</span> for a safety margin — it pushes about 14mA through
              the LED, bright enough to see but well within safe limits. Too low and the LED burns out. Too high and
              it&apos;s too dim.
            </p>
            <p className="text-foreground/30">
              The takeaway: Every component has specs (voltage drop, max current). Ohm&apos;s Law lets you pick
              the right resistor for any circuit.
            </p>
          </div>
        </details>

        <CodeBlock filename="led_reaction.ino">
          <pre className="text-sm leading-relaxed">
            <span className="text-foreground/30">{"// Step 3: LED reacts to hand distance (Tinkercad 3-pin version)\n\n"}</span>
            <span className="text-neon-cyan">const</span>{" "}
            <span className="text-neon-cyan">int</span>
            {" sigPin = "}
            <span className="text-neon-purple">7</span>
            {";"}
            {"   "}
            <span className="text-foreground/30">{"// Ultrasonic signal pin"}</span>
            {"\n"}
            <span className="text-neon-cyan">const</span>{" "}
            <span className="text-neon-cyan">int</span>
            {" ledPin = "}
            <span className="text-neon-purple">4</span>
            {";"}
            {"   "}
            <span className="text-foreground/30">{"// ← NEW"}</span>
            {"\n\n"}
            <span className="text-neon-cyan">void</span>{" "}
            <span className="text-neon-green">setup</span>
            {"() {\n"}
            {"  Serial.begin("}
            <span className="text-neon-purple">9600</span>
            {");\n"}
            {"  "}
            <span className="text-neon-green">pinMode</span>
            {"(ledPin, "}
            <span className="text-neon-purple">OUTPUT</span>
            {");"}
            {"   "}
            <span className="text-foreground/30">{"// ← NEW"}</span>
            {"\n"}
            {"  Serial.println("}
            <span className="text-neon-green">&quot;Sensor + LED ready!&quot;</span>
            {");\n"}
            {"}\n\n"}
            <span className="text-neon-cyan">float</span>{" "}
            <span className="text-neon-green">getDistance</span>
            {"() {\n"}
            {"  "}
            <span className="text-neon-green">pinMode</span>
            {"(sigPin, "}
            <span className="text-neon-purple">OUTPUT</span>
            {");\n"}
            {"  "}
            <span className="text-neon-green">digitalWrite</span>
            {"(sigPin, "}
            <span className="text-neon-purple">LOW</span>
            {");\n"}
            {"  "}
            <span className="text-neon-green">delayMicroseconds</span>
            {"("}
            <span className="text-neon-purple">2</span>
            {");\n"}
            {"  "}
            <span className="text-neon-green">digitalWrite</span>
            {"(sigPin, "}
            <span className="text-neon-purple">HIGH</span>
            {");\n"}
            {"  "}
            <span className="text-neon-green">delayMicroseconds</span>
            {"("}
            <span className="text-neon-purple">10</span>
            {");\n"}
            {"  "}
            <span className="text-neon-green">digitalWrite</span>
            {"(sigPin, "}
            <span className="text-neon-purple">LOW</span>
            {");\n\n"}
            {"  "}
            <span className="text-neon-green">pinMode</span>
            {"(sigPin, "}
            <span className="text-neon-purple">INPUT</span>
            {");\n"}
            {"  "}
            <span className="text-neon-cyan">long</span>
            {" duration = "}
            <span className="text-neon-green">pulseIn</span>
            {"(sigPin, "}
            <span className="text-neon-purple">HIGH</span>
            {");\n\n"}
            {"  "}
            <span className="text-neon-cyan">float</span>
            {" distance = duration * "}
            <span className="text-neon-purple">0.0343</span>
            {" / "}
            <span className="text-neon-purple">2.0</span>
            {";\n"}
            {"  "}
            <span className="text-neon-cyan">return</span>
            {" distance;\n"}
            {"}\n\n"}
            <span className="text-neon-cyan">void</span>{" "}
            <span className="text-neon-green">loop</span>
            {"() {\n"}
            {"  "}
            <span className="text-neon-cyan">float</span>
            {" distance = "}
            <span className="text-neon-green">getDistance</span>
            {"();\n"}
            {"  Serial.print("}
            <span className="text-neon-green">&quot;Distance: &quot;</span>
            {");\n"}
            {"  Serial.print(distance);\n"}
            {"  Serial.println("}
            <span className="text-neon-green">&quot; cm&quot;</span>
            {");\n\n"}
            {"  "}
            <span className="text-neon-cyan">if</span>
            {" (distance < "}
            <span className="text-neon-purple">15</span>
            {") {"}
            {"              "}
            <span className="text-foreground/30">{"// ← NEW"}</span>
            {"\n"}
            {"    "}
            <span className="text-neon-green">digitalWrite</span>
            {"(ledPin, "}
            <span className="text-neon-purple">HIGH</span>
            {");\n"}
            {"    Serial.println("}
            <span className="text-neon-green">&quot;&gt;&gt;&gt; CLOSE! LED ON&quot;</span>
            {");\n"}
            {"  } "}
            <span className="text-neon-cyan">else</span>
            {" {\n"}
            {"    "}
            <span className="text-neon-green">digitalWrite</span>
            {"(ledPin, "}
            <span className="text-neon-purple">LOW</span>
            {");\n"}
            {"  }\n\n"}
            {"  "}
            <span className="text-neon-green">delay</span>
            {"("}
            <span className="text-neon-purple">100</span>
            {");\n"}
            {"}"}
          </pre>
        </CodeBlock>

        <div className="mt-6 rounded-lg border border-neon-purple/20 bg-neon-purple/5 p-4">
          <p className="font-mono text-xs text-neon-purple leading-relaxed">
            Lines marked <span className="text-foreground/50">// ← NEW</span>{" "}
            are what changed from Step 2. Everything else is the same — we just
            added the LED pin and an if/else check.
          </p>
        </div>

        <div className="mt-6 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-4">
          <p className="font-mono text-xs text-neon-cyan leading-relaxed">
            <span className="font-bold">Checkpoint:</span> Move the distance
            slider below 15 in Tinkercad. The LED should light up. Above 15, it
            turns off.
          </p>
        </div>
      </div>
    </section>
  );
}
