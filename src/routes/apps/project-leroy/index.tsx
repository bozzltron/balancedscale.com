import Footer from "../../../components/Footer";
import { StandardMetadata } from "../../../utils/metadata";

export default function ProjectLeroy() {
  return (
    <>
      <StandardMetadata
        title="Project Leroy | Bird Video TikTok App"
        description="Project Leroy - a TikTok application that posts bird video content. Privacy-focused app that does not collect any user data."
        url="https://www.balancedscale.com/apps/project-leroy/"
        type="website"
      />

      <div class="prose max-w-prose mx-auto p-8">
        <h1 class="text-3xl font-serif mb-6">Project Leroy</h1>

        <p class="text-lg mb-6">
          Project Leroy is a simple TikTok application that posts bird video content. 
          Our mission is to share beautiful bird videos with the TikTok community.
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Features</h2>
          <ul class="list-disc list-inside text-base mb-4">
            <li>Bird video content posting</li>
            <li>Privacy-first: no user data collection</li>
            <li>Simple and focused experience</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Links</h2>
          <div class="space-y-2">
            <a
              href="/apps/project-leroy/privacy-policy"
              class="text-blue-600 hover:underline"
            >Privacy Policy</a>
            <a
              href="/apps/project-leroy/terms-of-service"
              class="text-blue-600 hover:underline"
            >Terms of Service</a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}