import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { to: "/projects", label: "projects" },
  { to: "/skills", label: "skills" },
  { to: "/log", label: "log" },
  { to: "/about", label: "about" },
  { to: "/contact", label: "contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
      <Link
        to="/"
        data-crosshair-target
        className="font-mono text-sm text-foreground transition-colors hover:text-lime"
      >
        <span className="text-lime">◆</span> aadhithcj
      </Link>
      <nav className="flex items-center gap-4 font-mono text-xs text-muted-foreground sm:text-sm md:gap-7">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            data-crosshair-target
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
