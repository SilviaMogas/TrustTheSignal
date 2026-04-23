import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Book — Trust the Signal",
  description: "Design system and brand guidelines for Trust the Signal.",
};

const ColorSwatch = ({
  hex,
  name,
  role,
  light = false,
}: {
  hex: string;
  name: string;
  role: string;
  light?: boolean;
}) => (
  <div className="flex flex-col gap-3">
    <div
      className="w-full h-28 border border-ink"
      style={{ backgroundColor: hex }}
    />
    <div>
      <p
        className="font-meta text-[0.6rem] font-semibold tracking-[0.2em] uppercase"
        style={{ color: light ? "#111111" : "#6b6b6b" }}
      >
        {name}
      </p>
      <p className="font-display text-xl font-bold text-ink">{hex}</p>
      <p className="font-meta text-[0.6rem] tracking-wide text-ink-gray uppercase mt-1">
        {role}
      </p>
    </div>
  </div>
);

const TypeSpecimen = ({
  label,
  family,
  cssClass,
  sample,
  weights,
}: {
  label: string;
  family: string;
  cssClass: string;
  sample: string;
  weights: string[];
}) => (
  <div className="border-t border-ink pt-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12 items-start">
      <div>
        <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray">
          {label}
        </p>
        <p className="font-meta text-[0.6rem] tracking-wide text-ink-gray mt-1">
          {family}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {weights.map((w) => (
            <span
              key={w}
              className="font-meta text-[0.55rem] tracking-widest uppercase border border-ink px-2 py-1"
            >
              {w}
            </span>
          ))}
        </div>
      </div>
      <p className={`${cssClass} text-ink leading-tight`}>{sample}</p>
    </div>
  </div>
);

const Rule = () => (
  <div className="w-full my-12" style={{ borderTop: "6px double #111111" }} />
);

