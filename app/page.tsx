
export const dynamic = "force-dynamic";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Sparkles,
  Bell,
} from "lucide-react";

import AcademicDashboard from "@/components/academic-dashboard";
import VisitorCounter from "@/components/visitor-counter";
import WelcomeMessage from "@/components/welcome-message";
import { getLegalWord } from "@/lib/content";

export default function Home() {
  const dailyWord = getLegalWord();

  return (
    <main>
      <WelcomeMessage />

      <div className="announcement">
        <Sparkles size={14} />
        A student-led initiative
        <span>·</span>
        Always free, always for learning
      </div>

      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark"><Scale size={22} /></span>
          <span>
            <strong>VIGNAN REDDY</strong>
            <small>LEGAL JOURNEY</small>
          </span>
        </a>

        <nav>
          <a href="#explore">Explore</a>
          <a href="#resources">Resources</a>
          <a href="#daily-word">Legal word</a>
          <a href="#daily-quiz">Legal quiz</a>
          <a href="#practice-test">Practice test</a>
          <a href="#about">About</a>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1"
            >
              More <span>▾</span>
            </button>

            <div className="absolute right-0 top-full z-50 hidden min-w-64 rounded-lg border border-gray-200 bg-white p-2 shadow-lg group-hover:block group-focus-within:block">
              <a
                href="/previous-year-question-papers"
                className="block rounded-md px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                Previous Year Question Papers
              </a>
            </div>
          </div>
        </nav>

        <a className="header-cta" href="#explore">
          Start learning <ArrowUpRight size={15} />
        </a>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-kicker">
              <span></span> OSMANIA UNIVERSITY · 3-YEAR LL.B
            </div>

            <p className="eyebrow">
              3YDC · 1ST YEAR · 1ST SEMESTER
            </p>

            <h1>
              Your legal journey.<br />
              <em>Made a little easier.</em>
            </h1>

            <p className="hero-description">
              A free learning space built by a law student, for law students.
              Specially focused on Osmania University 3-Year LL.B students.
              Find notes, assignments, important questions, case laws and
              practical resources — all in one place.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#explore">
                Explore resources <ArrowRight size={17} />
              </a>
              <a className="secondary-button" href="#about">
                Our purpose
              </a>
            </div>

            <div className="hero-trust">
              <span><ShieldCheck size={16} /> Free learning resources</span>
              <span><HeartHandshake size={16} /> Made to help students</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-orbit orbit-one"></div>
            <div className="art-orbit orbit-two"></div>
            <div className="art-center">
              <Scale size={76} strokeWidth={1.15} />
            </div>

            <div className="floating-note note-top">
              <BookOpen size={17} />
              <span>
                <b>Learn</b>
                <small>At your own pace</small>
              </span>
            </div>

            <div className="floating-note note-bottom">
              <GraduationCap size={19} />
              <span>
                <b>Grow</b>
                <small>One topic at a time</small>
              </span>
            </div>

            <div className="art-caption">
              KNOW YOUR RIGHTS<br />
              SHAPE YOUR FUTURE
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>STUDY · UNDERSTAND · APPLY</span>
          <span>AN OPEN RESOURCE FOR LAW STUDENTS</span>
        </div>
      </section>

      <div className="values-strip">
        <div>
          <span>01</span>
          <b>Simple explanations</b>
          <small>Law made easier to understand</small>
        </div>
        <div>
          <span>02</span>
          <b>Organised resources</b>
          <small>Find what you need, faster</small>
        </div>
        <div>
          <span>03</span>
          <b>Student-first</b>
          <small>Created with learners in mind</small>
        </div>
        <div>
          <span>04</span>
          <b>Free access</b>
          <small>Knowledge should be shared</small>
        </div>
      </div>

      <VisitorCounter />

      <AcademicDashboard />

      <section className="scroll-mt-24 px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <a
            href="/ou-updates"
            className="group flex flex-col gap-5 rounded-2xl border border-[#E7D9B8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[#172554] p-4 text-white">
                <Bell size={28} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#A77D2D]">
                  Stay informed
                </p>
                <h2 className="mt-1 text-xl font-bold text-[#172554] sm:text-2xl">
                  OU & College Updates
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                  Find Osmania University notifications, syllabus,
                  examination timetables, results and ISL College
                  announcements in one place.
                </p>
              </div>
            </div>

            <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#172554] px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-[#243b78]">
              View Updates <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </section>

      <section id="daily-word" className="word-section scroll-mt-24">
        <div className="word-card">
          <div className="word-left">
            <p className="eyebrow">YOUR DAILY DOSE OF LAW</p>
            <h2>
              One legal word.<br />
              <em>One step forward.</em>
            </h2>
            <p>
              Build your legal vocabulary with simple meanings and
              practical examples.
            </p>
            <a href="/legal-dictionary" className="word-link">
              Explore the legal dictionary <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="word-right">
            <span className="word-label">WORD OF THE DAY</span>
            <h3>{dailyWord.word}</h3>
            <p className="pronunciation">
              {dailyWord.pronunciation}
            </p>
            <p>{dailyWord.meaning}</p>

            <div className="example">
              <b>IN A SENTENCE</b>
              <p>“{dailyWord.example}”</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section scroll-mt-24">
        <div className="about-icon">
          <HeartHandshake size={28} />
        </div>

        <p className="eyebrow">WHY THIS WEBSITE EXISTS</p>

        <h2>
          Law is complex.<br />
          <em>Learning doesn't have to be.</em>
        </h2>

        <p className="about-copy">
          Vignan Reddy Legal Journey is an independent, non-commercial
          educational initiative created to share useful learning
          materials for Osmania University 3-Year LL.B students.
          The goal is simple: make legal learning more accessible,
          organised and understandable for everyone.
        </p>

        <div className="motto">
          “Learn Law. Share Knowledge. Grow Together.”
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><Scale size={21} /></span>
          <span>
            <strong>VIGNAN REDDY</strong>
            <small>LEGAL JOURNEY</small>
          </span>
        </a>

        <p>
          Independent student learning initiative · Free for everyone
        </p>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "16px 0",
        }}>
          <a href="/about" style={{ color: "inherit" }}>
            About Us
          </a>
          <a href="/contact" style={{ color: "inherit" }}>
            Contact Us
          </a>
          <a href="/privacy-policy" style={{ color: "inherit" }}>
            Privacy Policy
          </a>
          <a href="/terms-and-conditions" style={{ color: "inherit" }}>
            Terms &amp; Conditions
          </a>
          <a href="/disclaimer" style={{ color: "inherit" }}>
            Disclaimer
          </a>
        </div>

        <span>
          © {new Date().getFullYear()} Vignan Reddy Legal Journey
        </span>
      </footer>
    </main>
  );
}
