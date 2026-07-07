import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, ErrorBoundary } from "solid-js";
import ScaleLogo from "./components/ScaleLogo";
import "./app.css";

function GlobalErrorFallback(err: unknown) {
  console.error("Global error boundary:", err);
  return (
    <div
      class="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "var(--bg-primary)" }}
    >
      <a
        href="/"
        aria-label="Go to home page"
        style={{ color: "var(--text-primary)" }}
      >
        <ScaleLogo
          width="128"
          height="128"
          class="w-32 h-32 mb-8 focus:outline-none focus-visible:ring-4 rounded transition-shadow ring-[var(--focus-ring)]"
        />
      </a>
      <h2
        class="text-2xl md:text-3xl font-bold mb-6 text-center"
        style={{ color: "var(--text-primary)" }}
      >
        Something went wrong. Please refresh the page.
      </h2>
      <button
        class="mt-8 px-6 py-3 rounded font-semibold shadow transition-colors focus:outline-none focus-visible:ring-2 text-lg"
        style={{
          background: "var(--accent-primary)",
          color: "var(--bg-primary)",
        }}
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary fallback={GlobalErrorFallback}>
      <Router
        root={(props) => (
          <>
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </ErrorBoundary>
  );
}
