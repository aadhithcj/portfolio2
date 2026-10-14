import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/portfolio";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Aadhith C Joseph" },
      {
        name: "description",
        content:
          "DevOpsHub, RETINA and other software projects by Aadhith C Joseph.",
      },
      { property: "og:title", content: "Projects — Aadhith C Joseph" },
      {
        property: "og:description",
        content: "A numbered archive of full-stack, DevOps and AI work.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [active, setActive] = useState(0);
  const p = projects[active] ?? projects[0];
  if (!p) return null;
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto grid max-w-5xl gap-10 px-6 pb-20 pt-10 md:grid-cols-[1fr_18rem]">
        <ol>
          {projects.map((x, i) => (
            <li key={x.slug}>
              <Link
                to="/projects/$slug"
                params={{ slug: x.slug }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid grid-cols-[3rem_1fr_auto] items-baseline border-b border-line py-4"
              >
                <span className="font-mono text-xs text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-4xl transition group-hover:translate-x-2 group-hover:italic md:text-6xl">
                  {x.name}
                </span>
                <span className="label-mono">{x.year}</span>
              </Link>
            </li>
          ))}
        </ol>
        <aside
          className="sticky top-8 h-fit border border-line bg-surface p-5"
          aria-live="polite"
        >
          <p className="label-mono">
            preview / {String(active + 1).padStart(2, "0")}
          </p>
          <div className="my-5 grid aspect-square place-items-center border border-line font-display text-7xl text-lime">
            {p.name.slice(0, 2)}
          </div>
          <p className="text-sm">{p.tagline}</p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            {p.stack.join(" · ")}
          </p>
        </aside>
      </main>
    </div>
  );
}
