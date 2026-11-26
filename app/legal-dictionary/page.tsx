
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, BookOpen, ArrowLeft } from "lucide-react";

const terms = [
  {
    term: "Abetment",
    category: "Criminal Law",
    meaning: "Helping, encouraging or intentionally assisting another person to commit an offence.",
    example: "A person who intentionally helps another commit a crime may be liable for abetment.",
  },
  {
    term: "Affidavit",
    category: "Civil Law",
    meaning: "A written statement of facts confirmed by an oath or affirmation before an authorised person.",
    example: "A party may submit an affidavit to support an application before a court.",
  },
  {
    term: "Appeal",
    category: "Court Procedure",
    meaning: "A request made to a higher court or authority to examine a decision of a lower court or authority.",
    example: "A person may file an appeal against a judgment when the law permits it.",
  },
  {
    term: "Bail",
    category: "Criminal Law",
    meaning: "The conditional release of an accused person from custody, subject to legal requirements.",
    example: "A court may grant bail subject to conditions.",
  },
  {
    term: "Bona Fide",
    category: "Latin Maxims",
    meaning: "A Latin expression meaning in good faith or honestly.",
    example: "A person acting bona fide acts without fraud or dishonest intention.",
  },
  {
    term: "Caveat",
    category: "Civil Law",
    meaning: "A formal notice requesting that a court hear the person filing it before passing certain orders.",
    example: "A person expecting an application may lodge a caveat where the law permits.",
  },
  {
    term: "Cognizable Offence",
    category: "Criminal Law",
    meaning: "An offence in which police may arrest without a warrant and investigate without prior court permission, as provided by law.",
    example: "The police can take action in a cognizable offence according to criminal procedure law.",
  },
  {
    term: "Constitution",
    category: "Constitutional Law",
    meaning: "The fundamental legal framework that establishes government institutions, their powers and the rights of people.",
    example: "The Constitution of India is the supreme law of the country.",
  },
  {
    term: "Damages",
    category: "Civil Law",
    meaning: "Monetary compensation awarded by a court for a legally recognised loss or injury.",
    example: "A court may award damages for breach of contract.",
  },
  {
    term: "Defendant",
    category: "Court Procedure",
    meaning: "A person against whom a civil case is brought.",
    example: "In a civil suit, the person responding to the plaintiff's claim is generally the defendant.",
  },
  {
    term: "Evidence",
    category: "Court Procedure",
    meaning: "Material or information presented before a court to prove or disprove facts in a case.",
    example: "Documents and witness testimony may be used as evidence.",
  },
  {
    term: "Federalism",
    category: "Constitutional Law",
    meaning: "A system in which governmental powers are divided between central and regional governments.",
    example: "India has a federal system with a strong Union government.",
  },
  {
    term: "Fundamental Rights",
    category: "Constitutional Law",
    meaning: "Basic rights guaranteed by Part III of the Constitution of India, enforceable through constitutional remedies.",
    example: "Article 21 protects life and personal liberty.",
  },
  {
    term: "Habeas Corpus",
    category: "Latin Maxims",
    meaning: "A writ through which a court examines whether a person's detention is lawful.",
    example: "A person may seek this writ when someone is allegedly detained unlawfully.",
  },
  {
    term: "Injunction",
    category: "Civil Law",
    meaning: "A court order requiring a person to do something or refrain from doing something.",
    example: "A court may restrain a person from unlawfully interfering with property.",
  },
  {
    term: "Jurisdiction",
    category: "Court Procedure",
    meaning: "The legal authority of a court to hear and decide a particular matter.",
    example: "A court must have jurisdiction to hear a case.",
  },
  {
    term: "Mens Rea",
    category: "Latin Maxims",
    meaning: "A term referring to the mental element or guilty intention required for certain offences.",
    example: "For some offences, the prosecution must establish the required mental element.",
  },
  {
    term: "Natural Justice",
    category: "Legal Principles",
    meaning: "Principles of fair procedure, including the right to be heard and the rule against bias.",
    example: "A person should generally receive an opportunity to respond before an adverse decision.",
  },
  {
    term: "Plaintiff",
    category: "Court Procedure",
    meaning: "A person who brings a civil suit before a court.",
    example: "A person filing a civil recovery suit is the plaintiff.",
  },
  {
    term: "Precedent",
    category: "Legal Principles",
    meaning: "An earlier judicial decision that may guide or bind courts in later cases, depending on its authority.",
    example: "Supreme Court decisions are binding on all courts in India under Article 141.",
  },
  {
    term: "Res Judicata",
    category: "Latin Maxims",
    meaning: "A principle preventing the same matter between the same parties from being litigated again when legal requirements are satisfied.",
    example: "A matter finally decided by a competent court generally cannot be reopened between the same parties.",
  },
  {
    term: "Stare Decisis",
    category: "Latin Maxims",
    meaning: "The principle of following established judicial decisions when deciding similar cases.",
    example: "Courts follow binding precedents while deciding similar legal issues.",
  },
  {
    term: "Tort",
    category: "Civil Law",
    meaning: "A civil wrong, other than a mere breach of contract, for which the law provides a remedy, commonly damages.",
    example: "Negligently causing injury to another person may amount to a tort.",
  },
  {
    term: "Ultra Vires",
    category: "Latin Maxims",
    meaning: "An act performed beyond the legal powers or authority of a person or organisation.",
    example: "An authority acting outside its statutory powers may be acting ultra vires.",
  },
  {
    term: "Writ",
    category: "Constitutional Law",
    meaning: "A formal order issued by a court to protect rights or enforce legal duties.",
    example: "The Supreme Court and High Courts can issue constitutional writs under Articles 32 and 226.",
  },
];

