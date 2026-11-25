
export const metadata = {
  title: "Terms & Conditions | Vignan Reddy Legal Journey",
  description:
    "Terms and conditions for using Vignan Reddy Legal Journey, an independent student-led educational initiative.",
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] px-5 py-12">
      <article className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <h1 className="mb-3 text-3xl font-bold text-[#142b4a]">
          Terms & Conditions
        </h1>

        <p className="mb-8 text-sm text-gray-500">
          Last Updated: 25 November 2026
        </p>

        <div className="space-y-7 leading-7 text-gray-700">
          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              1. About This Website
            </h2>
            <p>
              Vignan Reddy Legal Journey is an independent, student-led
              educational initiative run by <strong>Vignan Reddy</strong>,
              a student pursuing the 3-Year LL.B programme at a college
              affiliated with Osmania University.
            </p>
            <p className="mt-2">
              The website was created with the intention of helping fellow
              law students learn, prepare for examinations, access study
              materials and improve their understanding of law.
            </p>
            <p className="mt-2">
              This is a personal educational initiative and is not an
              official website of Osmania University, any affiliated
              college or any government authority.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              2. Acceptance of Terms
            </h2>
            <p>
              By accessing or using this website, you agree to these
              Terms & Conditions. If you do not agree, please discontinue
              using the website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              3. Educational Purpose
            </h2>
            <p>
              All content, including assignments, internal questions,
              study notes, case laws, internship resources, legal
              dictionary entries and quizzes, is provided for educational
              and informational purposes.
            </p>
            <p className="mt-2">
              These resources are intended to support students and should
              not replace prescribed textbooks, university instructions
              or official study materials.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              4. Accuracy of Information
            </h2>
            <p>
              Reasonable efforts are made to provide accurate and useful
              information. However, laws, legal provisions, judgments and
              academic requirements may change.
            </p>
            <p className="mt-2">
              Users should verify important information through official
              legal sources, legislation, court judgments and university
              notifications.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              5. No Legal Advice
            </h2>
            <p>
              The content on this website does not constitute professional
              legal advice or create a lawyer-client relationship.
              Consult a qualified legal professional for actual legal
              matters.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              6. Permitted Use
            </h2>
            <p>
              Users may access the materials for personal learning and
              educational purposes.
            </p>
            <p className="mt-2">Users must not:</p>
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>
                Reproduce or redistribute website content for commercial
                purposes without permission.
              </li>
              <li>
                Misrepresent website materials as their own original work.
              </li>
              <li>Use the website for unlawful activities.</li>
              <li>Attempt to disrupt or misuse the website.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              7. Third-Party Resources
            </h2>
            <p>
              This website may contain links to external websites and
              educational resources. We do not control or guarantee their
              accuracy, availability or content.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              8. Intellectual Property
            </h2>
            <p>
              Original content, website design and branding created for
              Vignan Reddy Legal Journey belong to their respective
              owners.
            </p>
            <p className="mt-2">
              Legislation, judicial decisions and third-party materials
              remain subject to their respective ownership and applicable
              laws.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              9. Limitation of Liability
            </h2>
            <p>
              The website is provided for educational purposes. To the
              extent permitted by applicable law, we are not responsible
              for losses arising from reliance on website content,
              errors, omissions, service interruptions or third-party
              resources.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              10. Changes to These Terms
            </h2>
            <p>
              These Terms & Conditions may be updated when necessary.
              Changes will be published on this page.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[#142b4a]">
              11. Contact
            </h2>
            <p>
              For questions, suggestions or corrections, please contact:
            </p>
            <div className="mt-3">
              <p className="font-semibold text-[#142b4a]">Vignan Reddy</p>
              <p>Founder – Vignan Reddy Legal Journey</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:vignanreddy.legal@gmail.com"
                  className="font-medium text-[#b28a3c] hover:underline"
                >
                  vignanreddy.legal@gmail.com
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-500">
                An independent student-led educational initiative.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
