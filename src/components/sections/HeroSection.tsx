// src/components/sections/HeroSection.tsx
// Desktop-first (1920×1200). Place below <Header /> in your Astro page.


// HERO SECTION
export const HeroSection = () => (
  <section className="border-b border-border">

    {/* Headline + sub */}
    <div className="grid grid-cols-2 px-20 pt-20 pb-14 border-b border-border">
      <h1 className="text-[88px] leading-[1.05] tracking-[-0.02em] font-normal"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
        The last<br />
        <em className="text-blue-600" style={{ fontStyle: "italic" }}>agent platform</em><br />
        you'll ever need
      </h1>
      <div className="pl-20 flex flex-col justify-end gap-8 pb-2">
        <p className="text-[17px] leading-[1.65] text-muted-foreground font-light max-w-[480px]">
          Owlysis lets you build, deploy, and monitor AI agents without the overhead.
          Automate complex workflows, connect your tools, and let your agents run—so
          your team can focus on what matters.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://app.owlysis.com"
             className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity">
            Get started free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/demo"
             className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-sm hover:border-foreground transition-colors">
            Watch demo
          </a>
        </div>
      </div>
    </div>

<div className="bg-orange-50 p-10 border-2">
    {/* Dashboard visual */}
    <div className="relative overflow-hidden" style={{ height: 600 }}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-background to-transparent" />
      <img
        src="/images/dashboard.png"
        alt="Owlysis dashboard"
        className="w-full h-full object-cover object-top"
      />
    </div>
</div>
  </section>
)

// FEATURE SECTION

export const FeatureSection = () => (
  <section className="border-b border-border">

    {/* Header row */}
    <div className="bg-blue-50 p-10 mt-18">
    <div className="grid grid-cols-2 border-b border-border">
      <div className="px-20 py-16 border-r border-border flex flex-col gap-6">
        <div className="w-9 h-9 bg-blue-600 flex items-center justify-center font-mono text-sm font-medium text-white">
          M
        </div>
        <h2 className="text-[52px] leading-[1.1] tracking-[-0.02em] font-normal max-w-[520px]"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
          Making teamwork<br />slightly less painful
        </h2>
      </div>
      <div className="px-20 py-16 flex items-end">
        <p className="text-[16px] leading-[1.7] text-muted-foreground font-light max-w-[440px]">
          No more "who edited this?" panic. Just smooth, drama-free workflows that
          actually help your team get stuff done—for once. Owlysis keeps everyone in
          sync without the overhead.
        </p>
      </div>
    </div>

    {/* Feature visual */}
    <div className="relative overflow-hidden border-b border-border" style={{ height: 550 }}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-background to-transparent" />
      <img
        src="/images/owlysis-assesment.png"
        alt="Owlysis Assesment"
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* Feature cards */}
    <div className="grid grid-cols-3">
      {[
        ["01", "Invite your chaos crew",
         "Wrangle your team into one place and pretend it's organised. Real-time updates keep everyone from screaming at each other across Slack."],
        ["02", "Edit together (without fighting)",
         "No more endless file versions like 'final-FINAL-v3'. Everyone edits the same thing. Like magic. Or witchcraft. Either works."],
        ["03", "Feedback without the awkward",
         "Drop comments, ask questions, and critique stuff—without the passive-aggressive email chains that ruin team morale."],
      ].map(([num, title, body], i) => (
        <div key={num} className={`px-20 py-14 flex flex-col gap-4 ${i < 2 ? "border-r border-border" : ""}`}>
          <span className="text-[11px] font-mono text-muted-foreground tracking-[0.1em]">{num}</span>
          <h3 className="text-[18px] font-medium tracking-[-0.02em] leading-snug">{title}</h3>
          <p className="text-[14px] leading-[1.7] text-muted-foreground font-light">{body}</p>
        </div>
      ))}
    </div>
    </div>
  </section>
)


// STATS BAND

export const StatsBand = () => (
  <div className="grid grid-cols-4 border-b border-border">
    {[
      ["12k", "Agents deployed globally"],
      ["99%", "Uptime SLA guaranteed"],
      ["3×",  "Faster than building in-house"],
      ["48h", "From sign-up to first agent live"],
    ].map(([val, lbl], i) => (
      <div key={lbl} className={`px-20 py-14 flex flex-col gap-2 ${i < 3 ? "border-r border-border" : ""}`}>
        <span className="text-[56px] leading-none tracking-[-0.03em] font-normal text-blue-600"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" }}>
          {val}
        </span>
        <span className="text-[13px] text-muted-foreground font-light">{lbl}</span>
      </div>
    ))}
  </div>
)
