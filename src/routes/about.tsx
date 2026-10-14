import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import TextType from "@/components/fx/TextType";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aadhith C Joseph" },
      {
        name: "description",
        content: "Background, skills and experience of Aadhith C Joseph.",
      },
      { property: "og:title", content: "About — Aadhith C Joseph" },
      {
        property: "og:description",
        content: "Software engineering, backend, cloud and automation.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: About,
});

const skills = [
  ["languages", "Python, Java, C, JavaScript, TypeScript, SQL"],
  ["frontend", "React, Vite, HTML5, CSS3, Tailwind CSS"],
  ["backend & db", "Flask, REST APIs, PostgreSQL, SQLite, Supabase"],
  [
    "devops",
    "Linux, Git, GitHub Actions, Docker, Docker Compose, CI/CD, pytest",
  ],
  ["ai / ml", "OpenCV, TensorFlow Lite, YOLO, Google ML Kit"],
];

const timeline = [
  [
    "2022 — now",
    "Freelance Web & Software Developer",
    "4+ web and software projects for clients.",
  ],
  ["2025 — 26", "College Arts Secretary", "Organised 3+ major college events."],
  [
    "Jan — Feb 2025",
    "AI/ML Intern, ICT Academy of Kerala",
    "Prototype tested across 5+ real-world datasets.",
  ],
  [
    "2023",
    "IEEEXtreme 17.0",
    "College Rank 1 in the 24-hour programming competition.",
  ],
  ["2022 — 26", "B.Tech CSE, Carmel College of Engineering", "CGPA 8.12."],
];

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-3xl px-6 pb-20 pt-12">
        <p className="label-mono">
          <TextType
            text="# README.md"
            typingSpeed={30}
            loop={false}
            showCursor={false}
          />
        </p>
        <h1 className="mt-4 font-display text-6xl md:text-7xl">
          Hi, I'm <em className="italic text-lime not-italic">Aadhith</em>.
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          A Computer Science graduate with hands-on experience in full-stack
          development, REST APIs, PostgreSQL and AI/ML. I'm building practical
          DevOps experience and I'm interested in software engineering, backend
          development, cloud technologies and automation.
        </p>
        <h2 className="label-mono mb-4 mt-16">
          <TextType
            text="## toolbox"
            typingSpeed={30}
            loop={false}
            showCursor={false}
          />
        </h2>
        <dl className="border-t border-line">
          {skills.map(([k, v]) => (
            <div
              key={k}
              className="grid gap-2 border-b border-line py-3 md:grid-cols-[9rem_1fr]"
            >
              <dt className="pt-1 font-mono text-xs text-lime">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <h2 className="label-mono mb-4 mt-16">
          <TextType
            text="## log"
            typingSpeed={30}
            loop={false}
            showCursor={false}
          />
        </h2>
        <ol className="border-t border-line">
          {timeline.map(([d, t, n]) => (
            <li
              key={t}
              className="grid gap-2 border-b border-line py-4 md:grid-cols-[9rem_1fr]"
            >
              <span className="pt-1 font-mono text-xs text-muted-foreground">
                {d}
              </span>
              <div>
                <p className="font-medium text-foreground">{t}</p>
                <p className="text-sm text-muted-foreground">{n}</p>
              </div>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
