import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { profile } from "@/lib/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aadhith C Joseph" },
      {
        name: "description",
        content: "Email, GitHub and LinkedIn for Aadhith C Joseph.",
      },
      { property: "og:title", content: "Contact — Aadhith C Joseph" },
      {
        property: "og:description",
        content: "Get in touch with Aadhith C Joseph.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const links = [
    ["email", profile.email, `mailto:${profile.email}`],
    ["github", "github.com/aadhithcj", profile.github],
    ["linkedin", "linkedin.com/in/aadhithcj", profile.linkedin],
  ];
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-5xl px-6 pb-20 pt-16">
        <p className="label-mono">contact / {profile.location}</p>
        <h1 className="mt-4 font-display text-7xl md:text-9xl">
          Let's build <em className="text-lime">something</em>.
        </h1>
        <ul className="mt-16 border-t border-line">
          {links.map(([k, v, href]) => (
            <li key={k}>
              <a
                href={href}
                target={k === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-baseline justify-between border-b border-line py-6"
              >
                <span className="label-mono">{k}</span>
                <span className="font-display text-2xl group-hover:text-lime md:text-4xl">
                  {v} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
