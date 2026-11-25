
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

import { categories, resources } from "@/lib/content";

interface ResourceHubProps {
  selectedSemester?: string;
  selectedSubjects?: string[];
}

interface ResourceItem {
  title: string;
  subject: string;
  type: string;
  semester: string;
  description: string;
  downloadUrl?: string;
}

const resourceTypes = [
  "All resources",
  "Internal 1",
  "Internal 2",
  "Study Material",
  "Final Exam Q&A",
  "Case Laws",
  "Internship Record"
];

export default function ResourceHub({
  selectedSemester = "All Semesters",
  selectedSubjects = []
}: ResourceHubProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All resources");

  const filteredResources = useMemo((): ResourceItem[] => {
    return (resources as ResourceItem[]).filter((item) => {
      const searchTerm = search.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.subject.toLowerCase().includes(searchTerm);

      const matchesType =
        filter === "All resources" || item.type === filter;

      const matchesSubject =
        selectedSubjects.length === 0 ||
        selectedSubjects.includes(item.subject);

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
  }, [search, filter, selectedSemester, selectedSubjects]);

  return (
    <section className="resource-hub" id="resources">
      <div className="section-heading">
        <div>
          <span className="eyebrow">LEARNING RESOURCES</span>
          <h2>Resource Hub</h2>
          <p>
            Access internal questions, study material, final exam
            preparation, case laws and internship resources.
          </p>
        </div>
      </div>

      <div className="resource-category-grid">
        {categories.map((category) => {
          const Icon =
            category.icon === "ClipboardList"
              ? ClipboardList
              : category.icon === "BookOpen"
                ? BookOpen
                : category.icon === "Scale"
                  ? Scale
                  : category.icon === "BriefcaseBusiness"
                    ? BriefcaseBusiness
                    : FileText;

          return (
            <button
              type="button"
              className="resource-category-card"
              key={category.title}
              onClick={() => setFilter(category.title)}
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
              Try changing your search or filters. Resources
              will appear here when available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
