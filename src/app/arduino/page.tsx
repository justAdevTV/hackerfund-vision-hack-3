import type { Metadata } from "next";
import { Suspense } from "react";
import WorkshopShell from "./components/WorkshopShell";
import { SECTIONS } from "./sections";
import S01_Title from "./sections/S01_Title";
import S02_WhatIsArduino from "./sections/S02_WhatIsArduino";
import S03_CoolStuff from "./sections/S03_CoolStuff";
import S04_Safety from "./sections/S04_Safety";
import S05_TinkercadSetup from "./sections/S05_TinkercadSetup";
import S06_WhatYoullBuild from "./sections/S06_WhatYoullBuild";
import S07_WireSensor from "./sections/S06_WireSensor";
import S08_FirstReading from "./sections/S07_FirstReading";
import S09_AddLED from "./sections/S08_AddLED";
import S10_AddBuzzer from "./sections/S09_AddBuzzer";
import S11_Theremin from "./sections/S10_Theremin";
import S12_LCDDisplay from "./sections/S11_LCDDisplay";
import S13_AIHelp from "./sections/S12_AIHelp";
import S14_AIPrompts from "./sections/S13_AIPrompts";
import S15_CheatSheet from "./sections/S14_CheatSheet";
import S16_WhatsNext from "./sections/S15_WhatsNext";

export const metadata: Metadata = {
  title: "Arduino Workshop — Hacker Fund",
  description:
    "Build circuits with an ultrasonic sensor, LEDs, buzzers, and an LCD display — all in your browser with Tinkercad.",
};

function WorkshopLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="font-mono text-sm text-neon-purple/50 animate-pulse">
        Loading workshop...
      </p>
    </div>
  );
}

export default function ArduinoPage() {
  return (
    <Suspense fallback={<WorkshopLoading />}>
      <WorkshopShell sections={[...SECTIONS]}>
        <S01_Title />
        <S02_WhatIsArduino />
        <S03_CoolStuff />
        <S04_Safety />
        <S05_TinkercadSetup />
        <S06_WhatYoullBuild />
        <S07_WireSensor />
        <S08_FirstReading />
        <S09_AddLED />
        <S10_AddBuzzer />
        <S11_Theremin />
        <S12_LCDDisplay />
        <S13_AIHelp />
        <S14_AIPrompts />
        <S15_CheatSheet />
        <S16_WhatsNext />
      </WorkshopShell>
    </Suspense>
  );
}
