
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
  Languages,
  SlidersHorizontal
} from "lucide-react";

import { categories, resources, subjects } from "@/lib/content";

const iconMap: Record<string, any> = {
  FileText,
  ClipboardList,
  BookOpen,
  Scale,
  BriefcaseBusiness,
  Languages
};

const resourceTypeMap: Record<string, string> = {
  "Case Laws": "Case Laws",
  "Internal 1": "Internal 1",
  "Internal 2": "Internal 2",
  "Internship": "Internship",
  "Notes": "Study Notes"
};

type ResourceHubProps = {
  selectedSemester?: string;
  selectedYear?: string;
  selectedSubjects?: string[];
};

export default function ResourceHub(props: ResourceHubProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All resources");

  const [selectedSubject, setSelectedSubject] = useState(
    props.selectedSubjects?.[0] || "All Subjects"
  );

  const [selectedSemester, setSelectedSemester] = useState(
    props.selectedSemester || "All Semesters"
  );

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const searchText = query.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.subject.toLowerCase().includes(searchText);

      const matchesType =
        filter === "All resources" ||
        item.type === resourceTypeMap[filter];

      const matchesSubject =
        selectedSubject === "All Subjects" ||
        item.subject === selectedSubject;

      const matchesSemester =
        selectedSemester === "All Semesters" ||
        item.semester === selectedSemester ||
        item.semester === "All Semesters";

      return (
        matchesSearch &&
        matchesType &&
        matchesSubject &&
        matchesSemester
      );
    });
  }, [query, filter, selectedSubject, selectedSemester]);

  const handleCategoryClick = (title: string) => {
    const categoryFilters: Record<string, string> = {
      "Case Laws": "Case Laws",
      "Internal Questions": "All resources",
      "Study Notes": "Notes",
      "Internship Resources": "Internship",
      "Assignments": "All resources",
      "Legal Dictionary": "All resources"
    };

    setFilter(categoryFilters[title] || "All resources");
  };

  return (
    <section className="resource-hub" id="resources">
      <div className="section-heading">
        <span className="section-eyebrow">LEARNING RESOURCES</span>
        <h2>Resource Hub</h2>
        <p>
          Find study materials, internal questions, case laws and other
          useful resources.
        </p>
      </div>

      <div className="resource-categories">
        {categories.map((category) => {
          const Icon = iconMap[category.icon] || FileText;

          return (
            <button
              key={category.title}
              className="resource-category-card"
              onClick={() => handleCategoryClick(category.title)}
              type="button"
            >
              <span className="category-icon">
                <Icon size={22} />
              </span>

              <span className="category-content">
                <strong>{category.title}</strong>
                <small>{category.detail}</small>
              </span>

              <ArrowUpRight size={18} />
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
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="filter-box">
          <SlidersHorizontal size={17} />
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            aria-label="Filter by resource type"
          >
            <option>All resources</option>
            <option>Case Laws</option>
            <option>Internal 1</option>
            <option>Internal 2</option>
            <option>Internship</option>
            <option>Notes</option>
          </select>
        </div>

        <div className="filter-box">
          <select
            value={selectedSubject}
            onChange={(event) => setSelectedSubject(event.target.value)}
            aria-label="Filter by subject"
          >
            <option>All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <div className="filter-box">
          <select
            value={selectedSemester}
            onChange={(event) => setSelectedSemester(event.target.value)}
            aria-label="Filter by semester"
          >
            <option>All Semesters</option>
            <option>Semester 1</option>
            <option>Semester 2</option>
            <option>Semester 3</option>
            <option>Semester 4</option>
            <option>Semester 5</option>
            <option>Semester 6</option>
          </select>
        </div>
      </div>

      <div className="resource-list">
        {filteredResources.length > 0 ? (
          filteredResources.map((item, index) => (
            <article
              className="resource-card"
              key={`${item.title}-${index}`}
            >
              <div className="resource-icon">
                <FileText size={22} />
              </div>

              <div className="resource-content">
                <span className="resource-type">{item.type}</span>
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
                  className="resource-arrow download-button"
                  download
                >
                  <ArrowDownToLine size={18} />
                  <span>Download PDF</span>
                </a>
              ) : (
                <span className="resource-arrow">
                  <ArrowUpRight size={18} />
                </span>
              )}
            </article>
          ))
        ) : (
          <div className="resource-empty">
            <BookOpen size={30} />
            <h3>No resources found</h3>
            <p>
              No resources are currently available for this selection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
