"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";

function Constellation({ dark }: { dark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    type Star = { x: number; y: number; r: number; o: number };
    const stars: Star[] = [];
    const lines: [Star, Star][] = [];

    function init() {
      const W = canvas!.width;
      const H = canvas!.height;
      stars.length = 0;
      lines.length = 0;
      for (let i = 0; i < 200; i++) {
        stars.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.8 + 0.4, o: Math.random() * 0.8 + 0.2 });
      }
      const anchors = stars.filter((_, i) => i % 5 === 0);
      for (let i = 0; i < anchors.length; i++) {
        for (let j = i + 1; j < anchors.length; j++) {
          const d = Math.hypot(anchors[i].x - anchors[j].x, anchors[i].y - anchors[j].y);
          if (d < 150 && lines.length < 60) lines.push([anchors[i], anchors[j]]);
        }
      }
    }

    function draw() {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = dark;
      lines.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = isDark ? "rgba(129,140,248,0.35)" : "rgba(79,70,229,0.15)";
        ctx.lineWidth = 0.7;
        ctx.stroke();
      });
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(180,185,255,${s.o})` : `rgba(99,102,241,${s.o * 0.5})`;
        ctx.fill();
      });
    }

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      init();
      draw();
    }

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [dark]);

  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />;
}

const projects = [
  {
    title: "Gods Word",
    tag: "AI Product · RAG · Conversational AI",
    description: "Production conversational AI system built from scratch — no LangChain. Designed every layer: chunking strategy, ChromaDB vector store, semantic retrieval logic, and prompt construction, grounding a locally-hosted Llama 3 across 31,100+ documents from three heterogeneous sources.",
    chips: ["RAG, no framework", "multi-turn memory", "extending to agentic"],
    stack: ["Python", "ChromaDB", "Ollama", "Llama 3", "Streamlit", "YouTube Data API"],
    href: "#",
  },
  {
    title: "SDLC Delivery Intelligence",
    tag: "Multi-Agent Platform · Agentic AI",
    description: "Multi-agent orchestration platform where four specialized agents — architecture discovery, requirement analysis, risk assessment, and sprint planning — collaborate autonomously to replace manual cross-functional coordination. Built on Google ADK with tree-sitter AST parsing and NetworkX dependency graphs to ground every agent output in real source-code structure.",
    chips: ["Multi-agent orchestration", "semantic code search", "Jira integration"],
    stack: ["Python", "Google ADK", "Qdrant", "FastAPI", "React", "PostgreSQL", "tree-sitter", "Jira API"],
    href: "#",
  },
];

const skills = [
  { label: "AI / LLM", hot: true, items: ["RAG Pipeline Design", "LLM Integration", "Embeddings", "Evaluation Frameworks", "Prompt Engineering", "Agentic Systems", "Ollama"] },
  { label: "Machine Learning", hot: false, items: ["TensorFlow", "Scikit-learn", "Keras", "Neural Networks", "Model Evaluation"] },
  { label: "Languages", hot: false, items: ["Python", "TypeScript", "Java", "SQL"] },
  { label: "Backend", hot: false, items: ["FastAPI", "Spring Boot", "REST API", "PostgreSQL"] },
  { label: "Cloud / DevOps", hot: false, items: ["AWS", "Docker", "Terraform", "GitHub Actions", "Linux"] },
];

export default function Home() {
  const [dark, setDark] = useState(true);

  const t = {
    bg: dark ? "#080B14" : "#F4F5FF",
    text: dark ? "#E8EAF6" : "#1A1A2E",
    muted: dark ? "#7B82A8" : "#5C5F80",
    dim: dark ? "#3A3F5C" : "#B0B3D6",
    accent: dark ? "#818CF8" : "#4F46E5",
    surface: dark ? "rgba(15,18,40,0.7)" : "rgba(255,255,255,0.8)",
    border: dark ? "rgba(129,140,248,0.15)" : "rgba(79,70,229,0.12)",
    card: dark ? "rgba(13,16,35,0.8)" : "rgba(255,255,255,0.9)",
    navBg: dark ? "rgba(8,11,20,0.7)" : "rgba(244,245,255,0.8)",
  };

  return (
    <div style={{ background: t.bg, color: t.text, minHeight: "100vh", position: "relative", transition: "background 0.4s, color 0.4s", fontFamily: "system-ui, sans-serif" }}>
      <Constellation dark={dark} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* NAV */}
        <nav style={{ borderBottom: `1px solid ${t.border}`, padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", backdropFilter: "blur(16px)", background: t.navBg, position: "sticky", top: 0, zIndex: 50 }}>
          <span style={{ fontFamily: "Georgia, serif", fontSize: 16, color: t.text, fontWeight: 600 }}>Sharon Ekula</span>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {["Projects", "Skills", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 12, padding: "6px 14px", borderRadius: 20, color: t.muted, textDecoration: "none" }}>{l}</a>
            ))}
            <button onClick={() => setDark(!dark)} style={{ width: 34, height: 34, borderRadius: 8, border: `1px solid ${t.border}`, background: t.surface, color: t.muted, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, marginLeft: 10 }}>
              {dark ? "🌙" : "☀️"}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <header style={{ padding: "72px 32px 60px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", borderBottom: `1px solid ${t.border}` }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "monospace", fontSize: 11, color: "#6EE7B7", background: "rgba(110,231,183,0.07)", border: "1px solid rgba(110,231,183,0.2)", borderRadius: 20, padding: "5px 14px", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6EE7B7", display: "inline-block" }} />
              available for full-time roles
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div style={{ width: 110, height: 110, borderRadius: "50%", border: `2.5px solid ${t.accent}`, background: t.surface, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: 34, color: t.accent, marginBottom: 24, boxShadow: `0 0 48px rgba(129,140,248,0.25)`, backdropFilter: "blur(8px)" }}>
              SE
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: 54, lineHeight: 1.05, color: t.text, letterSpacing: "-0.02em", marginBottom: 10 }}>Sharon Ekula</h1>
          </Reveal>

          <Reveal delay={0.13}>
            <p style={{ fontSize: 14, color: t.muted, marginBottom: 22 }}>AI Engineer · Newark, NJ</p>
          </Reveal>

          <Reveal delay={0.16}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginBottom: 22 }}>
              {[["RAG Systems", true], ["LLM Integration", true], ["AWS Certified", true], ["Cloud Infra", false], ["Agentic AI", false]].map(([p, hi]) => (
                <span key={String(p)} style={{ fontFamily: "monospace", fontSize: 11, padding: "5px 13px", borderRadius: 20, border: `1px solid ${hi ? t.accent + "55" : t.border}`, color: hi ? t.accent : t.muted, background: hi ? (dark ? "rgba(129,140,248,0.1)" : "rgba(79,70,229,0.06)") : t.surface }}>
                  {String(p)}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p style={{ fontSize: 14, color: t.muted, lineHeight: 1.8, maxWidth: 500, marginBottom: 32 }}>
              MS in Computer Science from NJIT · AWS Certified AI Practitioner.<br />
              AI Engineer building production RAG systems and multi-agent platforms. MS CS, NJIT · AWS Certified AI Practitioner.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              <a href="#projects" style={{ padding: "11px 22px", background: t.accent, color: "#fff", borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>→ View Projects</a>
              <a href="/resume.pdf" style={{ padding: "10px 18px", color: t.muted, borderRadius: 8, fontSize: 13, border: `1px solid ${t.border}`, textDecoration: "none", background: t.surface, backdropFilter: "blur(4px)" }}>Résumé ↗</a>
              <a href="https://github.com/sharonekula13" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 18px", color: t.muted, borderRadius: 8, fontSize: 13, border: `1px solid ${t.border}`, textDecoration: "none", background: t.surface, backdropFilter: "blur(4px)" }}>GitHub ↗</a>
              <a href="https://linkedin.com/in/sharon-ekula" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 18px", color: t.muted, borderRadius: 8, fontSize: 13, border: `1px solid ${t.border}`, textDecoration: "none", background: t.surface, backdropFilter: "blur(4px)" }}>LinkedIn ↗</a>
            </div>
          </Reveal>
        </header>

        {/* PROJECTS */}
        <section id="projects" style={{ padding: "44px 32px", borderBottom: `1px solid ${t.border}` }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: t.text }}>Projects</h2>
              <span style={{ fontFamily: "monospace", fontSize: 10, color: t.accent, background: dark ? "rgba(129,140,248,0.08)" : "rgba(79,70,229,0.06)", border: `1px solid ${t.accent}33`, padding: "3px 10px", borderRadius: 20 }}>02</span>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 14, padding: "22px 24px", backdropFilter: "blur(12px)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, color: t.text }}>{p.title}</h3>
                    <span style={{ color: t.dim, fontSize: 14 }}>↗</span>
                  </div>
                  <p style={{ fontFamily: "monospace", fontSize: 10, color: t.accent, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>{p.tag}</p>
                  <p style={{ fontSize: 13, color: t.muted, lineHeight: 1.7, marginBottom: 14 }}>{p.description}</p>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 }}>
                    {p.chips.map((c) => (
                      <span key={c} style={{ fontFamily: "monospace", fontSize: 10, padding: "3px 10px", borderRadius: 20, background: dark ? "rgba(129,140,248,0.08)" : "rgba(79,70,229,0.06)", color: t.accent, border: `1px solid ${t.accent}33` }}>{c}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {p.stack.map((s) => (
                      <span key={s} style={{ fontFamily: "monospace", fontSize: 10, padding: "2px 8px", borderRadius: 4, background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)", color: t.dim, border: `1px solid ${t.border}` }}>{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ padding: "44px 32px", borderBottom: `1px solid ${t.border}` }}>
          <Reveal>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: t.text, marginBottom: 26 }}>Skills</h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {skills.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.05}>
                <div style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: 12, alignItems: "start" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: t.dim, paddingTop: 5 }}>{g.label}</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {g.items.map((item, j) => {
                      const hi = g.hot && j < 4;
                      return (
                        <span key={item} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, border: `1px solid ${hi ? t.accent + "44" : t.border}`, color: hi ? t.accent : t.muted, background: hi ? (dark ? "rgba(129,140,248,0.08)" : "rgba(79,70,229,0.06)") : t.card, fontWeight: hi ? 500 : 400 }}>{item}</span>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "44px 32px" }}>
          <Reveal>
            <div style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 16, padding: "36px 32px", backdropFilter: "blur(12px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
              <div>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: t.text, marginBottom: 10 }}>Let's build something.</h2>
                <p style={{ fontSize: 13, color: t.muted, maxWidth: 360, lineHeight: 1.7 }}>Looking for full-time AI Engineer roles. If you're hiring or building something interesting, reach out.</p>
              </div>
              <a href="mailto:ekulasharon13@gmail.com" style={{ padding: "12px 26px", background: t.accent, color: "#fff", borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>Get in touch →</a>
            </div>
          </Reveal>
        </section>

        <footer style={{ padding: "16px 32px", display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: 10, color: t.dim, borderTop: `1px solid ${t.border}` }}>
          <span>© 2026 Sharon Ekula</span>
          <a href="https://github.com/sharonekula13/portfolio" target="_blank" rel="noopener noreferrer" style={{ color: t.dim, textDecoration: "none" }}>built with next.js · source ↗</a>
        </footer>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </div>
  );
}