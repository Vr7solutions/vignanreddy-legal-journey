
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
  SlidersHorizontal,
} from "lucide-react";

import { categories, resources } from "@/lib/content";
import { createClient } from "@/lib/supabase/client";

const iconMap: Record<string, React.ElementType> = {
  "Faculty Given Notes": FileText,
  "Internal 1": ClipboardList,
  "Internal 2": ClipboardList,
  "Study Notes": BookOpen,
  "Case Laws": Scale,
  "Internship Resources": BriefcaseBusiness,
  "Legal Dictionary": BookOpen,
};

interface ResourceItem {
  id?: string;
  title: string;
  subject: string;
  type: string;
  semester: string;
  description: string;
  downloadUrl?: string;
  requiresAcknowledgement?: boolean;
  downloadCount?: number;
  contributors?: string[];
}

interface ResourceHubProps {
  selectedSemester: string;
  selectedSubjects: string[];
}

export default function ResourceHub({
  selectedSemester,
  selectedSubjects,
}: ResourceHubProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All resources");
  const [subject, setSubject] = useState("All subjects");
  const [showAll, setShowAll] = useState(false);
  const [uploadedResources, setUploadedResources] = useState<ResourceItem[]>([]);
  const [pendingResource, setPendingResource] = useState<ResourceItem | null>(null);
  const [acknowledged, setAcknowledged] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadUploadedResources() {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("legal_resources")
        .select(
          "id, title, description, semester, subject, category, file_url, requires_acknowledgement, download_count"
        )
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Unable to load uploaded resources:", error.message);
        return;
      }

      if (!isMounted) return;

      const resourceData = data ?? [];

      if (resourceData.length === 0) {
        setUploadedResources([]);
        return;
      }

      // Load faculty credits linked to published resources.
      const { data: contributorData, error: contributorError } =
        await supabase
          .from("resource_faculty_contributors")
          .select("resource_id, faculty_id");

      if (contributorError) {
        console.error(
          "Unable to load faculty contributors:",
          contributorError.message
        );
      }

      const contributorRows = contributorData ?? [];
      const facultyIds = Array.from(
        new Set(contributorRows.map((item) => item.faculty_id))
      );

      let facultyNames = new Map<string, string>();

      if (facultyIds.length > 0) {
        const { data: facultyData, error: facultyError } = await supabase
          .from("faculty_members")
          .select("id, name, designation")
          .in("id", facultyIds);

        if (facultyError) {
          console.error(
            "Unable to load faculty names:",
            facultyError.message
          );
        } else {
          facultyNames = new Map(
            (facultyData ?? []).map((member) => [
              member.id,
              member.designation
                ? `${member.name}, ${member.designation}`
                : member.name,
            ])
          );
        }
      }

      if (!isMounted) return;

      const contributorsByResource = new Map<string, string[]>();

      contributorRows.forEach((item) => {
        const name = facultyNames.get(item.faculty_id);

        if (!name) return;

        const current =
          contributorsByResource.get(item.resource_id) || [];

        current.push(name);
        contributorsByResource.set(item.resource_id, current);
      });

      setUploadedResources(
        resourceData.map((item) => ({
          id: item.id,
          title: item.title ?? "Untitled resource",
          subject: item.subject ?? "",
          type: item.category ?? "Study Material",
          semester: item.semester ?? "All Semesters",
          description: item.description ?? "",
          downloadUrl: item.file_url ?? undefined,
          requiresAcknowledgement: item.requires_acknowledgement ?? false,
          downloadCount: item.download_count ?? 0,
          contributors: contributorsByResource.get(item.id) ?? [],
        }))
      );
    }

    loadUploadedResources();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    setSubject("All subjects");
    setShowAll(false);
  }, [selectedSemester]);

  useEffect(() => {
    setShowAll(false);
  }, [query, filter, subject]);

  useEffect(() => {
    if (!pendingResource) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeAcknowledgement();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pendingResource]);

  const allResources = useMemo<ResourceItem[]>(
    () => [...(resources as ResourceItem[]), ...uploadedResources],
    [uploadedResources]
  );

  const subjectOptions = useMemo(
    () => Array.from(new Set([...selectedSubjects, "Other"])),
    [selectedSubjects]
  );

  const resourceCategories = useMemo(
    () => categories.filter((item) => item !== "Legal Dictionary"),
    []
  );

  const filtered = useMemo(
    () =>
      allResources.filter((item) => {
        const matchesSearch = `${item.title} ${item.subject} ${item.type} ${item.description} ${(item.contributors || []).join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());

        const matchesType = filter === "All resources" || item.type === filter;

        const matchesSemester =
          item.semester === selectedSemester || item.semester === "All Semesters";

        const matchesSubject = subject === "All subjects" || item.subject === subject;

        return matchesSearch && matchesType && matchesSemester && matchesSubject;
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

  async function incrementDownloadCount(resourceId: string) {
    const supabase = createClient();

    const { error } = await supabase.rpc("increment_resource_download", {
      resource_id: resourceId,
    });

    if (error) {
      console.error("Unable to record resource download:", error.message);
    }
  }

  function downloadResource(resource: ResourceItem) {
    if (!resource.downloadUrl) return;

    window.open(resource.downloadUrl, "_blank", "noopener,noreferrer");

    if (resource.id) {
      void incrementDownloadCount(resource.id);
    }
  }

  function openAcknowledgement(resource: ResourceItem) {
    setPendingResource(resource);
    setAcknowledged(false);
  }

  function closeAcknowledgement() {
    setPendingResource(null);
    setAcknowledged(false);
  }

  function continueToResource() {
    if (!pendingResource?.downloadUrl || !acknowledged) return;

    downloadResource(pendingResource);
    closeAcknowledgement();
  }

  return (
    <>
      <section id="explore" className="section-wrap scroll-mt-24">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE STUDENT RESOURCE CENTRE</p>
            <h2>
              Everything you need, <em>in one place.</em>
            </h2>
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
            const Icon = iconMap[item] || FileText;
            const isLegalDictionary = item === "Legal Dictionary";

            return (
              <a
                className="category-card"
                href={isLegalDictionary ? "/legal-dictionary" : "#resources"}
                key={item}
                onClick={isLegalDictionary ? undefined : () => setFilter(item)}
              >
                <span className="category-icon">
                  <Icon size={21} />
                </span>

                <span className="category-title">{item}</span>

                <span className="category-detail">
                  {isLegalDictionary
                    ? "Explore legal terms and meanings"
                    : `Explore ${item.toLowerCase()} resources`}
                </span>

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
              <h2>
                Find materials by <em>semester.</em>
              </h2>
              <p className="section-copy">
                Browse materials for {selectedSemester}. Choose a subject or
                resource type to narrow your search.
              </p>
            </div>
          </div>

          <div className="resource-tools">
            <label className="search-box">
              <Search size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search subjects, topics or resources..."
                aria-label="Search resources"
              />
            </label>

            <label className="filter-box">
              <BookOpen size={17} />
              <select
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                aria-label="Filter by subject"
              >
                <option>All subjects</option>

                {subjectOptions.map((item) => (
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
                onChange={(event) => setFilter(event.target.value)}
                aria-label="Filter by resource type"
              >
                <option>All resources</option>

                {resourceCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="resource-list">
            {visibleResources.map((item, index) => (
              <article
                className="resource-row"
                key={`${item.id || item.title}-${item.downloadUrl || index}`}
              >
                <div className="resource-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="resource-main">
                  <div className="resource-meta flex flex-wrap items-center gap-2">
                    <span>{item.type}</span>
                    <span>·</span>
                    <span>{item.semester}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <small>{item.subject}</small>

                  {item.contributors && item.contributors.length > 0 && (
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      <span className="font-semibold text-[#172554]">
                        Contributed by:
                      </span>{" "}
                      {item.contributors.join(" · ")}
                    </p>
                  )}
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
                    <button
                      type="button"
                      onClick={() => downloadResource(item)}
                      className="flex items-center gap-2 rounded-xl border border-[#E8D5A5] bg-[#FFF8E8] px-4 py-3 font-semibold text-[#172554] shadow-sm transition hover:border-[#C49A45] hover:bg-[#FCEFCB]"
                      aria-label={`Download ${item.title}`}
                      title="Download PDF"
                    >
                      <ArrowDownToLine size={18} className="text-[#A77D2D]" />
                      <span>Download PDF</span>
                    </button>
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
              closeAcknowledgement();
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
                <strong>Disclaimer:</strong> I am sharing these resources —
                notes, case laws and sample formats — strictly as a reference
                to help you move forward. Please do not copy word for word.
              </p>

              <p>
                I know how tough it gets looking for guidance when no one else
                lends a helping hand, so I am right here in your corner. Use
                these materials to understand the concepts and build your own
                work.
              </p>

              <p className="font-semibold text-[#172554]">
                Use this as a starting point, put it in your own words, and
                keep going.
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
                onClick={closeAcknowledgement}
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
