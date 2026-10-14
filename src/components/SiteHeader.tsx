import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
  { to: "/skills", label: "skills" },
  { to: "/log", label: "log" },
  { to: "/contact", label: "contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6">
      <div className="flex w-full items-center justify-between sm:w-auto">
        <Link
          to="/"
          data-crosshair-target
          className="w-fit rounded-sm font-mono text-sm text-foreground transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <span className="text-lime">◆</span> acj / portfolio
        </Link>

        <div className="sm:hidden">
          <ThemeToggle />
        </div>
      </div>

      <nav
        aria-label="Primary navigation"
        className="flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs text-muted-foreground sm:gap-x-4 sm:text-sm md:gap-x-7"
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            data-crosshair-target
            className="link-slash rounded-sm py-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            activeProps={{
              className: "text-foreground font-medium",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
