import Footer from "../components/Footer";
import { StandardMetadata, createOrganizationData } from "../utils/metadata";
import ScaleLogo from "../components/ScaleLogo";

export default function Home() {
  return (
    <>
      <StandardMetadata
        title="Balanced Scale Media | Digital Media Company"
        description="Balanced Scale Media is a digital media company building web applications and providing technical consultation to businesses all over the globe."
        url="https://www.balancedscale.com"
        type="website"
        keywords="digital media, web applications, technical consultation, software development"
        structuredData={createOrganizationData()}
      />

      <div class="flex flex-col min-h-screen">
        {/* Skip to main content link */}
        <a
          href="#main-content"
          class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 px-4 py-2 rounded focus:outline-none focus:ring-2 z-50"
          style={{
            "background": "var(--accent-primary)",
            "color": "var(--bg-primary)"
          }}
        >
          Skip to main content
        </a>

        <main
          id="main-content"
          class="flex-1 px-4 py-12"
          style={{ "background": "var(--bg-primary)" }}
        >
          <div class="max-w-2xl mx-auto text-center">
            <div class="w-24 h-24 mx-auto mb-6" style={{ color: "var(--text-primary)" }}>
              <ScaleLogo width="96" height="96" class="w-full h-full" />
            </div>

            <h1
              class="text-5xl md:text-6xl font-serif mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Balanced Scale Media
            </h1>

            <p
              class="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Balanced Scale Media is a digital media company building web applications and providing technical consultation to businesses all over the globe.
            </p>

            <section class="mt-12" aria-labelledby="contact-heading">
              <h2
                id="contact-heading"
                class="text-2xl md:text-3xl font-serif mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Contact
              </h2>
              <p>
                <a
                  href="mailto:boz@balancedscale.com"
                  class="text-base md:text-lg font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] rounded px-2 py-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  boz@balancedscale.com
                </a>
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
