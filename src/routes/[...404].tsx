import { A } from "@solidjs/router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { StandardMetadata } from "../utils/metadata";

export default function NotFound() {
  return (
    <>
      <StandardMetadata
        title="Page Not Found | Balanced Scale Media"
        description="The page you're looking for doesn't exist."
        url="https://www.balancedscale.com/404"
        type="website"
      />

      <div class="flex flex-col min-h-screen">
        <Navigation />

        <main
          class="flex-1 flex items-center justify-center px-4 py-16"
          style={{ background: "var(--bg-primary)" }}
        >
          <div class="max-w-2xl mx-auto text-center">
            <h1
              class="text-6xl font-serif mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              404
            </h1>

            <h2
              class="text-3xl font-serif mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Page Not Found
            </h2>

            <p
              class="text-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              The page you're looking for doesn't exist or has been moved.
            </p>

            <A
              href="/"
              class="px-6 py-3 rounded font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              style={{
                background: "var(--accent-primary)",
                color: "var(--bg-primary)",
              }}
            >
              Go Home
            </A>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
