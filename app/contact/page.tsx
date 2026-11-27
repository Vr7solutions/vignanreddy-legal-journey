
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Me | Vignan Reddy Legal Journey",
  description:
    "Contact Vignan Reddy for corrections, suggestions, feedback and website-related enquiries.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 text-gray-800">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
          Contact Me
        </p>
        <h1 className="mb-4 text-3xl font-bold text-slate-900">
          I Would Love to Hear From You
        </h1>
        <p className="text-lg leading-8 text-gray-600">
          Have a question, spotted an error or want to suggest something?
          Your feedback helps me improve Vignan Reddy Legal Journey.
        </p>
      </div>

      <section className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          Email Me
        </h2>
        <p className="mb-4 leading-7">
          For all website-related enquiries, please write to:
        </p>
        <a
          href="mailto:vignanreddy.legal@gmail.com"
          className="break-all font-semibold text-amber-700 underline underline-offset-4"
        >
          vignanreddy.legal@gmail.com
        </a>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          What Can You Contact Me About?
        </h2>
        <ul className="list-disc space-y-3 pl-6 leading-7">
          <li>
            <strong>Content Corrections:</strong> Report errors in study notes,
            case laws, internal questions, quizzes or legal dictionary entries.
          </li>
          <li>
            <strong>Suggestions:</strong> Recommend new topics, study resources
            or improvements to the website.
          </li>
          <li>
            <strong>Technical Issues:</strong> Report broken links, inaccessible
            pages or problems with website features.
          </li>
          <li>
            <strong>Copyright Concerns:</strong> Contact me about content or
            materials that may raise copyright concerns.
          </li>
          <li>
            <strong>General Enquiries:</strong> Share your questions or feedback
            about the website.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          Reporting a Correction
        </h2>
        <p className="leading-8">
          When reporting an error, please include the page link, the relevant
          topic and a brief explanation of the correction. If possible, mention
          the applicable bare act, section or judgment so I can check the
          information against an authoritative source.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          A Note About Legal Advice
        </h2>
        <p className="leading-8">
          This website is an educational initiative for law students. I cannot
          provide individual legal advice, case-specific opinions or professional
          legal representation. For personal legal matters, please consult a
          qualified advocate.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 p-6">
        <h2 className="mb-2 text-xl font-bold text-slate-900">
          Thank You for Supporting This Journey
        </h2>
        <p className="leading-7">
          Every suggestion and correction helps me make these learning
          resources more useful for students.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block font-semibold text-amber-700 underline underline-offset-4"
        >
          Return to Home
        </Link>
      </section>
    </main>
  );
}
