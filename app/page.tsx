export default function Home() {
  return (
    <main className="min-h-screen p-12">
      <p
        className="text-xs uppercase tracking-[0.22em] text-ink-soft mb-4"
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        — Test
      </p>
      <h1 className="text-7xl font-light tracking-tight">
        Hello, <em className="italic">world</em>.
      </h1>
      <p
        className="text-sm mt-4 text-accent"
        style={{ fontFamily: "var(--font-mono), monospace" }}
      >
        Fonts and theme are working.
      </p>
    </main>
  );
}