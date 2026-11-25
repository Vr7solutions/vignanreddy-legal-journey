
"use client";

import { useState } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

import ResourceHub from "@/components/resource-hub";
import DailyQuiz from "@/components/daily-quiz";
import PracticeTest from "@/components/practice-test";

import { academicYears, semesterData } from "@/lib/academic";

export default function AcademicDashboard() {
  const [selectedYear, setSelectedYear] = useState(academicYears[0].name);

  const [selectedSemester, setSelectedSemester] = useState(
    academicYears[0].semesters[0]
  );

  const semestersForYear =
    academicYears.find((year) => year.name === selectedYear)?.semesters ?? [];

  const selectedSubjects =
    semesterData[selectedSemester as keyof typeof semesterData];

  return (
    <>
      <section className="section-wrap scroll-mt-24">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR ACADEMIC DASHBOARD</p>

            <h2>
              Choose your <em>learning year.</em>
            </h2>

            <p className="section-copy">
              Select your year and semester to view the relevant subjects
              and learning resources.
            </p>
          </div>
        </div>

        <div className="resource-tools">
          <label className="filter-box">
            <GraduationCap size={18} />

            <select
              value={selectedYear}
              onChange={(e) => {
                const newYear = e.target.value;

                const newSemesters =
                  academicYears.find((year) => year.name === newYear)
                    ?.semesters ?? [];

                setSelectedYear(newYear);
                setSelectedSemester(newSemesters[0]);
              }}
              aria-label="Choose academic year"
            >
              {academicYears.map((year) => (
                <option key={year.name} value={year.name}>
                  {year.name}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-box">
            <BookOpen size={18} />

            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              aria-label="Choose semester"
            >
              {semestersForYear.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <ResourceHub
        selectedSemester={selectedSemester}
        selectedSubjects={selectedSubjects}
      />

      <section id="daily-quiz" className="scroll-mt-24">
        <DailyQuiz selectedSemester={selectedSemester} />
      </section>

      <section id="practice-test" className="scroll-mt-24">
        <PracticeTest selectedSemester={selectedSemester} />
      </section>
    </>
  );
}
