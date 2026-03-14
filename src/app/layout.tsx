import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hacker Fund Workshop",
  description: "Hands-on hardware hacking — soldering, Arduino, and beyond",
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-wider text-neon-green transition-all hover:glow-green"
        >
          {">"} Hacker Fund_
        </Link>
        <div className="flex gap-6 text-sm">
          <Link
            href="/soldering"
            className="text-foreground/70 transition-colors hover:text-neon-cyan"
          >
            [soldering]
          </Link>
          <Link
            href="/arduino"
            className="text-foreground/70 transition-colors hover:text-neon-cyan"
          >
            [arduino]
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="scanlines grid-bg antialiased">
        <Navbar />
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
