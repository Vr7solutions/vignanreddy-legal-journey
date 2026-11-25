
import Link from "next/link";

export default function Disclaimer() {
  return (
    <main style={{
      maxWidth: "900px",
      margin: "60px auto",
      padding: "24px",
      color: "#142541",
      lineHeight: 1.8,
    }}>
      <Link href="/" style={{ color: "#c7a36b" }}>
        ← Back to Home
      </Link>

      <h1>Disclaimer</h1>
      <p>Last updated: November 2026</p>

      <h2>1. Educational Purpose</h2>
      <p>
        Vignan Reddy Legal Journey is an independent, non-commercial
        educational initiative created to support students pursuing
        the 3-Year LL.B (3YDC) course, particularly 1st Year,
        1st Semester students of Osmania University, through study
        materials, notes, assignments, quizzes and legal information.
      </p>

      <h2>2. No University Affiliation</h2>
      <p>
        This website is independently created and managed by a student.
        It is not an official website of Osmania University and is not
        affiliated with, endorsed by, or operated by Osmania University
        or its departments. University names are used only to identify
        the intended academic audience.
      </p>

      <h2>3. Not Legal Advice</h2>
      <p>
        The information provided on this website is for educational
        and informational purposes only. It does not constitute
        legal advice, a legal opinion, or a lawyer-client relationship.
        Consult a qualified legal professional for advice about
        your specific situation.
      </p>

      <h2>4. Accuracy and Updates</h2>
      <p>
        We make reasonable efforts to provide accurate and useful
        information. However, laws, judgments, rules and regulations
        may change. We do not guarantee that all content is complete,
        current or error-free.
      </p>

      <h2>5. Jurisdiction</h2>
      <p>
        Legal content primarily focuses on Indian law unless
        otherwise stated. Laws and legal procedures may differ
        across jurisdictions.
      </p>

      <h2>6. Academic Use</h2>
      <p>
        Study materials are provided as learning aids. Students
        should consult prescribed textbooks, official legal sources,
        the applicable Osmania University syllabus and university
        guidelines for examinations and assignments.
      </p>

      <h2>7. External References</h2>
      <p>
        This website may link to external websites and legal
        resources. We do not control or guarantee the accuracy
        or availability of third-party content.
      </p>

      <h2>8. Limitation of Responsibility</h2>
      <p>
        To the extent permitted by applicable law, we are not
        responsible for decisions or actions taken solely on
        the basis of information published on this website.
      </p>

      <h2>9. Contact</h2>
      <p>
        For questions about this disclaimer, please use the
        contact details provided on our website, if available.
      </p>
    </main>
  );
}
