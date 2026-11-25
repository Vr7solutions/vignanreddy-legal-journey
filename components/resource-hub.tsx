
"use client";

import { useMemo, useState } from "react";
import {
  Search, ArrowUpRight, ArrowDownToLine, FileText, ClipboardList, BookOpen,
  Scale, BriefcaseBusiness, Languages, SlidersHorizontal
} from "lucide-react";
import { categories, resources, subjects } from "@/lib/content";

const iconMap = {
  FileText, ClipboardList, BookOpen, Scale,
  BriefcaseBusiness, Languages
};

const semesterYear = (semester: string) => {
  const number = Number(semester.match(/\d+/)?.[0]);

  if (number === 1 || number === 2) return "1st Year";
  if (number === 3 || number === 4) return "2nd Year";
  if (number === 5 || number === 6) return "3rd Year";

  return "All years";
};

export default function ResourceHub() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All resources");
  const [year, setYear] = useState("All years");
  const [semester, setSemester] = useState("All semesters");
  const [subject, setSubject] = useState("All subjects");

  const filtered = useMemo(
    () =>
      resources.filter((item) => {
        const matchesSearch =
          `${item.title} ${item.subject} ${item.type} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase());

        const matchesType =
          filter === "All resources" || item.type === filter;

        const matchesYear =
          year === "All years" ||
          semesterYear(item.semester) === year ||
          item.semester === "All Semesters";

        const matchesSemester =
          semester === "All semesters" ||
          item.semester === semester ||
          item.semester === "All Semesters";

        const matchesSubject =
          subject === "All subjects" || item.subject === subject;

        return (
          matchesSearch &&
          matchesType &&
          matchesYear &&
          matchesSemester &&
          matchesSubject
        );
      }),
    [query, filter, year, semester, subject]
  );

  return (
    <>
      <section id="explore" className="section-wrap scroll-mt-24">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE STUDENT RESOURCE CENTRE</p>
            <h2>Everything you need, <em>in one place.</em></h2>
            <p className="section-copy">
              Explore learning resources created to make your LL.B journey
              clearer and more manageable.
            </p>
          </div>
          <a className="text-link" href="#resources">
            Browse resources <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="category-grid">
          {categories.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <a
                className="category-card"
                href="#resources"
                key={item.title}
                onClick={() =>
                  setFilter(
                    item.title === "Internal Questions"
                      ? "Question Bank"
                      : item.title === "Assignments"
                      ? "Assignment Guide"
                      : item.title === "Study Notes"
                      ? "Study Notes"
                      : item.title === "Case Laws"
                      ? "Case Laws"
                      : "All resources"
                  )
                }
              >
                <span className="category-icon">
                  <Icon size={21} />
                </span>
                <span className="category-title">{item.title}</span>
                <span className="category-detail">{item.detail}</span>
                <span className="category-bottom">
                  Explore <ArrowUpRight size={15} />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section id="resources" className="resource-section scroll-mt-24">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE LL.B RESOURCE LIBRARY</p>
              <h2>Find materials by <em>semester.</em></h2>
              <p className="section-copy">
                Choose your year, semester, subject and resource type
                to find relevant learning materials.
              </p>
            </div>
          </div>

          <div className="resource-tools">
            <label className="search-box">
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search subjects, topics or resources..."
                aria-label="Search resources"
              />
            </label>

            <label className="filter-box">
              <GraduationCapFallback />
              <select
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                  setSemester("All semesters");
                }}
                aria-label="Filter by year"
              >
                <option>All years</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
              </select>
            </label>

            <label className="filter-box">
              <BookOpen size={17} />
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                aria-label="Filter by semester"
              >
                <option>All semesters</option>
                <option>Semester 1</option>
                <option>Semester 2</option>
                <option>Semester 3</option>
                <option>Semester 4</option>
                <option>Semester 5</option>
                <option>Semester 6</option>
              </select>
            </label>

            <label className="filter-box">
              <BookOpen size={17} />
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                aria-label="Filter by subject"
              >
                <option>All subjects</option>
                {subjects.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="filter-box">
              <SlidersHorizontal size={17} />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter by resource type"
              >
                <option>All resources</option>
                <option>Question Bank</option>
                <option>Assignment Guide</option>
                <option>Study Notes</option>
                <option>Practical Guide</option>
                <option>Case Laws</option>
              </select>
            </label>
          </div>

          <div className="resource-list">
            {filtered.map((item, index) => (
              <article className="resource-row" key={item.title}>
                <div className="resource-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="resource-main">
                  <div className="resource-meta">
                    <span>{item.type}</span>
                    <span>{item.semester}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <small>{item.subject}</small>
                </div>

                {"downloadUrl" in item && item.downloadUrl ? (
                  <a
                    className="resource-arrow download-button"
                    href={item.downloadUrl}
                    download
                    aria-label={`Download ${item.title}`}
                    title="Download PDF"
                  >
                    <ArrowDownToLine size={17} />
                    <span>Download PDF</span>
                  </a>
                ) : (
                  <span className="resource-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                )}
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="empty-state">
                No matching resources yet. Try another filter.
              </div>
            )}
          </div>

          <p className="demo-note">
            More verified study materials will be added semester by semester.
          </p>
        </div>
      </section>
    </>
  );
}

function GraduationCapFallback() {
  return <BriefcaseBusiness size={17} />;
}
