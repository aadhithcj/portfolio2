import { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "@/hooks/use-theme";
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

  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const showToast = useCallback((text: string, duration = 1400) => {
    clearTimeout(toastTimer.current);
    setToast(text);
    toastTimer.current = setTimeout(() => setToast(null), duration);
  }, []);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const pulseSpeed = 3400;

    // Full-screen dotgrid big pulse emanating from the button position
    window.dispatchEvent(
      new CustomEvent("dotgrid:bigpulse", {
        detail: { x: cx, y: cy, speed: pulseSpeed },
      })
    );

    const targetMode = isDark ? "Light mode!" : "Dark mode!";
    const nextTheme = isDark ? "light" : "dark";

    // View Transition API: ripple from button coordinates across page
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const transition = (
        document as unknown as {
          startViewTransition: (cb: () => void) => { ready: Promise<void> };
        }
      ).startViewTransition(() => {
        toggleTheme();
      });

      transition.ready.then(() => {
        const radius = Math.hypot(
          Math.max(cx, window.innerWidth - cx),
          Math.max(cy, window.innerHeight - cy)
        );

        // Fast & punchy ~420ms-480ms transition matching accelerated shockwave
        const duration = Math.min(
          480,
          Math.max(380, Math.round((radius / pulseSpeed) * 1000))
        );

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${cx}px ${cy}px)`,
              `circle(${radius}px at ${cx}px ${cy}px)`,
            ],
          },
          {
            duration,
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      toggleTheme();
    }

    showToast(targetMode, 1400);
  };

  // Fixed top-right wrapper
  const wrapperClass = fixed
    ? "fixed top-4 right-8 sm:top-6 sm:right-16 z-50 flex items-center justify-center pointer-events-auto"
    : `relative flex items-center justify-center ${className}`.trim();

  return (
    <div className={wrapperClass}>
      <div className="relative flex flex-col items-center">
        {/* Floating toast notification anchored below button */}
        {toast && (
          <div
            role="status"
            className="pointer-events-none absolute -bottom-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-surface/95 px-3 py-1 font-mono text-[11px] font-medium text-foreground shadow-xl backdrop-blur-md transition-all duration-200 animate-in fade-in zoom-in-95 z-30"
          >
            <span className="mr-1 text-lime">◆</span>
            {toast}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 rotate-45 border-t border-l border-line bg-surface" />
          </div>
        )}

        {/* Circular Button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={handleToggle}
          data-crosshair-target
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          className="group relative grid size-[54px] place-items-center rounded-full border border-line bg-surface/90 text-foreground shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-lime focus-visible:outline-2 focus-visible:outline-lime"
        >
          {isDark ? (
            <Sun className="size-5 text-lime transition-transform duration-300 group-hover:rotate-45" />
          ) : (
            <Moon className="size-5 text-lime transition-transform duration-300 group-hover:-rotate-12" />
          )}
        </button>
      </div>
    </div>
  );
}
