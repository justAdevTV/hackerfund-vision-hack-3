import type { Metadata } from "next";
import { Suspense } from "react";
import WorkshopShell from "./components/WorkshopShell";
import { SECTIONS } from "./sections";
import S01_Title from "./sections/S01_Title";
import S02_WhatIsArduino from "./sections/S02_WhatIsArduino";
import S03_CoolStuff from "./sections/S03_CoolStuff";
import S04_Safety from "./sections/S04_Safety";
import S05_TinkercadSetup from "./sections/S05_TinkercadSetup";
import S06_WireSensor from "./sections/S06_WireSensor";
import S07_FirstReading from "./sections/S07_FirstReading";
import S08_AddLED from "./sections/S08_AddLED";
import S09_AddBuzzer from "./sections/S09_AddBuzzer";
import S10_Theremin from "./sections/S10_Theremin";
import S11_LCDDisplay from "./sections/S11_LCDDisplay";
import S12_AIHelp from "./sections/S12_AIHelp";
import S13_AIPrompts from "./sections/S13_AIPrompts";
import S14_CheatSheet from "./sections/S13_CheatSheet";
import S15_WhatsNext from "./sections/S14_WhatsNext";

export const metadata: Metadata = {
  title: "Arduino Workshop — Hacker Fund",
  description:
    "Build an Arduino gesture controller with an ultrasonic sensor. Wave your hand, control the screen.",
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
        <S06_WireSensor />
        <S07_FirstReading />
        <S08_AddLED />
        <S09_AddBuzzer />
        <S10_Theremin />
        <S11_LCDDisplay />
        <S12_AIHelp />
        <S13_AIPrompts />
        <S14_CheatSheet />
        <S15_WhatsNext />
      </WorkshopShell>
    </Suspense>
  );
}
