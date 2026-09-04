import Footer from "../../../components/Footer";
import { StandardMetadata } from "../../../utils/metadata";

export default function PrivacyPolicy() {
  return (
    <>
      <StandardMetadata
        title="Privacy Policy | Project Leroy"
        description="Privacy policy for Project Leroy - a TikTok application that posts bird video content. We do not collect any user data."
        url="https://www.balancedscale.com/apps/project-leroy/privacy-policy.html"
        type="website"
      />

      <div class="prose max-w-prose mx-auto p-8">
        <h1 class="text-3xl font-serif mb-6">Privacy Policy</h1>

        <p class="text-lg mb-6">
          Last updated: September 4, 2026
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p class="text-base mb-4">
            Project Leroy does not collect any personal data from users. We do not track, store, or transmit any information that could identify or profile our users.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">How We Use Information</h2>
          <p class="text-base">
            Since we do not collect any data, we have no information to use. The application simply posts bird video content to TikTok without any user tracking or profiling.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p class="text-base">
            Project Leroy may integrate with TikTok's platform for content posting purposes only. We do not enable TikTok Pixel, analytics cookies, or any other tracking technologies on our application.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p class="text-base">
            Project Leroy is not directed to children under 13 and we do not knowingly collect personal data from children.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Contact</h2>
          <p class="text-base">
            If you have questions about this privacy policy, please contact us at boz@balancedscale.com.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}