export default function BrandPage() {
  return (
    <main className="bg-paper text-ink min-h-screen">
      {/* ── COVER ── */}
      <section className="px-4 md:px-8 py-20 border-b border-ink">
        <div className="max-w-7xl mx-auto">
          <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-6">
            Brand Guidelines · 2025
          </p>
          <h1
            className="text-ink leading-none"
            style={{
              fontFamily: "var(--font-blackletter)",
              fontSize: "clamp(3.5rem, 12vw, 8rem)",
            }}
          >
            Trust the Sign
            <span className="text-ink-red">a</span>l
          </h1>
          <p className="font-body text-base italic text-ink-gray mt-6 max-w-xl">
            Dispatches from the trading floor — filtering signal from noise.
          </p>
          <p className="font-meta text-[0.6rem] tracking-[0.2em] uppercase text-ink-gray mt-3">
            by Silvia Mogas
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* ── MISSION ── */}
        <section className="py-16 border-b border-ink">
          <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-8">
            01 · Brand Mission
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <p
                className="font-display text-ink leading-snug"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 700 }}
              >
                &ldquo;The best conversations in finance happen behind closed doors.
                We bring them to you.&rdquo;
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-2">
                  What we are
                </p>
                <p className="font-body text-sm text-ink leading-relaxed">
                  A long-form podcast for serious market participants — traders,
                  economists, portfolio managers — who think in cycles, not
                  headlines.
                </p>
              </div>
              <div>
                <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-2">
                  What we are not
                </p>
                <p className="font-body text-sm text-ink leading-relaxed">
                  Not a daily news recap. Not hot takes. Not content for
                  retail. We filter signal from noise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COLORS ── */}
        <section className="py-16 border-b border-ink">
          <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-8">
            02 · Color Palette
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <ColorSwatch
              hex="#f4f1ea"
              name="Paper"
              role="Primary background"
              light
            />
            <ColorSwatch hex="#111111" name="Ink" role="Primary text & borders" />
            <ColorSwatch hex="#d62828" name="Signal Red" role="Accent · Emphasis" />
            <ColorSwatch
              hex="#6b6b6b"
              name="Ink Gray"
              role="Metadata · Secondary text"
            />
          </div>

          {/* Color usage notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink">
            {[
              {
                rule: "Paper (#f4f1ea) is always the background — never pure white or pure black.",
              },
              {
                rule: "Signal Red (#d62828) is used sparingly: logo accent, dropcaps, focus rings, hover states only.",
              },
              {
                rule: "Ink Gray (#6b6b6b) is reserved for metadata, captions, and secondary labels — never for body copy.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 ${i < 2 ? "md:border-r border-b md:border-b-0 border-ink" : ""}`}
              >
                <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-2">
                  Rule {i + 1}
                </p>
                <p className="font-body text-sm text-ink leading-relaxed">
                  {item.rule}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TYPOGRAPHY ── */}
        <section className="py-16 border-b border-ink">
          <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-8">
            03 · Typography
          </p>

          <div className="space-y-8">
            <TypeSpecimen
              label="Blackletter · Masthead only"
              family="UnifrakturMaguntia"
              cssClass="font-blackletter"
              sample="Trust the Signal"
              weights={["400 Regular"]}
            />
            <TypeSpecimen
              label="Display · Headlines & Dropcaps"
              family="Playfair Display"
              cssClass="font-display text-4xl font-bold"
              sample="The Liquidity Mirage in Private Credit"
              weights={["400", "600", "700", "800", "900", "Italic"]}
            />
            <TypeSpecimen
              label="Body · Paragraphs & Captions"
              family="Lora"
              cssClass="font-body text-base"
              sample="Many LPs are confusing duration for stability. Who owns the duration — and why the next liquidity event will catch people off guard."
              weights={["400", "500", "600", "700", "Italic"]}
            />
            <TypeSpecimen
              label="Meta · Labels, Kickers & Buttons"
              family="Barlow Condensed"
              cssClass="font-meta text-sm font-semibold tracking-[0.2em] uppercase"
              sample="New Episode · Capital Markets · Vol. 1 No. 23"
              weights={["400", "500", "600", "700"]}
            />
          </div>

          <Rule />

          {/* Type scale */}
          <div className="space-y-4">
            <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-6">
              Type Scale
            </p>
            {[
              { label: "Masthead", size: "clamp(3rem, 14vw, 9rem)", example: "Trust the Signal", cls: "font-blackletter" },
              { label: "Hero Headline", size: "clamp(2rem, 5vw, 4rem)", example: "The Liquidity Mirage", cls: "font-display font-bold" },
              { label: "Section Head", size: "1.875rem (3xl)", example: "About the Host", cls: "font-display font-bold" },
              { label: "Card Headline", size: "1.25rem (xl)", example: "Basis Risk and the Dealer Balance Sheet", cls: "font-display font-bold" },
              { label: "Body Copy", size: "1rem (base)", example: "A frank conversation about duration, credit, and liquidity.", cls: "font-body" },
              { label: "Kicker / Meta", size: "0.55–0.65rem", example: "NEW EPISODE · CAPITAL MARKETS", cls: "font-meta font-semibold tracking-[0.2em] uppercase" },
            ].map((row) => (
              <div key={row.label} className="flex items-baseline gap-4 border-t border-ink pt-4">
                <span className="font-meta text-[0.55rem] tracking-wide uppercase text-ink-gray w-32 shrink-0">
                  {row.label}
                </span>
                <span className={`${row.cls} text-ink flex-1`} style={{ fontSize: row.size }}>
                  {row.example}
                </span>
                <span className="font-meta text-[0.5rem] text-ink-gray hidden md:block shrink-0">
                  {row.size}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── VISUAL ELEMENTS ── */}
        <section className="py-16 border-b border-ink">
          <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-8">
            04 · Visual Elements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink mb-10">
            {/* Paper texture */}
            <div className="p-8 md:border-r border-b md:border-b-0 border-ink">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-4">
                Paper Grain Texture
              </p>
              <div
                className="w-full h-32 bg-paper border border-ink"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "repeat",
                  backgroundSize: "300px 300px",
                }}
              />
              <p className="font-body text-xs text-ink-gray mt-3 leading-relaxed">
                SVG-based noise overlay at 12% opacity. Applied to the body to
                simulate newsprint. Never remove — it grounds the aesthetic.
              </p>
            </div>

            {/* Double rule divider */}
            <div className="p-8">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-4">
                Double Rule Divider
              </p>
              <div className="flex flex-col justify-center h-32 gap-6">
                <div style={{ borderTop: "6px double #111111", width: "100%" }} />
                <div style={{ borderTop: "1px solid #111111", width: "100%" }} />
              </div>
              <p className="font-body text-xs text-ink-gray mt-3 leading-relaxed">
                Double rule: 6px double border. Used between major sections.
                Single rule: 1px solid. Used between cards and sub-sections.
              </p>
            </div>
          </div>

          {/* Dropcap & Classified box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink border-t-0">
            <div className="p-8 md:border-r border-b md:border-b-0 border-ink">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-4">
                Dropcap
              </p>
              <p className="font-body text-sm text-ink leading-relaxed">
                <span
                  className="font-display font-bold text-ink-red float-left mr-2 leading-none"
                  style={{ fontSize: "4.2rem", lineHeight: 0.82 }}
                >
                  M
                </span>
                any LPs are confusing duration for stability. A frank conversation
                about basis risk, the dealer balance sheet, and who owns the
                duration when liquidity dries up.
              </p>
            </div>
            <div className="p-8">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-4">
                Classified Box
              </p>
              <div style={{ border: "6px double #111111" }} className="p-4">
                <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-1">
                  Subscribe · Substack
                </p>
                <p className="font-body text-sm text-ink">
                  Weekly memos from Silvia, straight from the trading floor.
                </p>
              </div>
              <p className="font-body text-xs text-ink-gray mt-3 leading-relaxed">
                Double-border box for callouts and subscription prompts.
                Mirrors the visual language of classified print ads.
              </p>
            </div>
          </div>
        </section>

        {/* ── BUTTONS & INTERACTIONS ── */}
        <section className="py-16 border-b border-ink">
          <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-8">
            05 · Buttons & Interactive States
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink mb-10">
            {/* Primary CTA */}
            <div className="p-8 md:border-r border-b md:border-b-0 border-ink">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-6">
                Primary CTA
              </p>
              <div className="space-y-4">
                <button className="bg-ink text-paper font-meta text-[0.6rem] font-semibold tracking-[0.18em] uppercase px-8 py-4 block">
                  Subscribe Now
                </button>
                <button
                  className="font-meta text-[0.6rem] font-semibold tracking-[0.18em] uppercase px-8 py-4 block"
                  style={{ backgroundColor: "#d62828", color: "#f4f1ea" }}
                >
                  Hover State
                </button>
              </div>
              <p className="font-body text-xs text-ink-gray mt-4 leading-relaxed">
                Default: bg-ink · Hover: bg-ink-red · 150ms transition
              </p>
            </div>

            {/* Secondary */}
            <div className="p-8 md:border-r border-b md:border-b-0 border-ink">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-6">
                Secondary / Outline
              </p>
              <div className="space-y-4">
                <button className="listen-btn">▶ Listen</button>
                <button
                  className="font-meta text-[0.6rem] font-semibold tracking-[0.18em] uppercase px-4 py-2 block"
                  style={{
                    border: "1px solid #111111",
                    backgroundColor: "#111111",
                    color: "#f4f1ea",
                  }}
                >
                  Hover State
                </button>
              </div>
              <p className="font-body text-xs text-ink-gray mt-4 leading-relaxed">
                1px border ink · Hover: fills ink bg · Barlow Condensed 600
              </p>
            </div>

            {/* Nav links */}
            <div className="p-8">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-6">
                Navigation Links
              </p>
              <div className="space-y-3">
                {["Episodes", "About", "Subscribe", "Contact"].map((link) => (
                  <p
                    key={link}
                    className="font-meta text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-ink"
                  >
                    {link}
                  </p>
                ))}
                <p className="font-meta text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-ink-red">
                  Hover State ↗
                </p>
              </div>
              <p className="font-body text-xs text-ink-gray mt-4 leading-relaxed">
                Hover: text-ink-red · 150ms transition
              </p>
            </div>
          </div>

          {/* Focus ring */}
          <div className="border border-ink p-6">
            <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-3">
              Focus Ring (Accessibility)
            </p>
            <button
              className="bg-ink text-paper font-meta text-[0.6rem] font-semibold tracking-[0.18em] uppercase px-8 py-4"
              style={{ outline: "2px solid #d62828", outlineOffset: "2px" }}
            >
              Focused Element
            </button>
            <p className="font-body text-xs text-ink-gray mt-3">
              2px solid Signal Red (#d62828) · 2px offset · Always visible on
              keyboard navigation
            </p>
          </div>
        </section>

        {/* ── LAYOUT ── */}
        <section className="py-16 border-b border-ink">
          <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-8">
            06 · Layout & Grid
          </p>

          <div className="space-y-6">
            {[
              { label: "Max Width", value: "1280px (max-w-7xl)" },
              { label: "Side Padding · Mobile", value: "1rem (px-4)" },
              { label: "Side Padding · Desktop", value: "2rem (px-8)" },
              { label: "Hero Grid", value: "3fr · 2fr at lg breakpoint" },
              { label: "Episodes Grid", value: "1 col → 2 col (md) → 3 col (lg)" },
              { label: "About Grid", value: "2fr · 3fr at lg breakpoint" },
              { label: "Footer Grid", value: "1 col → 3 col (md)" },
              { label: "Column Dividers", value: "1px solid ink — no gap between columns" },
              { label: "Section Vertical Padding", value: "py-10 to py-12" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center gap-4 border-t border-ink pt-4"
              >
                <span className="font-meta text-[0.55rem] tracking-wide uppercase text-ink-gray w-48 shrink-0">
                  {row.label}
                </span>
                <span className="font-body text-sm text-ink">{row.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── TONE OF VOICE ── */}
        <section className="py-16 border-b border-ink">
          <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-8">
            07 · Tone of Voice
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink mb-8">
            <div className="p-8 md:border-r border-ink">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-6">
                We Write Like This
              </p>
              <div className="space-y-4">
                {[
                  "Many LPs are confusing duration for stability.",
                  "Who owns the duration — and why the next liquidity event will catch people off guard.",
                  "A frank conversation about basis risk and the dealer balance sheet.",
                  "Dispatches from the trading floor — filtering signal from noise.",
                ].map((copy, i) => (
                  <p
                    key={i}
                    className="font-body text-sm text-ink leading-relaxed border-l-2 border-ink pl-4"
                  >
                    {copy}
                  </p>
                ))}
              </div>
            </div>
            <div className="p-8">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-6">
                We Never Write Like This
              </p>
              <div className="space-y-4">
                {[
                  "🔥 This episode is FIRE — you don't want to miss it!",
                  "Everything you need to know about markets in 2025.",
                  "Top 10 trading tips from Wall Street insiders.",
                  "Like and subscribe for more amazing content every day!",
                ].map((copy, i) => (
                  <p
                    key={i}
                    className="font-body text-sm text-ink-gray leading-relaxed border-l-2 border-ink-gray pl-4 line-through opacity-60"
                  >
                    {copy}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink border-t-0">
            {[
              { word: "Direct", desc: "State the insight immediately. No preamble." },
              { word: "Precise", desc: "Use the right word. Avoid hedge words like 'maybe' or 'interesting'." },
              { word: "Insider", desc: "Write as if you've been in the room. No translation for beginners." },
            ].map((item, i) => (
              <div
                key={item.word}
                className={`p-6 ${i < 2 ? "md:border-r border-b md:border-b-0 border-ink" : ""}`}
              >
                <p className="font-display text-2xl font-bold text-ink mb-2">
                  {item.word}
                </p>
                <p className="font-body text-sm text-ink-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ANIMATION ── */}
        <section className="py-16 border-b border-ink">
          <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-8">
            08 · Motion & Animation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink">
            {[
              {
                label: "Fade-in on scroll",
                specs: [
                  "Duration: 650ms",
                  "Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "Start: opacity 0, translateY 14px",
                  "Trigger: IntersectionObserver −60px margin",
                  "Stagger: +0.1s per column",
                ],
              },
              {
                label: "Hover transitions",
                specs: [
                  "Color changes: 150–200ms ease",
                  "Button fill: 150ms",
                  "Icon color: 150ms",
                  "Nav link color: 150ms",
                  "Never animate layout, size, or position on hover",
                ],
              },
            ].map((block, i) => (
              <div
                key={block.label}
                className={`p-8 ${i === 0 ? "md:border-r border-b md:border-b-0 border-ink" : ""}`}
              >
                <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-4">
                  {block.label}
                </p>
                <ul className="space-y-2">
                  {block.specs.map((s) => (
                    <li key={s} className="font-body text-sm text-ink flex gap-2">
                      <span className="text-ink-red shrink-0">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── PHOTO TREATMENT ── */}
        <section className="py-16">
          <p className="font-meta text-[0.55rem] font-semibold tracking-[0.25em] uppercase text-ink-gray mb-8">
            09 · Photo Treatment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink">
            <div className="p-8 md:border-r border-ink">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-4">
                Halftone Treatment
              </p>
              <ul className="space-y-2">
                {[
                  "Grayscale filter (100%)",
                  "Contrast +12%, Brightness −3%",
                  "Halftone dot overlay: 3×3px radial gradient, 0.55px dots",
                  "Blend mode: multiply, opacity 0.35",
                  "Applied via .photo-halftone + .photo-wrap::after",
                ].map((s) => (
                  <li key={s} className="font-body text-sm text-ink flex gap-2">
                    <span className="text-ink-red shrink-0">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8">
              <p className="font-meta text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ink-gray mb-4">
                Placeholder (No Photo)
              </p>
              <ul className="space-y-2">
                {[
                  "Background: #2a2a2a (near-black)",
                  "Guest initials in Playfair Display, centered",
                  "Halftone dot overlay applied identically",
                  "Maintains visual consistency when photo unavailable",
                ].map((s) => (
                  <li key={s} className="font-body text-sm text-ink flex gap-2">
                    <span className="text-ink-red shrink-0">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-ink px-4 md:px-8 py-10 mt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p
            className="text-ink"
            style={{ fontFamily: "var(--font-blackletter)", fontSize: "1.5rem" }}
          >
            Trust the Sign<span className="text-ink-red">a</span>l
          </p>
          <p className="font-meta text-[0.55rem] tracking-[0.2em] uppercase text-ink-gray">
            Brand Guidelines · Internal Reference · 2025
          </p>
        </div>
      </footer>
    </main>
  );
}
