import Footer from "../../../components/Footer";
import { StandardMetadata } from "../../../utils/metadata";

export default function TermsOfService() {
  return (
    <>
      <StandardMetadata
        title="Terms of Service | Project Leroy"
        description="Terms of service for Project Leroy - a TikTok application that posts bird video content. Please read these terms before using the application."
        url="https://www.balancedscale.com/apps/project-leroy/terms-of-service.html"
        type="website"
      />

      <div class="prose max-w-prose mx-auto p-8">
        <h1 class="text-3xl font-serif mb-6">Terms of Service</h1>

        <p class="text-lg mb-6">
          Last updated: September 4, 2026
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p class="text-base mb-4">
            By accessing or using Project Leroy, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access or use the application.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Usage License</h2>
          <p class="text-base mb-4">
            You are granted a limited, non-exclusive, non-transferable right to access and use Project Leroy solely for the purpose of viewing and interacting with bird video content. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from Project Leroy.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">User Conduct</h2>
          <p class="text-base mb-4">
            You agree not to use Project Leroy for any illegal or unauthorized purpose. You must be at least the age of majority in your jurisdiction to use the application. You are responsible for any content you interact with or post through the application.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p class="text-base mb-4">
            All content posted through Project Leroy, including bird video content, is the property of its respective owners. Project Leroy does not claim ownership of any third-party content. You retain all rights to content you originally create and post.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">No Warranty</h2>
          <p class="text-base mb-4">
            Project Leroy is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Project Leroy does not warrant that the application will be uninterrupted, error-free, or that defects will be corrected.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p class="text-base mb-4">
            To the maximum extent permitted by applicable law, Project Leroy and its contributors shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to loss of profits, goodwill, data, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the application; (ii) any conduct or content of third parties on the application; or (iii) any content obtained from the application.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p class="text-base mb-4">
            Project Leroy reserves the right, at its sole discretion, to modify or replace these Terms of Service at any time. By continuing to access or use our application after any such changes, you agree to be bound by the revised terms. We will provide notice of any such changes by posting the new terms on this page.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Governing Law</h2>
          <p class="text-base">
            These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Contact</h2>
          <p class="text-base">
            If you have questions about these Terms of Service, please contact us at boz@balancedscale.com.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}