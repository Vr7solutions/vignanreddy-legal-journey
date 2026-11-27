
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Vignan Reddy Legal Journey",
  description:
    "Read how Vignan Reddy handles website visitor information and protects privacy.",
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
          Last updated: 27 November 2026
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
          Vignan Reddy Legal Journey is my independent educational initiative.
          This website provides study resources and information for law
          students. No account or registration is required to browse publicly
          available content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          2. Information I May Collect
        </h2>
        <p className="mb-3 leading-8">
          Depending on how you use the website, the following information may
          be collected:
        </p>
        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>
            Information you voluntarily provide when emailing me, such as your
            email address and the contents of your message.
          </li>
          <li>
            Basic visitor information, such as an anonymous browser identifier
            and visit counts, to operate the website visitor counter.
          </li>
          <li>
            Download counts for individual resources, to help me understand
            which study materials are being used.
          </li>
          <li>
            Technical information that may be processed by hosting and
            infrastructure providers, such as browser, device and request
            information.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          3. Website Visitor Counter
        </h2>
        <p className="leading-8">
          This website uses Supabase to maintain visitor statistics, including
          total visits and daily visitor counts. A randomly generated
          identifier is stored in your browser's local storage to help
          distinguish returning browsers for visitor-counting purposes.
          This identifier is not intended to identify you personally.
        </p>
        <p className="mt-3 leading-8">
          You can clear local storage through your browser settings. Doing so
          may cause the website to recognise your browser as a new visitor.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          4. Resource Download Statistics
        </h2>
        <p className="leading-8">
          This website records the number of downloads initiated through the
          website for individual study resources. These statistics are stored
          in Supabase and are used to understand resource usage and improve
          the website. The download counter records download counts rather
          than intentionally identifying individual students.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          5. Cookies and Local Storage
        </h2>
        <p className="leading-8">
          This website uses browser local storage for its visitor-counting
          functionality. Local storage is different from browser cookies.
          You can clear or manage stored website data through your browser
          settings. Clearing it may affect visitor-counting functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          6. How Information Is Used
        </h2>
        <p className="mb-3 leading-7">Information may be used to:</p>
        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>Operate and maintain the website.</li>
          <li>Display and understand basic visitor statistics.</li>
          <li>Understand which resources are downloaded most often.</li>
          <li>Respond to emails, feedback and correction requests.</li>
          <li>Identify technical issues and help protect the website.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          7. Third-Party Services
        </h2>
        <p className="leading-8">
          This website uses third-party services, including Vercel for hosting
          and Supabase for database, visitor-counter and download-counter
          functionality. These providers may process information as necessary
          to provide their services, subject to their own privacy policies
          and terms. I do not control the privacy practices of external
          providers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          8. External Links
        </h2>
        <p className="leading-8">
          This website may contain links to external websites and resources.
          Once you visit another website, its own privacy policy and terms
          apply. I am not responsible for the privacy practices of external
          websites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          9. Data Security and Retention
        </h2>
        <p className="leading-8">
          I take reasonable measures to protect information handled through
          this website. However, no method of internet transmission or
          electronic storage can be guaranteed to be completely secure.
          Information is retained only as necessary for the relevant purpose
          or as required by applicable obligations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          10. Children's Privacy
        </h2>
        <p className="leading-8">
          This website is intended for educational use by law students. It
          does not knowingly seek to collect personal information from
          children. If you believe a child has provided personal information
          through this website, please contact me.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          11. Your Choices
        </h2>
        <p className="leading-8">
          You can choose not to send me personal information by email. You
          can also clear local storage and other website data through your
          browser settings. Clearing this data may affect the visitor counter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          12. Changes to This Policy
        </h2>
        <p className="leading-8">
          I may update this Privacy Policy when website features, services
          or applicable requirements change. Any updated version will be
          published on this page with a revised date.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 p-6">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          13. Contact Me
        </h2>
        <p className="mb-3 leading-7">
          If you have questions or concerns about this Privacy Policy, contact me:
        </p>
        <a
          href="mailto:vignanreddy.legal@gmail.com"
          className="break-all font-semibold text-amber-700 underline"
        >
          vignanreddy.legal@gmail.com
        </a>
      </section>

      <div className="mt-8">
        <Link
          href="/"
          className="font-semibold text-amber-700 underline underline-offset-4"
        >
          ← Return to Home
        </Link>
      </div>
    </main>
  );
}
