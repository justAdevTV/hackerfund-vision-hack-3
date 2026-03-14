import CodeBlock from "@/components/CodeBlock";
import WiringTable from "@/components/WiringTable";

export default function S11_LCDDisplay() {
  return (
    <section id="section-10" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">[11/15]</p>

        <div className="flex items-center gap-3 mb-2">
          <h2 className="font-mono text-3xl font-bold text-neon-purple">
            Step 6 — Add the LCD Display
          </h2>
          <span className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-0.5 font-mono text-xs text-neon-cyan">
            Stretch Goal
          </span>
        </div>
        <p className="text-foreground/40 mb-8 text-sm">
          Show distance and zone status right on a 16x2 LCD screen — no
          computer needed.
        </p>

        <div className="mb-6">
          <WiringTable
            title="LCD wiring (Tinkercad direct-wire mode)"
            rows={[
              { component: "RS", pin: "Pin 12", wire: "Green" },
              { component: "EN", pin: "Pin 11", wire: "Green" },
              { component: "D4", pin: "Pin 5", wire: "Yellow" },
              { component: "D5", pin: "Pin 8", wire: "Yellow" },
              { component: "D6", pin: "Pin 9", wire: "Yellow" },
              { component: "D7", pin: "Pin 10", wire: "Yellow" },
              { component: "VSS", pin: "GND", wire: "Black" },
              { component: "VDD", pin: "5V", wire: "Red" },
              { component: "V0", pin: "Potentiometer middle pin", wire: "—" },
              { component: "RW", pin: "GND", wire: "Black" },
              { component: "A (backlight+)", pin: "5V", wire: "Red" },
              { component: "K (backlight\u2212)", pin: "GND", wire: "Black" },
            ]}
          />
        </div>

        <div className="mb-8 rounded-lg border border-neon-purple/20 bg-neon-purple/5 p-4">
          <p className="font-mono text-xs text-neon-purple leading-relaxed">
            Tinkercad uses direct wiring (6 data lines). On real hardware with
            an I2C backpack, you&apos;d use{" "}
            <span className="text-foreground/70">SDA→A4</span>,{" "}
            <span className="text-foreground/70">SCL→A5</span> instead — just 4
            wires total.
          </p>
        </div>

        <CodeBlock filename="lcd_display.ino">
          <pre className="text-sm leading-relaxed">
            <span className="text-foreground/30">{"// Step 6: Distance displayed on LCD screen\n\n"}</span>
            <span className="text-neon-cyan">#include</span>
            {" "}
            <span className="text-neon-green">&lt;LiquidCrystal.h&gt;</span>
            {"\n\n"}
            {"LiquidCrystal "}
            <span className="text-neon-green">lcd</span>
            {"("}
            <span className="text-neon-purple">12</span>
            {", "}
            <span className="text-neon-purple">11</span>
            {", "}
            <span className="text-neon-purple">5</span>
            {", "}
            <span className="text-neon-purple">8</span>
            {", "}
            <span className="text-neon-purple">9</span>
            {", "}
            <span className="text-neon-purple">10</span>
            {");\n\n"}
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
            {";\n\n"}
            <span className="text-neon-cyan">void</span>{" "}
            <span className="text-neon-green">setup</span>
            {"() {\n"}
            {"  Serial.begin("}
            <span className="text-neon-purple">9600</span>
            {");\n"}
            {"  lcd.begin("}
            <span className="text-neon-purple">16</span>
            {", "}
            <span className="text-neon-purple">2</span>
            {");\n"}
            {"  lcd.print("}
            <span className="text-neon-green">&quot;Arduino Ctrl&quot;</span>
            {");\n"}
            {"  lcd.setCursor("}
            <span className="text-neon-purple">0</span>
            {", "}
            <span className="text-neon-purple">1</span>
            {");\n"}
            {"  lcd.print("}
            <span className="text-neon-green">&quot;Ready!&quot;</span>
            {");\n"}
            {"  "}
            <span className="text-neon-green">delay</span>
            {"("}
            <span className="text-neon-purple">1000</span>
            {");\n\n"}
            {"  "}
            <span className="text-neon-green">pinMode</span>
            {"(ledPin, "}
            <span className="text-neon-purple">OUTPUT</span>
            {");\n"}
            {"  "}
            <span className="text-neon-green">pinMode</span>
            {"(buzzerPin, "}
            <span className="text-neon-purple">OUTPUT</span>
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
            {"  lcd.clear();\n"}
            {"  lcd.setCursor("}
            <span className="text-neon-purple">0</span>
            {", "}
            <span className="text-neon-purple">0</span>
            {");\n"}
            {"  lcd.print("}
            <span className="text-neon-green">&quot;Dist: &quot;</span>
            {");\n"}
            {"  lcd.print(distance, "}
            <span className="text-neon-purple">1</span>
            {");\n"}
            {"  lcd.print("}
            <span className="text-neon-green">&quot; cm&quot;</span>
            {");\n\n"}
            {"  lcd.setCursor("}
            <span className="text-neon-purple">0</span>
            {", "}
            <span className="text-neon-purple">1</span>
            {");\n"}
            {"  "}
            <span className="text-neon-cyan">if</span>
            {" (distance < "}
            <span className="text-neon-purple">10</span>
            {") {\n"}
            {"    lcd.print("}
            <span className="text-neon-green">&quot;&gt;&gt; CLOSE! &lt;&lt;&quot;</span>
            {");\n"}
            {"    "}
            <span className="text-neon-green">digitalWrite</span>
            {"(ledPin, "}
            <span className="text-neon-purple">HIGH</span>
            {");\n"}
            {"    "}
            <span className="text-neon-green">tone</span>
            {"(buzzerPin, "}
            <span className="text-neon-purple">1000</span>
            {");\n"}
            {"  } "}
            <span className="text-neon-cyan">else</span>{" "}
            <span className="text-neon-cyan">if</span>
            {" (distance < "}
            <span className="text-neon-purple">25</span>
            {") {\n"}
            {"    lcd.print("}
            <span className="text-neon-green">&quot;-- Medium --&quot;</span>
            {");\n"}
            {"    "}
            <span className="text-neon-green">digitalWrite</span>
            {"(ledPin, "}
            <span className="text-neon-purple">HIGH</span>
            {");\n"}
            {"    "}
            <span className="text-neon-green">tone</span>
            {"(buzzerPin, "}
            <span className="text-neon-purple">400</span>
            {");\n"}
            {"  } "}
            <span className="text-neon-cyan">else</span>
            {" {\n"}
            {"    lcd.print("}
            <span className="text-neon-green">&quot;   Far away&quot;</span>
            {");\n"}
            {"    "}
            <span className="text-neon-green">digitalWrite</span>
            {"(ledPin, "}
            <span className="text-neon-purple">LOW</span>
            {");\n"}
            {"    "}
            <span className="text-neon-green">noTone</span>
            {"(buzzerPin);\n"}
            {"  }\n\n"}
            {"  "}
            <span className="text-neon-green">delay</span>
            {"("}
            <span className="text-neon-purple">200</span>
            {");\n"}
            {"}"}
          </pre>
        </CodeBlock>

        <div className="mt-6 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-4">
          <p className="font-mono text-xs text-neon-cyan leading-relaxed">
            <span className="font-bold">Checkpoint:</span> The LCD should show
            &quot;Arduino Ctrl / Ready!&quot; on startup, then switch to live
            distance readings with zone labels on the second line.
          </p>
        </div>
      </div>
    </section>
  );
}
