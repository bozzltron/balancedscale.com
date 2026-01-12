import { A } from "@solidjs/router";
import ScaleLogo from "./ScaleLogo";

export default function Navigation() {
  return (
    <nav 
      class="w-full py-6 px-4 border-b"
      style={{ 
        "background": "var(--bg-primary)",
        "border-color": "var(--border-default)"
      }}
      aria-label="Main navigation"
    >
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <A 
          href="/" 
          class="flex items-center gap-3 focus:outline-none focus:ring-2 rounded"
          style={{ "focus:ring-color": "var(--focus-ring)", "color": "var(--text-primary)" }}
          aria-label="Balanced Scale Media Home"
        >
          <ScaleLogo 
            class="w-8 h-8"
            width="32"
            height="32"
          />
          <span 
            class="text-xl font-serif hidden sm:inline"
            style={{ color: "var(--text-primary)" }}
          >
            Balanced Scale
          </span>
        </A>

        {/* Navigation Links */}
        <div class="flex items-center gap-6">
          <A 
            href="/" 
            class="text-base transition-colors focus:outline-none focus:ring-2 rounded px-2 py-1"
            style={{ 
              "color": "var(--text-secondary)",
              "focus:ring-color": "var(--focus-ring)"
            }}
            activeClass="text-primary"
            inactiveClass="hover:text-primary"
          >
            Home
          </A>
          <A 
            href="/ethos" 
            class="text-base transition-colors focus:outline-none focus:ring-2 rounded px-2 py-1"
            style={{ 
              "color": "var(--text-secondary)",
              "focus:ring-color": "var(--focus-ring)"
            }}
            activeClass="text-primary"
            inactiveClass="hover:text-primary"
          >
            Ethos
          </A>
          <A 
            href="/artists" 
            class="text-base transition-colors focus:outline-none focus:ring-2 rounded px-2 py-1"
            style={{ 
              "color": "var(--text-secondary)",
              "focus:ring-color": "var(--focus-ring)"
            }}
            activeClass="text-primary"
            inactiveClass="hover:text-primary"
          >
            Artists
          </A>
          <A 
            href="/press" 
            class="text-base transition-colors focus:outline-none focus:ring-2 rounded px-2 py-1"
            style={{ 
              "color": "var(--text-secondary)",
              "focus:ring-color": "var(--focus-ring)"
            }}
            activeClass="text-primary"
            inactiveClass="hover:text-primary"
          >
            Press
          </A>
          <A 
            href="/contact" 
            class="text-base transition-colors focus:outline-none focus:ring-2 rounded px-2 py-1"
            style={{ 
              "color": "var(--text-secondary)",
              "focus:ring-color": "var(--focus-ring)"
            }}
            activeClass="text-primary"
            inactiveClass="hover:text-primary"
          >
            Contact
          </A>
        </div>
      </div>
    </nav>
  );
}

