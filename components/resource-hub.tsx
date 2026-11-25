"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ArrowUpRight,
  ArrowDownToLine,
  FileText,
  ClipboardList,
  BookOpen,
  Scale,
  BriefcaseBusiness,
  SlidersHorizontal
} from "lucide-react";

import { categories, resources } from "@/lib/content";

const iconMap = {
  FileText,
  ClipboardList,
  BookOpen,
  Scale,
  BriefcaseBusiness
};

interface ResourceHubProps {
  selectedSemester: string;
  selectedSubjects: string[];
}

export default function ResourceHub({
  selectedSemester,
  selectedSubjects
}: ResourceHubProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All resources");
  const [subject, setSubject] = useState("All subjects");

  useEffect(() => {
    setSubject("All subjects");
  }, [selectedSemester]);

  const filtered = useMemo(
    () =>
      resources.filter((item) => {
        const matchesSearch =
          `${item.title} ${item.subject} ${item.type} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase());

        const matchesType =
          filter === "All resources" || item.type === filter;

        const matchesSemester =
          item.semester === selectedSemester ||
          item.semester === "All Semesters";

        const matchesSubject =
          subject === "All subjects" || item.subject === subject;

        return (
          matchesSearch &&
          matchesType &&
          matchesSemester &&
          matchesSubject
        );
      }),
    [query, filter, selectedSemester, subject]
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
                onClick={() => setFilter(item.title)}
              >
                <span className="category-icon">
                  {Icon && <Icon size={21} />}
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
                Browse materials for {selectedSemester}. Choose a subject
                or resource type to narrow your search.
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
              <BookOpen size={17} />
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                aria-label="Filter by subject"
              >
                <option>All subjects</option>
                {selectedSubjects.map((item) => (
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
                <option>Internal 1</option>
                <option>Internal 2</option>
                <option>Study Material</option>
                <option>Final Exam Q&A</option>
                <option>Case Laws</option>
                <option>Internship Record</option>
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
                No matching resources available for {selectedSemester} yet.
                More materials will be added.
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
