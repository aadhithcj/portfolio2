import { createFileRoute, Link } from "@tanstack/react-router";
import DotGrid from "@/components/fx/DotGrid";
import TechText from "@/components/fx/TechText";
import TextType from "@/components/fx/TextType";
import DecryptedText from "@/components/fx/DecryptedText";
import { useTheme } from "@/hooks/use-theme";
import { profile } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aadhith C Joseph — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Aadhith C Joseph: full-stack, DevOps and applied AI projects.",
      },
      { property: "og:title", content: "Aadhith C Joseph — Software Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack, DevOps and applied AI projects by Aadhith C Joseph.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Index,
});

const nav = [
  { to: "/projects", n: "01", label: "Projects", note: "Selected work" },
  { to: "/about", n: "02", label: "About", note: "Background & tools" },
  { to: "/contact", n: "03", label: "Contact", note: "Say hello" },
] as const;

function Index() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Interactive WebGL2 DotGrid Background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80 transition-opacity duration-500">
        <DotGrid
          baseColor={isDark ? "#282533" : "#d8d8de"}
          activeColor={isDark ? "#c8f53c" : "#4d7c0f"}
          shape="circle"
          dotSize={4.5}
          gap={18}
          proximity={150}
          strength={1.2}
          bounce={0.65}
          tension={0.4}
          returnDuration={0.8}
          shockRadius={320}
          shockStrength={5.5}
          swell={0.85}
          stretch={0.5}
          glow={isDark ? 0.6 : 0.25}
          fade={0.15}
          intro
          opacity={isDark ? 0.85 : 0.7}
          mouseInteraction
          clickShock
        />
      </div>

      <div className="page-enter relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-between px-6 py-8">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-line/60 pb-4 label-mono">
          <div className="flex items-center gap-3">
            <span className="inline-block size-2 animate-pulse rounded-full bg-lime" />
            <TextType
              text={`${profile.handle} / portfolio`}
              typingSpeed={30}
              loop={false}
              showCursor={false}
              className="text-foreground"
            />
          </div>

          <div className="flex items-center gap-6">
            <TextType
              text={profile.location}
              typingSpeed={30}
              loop={false}
              showCursor={false}
              className="hidden text-muted-foreground sm:inline-block"
            />
          </div>
        </div>

        {/* Hero Section - fully left aligned */}
        <div className="my-auto py-8">
          <div className="w-full max-w-4xl">
            {/* Top row with subhead and small rotating square moved to the right */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 label-mono">
                <span># software engineer</span>
                <span className="text-muted-foreground/60">•</span>
                <span className="text-muted-foreground/80">
                  interactive vector mark
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Trigger shockwave"
                  onClick={(e) => {
                    const ev = new PointerEvent("pointerdown", {
                      clientX: e.clientX,
                      clientY: e.clientY,
                      bubbles: true,
                    });
                    window.dispatchEvent(ev);
                  }}
                  className="group grid size-9 place-items-center rounded-sm border border-line bg-surface/85 font-display text-xl text-lime shadow-md backdrop-blur transition-all duration-300 hover:rotate-45 hover:border-lime hover:bg-surface focus-visible:outline-2 focus-visible:outline-lime md:size-10 md:text-2xl"
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    ◆
                  </span>
                </button>
                <span className="hidden label-mono text-[10px] text-muted-foreground/80 sm:inline-block">
                  click mark
                </span>
              </div>
            </div>

            {/* Left-aligned Aadhith TechText */}
            <div className="relative -ml-1 h-24 w-full max-w-2xl sm:h-32 md:h-40">
              <TechText
                text="Aadhith"
                fontWeight={900}
                fontSize={150}
                align="left"
                reveal="letter"
                dashLength={4}
                dashGap={3}
                specks={15}
                sweep={false}
                color={isDark ? "#ffffff" : "#18181b"}
                accentColor="#c8f53c"
                selection={true}
                labels={true}
                draggable={true}
              />
            </div>

            {/* Headline */}
            <h1 className="mt-1 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
              turning ideas into{" "}
              <em className="italic text-lime not-italic">systems</em>.
            </h1>

            {/* TextType animated bio */}
            <div className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              <TextType
                text="Full-stack, DevOps and applied AI. Computer Science graduate from Kerala."
                typingSpeed={30}
                pauseDuration={4000}
                loop={false}
                showCursor={true}
                cursorCharacter="|"
                className="font-mono text-sm leading-relaxed text-foreground/90 sm:text-base"
              />
            </div>
          </div>
        </div>

        {/* Bottom Navigation with side margins and rounded corners */}
        <nav className="my-2 grid rounded-2xl border border-line/80 bg-surface/50 p-2 shadow-lg backdrop-blur-md md:grid-cols-3 md:gap-3 md:p-3">
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="group flex items-baseline gap-4 rounded-xl px-5 py-4 transition-all duration-200 hover:border hover:border-lime/40 hover:bg-surface/90"
            >
              <span className="font-mono text-xs text-lime transition-transform duration-200 group-hover:translate-x-0.5">
                {i.n}
              </span>
              <span className="font-display text-2xl transition-all group-hover:italic group-hover:text-lime sm:text-3xl">
                {i.label}
              </span>
              <span className="ml-auto label-mono transition-colors group-hover:text-foreground">
                <DecryptedText
                  text={`${i.note} →`}
                  speed={30}
                  sequential
                  animateOn="hover"
                  className="label-mono"
                  encryptedClassName="text-lime"
                />
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}

