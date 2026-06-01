export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg text-text">
      {/* Ambient glow background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/60 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-sm font-semibold tracking-tight">
            sharon<span className="text-accent">.</span>
          </a>
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#projects" className="hover:text-text transition-colors">Projects</a>
            <a href="#skills" className="hover:text-text transition-colors">Skills</a>
            <a href="#contact" className="hover:text-text transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs text-text-muted mb-8" style={{ fontFamily: "var(--font-mono), monospace" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for full-time roles
          </div>

          <h1 className="text-5xl font-semibold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Sharon Ekula
          </h1>
          <p className="text-text-muted mt-3 text-sm" style={{ fontFamily: "var(--font-mono), monospace" }}>
            software engineer / full-stack / ai &amp; llms
          </p>

          <p className="text-text-muted mt-8 leading-relaxed text-[15px] max-w-xl">
            MS in Computer Science from NJIT and AWS Certified AI Practitioner. I build full-stack AI products end-to-end — RAG pipelines, production APIs, and cloud infrastructure. Based in Newark, NJ.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            <a href="mailto:ekulasharon13@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-text text-bg rounded-lg hover:bg-white/90 transition-colors font-medium">
              <span>Get in touch</span>
              <span>→</span>
            </a>
            <a href="https://github.com/sharonekula13" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border bg-surface rounded-lg hover:bg-surface-hover hover:border-border-hover transition-all text-text-muted hover:text-text">
              GitHub <span>↗</span>
            </a>
            <a href="https://linkedin.com/in/sharon-ekula" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border bg-surface rounded-lg hover:bg-surface-hover hover:border-border-hover transition-all text-text-muted hover:text-text">
              LinkedIn <span>↗</span>
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border bg-surface rounded-lg hover:bg-surface-hover hover:border-border-hover transition-all text-text-muted hover:text-text">
              Résumé <span>↗</span>
            </a>
          </div>
        </header>

        {/* Projects */}
        <section id="projects" className="mb-24 scroll-mt-20">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-sm uppercase tracking-wider text-text-muted">
              <span className="text-accent mr-2">#</span>Projects
            </h2>
            <span className="text-xs text-text-dim" style={{ fontFamily: "var(--font-mono), monospace" }}>03</span>
          </div>

          <div className="space-y-3">
            {/* Project 1 */}
            <a href="#" className="group block p-6 border border-border bg-surface rounded-xl hover:border-border-hover hover:bg-surface-hover transition-all">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
                <h3 className="text-base font-semibold text-text">Agentic RAG Q&amp;A System</h3>
                <span className="text-text-dim text-sm group-hover:text-accent group-hover:translate-x-1 transition-all">↗</span>
              </div>
              <p className="text-text-muted leading-relaxed text-sm mb-4">
                End-to-end retrieval-augmented Q&amp;A over document corpora. Hybrid search (BM25 + dense FAISS embeddings) with page-level citation tracking. Runs Llama 3.2 locally via Ollama with token streaming for privacy.
              </p>

              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 border border-accent/20 text-accent-glow rounded-md text-xs" style={{ fontFamily: "var(--font-mono), monospace" }}>
                  <span className="opacity-60">Recall@5</span><span className="font-semibold">75%</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 border border-accent/20 text-accent-glow rounded-md text-xs" style={{ fontFamily: "var(--font-mono), monospace" }}>
                  <span className="opacity-60">MRR</span><span className="font-semibold">47.92%</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 text-xs text-text-dim" style={{ fontFamily: "var(--font-mono), monospace" }}>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">Python</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">FastAPI</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">LangChain</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">FAISS</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">Ollama</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">Docker</span>
              </div>
            </a>

            {/* Project 2 */}
            <a href="#" className="group block p-6 border border-border bg-surface rounded-xl hover:border-border-hover hover:bg-surface-hover transition-all">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
                <h3 className="text-base font-semibold text-text">Full-Stack Web Platform</h3>
                <span className="text-text-dim text-sm group-hover:text-accent group-hover:translate-x-1 transition-all">↗</span>
              </div>
              <p className="text-text-muted leading-relaxed text-sm mb-4">
                Production-grade platform with JWT auth and role-based access across three user types. Jakarta Bean Validation and OpenAPI 3.0 spec, backed by a normalized PostgreSQL schema with indexed queries.
              </p>

              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 border border-accent/20 text-accent-glow rounded-md text-xs" style={{ fontFamily: "var(--font-mono), monospace" }}>
                  <span className="opacity-60">REST endpoints</span><span className="font-semibold">15+</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 border border-accent/20 text-accent-glow rounded-md text-xs" style={{ fontFamily: "var(--font-mono), monospace" }}>
                  <span className="opacity-60">User roles</span><span className="font-semibold">3</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 text-xs text-text-dim" style={{ fontFamily: "var(--font-mono), monospace" }}>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">Java</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">Spring Boot</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">React</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">TypeScript</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">Postgres</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">Docker</span>
              </div>
            </a>

            {/* Project 3 */}
            <a href="#" className="group block p-6 border border-border bg-surface rounded-xl hover:border-border-hover hover:bg-surface-hover transition-all">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
                <h3 className="text-base font-semibold text-text">Cloud-Native Inference Service</h3>
                <span className="text-text-dim text-sm group-hover:text-accent group-hover:translate-x-1 transition-all">↗</span>
              </div>
              <p className="text-text-muted leading-relaxed text-sm mb-4">
                Distributed inference pipeline on AWS with an event-driven <code className="text-text bg-bg border border-border px-1.5 py-0.5 rounded text-[12px]" style={{ fontFamily: "var(--font-mono), monospace" }}>S3 → SQS → EC2</code> worker architecture. Auto Scaling triggered by CloudWatch queue-depth alarms; ONNX Runtime behind a JWT-secured Spring Boot API.
              </p>

              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 border border-accent/20 text-accent-glow rounded-md text-xs" style={{ fontFamily: "var(--font-mono), monospace" }}>
                  <span className="opacity-60">Architecture</span><span className="font-semibold">Event-driven</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 border border-accent/20 text-accent-glow rounded-md text-xs" style={{ fontFamily: "var(--font-mono), monospace" }}>
                  <span className="opacity-60">IaC</span><span className="font-semibold">Terraform</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 text-xs text-text-dim" style={{ fontFamily: "var(--font-mono), monospace" }}>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">AWS</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">Spring Boot</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">ONNX</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">Terraform</span>
                <span className="px-2 py-0.5 bg-bg border border-border rounded">GitHub Actions</span>
              </div>
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-24 scroll-mt-20">
          <h2 className="text-sm uppercase tracking-wider text-text-muted mb-8">
            <span className="text-accent mr-2">#</span>Skills
          </h2>

          <div className="space-y-5">
            {[
              { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Bash"] },
              { label: "Frontend", items: ["React", "TypeScript", "Tailwind", "Next.js"] },
              { label: "Backend", items: ["FastAPI", "Spring Boot", "REST", "GraphQL", "JWT", "OpenAPI"] },
              { label: "Data", items: ["PostgreSQL", "MySQL", "FAISS", "Event-driven"] },
              { label: "AI / LLM", items: ["LangChain", "RAG", "Hybrid Retrieval", "Embeddings", "Ollama", "ONNX"] },
              { label: "Cloud / DevOps", items: ["AWS", "Docker", "Terraform", "GitHub Actions", "Linux"] },
            ].map((group) => (
              <div key={group.label} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-6">
                <div className="text-xs uppercase tracking-wider text-text-dim pt-1.5" style={{ fontFamily: "var(--font-mono), monospace" }}>
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="inline-flex items-center px-2.5 py-1 text-xs bg-surface border border-border rounded-md text-text-muted hover:border-border-hover hover:text-text transition-colors" style={{ fontFamily: "var(--font-mono), monospace" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-24 scroll-mt-20">
          <h2 className="text-sm uppercase tracking-wider text-text-muted mb-8">
            <span className="text-accent mr-2">#</span>Contact
          </h2>

          <div className="relative overflow-hidden p-8 border border-border bg-surface rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 pointer-events-none" />
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Let&apos;s build something.
              </h3>
              <p className="text-text-muted leading-relaxed mb-6 max-w-md text-[15px]">
                I&apos;m looking for full-time software engineering roles. If you&apos;re hiring or building something interesting, I&apos;d love to hear from you.
              </p>
              <a href="mailto:ekulasharon13@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-text text-bg rounded-lg hover:bg-white/90 transition-colors text-sm font-medium">
                ekulasharon13@gmail.com <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-6 text-xs text-text-dim flex justify-between flex-wrap gap-2" style={{ fontFamily: "var(--font-mono), monospace" }}>
          <span>© 2026 sharon ekula</span>
          <a href="https://github.com/sharonekula13/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
            built with next.js · source ↗
          </a>
        </footer>
      </main>
    </div>
  );
}