
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, BookOpen, ArrowLeft } from "lucide-react";

const terms = [
  // A
  { term: "Abetment", category: "Criminal Law", meaning: "Intentionally helping, encouraging or assisting another person to commit an offence.", example: "A person who intentionally helps another commit an offence may be liable for abetment." },
  { term: "Abrogation", category: "Legal Principles", meaning: "The formal repeal or abolition of a law, rule or legal provision.", example: "A legislature may abrogate an existing law by passing a new law." },
  { term: "Acquittal", category: "Criminal Law", meaning: "A court's decision that an accused person is not guilty of the charge.", example: "The accused was acquitted because the prosecution failed to prove the charge." },
  { term: "Actus Reus", category: "Latin Maxims", meaning: "The physical or external element of a criminal offence.", example: "The prohibited act may form the actus reus of an offence." },
  { term: "Adjudication", category: "Court Procedure", meaning: "The process of formally deciding a dispute or legal issue.", example: "The court completed the adjudication after hearing both parties." },
  { term: "Admission", category: "Evidence Law", meaning: "A statement suggesting an inference about a fact in issue or relevant fact, as recognised by evidence law.", example: "A party's statement acknowledging a debt may be relevant as an admission." },
  { term: "Affidavit", category: "Court Procedure", meaning: "A written statement of facts sworn or affirmed before an authorised person.", example: "A party may submit an affidavit in support of a court application." },
  { term: "Alibi", category: "Criminal Law", meaning: "A defence that the accused was somewhere else when the alleged offence occurred.", example: "The accused produced evidence that they were in another city at the relevant time." },
  { term: "Amendment", category: "Constitutional Law", meaning: "A formal change made to a law or constitutional provision.", example: "A constitutional amendment changes the Constitution through the prescribed procedure." },
  { term: "Appeal", category: "Court Procedure", meaning: "A request to a higher court or authority to review a decision when the law permits.", example: "A party may appeal against a judgment under the applicable law." },
  { term: "Arbitration", category: "Contract Law", meaning: "A method of resolving disputes outside ordinary court proceedings through an appointed arbitrator.", example: "Businesses may refer a contractual dispute to arbitration." },
  { term: "Arrest", category: "Criminal Law", meaning: "The lawful taking of a person into custody by an authorised person.", example: "Police may arrest a person when the legal conditions are satisfied." },
  { term: "Assault", category: "Law of Torts", meaning: "An act that creates a reasonable apprehension of immediate unlawful force.", example: "Threatening an immediate physical attack may amount to assault." },

  // B
  { term: "Bail", category: "Criminal Law", meaning: "The conditional release of an accused person from custody under legal authority.", example: "A court may grant bail subject to conditions." },
  { term: "Bailment", category: "Contract Law", meaning: "Delivery of goods by one person to another for a specific purpose, with an obligation to return or deal with them as directed.", example: "Giving a watch to a repair shop is an example of bailment." },
  { term: "Battery", category: "Law of Torts", meaning: "Intentional and unlawful physical contact with another person without valid consent or justification.", example: "Unlawfully striking another person may amount to battery." },
  { term: "Beneficiary", category: "Civil Law", meaning: "A person who receives a benefit under a trust, will, insurance policy or other legal arrangement.", example: "A person named in a will may be its beneficiary." },
  { term: "Beyond Reasonable Doubt", category: "Criminal Law", meaning: "The standard of proof generally required from the prosecution in a criminal trial.", example: "The prosecution must establish guilt beyond reasonable doubt." },
  { term: "Bona Fide", category: "Latin Maxims", meaning: "A Latin expression meaning honestly or in good faith.", example: "A bona fide purchaser acts honestly and without relevant notice of another person's claim." },
  { term: "Breach of Contract", category: "Contract Law", meaning: "Failure to perform a contractual obligation without lawful excuse.", example: "A seller who fails to deliver goods as agreed may commit a breach of contract." },
  { term: "Burden of Proof", category: "Evidence Law", meaning: "The legal responsibility to prove a fact or claim in a proceeding.", example: "The prosecution generally carries the burden of proving the accused's guilt." },

  // C
  { term: "Caveat", category: "Court Procedure", meaning: "A formal notice asking a court to hear the person lodging it before making a specified order, where the law permits.", example: "A person expecting an application may lodge a caveat." },
  { term: "Causation", category: "Law of Torts", meaning: "The connection between a person's conduct and the harm or loss that occurred.", example: "A claimant must establish the required causal connection in a negligence claim." },
  { term: "Charge", category: "Criminal Law", meaning: "A formal accusation that a person has committed an offence.", example: "The court framed a charge against the accused." },
  { term: "Circumstantial Evidence", category: "Evidence Law", meaning: "Evidence that proves a fact indirectly through surrounding circumstances.", example: "Footprints and other surrounding facts may form circumstantial evidence." },
  { term: "Civil Law", category: "Civil Law", meaning: "The branch of law dealing mainly with private rights and disputes between persons or organisations.", example: "A dispute over unpaid contractual money may be a civil matter." },
  { term: "Cognizable Offence", category: "Criminal Law", meaning: "An offence for which police may arrest without a warrant and investigate according to the applicable criminal procedure law.", example: "Police may investigate a cognizable offence without first obtaining a magistrate's order." },
  { term: "Consideration", category: "Contract Law", meaning: "Something of value given or promised in exchange for a promise, subject to legal rules.", example: "Payment made in exchange for goods is consideration." },
  { term: "Constitution", category: "Constitutional Law", meaning: "The fundamental legal framework establishing government institutions, powers and rights.", example: "The Constitution of India is the supreme law of the country." },
  { term: "Contract", category: "Contract Law", meaning: "An agreement enforceable by law.", example: "An agreement satisfying the legal requirements can become a contract." },
  { term: "Conviction", category: "Criminal Law", meaning: "A formal finding by a court that an accused person is guilty of an offence.", example: "The court recorded a conviction after finding the charge proved." },
  { term: "Custody", category: "Criminal Law", meaning: "Legal control or detention of a person by an authorised authority.", example: "A person may be placed in police or judicial custody according to law." },
  { term: "Custom", category: "Legal Principles", meaning: "A practice followed for a long time that may receive legal recognition if legal requirements are met.", example: "A recognised custom may be relevant in certain personal-law disputes." },

  // D
  { term: "Damages", category: "Law of Torts", meaning: "Monetary compensation awarded for a legally recognised loss or injury.", example: "A court may award damages for negligence or breach of contract." },
  { term: "Decree", category: "Civil Law", meaning: "The formal expression of an adjudication conclusively determining rights of parties in a civil suit, as defined by procedural law.", example: "A successful plaintiff may obtain a decree for recovery of money." },
  { term: "Defendant", category: "Court Procedure", meaning: "A person against whom a civil case is brought.", example: "The person responding to a civil suit is generally called the defendant." },
  { term: "Delegated Legislation", category: "Constitutional Law", meaning: "Rules, regulations or orders made by an authority under powers granted by a legislature.", example: "A government department may frame rules under an enabling Act." },
  { term: "Deposition", category: "Evidence Law", meaning: "A witness's recorded testimony, usually given under oath in a formal proceeding.", example: "A witness's deposition may be recorded during legal proceedings." },
  { term: "Detention", category: "Criminal Law", meaning: "The holding of a person in custody or restricting their freedom under legal authority.", example: "A person may be detained under a lawful order." },
  { term: "Dictum", category: "Legal Principles", meaning: "A statement made by a judge that is not essential to the decision.", example: "An obiter dictum may be persuasive but is generally not binding as the ratio." },
  { term: "Domicile", category: "Family Law", meaning: "A person's permanent legal home, determined under applicable legal principles.", example: "Domicile may be relevant in deciding certain personal-law questions." },

  // E
  { term: "Easement", category: "Civil Law", meaning: "A right enjoyed by one landowner over another person's land for a specified purpose.", example: "A right of way through neighbouring land may be an easement." },
  { term: "Environmental Impact Assessment", category: "Environmental Law", meaning: "A process of examining the likely environmental effects of a proposed project before approval.", example: "A major project may require an environmental impact assessment." },
  { term: "Equity", category: "Legal Principles", meaning: "A body of legal principles developed to achieve fairness where strict legal rules may be inadequate.", example: "Equitable remedies may be available in appropriate cases." },
  { term: "Estoppel", category: "Legal Principles", meaning: "A principle that may prevent a person from denying a representation or position on which another person relied.", example: "A person may be prevented from contradicting a representation that another relied upon." },
  { term: "Evidence", category: "Evidence Law", meaning: "Material legally presented to establish or disprove facts in a proceeding.", example: "Documents and witness testimony may be evidence." },
  { term: "Ex Parte", category: "Latin Maxims", meaning: "A proceeding or order made in the absence of one party, subject to procedural safeguards.", example: "A court may pass an ex parte order in circumstances permitted by law." },
  { term: "Execution", category: "Court Procedure", meaning: "The process of enforcing a court's decree or order.", example: "A decree-holder may start execution proceedings to recover money." },
  { term: "Executor", category: "Family Law", meaning: "A person appointed to carry out the instructions in a deceased person's will.", example: "An executor administers the estate according to the will and law." },
  { term: "Extradition", category: "Criminal Law", meaning: "The formal surrender of a person by one country to another for prosecution or punishment under applicable law.", example: "A country may request extradition of a person accused of an offence." },

  // F
  { term: "Fact in Issue", category: "Evidence Law", meaning: "A fact from which a legal right, liability or disability necessarily follows in a proceeding.", example: "Whether a contract was signed may be a fact in issue in a contract dispute." },
  { term: "Federalism", category: "Constitutional Law", meaning: "A system in which governmental powers are distributed between central and regional governments.", example: "India distributes legislative powers between the Union and States." },
  { term: "Fiduciary", category: "Civil Law", meaning: "A person who must act in another person's interests because of a relationship of trust and confidence.", example: "A trustee owes fiduciary duties to the beneficiaries." },
  { term: "Fundamental Duties", category: "Constitutional Law", meaning: "Constitutional duties of citizens listed in Part IVA of the Constitution of India.", example: "Respecting the Constitution and national symbols is a fundamental duty." },
  { term: "Fundamental Rights", category: "Constitutional Law", meaning: "Rights guaranteed under Part III of the Constitution of India and enforceable through constitutional remedies.", example: "Article 21 protects life and personal liberty." },

  // G
  { term: "Good Faith", category: "Legal Principles", meaning: "Honest conduct without fraud or an intention to deceive, as understood under the applicable law.", example: "A person acting honestly may be said to act in good faith." },
  { term: "Guardian", category: "Family Law", meaning: "A person legally responsible for the care or property of a minor or another person who needs legal protection.", example: "A court may appoint a guardian for a minor." },
  { term: "Grievance", category: "Legal Principles", meaning: "A complaint about an alleged wrong, unfair treatment or violation of a right.", example: "An employee may submit a grievance regarding workplace treatment." },

  // H
  { term: "Habeas Corpus", category: "Latin Maxims", meaning: "A writ through which a court examines whether a person's detention is lawful.", example: "A person may seek this writ when someone is allegedly detained unlawfully." },
  { term: "Hearsay Evidence", category: "Evidence Law", meaning: "A statement made outside court and offered to prove the truth of what it states, generally subject to exclusion unless an exception applies.", example: "Repeating what another person said may raise a hearsay issue." },
  { term: "Hindu Marriage", category: "Family Law", meaning: "A marriage governed by applicable Hindu personal law, including the Hindu Marriage Act, 1955.", example: "The legal conditions for a Hindu marriage are governed by the applicable statute." },
  { term: "Homicide", category: "Criminal Law", meaning: "The killing of one human being by another; its legal classification depends on the circumstances and applicable law.", example: "A court examines intention, knowledge and circumstances when deciding a homicide case." },

  // I
  { term: "Injunction", category: "Civil Law", meaning: "A court order requiring a person to do something or refrain from doing something.", example: "A court may restrain a person from unlawfully interfering with property." },
  { term: "Intention", category: "Criminal Law", meaning: "A person's conscious purpose or aim to bring about a particular result.", example: "Intention may be relevant when determining criminal responsibility." },
  { term: "Interim Order", category: "Court Procedure", meaning: "A temporary order passed while a case is still pending.", example: "A court may grant temporary protection until the final decision." },
  { term: "Interpretation of Statutes", category: "Legal Principles", meaning: "The process of determining the meaning and scope of legislation.", example: "A court interprets statutory words when their meaning is disputed." },

  // J
  { term: "Judgment", category: "Court Procedure", meaning: "The statement given by a judge explaining the decision and reasons in a case.", example: "The court delivered its judgment after hearing both parties." },
  { term: "Judicial Review", category: "Constitutional Law", meaning: "The power of courts to examine the legality or constitutionality of government action and legislation.", example: "A court may invalidate government action that violates the Constitution." },
  { term: "Jurisdiction", category: "Court Procedure", meaning: "The legal authority of a court or tribunal to hear and decide a matter.", example: "A court must have jurisdiction to decide a case." },
  { term: "Juvenile", category: "Criminal Law", meaning: "A person below the legally specified age; in Indian juvenile justice law, a child is generally a person below 18 years.", example: "A child alleged to have committed an offence is dealt with under juvenile justice law." },

  // K
  { term: "Karta", category: "Family Law", meaning: "The person who manages the affairs of a Hindu Undivided Family under applicable Hindu law.", example: "The Karta may manage the family's joint property and affairs." },
  { term: "Knowledge", category: "Criminal Law", meaning: "Awareness of a fact or circumstance, which may be relevant to establishing legal responsibility.", example: "The prosecution may need to prove knowledge where an offence requires it." },

  // L
  { term: "Laches", category: "Legal Principles", meaning: "Unreasonable delay in asserting a legal right that may affect the availability of relief.", example: "A court may consider delay when deciding whether equitable relief should be granted." },
  { term: "Legal Person", category: "Legal Principles", meaning: "An entity recognised by law as having legal rights and duties.", example: "A registered company is a legal person separate from its members." },
  { term: "Liability", category: "Legal Principles", meaning: "Legal responsibility for an act, omission, debt or obligation.", example: "A person may incur liability for causing damage through negligence." },
  { term: "Limitation", category: "Court Procedure", meaning: "The legally prescribed time within which a case or proceeding must be initiated.", example: "A suit filed after the limitation period may be barred unless an exception applies." },
  { term: "Locus Standi", category: "Latin Maxims", meaning: "The legal standing or right of a person to bring a matter before a court.", example: "A person generally needs sufficient legal standing to bring a case." },

  // M
  { term: "Mandamus", category: "Constitutional Law", meaning: "A writ directing a public authority to perform a public or legal duty.", example: "A court may issue mandamus when a public authority unlawfully fails to perform its duty." },
  { term: "Maintenance", category: "Family Law", meaning: "Financial support that a person may be legally required to provide to another person.", example: "A spouse, child or parent may claim maintenance under applicable law." },
  { term: "Mediation", category: "Court Procedure", meaning: "A dispute-resolution process in which a neutral mediator helps parties reach a voluntary settlement.", example: "Parties may resolve a family dispute through mediation." },
  { term: "Mens Rea", category: "Latin Maxims", meaning: "The mental element or guilty intention required for certain criminal offences.", example: "The prosecution may need to establish the required mental element." },
  { term: "Misrepresentation", category: "Contract Law", meaning: "An untrue statement of fact that may induce another person to enter into an agreement.", example: "A false statement about a property's condition may amount to misrepresentation." },
  { term: "Mitigation", category: "Law of Torts", meaning: "The duty or expectation to take reasonable steps to reduce loss or damage.", example: "An injured party may be expected to take reasonable steps to limit further loss." },

  // N
  { term: "Natural Justice", category: "Legal Principles", meaning: "Principles of fair procedure, including the right to be heard and the rule against bias.", example: "A person should generally have an opportunity to respond before an adverse decision." },
  { term: "Negligence", category: "Law of Torts", meaning: "Failure to take reasonable care, resulting in legally recognised harm or loss.", example: "Careless driving that causes injury may amount to negligence." },
  { term: "Non Obstante Clause", category: "Legal Principles", meaning: "A statutory clause stating that a provision will operate despite something inconsistent in another law or provision.", example: "A statute may use a non obstante clause to give a particular provision overriding effect." },
  { term: "Notary", category: "Court Procedure", meaning: "A person authorised by law to perform specified notarial acts, such as witnessing signatures or administering oaths.", example: "A notary may attest an affidavit in accordance with law." },
  { term: "Nuisance", category: "Law of Torts", meaning: "An unlawful interference with another person's use or enjoyment of land or certain rights.", example: "Excessive noise affecting a neighbour may amount to nuisance." },

  // O
  { term: "Obiter Dicta", category: "Latin Maxims", meaning: "A judicial observation that is not essential to the decision of a case.", example: "An obiter dictum may guide other courts but is generally not binding." },
  { term: "Offence", category: "Criminal Law", meaning: "An act or omission made punishable by law.", example: "Theft is an offence under Indian criminal law." },
  { term: "Omission", category: "Criminal Law", meaning: "A failure to do something that a person is legally required to do.", example: "Failure to perform a legally imposed duty may create liability in certain circumstances." },
  { term: "Ordinance", category: "Constitutional Law", meaning: "A temporary law-making measure issued by the President or a Governor under constitutional conditions.", example: "The President may promulgate an ordinance when the constitutional requirements are satisfied." },
  { term: "Ownership", category: "Civil Law", meaning: "The legally recognised right to possess, use and deal with property, subject to law.", example: "A registered sale deed may help establish ownership of property." },

  // P
  { term: "Parole", category: "Criminal Law", meaning: "Conditional release of a convicted prisoner from custody for a specified period under applicable rules.", example: "A prisoner may be released on parole subject to conditions." },
  { term: "Perjury", category: "Criminal Law", meaning: "Making a knowingly false statement under oath or in a legally recognised situation where truth is required.", example: "A witness who deliberately gives false evidence may commit perjury." },
  { term: "Plaintiff", category: "Court Procedure", meaning: "A person who brings a civil suit before a court.", example: "A person filing a civil recovery suit is the plaintiff." },
  { term: "Precedent", category: "Legal Principles", meaning: "An earlier judicial decision that guides or binds courts in later cases according to its authority.", example: "Supreme Court law declared under Article 141 is binding on all courts in India." },
  { term: "Presumption", category: "Evidence Law", meaning: "An inference that the law permits or requires a court to draw from established facts, subject to applicable rules.", example: "A statutory presumption may apply once specified facts are proved." },
  { term: "Prima Facie", category: "Latin Maxims", meaning: "A Latin expression meaning at first sight or on initial examination.", example: "The documents may establish a prima facie case." },
  { term: "Probate", category: "Family Law", meaning: "A legal grant confirming a will and authorising the executor to administer the estate where required.", example: "An executor may seek probate of a will." },
  { term: "Prosecution", category: "Criminal Law", meaning: "The legal process of bringing and conducting a criminal case against an accused person.", example: "The prosecution presented witnesses and evidence before the court." },

  // Q
  { term: "Quash", category: "Court Procedure", meaning: "To set aside or cancel a legal proceeding, order or decision through lawful authority.", example: "A High Court may quash criminal proceedings in appropriate cases." },
  { term: "Quantum Meruit", category: "Latin Maxims", meaning: "A principle allowing reasonable payment for work or services provided in circumstances recognised by law.", example: "A person may claim reasonable payment for services already performed." },
  { term: "Quasi Contract", category: "Contract Law", meaning: "An obligation imposed by law to prevent unjust enrichment, even without a normal agreement between the parties.", example: "A person who receives another's money by mistake may have to return it." },

  // R
  { term: "Ratio Decidendi", category: "Latin Maxims", meaning: "The legal principle or reason necessary for a court's decision.", example: "The ratio decidendi of a binding judgment must be followed by lower courts." },
  { term: "Reasonable Doubt", category: "Criminal Law", meaning: "A genuine doubt based on reason and evidence about the guilt of an accused person.", example: "A reasonable doubt may require the accused to be acquitted." },
  { term: "Rebuttable Presumption", category: "Evidence Law", meaning: "A presumption that may be disproved by presenting sufficient contrary evidence.", example: "A party may challenge a rebuttable presumption with relevant evidence." },
  { term: "Remand", category: "Criminal Law", meaning: "An order sending an accused person back into authorised custody or sending a case back for further proceedings.", example: "A magistrate may authorise remand according to criminal procedure law." },
  { term: "Remedy", category: "Legal Principles", meaning: "A legal means of enforcing a right or obtaining relief for a wrong.", example: "Damages or an injunction may be remedies in a civil case." },
  { term: "Res Judicata", category: "Latin Maxims", meaning: "A principle preventing a matter already finally decided by a competent court from being litigated again when legal requirements are met.", example: "A final decision may prevent the same issue between the same parties from being tried again." },
  { term: "Restitution", category: "Civil Law", meaning: "Restoring a person to a position or returning a benefit as required by law.", example: "A court may order repayment of money received without legal justification." },

  // S
  { term: "Separation of Powers", category: "Constitutional Law", meaning: "The principle of distributing government functions among the legislature, executive and judiciary.", example: "The legislature makes laws, the executive implements them and the judiciary interprets them." },
  { term: "Specific Performance", category: "Contract Law", meaning: "A court order requiring a party to perform a contractual obligation when legally appropriate.", example: "A court may order completion of a property sale agreement in a suitable case." },
  { term: "Stare Decisis", category: "Latin Maxims", meaning: "The principle of following established judicial decisions in similar cases.", example: "Courts follow binding precedents when deciding similar legal issues." },
  { term: "Statute", category: "Legal Principles", meaning: "A written law enacted by a legislature.", example: "The Indian Contract Act, 1872 is a statute." },
  { term: "Stay Order", category: "Court Procedure", meaning: "A court order temporarily stopping a proceeding, action or enforcement.", example: "A court may stay the operation of an order until further hearing." },
  { term: "Strict Liability", category: "Law of Torts", meaning: "Liability imposed for certain harmful activities without needing to prove negligence, subject to applicable rules and exceptions.", example: "The rule in Rylands v Fletcher is a traditional example of strict liability." },
  { term: "Sub Judice", category: "Latin Maxims", meaning: "A Latin expression referring to a matter currently under judicial consideration.", example: "The dispute is sub judice because the case is pending before a court." },
  { term: "Summons", category: "Court Procedure", meaning: "A formal notice issued by a court requiring a person to appear or respond.", example: "A court may issue a summons to a defendant." },
  { term: "Sustainable Development", category: "Environmental Law", meaning: "Development that meets present needs without compromising the ability of future generations to meet their needs.", example: "Planning renewable energy projects while protecting ecosystems supports sustainable development." },

  // T
  { term: "Tort", category: "Law of Torts", meaning: "A civil wrong, other than a mere breach of contract, for which the law provides a remedy.", example: "Negligently causing injury to another person may amount to a tort." },
  { term: "Trespass", category: "Law of Torts", meaning: "An unjustified interference with another person's possession of land or person.", example: "Entering private land without permission or lawful justification may amount to trespass." },
  { term: "Trial", category: "Court Procedure", meaning: "The formal examination of a case by a court to determine the issues and reach a decision.", example: "Witnesses may give evidence during a criminal trial." },
  { term: "Trustee", category: "Civil Law", meaning: "A person who holds or manages property for the benefit of another person or purpose.", example: "A trustee must manage trust property according to the trust's terms and law." },

  // U
  { term: "Ultra Vires", category: "Latin Maxims", meaning: "An act performed beyond the legal powers or authority of a person or organisation.", example: "A public authority acting outside its statutory powers may act ultra vires." },
  { term: "Undue Influence", category: "Contract Law", meaning: "Improperly using a position of power or influence to obtain an unfair advantage in an agreement.", example: "A contract obtained through undue influence may be challenged under applicable law." },
  { term: "Unlawful Assembly", category: "Criminal Law", meaning: "An assembly that meets the legal requirements for being treated as unlawful under criminal law.", example: "An assembly formed with a legally prohibited common object may constitute an unlawful assembly." },

  // V
  { term: "Vicarious Liability", category: "Law of Torts", meaning: "Legal responsibility imposed on one person for the wrongful act of another because of a recognised relationship.", example: "An employer may be liable for an employee's wrongful act committed in the course of employment." },
  { term: "Void Agreement", category: "Contract Law", meaning: "An agreement that is not enforceable by law.", example: "An agreement expressly declared void by law cannot be enforced as a contract." },
  { term: "Voidable Contract", category: "Contract Law", meaning: "A contract enforceable at the option of one party but not at the option of the other, as defined by law.", example: "A contract caused by coercion may be voidable at the option of the affected party." },

  // W
  { term: "Warrant", category: "Criminal Law", meaning: "A written legal authorisation issued by a competent authority for a specified action.", example: "A court may issue an arrest warrant according to law." },
  { term: "Warranty", category: "Contract Law", meaning: "A contractual assurance or term whose breach generally gives a right to claim damages rather than reject the entire contract.", example: "A seller's warranty may cover defects in a product." },
  { term: "Writ", category: "Constitutional Law", meaning: "A formal order issued by a constitutional court to protect rights or enforce legal duties.", example: "The Supreme Court and High Courts can issue writs under Articles 32 and 226." },

  // Y and Z
  { term: "Youth Justice", category: "Criminal Law", meaning: "The legal system dealing with children alleged or found to have committed offences, with emphasis on care, protection and rehabilitation.", example: "Children in conflict with law are dealt with under the Juvenile Justice Act." },
  { term: "Zoning", category: "Environmental Law", meaning: "The division of land into areas with specified permitted uses and development conditions.", example: "Zoning rules may separate residential areas from certain industrial activities." },
];

const categories = [
  "All",
  "Constitutional Law",
  "Criminal Law",
  "Civil Law",
  "Contract Law",
  "Family Law",
  "Law of Torts",
  "Environmental Law",
  "Evidence Law",
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
          Explore 100+ legal terms with simple explanations, practical
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
          are simplified and should be read with relevant Indian laws and
          judicial decisions. It is not legal advice.
        </p>
      </section>
    </main>
  );
}