const categories = [
  "All",
  "Constitutional Law",
  "Criminal Law",
  "Civil Law",
  "Court Procedure",
  "Legal Principles",
  "Latin Maxims",
];

export default function LegalDictionaryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [letter, setLetter] = useState("All");

  const filteredTerms = useMemo(() => {
    return terms.filter((item) => {
      const matchesSearch =
        `${item.term} ${item.meaning} ${item.example}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      const matchesLetter =
        letter === "All" || item.term.toUpperCase().startsWith(letter);

      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [search, category, letter]);

  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      <header className="border-b border-[#E8E5DC] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#172554] hover:text-[#A77D2D]"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </header>

      <section className="bg-[#172554] px-5 py-14 text-center text-white">
        <BookOpen className="mx-auto mb-4 text-[#D8B66D]" size={38} />
        <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#D8B66D]">
          YOUR LEGAL LEARNING COMPANION
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Legal Dictionary
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-200">
          Understand legal language with simple explanations, practical
          examples and important Latin maxims.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="mx-auto max-w-3xl">
          <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
            <Search className="shrink-0 text-[#A77D2D]" size={20} />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setLetter("All");
              }}
              placeholder="Search a legal term or meaning..."
              className="w-full bg-transparent text-sm outline-none"
              aria-label="Search legal dictionary"
            />
          </label>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-sm font-bold text-[#172554]">
            Browse alphabetically
          </p>
          <div className="flex flex-wrap gap-2">
            {["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setLetter(item);
                  setSearch("");
                }}
                className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                  letter === item
                    ? "border-[#172554] bg-[#172554] text-white"
                    : "border-gray-200 bg-white text-[#172554] hover:border-[#C49A45]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-sm font-bold text-[#172554]">
            Filter by category
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  category === item
                    ? "border-[#C49A45] bg-[#FFF1CF] text-[#172554]"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#C49A45]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5 mt-9 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#172554]">
            Legal Terms
          </h2>
          <span className="text-sm text-gray-500">
            {filteredTerms.length} terms
          </span>
        </div>

        {filteredTerms.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredTerms.map((item) => (
              <article
                key={item.term}
                className="rounded-xl border border-[#E8E5DC] bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-[#172554]">
                    {item.term}
                  </h3>
                  <span className="rounded-full bg-[#FFF8E8] px-3 py-1 text-xs font-semibold text-[#8A6728]">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm leading-7 text-gray-700">
                  {item.meaning}
                </p>
                <div className="mt-4 rounded-lg bg-[#F8F7F3] p-3">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#A77D2D]">
                    Example
                  </p>
                  <p className="text-sm leading-6 text-gray-600">
                    {item.example}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <BookOpen className="mx-auto mb-3 text-gray-400" size={30} />
            <p className="font-semibold text-[#172554]">
              No matching terms found.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Try another search or category.
            </p>
          </div>
        )}

        <p className="mt-10 text-center text-xs leading-6 text-gray-500">
          This dictionary is for general educational purposes. Definitions
          are simplified and should be read with relevant laws and judicial
          decisions. It is not legal advice.
        </p>
      </section>
    </main>
  );
}
