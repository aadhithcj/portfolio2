import { useTheme } from "@/hooks/use-theme";
import DodgeField from "@/components/fx/DodgeField";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({
  className = "",
  fixed = false,
}: {
  className?: string;
  fixed?: boolean;
}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const wrapperClass = fixed
    ? "fixed bottom-4 right-4 z-50 flex items-center justify-center pointer-events-none"
    : `relative flex items-center justify-center ${className}`.trim();

  return (
    <div className={wrapperClass}>
      <DodgeField
        fieldHeight={80}
        reach={65}
        radius={120}
        patience={3}
        fleeDuration={120}
        returnDuration={450}
        inkColor={isDark ? "#ffffff" : "#18181b"}
        contrastColor={isDark ? "#18181b" : "#ffffff"}
        onCatch={toggleTheme}
        className="w-48 h-20 pointer-events-auto"
      >
        {({ dodges, gave, caught, fleeing }) => (
          <button
            type="button"
            onClick={toggleTheme}
            data-crosshair-target
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/90 px-4 py-2 font-mono text-xs text-foreground shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-lime focus-visible:outline-2 focus-visible:outline-lime sm:text-sm"
          >
            {isDark ? (
              <Sun className="size-4 text-lime transition-transform duration-300 group-hover:rotate-45" />
            ) : (
              <Moon className="size-4 text-lime transition-transform duration-300 group-hover:-rotate-12" />
            )}
            <span className="font-medium uppercase tracking-wider">
              {gave || caught
                ? isDark
                  ? "Light"
                  : "Dark"
                : fleeing
                  ? dodges === 1
                    ? "Catch!"
                    : dodges === 2
                      ? "Too fast!"
                      : "Got me!"
                  : isDark
                    ? "Light mode"
                    : "Dark mode"}
            </span>
          </button>
        )}
      </DodgeField>
    </div>
  );
}
