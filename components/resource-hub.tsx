
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
  requiresAcknowledgement?: boolean;
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
  const [pendingResource, setPendingResource] = useState<ResourceItem | null>(null);
  const [acknowledged, setAcknowledged] = useState(false);

  useEffect(() => {
    async function loadUploadedResources() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("legal_resources")
        .select(
          "title, description, semester, subject, category, file_url, requires_acknowledgement"
        )
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
          downloadUrl: item.file_url,
          requiresAcknowledgement: item.requires_acknowledgement ?? false
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

  function openAcknowledgement(resource: ResourceItem) {
    setPendingResource(resource);
    setAcknowledged(false);
  }

  function continueToResource() {
    if (!pendingResource?.downloadUrl || !acknowledged) return;

    window.open(
      pendingResource.downloadUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setPendingResource(null);
    setAcknowledged(false);
  }

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
                  item.requiresAcknowledgement ? (
                    <button
                      type="button"
                      onClick={() => openAcknowledgement(item)}
                      className="flex items-center gap-2 rounded-xl border border-[#E8D5A5] bg-[#FFF8E8] px-4 py-3 font-semibold text-[#172554] shadow-sm transition hover:border-[#C49A45] hover:bg-[#FCEFCB]"
                      aria-label={`Read note before downloading ${item.title}`}
                    >
                      <ArrowDownToLine size={18} className="text-[#A77D2D]" />
                      <span>Download PDF</span>
                    </button>
                  ) : (
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
                  )
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

      {pendingResource && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setPendingResource(null);
              setAcknowledged(false);
            }
          }}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-note-title"
          >
            <h2
              id="download-note-title"
              className="mb-4 text-2xl font-bold text-[#172554]"
            >
              A Note Before You Download
            </h2>

            <div className="space-y-4 text-sm leading-7 text-gray-700">
              <p>
                I am sharing these notes, case laws, Q&As, and sample formats
                to help you learn, prepare, and move forward in your LL.B
                journey.
              </p>

              <p>
                Please don&apos;t copy anything word for word. Use these
                materials as a reference, understand the concepts, and express
                your answers in your own words.
              </p>

              <p>
                I understand how difficult it can be to find proper guidance
                when no one is there to help. That&apos;s why I created this
                platform—to support you and remind you that you are not alone
                in this journey.
              </p>

              <p className="font-semibold text-[#172554]">
                Take these resources as a starting point. Learn, practise,
                write in your own words, and keep moving forward. I&apos;m
                rooting for you!
              </p>

              <p className="text-right font-semibold text-[#172554]">
                — Vignan Reddy
              </p>
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 p-4 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={acknowledged}
                onChange={(event) => setAcknowledged(event.target.checked)}
                className="mt-1 h-4 w-4 accent-[#172554]"
              />
              <span>
                I have read and understood this note. I will use these
                materials as a reference and write answers in my own words.
              </span>
            </label>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setPendingResource(null);
                  setAcknowledged(false);
                }}
                className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={continueToResource}
                disabled={!acknowledged}
                className="rounded-xl bg-[#172554] px-5 py-3 font-semibold text-white transition hover:bg-[#263b70] disabled:cursor-not-allowed disabled:opacity-40"
              >
                I Understand — Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
