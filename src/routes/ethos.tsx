import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { StandardMetadata } from "../utils/metadata";

export default function Ethos() {
  return (
    <>
      <StandardMetadata
        title="Our Ethos | Balanced Scale Media"
        description="100% of all royalties to artists. Zero recoupable costs. Complete creative control. Artist-first values inspired by Steve Albini's 'The Problem with Music.'"
        url="https://www.balancedscale.com/ethos"
        type="website"
        keywords="artist rights, fair music industry, record label philosophy, Steve Albini, artist-first, independent music, music industry reform"
      />
      
      <div class="flex flex-col min-h-screen">
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

        <Navigation />
        
        <main 
          id="main-content" 
          class="flex-1 px-4 py-16"
          style={{ "background": "var(--bg-primary)" }}
        >
          <article class="max-w-3xl mx-auto">
            {/* Heading */}
            <header class="mb-12 text-center">
              <h1 
                class="text-5xl font-serif mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Our Ethos
              </h1>
              <p 
                class="text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Building a better music industry, one artist at a time
              </p>
            </header>

            {/* Main Content */}
            <div 
              class="prose prose-invert max-w-none space-y-8"
              style={{ color: "var(--text-primary)" }}
            >
              {/* Core Values */}
              <section>
                <h2 
                  class="text-3xl font-serif mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Artist-First Values
                </h2>
                
                <div class="space-y-6">
                  <div 
                    class="p-6 rounded-lg border"
                    style={{ 
                      "background": "var(--bg-secondary)",
                      "border-color": "var(--border-default)"
                    }}
                  >
                    <h3 
                      class="text-2xl font-semibold mb-3"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      100% Revenue to Artists
                    </h3>
                    <p 
                      class="text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Every penny earned from your music goes directly to you. We don't take a percentage, we don't skim off the top. Your art, your earnings.
                    </p>
                  </div>

                  <div 
                    class="p-6 rounded-lg border"
                    style={{ 
                      "background": "var(--bg-secondary)",
                      "border-color": "var(--border-default)"
                    }}
                  >
                    <h3 
                      class="text-2xl font-semibold mb-3"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      Zero Recoupable Costs
                    </h3>
                    <p 
                      class="text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      No debt. No advance to pay back. We cover the costs because we believe in you. You shouldn't start your career in the hole.
                    </p>
                  </div>

                  <div 
                    class="p-6 rounded-lg border"
                    style={{ 
                      "background": "var(--bg-secondary)",
                      "border-color": "var(--border-default)"
                    }}
                  >
                    <h3 
                      class="text-2xl font-semibold mb-3"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      Complete Creative Control
                    </h3>
                    <p 
                      class="text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Your music, your vision, your decisions. We're here to support and amplify, not to control or constrain.
                    </p>
                  </div>
                </div>
              </section>

              {/* Inspiration */}
              <section class="mt-12">
                <h2 
                  class="text-3xl font-serif mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Our Inspiration
                </h2>
                <div 
                  class="p-8 rounded-lg border"
                  style={{ 
                    "background": "var(--bg-secondary)",
                    "border-color": "var(--border-default)"
                  }}
                >
                  <p 
                    class="text-lg leading-relaxed mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Balanced Scale Media was founded on principles inspired by Steve Albini's seminal essay{" "}
                    <a 
                      href="https://thebaffler.com/salvos/the-problem-with-music"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="underline hover:no-underline"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      "The Problem with Music"
                    </a>
                    . His critique of the traditional record label model exposed the systemic exploitation of artists — advances that become debt, percentages that become theft, and contracts that become chains.
                  </p>
                  <p 
                    class="text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    We're building an alternative. A label that exists to serve artists, not extract from them. A place where fairness isn't revolutionary — it's the baseline.
                  </p>
                </div>
              </section>

              {/* Call to Action */}
              <section class="mt-12 text-center">
                <h2 
                  class="text-3xl font-serif mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Join Us
                </h2>
                <p 
                  class="text-lg mb-8 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  If you're an artist who values integrity, creativity, and fairness, we'd love to hear from you.
                </p>
                <a 
                  href="/contact"
                  class="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-colors focus:outline-none focus:ring-2"
                  style={{ 
                    "background": "var(--accent-primary)",
                    "color": "var(--bg-primary)"
                  }}
                >
                  Get in Touch
                </a>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}

