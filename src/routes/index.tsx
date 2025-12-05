import { A } from "@solidjs/router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { StandardMetadata, createOrganizationData } from "../utils/metadata";

export default function Home() {
  return (
    <>
      <StandardMetadata
        title="Balanced Scale Media | Independent Record Label"
        description="Austin-based independent record label. 100% revenue to artists, zero recoupable costs. Currently featuring mozworth's new single 'Sandpiper'."
        url="https://www.balancedscale.com"
        type="website"
        keywords="independent record label, Austin music, artist-first, mozworth, Sandpiper, indie rock, alternative rock"
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

        <Navigation />
        
        <main 
          id="main-content" 
          class="flex-1 px-4 py-12"
          style={{ "background": "var(--bg-primary)" }}
        >
          {/* Hero Section */}
          <div class="max-w-4xl mx-auto text-center mb-16">
            {/* Logo */}
            <img 
              src="/scale-balanced.svg" 
              alt="Balanced Scale Media" 
              class="w-24 h-24 mx-auto mb-6"
              width="96"
              height="96"
              fetchpriority="high"
              loading="eager"
            />
            
            {/* Heading */}
            <h1 
              class="text-5xl md:text-6xl font-serif mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Balanced Scale Media
            </h1>
            
            {/* Description */}
            <p 
              class="text-xl md:text-2xl mb-4 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Independent record label that puts artists first
            </p>
            
            <div 
              class="text-base mb-8"
              style={{ color: "var(--text-tertiary)" }}
            >
              100% of all royalties to artists • Zero recoupable costs • Complete creative control
            </div>
          </div>

          {/* Featured Release Section */}
          <section class="max-w-5xl mx-auto mb-32">
            <h2 
              class="text-3xl font-serif text-center mb-12"
              style={{ color: "var(--text-primary)" }}
            >
              Latest Release
            </h2>
            
            <div 
              class="rounded-xl p-8 md:p-10 border"
              style={{ 
                "background": "var(--bg-secondary)",
                "border-color": "var(--border-default)"
              }}
            >
              <div class="flex flex-col md:flex-row gap-8 items-center">
                {/* Album Art */}
                <div class="flex-shrink-0">
                  <A href="/artists/mozworth">
                    <img 
                      src="/sandpiper.webp" 
                      alt="mozworth - Sandpiper cover art" 
                      class="w-64 h-64 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      width="256"
                      height="256"
                      fetchpriority="high"
                      loading="eager"
                    />
                  </A>
                </div>
                
                {/* Release Info */}
                <div class="flex-1 text-center md:text-left">
                  <p 
                    class="text-sm mb-2 uppercase tracking-wide"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    New Single
                  </p>
                  
                  <h3 
                    class="text-4xl font-serif mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sandpiper
                  </h3>
                  
                  <p 
                    class="text-xl mb-8"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <A 
                      href="/artists/mozworth"
                      class="hover:underline"
                      style={{ color: "var(--text-primary)" }}
                    >
                      mozworth
                    </A>
                  </p>
                  
                  <p 
                    class="text-base mb-16 leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    A guitar-driven, ocean-soaked anthem inspired by myth, nature, and the quiet messengers all around us. Released September 15, 2025.
                  </p>
                  
                  <div class="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
                    <A 
                      href="/artists/mozworth"
                      class="px-6 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2"
                      style={{ 
                        "background": "var(--accent-primary)",
                        "color": "var(--bg-primary)"
                      }}
                    >
                      View EPK
                    </A>
                    <A 
                      href="/press/mozworth-sandpiper-release"
                      class="px-6 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2"
                      style={{ 
                        "background": "transparent",
                        "color": "var(--text-primary)",
                        "border": "1px solid var(--border-default)"
                      }}
                    >
                      Read Press Release
                    </A>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div class="max-w-4xl mx-auto text-center">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ethos Card */}
              <div 
                class="p-8 rounded-lg border"
                style={{ 
                  "background": "var(--bg-secondary)",
                  "border-color": "var(--border-default)"
                }}
              >
                <h3 
                  class="text-2xl font-serif mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Our Philosophy
                </h3>
                <p 
                  class="text-base mb-6 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Artist-first values. 100% of all royalties to artists. Zero recoupable costs. Inspired by Steve Albini's "The Problem with Music."
                </p>
                <A 
                  href="/ethos"
                  class="inline-flex items-center font-medium"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Learn More →
                </A>
              </div>

              {/* Artists Card */}
              <div 
                class="p-8 rounded-lg border"
                style={{ 
                  "background": "var(--bg-secondary)",
                  "border-color": "var(--border-default)"
                }}
              >
                <h3 
                  class="text-2xl font-serif mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Our Artists
                </h3>
                <p 
                  class="text-base mb-6 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Explore our roster of innovative artists creating music that matters. EPKs, bios, and press materials available.
                </p>
                <A 
                  href="/artists"
                  class="inline-flex items-center font-medium"
                  style={{ color: "var(--accent-primary)" }}
                >
                  View Roster →
                </A>
              </div>

              {/* Press Card */}
              <div 
                class="p-8 rounded-lg border"
                style={{ 
                  "background": "var(--bg-secondary)",
                  "border-color": "var(--border-default)"
                }}
              >
                <h3 
                  class="text-2xl font-serif mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Latest News
                </h3>
                <p 
                  class="text-base mb-6 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Press releases, artist announcements, and label news. Media inquiries welcome.
                </p>
                <A 
                  href="/press"
                  class="inline-flex items-center font-medium"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Read Press →
                </A>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

