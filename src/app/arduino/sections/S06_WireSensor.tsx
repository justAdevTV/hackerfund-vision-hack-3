import WiringTable from "@/components/WiringTable";

export default function S06_WireSensor() {
  return (
    <section id="section-6" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">[07/16]</p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-2">
          Step 1 — Wire the Sensor
        </h2>
        <p className="text-foreground/40 mb-8 text-sm">
          Ultrasonic Sensor → Arduino Uno
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-mono text-sm font-bold text-neon-green mb-3">
              Tinkercad Wiring (3-pin sensor)
            </h3>
            <WiringTable
              rows={[
                { component: "VCC", pin: "5V", wire: "Red" },
                { component: "GND", pin: "GND", wire: "Black" },
                { component: "SIG", pin: "Pin 7", wire: "Green" },
              ]}
            />
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 space-y-3">
            <h3 className="font-mono text-sm font-bold text-foreground/50">
              Physical Kit (4-pin HC-SR04) — for rotation stations
            </h3>
            <WiringTable
              rows={[
                { component: "VCC", pin: "5V", wire: "Red" },
                { component: "TRIG", pin: "Pin 9", wire: "Yellow" },
                { component: "ECHO", pin: "Pin 10", wire: "Blue" },
                { component: "GND", pin: "GND", wire: "Black" },
              ]}
            />
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-neon-green/20 bg-neon-green/5 p-4">
          <p className="font-mono text-xs text-neon-green leading-relaxed">
            {">"} Three wires in Tinkercad, four on the real kit — that&apos;s it.
          </p>
        </div>

        <div className="mt-6 rounded-lg border border-border bg-surface p-5 space-y-3">
          <h4 className="font-mono text-sm font-bold text-foreground/70">
            In Tinkercad
          </h4>
          <ul className="space-y-2 text-sm text-foreground/50">
            <li>
              <span className="text-neon-purple">1.</span> Drag the ultrasonic sensor from
              the components panel onto the breadboard
            </li>
            <li>
              <span className="text-neon-purple">2.</span> Click a sensor pin,
              then click the matching Arduino pin to create a wire
            </li>
            <li>
              <span className="text-neon-purple">3.</span> Color-code your wires
              to match the table — it makes debugging way easier
            </li>
          </ul>
        </div>

        <div className="mt-6 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-4">
          <p className="font-mono text-xs text-neon-cyan leading-relaxed">
            <span className="font-bold">Checkpoint:</span> Wire it up, then look
            at your neighbor&apos;s and compare. Both look the same? You&apos;re
            good.
          </p>
        </div>
      </div>
    </section>
  );
}
