import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { to: "/projects", label: "projects" },
  { to: "/about", label: "about" },
  { to: "/contact", label: "contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
      <Link
        to="/"
        className="cursor-target font-mono text-sm text-foreground transition-colors hover:text-lime"
      >
        <span className="text-lime">◆</span> aadhithcj
      </Link>
      <nav className="flex items-center gap-6 font-mono text-sm text-muted-foreground md:gap-7">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="link-slash hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
