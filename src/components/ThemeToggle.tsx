import { useState, useRef, useEffect } from "react";
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

  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const clickedRef = useRef(false);

  const showToast = (text: string, duration = 1600) => {
    clearTimeout(toastTimer.current);
    setToast(text);
    if (duration > 0) {
      toastTimer.current = setTimeout(() => {
        setToast(null);
      }, duration);
    }
  };

  useEffect(() => {
    return () => clearTimeout(toastTimer.current);
  }, []);

  const handleToggle = () => {
    clickedRef.current = true;
    const targetMode = isDark ? "Light mode!" : "Dark mode!";
    toggleTheme();
    showToast(targetMode, 1400);
  };

  const handleMouseLeave = () => {
    clickedRef.current = false;
    clearTimeout(toastTimer.current);
    setToast(null);
  };

  // Fixed wrapper aligned with top right corner with ample left offset for toasts and dodging
  const wrapperClass = fixed
    ? "fixed top-3 right-8 sm:top-5 sm:right-16 z-50 flex items-center justify-center pointer-events-none"
    : `relative flex items-center justify-center ${className}`.trim();

  return (
    <div className={wrapperClass} onMouseLeave={handleMouseLeave}>
      <DodgeField
        fieldHeight={140}
        reach={30}
        radius={75}
        patience={1}
        fleeDuration={130}
        returnDuration={420}
        inkColor={isDark ? "#ffffff" : "#18181b"}
        contrastColor={isDark ? "#18181b" : "#ffffff"}
        onCatch={() => {
          clickedRef.current = true;
        }}
        onDodge={(count) => {
          if (!clickedRef.current && count === 1) {
            showToast("Too slow! ⚡", 1200);
          }
        }}
        onRelent={() => {
          if (!clickedRef.current) {
            showToast("Okay, you got me!", 1800);
          }
        }}
        className="h-36 w-44 pointer-events-auto overflow-visible flex items-center justify-center"
      >
        {({ gave }) => (
          <div className="relative flex flex-col items-center">
            {/* Floating speech-bubble toast anchored below button, centered with notch */}
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

            {/* Circular button with icon only matching bottom bar breadth */}
            <button
              type="button"
              onClick={handleToggle}
              data-crosshair-target
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              className={`group relative grid size-[54px] place-items-center rounded-full border border-line bg-surface/90 text-foreground shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-lime focus-visible:outline-2 focus-visible:outline-lime ${
                gave ? "border-lime/80 ring-2 ring-lime/20" : ""
              }`}
            >
              {isDark ? (
                <Sun className="size-5 text-lime transition-transform duration-300 group-hover:rotate-45" />
              ) : (
                <Moon className="size-5 text-lime transition-transform duration-300 group-hover:-rotate-12" />
              )}
            </button>
          </div>
        )}
      </DodgeField>
    </div>
  );
}
