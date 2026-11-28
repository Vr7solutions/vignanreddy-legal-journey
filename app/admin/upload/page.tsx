"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Upload,
  FolderUp,
  LogOut,
  FileText,
  Trash2,
  RefreshCw,
} from "lucide-react";

const semesterSubjects: Record<string, string[]> = {
  "Semester 1": [
    "Law of Contract – I",
    "Family Law – I (Hindu Law)",
    "Constitutional Law – I",
    "Law of Torts Including Motor Vehicle Accidents",
    "Environmental Law",
    "Legal and Constitutional History of India",
  ],
  "Semester 2": [
    "Law of Contract – II",
    "Family Law – II (Muslim Law and Other Personal Laws)",
    "Constitutional Law – II",
    "Law of Crimes",
    "Law of Evidence",
  ],
  "Semester 3": [
    "Jurisprudence",
    "Law of Property",
    "Administrative Law",
    "Company Law",
    "Labour Law – I",
  ],
  "Semester 4": [
    "Labour Law – II",
    "Public International Law",
    "Interpretation of Statutes",
    "Land Laws",
    "Intellectual Property Law",
  ],
  "Semester 5": [
    "Civil Procedure Code and Law of Limitation",
    "Criminal Procedure Code, Law of Juvenile Justice and Probation of Offenders",
    "Law of Banking and Negotiable Instruments",
    "Alternative Dispute Resolution",
    "Professional Ethics and Professional Accounting System",
  ],
  "Semester 6": [
    "Law of Taxation",
    "Information Technology Law",
    "Law Relating to Women",
    "Human Rights Law",
    "Law of Investments and Securities",
    "Drafting, Pleadings and Conveyancing",
    "Moot Courts, Observation of Trial, Pre-Trial Preparations and Internship",
  ],
};

const allowedTypes: Record<string, string> = {
  pdf: "application/pdf",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
};

const acceptedFiles =
  ".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp";

type Resource = {
  id: string;
  title: string;
  file_name: string;
  file_path: string;
  semester: string;
  subject: string;
  category: string;
  created_at: string;
  requires_acknowledgement: boolean;
  download_count: number;
};

type InstitutionUpdate = {
  id: string;
  institution: string;
  category: string;
  title: string;
  description: string | null;
  update_date: string | null;
  file_name: string;
  file_path: string;
  file_url: string;
  file_type: string;
  created_at: string;
};

const institutionCategories: Record<string, string[]> = {
  "Osmania University": [
    "Notifications",
    "Syllabus",
    "Exam Timetables",
    "Results",
    "Academic Calendar",
    "Circulars",
    "Announcements",
  ],
  "ISL College": [
    "College Notices",
    "Circulars",
    "Internal Exams",
    "Attendance & Academic Updates",
    "Assignments & Deadlines",
    "Events",
  ],
};

