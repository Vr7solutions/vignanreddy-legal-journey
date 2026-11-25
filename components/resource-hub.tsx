
"use client";

import { useMemo, useState } from "react";
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

import { categories, resources, subjects } from "@/lib/content";

const resourceTypes = [
  "All resources",
  "Internal 1",
  "Internal 2",
  "Study Material",
  "Final Exam Q&A",
  "Case Laws",
  "Internship Record"
];

const categoryIcons: Record<string, React.ElementType> = {
  ClipboardList,
  BookOpen,
  FileText,
  Scale,
  BriefcaseBusiness
};

export default function ResourceHub() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All resources");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedSemester, setSelectedSemester] = useState("All Semesters");

  const semesters = ["All Semesters", "Semester 1", "All Semesters"];

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.subject.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        filter === "All resources" || item.type === filter;

      const matchesSubject =
        selectedSubject === "All Subjects" ||
        item.subject === selectedSubject;

      const matchesSemester =
        selectedSemester === "All Semesters" ||
        item.semester === selectedSemester;

      return (
        matchesSearch &&
        matchesType &&
        matchesSubject &&
        matchesSemester
      );
    });
  }, [search, filter, selectedSubject, selectedSemester]);

  return (
    <section className="resource-hub" id="resources">
      <div className="section-heading">
        <div>
          <span className="eyebrow">LEARNING RESOURCES</span>
          <h2>Resource Hub</h2>
          <p>
            Access subject-wise internal questions, study material,
            final exam preparation and case laws.
          </p>
        </div>
      </div>

      <div className="resource-category-grid">
        {categories.map((category) => {
          const Icon =
            categoryIcons[category.icon] || FileText;

          return (
            <button
              type="button"
              className="resource-category-card"
              key={category.title}
              onClick={() => {
                setFilter(category.title);
                setSelectedSubject("All Subjects");
              }}
            >
              <Icon size={24} />
              <h3>{category.title}</h3>
              <p>{category.detail}</p>
              <span>{category.count}</span>
            </button>
          );
        })}
      </div>

      <div className="resource-tools">
        <div className="search-box">
          <Search size={19} />
          <input
            type="search"
            placeholder="Search resources..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="filter-box">
          <SlidersHorizontal size={17} />
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          >
            {resourceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-box">
          <select
            value={selectedSubject}
            onChange={(event) =>
              setSelectedSubject(event.target.value)
            }
          >
            <option value="All Subjects">All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
            <option value="Internship">Internship</option>
            <option value="Legal Skills">Legal Skills</option>
          </select>
        </div>

        <div className="filter-box">
          <select
            value={selectedSemester}
            onChange={(event) =>
              setSelectedSemester(event.target.value)
            }
          >
            <option value="All Semesters">All Semesters</option>
            <option value="Semester 1">Semester 1</option>
          </select>
        </div>
      </div>

      <div className="resource-results">
        <div className="resource-results-heading">
          <h3>Available Resources</h3>
          <span>{filteredResources.length} resources</span>
        </div>

        {filteredResources.length > 0 ? (
          <div className="resource-list">
            {filteredResources.map((item, index) => (
              <article
                className="resource-card"
                key={`${item.title}-${index}`}
              >
                <div className="resource-card-icon">
                  <FileText size={22} />
                </div>

                <div className="resource-card-content">
                  <span className="resource-type">
                    {item.type}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="resource-meta">
                    <span>{item.subject}</span>
                    <span>{item.semester}</span>
                  </div>
                </div>

                {item.downloadUrl ? (
                  <a
                    href={item.downloadUrl}
                    className="resource-action"
                    download
                    aria-label={`Download ${item.title}`}
                  >
                    <ArrowDownToLine size={19} />
                  </a>
                ) : (
                  <span
                    className="resource-action unavailable"
                    title="Material will be added later"
                  >
                    <ArrowUpRight size={19} />
                  </span>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="resource-empty">
            <FileText size={32} />
            <h3>No resources found</h3>
            <p>
              Try changing your search or filters. New materials
              will be added here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
