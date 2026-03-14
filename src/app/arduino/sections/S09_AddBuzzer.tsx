import CodeBlock from "@/components/CodeBlock";
import WiringTable from "@/components/WiringTable";

export default function S09_AddBuzzer() {
  return (
    <section id="section-9" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">[10/16]</p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-2">
          Step 4 — Add a Buzzer
        </h2>
        <p className="text-foreground/40 mb-8 text-sm">
          Distance zones → different sounds. Close = high pitch, medium = low
          pitch.
        </p>

        <div className="mb-8">
          <WiringTable
            title="Additional wiring — Piezo Buzzer"
            rows={[
              { component: "Piezo Buzzer (+)", pin: "Pin 3", wire: "Orange" },
              { component: "Piezo Buzzer (\u2212)", pin: "GND", wire: "Black" },
            ]}
          />
        </div>

        <CodeBlock filename="buzzer_zones.ino">
          <pre className="text-sm leading-relaxed">
            <span className="text-foreground/30">{"// Step 4: LED + Buzzer react to hand distance\n\n"}</span>
            <span className="text-neon-cyan">const</span>{" "}
            <span className="text-neon-cyan">int</span>
            {" sigPin = "}
            <span className="text-neon-purple">7</span>
            {";"}
            {"     "}
            <span className="text-foreground/30">{"// 3-pin sensor SIG"}</span>
            {"\n"}
            <span className="text-neon-cyan">const</span>{" "}
            <span className="text-neon-cyan">int</span>
            {" ledPin = "}
            <span className="text-neon-purple">4</span>
            {";\n"}
            <span className="text-neon-cyan">const</span>{" "}
            <span className="text-neon-cyan">int</span>
            {" buzzerPin = "}
            <span className="text-neon-purple">3</span>
            {";"}
            {"  "}
            <span className="text-foreground/30">{"// \u2190 NEW"}</span>
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
            {");\n"}
            {"  "}
            <span className="text-neon-green">pinMode</span>
            {"(buzzerPin, "}
            <span className="text-neon-purple">OUTPUT</span>
            {");"}
            {"  "}
            <span className="text-foreground/30">{"// \u2190 NEW"}</span>
            {"\n"}
            {"  Serial.println("}
            <span className="text-neon-green">&quot;Sensor + LED + Buzzer ready!&quot;</span>
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
            {");\n"}
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
            {"();\n\n"}
            {"  "}
            <span className="text-neon-cyan">if</span>
            {" (distance < "}
            <span className="text-neon-purple">10</span>
            {") {"}
            {"          "}
            <span className="text-foreground/30">{"// \u2190 CHANGED: was < 15, now three zones"}</span>
            {"\n"}
            {"    "}
            <span className="text-neon-green">digitalWrite</span>
            {"(ledPin, "}
            <span className="text-neon-purple">HIGH</span>
            {");\n"}
            {"    "}
            <span className="text-neon-green">tone</span>
            {"(buzzerPin, "}
            <span className="text-neon-purple">1000</span>
            {");"}
            {"       "}
            <span className="text-foreground/30">{"// high pitch"}</span>
            {"\n"}
            {"    Serial.println("}
            <span className="text-neon-green">&quot;VERY CLOSE!&quot;</span>
            {");\n"}
            {"  } "}
            <span className="text-neon-cyan">else</span>{" "}
            <span className="text-neon-cyan">if</span>
            {" (distance < "}
            <span className="text-neon-purple">25</span>
            {") {\n"}
            {"    "}
            <span className="text-neon-green">digitalWrite</span>
            {"(ledPin, "}
            <span className="text-neon-purple">HIGH</span>
            {");\n"}
            {"    "}
            <span className="text-neon-green">tone</span>
            {"(buzzerPin, "}
            <span className="text-neon-purple">400</span>
            {");"}
            {"        "}
            <span className="text-foreground/30">{"// low pitch"}</span>
            {"\n"}
            {"    Serial.println("}
            <span className="text-neon-green">&quot;MEDIUM&quot;</span>
            {");\n"}
            {"  } "}
            <span className="text-neon-cyan">else</span>
            {" {\n"}
            {"    "}
            <span className="text-neon-green">digitalWrite</span>
            {"(ledPin, "}
            <span className="text-neon-purple">LOW</span>
            {");\n"}
            {"    "}
            <span className="text-neon-green">noTone</span>
            {"(buzzerPin);"}
            {"          "}
            <span className="text-foreground/30">{"// silence"}</span>
            {"\n"}
            {"    Serial.println("}
            <span className="text-neon-green">&quot;far&quot;</span>
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

        <div className="mt-8 space-y-4">
          <h3 className="font-mono text-sm font-bold text-foreground/70">
            How sound works
          </h3>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-4 space-y-1">
              <p className="font-mono text-xs text-neon-green">tone(pin, freq)</p>
              <p className="text-xs text-foreground/50">
                Plays a square wave at the given frequency (Hz). Higher number =
                higher pitch.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4 space-y-1">
              <p className="font-mono text-xs text-neon-green">noTone(pin)</p>
              <p className="text-xs text-foreground/50">
                Stops the buzzer. Always call this when you want silence — the
                tone keeps playing otherwise.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4 space-y-1">
              <p className="font-mono text-xs text-neon-purple">1000 Hz vs 400 Hz</p>
              <p className="text-xs text-foreground/50">
                1000 Hz is a high beep (close = urgent). 400 Hz is a low hum
                (medium distance).
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-4">
          <p className="font-mono text-xs text-neon-cyan leading-relaxed">
            <span className="font-bold">Checkpoint:</span> Three distinct zones
            — very close (&lt;10 cm) with high beep, medium (&lt;25 cm) with low
            hum, and far (silent, LED off). Test all three with the slider.
          </p>
        </div>
      </div>
    </section>
  );
}
