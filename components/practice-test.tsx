
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

const subjects = [
  "All Subjects",
  "Law of Contract – I",
  "Family Law – I (Hindu Law)",
  "Constitutional Law – I",
  "Law of Torts",
  "Environmental Law",
  "Legal and Constitutional History of India"
];

interface PracticeTestProps {
  selectedSemester?: string;
}

export default function PracticeTest({
  selectedSemester = "Semester 1"
}: PracticeTestProps) {
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const semesterQuestions =
    selectedSemester === "Semester 1" ? questions : [];

  const filteredQuestions =
    selectedSubject === "All Subjects"
      ? semesterQuestions
      : semesterQuestions.filter(
          (question) => question.subject === selectedSubject
        );

  const attempted = score + wrongScore;

  useEffect(() => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setWrongScore(0);
    setFinished(false);
  }, [selectedSemester, selectedSubject]);

  function chooseAnswer(index: number) {
    if (selected !== null) return;

    setSelected(index);

    if (index === filteredQuestions[current].answer) {
      setScore((previousScore) => previousScore + 1);
    } else {
      setWrongScore((previousScore) => previousScore + 1);
    }
  }

  function nextQuestion() {
    if (current === filteredQuestions.length - 1) {
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
    setWrongScore(0);
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

  const question = filteredQuestions[current];

  return (
    <section className="practice-test">
      <div className="practice-heading">
        <span>TEST YOUR KNOWLEDGE</span>
        <h2>LL.B Practice Test</h2>
        <p>Choose a subject and test your knowledge.</p>
      </div>

      <div className="practice-card">
        <div className="practice-subject-selection">
          <label htmlFor="practice-subject">Select Subject</label>
          <select
            id="practice-subject"
            className="practice-subject-select w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-gray-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"            value={selectedSubject}
            onChange={(event) => setSelectedSubject(event.target.value)}
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        {filteredQuestions.length === 0 ? (
          <p>No questions are available for this subject yet.</p>
        ) : finished ? (
          <div className="practice-result">
            <h3>Test Completed!</h3>
            <p>Your score</p>
            <strong>
              {score} / {filteredQuestions.length}
            </strong>
            <p>
              {Math.round((score / filteredQuestions.length) * 100)}%
            </p>
            <p>
              Correct: {score} | Wrong: {wrongScore}
            </p>
            <p>
              {score / filteredQuestions.length >= 0.8
                ? "Excellent work! Keep learning."
                : score / filteredQuestions.length >= 0.5
                ? "Good effort! Keep practising."
                : "Keep studying. You can improve!"}
            </p>
            <button onClick={restartTest}>Try Again</button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-3 my-5">
              <div className="rounded-xl bg-green-50 p-3 text-center">
                <p className="text-2xl font-bold text-green-700">
                  {score}
                </p>
                <p className="text-xs font-medium text-green-700">
                  Correct
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-3 text-center">
                <p className="text-2xl font-bold text-red-700">
                  {wrongScore}
                </p>
                <p className="text-xs font-medium text-red-700">
                  Wrong
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-center">
                <p className="text-2xl font-bold text-blue-700">
                  {attempted}
                </p>
                <p className="text-xs font-medium text-blue-700">
                  Attempted
                </p>
              </div>
            </div>

            <div className="practice-progress">
              <span>
                Question {current + 1} of {filteredQuestions.length}
              </span>
              <span>
                {Math.round(
                  ((current + 1) / filteredQuestions.length) * 100
                )}%
              </span>
            </div>

            <div className="practice-progress-bar">
              <div
                style={{
                  width: `${
                    ((current + 1) / filteredQuestions.length) * 100
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
              {current === filteredQuestions.length - 1
                ? "View Result"
                : "Next Question"}
            </button>
          </>
        )}
      </div>
    </section>
  );
}
