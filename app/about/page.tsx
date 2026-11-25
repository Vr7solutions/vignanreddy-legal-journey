import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Vignan Reddy Legal Journey",
  description:
    "Learn about Vignan Reddy Legal Journey, an independent student-led initiative sharing free educational resources for 3-Year LL.B students.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 text-gray-800">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
          About Us
        </p>
        <h1 className="mb-4 text-3xl font-bold text-slate-900">
          Learn Law. Share Knowledge. Grow Together.
        </h1>
        <p className="text-lg leading-8 text-gray-600">
          Vignan Reddy Legal Journey is an independent, student-led educational
          initiative created to make the journey of learning law easier,
          organised and more accessible for fellow law students.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-bold text-slate-900">Our Mission</h2>
        <p className="leading-8">
          Our aim is to help law students understand legal concepts, prepare
          for examinations and develop a stronger foundation in legal studies
          through simple explanations and useful study resources.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          What You Will Find Here
        </h2>
        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li><strong>Assignments:</strong> Study-oriented assignment resources and formats.</li>
          <li><strong>Internal Questions:</strong> Important questions for internal examination preparation.</li>
          <li><strong>Study Notes:</strong> Subject-wise material to help understand legal concepts.</li>
          <li><strong>Case Laws:</strong> Summaries and explanations of important judicial decisions.</li>
          <li><strong>Internship Resources:</strong> Useful information to support students exploring legal internships.</li>
          <li><strong>Legal Dictionary:</strong> Simple explanations of legal terminology.</li>
          <li><strong>Quizzes and Practice Tests:</strong> Questions to test and improve your understanding.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          Our Academic Focus
        </h2>
        <p className="mb-3 leading-8">
          The website currently focuses on the first-year, first-semester
          subjects of the 3-Year LL.B. programme followed by students affiliated
          with Osmania University.
        </p>
        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>Law of Contract – I</li>
          <li>Family Law – I (Hindu Law)</li>
          <li>Constitutional Law – I</li>
          <li>Law of Torts</li>
          <li>Environmental Law</li>
          <li>Legal and Constitutional History of India</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          Who Runs This Website?
        </h2>
        <p className="leading-8">
          Vignan Reddy Legal Journey is independently managed by Vignan Reddy,
          a 3-Year LL.B student studying at a college affiliated with Osmania
          University. It is a personal educational initiative created to
          support fellow students in their legal learning journey.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          Our Commitment to Learning
        </h2>
        <p className="leading-8">
          We aim to present information in a clear and student-friendly manner.
          However, legal provisions and judgments should always be checked
          against authoritative sources. If you find an error or have a
          suggestion, please contact us so it can be reviewed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          What This Website Is Not
        </h2>
        <p className="leading-8">
          This is an independent educational initiative. It is not an official
          website of Osmania University, any affiliated college, any court or
          any government authority. Its content is intended for educational
          purposes and does not replace professional legal advice.
        </p>
      </section>

      <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="mb-2 text-xl font-bold text-slate-900">
          Get in Touch
        </h2>
        <p className="mb-4 leading-7">
          Have a correction, suggestion or question? We welcome your feedback.
        </p>
        <Link
          href="/contact"
          className="font-semibold text-amber-700 underline underline-offset-4"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
