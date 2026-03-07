// src/components/sections/HeroSection.tsx
// Desktop-first (1920×1200). Place below <Header /> in your Astro page.
import { useState } from "react"

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

<div className=" p-10 border-2">
    {/* Dashboard visual */}
    <div className="relative overflow-hidden" style={{ height: 600 }}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-background to-transparent" />
      <img
        src="/images/owlysis-dashboard.png"
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
        src="/images/ow-assesment.png"
        alt="Owlysis Assesment"
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* Feature cards */}
    <div className="grid grid-cols-3">
      {[
        ["01", "Take Coding Assessments",
         "Students can select from multiple programming tests based on difficulty level. Each assessment includes a set of coding questions designed to evaluate problem-solving and programming skills."],
        ["02", "Write Code & See Output Instantly",
         "Students can write and run their code directly in the platform. The system compiles the code and shows the output instantly, helping them verify their solution in real time."],
        ["03", "Track Performance & Results",
         "After completing the test, students can view their results, marks, and performance for each assessment. This helps them understand their strengths and improve their coding skills."],
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
export const FooterCTA = () => (
  <div className="grid grid-cols-2 px-20 py-24 border-b border-border items-center">
    <h2 className="text-[68px] leading-[1.08] tracking-[-0.02em] font-normal"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
      Ready to deploy<br />
      your <em className="text-blue-600" style={{ fontStyle: "italic" }}>first agent</em>?
    </h2>
    <div className="pl-20 flex flex-col gap-7">
      <p className="text-[16px] leading-[1.7] text-muted-foreground font-light max-w-[400px]">
        Start free. No credit card required. Your first agent can be live in under an hour.
      </p>
      <div className="flex items-center gap-3">
        <a href="https://app.owlysis.com"
           className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity">
          Start building free
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="/contact-us"
           className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-sm hover:border-foreground transition-colors">
          Talk to sales
        </a>
      </div>
    </div>
  </div>
)

export const CalendarSection = () => (
  <section className="border-b border-border">

    {/* Header row */}
    <div className="grid grid-cols-2 border-b border-border">
      <div className="px-20 py-16 border-r border-border flex flex-col gap-6">
        <div className="w-9 h-9 bg-foreground flex items-center justify-center font-mono text-sm font-medium text-background">
          C
        </div>
        <h2 className="text-[52px] leading-[1.1] tracking-[-0.02em] font-normal max-w-[520px]"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
          Calendar that<br />doesn't flake
        </h2>
      </div>
      <div className="px-20 py-16 flex items-end">
        <p className="text-[16px] leading-[1.7] text-muted-foreground font-light max-w-[440px]">
          No more "who edited this?" panic. Just smooth, drama-free
          workflows that actually help your team get stuff done—for once.
        </p>
      </div>
    </div>

    {/* Calendar visual */}
    <div className="relative overflow-hidden border-b border-border" style={{ height: 900, width:1200}}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-background to-transparent" />
      <img
        src="/images/ow_calender.png"
        alt="Owlysis calendar"
        className="w-full h-full object-cover object-top"
      />
    </div>
  </section>
)

export const ToolsSection = () => (
  <section className="border-b border-border">

    {/* Header row */}
    <div className="grid grid-cols-2 px-20 pt-16 pb-12 border-b border-border">
      <h2 className="text-[52px] leading-[1.1] tracking-[-0.02em] font-normal"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
        Tools that actually<br />pull their weight
      </h2>
      <div className="pl-20 flex items-end pb-1">
        <p className="text-[16px] leading-[1.7] text-muted-foreground font-light max-w-[480px]">
          Ditch the fluff. Get the stuff that helps you move faster, think smarter,
          and actually get things done.
        </p>
      </div>
    </div>

    {/* Top two large cards */}
    <div className="grid grid-cols-2 border-b border-border">

      {/* Left card — Question Bank UI replica */}
      <div className="border-r border-border flex flex-col overflow-hidden">
        <div className="px-10 pt-10 pb-6 flex flex-col gap-3">
          <h3 className="text-[22px] font-medium tracking-[-0.02em] leading-snug">
            Data that actually does something
          </h3>
          <p className="text-[14px] leading-[1.7] text-muted-foreground font-light max-w-[420px]">
            Stop squinting at charts. Make faster, smarter decisions with insights
            that actually matter to your business.
          </p>
        </div>

        {/* Question Bank mock UI */}
        <div className="mx-10 mb-10 border border-[#e5e7eb] rounded-lg overflow-hidden flex flex-col bg-white shadow-sm" style={{ minHeight: 420 }}>

          {/* Top bar */}
          <div className="h-8 bg-[#111] flex items-center px-4">
            <span className="text-[10px] text-white/60 font-mono">
              ⓘ This is a high level prototype — actual dashboard will be designed per your requirements.
            </span>
          </div>

          <div className="flex flex-1 overflow-hidden">

            {/* Sidebar */}
            <div className="w-44 border-r border-[#f0f0f0] flex flex-col flex-shrink-0 py-3">
              {/* Logo */}
              <div className="flex items-center gap-2 px-4 pb-3 mb-1 border-b border-[#f0f0f0]">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">O</span>
                </div>
                <span className="text-[12px] font-semibold">Owlysis</span>
                <span className="text-[12px] text-[#aaa]">/</span>
                <span className="text-[12px] text-[#aaa]">Code</span>
              </div>

              <div className="px-3 py-1">
                <span className="text-[9px] text-[#aaa] uppercase tracking-wider font-mono px-2">App core</span>
              </div>

              {[
                { icon: "⌂", label: "Home", active: false },
                { icon: "📋", label: "Question Bank", active: true },
                { icon: "📝", label: "Assessments", active: false },
                { icon: "📅", label: "Schedules", active: false },
                { icon: "⚙", label: "Settings", active: false },
              ].map(({ icon, label, active }) => (
                <div key={label}
                  className={`flex items-center gap-2 px-3 py-1.5 mx-1 rounded text-[11px] cursor-default
                    ${active ? "bg-blue-50 text-blue-600 font-medium" : "text-[#555]"}`}>
                  <span className="w-3.5 text-center text-[10px]">{icon}</span>
                  {label}
                </div>
              ))}

              <div className="px-3 pt-3 mt-1 border-t border-[#f0f0f0]">
                <span className="text-[9px] text-[#aaa] uppercase tracking-wider font-mono px-2">Ongoing assessments</span>
                <p className="text-[10px] text-[#bbb] px-2 pt-1">No ongoing assessment found</p>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-hidden flex flex-col">

              {/* Toolbar */}
              <div className="px-5 pt-4 pb-3 border-b border-[#f0f0f0] flex items-center justify-between">
                <span className="text-[11px] text-[#aaa]">⊞</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#aaa]">🔔</span>
                  <span className="text-[11px] text-[#aaa]">⊟</span>
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-[10px] text-white font-bold">H</div>
                </div>
              </div>

              {/* Page header */}
              <div className="px-5 pt-4 pb-3">
                <h4 className="text-[16px] font-semibold text-[#111]">Question Bank</h4>
                <p className="text-[11px] text-[#888] mt-0.5">Create and manage your coding questions. Add test cases to validate candidate submissions.</p>
                <div className="flex items-center gap-2 mt-3">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-[10px] font-medium rounded">
                    <span>✦</span> Generate from notes
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-[10px] font-medium rounded">
                    <span>✦</span> Generate one AI
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#e5e7eb] text-[10px] text-[#333] rounded">
                    + New Question
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="flex-1 overflow-hidden">
                {/* Table header */}
                <div className="grid px-5 py-2 border-b border-[#f0f0f0] text-[9px] font-mono text-[#aaa] uppercase tracking-wider"
                     style={{ gridTemplateColumns: "3fr 80px 2fr 50px 60px" }}>
                  <span>Question</span>
                  <span>Language</span>
                  <span>Section</span>
                  <span>Marks</span>
                  <span>Actions</span>
                </div>

                {[
                  ["Sort a List of Numbers in Ascending or Descending Order", "Python", "Chap 3: Lists, functions, tuples and dictionaries, Sets", "5"],
                  ["Store Multiple Student Names in a List",                   "Python", "Chap 3: Lists, functions, tuples and dictionaries, Sets", "5"],
                  ["Convert a String to a List of Characters",                 "Python", "Chap 3: Lists, functions, tuples and dictionaries, Sets", "5"],
                  ["Modify a List by Replacing Specific Values",               "Python", "Chap 3: Lists, functions, tuples and dictionaries, Sets", "5"],
                  ["Create a List of Numbers from 1 to N",                     "Python", "Chap 3: Lists, functions, tuples and dictionaries, Sets", "5"],
                  ["Primal Check: System Security Clearance",                  "C",      "C Programming",                                           "5"],
                  ["PRIME_CHECK: Security Appliance Latency Filter",           "C",      "C Programming",                                           "5"],
                  ["Extract Middle Three Characters from a String",            "Python", "Control Statements",                                      "5"],
                ].map(([q, lang, section, marks], i) => (
                  <div key={i}
                       className="grid items-center px-5 py-2 border-b border-[#f9f9f9] hover:bg-[#fafafa]"
                       style={{ gridTemplateColumns: "3fr 80px 2fr 50px 60px" }}>
                    <span className="text-[11px] text-[#111] truncate pr-3">{q}</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded w-fit
                      ${lang === "Python" ? "bg-[#f3f4f6] text-[#555]" : "bg-[#f3f4f6] text-[#555]"}`}>
                      {lang}
                    </span>
                    <span className="text-[10px] text-[#888] truncate pr-3">{section}</span>
                    <span className="text-[11px] font-medium text-[#111]">{marks}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] text-[#aaa]">✏</span>
                      <span className="text-[10px] text-[#3B82F6] cursor-pointer">Edit</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right card — teamwork */}
      <div className="flex flex-col">
        <div className="px-10 pt-10 pb-6 flex flex-col gap-3">
          <h3 className="text-[22px] font-medium tracking-[-0.02em] leading-snug text-blue-600">
            Teamwork, minus the chaos
          </h3>
          <p className="text-[14px] leading-[1.7] text-muted-foreground font-light max-w-[420px]">
            Ping less, achieve more. Real-time updates and shared progress that
            don't require a group therapy session.
          </p>
        </div>
        {/* Teamwork mock content */}
        <div className="px-10 pb-10 flex flex-col gap-5 flex-1">
          {/* Progress bar */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-[12px] text-muted-foreground font-mono">
              <span>Project Progress</span>
              <span>72%</span>
            </div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: "72%" }} />
            </div>
          </div>
          {/* Activity items */}
          <div className="flex flex-col gap-2 border-b border-border pb-5">
            {[
              ["✓", "Taylor", "marked", "Onboarding flow", "as complete"],
              ["⟲", "Dev team", "updated", "API docs", ""],
              ["◎", "Alex", "is reviewing", "final assets", ""],
            ].map(([icon, who, verb, item, suffix], i) => (
              <div key={i} className="flex items-center gap-2 text-[13px]">
                <span className="text-muted-foreground w-4">{icon}</span>
                <span className="font-medium">{who}</span>
                <span className="text-muted-foreground">{verb}</span>
                <span className="font-semibold">{item}</span>
                {suffix && <span className="text-muted-foreground">{suffix}</span>}
              </div>
            ))}
          </div>
          {/* Checklist */}
          <div className="flex flex-col gap-2">
            {[["✓", "Kickoff Meeting", true], ["○", "Prototype Testing", false], ["○", "Final Review", false]].map(([icon, label, done]) => (
              <div key={label as string} className={`flex items-center gap-2 text-[13px] ${done ? "text-muted-foreground line-through" : ""}`}>
                <span className={done ? "text-green-500" : "text-muted-foreground"}>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom three smaller cards */}
    <div className="grid grid-cols-3">

      {/* Card 1 — Files */}
      <div className="border-r border-border flex flex-col">
        <div className="px-10 pt-10 pb-6 flex flex-col gap-3">
          <h3 className="text-[18px] font-medium tracking-[-0.02em] leading-snug">
            Your files, your clones
          </h3>
          <p className="text-[13px] leading-[1.7] text-muted-foreground font-light">
            Copy what works. Ditch the repetitive setup and get straight to the
            productive part.
          </p>
        </div>
        <div className="px-10 pb-10 flex flex-col gap-3 flex-1">
          {[
            ["Cloned File", "Created 3 days ago", "Clone #1", "/final-final-final.docx"],
            ["Cloned File", "Created 2 minutes ago", "Clone #2", "/final-final-final.docx"],
          ].map(([title, date, clone, path]) => (
            <div key={clone as string} className="border border-border p-4 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-muted-foreground border border-border px-1.5 py-0.5">doc</span>
                <span className="text-[12px] font-medium">{title}</span>
              </div>
              <span className="text-[11px] text-muted-foreground">{date}</span>
              <span className="text-[11px] text-muted-foreground">{clone}</span>
              <span className="text-[11px] font-mono text-foreground">{path}</span>
              <span className="text-[11px] text-blue-600 cursor-pointer mt-1">View Clone →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2 — Shortcuts */}
      <div className="border-r border-border flex flex-col">
        <div className="px-10 pt-10 pb-6 flex flex-col gap-3">
          <h3 className="text-[18px] font-medium tracking-[-0.02em] leading-snug">
            Shortcuts that don't suck
          </h3>
          <p className="text-[13px] leading-[1.7] text-muted-foreground font-light">
            Click less, do more. Access everything important without turning it into
            a treasure hunt.
          </p>
        </div>
        <div className="px-10 pb-10 flex-1">
          {/* Keyboard visual */}
          <div className="border border-border p-4 flex flex-col gap-1.5 bg-slate-50">
            {[
              ["esc","F1","F2","F3","F4","F5"],
              ["`","1","2","3","4","5"],
              ["tab","Q","W","E","R","T"],
              ["","A","S","D","F",""],
              ["","Z","X","C","V","B"],
              ["fn","↑","⌥","⌘","",""],
            ].map((row, ri) => (
              <div key={ri} className="flex gap-1">
                {row.map((k, ki) => (
                  <div key={ki}
                       className={`h-7 flex items-center justify-center border border-border text-[9px] font-mono rounded-sm bg-white
                         ${k === "esc" ? "w-10" : k === "tab" || k === "fn" ? "w-9" : "w-7"}
                         ${!k ? "opacity-0" : ""}`}>
                    {k}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 3 — Integrations */}
      <div className="flex flex-col">
        <div className="px-10 pt-10 pb-6 flex flex-col gap-3">
          <h3 className="text-[18px] font-medium tracking-[-0.02em] leading-snug">
            Integrations that don't break
          </h3>
          <p className="text-[13px] leading-[1.7] text-muted-foreground font-light">
            Plug into your favorite tools without needing an API degree. Everything
            just works.
          </p>
        </div>
        <div className="px-10 pb-10 flex-1">
          <div className="grid grid-cols-5 gap-3">
            {[
              { bg: "#fff", emoji: "🌐" },
              { bg: "#fff", emoji: "📧" },
              { bg: "#fff", emoji: "🎨" },
              { bg: "#fff", emoji: "💙" },
              { bg: "#7289DA", emoji: "💬" },
              { bg: "#E74C3C", emoji: "📋" },
              { bg: "#fff", emoji: "📝" },
              { bg: "#FF0000", emoji: "▶️" },
              { bg: "#FF6B6B", emoji: "✖️" },
              { bg: "#fff", emoji: "🤖" },
              { bg: "#F7B731", emoji: "💎" },
              { bg: "#3B5998", emoji: "👤" },
              { bg: "#1C1C1C", emoji: "⏺" },
              { bg: "#E91E8C", emoji: "🎯" },
              { bg: "#FF6D00", emoji: "🔥" },
              { bg: "#FFFC00", emoji: "👻" },
              { bg: "#333", emoji: "🐙" },
              { bg: "#F05033", emoji: "🦊" },
              { bg: "#007ACC", emoji: "⚡" },
              { bg: "#FF4500", emoji: "🤖" },
            ].map((item, i) => (
              <div key={i}
                   className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-lg bg-white">
                {item.emoji}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </section>
)


export const DemoSection = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative overflow-hidden border-b border-border" style={{ minHeight: 680 }}>

      {/* Pastel gradient background */}
      <div className="absolute inset-0 z-0" style={{
        background: "radial-gradient(ellipse at 20% 40%, #d8cff5 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, #b8dff5 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, #f5d0d8 0%, transparent 50%), radial-gradient(ellipse at 90% 70%, #d8f0e8 0%, transparent 45%), #e8f0f5"
      }} />

      {/* Content — vertically centered */}
      <div className="relative z-10 flex flex-col items-center justify-center" style={{ minHeight: 580 }}>

        {/* Main text */}
        <p className="text-center text-[22px] leading-[1.6] text-[#111] max-w-[780px] px-8"
           style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
          Experience Owlysis in action — discover how our platform helps you move faster,
          work smarter, and stay ahead.
        </p>

        {/* Scrolling logos marquee */}
        <div className="mt-14 w-full overflow-hidden">
          <div className="flex gap-20 items-center whitespace-nowrap"
               style={{ animation: "marquee 28s linear infinite" }}>
            {["Dropbox","talkdesk","checkout.com","talkdesk","checkout.com","Dropbox","talkdesk","checkout.com","talkdesk","checkout.com"].map((name, i) => (
              <span key={i} className="text-[15px] font-medium text-[#333] tracking-tight flex-shrink-0 flex items-center gap-2">
                {name === "Dropbox" && <><span className="text-blue-500">⬡</span> Dropbox</>}
                {name === "talkdesk" && <span className="font-mono">talkd<span className="text-blue-400">e</span>sk</span>}
                {name === "checkout.com" && <span>✕ checkout<span className="text-[#aaa]">.com</span></span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 bg-[#0D0D0B] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        style={{ height: 64 }}
        onClick={() => setOpen(true)}
      >
        <span className="text-[15px] font-medium text-white tracking-[-0.01em]">
          Book a demo
        </span>
      </div>

      {/* Form overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.45)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-full max-w-[560px] p-10 flex flex-col gap-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-[#aaa] hover:text-[#333] text-xl leading-none"
            >
              ✕
            </button>

            <h2 className="text-[26px] font-normal tracking-[-0.02em]"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              Book a demo with our team
            </h2>

            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-4 bg-[#f5f5f5] text-[14px] text-[#333] placeholder-[#aaa] outline-none border border-transparent focus:border-[#333] transition-colors"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-4 bg-[#f5f5f5] text-[14px] text-[#333] placeholder-[#aaa] outline-none border border-transparent focus:border-[#333] transition-colors"
            />
            <input
              type="text"
              placeholder="Company name"
              className="w-full px-4 py-4 bg-[#f5f5f5] text-[14px] text-[#333] placeholder-[#aaa] outline-none border border-transparent focus:border-[#333] transition-colors"
            />
            <textarea
              placeholder="Anything specific you'd like to cover?"
              rows={5}
              className="w-full px-4 py-4 bg-[#f5f5f5] text-[14px] text-[#333] placeholder-[#aaa] outline-none border border-transparent focus:border-[#333] transition-colors resize-y"
            />

            <button
              className="w-full py-4 bg-[#0D0D0B] text-white text-[15px] font-medium hover:opacity-80 transition-opacity"
              onClick={() => setOpen(false)}
            >
              Book a Demo
            </button>

            <p className="text-[12px] text-[#aaa]">
              Fill out the form and we'll get back to you to schedule a personalized walkthrough.
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  )
}




export const SiteFooter = () => {
  const cols = [
    {
      heading: "Product",
      links: ["Features", "Pricing", "Docs", "Changelog", "Roadmap"],
    },
    {
      heading: "Company",
      links: ["About", "Blog", "Careers", "Contact", "Press"],
    },
    {
      heading: "Legal",
      links: ["Privacy", "Terms", "Security", "Status", "Cookies"],
    },
  ]

  const socials = [
    {
      label: "X / Twitter",
      href: "https://twitter.com",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="border-t border-border">

      {/* Main 4-col grid */}
      <div className="grid grid-cols-4">

        {/* Brand column */}
        <div className="px-20 py-16 border-r border-border flex flex-col gap-8">

          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="6" height="6" fill="#F7F6F2"/>
                <rect x="9" y="1" width="6" height="6" fill="#F7F6F2"/>
                <rect x="1" y="9" width="6" height="6" fill="#F7F6F2" opacity="0.4"/>
                <rect x="9" y="9" width="6" height="6" fill="#F7F6F2" opacity="0.7"/>
              </svg>
            </div>
            <span className="text-[16px] font-semibold tracking-[-0.02em]">Owlysis</span>
          </div>

          {/* Tagline */}
          <p className="text-[13px] leading-[1.7] text-muted-foreground font-light max-w-[220px]">
            The last agent platform you'll ever need. Build, deploy, and monitor AI agents — fast.
          </p>

          {/* Newsletter */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em]">
              Get product updates
            </span>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2.5 text-[12px] border border-border bg-transparent placeholder-muted-foreground/50 outline-none focus:border-foreground transition-colors"
              />
              <button className="px-4 py-2.5 bg-foreground text-background text-[12px] font-medium border border-foreground hover:opacity-80 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map((col, i) => (
          <div
            key={col.heading}
            className={`px-16 py-16 flex flex-col gap-6 ${i < cols.length - 1 ? "border-r border-border" : ""}`}
          >
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.14em]">
              {col.heading}
            </span>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-[14px] text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Trust badges row */}
      <div className="px-20 py-5 border-t border-border flex items-center gap-8">
        {["SOC 2 Type II", "GDPR Compliant", "99.9% Uptime SLA", "End-to-end Encrypted"].map((badge) => (
          <div key={badge} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            <span className="text-[11px] font-mono text-muted-foreground">{badge}</span>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="px-20 py-5 border-t border-border flex items-center justify-between">
        <span className="text-[12px] font-mono text-muted-foreground">
          © 2025 Owlysis, Inc. All rights reserved.
        </span>
        <span className="text-[12px] font-mono text-muted-foreground">
          Made with ♥ in Pune, India
        </span>
      </div>

    </footer>
  )
}
