import { Show, For } from "solid-js";
import { useParams, A } from "@solidjs/router";
import { StandardMetadata, createArtistData } from "../../utils/metadata";
import { getArtistBySlug } from "../../data/artists";
import { pressReleases } from "../../data/pressReleases";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function ArtistEPK() {
  const params = useParams();
  const artist = getArtistBySlug(params.slug);

  // Get press releases for this artist
  const artistPressReleases = () => 
    pressReleases
      .filter(pr => pr.artistId === artist?.id)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // If artist not found, show 404
  if (!artist) {
    return (
      <div class="min-h-screen flex items-center justify-center bg-bg-primary text-text-primary">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Artist Not Found</h1>
          <p class="text-text-secondary mb-8">The artist you're looking for doesn't exist.</p>
          <A href="/artists" class="px-6 py-3 bg-white text-bg-primary rounded-md hover:bg-gray-200 transition-colors">
            View All Artists
          </A>
        </div>
      </div>
    );
  }

  return (
    <>
      <StandardMetadata
        title={`${artist.name} - Electronic Press Kit | Balanced Scale Media`}
        description={artist.bio.short}
        url={`https://balancedscale.com/artists/${artist.slug}/`}
        type="music.musician"
        keywords={`${artist.name}, press kit, EPK, electronic press kit, ${artist.genre.join(', ')}, ${artist.location.city}, Balanced Scale Media`}
        author={artist.name}
        imageUrl={artist.image.hero}
        imageAlt={`${artist.name} official press photo`}
        structuredData={createArtistData({
          name: artist.name,
          description: artist.bio.full,
          genre: artist.genre.join(', '),
          location: `${artist.location.city}, ${artist.location.state || ''} ${artist.location.country}`.trim(),
        })}
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
          role="main"
          style={{ "background": "var(--bg-primary)" }}
        >
          <div class="max-w-5xl mx-auto">
            <div 
              class="rounded-xl p-6 md:p-10 border" 
              style={{ 
                "background": "var(--bg-secondary)", 
                "border-color": "#0d0d0d" 
              }}
            >
              
              {/* Hero Section */}
              <div class="text-center mb-10">
                <img 
                  src={artist.image.thumbnail} 
                  alt={`${artist.name} logo`} 
                  class="w-32 mb-4 mx-auto"
                  width="128"
                  height="128"
                  loading="eager"
                  fetchpriority="high"
                />
                <h1 class="text-4xl md:text-5xl font-bold mb-2">Press Kit</h1>
                <p class="text-text-secondary text-lg">
                  {artist.location.city}-based {artist.genre[0]} Artist
                </p>
              </div>

              {/* Banner Image */}
              <Show when={artist.id === 'mozworth'}>
                <div class="mb-12 -mx-6 md:-mx-10">
                  <img 
                    src={artist.image.hero}
                    alt={`${artist.name} press photo`}
                    class="w-full h-auto rounded-lg"
                    width="1200"
                    height="800"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
              </Show>

              {/* Featured Single */}
              <Show when={artist.id === 'mozworth'}>
                <section 
                  class="mb-12 p-6 rounded-lg border" 
                  style={{ 
                    "background": "var(--bg-secondary)", 
                    "border-color": "var(--border-default)" 
                  }}
                  aria-labelledby="featured-release-heading"
                >
                  <h2 id="featured-release-heading" class="text-2xl font-bold mb-4 text-accent-primary">Featured Release</h2>
                  <article class="flex flex-col md:flex-row gap-6 items-center">
                    <iframe
                      src="https://bandcamp.com/EmbeddedPlayer/track=2363697352/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                      seamless
                      class="w-full md:w-80 h-[420px] rounded-lg shadow-lg"
                      title="Sandpiper by mozworth - Bandcamp music player"
                      aria-label="Bandcamp music player for Sandpiper by mozworth"
                      loading="lazy"
                    />
                    <div class="flex-1">
                      <h3 class="text-3xl font-bold mb-2">Sandpiper</h3>
                      <p class="text-text-secondary mb-2">
                        <span class="sr-only">Release type:</span>Single 
                        <span aria-hidden="true"> • </span>
                        <span class="sr-only">Released on:</span>
                        <time datetime="2025-09-15">Released September 15, 2025</time>
                      </p>
                      <p class="text-text-primary/90 mb-4 leading-relaxed">
                        A guitar-driven, ocean-soaked anthem inspired by myth, nature, and the quiet messengers all around us.
                      </p>
                      <A 
                        href={`/press/${artistPressReleases()[0]?.slug}`}
                        class="inline-block px-6 py-3 bg-transparent text-white rounded-full font-semibold border border-border-default hover:border-border-hover hover:bg-bg-tertiary transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring"
                        aria-label="View more information about Sandpiper"
                      >
                        More Info
                      </A>
                    </div>
                  </article>
                </section>
              </Show>

              {/* Quick Links */}
              <section class="mb-12" aria-labelledby="quick-links-heading">
                <h2 id="quick-links-heading" class="text-2xl font-bold mb-4 text-accent-primary">Quick Links</h2>
                <nav aria-label="Press kit quick links">
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Show when={artist.socialLinks?.spotify}>
                      <a 
                        href={artist.socialLinks!.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-4 py-3 bg-transparent text-white rounded-lg border border-border-default hover:border-border-hover hover:bg-bg-primary transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-focus-ring"
                      >
                        Spotify
                      </a>
                    </Show>
                    <Show when={artist.socialLinks?.bandcamp}>
                      <a 
                        href={artist.socialLinks!.bandcamp}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-4 py-3 bg-transparent text-white rounded-lg border border-border-default hover:border-border-hover hover:bg-bg-primary transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-focus-ring"
                      >
                        Bandcamp
                      </a>
                    </Show>
                    <Show when={artist.socialLinks?.youtube}>
                      <a 
                        href={artist.socialLinks!.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-4 py-3 bg-transparent text-white rounded-lg border border-border-default hover:border-border-hover hover:bg-bg-primary transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-focus-ring"
                      >
                        YouTube
                      </a>
                    </Show>
                    <Show when={artist.socialLinks?.instagram}>
                      <a 
                        href={artist.socialLinks!.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-4 py-3 bg-transparent text-white rounded-lg border border-border-default hover:border-border-hover hover:bg-bg-primary transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-focus-ring"
                      >
                        Instagram
                      </a>
                    </Show>
                    <Show when={artist.socialLinks?.bluesky}>
                      <a 
                        href={artist.socialLinks!.bluesky}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-4 py-3 bg-transparent text-white rounded-lg border border-border-default hover:border-border-hover hover:bg-bg-primary transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-focus-ring"
                      >
                        Bluesky
                      </a>
                    </Show>
                    <Show when={artist.contact?.press}>
                      <a 
                        href="/contact"
                        class="px-4 py-3 bg-transparent text-white rounded-lg border border-border-default hover:border-border-hover hover:bg-bg-primary transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-focus-ring"
                      >
                        Contact
                      </a>
                    </Show>
                  </div>
                </nav>
              </section>

              {/* Download Assets */}
              <Show when={artist.id === 'mozworth'}>
                <section 
                  class="mb-12 p-6 rounded-lg border" 
                  style={{ 
                    "background": "var(--bg-secondary)", 
                    "border-color": "var(--border-default)" 
                  }}
                  aria-labelledby="download-assets-heading"
                >
                  <h2 id="download-assets-heading" class="text-2xl font-bold mb-4 text-accent-primary">Download Assets</h2>
                  <p class="text-text-secondary mb-4">High-resolution press materials for media use</p>
                  <nav aria-label="Downloadable press materials">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <a 
                        href="/sandpiper.webp" 
                        download="mozworth-sandpiper-cover-art.webp"
                        class="flex items-center px-4 py-3 bg-transparent text-white rounded-lg border border-border-default hover:border-border-hover hover:bg-bg-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-focus-ring"
                        aria-label="Download Sandpiper cover art (high-resolution image)"
                      >
                        <div>
                          <div class="font-semibold">Sandpiper Cover Art</div>
                          <div class="text-xs opacity-70">High-resolution image</div>
                        </div>
                      </a>
                      <a 
                        href="/mozworth-press-photo.webp" 
                        download="mozworth-press-photo.webp"
                        class="flex items-center px-4 py-3 bg-transparent text-white rounded-lg border border-border-default hover:border-border-hover hover:bg-bg-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-focus-ring"
                        aria-label="Download official mozworth press photo (high-resolution)"
                      >
                        <div>
                          <div class="font-semibold">Press Photo</div>
                          <div class="text-xs opacity-70">Official artist photo</div>
                        </div>
                      </a>
                      <a 
                        href="#press-release" 
                        class="flex items-center px-4 py-3 bg-transparent text-white rounded-lg border border-border-default hover:border-border-hover hover:bg-bg-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-focus-ring"
                        aria-label="Jump to Sandpiper press release section below"
                      >
                        <div>
                          <div class="font-semibold">Press Release</div>
                          <div class="text-xs opacity-70">Sandpiper - Full text below</div>
                        </div>
                      </a>
                      <a 
                        href="/contact"
                        class="flex items-center px-4 py-3 bg-transparent text-white rounded-lg border border-border-default hover:border-border-hover hover:bg-bg-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-focus-ring"
                        aria-label="Contact Balanced Scale Media for press materials"
                      >
                        <div>
                          <div class="font-semibold">Contact for Materials</div>
                          <div class="text-xs opacity-70">Balanced Scale Media</div>
                        </div>
                      </a>
                    </div>
                  </nav>
                </section>
              </Show>

              {/* Press Release */}
              <Show when={artist.id === 'mozworth'}>
                <section 
                  id="press-release" 
                  class="mb-12 p-6 rounded-lg border" 
                  style={{ 
                    "background": "var(--bg-secondary)", 
                    "border-color": "var(--border-default)" 
                  }}
                  aria-labelledby="press-release-heading"
                >
                  <h2 id="press-release-heading" class="text-2xl font-bold mb-6 text-accent-primary">Press Release</h2>
                  <article class="prose prose-invert max-w-none text-text-primary/90 leading-relaxed">
                    <p class="font-bold mb-4">FOR IMMEDIATE RELEASE</p>
                    <p class="mb-4 text-xl font-semibold">mozworth Bridges Worlds with New Summer Single "Sandpiper"</p>
                    <p class="mb-4 italic">A guitar-driven, ocean-soaked anthem inspired by myth, nature, and the quiet messengers all around us</p>
                    <p class="mb-4"><strong>AUSTIN, TX – August 21, 2025</strong> — South Austin songwriter mozworth releases Sandpiper, a sweeping new single shaped by the rhythms of the Gulf Coast, the weight of mythology, and the search for answers in uncertain times. It follows this spring's The Sky Is Falling and acts as its emotional companion — where one named the fracture, the other seeks the bridge.</p>
                    <p class="mb-4">The song took shape during a family trip to Surfside Beach, Texas — days filled with skimboarding, saltwater, and long walks along the shore. It was there that the sandpiper first caught mozworth's attention. "When you're walking along the coastline, you have the ocean to one side and land to the other. Ahead of you is that narrow strip of wet sand. That's where you find the sandpiper," he says.</p>
                    <p class="mb-4">Drawn deeper, he found the sandpiper in Native American, Celtic, and Japanese myths — as a navigator, a survivor, a lost soul, and a messenger between worlds. "The idea of the messenger grabbed me the most", says mozworth.  "I started to see the sandpiper as inspiration. If this bird can merge two wildly different words, perhaps so can we. I love the idea that the answer is hidden in plain sight in the form of this humble creature."</p>
                    <p class="mb-4">The recording process was loose and instinctual. "I had a lot of lyrical ideas, but no sound yet," he says. Starting with a one-mic drum improv and a bassline, he followed what felt good. Listening back, what is now the driving bassline of the song was found. A guitar melody soon took shape using his daughter's Harley Benton JA-60, now a fixture of the song's identity. "That guitar — it just sang. The leads started sounding like birds to me."</p>
                    <p class="mb-4">The band brought the track to life. Longtime collaborator Ken Mockler locked in the drum parts before relocating to Denver, making this one of his last recordings with the group. "Ken loved the chorus — we really wrestled with the verses to make sure that left room for the chorus to break through" says mozworth. Guitarist Mark Heaps added shimmering textures and dynamic contrast, while bassist Jack Schultz nailed a tone the whole group instantly fell in love with.</p>
                    <p class="mb-4">The final mix, crafted by Steve Glaze at Tone Freq Studios, opens with the nostalgic click of a guitar cable — a subtle link to the lo-fi textures of '90s alt-rock. If you play The Sky Is Falling first, it fades out like a radio switching off. Sandpiper clicks right back on — not planned, but somehow perfect.</p>
                    <p class="mb-4">The single was recorded at mozworth's home studio in South Austin, drums at Ken's place just across town. "We wanted to capture who we are right now — together, in this moment," he says.</p>
                    <p class="mb-4">With Ken's move, drummer Mike Hall steps in for the Sandpiper single release. Introduced by Ken and already a kindred spirit, Mike brings a new heartbeat to mozworth's evolving sound — raw, melodic, and rooted in the human experience.</p>
                    <p class="mb-4 font-semibold">Sandpiper drops September 15, 2025</p>
                    <p class="mb-4">For media inquiries, interviews, or press materials, please contact:</p>
                    <p class="mb-1">Balanced Scale Media<br />promo@balancedscale.com<br /><a href="https://www.balancedscale.com" target="_blank" rel="noopener" class="text-accent-primary underline hover:no-underline">www.balancedscale.com</a></p>
                  </article>
                </section>
              </Show>

              {/* Press Coverage */}
              <Show when={artist.id === 'mozworth'}>
                <section 
                  class="mb-12 p-6 rounded-lg border" 
                  style={{ 
                    "background": "var(--bg-secondary)", 
                    "border-color": "var(--border-default)" 
                  }}
                  aria-labelledby="press-coverage-heading"
                >
                  <h2 id="press-coverage-heading" class="text-2xl font-bold mb-6 text-accent-primary">Press Coverage</h2>
                  <div class="space-y-6">
                    <div class="border-b border-border-default pb-6 last:border-b-0 last:pb-0">
                      <h3 class="text-xl font-semibold mb-2">Plastic Magazine</h3>
                      <p class="text-text-secondary text-sm mb-3">September 22, 2025</p>
                      <p class="text-text-primary/80 mb-3 leading-relaxed">
                        Plastic Magazine praises "Sandpiper" as "a spectacular alternative jam that's timeless and truly absorbing throughout," highlighting the track's "intricate ebb and flow between the mellow verses and charge of exhilarating choruses." The review celebrates mozworth's "songwriting flair and performance talent" and calls it "an incredible display" of his musical evolution.
                      </p>
                      <a 
                        href="https://plasticmag.co.uk/2025/09/mozworth-drops-new-single-sandpiper/" 
                        target="_blank" 
                        rel="noopener" 
                        class="text-accent-primary hover:no-underline underline font-medium"
                      >
                        Read Full Review →
                      </a>
                    </div>
                    <div class="border-b border-border-default pb-6 last:border-b-0 last:pb-0">
                      <h3 class="text-xl font-semibold mb-2">The Big Takeover</h3>
                      <p class="text-text-secondary text-sm mb-3">September 17, 2025</p>
                      <p class="text-text-primary/80 mb-3 leading-relaxed">
                        The Big Takeover praises "Sandpiper" for its depth and duality, describing it as music that "ebbs and flows between folky understatement and the roar of rock and roll at its finest" and calling it "a blend of indie delicacy, rock muscle, psychedelic colour, and surf finesse."
                      </p>
                      <a 
                        href="https://bigtakeover.com/recordings/mozworth-sandpiper-balanced-scale-media" 
                        target="_blank" 
                        rel="noopener" 
                        class="text-accent-primary hover:no-underline underline font-medium"
                      >
                        Read Full Review →
                      </a>
                    </div>
                    <div class="border-b border-border-default pb-6 last:border-b-0 last:pb-0">
                      <h3 class="text-xl font-semibold mb-2">It's All Indie</h3>
                      <p class="text-text-secondary text-sm mb-3">September 14, 2025</p>
                      <p class="text-text-primary/80 mb-3 leading-relaxed">
                        It's All Indie describes "Sandpiper" as "a clear-cut slice of shimmering indie-pop with a slightly scuzzy undertone of grunge guitar sounds" and praises the track as "a breezy indie-pop gem with grungy undertones, jangly new-wave hooks, and lush melodies."
                      </p>
                      <a 
                        href="https://www.itsallindie.com/2025/09/mozworth-reveals-bold-new-single.html" 
                        target="_blank" 
                        rel="noopener" 
                        class="text-accent-primary hover:no-underline underline font-medium"
                      >
                        Read Full Review →
                      </a>
                    </div>
                  </div>
                  <div class="mt-6">
                    <a 
                      href="https://mozworth.music/press" 
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-block px-6 py-3 bg-transparent text-white rounded-full font-semibold border border-border-default hover:border-border-hover hover:bg-bg-tertiary transition-colors"
                    >
                      View All Press Coverage
                    </a>
                  </div>
                </section>
              </Show>

              {/* Credits */}
              <Show when={artist.id === 'mozworth'}>
                <section 
                  class="mb-12 p-6 rounded-lg border" 
                  style={{ 
                    "background": "var(--bg-secondary)", 
                    "border-color": "var(--border-default)" 
                  }}
                  aria-labelledby="credits-heading"
                >
                  <h2 id="credits-heading" class="text-2xl font-bold mb-4 text-accent-primary">Credits - Sandpiper</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-text-primary/90">
                    <div>
                      <p class="mb-2">Songwriting by Michael Bosworth</p>
                      <p class="mb-2">Lyrics by Michael Bosworth</p>
                      <p class="mb-2">Composed by Michael Bosworth, Ken Mockler, Mark Heaps, and Jack Schultz</p>
                      <p class="mb-2">Produced by Michael Bosworth</p>
                    </div>
                    <div>
                      <p class="mb-2">Drums performed by Mike Hall</p>
                      <p class="mb-2">Guitar performed by Mark Heaps</p>
                      <p class="mb-2">Bass performed by Jack Schultz</p>
                      <p class="mb-2">Vocals and Guitar performed by Michael Bosworth</p>
                    </div>
                    <div class="md:col-span-2">
                      <p class="mb-2">Guitars and vocals recorded by Michael Bosworth at mozworth's home studio in South Austin</p>
                      <p class="mb-2">Drums recorded by Mike Hall in South Austin</p>
                      <p class="mb-2">Mixed by Steven Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="text-accent-primary underline hover:no-underline">Tone Freq Studios</a></p>
                      <p class="mb-2">Mastered by Steven Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="text-accent-primary underline hover:no-underline">Tone Freq Studios</a></p>
                      <p class="mb-2">Cover art watercolor by Jessica Bosworth</p>
                      <p class="mb-2">Cover art composition and design by Mark Heaps</p>
                      <p class="mb-2">ISRC: QZZ782549784</p>
                    </div>
                  </div>
                </section>
              </Show>

              {/* Artist Bio */}
              <section 
                class="mb-12 p-6 rounded-lg border" 
                style={{ 
                  "background": "var(--bg-secondary)", 
                  "border-color": "var(--border-default)" 
                }}
                aria-labelledby="about-heading"
              >
                <h2 id="about-heading" class="text-2xl font-bold mb-4 text-accent-primary">About {artist.name}</h2>
                <div class="text-text-primary/90 leading-relaxed space-y-4">
                  <For each={artist.bio.full.split('\n\n')}>
                    {(paragraph) => <p>{paragraph}</p>}
                  </For>
                </div>
              </section>

              {/* Contact */}
              <Show when={artist.contact}>
                <section 
                  class="mb-12 p-6 rounded-lg border text-center" 
                  style={{ 
                    "background": "var(--bg-secondary)", 
                    "border-color": "var(--border-default)" 
                  }}
                  aria-labelledby="contact-heading"
                >
                  <h2 id="contact-heading" class="text-2xl font-bold mb-4 text-accent-primary">Media Contact</h2>
                  <p class="text-text-primary/90 mb-4">For interviews, press materials, or media inquiries:</p>
                  <div class="text-lg mb-4">
                    <p class="font-semibold">Balanced Scale Media</p>
                    <p class="text-text-secondary">Austin, TX</p>
                    <a href="mailto:promo@balancedscale.com" class="text-accent-primary hover:no-underline underline">promo@balancedscale.com</a>
                    <p class="mt-2">
                      <a href="https://www.balancedscale.com" target="_blank" rel="noopener" class="text-accent-primary hover:no-underline underline">www.balancedscale.com</a>
                    </p>
                  </div>
                  <a 
                    href="/contact"
                    class="inline-block px-8 py-3 bg-transparent text-white rounded-full font-semibold border border-border-default hover:border-border-hover hover:bg-bg-tertiary transition-colors"
                  >
                    Contact Us
                  </a>
                </section>
              </Show>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

