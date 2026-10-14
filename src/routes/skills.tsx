import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import TextType from "@/components/fx/TextType";
import BorderGlow from "@/components/fx/BorderGlow";
import {
  Terminal,
  Cpu,
  Cloud,
  Database,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tech Stack — Aadhith C Joseph" },
      {
        name: "description",
        content:
          "Full-stack development, DevOps infrastructure, AI/ML models, and system architecture skills of Aadhith C Joseph.",
      },
      {
        property: "og:title",
        content: "Skills & Tech Stack — Aadhith C Joseph",
      },
      {
        property: "og:description",
        content:
          "Interactive breakdown of core engineering tools, frameworks, and proficiencies.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: SkillsPage,
});

interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: typeof Terminal;
  skills: Array<{ name: string; note: string }>;
}

const categories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages & Foundations",
    description:
      "Core programming languages and foundational computer science.",
    icon: Terminal,
    skills: [
      {
        name: "Python",
        note: "Web backends, automation scripts & model prototyping",
      },
      {
        name: "Java",
        note: "Object-oriented programming, data structures & algorithms",
      },
      {
        name: "C",
        note: "Systems programming, memory management & pointer fundamentals",
      },
      {
        name: "SQL",
        note: "Relational queries, database schemas & data extraction",
      },
      {
        name: "Git",
        note: "Version control, branching strategies & collaborative workflows",
      },
    ],
  },
  {
    id: "fullstack",
    name: "Backend & Full-Stack",
    description: "Web APIs, relational databases, and responsive interfaces.",
    icon: Layers,
    skills: [
      {
        name: "Python (Flask)",
        note: "REST API endpoints, routing & request handling",
      },
      {
        name: "React",
        note: "Component hierarchy, client state & modern UI development",
      },
      {
        name: "TypeScript & JavaScript",
        note: "Typed application logic and ESNext features",
      },
      {
        name: "PostgreSQL & SQLite",
        note: "Schema design, migrations, indexing & ACID transactions",
      },
      {
        name: "REST APIs",
        note: "JSON contracts, HTTP status codes & authentication",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Tooling",
    description:
      "Containerization, automated pipelines, and Linux environment.",
    icon: Cloud,
    skills: [
      {
        name: "Docker & Docker Compose",
        note: "Containerizing services and multi-container environments",
      },
      {
        name: "GitHub Actions",
        note: "CI workflows, automated test runners & build automation",
      },
      {
        name: "Linux & Bash",
        note: "Command-line navigation, shell scripting & file permissions",
      },
      { name: "pytest", note: "Automated test suites and API validation" },
    ],
  },
  {
    id: "aiml",
    name: "Applied AI & Computer Vision",
    description:
      "Computer vision processing, edge models, and mobile integration.",
    icon: Cpu,
    skills: [
      {
        name: "OpenCV",
        note: "Image filtering, morphological ops & camera feed processing",
      },
      {
        name: "TensorFlow Lite",
        note: "Running quantized neural models on mobile devices",
      },
      {
        name: "YOLO Object Detection",
        note: "Real-time bounding box detection & model integration",
      },
      {
        name: "Google ML Kit",
        note: "On-device OCR, text recognition & barcode vision",
      },
    ],
  },
];

function SkillsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-5xl px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
        <p className="label-mono">
          <DecryptedText
            text="# TOOLBOX // TECH STACK"
            speed={25}
            sequential
            animateOn="view"
            encryptedClassName="text-lime"
          />
        </p>

        <h1 className="mt-4 break-words font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl">
          Systems, Stack &{" "}
          <em className="italic text-lime not-italic">Tools</em>.
        </h1>

        <div className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          <TextType
            text="A focused breakdown of the languages, frameworks, infrastructure platforms, and computer vision tools I use in my work."
            typingSpeed={14}
            loop={false}
            showCursor={true}
            cursorCharacter="|"
            className="font-mono text-sm leading-relaxed text-foreground/90 sm:text-base"
          />
        </div>

        {/* Categories Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <BorderGlow
                key={cat.id}
                edgeSensitivity={4}
                glowColor="95 100 68"
                backgroundColor="var(--surface)"
                borderRadius={15}
                glowRadius={22}
                glowIntensity={1}
                coneSpread={8}
                colors={["#9fff5b", "#34d399", "#a3e635"]}
                className="border border-line bg-surface p-6 backdrop-blur-md transition-shadow hover:shadow-xl"
              >
                <div className="flex items-center gap-3 border-b border-line/60 pb-4">
                  <div className="grid size-10 place-items-center rounded-lg border border-line bg-background/80 text-lime">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-foreground">
                      {cat.name}
                    </h2>
                    <p className="font-mono text-xs text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 divide-y divide-line/40">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="py-3 first:pt-1 last:pb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-lime">▹</span>
                        <span className="font-mono text-sm font-medium text-foreground">
                          {s.name}
                        </span>
                      </div>
                      <p className="mt-1 pl-4 font-mono text-xs text-muted-foreground/80">
                        {s.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </BorderGlow>
            );
          })}
        </div>

        {/* Applied Engineering Link */}
        <div className="mt-16 flex flex-col justify-between gap-4 rounded-xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl">
              See these skills in action
            </h3>
            <p className="font-mono text-xs text-muted-foreground">
              Explore Retina, DevOpsHub, Inventory System, and CV Sorter case
              studies.
            </p>
          </div>
          <Link
            to="/projects"
            data-crosshair-target
            className="inline-flex items-center gap-2 rounded-lg border border-lime bg-lime px-4 py-2 font-mono text-xs font-medium text-black transition-all hover:bg-lime/90 sm:text-sm"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
