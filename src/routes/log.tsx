import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import TextType from "@/components/fx/TextType";
import { Calendar, Tag, Milestone, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/log")({
  head: () => ({
    meta: [
      { title: "Log & Timeline — Aadhith C Joseph" },
      {
        name: "description",
        content:
          "Career timeline, milestones, internships, education and achievements of Aadhith C Joseph.",
      },
      { property: "og:title", content: "Log & Timeline — Aadhith C Joseph" },
      {
        property: "og:description",
        content:
          "Engineering journey, competitive programming, and milestones chronologically archived.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: LogPage,
});

interface LogEntry {
  period: string;
  year: string;
  title: string;
  role: string;
  description: string;
  category: "Experience" | "Education" | "Award" | "Leadership";
  highlights: string[];
}

const entries: LogEntry[] = [
  {
    period: "2022 — Present",
    year: "2026",
    title: "Freelance Software & Web Development",
    role: "Full-Stack Engineer",
    description:
      "Architected and deployed responsive web apps, automated data ingestion pipelines, and RESTful API backends for diverse client needs.",
    category: "Experience",
    highlights: ["4+ production deployments", "PostgreSQL & Supabase schemas", "CI/CD container delivery"],
  },
  {
    period: "2025 — 2026",
    year: "2026",
    title: "Carmel College of Engineering Arts Secretary",
    role: "Leadership & Event Direction",
    description:
      "Spearheaded cultural operations and coordinated large-scale logistical workflows across campus departments.",
    category: "Leadership",
    highlights: ["Organised 3+ major multi-day college events", "Managed cross-functional student teams"],
  },
  {
    period: "Jan — Feb 2025",
    year: "2025",
    title: "ICT Academy of Kerala",
    role: "AI / ML Research Intern",
    description:
      "Developed and evaluated computer vision and machine learning models for edge inference and tabular predictive analytics.",
    category: "Experience",
    highlights: ["Evaluated prototypes across 5+ real-world datasets", "Trained classification & regression models"],
  },
  {
    period: "2023",
    year: "2023",
    title: "IEEEXtreme 17.0 Virtual Hackathon",
    role: "Competitive Programmer",
    description:
      "Competed globally in IEEE's premier 24-hour algorithmic problem solving and optimization marathon.",
    category: "Award",
    highlights: ["College Rank 1 across all participating batches", "Solved complex graphs & DP challenges"],
  },
  {
    period: "2022 — 2026",
    year: "2026",
    title: "B.Tech in Computer Science & Engineering",
    role: "Carmel College of Engineering & Technology",
    description:
      "Undergraduate curriculum emphasizing algorithms, database design, operating systems, networking, and applied intelligence.",
    category: "Education",
    highlights: ["CGPA 8.12", "Coursework in Distributed Systems & AI"],
  },
];

function LogPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-4xl px-6 pb-24 pt-12">
        <p className="label-mono">
          <DecryptedText
            text="# ARCHIVE // TIMELINE"
            speed={25}
            sequential
            animateOn="view"
            encryptedClassName="text-lime"
          />
        </p>

        <h1 className="mt-4 font-display text-6xl leading-[1.05] sm:text-7xl md:text-8xl">
          The Engineering <em className="italic text-lime not-italic">Log</em>.
        </h1>

        <div className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          <TextType
            text="Milestones, career transitions, competitive programming, and education in chronological sequence."
            typingSpeed={14}
            loop={false}
            showCursor={true}
            cursorCharacter="|"
            className="font-mono text-sm leading-relaxed text-foreground/90 sm:text-base"
          />
        </div>

        {/* Timeline list */}
        <div className="relative mt-16 border-l border-line pl-6 sm:pl-8">
          {entries.map((item, idx) => (
            <div key={item.title} className="relative mb-14 last:mb-0">
              {/* Dot indicator */}
              <div className="absolute -left-[31px] top-1.5 grid size-4 place-items-center rounded-full border border-lime bg-background text-[8px] text-lime shadow-sm sm:-left-[39px]">
                <span className="size-1.5 rounded-full bg-lime animate-ping" />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line/60 pb-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-lime">
                    {item.period}
                  </span>
                  <span className="rounded-full border border-line bg-surface/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {item.category}
                  </span>
                </div>
                <span className="label-mono text-xs">ENTRY // {String(idx + 1).padStart(2, "0")}</span>
              </div>

              <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
                {item.title}
              </h2>
              <p className="mt-1 font-mono text-xs text-muted-foreground/90 sm:text-sm">
                {item.role}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {item.highlights.map((hl) => (
                  <li
                    key={hl}
                    className="flex items-center gap-1.5 rounded-md border border-line/60 bg-surface/50 px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    <span className="text-lime">▹</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col justify-between gap-4 rounded-xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl">Want to build something together?</h3>
            <p className="font-mono text-xs text-muted-foreground">
              Always open to discussing new roles, contracts, and engineering challenges.
            </p>
          </div>
          <Link
            to="/contact"
            data-crosshair-target
            className="inline-flex items-center gap-2 rounded-lg border border-lime bg-lime px-4 py-2 font-mono text-xs font-medium text-black transition-all hover:bg-lime/90 sm:text-sm"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
