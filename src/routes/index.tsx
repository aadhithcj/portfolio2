import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { PulseField, type PulseHandle } from "@/components/PulseField";
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
  const field = useRef<PulseHandle>(null);
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PulseField ref={field} />
      <div className="page-enter relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-between px-6 py-8">
        <div className="flex justify-between label-mono">
          <span>{profile.handle} / portfolio</span>
          <span>{profile.location}</span>
        </div>
        <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-end">
          <button
            aria-label="Send a pulse"
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              field.current?.pulse(r.left + r.width / 2, r.top + r.height / 2);
            }}
            className="grid size-24 place-items-center border border-line bg-background font-display text-5xl text-lime transition hover:rotate-45 hover:border-lime focus-visible:outline-2 focus-visible:outline-lime"
          >
            ◆
          </button>
          <div>
            <p className="label-mono mb-4">click the mark</p>
            <h1 className="font-display text-6xl leading-[0.9] md:text-8xl">
              Aadhith builds <em className="text-lime">useful</em> software.
            </h1>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Full-stack, DevOps and applied AI. Computer Science graduate from
              Kerala.
            </p>
          </div>
        </div>
        <nav className="grid border-t border-line md:grid-cols-3">
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="group flex items-baseline gap-4 border-b border-line bg-background/70 py-5 md:border-b-0 md:pr-6"
            >
              <span className="font-mono text-xs text-lime">{i.n}</span>
              <span className="font-display text-3xl group-hover:italic">
                {i.label}
              </span>
              <span className="ml-auto label-mono group-hover:text-foreground">
                {i.note} →
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
