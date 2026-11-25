
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vignan Reddy Legal Journey",
  description:
    "Read how Vignan Reddy Legal Journey handles website visitor information and protects privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 text-gray-800">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
          Legal Information
        </p>
        <h1 className="mb-3 text-3xl font-bold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">
          Last updated: 25 November 2026
        </p>
      </div>

      <p className="mb-8 leading-8">
        Vignan Reddy Legal Journey respects your privacy. This policy explains
        what information may be collected when you visit this website, how it
        may be used and the choices available to you.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          1. About This Website
        </h2>
        <p className="leading-8">
          Vignan Reddy Legal Journey is an independent, student-led educational
          initiative. This website provides study resources and information for
          law students. No account or registration is required to browse the
          publicly available content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          2. Information We May Collect
        </h2>
        <p className="mb-3 leading-8">
          Depending on how you use the website, the following information may
          be collected:
        </p>
        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>
            Information you voluntarily provide when emailing us, such as your
            email address and the contents of your message.
          </li>
          <li>
            Technical information such as browser type, device information,
            pages visited and approximate usage details.
          </li>
          <li>
            Information collected through analytics tools to understand how
            visitors use the website.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          3. Google Analytics
        </h2>
        <p className="leading-8">
          This website uses Google Analytics to understand website traffic and
          how visitors interact with its pages. Google Analytics may collect
          information such as pages viewed, approximate location, device and
          browser details, referral sources and interaction data. Depending
          on the configuration, it may use cookies or similar technologies.
        </p>
        <p className="mt-3 leading-8">
          This information helps us understand which resources are useful and
          improve the website. Google's processing of information is subject
          to Google's own privacy policies and terms.
        </p>
        <p className="mt-3 leading-8">
          You can learn more about Google's practices in the{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-700 underline"
          >
            Google Privacy Policy
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          4. Cookies and Similar Technologies
        </h2>
        <p className="leading-8">
          Cookies are small files that websites may store on your device.
          Google Analytics may use cookies or similar technologies as part of
          its analytics services. You can manage or block cookies through your
          browser settings. Some website features may not work as intended if
          certain cookies are disabled.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          5. How Information Is Used
        </h2>
        <p className="mb-3 leading-7">
          Information may be used to:
        </p>
        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>Operate and maintain the website.</li>
          <li>Understand website usage and improve its content.</li>
          <li>Respond to emails, feedback and correction requests.</li>
          <li>Identify technical issues and help protect the website.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          6. Third-Party Services
        </h2>
        <p className="leading-8">
          The website may rely on third-party services for hosting, analytics
          and other technical functions. These providers may process certain
          information as necessary to provide their services, subject to their
          own policies. This website does not control the privacy practices of
          external services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          7. External Links
        </h2>
        <p className="leading-8">
          This website may contain links to external websites and resources.
          Once you visit another website, its own privacy policy and terms
          apply. We are not responsible for the privacy practices of external
          websites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          8. Data Security and Retention
        </h2>
        <p className="leading-8">
          Reasonable measures are taken to protect information handled through
          this website. However, no method of internet transmission or
          electronic storage can be guaranteed to be completely secure.
          Information is retained only as necessary for the relevant purpose
          or as required by applicable obligations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          9. Children's Privacy
        </h2>
        <p className="leading-8">
          This website is intended for educational use by law students. It does
          not knowingly seek to collect personal information from children.
          If you believe a child has provided personal information through
          this website, please contact us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          10. Your Choices
        </h2>
        <p className="leading-8">
          You can choose not to send us personal information by email. You can
          also manage cookies through your browser settings and use Google's
          available privacy controls for its services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          11. Changes to This Policy
        </h2>
        <p className="leading-8">
          This Privacy Policy may be updated when website features, services
          or applicable requirements change. Any updated version will be
          published on this page with a revised date.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 p-6">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          12. Contact Us
        </h2>
        <p className="mb-3 leading-7">
          If you have questions or concerns about this Privacy Policy, contact:
        </p>
        <a
          href="mailto:vignanreddy.legal@gmail.com"
          className="break-all font-semibold text-amber-700 underline"
        >
          vignanreddy.legal@gmail.com
        </a>
      </section>
    </main>
  );
}
