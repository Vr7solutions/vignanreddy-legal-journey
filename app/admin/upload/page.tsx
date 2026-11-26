
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Upload, FolderUp, LogOut, FileText } from "lucide-react";

const subjects = [
  "Law of Contract – I",
  "Family Law – I (Hindu Law)",
  "Constitutional Law – I",
  "Law of Torts Including Motor Vehicle Accidents",
  "Environmental Law",
  "Legal and Constitutional History of India",
];

const categories = [
  "Assignments",
  "Internal 1",
  "Internal 2",
  "Study Notes",
  "Case Laws",
  "Internship Resources",
  "Legal Dictionary",
];

export default function AdminUploadPage() {
  const router = useRouter();
  const supabase = createClient();

  const [files, setFiles] = useState<File[]>([]);
  const [semester, setSemester] = useState("Semester 1");
  const [subject, setSubject] = useState(subjects[0]);
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function selectFiles(selectedFiles: FileList | null) {
    if (!selectedFiles) return;
    setFiles(Array.from(selectedFiles));
    setMessage("");
    setError("");
  }

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setError("");

    if (files.length === 0) {
      setError("Please select PDF files or a folder.");
      return;
    }

    const invalidFiles = files.filter(
      (file) =>
        file.type !== "application/pdf" &&
        !file.name.toLowerCase().endsWith(".pdf")
    );

    if (invalidFiles.length > 0) {
      setError("Only PDF files are allowed.");
      return;
    }

    const oversizedFiles = files.filter(
      (file) => file.size > 50 * 1024 * 1024
    );

    if (oversizedFiles.length > 0) {
      setError("Each PDF must be 50 MB or smaller.");
      return;
    }

    setLoading(true);

    let uploaded = 0;
    const failed: string[] = [];

    for (const file of files) {
      const relativePath =
        (file as File & { webkitRelativePath?: string }).webkitRelativePath ||
        file.name;

      const safePath = relativePath
        .split("/")
        .map((part) => part.replace(/[^a-zA-Z0-9._-]/g, "_"))
        .join("/");

      const filePath = `${crypto.randomUUID()}/${safePath}`;

      try {
        const { error: storageError } = await supabase.storage
          .from("legal-resources")
          .upload(filePath, file, {
            contentType: "application/pdf",
            upsert: false,
          });

        if (storageError) {
          failed.push(`${file.name}: ${storageError.message}`);
          continue;
        }

        const { data: publicData } = supabase.storage
          .from("legal-resources")
          .getPublicUrl(filePath);

        const { error: databaseError } = await supabase
          .from("legal_resources")
          .insert({
            title: file.name.replace(/\.pdf$/i, ""),
            description: description.trim() || null,
            semester,
            subject,
            category,
            file_name: file.name,
            file_path: filePath,
            file_url: publicData.publicUrl,
            file_size: file.size,
            is_published: true,
          });

        if (databaseError) {
          await supabase.storage
            .from("legal-resources")
            .remove([filePath]);

          failed.push(`${file.name}: ${databaseError.message}`);
          continue;
        }

        uploaded++;
      } catch {
        failed.push(`${file.name}: Unexpected upload error`);
      }
    }

    setLoading(false);

    if (uploaded > 0) {
      setMessage(`${uploaded} PDF file(s) uploaded successfully.`);
      setFiles([]);
    }

    if (failed.length > 0) {
      setError(`${failed.length} file(s) failed:\n${failed.join("\n")}`);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#F8F7F3] px-5 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#172554]">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Vignan Reddy Legal Journey
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>

        <form
          onSubmit={handleUpload}
          className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div>
            <h2 className="text-xl font-bold text-[#172554]">
              Upload Study Resources
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Upload multiple PDFs or select an entire folder.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Semester
              </label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-3"
              >
                {[
                  "Semester 1",
                  "Semester 2",
                  "Semester 3",
                  "Semester 4",
                  "Semester 5",
                  "Semester 6",
                ].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-3"
              >
                {subjects.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description (Optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Enter a short description for these resources"
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#C49A45] bg-[#FFF8E8] p-6 text-center hover:bg-[#FCEFCB]">
              <Upload className="mb-3 text-[#A77D2D]" size={30} />
              <span className="font-semibold text-[#172554]">
                Select PDF Files
              </span>
              <span className="mt-1 text-xs text-gray-600">
                Choose multiple PDFs
              </span>
              <input
                type="file"
                accept=".pdf,application/pdf"
                multiple
                className="hidden"
                onChange={(e) => selectFiles(e.target.files)}
              />
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#C49A45] bg-[#FFF8E8] p-6 text-center hover:bg-[#FCEFCB]">
              <FolderUp className="mb-3 text-[#A77D2D]" size={30} />
              <span className="font-semibold text-[#172554]">
                Select Entire Folder
              </span>
              <span className="mt-1 text-xs text-gray-600">
                Choose a folder containing PDFs
              </span>
              <input
                type="file"
                accept=".pdf,application/pdf"
                multiple
                {...({ webkitdirectory: "", directory: "" } as any)}
                className="hidden"
                onChange={(e) => selectFiles(e.target.files)}
              />
            </label>
          </div>

          {files.length > 0 && (
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="mb-3 font-semibold text-[#172554]">
                Selected files: {files.length}
              </p>
              <div className="max-h-48 space-y-2 overflow-y-auto">
                {files.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <FileText size={16} className="shrink-0 text-[#A77D2D]" />
                    <span className="break-all">{file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {message && (
            <p className="whitespace-pre-line rounded-lg bg-green-50 p-3 text-sm text-green-700">
              {message}
            </p>
          )}

          {error && (
            <p className="whitespace-pre-line rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#172554] px-5 py-3 font-semibold text-white transition hover:bg-[#243b78] disabled:opacity-60"
          >
            {loading ? "Uploading PDFs..." : "Upload Resources"}
          </button>
        </form>
      </div>
    </main>
  );
}
