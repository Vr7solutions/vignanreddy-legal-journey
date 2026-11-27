
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vignan Reddy Legal Journey",
  description:
    "Read the terms and conditions governing the use of Vignan Reddy Legal Journey.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 text-gray-800">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
          Legal Information
        </p>
        <h1 className="mb-3 text-3xl font-bold text-slate-900">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500">
          Last updated: 27 November 2026
        </p>
      </div>

      <p className="mb-8 leading-8">
        Welcome to Vignan Reddy Legal Journey. These Terms & Conditions
        explain the rules for accessing and using this website. By visiting
        or using the website, you agree to these terms. If you do not agree,
        please discontinue using the website.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">1. About This Website</h2>
        <p className="leading-8">
          Vignan Reddy Legal Journey is my independent educational initiative.
          I am Vignan Reddy, a 3-Year LL.B student at a college affiliated
          with Osmania University. I created and manage this website to
          provide educational resources that support law students in their studies.
        </p>
        <p className="mt-3 leading-8">
          This website is not an official website of Osmania University, any
          affiliated college, court or government authority. It is not
          affiliated with or endorsed by these institutions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">2. Educational Purpose</h2>
        <p className="leading-8">
          All content, including study notes, assignments, internal questions,
          case law summaries, internship resources, legal dictionary entries,
          quizzes and practice tests, is provided for general educational
          purposes only. It does not constitute professional legal advice
          or replace prescribed academic materials or independent study.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">3. Permitted Use</h2>
        <p className="mb-3 leading-7">
          You may use this website for lawful personal and educational
          purposes. When using the website, you agree not to:
        </p>
        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>Use the website for unlawful or harmful activities.</li>
          <li>Attempt to disrupt, damage or gain unauthorised access to the website.</li>
          <li>Copy or redistribute website content in a misleading manner.</li>
          <li>Misrepresent the website or its content as official university material.</li>
          <li>Use the website in a way that infringes another person's rights.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">4. Intellectual Property and Educational Materials</h2>
        <p className="leading-8">
          Unless otherwise stated, original website text, explanations,
          design and other original materials are managed by me. Third-party
          materials, statutory texts, judgments and other referenced resources
          may belong to their respective owners or be subject to their own
          legal conditions.
        </p>
        <p className="mt-3 leading-8">
          You may use the materials for personal study and learning. You must
          not reproduce, republish, sell or commercially distribute original
          website content without appropriate permission, unless permitted
          by applicable law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">5. Accuracy and Availability</h2>
        <p className="leading-8">
          I make reasonable efforts to keep the website useful and accurate.
          However, errors, omissions, outdated information or temporary
          interruptions may occur. I do not guarantee uninterrupted
          availability or that every resource will always be current.
          Please verify important legal information against authoritative
          sources.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">6. No Legal Advice</h2>
        <p className="leading-8">
          Nothing on this website creates an advocate-client relationship or
          should be relied upon as advice for a specific legal matter. Please
          consult a qualified advocate for professional legal assistance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">7. Third-Party Links and Services</h2>
        <p className="leading-8">
          This website may link to external websites, documents and services.
          These are provided for convenience and educational reference.
          I do not control or take responsibility for their content,
          availability, privacy practices or terms. Your use of those
          services is subject to their respective policies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">8. Limitation of Responsibility</h2>
        <p className="leading-8">
          To the extent permitted by applicable law, I shall not be
          responsible for loss or damage arising from reliance on website
          information, inability to access the website or use of external
          resources. Nothing in these terms excludes any liability that
          cannot legally be excluded under applicable law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">9. Changes to the Website and Terms</h2>
        <p className="leading-8">
          I may modify or update website content, features and these Terms
          & Conditions when necessary. Updated terms will be published on
          this page with a revised date. Continued use of the website after
          changes are published indicates acceptance of the updated terms,
          to the extent permitted by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">10. Governing Law</h2>
        <p className="leading-8">
          These Terms & Conditions are governed by the laws applicable in
          India. Any disputes will be subject to the jurisdiction of courts
          having appropriate jurisdiction under applicable law.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 p-6">
        <h2 className="mb-3 text-xl font-bold text-slate-900">11. Contact Me</h2>
        <p className="mb-3 leading-7">
          If you have questions about these Terms & Conditions, contact me at:
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
