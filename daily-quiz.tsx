
"use client";

import { useState } from "react";

const questions = [
  {
    question: "Which is the supreme law of India?",
    options: ["IPC", "Constitution of India", "BNS", "CPC"],
    answer: 1,
    explanation: "The Constitution of India is the supreme law of the country."
  },
  {
    question: "Which Article guarantees equality before the law?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    answer: 0,
    explanation: "Article 14 guarantees equality before the law and equal protection of the laws."
  },
  {
    question: "Who is known as the guardian of the Constitution in India?",
    options: ["President", "Parliament", "Supreme Court", "Prime Minister"],
    answer: 2,
    explanation: "The Supreme Court protects the Constitution through judicial review and interpretation."
  },
  {
    question: "What is a valid contract?",
    options: ["Any promise", "An agreement enforceable by law", "A casual conversation", "An informal request"],
    answer: 1,
    explanation: "Section 2(h) of the Indian Contract Act, 1872 defines a contract as an agreement enforceable by law."
  },
  {
    question: "Which writ protects a person against unlawful detention?",
    options: ["Mandamus", "Certiorari", "Prohibition", "Habeas Corpus"],
    answer: 3,
    explanation: "Habeas Corpus requires the detained person to be brought before a court."
  },
  {
    question: "Which case is associated with the rule of strict liability?",
    options: ["Donoghue v Stevenson", "Rylands v Fletcher", "Kesavananda Bharati", "Maneka Gandhi"],
    answer: 1,
    explanation: "Rylands v Fletcher established the rule of strict liability."
  },
  {
    question: "Which Article protects life and personal liberty?",
    options: ["Article 14", "Article 19", "Article 21", "Article 25"],
    answer: 2,
    explanation: "Article 21 protects life and personal liberty."
  },
  {
    question: "What does PIL stand for?",
    options: ["Public Interest Litigation", "Private Indian Law", "Personal Investigation Law", "Public Information List"],
    answer: 0,
    explanation: "PIL stands for Public Interest Litigation."
  },
  {
    question: "Who appoints the Chief Justice of India?",
    options: ["Prime Minister", "President of India", "Chief Minister", "Lok Sabha Speaker"],
    answer: 1,
    explanation: "The President formally appoints the Chief Justice of India."
  },
  {
    question: "Which law governs the procedure of civil courts in India?",
    options: ["BNS", "CPC", "BSA", "Contract Act"],
    answer: 1,
    explanation: "The Code of Civil Procedure, 1908 governs civil court procedure."
  }
];

const today = new Date().toLocaleDateString("en-CA", {
  timeZone: "Asia/Kolkata"
});

const dayNumber = Math.floor(
  new Date(`${today}T00:00:00+05:30`).getTime() / 86400000
);

const dailyQuestion = questions[
  ((dayNumber % questions.length) + questions.length) % questions.length
];

export default function DailyQuiz() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="daily-quiz">
      <div className="quiz-heading">
        <span>TEST YOUR LEGAL KNOWLEDGE</span>
        <h2>Legal Quiz of the Day</h2>
        <p>A new question every day. Learn something new!</p>
      </div>

      <div className="quiz-card">
        <h3>{dailyQuestion.question}</h3>

        <div className="quiz-options">
          {dailyQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`quiz-option ${
                selected !== null && index === dailyQuestion.answer
                  ? "correct"
                  : selected === index
                    ? "incorrect"
                    : ""
              }`}
              onClick={() => setSelected(index)}
              disabled={selected !== null}
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}
        </div>

        {selected !== null && (
          <div className="quiz-feedback" role="status">
            <strong>
              {selected === dailyQuestion.answer
                ? "Correct! Well done."
                : "Not quite! The correct answer is " +
                  dailyQuestion.options[dailyQuestion.answer] + "."}
            </strong>
            <p>{dailyQuestion.explanation}</p>
          </div>
        )}
      </div>
    </section>
  );
}
