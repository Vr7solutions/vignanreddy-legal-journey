
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
import { createClient } from "@/lib/supabase/client";

const iconMap = {
  FileText,
  ClipboardList,
  BookOpen,
  Scale,
  BriefcaseBusiness
};

interface ResourceItem {
  title: string;
  subject: string;
  type: string;
  semester: string;
  description: string;
  downloadUrl?: string;
}

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
  const [showAll, setShowAll] = useState(false);
  const [uploadedResources, setUploadedResources] = useState<ResourceItem[]>([]);

  useEffect(() => {
    async function loadUploadedResources() {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("legal_resources")
        .select("title, description, semester, subject, category, file_url")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Unable to load uploaded resources:", error.message);
        return;
      }

      setUploadedResources(
        (data ?? []).map((item) => ({
          title: item.title,
          subject: item.subject,
          type: item.category,
          semester: item.semester,
          description: item.description || "",
          downloadUrl: item.file_url
        }))
      );
    }

    loadUploadedResources();
  }, []);

  useEffect(() => {
    setSubject("All subjects");
    setShowAll(false);
  }, [selectedSemester]);

  useEffect(() => {
    setShowAll(false);
  }, [query, filter, subject]);

  const allResources = useMemo(
    () => [...resources, ...uploadedResources],
    [uploadedResources]
  );

  const filtered = useMemo(
    () =>
      allResources.filter((item) => {
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
    [allResources, query, filter, selectedSemester, subject]
  );

  const shouldLimit =
    selectedSemester === "Semester 1" &&
    query.trim() === "" &&
    filter === "All resources" &&
    subject === "All subjects";

  const visibleResources =
    shouldLimit && !showAll ? filtered.slice(0, 6) : filtered;

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
                {categories.map((item) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="resource-list">
            {visibleResources.map((item, index) => (
              <article
                className="resource-row"
                key={`${item.title}-${item.downloadUrl || index}`}
              >
                <div className="resource-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="resource-main">
                  <div className="resource-meta">
                    <span>{item.type}</span>
                    <span>{item.semester}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <small>{item.subject}</small>
                </div>

                {item.downloadUrl ? (
                  <a
                    className="flex items-center gap-2 rounded-xl border border-[#E8D5A5] bg-[#FFF8E8] px-4 py-3 font-semibold text-[#172554] shadow-sm transition hover:border-[#C49A45] hover:bg-[#FCEFCB]"
                    href={item.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Download ${item.title}`}
                    title="Download PDF"
                  >
                    <ArrowDownToLine size={18} className="text-[#A77D2D]" />
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

          {shouldLimit && filtered.length > 6 && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((previous) => !previous)}
                className="rounded-xl border border-[#C49A45] bg-[#FFF8E8] px-6 py-3 font-semibold text-[#172554] shadow-sm transition hover:bg-[#FCEFCB]"
              >
                {showAll
                  ? "Show Less"
                  : `Show More (${filtered.length - 6} more)`}
              </button>
            </div>
          )}

          <p className="demo-note">
            More verified study materials will be added semester by semester.
          </p>
        </div>
      </section>
    </>
  );
}
