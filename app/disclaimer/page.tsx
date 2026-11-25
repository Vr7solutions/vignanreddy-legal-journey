
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Vignan Reddy Legal Journey",
  description:
    "Read the educational, legal and informational disclaimer for Vignan Reddy Legal Journey.",
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 text-gray-800">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
          Legal Information
        </p>
        <h1 className="mb-3 text-3xl font-bold text-slate-900">
          Disclaimer
        </h1>
        <p className="text-sm text-gray-500">
          Last updated: 25 November 2026
        </p>
      </div>

      <p className="mb-8 leading-8">
        The information provided on Vignan Reddy Legal Journey is intended
        solely for general educational and informational purposes. By using
        this website, you acknowledge and understand the following terms.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          1. Educational Purpose Only
        </h2>
        <p className="leading-8">
          This website provides study notes, assignments, internal questions,
          case law summaries, internship resources, legal terminology,
          quizzes and other learning materials. These resources are intended
          to support students in their academic preparation and understanding
          of legal subjects.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          2. Not Legal Advice
        </h2>
        <p className="leading-8">
          Nothing on this website should be treated as professional legal
          advice, a legal opinion or a substitute for consultation with a
          qualified advocate. For advice relating to a specific legal matter,
          please consult a qualified legal professional.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          3. Accuracy and Updates
        </h2>
        <p className="leading-8">
          We make reasonable efforts to present information clearly and
          accurately. However, laws, rules, regulations and judicial decisions
          may change, and errors or omissions may occur. We do not guarantee
          that all information is complete, current or error-free.
        </p>
        <p className="mt-3 leading-8">
          Always verify important legal information using current bare acts,
          official government publications, court judgments and other
          authoritative sources.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          4. Case Laws and Legal References
        </h2>
        <p className="leading-8">
          Case law summaries and explanations are provided to help students
          understand important judicial decisions. They are not substitutes
          for reading the original judgments. Please refer to the full
          judgment and relevant statutory provisions when accuracy and
          completeness are important.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          5. Academic Resources
        </h2>
        <p className="leading-8">
          Study notes, assignments, internal questions, quizzes and practice
          tests are learning aids. They are not official university material,
          guaranteed examination questions or a substitute for prescribed
          textbooks, classroom teaching or independent study. Students should
          follow their university's current syllabus and examination
          instructions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          6. Independent Educational Initiative
        </h2>
        <p className="leading-8">
          Vignan Reddy Legal Journey is independently managed by a law student.
          It is not an official website of Osmania University, any affiliated
          college, court, government department or statutory authority.
          References to universities, institutions or laws are for
          identification and educational purposes only.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          7. External Links and Resources
        </h2>
        <p className="leading-8">
          This website may contain links to external websites, documents and
          educational resources. These links are provided for convenience.
          We do not control or guarantee the accuracy, availability or content
          of external websites. Visiting them is at your own discretion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          8. Limitation of Responsibility
        </h2>
        <p className="leading-8">
          To the extent permitted by applicable law, the website and its
          operator are not responsible for losses or consequences arising
          from reliance on information published here, interruptions in
          website availability or the use of external resources. Users are
          responsible for independently verifying information before relying
          on it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          9. Copyright and Content Concerns
        </h2>
        <p className="leading-8">
          If you believe any material on this website infringes your copyright
          or other rights, please contact us with the relevant page link and
          details so the concern can be reviewed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          10. Changes to This Disclaimer
        </h2>
        <p className="leading-8">
          This Disclaimer may be updated when necessary. Changes will be
          published on this page along with the revised date.
        </p>
      </section>

      <section className="rounded-xl border border-gray-200 p-6">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          11. Contact Us
        </h2>
        <p className="mb-3 leading-7">
          For questions, corrections or concerns about this Disclaimer, write
          to:
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
