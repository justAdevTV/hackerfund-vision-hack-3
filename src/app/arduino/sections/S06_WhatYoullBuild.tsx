export default function S06_WhatYoullBuild() {
  return (
    <section id="section-5" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">
          [06/16]
        </p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-2">
          What You&apos;re Building
        </h2>
        <p className="text-foreground/40 mb-8 text-sm">
          By the end of this workshop, you&apos;ll have a working proximity
          alarm system with three components talking to each other.
        </p>

        {/* Project overview cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="rounded-xl border border-neon-green/20 bg-surface p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-neon-green" />
              <h3 className="font-mono text-sm font-bold text-neon-green">
                Ultrasonic Sensor
              </h3>
            </div>
            <p className="text-xs text-foreground/50 leading-relaxed">
              Sends out sound pulses and measures how long they take to bounce
              back. Gives you distance in centimeters.
            </p>
            <p className="font-mono text-xs text-foreground/30">Pin 7 (SIG)</p>
          </div>

          <div className="rounded-xl border border-[#D85A30]/20 bg-surface p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#D85A30]" />
              <h3 className="font-mono text-sm font-bold text-[#D85A30]">
                LED
              </h3>
            </div>
            <p className="text-xs text-foreground/50 leading-relaxed">
              Lights up when something gets close. Visual feedback so you can
              see the sensor working.
            </p>
            <p className="font-mono text-xs text-foreground/30">
              Pin 4 (with 220&#937; resistor)
            </p>
          </div>

          <div className="rounded-xl border border-neon-purple/20 bg-surface p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-neon-purple" />
              <h3 className="font-mono text-sm font-bold text-neon-purple">
                Piezo Buzzer
              </h3>
            </div>
            <p className="text-xs text-foreground/50 leading-relaxed">
              Plays different tones based on distance. Closer = higher pitch,
              farther = lower pitch.
            </p>
            <p className="font-mono text-xs text-foreground/30">Pin 3</p>
          </div>
        </div>

        {/* How it works */}
        <div className="rounded-xl border border-border bg-surface p-6 mb-8">
          <h3 className="font-mono text-sm font-bold text-foreground/70 mb-4">
            How it works together
          </h3>
          <div className="space-y-3 text-sm text-foreground/50">
            <div className="flex items-start gap-3">
              <span className="font-mono text-neon-purple shrink-0">1.</span>
              <p>
                The <span className="text-neon-green">sensor</span> measures
                distance 5 times per second
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-neon-purple shrink-0">2.</span>
              <p>
                Your code checks the distance and decides which{" "}
                <span className="text-neon-cyan">zone</span> you&apos;re in
                (close, medium, far)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-neon-purple shrink-0">3.</span>
              <p>
                The <span className="text-[#D85A30]">LED</span> turns on/off
                and the <span className="text-neon-purple">buzzer</span> changes
                pitch based on the zone
              </p>
            </div>
          </div>
        </div>

        {/* Wiring diagram preview */}
        <div className="rounded-xl border border-neon-cyan/20 bg-[#0d0d0d] p-4 mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wiring-diagram.svg"
            alt="Complete wiring diagram: Arduino Uno R3 with ultrasonic sensor on Pin 7, LED with 220 ohm resistor on Pin 4, and piezo buzzer on Pin 3"
            className="w-full h-auto"
          />
        </div>
        <p className="font-mono text-xs text-foreground/30 text-center mb-8">
          The complete circuit — we&apos;ll build this one component at a time.
        </p>

        {/* Build order callout */}
        <div className="rounded-lg border border-neon-green/20 bg-neon-green/5 p-5">
          <h4 className="font-mono text-xs text-neon-green font-bold mb-3">
            Build order
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
            <div className="text-foreground/50">
              <span className="text-neon-green">Step 1</span>
              <br />
              Wire sensor
            </div>
            <div className="text-foreground/50">
              <span className="text-neon-green">Step 2</span>
              <br />
              Read distance
            </div>
            <div className="text-foreground/50">
              <span className="text-neon-green">Step 3</span>
              <br />
              Add LED
            </div>
            <div className="text-foreground/50">
              <span className="text-neon-green">Step 4</span>
              <br />
              Add buzzer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
