import CodeBlock from "@/components/CodeBlock";

export default function S10_Theremin() {
  return (
    <section id="section-9" className="slide px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs text-neon-purple/30 mb-6">[10/15]</p>

        <div className="flex items-center gap-3 mb-2">
          <h2 className="font-mono text-3xl font-bold text-neon-purple">
            Step 5 — The Theremin
          </h2>
          <span className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-0.5 font-mono text-xs text-neon-cyan">
            Stretch Goal
          </span>
        </div>
        <p className="text-foreground/40 mb-8 text-sm">
          Continuous pitch control — hand distance maps directly to sound
          frequency. Like a real theremin.
        </p>

        <CodeBlock filename="theremin.ino">
          <pre className="text-sm leading-relaxed">
            <span className="text-foreground/30">{"// Step 5: Theremin \u2014 hand distance controls pitch\n\n"}</span>
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
            {" buzzerPin = "}
            <span className="text-neon-purple">3</span>
            {";\n\n"}
            <span className="text-neon-cyan">void</span>{" "}
            <span className="text-neon-green">setup</span>
            {"() {\n"}
            {"  Serial.begin("}
            <span className="text-neon-purple">9600</span>
            {");\n"}
            {"  "}
            <span className="text-neon-green">pinMode</span>
            {"(buzzerPin, "}
            <span className="text-neon-purple">OUTPUT</span>
            {");\n"}
            {"  Serial.println("}
            <span className="text-neon-green">&quot;Theremin mode! Move your hand to play.&quot;</span>
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
            {" (distance > "}
            <span className="text-neon-purple">2</span>
            {" && distance < "}
            <span className="text-neon-purple">50</span>
            {") {\n"}
            {"    "}
            <span className="text-neon-cyan">int</span>
            {" frequency = "}
            <span className="text-neon-green">map</span>
            {"(distance, "}
            <span className="text-neon-purple">2</span>
            {", "}
            <span className="text-neon-purple">50</span>
            {", "}
            <span className="text-neon-purple">2000</span>
            {", "}
            <span className="text-neon-purple">200</span>
            {");\n"}
            {"    "}
            <span className="text-neon-green">tone</span>
            {"(buzzerPin, frequency);\n"}
            {"    Serial.print("}
            <span className="text-neon-green">&quot;Freq: &quot;</span>
            {");\n"}
            {"    Serial.println(frequency);\n"}
            {"  } "}
            <span className="text-neon-cyan">else</span>
            {" {\n"}
            {"    "}
            <span className="text-neon-green">noTone</span>
            {"(buzzerPin);\n"}
            {"  }\n\n"}
            {"  "}
            <span className="text-neon-green">delay</span>
            {"("}
            <span className="text-neon-purple">50</span>
            {");\n"}
            {"}"}
          </pre>
        </CodeBlock>

        <div className="mt-8 space-y-4">
          <h3 className="font-mono text-sm font-bold text-foreground/70">
            The key line
          </h3>
          <div className="rounded-lg border border-neon-purple/20 bg-surface p-5">
            <p className="font-mono text-sm text-foreground/70 mb-3">
              <span className="text-neon-cyan">int</span> frequency ={" "}
              <span className="text-neon-green">map</span>(distance,{" "}
              <span className="text-neon-purple">2</span>,{" "}
              <span className="text-neon-purple">50</span>,{" "}
              <span className="text-neon-purple">2000</span>,{" "}
              <span className="text-neon-purple">200</span>);
            </p>
            <p className="text-xs text-foreground/50 leading-relaxed">
              <span className="font-mono text-neon-green">map()</span> scales one
              range to another. Distance 2-50 cm becomes frequency 2000-200 Hz.
              Close hand = high pitch, far hand = low pitch — just like a real
              theremin.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-4">
          <p className="font-mono text-xs text-neon-cyan leading-relaxed">
            <span className="font-bold">Checkpoint:</span> Slowly move the
            slider from 2 to 50 cm. You should hear a smooth pitch change from
            high to low. Try &quot;playing&quot; a melody!
          </p>
        </div>
      </div>
    </section>
  );
}