export default function AdminUploadPage() {
  const router = useRouter();
  const supabase = createClient();

  // Study resources
  const [files, setFiles] = useState<File[]>([]);
  const [semester, setSemester] = useState("Semester 1");
  const [subject, setSubject] = useState(
    semesterSubjects["Semester 1"][0]
  );
  const [category, setCategory] = useState("Faculty Given Notes");
  const [description, setDescription] = useState("");
  const [requiresAcknowledgement, setRequiresAcknowledgement] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [resources, setResources] = useState<Resource[]>([]);
  const [fetchingResources, setFetchingResources] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [updatingAcknowledgementId, setUpdatingAcknowledgementId] =
    useState<string | null>(null);
  const [resourceError, setResourceError] = useState("");

  // Institution updates
  const [institution, setInstitution] = useState("Osmania University");
  const [updateCategory, setUpdateCategory] = useState("Notifications");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [updateFile, setUpdateFile] = useState<File | null>(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");
  const [updateError, setUpdateError] = useState("");

  const [updates, setUpdates] = useState<InstitutionUpdate[]>([]);
  const [fetchingUpdates, setFetchingUpdates] = useState(true);
  const [deletingUpdateId, setDeletingUpdateId] = useState<string | null>(
    null
  );
  const [updatesError, setUpdatesError] = useState("");

  const subjects = [
    ...(semesterSubjects[semester] || []),
    "Other",
  ];

  const categories = [
    "Faculty Given Notes",
    "Internal 1",
    "Internal 2",
    "Study Notes",
    "Case Laws",
    "Internship Resources",
  ];

  const updateCategories = institutionCategories[institution] || [];

  useEffect(() => {
    setSubject(semesterSubjects[semester]?.[0] || "Other");
  }, [semester]);

  useEffect(() => {
    setUpdateCategory(
      institutionCategories[institution]?.[0] || "Notifications"
    );
  }, [institution]);

  async function loadResources() {
    setFetchingResources(true);
    setResourceError("");

    const { data, error } = await supabase
      .from("legal_resources")
      .select(
        "id, title, file_name, file_path, semester, subject, category, created_at, requires_acknowledgement, download_count"
      )
      .order("created_at", { ascending: false });

    if (error) {
      setResourceError(error.message);
      setResources([]);
    } else {
      setResources((data || []) as Resource[]);
    }

    setFetchingResources(false);
  }

  async function loadUpdates() {
    setFetchingUpdates(true);
    setUpdatesError("");

    const { data, error } = await supabase
      .from("institution_updates")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setUpdatesError(error.message);
      setUpdates([]);
    } else {
      setUpdates((data || []) as InstitutionUpdate[]);
    }

    setFetchingUpdates(false);
  }

  useEffect(() => {
    loadResources();
    loadUpdates();
  }, []);

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
      setError("Please select PDF files or images.");
      return;
    }

    const invalidFiles = files.filter((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase();
      const expectedType = extension ? allowedTypes[extension] : undefined;

      return (
        !expectedType ||
        (file.type !== "" && file.type !== expectedType)
      );
    });

    if (invalidFiles.length > 0) {
      setError(
        "Only PDF, JPG, JPEG, PNG and WEBP files are allowed."
      );
      return;
    }

    const oversizedFiles = files.filter(
      (file) => file.size > 50 * 1024 * 1024
    );

    if (oversizedFiles.length > 0) {
      setError("Each file must be 50 MB or smaller.");
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

      const extension = file.name.split(".").pop()?.toLowerCase();
      const contentType = extension
        ? allowedTypes[extension]
        : undefined;

      if (!contentType) {
        failed.push(`${file.name}: Unsupported file type`);
        continue;
      }

      try {
        const { error: storageError } = await supabase.storage
          .from("legal-resources")
          .upload(filePath, file, {
            contentType,
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
            title: file.name.replace(/\.[^.]+$/, ""),
            description: description.trim() || null,
            semester,
            subject,
            category,
            file_name: file.name,
            file_path: filePath,
            file_url: publicData.publicUrl,
            file_size: file.size,
            is_published: true,
            requires_acknowledgement: requiresAcknowledgement,
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
      setMessage(`${uploaded} file(s) uploaded successfully.`);
      setFiles([]);
      setDescription("");
      setRequiresAcknowledgement(false);
      await loadResources();
    }

    if (failed.length > 0) {
      setError(`${failed.length} file(s) failed:\n${failed.join("\n")}`);
    }
  }

  async function handleUpdateUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUpdateMessage("");
    setUpdateError("");

    if (!updateTitle.trim()) {
      setUpdateError("Please enter an update title.");
      return;
    }

    if (!updateFile) {
      setUpdateError("Please select a PDF or image file.");
      return;
    }

    const extension = updateFile.name.split(".").pop()?.toLowerCase();
    const contentType = extension ? allowedTypes[extension] : undefined;

    if (!contentType) {
      setUpdateError(
        "Only PDF, JPG, JPEG, PNG and WEBP files are allowed."
      );
      return;
    }

    if (updateFile.type && updateFile.type !== contentType) {
      setUpdateError(
        "The selected file type does not match its extension."
      );
      return;
    }

    if (updateFile.size > 50 * 1024 * 1024) {
      setUpdateError("The file must be 50 MB or smaller.");
      return;
    }

    setUpdateLoading(true);

    const safeName = updateFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = `institution-updates/${crypto.randomUUID()}/${safeName}`;

    try {
      const { error: storageError } = await supabase.storage
        .from("legal-resources")
        .upload(filePath, updateFile, {
          contentType,
          upsert: false,
        });

      if (storageError) {
        setUpdateError(storageError.message);
        setUpdateLoading(false);
        return;
      }

      const { data: publicData } = supabase.storage
        .from("legal-resources")
        .getPublicUrl(filePath);

      const { error: databaseError } = await supabase
        .from("institution_updates")
        .insert({
          institution,
          category: updateCategory,
          title: updateTitle.trim(),
          description: updateDescription.trim() || null,
          update_date: updateDate || null,
          file_name: updateFile.name,
          file_path: filePath,
          file_url: publicData.publicUrl,
          file_type: contentType,
          is_published: true,
        });

      if (databaseError) {
        await supabase.storage
          .from("legal-resources")
          .remove([filePath]);

        setUpdateError(databaseError.message);
        setUpdateLoading(false);
        return;
      }

      setUpdateMessage("Update published successfully.");
      setUpdateTitle("");
      setUpdateDescription("");
      setUpdateDate("");
      setUpdateFile(null);

      await loadUpdates();
    } catch {
      setUpdateError("An unexpected error occurred while uploading.");
    }

    setUpdateLoading(false);
  }

  async function handleAcknowledgementChange(
    resource: Resource,
    checked: boolean
  ) {
    setUpdatingAcknowledgementId(resource.id);
    setResourceError("");
    setMessage("");

    const { error } = await supabase
      .from("legal_resources")
      .update({ requires_acknowledgement: checked })
      .eq("id", resource.id);

    if (error) {
      setResourceError(
        `Could not update acknowledgement setting: ${error.message}`
      );
    } else {
      setResources((current) =>
        current.map((item) =>
          item.id === resource.id
            ? { ...item, requires_acknowledgement: checked }
            : item
        )
      );

      setMessage(
        checked
          ? `Acknowledgement required for ${resource.file_name}.`
          : `Acknowledgement disabled for ${resource.file_name}.`
      );
    }

    setUpdatingAcknowledgementId(null);
  }

  async function handleDelete(resource: Resource) {
    const confirmed = window.confirm(
      `Are you sure you want to permanently delete "${resource.file_name}"?`
    );

    if (!confirmed) return;

    setDeletingId(resource.id);
    setResourceError("");
    setMessage("");

    const { error: databaseError } = await supabase
      .from("legal_resources")
      .delete()
      .eq("id", resource.id);

    if (databaseError) {
      setResourceError(
        `Could not delete ${resource.file_name}: ${databaseError.message}`
      );
      setDeletingId(null);
      return;
    }

    setResources((current) =>
      current.filter((item) => item.id !== resource.id)
    );

    const { error: storageError } = await supabase.storage
      .from("legal-resources")
      .remove([resource.file_path]);

    if (storageError) {
      setResourceError(
        `${resource.file_name} was removed from the website, but its storage file could not be deleted: ${storageError.message}`
      );
    } else {
      setMessage(`${resource.file_name} deleted successfully.`);
    }

    setDeletingId(null);
  }

  async function handleDeleteUpdate(update: InstitutionUpdate) {
    const confirmed = window.confirm(
      `Are you sure you want to permanently delete "${update.title}"?`
    );

    if (!confirmed) return;

    setDeletingUpdateId(update.id);
    setUpdatesError("");
    setUpdateMessage("");

    const { error: databaseError } = await supabase
      .from("institution_updates")
      .delete()
      .eq("id", update.id);

    if (databaseError) {
      setUpdatesError(databaseError.message);
      setDeletingUpdateId(null);
      return;
    }

    setUpdates((current) =>
      current.filter((item) => item.id !== update.id)
    );

    const { error: storageError } = await supabase.storage
      .from("legal-resources")
      .remove([update.file_path]);

    if (storageError) {
      setUpdatesError(
        `Update deleted, but its storage file could not be removed: ${storageError.message}`
      );
    } else {
      setUpdateMessage("Update deleted successfully.");
    }

    setDeletingUpdateId(null);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  // Download statistics
  const totalDownloads = resources.reduce(
    (total, resource) => total + (resource.download_count || 0),
    0
  );

  const mostDownloaded = [...resources].sort(
    (a, b) => (b.download_count || 0) - (a.download_count || 0)
  );

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

        {/* Study Resources */}
        <form
          onSubmit={handleUpload}
          className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div>
            <h2 className="text-xl font-bold text-[#172554]">
              Upload Study Resources
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Upload multiple PDFs and images or select an entire folder.
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
                {Object.keys(semesterSubjects).map((item) => (
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

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E8D9B5] bg-[#FFFBF1] p-4">
            <input
              type="checkbox"
              checked={requiresAcknowledgement}
              onChange={(e) =>
                setRequiresAcknowledgement(e.target.checked)
              }
              className="mt-1 h-4 w-4 accent-[#172554]"
            />
            <span>
              <span className="block text-sm font-semibold text-[#172554]">
                Require student acknowledgement before download
              </span>
              <span className="mt-1 block text-xs text-gray-600">
                Applies to every file in this upload. Students must read the
                note and tick the acknowledgement box before opening these
                resources.
              </span>
            </span>
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#C49A45] bg-[#FFF8E8] p-6 text-center hover:bg-[#FCEFCB]">
              <Upload className="mb-3 text-[#A77D2D]" size={30} />
              <span className="font-semibold text-[#172554]">
                Select Files
              </span>
              <span className="mt-1 text-xs text-gray-600">
                Choose multiple PDFs and images
              </span>
              <input
                type="file"
                accept={acceptedFiles}
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
                Choose a folder containing PDFs and images
              </span>
              <input
                type="file"
                accept={acceptedFiles}
                multiple
                {...({ webkitdirectory: "", directory: "" } as any)}
                className="hidden"
                onChange={(e) => selectFiles(e.target.files)}
              />
            </label>
          </div>

          <p className="text-xs text-gray-500">
            Accepted: PDF, JPG, JPEG, PNG and WEBP. Maximum size: 50 MB per
            file.
          </p>

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
                    <FileText
                      size={16}
                      className="shrink-0 text-[#A77D2D]"
                    />
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
            {loading ? "Uploading Files..." : "Upload Resources"}
          </button>
        </form>

        {/* OU and ISL Updates Upload */}
        <form
          onSubmit={handleUpdateUpload}
          className="mt-8 space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div>
            <h2 className="text-xl font-bold text-[#172554]">
              Upload OU & ISL Updates
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Publish university and affiliated college notices, PDFs and
              images.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Institution
            </label>
            <select
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
            >
              <option>Osmania University</option>
              <option>ISL College</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Update Category
            </label>
            <select
              value={updateCategory}
              onChange={(e) => setUpdateCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
            >
              {updateCategories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Update Title
            </label>
            <input
              type="text"
              required
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
              placeholder="Enter the notice or announcement title"
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description (Optional)
            </label>
            <textarea
              value={updateDescription}
              onChange={(e) => setUpdateDescription(e.target.value)}
              rows={3}
              placeholder="Add details about this update"
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Notice Date (Optional)
            </label>
            <input
              type="date"
              value={updateDate}
              onChange={(e) => setUpdateDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Upload PDF or Image
            </label>
            <input
              type="file"
              required
              accept={acceptedFiles}
              onChange={(e) => {
                setUpdateFile(e.target.files?.[0] || null);
                setUpdateError("");
                setUpdateMessage("");
              }}
              className="w-full rounded-lg border border-gray-300 p-3 text-sm"
            />
            <p className="mt-2 text-xs text-gray-500">
              Accepted: PDF, JPG, JPEG, PNG and WEBP. Maximum size: 50 MB.
            </p>
            {updateFile && (
              <p className="mt-2 break-all text-sm font-medium text-[#172554]">
                Selected: {updateFile.name}
              </p>
            )}
          </div>

          {updateMessage && (
            <p className="whitespace-pre-line rounded-lg bg-green-50 p-3 text-sm text-green-700">
              {updateMessage}
            </p>
          )}

          {updateError && (
            <p className="whitespace-pre-line rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {updateError}
            </p>
          )}

          <button
            type="submit"
            disabled={updateLoading}
            className="w-full rounded-xl bg-[#172554] px-5 py-3 font-semibold text-white transition hover:bg-[#243b78] disabled:opacity-60"
          >
            {updateLoading ? "Publishing Update..." : "Publish Update"}
          </button>
        </form>

        {/* Download Statistics */}
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#172554]">
            Download Statistics
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Track how many times students download your resources.
          </p>

          <div className="mt-5 rounded-xl bg-[#FFF8E8] p-5">
            <p className="text-sm font-medium text-gray-600">
              Total Downloads
            </p>
            <p className="mt-2 text-3xl font-bold text-[#172554]">
              {totalDownloads.toLocaleString("en-IN")}
            </p>
          </div>

          <h3 className="mb-3 mt-6 font-bold text-[#172554]">
            Most Downloaded Resources
          </h3>

          {fetchingResources ? (
            <p className="text-sm text-gray-500">
              Loading download statistics...
            </p>
          ) : resources.length === 0 ? (
            <p className="text-sm text-gray-500">
              No resource download data available yet.
            </p>
          ) : (
            <div className="space-y-3">
              {mostDownloaded.map((resource) => (
                <div
                  key={resource.id}
                  className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 p-3"
                >
                  <span className="min-w-0 break-words text-sm font-medium text-gray-700">
                    {resource.title}
                  </span>
                  <span className="shrink-0 rounded-lg bg-gray-100 px-3 py-2 text-sm font-bold text-[#172554]">
                    {(resource.download_count || 0).toLocaleString("en-IN")}{" "}
                    downloads
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Uploaded Resources */}
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-[#172554]">
                Uploaded Resources
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Manage or permanently delete uploaded resources.
              </p>
            </div>

            <button
              type="button"
              onClick={loadResources}
              disabled={fetchingResources}
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-50"
            >
              <RefreshCw size={15} />
              Refresh
            </button>
          </div>

          {resourceError && (
            <p className="mb-4 whitespace-pre-line rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {resourceError}
            </p>
          )}

          {fetchingResources ? (
            <p className="py-6 text-center text-sm text-gray-500">
              Loading resources...
            </p>
          ) : resources.length === 0 ? (
            <p className="py-6 text-center text-sm text-gray-500">
              No uploaded resources found.
            </p>
          ) : (
            <div className="space-y-3">
              <p className="mb-3 text-sm font-semibold text-gray-600">
                Total files: {resources.length}
              </p>

              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="flex flex-col gap-3 rounded-xl border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <FileText
                      size={22}
                      className="mt-1 shrink-0 text-[#A77D2D]"
                    />
                    <div className="min-w-0">
                      <p className="break-words font-semibold text-[#172554]">
                        {resource.file_name || resource.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {resource.category} · {resource.semester}
                      </p>
                      <p className="text-xs text-gray-500">
                        {resource.subject}
                      </p>
                      <label className="mt-3 flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-700">
                        <input
                          type="checkbox"
                          checked={Boolean(
                            resource.requires_acknowledgement
                          )}
                          disabled={
                            updatingAcknowledgementId === resource.id
                          }
                          onChange={(e) =>
                            handleAcknowledgementChange(
                              resource,
                              e.target.checked
                            )
                          }
                          className="h-4 w-4 accent-[#172554]"
                        />
                        {updatingAcknowledgementId === resource.id
                          ? "Updating..."
                          : "Require acknowledgement before download"}
                      </label>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDelete(resource)}
                    disabled={deletingId !== null}
                    className="flex shrink-0 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Trash2 size={16} />
                    {deletingId === resource.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Published Institution Updates */}
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-[#172554]">
                Published OU & ISL Updates
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Manage or permanently delete published notices.
              </p>
            </div>

            <button
              type="button"
              onClick={loadUpdates}
              disabled={fetchingUpdates}
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-50"
            >
              <RefreshCw size={15} />
              Refresh
            </button>
          </div>

          {updatesError && (
            <p className="mb-4 whitespace-pre-line rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {updatesError}
            </p>
          )}

          {fetchingUpdates ? (
            <p className="py-6 text-center text-sm text-gray-500">
              Loading updates...
            </p>
          ) : updates.length === 0 ? (
            <p className="py-6 text-center text-sm text-gray-500">
              No published updates found.
            </p>
          ) : (
            <div className="space-y-3">
              <p className="mb-3 text-sm font-semibold text-gray-600">
                Total updates: {updates.length}
              </p>

              {updates.map((update) => (
                <div
                  key={update.id}
                  className="flex flex-col gap-3 rounded-xl border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <FileText
                      size={22}
                      className="mt-1 shrink-0 text-[#A77D2D]"
                    />
                    <div className="min-w-0">
                      <p className="break-words font-semibold text-[#172554]">
                        {update.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {update.institution} · {update.category}
                      </p>
                      <p className="break-all text-xs text-gray-500">
                        {update.file_name}
                      </p>
                      {update.update_date && (
                        <p className="text-xs text-gray-500">
                          Notice date: {update.update_date}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteUpdate(update)}
                    disabled={deletingUpdateId !== null}
                    className="flex shrink-0 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Trash2 size={16} />
                    {deletingUpdateId === update.id
                      ? "Deleting..."
                      : "Delete"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
