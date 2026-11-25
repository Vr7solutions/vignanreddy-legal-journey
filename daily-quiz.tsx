
"use client";

import { useState } from "react";

const questions = [
  // CONSTITUTIONAL LAW
  { question: "Which is the supreme law of India?", options: ["IPC", "Constitution of India", "CPC", "BNS"], answer: 1, explanation: "The Constitution is the supreme law of India." },
  { question: "Which Article guarantees equality before the law?", options: ["Article 14", "Article 19", "Article 21", "Article 32"], answer: 0, explanation: "Article 14 guarantees equality before the law and equal protection of laws." },
  { question: "Which Article protects life and personal liberty?", options: ["Article 15", "Article 19", "Article 21", "Article 25"], answer: 2, explanation: "Article 21 protects life and personal liberty." },
  { question: "Which Article provides the right to constitutional remedies?", options: ["Article 14", "Article 21", "Article 32", "Article 51"], answer: 2, explanation: "Article 32 allows people to approach the Supreme Court for enforcement of Fundamental Rights." },
  { question: "Who called Article 32 the heart and soul of the Constitution?", options: ["Mahatma Gandhi", "Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], answer: 1, explanation: "Dr. B. R. Ambedkar described Article 32 as the heart and soul of the Constitution." },
  { question: "Which Article deals with freedom of speech and expression?", options: ["Article 19(1)(a)", "Article 20", "Article 22", "Article 29"], answer: 0, explanation: "Article 19(1)(a) guarantees freedom of speech and expression." },
  { question: "Which Article abolishes untouchability?", options: ["Article 14", "Article 17", "Article 18", "Article 23"], answer: 1, explanation: "Article 17 abolishes untouchability." },
  { question: "Which Article provides free and compulsory education for children aged 6 to 14?", options: ["Article 19", "Article 21A", "Article 24", "Article 30"], answer: 1, explanation: "Article 21A provides the right to education for children aged 6 to 14." },
  { question: "Which Article deals with the amendment of the Constitution?", options: ["Article 124", "Article 226", "Article 368", "Article 356"], answer: 2, explanation: "Article 368 provides the procedure for constitutional amendments." },
  { question: "Which case is associated with the Basic Structure Doctrine?", options: ["Kesavananda Bharati v State of Kerala", "Donoghue v Stevenson", "Rylands v Fletcher", "Carlill v Carbolic Smoke Ball Co."], answer: 0, explanation: "The Supreme Court laid down the Basic Structure Doctrine in Kesavananda Bharati (1973)." },
  { question: "Which Article empowers High Courts to issue writs?", options: ["Article 32", "Article 124", "Article 226", "Article 368"], answer: 2, explanation: "Article 226 empowers High Courts to issue writs." },
  { question: "Which part of the Constitution contains Fundamental Rights?", options: ["Part II", "Part III", "Part IV", "Part IVA"], answer: 1, explanation: "Fundamental Rights are contained in Part III." },
  { question: "Directive Principles of State Policy are found in which Part?", options: ["Part I", "Part III", "Part IV", "Part V"], answer: 2, explanation: "Directive Principles are contained in Part IV." },
  { question: "Fundamental Duties are mentioned in which Article?", options: ["Article 32", "Article 44", "Article 51A", "Article 368"], answer: 2, explanation: "Article 51A lists the Fundamental Duties of citizens." },
  { question: "Which Article protects freedom of religion?", options: ["Article 14", "Article 19", "Article 25", "Article 32"], answer: 2, explanation: "Article 25 protects freedom of conscience and the right to freely profess, practise and propagate religion, subject to constitutional limits." },
  { question: "Which case expanded the interpretation of personal liberty under Article 21?", options: ["Maneka Gandhi v Union of India", "A.K. Gopalan v State of Madras", "Rylands v Fletcher", "R.C. Cooper v Union of India"], answer: 0, explanation: "Maneka Gandhi (1978) gave Article 21 a broader interpretation." },
  { question: "Who is the constitutional head of the Union Executive?", options: ["Prime Minister", "President", "Chief Justice of India", "Speaker"], answer: 1, explanation: "The President is the constitutional head of the Union Executive." },

  // LAW OF CONTRACT
  { question: "Which Act primarily governs contracts in India?", options: ["Transfer of Property Act, 1882", "Indian Contract Act, 1872", "Companies Act, 2013", "CPC, 1908"], answer: 1, explanation: "The Indian Contract Act, 1872 governs general principles of contracts." },
  { question: "Under Section 2(h), a contract is:", options: ["Every promise", "An agreement enforceable by law", "Every social arrangement", "A verbal statement"], answer: 1, explanation: "Section 2(h) defines a contract as an agreement enforceable by law." },
  { question: "Which section defines a proposal?", options: ["Section 2(a)", "Section 2(b)", "Section 2(d)", "Section 2(h)"], answer: 0, explanation: "Section 2(a) defines a proposal." },
  { question: "Which section defines acceptance?", options: ["Section 2(a)", "Section 2(b)", "Section 2(c)", "Section 2(e)"], answer: 1, explanation: "Section 2(b) defines acceptance." },
  { question: "What is consideration?", options: ["A court order", "Something done or promised in return", "A punishment", "A legal notice"], answer: 1, explanation: "Consideration is something done, abstained from, or promised at the desire of the promisor." },
  { question: "Which section deals with agreements made by persons competent to contract?", options: ["Section 10", "Section 11", "Section 23", "Section 25"], answer: 1, explanation: "Section 11 explains who is competent to contract." },
  { question: "Which section states the essentials of a valid contract?", options: ["Section 2", "Section 10", "Section 14", "Section 73"], answer: 1, explanation: "Section 10 sets out the essentials of agreements that become contracts." },
  { question: "An agreement with a minor is generally:", options: ["Valid", "Void", "Always voidable", "Illegal in every case"], answer: 1, explanation: "Under the rule in Mohori Bibee, a minor's agreement is void from the beginning." },
  { question: "Which case established the rule that a minor's agreement is void?", options: ["Mohori Bibee v Dharmodas Ghose", "Carlill v Carbolic Smoke Ball Co.", "Hadley v Baxendale", "Balfour v Balfour"], answer: 0, explanation: "Mohori Bibee v Dharmodas Ghose established that a minor's agreement is void." },
  { question: "Which section deals with agreements without consideration?", options: ["Section 11", "Section 23", "Section 25", "Section 27"], answer: 2, explanation: "Section 25 generally declares agreements without consideration void, subject to exceptions." },
  { question: "Which section deals with free consent?", options: ["Section 10", "Section 13", "Section 14", "Section 18"], answer: 2, explanation: "Section 14 defines free consent." },
  { question: "Coercion is defined under which section?", options: ["Section 15", "Section 16", "Section 17", "Section 18"], answer: 0, explanation: "Section 15 defines coercion." },
  { question: "Undue influence is defined under which section?", options: ["Section 14", "Section 15", "Section 16", "Section 17"], answer: 2, explanation: "Section 16 defines undue influence." },
  { question: "Which section deals with fraud?", options: ["Section 15", "Section 16", "Section 17", "Section 18"], answer: 2, explanation: "Section 17 defines fraud." },
  { question: "Which section deals with misrepresentation?", options: ["Section 16", "Section 17", "Section 18", "Section 19"], answer: 2, explanation: "Section 18 defines misrepresentation." },
  { question: "Which section deals with agreements opposed to public policy and unlawful consideration or objects?", options: ["Section 10", "Section 23", "Section 25", "Section 30"], answer: 1, explanation: "Section 23 deals with lawful consideration and objects." },
  { question: "Which section deals with compensation for loss caused by breach of contract?", options: ["Section 56", "Section 65", "Section 73", "Section 124"], answer: 2, explanation: "Section 73 deals with compensation for loss or damage caused by breach of contract." },

  // FAMILY LAW - HINDU LAW
  { question: "Which Act governs Hindu marriages in India?", options: ["Hindu Marriage Act, 1955", "Special Marriage Act, 1872", "Indian Contract Act, 1872", "Transfer of Property Act, 1882"], answer: 0, explanation: "The Hindu Marriage Act, 1955 governs Hindu marriages covered by the Act." },
  { question: "Which section of the Hindu Marriage Act lays down conditions for a Hindu marriage?", options: ["Section 5", "Section 7", "Section 9", "Section 13"], answer: 0, explanation: "Section 5 provides the conditions for a Hindu marriage." },
  { question: "Under the Hindu Marriage Act, the minimum marriage age is:", options: ["18 for both", "21 for both", "21 for the bridegroom and 18 for the bride", "25 for the bridegroom and 21 for the bride"], answer: 2, explanation: "The statutory ages are 21 for the bridegroom and 18 for the bride." },
  { question: "Which section deals with ceremonies for a Hindu marriage?", options: ["Section 5", "Section 7", "Section 9", "Section 11"], answer: 1, explanation: "Section 7 deals with ceremonies for a Hindu marriage." },
  { question: "Which section deals with restitution of conjugal rights?", options: ["Section 7", "Section 9", "Section 11", "Section 13"], answer: 1, explanation: "Section 9 provides for restitution of conjugal rights." },
  { question: "Which section deals with divorce under the Hindu Marriage Act?", options: ["Section 5", "Section 9", "Section 12", "Section 13"], answer: 3, explanation: "Section 13 lists grounds for divorce." },
  { question: "Which Act governs Hindu adoptions?", options: ["Hindu Adoptions and Maintenance Act, 1956", "Hindu Marriage Act, 1955", "Indian Succession Act, 1925", "Guardians and Wards Act, 1890"], answer: 0, explanation: "The Hindu Adoptions and Maintenance Act, 1956 governs Hindu adoptions and maintenance." },
  { question: "Which Act governs Hindu minority and guardianship?", options: ["Hindu Minority and Guardianship Act, 1956", "Hindu Marriage Act, 1955", "Special Marriage Act, 1954", "Indian Contract Act, 1872"], answer: 0, explanation: "The Hindu Minority and Guardianship Act, 1956 deals with Hindu minors and guardianship." },
  { question: "What is Stridhan?", options: ["Joint family property only", "Property belonging to a woman", "Government property", "An ancestral tax"], answer: 1, explanation: "Stridhan refers to property that belongs to a woman and over which she has ownership rights." },
  { question: "Which case recognised a daughter's right as a coparcener by birth under the amended Hindu Succession Act?", options: ["Vineeta Sharma v Rakesh Sharma", "Kesavananda Bharati v State of Kerala", "Maneka Gandhi v Union of India", "Donoghue v Stevenson"], answer: 0, explanation: "Vineeta Sharma (2020) affirmed a daughter's coparcenary rights by birth." },
  { question: "Which Act primarily governs succession among Hindus?", options: ["Hindu Succession Act, 1956", "Hindu Marriage Act, 1955", "Indian Evidence Act, 1872", "CPC, 1908"], answer: 0, explanation: "The Hindu Succession Act, 1956 governs intestate succession among Hindus and related matters." },
  { question: "What does monogamy mean?", options: ["Marriage to multiple spouses at the same time", "Having only one spouse at a time", "Marriage without ceremonies", "A temporary marriage"], answer: 1, explanation: "Monogamy means having only one spouse at a time." },
  { question: "Which section of the Hindu Marriage Act deals with void marriages?", options: ["Section 9", "Section 11", "Section 12", "Section 13"], answer: 1, explanation: "Section 11 deals with void marriages." },
  { question: "Which section deals with voidable marriages under the Hindu Marriage Act?", options: ["Section 5", "Section 7", "Section 11", "Section 12"], answer: 3, explanation: "Section 12 deals with voidable marriages." },
  { question: "Which case is associated with the recognition of a Hindu woman's right to maintenance?", options: ["Vimala v Veeraswamy", "Rylands v Fletcher", "Carlill v Carbolic Smoke Ball Co.", "Kesavananda Bharati"], answer: 0, explanation: "Vimala v Veeraswamy is associated with maintenance under Section 125 of the former CrPC; it is not a Hindu personal-law case." },

  // LAW OF TORTS
  { question: "A tort is generally:", options: ["A civil wrong", "A criminal sentence", "A contract", "A constitutional amendment"], answer: 0, explanation: "A tort is a civil wrong for which the law provides a remedy, commonly damages." },
  { question: "Which maxim means 'where there is a right, there is a remedy'?", options: ["Volenti non fit injuria", "Ubi jus ibi remedium", "Res ipsa loquitur", "Actus non facit reum"], answer: 1, explanation: "Ubi jus ibi remedium means where there is a right, there is a remedy." },
  { question: "What does damnum sine injuria mean?", options: ["Legal injury without damage", "Damage without legal injury", "A criminal offence", "A valid contract"], answer: 1, explanation: "It means actual damage without violation of a legal right." },
  { question: "What does injuria sine damno mean?", options: ["Legal injury without actual damage", "Damage without legal injury", "No injury and no damage", "A breach of contract"], answer: 0, explanation: "It means violation of a legal right even if no actual loss is proved." },
  { question: "Which case is associated with injuria sine damno?", options: ["Ashby v White", "Rylands v Fletcher", "Donoghue v Stevenson", "Carlill v Carbolic Smoke Ball Co."], answer: 0, explanation: "Ashby v White illustrates violation of a legal right without proof of actual damage." },
  { question: "Which case established the modern neighbour principle in negligence?", options: ["Donoghue v Stevenson", "Rylands v Fletcher", "Kesavananda Bharati", "Mohori Bibee"], answer: 0, explanation: "Donoghue v Stevenson (1932) established the modern neighbour principle." },
  { question: "Which case is associated with strict liability?", options: ["Rylands v Fletcher", "Maneka Gandhi", "Vineeta Sharma", "Carlill"], answer: 0, explanation: "Rylands v Fletcher established the rule of strict liability." },
  { question: "Which Indian case established absolute liability for hazardous industries?", options: ["M.C. Mehta v Union of India (Oleum Gas Leak)", "Ashby v White", "Donoghue v Stevenson", "Balfour v Balfour"], answer: 0, explanation: "The Oleum Gas Leak case established the principle of absolute liability in India." },
  { question: "What is negligence?", options: ["Intentional harm only", "Failure to take reasonable care", "A valid agreement", "A court appeal"], answer: 1, explanation: "Negligence involves failure to take reasonable care, causing legally recognised harm." },
  { question: "What is assault in tort law?", options: ["Actual physical contact", "An act causing reasonable apprehension of immediate unlawful force", "Damage to property only", "A written contract"], answer: 1, explanation: "Assault involves creating reasonable apprehension of immediate unlawful force." },
  { question: "What is battery in tort law?", options: ["Unlawful physical contact", "A threat without contact", "A breach of contract", "A court summons"], answer: 0, explanation: "Battery involves intentional and direct application of unlawful physical force." },
  { question: "False imprisonment means:", options: ["Unlawful total restraint of a person's freedom of movement", "Defamation", "Property damage", "Breach of promise"], answer: 0, explanation: "False imprisonment is unlawful total restraint of a person's liberty." },
  { question: "What is vicarious liability?", options: ["Liability for another person's act in a legally recognised relationship", "No liability at all", "Only criminal liability", "Liability for one's own contract"], answer: 0, explanation: "An employer may be liable for an employee's wrongful act committed in the course of employment." },
  { question: "What is nuisance in tort law?", options: ["Unreasonable interference with use or enjoyment of land", "A valid marriage", "A criminal trial", "A constitutional right"], answer: 0, explanation: "Nuisance involves unlawful or unreasonable interference with another's use or enjoyment of property." },
  { question: "Which defence means that the claimant freely accepted the risk?", options: ["Necessity", "Volenti non fit injuria", "Mistake", "Remoteness"], answer: 1, explanation: "Volenti non fit injuria means no injury is done to one who voluntarily consents to the risk." },
  { question: "What is defamation?", options: ["Wrongful harm to reputation through a defamatory statement", "Physical imprisonment", "A contract offer", "A court decree"], answer: 0, explanation: "Defamation concerns publication of a defamatory statement that harms reputation, subject to applicable defences." },
  { question: "What does res ipsa loquitur mean?", options: ["The thing speaks for itself", "Let the buyer beware", "No one is above law", "An agreement is an agreement"], answer: 0, explanation: "The maxim may allow negligence to be inferred from the nature of the accident." },

  // ENVIRONMENTAL LAW
  { question: "Which Article directs the State to protect and improve the environment?", options: ["Article 14", "Article 21", "Article 48A", "Article 32"], answer: 2, explanation: "Article 48A directs the State to protect and improve the environment." },
  { question: "Which Fundamental Duty concerns protection of the natural environment?", options: ["Article 51A(a)", "Article 51A(g)", "Article 51A(j)", "Article 51A(k)"], answer: 1, explanation: "Article 51A(g) concerns protection and improvement of the natural environment." },
  { question: "Which Act is commonly called the umbrella environmental legislation in India?", options: ["Environment (Protection) Act, 1986", "Indian Contract Act, 1872", "CPC, 1908", "Hindu Marriage Act, 1955"], answer: 0, explanation: "The Environment (Protection) Act, 1986 provides a broad framework for environmental protection." },
  { question: "In which year was the Water (Prevention and Control of Pollution) Act enacted?", options: ["1972", "1974", "1981", "1986"], answer: 1, explanation: "The Water Act was enacted in 1974." },
  { question: "In which year was the Air (Prevention and Control of Pollution) Act enacted?", options: ["1974", "1980", "1981", "1986"], answer: 2, explanation: "The Air Act was enacted in 1981." },
  { question: "Which body was established under the National Green Tribunal Act, 2010?", options: ["National Green Tribunal", "Central Vigilance Commission", "Finance Commission", "Election Commission"], answer: 0, explanation: "The National Green Tribunal was established under the 2010 Act." },
  { question: "Which principle makes polluters responsible for the cost of preventing and remedying pollution?", options: ["Polluter Pays Principle", "Rule of Law", "Natural Justice", "Res Judicata"], answer: 0, explanation: "The Polluter Pays Principle places the cost of pollution prevention and remediation on the polluter." },
  { question: "Which principle requires preventive action where there is a threat of serious environmental harm despite scientific uncertainty?", options: ["Precautionary Principle", "Strict construction", "Ejusdem generis", "Double jeopardy"], answer: 0, explanation: "The Precautionary Principle supports preventive action despite scientific uncertainty." },
  { question: "Which case is associated with the Polluter Pays Principle in India?", options: ["Indian Council for Enviro-Legal Action v Union of India", "Mohori Bibee v Dharmodas Ghose", "Ashby v White", "Balfour v Balfour"], answer: 0, explanation: "Indian Council for Enviro-Legal Action is an important Indian environmental law decision." },
  { question: "Which international conference was held in Stockholm in 1972?", options: ["UN Conference on the Human Environment", "Earth Summit", "Kyoto Conference", "Paris Conference"], answer: 0, explanation: "The 1972 Stockholm Conference focused on the human environment." },
  { question: "The Rio Earth Summit took place in which year?", options: ["1972", "1987", "1992", "2002"], answer: 2, explanation: "The United Nations Conference on Environment and Development took place in Rio in 1992." },
  { question: "What is sustainable development?", options: ["Development without any environmental rules", "Meeting present needs without compromising future generations", "Stopping all development", "Using only non-renewable resources"], answer: 1, explanation: "The widely used definition comes from the 1987 Brundtland Report." },
  { question: "Which case is associated with the public trust doctrine in India?", options: ["M.C. Mehta v Kamal Nath", "Donoghue v Stevenson", "Vineeta Sharma v Rakesh Sharma", "Mohori Bibee v Dharmodas Ghose"], answer: 0, explanation: "M.C. Mehta v Kamal Nath recognised the public trust doctrine in India." },
  { question: "Which gas is a major contributor to human-caused global warming?", options: ["Oxygen", "Carbon dioxide", "Helium", "Neon"], answer: 1, explanation: "Carbon dioxide is a major greenhouse gas contributing to human-caused global warming." },
  { question: "Which institution is responsible for coordinating environmental protection at the national level in India?", options: ["Ministry of Environment, Forest and Climate Change", "Election Commission", "Union Public Service Commission", "Finance Commission"], answer: 0, explanation: "The Ministry of Environment, Forest and Climate Change is the Union ministry responsible for these policy areas." },
  { question: "What is biodiversity?", options: ["Variety of life forms", "Only forest trees", "Only wild animals", "Air pollution"], answer: 0, explanation: "Biodiversity refers to the variety of life at genetic, species and ecosystem levels." },

  // LEGAL AND CONSTITUTIONAL HISTORY
  { question: "When was the Regulating Act passed?", options: ["1773", "1784", "1793", "1858"], answer: 0, explanation: "The British Parliament passed the Regulating Act in 1773." },
  { question: "Who became the first Governor-General of Bengal under the Regulating Act?", options: ["Lord Cornwallis", "Warren Hastings", "Lord Wellesley", "Lord Dalhousie"], answer: 1, explanation: "Warren Hastings became the first Governor-General of Bengal under the Act." },
  { question: "Where was the first Supreme Court established in British India?", options: ["Bombay", "Madras", "Calcutta", "Delhi"], answer: 2, explanation: "The Supreme Court at Fort William was established in Calcutta." },
  { question: "In which year did the Supreme Court at Calcutta begin functioning?", options: ["1726", "1774", "1781", "1861"], answer: 1, explanation: "The Supreme Court at Fort William began functioning in 1774." },
  { question: "Which Act amended the Regulating Act and clarified the jurisdiction of the Supreme Court at Calcutta?", options: ["Act of Settlement, 1781", "Charter Act, 1833", "Indian Councils Act, 1861", "Government of India Act, 1935"], answer: 0, explanation: "The Act of Settlement, 1781 clarified aspects of the Supreme Court's jurisdiction." },
  { question: "Who introduced the judicial plan of 1772?", options: ["Warren Hastings", "Lord Cornwallis", "Lord Curzon", "Lord Canning"], answer: 0, explanation: "Warren Hastings introduced the judicial plan of 1772." },
  { question: "Which system was established under the judicial plan of 1772?", options: ["Adalat system", "Federal system", "Panchayati Raj", "Lok Adalat system"], answer: 0, explanation: "The plan established civil and criminal Adalats." },
  { question: "Who is associated with the Cornwallis Code of 1793?", options: ["Warren Hastings", "Lord Cornwallis", "Lord Ripon", "Lord Mountbatten"], answer: 1, explanation: "Lord Cornwallis introduced major judicial and administrative reforms culminating in the 1793 Code." },
  { question: "Which Act transferred the administration of India from the East India Company to the British Crown?", options: ["Regulating Act, 1773", "Government of India Act, 1858", "Charter Act, 1833", "Indian Councils Act, 1909"], answer: 1, explanation: "The Government of India Act, 1858 transferred authority to the British Crown." },
  { question: "Which Act provided for the establishment of High Courts in India?", options: ["Indian High Courts Act, 1861", "Regulating Act, 1773", "Charter Act, 1813", "Government of India Act, 1919"], answer: 0, explanation: "The Indian High Courts Act, 1861 provided for the establishment of High Courts." },
  { question: "When was the Federal Court of India established?", options: ["1861", "1909", "1937", "1950"], answer: 2, explanation: "The Federal Court began functioning in 1937 under the Government of India Act, 1935." },
  { question: "Which Charter Act made the Governor-General of Bengal the Governor-General of India?", options: ["Charter Act, 1813", "Charter Act, 1833", "Charter Act, 1853", "Charter Act, 1793"], answer: 1, explanation: "The Charter Act of 1833 created the office of Governor-General of India." },
  { question: "Which court system handled civil disputes under the Warren Hastings judicial plan?", options: ["Diwani Adalat", "Supreme Court only", "Federal Court", "Privy Council"], answer: 0, explanation: "Diwani Adalats dealt with civil disputes under the 1772 plan." },
  { question: "Which body was the highest court of appeal for British India for many years?", options: ["Privy Council", "District Court", "Village Panchayat", "Lok Adalat"], answer: 0, explanation: "The Judicial Committee of the Privy Council served as the highest appellate body for many matters from British India." },
  { question: "Who was the first Chief Justice of the Supreme Court at Calcutta?", options: ["Sir Elijah Impey", "Sir William Jones", "Lord Cornwallis", "Warren Hastings"], answer: 0, explanation: "Sir Elijah Impey was the first Chief Justice of the Supreme Court at Calcutta." },
  { question: "Which Act introduced dyarchy in the provinces?", options: ["Government of India Act, 1909", "Government of India Act, 1919", "Government of India Act, 1935", "Indian Independence Act, 1947"], answer: 1, explanation: "The Government of India Act, 1919 introduced dyarchy in the provinces." },
  { question: "In which year did the Indian Independence Act receive Royal Assent?", options: ["1935", "1942", "1947", "1950"], answer: 2, explanation: "The Indian Independence Act received Royal Assent in 1947." },

  // GENERAL LEGAL KNOWLEDGE
  { question: "What does PIL stand for?", options: ["Public Interest Litigation", "Private Indian Law", "Personal Information List", "Public Investigation Law"], answer: 0, explanation: "PIL stands for Public Interest Litigation." },
  { question: "What is an advocate?", options: ["A person authorised to practise law", "A police officer", "A court building", "A witness only"], answer: 0, explanation: "An advocate is a person enrolled under the Advocates Act, 1961 and entitled to practise subject to applicable rules." },
  { question: "Which institution is the highest court in India?", options: ["District Court", "High Court", "Supreme Court", "Family Court"], answer: 2, explanation: "The Supreme Court is the highest court in India's judicial system." },
  { question: "What does FIR stand for?", options: ["First Information Report", "Final Investigation Record", "Formal Inquiry Request", "First Inspection Register"], answer: 0, explanation: "FIR stands for First Information Report." },
  { question: "Which Act governs the right to information in India?", options: ["Right to Information Act, 2005", "Information Technology Act, 2000", "Evidence Act, 1872", "CPC, 1908"], answer: 0, explanation: "The Right to Information Act, 2005 provides a framework for citizens to access information from public authorities." },
  { question: "What is the full form of ADR?", options: ["Alternative Dispute Resolution", "Additional District Rules", "Applied Dispute Register", "Alternative District Review"], answer: 0, explanation: "ADR stands for Alternative Dispute Resolution." },
  { question: "Which Act governs the legal profession in India?", options: ["Advocates Act, 1961", "Companies Act, 2013", "Indian Contract Act, 1872", "Environment Protection Act, 1986"], answer: 0, explanation: "The Advocates Act, 1961 regulates the legal profession and Bar Councils in India." }
];

const today = new Date().toLocaleDateString("en-CA", {
  timeZone: "Asia/Kolkata"
});

const dayNumber = Math.floor(
  new Date(`${today}T00:00:00+05:30`).getTime() / 86400000
);

const dailyQuestion =
  questions[((dayNumber % questions.length) + questions.length) % questions.length];

export default function DailyQuiz() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="daily-quiz">
      <div className="quiz-heading">
        <span>TEST YOUR LEGAL KNOWLEDGE</span>
        <h2>Legal Quiz of the Day</h2>
        <p>A new question every day. Learn something new!</p>
      </div>

      <div className="quiz-card">
        <h3>{dailyQuestion.question}</h3>

        <div className="quiz-options">
          {dailyQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`quiz-option ${
                selected !== null && index === dailyQuestion.answer
                  ? "correct"
                  : selected === index
                    ? "incorrect"
                    : ""
              }`}
              onClick={() => setSelected(index)}
              disabled={selected !== null}
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}
        </div>

        {selected !== null && (
          <div className="quiz-feedback" role="status">
            <strong>
              {selected === dailyQuestion.answer
                ? "Correct! Well done."
                : `Not quite! The correct answer is ${dailyQuestion.options[dailyQuestion.answer]}.`}
            </strong>
            <p>{dailyQuestion.explanation}</p>
          </div>
        )}
      </div>
    </section>
  );
}
