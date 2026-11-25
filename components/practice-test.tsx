
"use client";

import { useEffect, useState } from "react";

const questions = [
  {
    subject: "Law of Contract – I",
    question: "What is a contract under the Indian Contract Act, 1872?",
    options: [
      "Every agreement",
      "An agreement enforceable by law",
      "A promise without consideration",
      "A social arrangement"
    ],
    answer: 1,
    explanation: "Section 2(h) defines a contract as an agreement enforceable by law."
  },
  {
    subject: "Law of Contract – I",
    question: "Which section deals with the essentials of a valid contract?",
    options: ["Section 2", "Section 10", "Section 25", "Section 73"],
    answer: 1,
    explanation: "Section 10 explains which agreements are contracts."
  },
  {
    subject: "Family Law – I (Hindu Law)",
    question: "Which Act primarily governs Hindu marriages in India?",
    options: [
      "Indian Contract Act, 1872",
      "Hindu Marriage Act, 1955",
      "Special Marriage Act, 1954",
      "Hindu Succession Act, 1956"
    ],
    answer: 1,
    explanation: "The Hindu Marriage Act, 1955 governs important aspects of Hindu marriages."
  },
  {
    subject: "Family Law – I (Hindu Law)",
    question: "Which section of the Hindu Marriage Act deals with conditions for a Hindu marriage?",
    options: ["Section 5", "Section 9", "Section 13", "Section 24"],
    answer: 0,
    explanation: "Section 5 specifies the conditions for a Hindu marriage."
  },
  {
    subject: "Constitutional Law – I",
    question: "Which Article guarantees equality before the law?",
    options: ["Article 12", "Article 14", "Article 19", "Article 21"],
    answer: 1,
    explanation: "Article 14 guarantees equality before the law and equal protection of the laws."
  },
  {
    subject: "Constitutional Law – I",
    question: "Which Article protects life and personal liberty?",
    options: ["Article 14", "Article 17", "Article 21", "Article 32"],
    answer: 2,
    explanation: "Article 21 protects life and personal liberty."
  },
  {
    subject: "Law of Torts",
    question: "What does the term 'tort' generally refer to?",
    options: [
      "A criminal offence",
      "A civil wrong",
      "A constitutional amendment",
      "A contract"
    ],
    answer: 1,
    explanation: "A tort is generally a civil wrong for which the law provides a remedy, usually damages."
  },
  {
    subject: "Law of Torts",
    question: "Which case is associated with the rule of strict liability?",
    options: [
      "Donoghue v Stevenson",
      "Rylands v Fletcher",
      "Carlill v Carbolic Smoke Ball Co.",
      "Kesavananda Bharati v State of Kerala"
    ],
    answer: 1,
    explanation: "Rylands v Fletcher established the rule of strict liability."
  },
  {
    subject: "Environmental Law",
    question: "Which Article directs the State to protect and improve the environment?",
    options: ["Article 32", "Article 48A", "Article 19", "Article 300A"],
    answer: 1,
    explanation: "Article 48A directs the State to protect and improve the environment."
  },
  {
    subject: "Environmental Law",
    question: "Which Act deals with prevention and control of water pollution in India?",
    options: [
      "Air Act, 1981",
      "Water Act, 1974",
      "Wildlife Protection Act, 1972",
      "Forest Conservation Act, 1980"
    ],
    answer: 1,
    explanation: "The Water (Prevention and Control of Pollution) Act was enacted in 1974."
  },
  {
    subject: "Legal and Constitutional History of India",
    question: "In which year was the Regulating Act passed?",
    options: ["1765", "1773", "1784", "1793"],
    answer: 1,
    explanation: "The Regulating Act was passed by the British Parliament in 1773."
  },
  {
    subject: "Legal and Constitutional History of India",
    question: "The Supreme Court at Calcutta was established under which Act?",
    options: [
      "Charter Act, 1833",
      "Regulating Act, 1773",
      "Indian Councils Act, 1861",
      "Government of India Act, 1935"
    ],
    answer: 1,
    explanation: "The Regulating Act, 1773 provided for the establishment of the Supreme Court at Calcutta, which began functioning in 1774."
  }
];

interface PracticeTestProps {
  selectedSemester?: string;
}

export default function PracticeTest({
  selectedSemester = "Semester 1"
}: PracticeTestProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const semesterQuestions =
    selectedSemester === "Semester 1" ? questions : [];

  useEffect(() => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }, [selectedSemester]);

  function chooseAnswer(index: number) {
    if (selected !== null) return;

    setSelected(index);

    if (index === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  }

  function nextQuestion() {
    if (current === semesterQuestions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
      setSelected(null);
    }
  }

  function restartTest() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (semesterQuestions.length === 0) {
    return (
      <section className="practice-test">
        <div className="practice-heading">
          <span>TEST YOUR KNOWLEDGE</span>
          <h2>LL.B Practice Test</h2>
          <p>
            Practice questions for {selectedSemester} are being prepared.
            Please check back soon!
          </p>
        </div>
      </section>
    );
  }

  const question = semesterQuestions[current];

  return (
    <section className="practice-test">
      <div className="practice-heading">
        <span>TEST YOUR KNOWLEDGE</span>
        <h2>LL.B Practice Test</h2>
        <p>Practise important questions from {selectedSemester}.</p>
      </div>

      <div className="practice-card">
        {finished ? (
          <div className="practice-result">
            <h3>Test Completed!</h3>
            <p>Your score</p>
            <strong>
              {score} / {semesterQuestions.length}
            </strong>
            <p>
              {score >= 10
                ? "Excellent work! Keep learning."
                : score >= 6
                ? "Good effort! Keep practising."
                : "Keep studying. You can improve!"}
            </p>
            <button onClick={restartTest}>Try Again</button>
          </div>
        ) : (
          <>
            <div className="practice-progress">
              <span>
                Question {current + 1} of {semesterQuestions.length}
              </span>
              <span>
                {Math.round(
                  ((current + 1) / semesterQuestions.length) * 100
                )}%
              </span>
            </div>

            <div className="practice-progress-bar">
              <div
                style={{
                  width: `${
                    ((current + 1) / semesterQuestions.length) * 100
                  }%`
                }}
              />
            </div>

            <p className="practice-subject">{question.subject}</p>
            <h3>{question.question}</h3>

            <div className="practice-options">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`practice-option ${
                    selected !== null && index === question.answer
                      ? "correct"
                      : selected === index
                      ? "incorrect"
                      : ""
                  }`}
                  onClick={() => chooseAnswer(index)}
                  disabled={selected !== null}
                >
                  {option}
                </button>
              ))}
            </div>

            {selected !== null && (
              <div className="practice-explanation">
                <strong>
                  {selected === question.answer ? "Correct!" : "Incorrect!"}
                </strong>
                <p>{question.explanation}</p>
              </div>
            )}

            <button
              className="practice-next"
              onClick={nextQuestion}
              disabled={selected === null}
            >
              {current === semesterQuestions.length - 1
                ? "View Result"
                : "Next Question"}
            </button>
          </>
        )}
      </div>
    </section>
  );
}
