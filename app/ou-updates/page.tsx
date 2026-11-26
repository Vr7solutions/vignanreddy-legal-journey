
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bell,
  CalendarDays,
  FileText,
  Image as ImageIcon,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type InstitutionUpdate = {
  id: string;
  institution: string;
  category: string;
  title: string;
  description: string | null;
  update_date: string | null;
  file_name: string;
  file_url: string;
  file_type: string;
  created_at: string;
};

const institutions = ["Osmania University", "ISL College"];

export default function OUUpdatesPage() {
  const supabase = createClient();

  const [updates, setUpdates] = useState<InstitutionUpdate[]>([]);
  const [institution, setInstitution] = useState("Osmania University");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadUpdates() {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("institution_updates")
      .select(
        "id, institution, category, title, description, update_date, file_name, file_url, file_type, created_at"
      )
      .eq("is_published", true)
      .order("update_date", { ascending: false, nullsFirst: false })
      .order("created_at", { ascending: false });

    if (error) {
      setError("Unable to load updates. Please try again.");
      setUpdates([]);
    } else {
      setUpdates((data || []) as InstitutionUpdate[]);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadUpdates();
  }, []);

  const institutionUpdates = updates.filter(
    (item) => item.institution === institution
  );

  const categories = [
    "All",
    ...Array.from(
      new Set(institutionUpdates.map((item) => item.category))
    ),
  ];

  const filteredUpdates =
    category === "All"
      ? institutionUpdates
      : institutionUpdates.filter((item) => item.category === category);

  function formatDate(date: string) {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  function isImage(fileType: string) {
    return fileType.startsWith("image/");
  }

  return (
    <main className="min-h-screen bg-[#F8F7F3] px-5 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm font-semibold text-[#A77D2D] hover:underline"
          >
            ← Back to Home
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div className="rounded-xl bg-[#172554] p-3 text-white">
              <Bell size={25} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#172554] sm:text-3xl">
                OU & College Updates
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Notifications, examinations, results and announcements.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          {institutions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setInstitution(item);
                setCategory("All");
              }}
              className={`rounded-xl border p-4 text-left font-semibold transition ${
                institution === item
                  ? "border-[#172554] bg-[#172554] text-white"
                  : "border-gray-200 bg-white text-[#172554] hover:border-[#C49A45]"
              }`}
            >
              <span className="block text-base">{item}</span>
              <span
                className={`mt-1 block text-xs ${
                  institution === item ? "text-gray-200" : "text-gray-500"
                }`}
              >
                {item === "Osmania University"
                  ? "University notifications and academic updates"
                  : "College notices and student announcements"}
              </span>
            </button>
          ))}
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#172554]">
              {institution}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {institutionUpdates.length} update(s) published
            </p>
          </div>

          <button
            type="button"
            onClick={loadUpdates}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            <RefreshCw size={15} />
            Refresh
          </button>
        </div>

        {categories.length > 1 && (
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Filter by category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 sm:max-w-sm"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="rounded-xl border border-gray-200 bg-white p-10 text-center text-gray-500">
            Loading updates...
          </div>
        ) : !error && filteredUpdates.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white px-5 py-12 text-center">
            <Bell className="mx-auto mb-3 text-[#A77D2D]" size={35} />
            <h3 className="font-semibold text-[#172554]">
              No updates available
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Updates will appear here when they are published.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredUpdates.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#FFF3D6] px-3 py-1 text-xs font-semibold text-[#8A641F]">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.institution}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-[#172554]">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                )}

                {item.update_date && (
                  <p className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                    <CalendarDays size={15} />
                    Notice date: {formatDate(item.update_date)}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
                  <div className="flex min-w-0 items-center gap-2 text-sm text-gray-600">
                    {isImage(item.file_type) ? (
                      <ImageIcon size={17} className="shrink-0" />
                    ) : (
                      <FileText size={17} className="shrink-0" />
                    )}
                    <span className="break-all">{item.file_name}</span>
                  </div>

                  <a
                    href={item.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#172554] px-4 py-2 text-sm font-semibold text-white hover:bg-[#243b78]"
                  >
                    View {isImage(item.file_type) ? "Image" : "PDF"}
                    <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          This is an independent student-led educational website. It is not
          affiliated with or officially maintained by Osmania University or
          ISL College. Always verify important notices with the respective
          institution.
        </p>
      </div>
    </main>
  );
}
