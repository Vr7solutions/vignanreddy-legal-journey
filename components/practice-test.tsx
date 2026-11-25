
"use client";

import { useEffect, useState } from "react";

import { contractLawQuestions } from "@/lib/practice-questions/contract-law";
import { hinduLawQuestions } from "@/lib/practice-questions/hindu-law";
import { constitutionalLawQuestions } from "@/lib/practice-questions/constitutional-law";
import { tortsLawQuestions } from "@/lib/practice-questions/torts-law";
import { environmentalLawQuestions } from "@/lib/practice-questions/environmental-law";
import { legalHistoryQuestions } from "@/lib/practice-questions/legal-history";

import type { PracticeQuestion } from "@/lib/practice-questions/types";

const questions: PracticeQuestion[] = [
  ...contractLawQuestions.slice(0, 100),
  ...hinduLawQuestions.slice(0, 100),
  ...constitutionalLawQuestions.slice(0, 100),
  ...tortsLawQuestions.slice(0, 100),
  ...environmentalLawQuestions.slice(0, 100),
  ...legalHistoryQuestions.slice(0, 100)
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

  const question = semesterQuestions[current];

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

  const percentage = Math.round(
    (score / semesterQuestions.length) * 100
  );

  return (
    <section className="practice-test">
      <div className="practice-heading">
        <span>TEST YOUR KNOWLEDGE</span>
        <h2>LL.B Practice Test</h2>
        <p>
          Practise {semesterQuestions.length} questions from
          {" "}{selectedSemester}.
        </p>
      </div>

      <div className="practice-card">
        {finished ? (
          <div className="practice-result">
            <h3>Test Completed!</h3>
            <p>Your score</p>

            <strong>
              {score} / {semesterQuestions.length}
            </strong>

            <p>{percentage}%</p>

            <p>
              {percentage >= 80
                ? "Excellent work! Keep learning."
                : percentage >= 50
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
                  {selected === question.answer
                    ? "Correct!"
                    : "Incorrect!"}
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
