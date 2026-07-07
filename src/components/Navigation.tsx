import { A } from "@solidjs/router";
import ScaleLogo from "./ScaleLogo";

export default function Navigation() {
  return (
    <nav
      class="w-full py-6 px-4 border-b"
      style={{
        background: "var(--bg-primary)",
        "border-color": "var(--border-default)",
      }}
      aria-label="Main navigation"
    >
      <div class="max-w-6xl mx-auto flex items-center justify-center">
        <A
          href="/"
          class="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] rounded"
          style={{ color: "var(--text-primary)" }}
          aria-label="Balanced Scale Media Home"
        >
          <ScaleLogo class="w-8 h-8" width="32" height="32" />
          <span
            class="text-xl font-serif"
            style={{ color: "var(--text-primary)" }}
          >
            Balanced Scale
          </span>
        </A>
      </div>
    </nav>
  );
}
