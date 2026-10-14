import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import TextType from "@/components/fx/TextType";
import BorderGlow from "@/components/fx/BorderGlow";
import { Terminal, Cpu, Cloud, Database, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tech Stack — Aadhith C Joseph" },
      {
        name: "description",
        content:
          "Full-stack development, DevOps infrastructure, AI/ML models, and system architecture skills of Aadhith C Joseph.",
      },
      { property: "og:title", content: "Skills & Tech Stack — Aadhith C Joseph" },
      {
        property: "og:description",
        content: "Interactive breakdown of core engineering tools, frameworks, and proficiencies.",
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
  skills: Array<{ name: string; level: string; note: string }>;
}

const categories: SkillCategory[] = [
  {
    id: "devops",
    name: "DevOps & Cloud Systems",
    description: "Automated delivery pipelines, container virtualization, and infrastructure reliability.",
    icon: Cloud,
    skills: [
      { name: "Docker & Compose", level: "Advanced", note: "Multi-stage builds, isolated networks, volume mounts" },
      { name: "GitHub Actions", level: "Advanced", note: "Automated linting, matrix testing, CD deployments" },
      { name: "Linux & Shell", level: "Advanced", note: "Systemd services, bash automation, permissions & networking" },
      { name: "CI / CD Pipelines", level: "Proficient", note: "Continuous integration workflows, artifact builds" },
      { name: "pytest & Test Automation", level: "Proficient", note: "Unit, mock and integration test suites" },
    ],
  },
  {
    id: "fullstack",
    name: "Backend & Full-Stack",
    description: "Scalable REST APIs, relational data modeling, and modern client architectures.",
    icon: Layers,
    skills: [
      { name: "Python (Flask / FastAPI)", level: "Advanced", note: "RESTful microservices, background jobs, ORMs" },
      { name: "TypeScript & JavaScript", level: "Advanced", note: "Type-safe interfaces, full-stack reactive apps" },
      { name: "PostgreSQL & SQLite", level: "Advanced", note: "Relational schemas, indexing, migrations, ACID safety" },
      { name: "React & TanStack", level: "Proficient", note: "Router state, responsive layouts, client cache" },
      { name: "Supabase & Auth", level: "Proficient", note: "Row level security, real-time channels, auth workflows" },
    ],
  },
  {
    id: "aiml",
    name: "Applied AI & Computer Vision",
    description: "Deep learning models, computer vision inference, and edge neural processing.",
    icon: Cpu,
    skills: [
      { name: "OpenCV", level: "Advanced", note: "Image filtering, morphological processing, contour tracking" },
      { name: "TensorFlow & TFLite", level: "Proficient", note: "Model quantization, mobile inference, transfer learning" },
      { name: "YOLO Object Detection", level: "Proficient", note: "Real-time bounding box prediction & custom dataset training" },
      { name: "Google ML Kit", level: "Proficient", note: "On-device optical character recognition & vision APIs" },
      { name: "scikit-learn & Pandas", level: "Proficient", note: "Feature engineering, regression, ensemble classifiers" },
    ],
  },
  {
    id: "languages",
    name: "Languages & Foundational CS",
    description: "Core algorithms, data structures, and multi-paradigm programming.",
    icon: Terminal,
    skills: [
      { name: "Python", level: "Primary", note: "Scripting, web backends, automation & data analysis" },
      { name: "Java", level: "Strong", note: "OOP design patterns, JVM ecosystem, algorithmic competitions" },
      { name: "C", level: "Foundational", note: "Memory management, pointers, systems fundamentals" },
      { name: "SQL", level: "Primary", note: "Complex joins, analytical queries, schema optimization" },
      { name: "Git & Version Control", level: "Primary", note: "Branching strategies, rebasing, collaborative PRs" },
    ],
  },
];

function SkillsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-5xl px-6 pb-24 pt-12">
        <p className="label-mono">
          <DecryptedText
            text="# TOOLBOX // TECH STACK"
            speed={25}
            sequential
            animateOn="view"
            encryptedClassName="text-lime"
          />
        </p>

        <h1 className="mt-4 font-display text-6xl leading-[1.05] sm:text-7xl md:text-8xl">
          Systems, Stack & <em className="italic text-lime not-italic">Tools</em>.
        </h1>

        <div className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          <TextType
            text="A comprehensive breakdown of the languages, frameworks, infrastructure platforms, and machine learning toolkits I deploy to production."
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
                backgroundColor="transparent"
                borderRadius={15}
                glowRadius={22}
                glowIntensity={1}
                coneSpread={8}
                colors={['#9fff5b', '#34d399', '#a3e635']}
                className="border border-line bg-surface/75 p-6 backdrop-blur-md transition-shadow hover:shadow-xl"
              >
                <div className="flex items-center gap-3 border-b border-line/60 pb-4">
                  <div className="grid size-10 place-items-center rounded-lg border border-line bg-background/80 text-lime">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-foreground">{cat.name}</h2>
                    <p className="font-mono text-xs text-muted-foreground">{cat.description}</p>
                  </div>
                </div>

                <ul className="mt-4 divide-y divide-line/40">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="py-3 first:pt-1 last:pb-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-medium text-foreground">
                          {s.name}
                        </span>
                        <span className="rounded-full border border-line/60 bg-surface px-2 py-0.5 font-mono text-[10px] text-lime">
                          {s.level}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-muted-foreground/80">
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
            <h3 className="font-display text-2xl">See these skills in action</h3>
            <p className="font-mono text-xs text-muted-foreground">
              Explore DevOpsHub, RETINA, Inventory System, and CV Sorter case studies.
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
