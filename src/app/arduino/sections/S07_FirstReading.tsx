import CodeBlock from "@/components/CodeBlock";

export default function S07_FirstReading() {
  return (
    <section id="section-6" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">[07/15]</p>

        <h2 className="font-mono text-3xl font-bold text-neon-purple mb-2">
          Step 2 — Your First Distance Reading
        </h2>
        <p className="text-foreground/40 mb-8 text-sm">
          Send a sound pulse, time the echo, get centimeters.
        </p>

        <CodeBlock filename="distance.ino">
          <pre className="text-sm leading-relaxed">
            <span className="text-foreground/30">{"// Step 2: Read distance from ultrasonic sensor (Tinkercad 3-pin version)\n\n"}</span>
            <span className="text-neon-cyan">const</span>{" "}
            <span className="text-neon-cyan">int</span>
            {" sigPin = "}
            <span className="text-neon-purple">7</span>
            {";"}
            {"  "}
            <span className="text-foreground/30">{"// Single signal pin (combined TRIG + ECHO)"}</span>
            {"\n\n"}
            <span className="text-neon-cyan">void</span>{" "}
            <span className="text-neon-green">setup</span>
            {"() {\n"}
            {"  Serial.begin("}
            <span className="text-neon-purple">9600</span>
            {");\n"}
            {"  Serial.println("}
            <span className="text-neon-green">&quot;Sensor ready! Move your hand in front of it.&quot;</span>
            {");\n"}
            {"}\n\n"}
            <span className="text-neon-cyan">float</span>{" "}
            <span className="text-neon-green">getDistance</span>
            {"() {\n"}
            {"  "}
            <span className="text-foreground/30">{"// Send a 10-microsecond pulse\n"}</span>
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
            <span className="text-foreground/30">{"// Switch to input and measure echo time\n"}</span>
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
            <span className="text-foreground/30">{"// Convert to centimeters (speed of sound = 343 m/s)\n"}</span>
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
            {");\n"}
            {"  "}
            <span className="text-neon-green">delay</span>
            {"("}
            <span className="text-neon-purple">100</span>
            {");\n"}
            {"}"}
          </pre>
        </CodeBlock>

        <details className="rounded-lg border border-border bg-surface mt-4">
          <summary className="cursor-pointer px-5 py-3 font-mono text-sm text-foreground/50 hover:text-foreground/70">
            Using the physical 4-pin HC-SR04 instead? →
          </summary>
          <div className="px-5 pb-5">
            <CodeBlock filename="distance_4pin.ino">
              <pre className="text-sm leading-relaxed">
                <span className="text-foreground/30">{"// Step 2: Read distance from HC-SR04 (4-pin version)\n\n"}</span>
                <span className="text-neon-cyan">const</span>{" "}
                <span className="text-neon-cyan">int</span>
                {" trigPin = "}
                <span className="text-neon-purple">9</span>
                {";\n"}
                <span className="text-neon-cyan">const</span>{" "}
                <span className="text-neon-cyan">int</span>
                {" echoPin = "}
                <span className="text-neon-purple">10</span>
                {";\n\n"}
                <span className="text-neon-cyan">void</span>{" "}
                <span className="text-neon-green">setup</span>
                {"() {\n"}
                {"  Serial.begin("}
                <span className="text-neon-purple">9600</span>
                {");\n"}
                {"  "}
                <span className="text-neon-green">pinMode</span>
                {"(trigPin, "}
                <span className="text-neon-purple">OUTPUT</span>
                {");\n"}
                {"  "}
                <span className="text-neon-green">pinMode</span>
                {"(echoPin, "}
                <span className="text-neon-purple">INPUT</span>
                {");\n"}
                {"  Serial.println("}
                <span className="text-neon-green">&quot;Sensor ready! Move your hand in front of it.&quot;</span>
                {");\n"}
                {"}\n\n"}
                <span className="text-neon-cyan">float</span>{" "}
                <span className="text-neon-green">getDistance</span>
                {"() {\n"}
                {"  "}
                <span className="text-neon-green">digitalWrite</span>
                {"(trigPin, "}
                <span className="text-neon-purple">LOW</span>
                {");\n"}
                {"  "}
                <span className="text-neon-green">delayMicroseconds</span>
                {"("}
                <span className="text-neon-purple">2</span>
                {");\n"}
                {"  "}
                <span className="text-neon-green">digitalWrite</span>
                {"(trigPin, "}
                <span className="text-neon-purple">HIGH</span>
                {");\n"}
                {"  "}
                <span className="text-neon-green">delayMicroseconds</span>
                {"("}
                <span className="text-neon-purple">10</span>
                {");\n"}
                {"  "}
                <span className="text-neon-green">digitalWrite</span>
                {"(trigPin, "}
                <span className="text-neon-purple">LOW</span>
                {");\n"}
                {"  "}
                <span className="text-neon-cyan">long</span>
                {" duration = "}
                <span className="text-neon-green">pulseIn</span>
                {"(echoPin, "}
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
                {"();\n"}
                {"  Serial.print("}
                <span className="text-neon-green">&quot;Distance: &quot;</span>
                {");\n"}
                {"  Serial.print(distance);\n"}
                {"  Serial.println("}
                <span className="text-neon-green">&quot; cm&quot;</span>
                {");\n"}
                {"  "}
                <span className="text-neon-green">delay</span>
                {"("}
                <span className="text-neon-purple">100</span>
                {");\n"}
                {"}"}
              </pre>
            </CodeBlock>
          </div>
        </details>

        <div className="mt-8 space-y-4">
          <h3 className="font-mono text-sm font-bold text-foreground/70">
            What each part does
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-4 space-y-1">
              <p className="font-mono text-xs text-neon-green">setup()</p>
              <p className="text-xs text-foreground/50">
                Runs once when Arduino powers on — sets pin modes and starts
                Serial communication.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4 space-y-1">
              <p className="font-mono text-xs text-neon-green">loop()</p>
              <p className="text-xs text-foreground/50">
                Runs forever — this is where the action happens. Reads distance
                and prints it 10 times per second.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4 space-y-1">
              <p className="font-mono text-xs text-neon-green">getDistance()</p>
              <p className="text-xs text-foreground/50">
                Toggles <span className="font-mono text-foreground/70">pinMode</span> between OUTPUT (send pulse) and INPUT (read echo) on the same pin, then converts microseconds into centimeters.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4 space-y-1">
              <p className="font-mono text-xs text-neon-green">Serial.print()</p>
              <p className="text-xs text-foreground/50">
                Sends text to your computer so you can see it in the Serial
                Monitor — like console.log() for Arduino.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-border bg-surface p-5 space-y-3">
          <h4 className="font-mono text-sm font-bold text-foreground/70">
            Try it in Tinkercad
          </h4>
          <ol className="space-y-2 text-sm text-foreground/50">
            <li>
              <span className="text-neon-purple">1.</span> Paste the code into
              the code editor (switch from{" "}
              <span className="font-mono text-foreground/70">Blocks</span> to{" "}
              <span className="font-mono text-foreground/70">Text</span> mode)
            </li>
            <li>
              <span className="text-neon-purple">2.</span> Click{" "}
              <span className="font-mono text-neon-green">Start Simulation</span>
            </li>
            <li>
              <span className="text-neon-purple">3.</span> Click on the
              ultrasonic sensor — a distance slider will appear
            </li>
            <li>
              <span className="text-neon-purple">4.</span> Watch the{" "}
              <span className="font-mono text-foreground/70">Serial Monitor</span>{" "}
              at the bottom for distance values
            </li>
          </ol>
        </div>

        <div className="mt-6 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-4">
          <p className="font-mono text-xs text-neon-cyan leading-relaxed">
            <span className="font-bold">Checkpoint:</span> You should see
            distance values updating in the Serial Monitor. If you see 0 or
            garbage, check your wiring.
          </p>
        </div>
      </div>
    </section>
  );
}
