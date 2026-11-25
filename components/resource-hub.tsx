"use client";
import { useMemo, useState } from "react";
import { Search, ArrowUpRight, FileText, ClipboardList, BookOpen, Scale, BriefcaseBusiness, Languages, SlidersHorizontal } from "lucide-react";
import { categories, resources } from "@/lib/content";

const iconMap = { FileText, ClipboardList, BookOpen, Scale, BriefcaseBusiness, Languages };
export default function ResourceHub() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All resources");
  const filtered = useMemo(() => resources.filter((item) => `${item.title} ${item.subject} ${item.type} ${item.description}`.toLowerCase().includes(query.toLowerCase()) && (filter === "All resources" || item.type === filter)), [query, filter]);
  return <>
    <section id="explore" className="section-wrap scroll-mt-24">
      <div className="section-heading"><div><p className="eyebrow">THE STUDENT RESOURCE CENTRE</p><h2>Everything you need, <em>in one place.</em></h2><p className="section-copy">Explore learning resources created to make your LL.B journey clearer and more manageable.</p></div><a className="text-link" href="#resources">Browse resources <ArrowUpRight size={16}/></a></div>
      <div className="category-grid">{categories.map((item) => { const Icon = iconMap[item.icon as keyof typeof iconMap]; return <a className="category-card" href="#resources" key={item.title} onClick={() => setFilter(item.title === "Internal Questions" ? "Question Bank" : item.title === "Assignments" ? "Assignment Guide" : item.title === "Study Notes" ? "Study Notes" : "All resources")}><span className="category-icon"><Icon size={21}/></span><span className="category-title">{item.title}</span><span className="category-detail">{item.detail}</span><span className="category-bottom">Explore <ArrowUpRight size={15}/></span></a> })}</div>
    </section>
    <section id="resources" className="resource-section scroll-mt-24"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow">FRESH FROM THE LIBRARY</p><h2>Explore learning <em>materials.</em></h2><p className="section-copy">Search the sample library. More verified student resources can be added as the site grows.</p></div></div>
      <div className="resource-tools"><label className="search-box"><Search size={18}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search subjects, topics or resources..." aria-label="Search resources"/></label><label className="filter-box"><SlidersHorizontal size={17}/><select value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Filter resources"><option>All resources</option><option>Question Bank</option><option>Assignment Guide</option><option>Study Notes</option><option>Practical Guide</option></select></label></div>
      <div className="resource-list">{filtered.map((item, index) => <article className="resource-row" key={item.title}><div className="resource-number">0{index + 1}</div><div className="resource-main"><div className="resource-meta"><span>{item.type}</span><span>{item.semester}</span></div><h3>{item.title}</h3><p>{item.description}</p><small>{item.subject}</small></div><span className="resource-arrow"><ArrowUpRight size={20}/></span></article>)}{filtered.length === 0 && <div className="empty-state">No matching resources yet. Try a different search.</div>}</div>
      <p className="demo-note">Preview content: resource downloads and uploads will be connected in the next development stage.</p>
    </div></section>
  </>;
}
