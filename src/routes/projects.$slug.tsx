import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const index = projects.findIndex((p) => p.slug === params.slug);
    if (index < 0) throw notFound();
    return { project: projects[index], index };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const title = project
      ? `${project.name} — Aadhith C Joseph`
      : "Project unavailable";
    const description = project?.tagline ?? "This project could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project, index } = Route.useLoaderData();
  if (!project) return null;
  const p = project;
  const next = projects[(index + 1) % projects.length] ?? projects[0];
  if (!next) return null;
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-5xl px-6 pb-20 pt-12">
        <Link to="/projects" className="label-mono hover:text-lime">
          ← all projects
        </Link>
        <p className="label-mono mt-12">
          project / {String(index + 1).padStart(2, "0")} — {p.year}
        </p>
        <h1 className="mt-3 font-display text-7xl md:text-9xl">{p.name}</h1>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
          {p.tagline}
        </p>
        <div className="mt-14 grid gap-10 border-t border-line pt-8 md:grid-cols-[14rem_1fr]">
          <div>
            <p className="label-mono mb-3">technologies</p>
            <ul className="space-y-1 font-mono text-sm">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-mono mb-3">what I built</p>
            <ol className="space-y-5">
              {p.points.map((pt, i) => (
                <li
                  key={pt}
                  className="grid grid-cols-[2rem_1fr] text-lg leading-relaxed"
                >
                  <span className="font-mono text-xs text-lime pt-1.5">
                    {i + 1}.
                  </span>
                  {pt}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group mt-20 flex justify-between border-t border-line pt-6"
        >
          <span className="label-mono">next</span>
          <span className="font-display text-4xl group-hover:italic">
            {next.name} →
          </span>
        </Link>
      </main>
    </div>
  );
}
