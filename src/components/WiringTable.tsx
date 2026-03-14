interface WiringRow {
  component: string;
  pin: string;
  wire?: string;
  note?: string;
}

interface WiringTableProps {
  title?: string;
  rows: WiringRow[];
}

const wireColors: Record<string, string> = {
  Red: "bg-red-500",
  Yellow: "bg-yellow-400",
  Blue: "bg-blue-500",
  Black: "bg-zinc-800 border border-zinc-600",
  Green: "bg-green-500",
  Orange: "bg-orange-400",
  White: "bg-white",
  Purple: "bg-purple-500",
};

export default function WiringTable({ title, rows }: WiringTableProps) {
  return (
    <div className="space-y-3">
      {title && (
        <h4 className="font-mono text-sm font-bold text-foreground/70">
          {title}
        </h4>
      )}
      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border-collapse font-mono text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-foreground/30">
              <th className="py-2 pr-4">Component</th>
              <th className="py-2 pr-4">Wire</th>
              <th className="py-2 pr-4">Arduino Pin</th>
              {rows.some((r) => r.note) && <th className="py-2">Note</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={`${row.component}-${row.pin}`}
                className="border-b border-border/50"
              >
                <td className="py-2.5 pr-4 text-foreground/70">
                  {row.component}
                </td>
                <td className="py-2.5 pr-4">
                  {row.wire ? (
                    <span className="flex items-center gap-2">
                      <span
                        className={`inline-block h-2.5 w-2.5 rounded-full ${wireColors[row.wire] ?? "bg-gray-500"}`}
                      />
                      <span className="text-foreground/50">{row.wire}</span>
                    </span>
                  ) : (
                    <span className="text-foreground/20">—</span>
                  )}
                </td>
                <td className="py-2.5 pr-4 text-neon-purple">{row.pin}</td>
                {rows.some((r) => r.note) && (
                  <td className="py-2.5 text-foreground/30 text-xs">
                    {row.note}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile cards */}
      <div className="sm:hidden space-y-2">
        {rows.map((row) => (
          <div
            key={`${row.component}-${row.pin}-m`}
            className="rounded-lg border border-border bg-surface p-3 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2 min-w-0">
              {row.wire && (
                <span
                  className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${wireColors[row.wire] ?? "bg-gray-500"}`}
                />
              )}
              <span className="text-sm text-foreground/70 truncate">
                {row.component}
              </span>
            </div>
            <span className="font-mono text-sm text-neon-purple shrink-0">
              {row.pin}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
