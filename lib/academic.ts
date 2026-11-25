export const academicYears = [
  {
    name: "1st Year",
    semesters: ["Semester 1", "Semester 2"],
  },
  {
    name: "2nd Year",
    semesters: ["Semester 3", "Semester 4"],
  },
  {
    name: "3rd Year",
    semesters: ["Semester 5", "Semester 6"],
  },
];

export const semesterData = {
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
    "Law of Crimes (Bharatiya Nyaya Sanhita, 2023)",
    "Human Rights Law",
    "Law of Consumer Protection",
  ],
  "Semester 3": [
    "Jurisprudence",
    "Law of Property",
    "Administrative Law",
    "Company Law",
    "Labour Law – I",
    "Public International Law",
  ],
  "Semester 4": [
    "Labour Law – II",
    "Law of Insurance",
    "Interpretation of Statutes",
    "Land Laws",
    "Intellectual Property Law",
    "Private International Law",
  ],
  "Semester 5": [
    "Law of Evidence (Bharatiya Sakshya Adhiniyam, 2023)",
    "Civil Procedure Code and Law of Limitation",
    "Bharatiya Nagarik Suraksha Sanhita, Juvenile Justice and Probation of Offenders Act",
    "Law of Taxation",
    "Principles of Legislation and Legislative Drafting",
    "Alternate Dispute Resolution",
    "Professional Ethics and Professional Accounting System",
  ],
  "Semester 6": [
    "Information Technology Law",
    "Law of Banking and Negotiable Instruments",
    "Principles of Equity and Trusts",
    "Drafting, Pleadings and Conveyancing",
    "Moot Courts, Observation of Trial, Pre-Trial Preparations and Internship",
    "Elective I – Law Relating to Women and Children",
    "Elective I – Law of Insolvency",
    "Elective II – International Humanitarian Law",
    "Elective II – Citizenship and Emigration Law",
  ],
};

export const semesterInternships: Record<string, string> = {
  "Semester 2": "Internship and Viva-Voce",
  "Semester 4": "Internship and Viva-Voce",
};

export type SemesterName = keyof typeof semesterData;
