
import type { PracticeQuestion } from "./types";

const subject = "Legal and Constitutional History of India";
type Entry = [string, string[], number, string];

const entries: Entry[] = [
  [
    "When was the English East India Company established?",
    ["1600", "1608", "1757", "1773"],
    0,
    "The English East India Company was established by a Royal Charter dated 31 December 1600."
  ],
  [
    "Who granted the Royal Charter establishing the East India Company?",
    ["Queen Elizabeth I", "King James I", "Queen Victoria", "King Charles II"],
    0,
    "Queen Elizabeth I granted the charter to the East India Company in 1600."
  ],
  [
    "What was the original purpose of the East India Company?",
    ["To conduct trade with the East", "To establish the Supreme Court", "To frame the Indian Constitution", "To abolish the Mughal Empire"],
    0,
    "The Company was initially established as a trading organisation."
  ],
  [
    "When did the East India Company establish its first trading post in India?",
    ["1600", "1613", "1661", "1726"],
    1,
    "The Company established a factory at Surat in 1613 after obtaining trading privileges."
  ],
  [
    "Which Mughal emperor granted trading privileges to the English East India Company in 1613?",
    ["Jahangir", "Akbar", "Aurangzeb", "Shah Jahan"],
    0,
    "Emperor Jahangir permitted the English to establish a factory at Surat."
  ],
  [
    "Which charter granted the East India Company the right to acquire territorial possessions and exercise certain governmental powers?",
    ["Charter of 1600", "Charter of 1661", "Charter of 1726", "Charter of 1753"],
    1,
    "The Charter of 1661 expanded the Company's authority, including powers relating to administration and justice in its settlements."
  ],
  [
    "Which English monarch granted the Charter of 1661?",
    ["Charles II", "James I", "William III", "George III"],
    0,
    "King Charles II granted the Charter of 1661."
  ],
  [
    "Which charter is associated with the establishment of Mayor's Courts in the Presidency Towns?",
    ["Charter of 1600", "Charter of 1661", "Charter of 1726", "Charter of 1833"],
    2,
    "The Charter of 1726 established Mayor's Courts in Madras, Bombay and Calcutta."
  ],
  [
    "In which year were Mayor's Courts established in the three Presidency Towns?",
    ["1600", "1661", "1726", "1773"],
    2,
    "The Charter of 1726 provided for Mayor's Courts in the three Presidency Towns."
  ],
  [
    "Which three towns received Mayor's Courts under the Charter of 1726?",
    ["Madras, Bombay and Calcutta", "Delhi, Agra and Lahore", "Surat, Goa and Pune", "Patna, Lucknow and Hyderabad"],
    0,
    "Mayor's Courts were established in Madras, Bombay and Calcutta."
  ],
  [
    "Who appointed the Mayor and Aldermen under the Charter of 1726?",
    ["The Crown", "The Mughal emperor", "The Governor-General of India", "The Indian National Congress"],
    0,
    "The Charter provided for the appointment of the Mayor and Aldermen through the Crown's authority."
  ],
  [
    "What was the composition of a Mayor's Court under the Charter of 1726?",
    ["A Mayor and nine Aldermen", "A Chief Justice and four judges", "A Governor and twelve ministers", "A Mayor and two judges"],
    0,
    "The Mayor's Court consisted of a Mayor and nine Aldermen."
  ],
  [
    "Which law was generally administered by the Mayor's Courts in civil matters involving Europeans?",
    ["English law, subject to the applicable charter and circumstances", "Only Roman law", "Only French law", "Only modern Indian constitutional law"],
    0,
    "The Mayor's Courts applied English legal principles within the jurisdiction created by their charter."
  ],
  [
    "Which charter modified the judicial arrangements created by the Charter of 1726?",
    ["Charter of 1753", "Charter of 1600", "Charter of 1661", "Charter of 1858"],
    0,
    "The Charter of 1753 modified the Mayor's Court arrangements."
  ],
  [
    "What was one important change under the Charter of 1753?",
    ["The Mayor's Court's jurisdiction was adjusted, including in relation to suits involving the Company and its servants", "The Supreme Court at Calcutta was established", "The Federal Court was established", "The Constitution was adopted"],
    0,
    "The 1753 Charter revised the judicial arrangements and limited aspects of the Mayor's Court jurisdiction."
  ],
  [
    "Which battle in 1757 strengthened the political position of the East India Company in Bengal?",
    ["Battle of Plassey", "Battle of Panipat", "Battle of Buxar", "Battle of Talikota"],
    0,
    "The Battle of Plassey in 1757 was a major turning point in the Company's political expansion in Bengal."
  ],
  [
    "In which year was the Battle of Buxar fought?",
    ["1757", "1764", "1772", "1781"],
    1,
    "The Battle of Buxar was fought in 1764."
  ],
  [
    "Which treaty followed the Battle of Buxar and granted the Company Diwani rights?",
    ["Treaty of Allahabad, 1765", "Treaty of Madras, 1769", "Treaty of Salbai, 1782", "Treaty of Lahore, 1846"],
    0,
    "Under the Treaty of Allahabad in 1765, the Mughal emperor granted the Company Diwani rights in Bengal, Bihar and Orissa."
  ],
  [
    "What were Diwani rights?",
    ["Rights to collect revenue and administer civil justice", "Rights to appoint the British monarch", "Rights to control the British Parliament", "Rights to conduct only military operations"],
    0,
    "Diwani rights primarily concerned revenue collection and civil administration in the territories granted to the Company."
  ],
  [
    "Who granted the Diwani rights to the East India Company in 1765?",
    ["Mughal Emperor Shah Alam II", "Akbar", "Bahadur Shah Zafar", "Aurangzeb"],
    0,
    "Shah Alam II granted the Diwani rights under the Treaty of Allahabad."
  ],
  [
    "What was the Dual Government system in Bengal?",
    ["Separation of revenue administration and responsibility for law and order", "A system of two British monarchs", "A system of two Supreme Courts", "A system of elected provincial governments"],
    0,
    "Under the Dual Government associated with Robert Clive, the Company controlled revenue while the Nawab nominally retained responsibility for administration."
  ],
  [
    "Who introduced the Dual Government system in Bengal?",
    ["Robert Clive", "Warren Hastings", "Lord Cornwallis", "Lord Wellesley"],
    0,
    "Robert Clive introduced the Dual Government arrangement in Bengal in 1765."
  ],
  [
    "Who abolished the Dual Government system in Bengal in 1772?",
    ["Warren Hastings", "Robert Clive", "Lord Cornwallis", "Lord Dalhousie"],
    0,
    "Warren Hastings ended the Dual Government system in 1772."
  ],
  [
    "Which plan introduced a reorganisation of civil and criminal justice administration in Bengal in 1772?",
    ["Warren Hastings' Judicial Plan", "Cornwallis Code", "Montagu-Chelmsford Reforms", "Macaulay's Penal Code"],
    0,
    "Warren Hastings introduced his judicial plan in 1772 to reorganise the administration of justice."
  ],
  [
    "Under the 1772 plan, what courts were established at the district level for civil disputes?",
    ["Mofussil Diwani Adalats", "Supreme Courts", "Federal Courts", "High Courts"],
    0,
    "Mofussil Diwani Adalats were established to decide civil disputes in the districts."
  ],
  [
    "Who presided over the Mofussil Diwani Adalats under the 1772 plan?",
    ["The Collector", "The Mughal emperor", "The Mayor", "The Commander-in-Chief"],
    0,
    "The Collector initially presided over the district Diwani Adalats under the 1772 arrangement."
  ],
  [
    "Which court dealt with criminal cases under Warren Hastings' 1772 plan?",
    ["Mofussil Faujdari Adalat", "Mayor's Court", "Supreme Court", "Federal Court"],
    0,
    "Mofussil Faujdari Adalats dealt with criminal cases at the district level."
  ],
  [
    "Who was responsible for supervising the criminal justice system under the 1772 plan?",
    ["Sadar Nizamat Adalat", "Sadar Diwani Adalat", "Mayor's Court", "Privy Council"],
    0,
    "The Sadar Nizamat Adalat functioned as the highest criminal appellate and supervisory court under the arrangement."
  ],
  [
    "Which court was the highest civil appellate court under the 1772 judicial system?",
    ["Sadar Diwani Adalat", "Sadar Nizamat Adalat", "Mayor's Court", "Supreme Court of India"],
    0,
    "The Sadar Diwani Adalat served as the highest civil appellate court in the Company's judicial system."
  ],
  [
    "Which court was the highest criminal court under the 1772 arrangement?",
    ["Sadar Nizamat Adalat", "Sadar Diwani Adalat", "Mayor's Court", "High Court of Bombay"],
    0,
    "The Sadar Nizamat Adalat was the highest criminal court in the Bengal judicial arrangement."
  ],
  [
    "Which law was generally applied to Hindus and Muslims in matters of personal law under the 1772 plan?",
    ["Their respective personal laws, where applicable", "Only English criminal law", "Only French law", "Only Roman law"],
    0,
    "The plan generally recognised Hindu law for Hindus and Muslim law for Muslims in specified personal matters."
  ],
  [
    "Who was appointed as the first Governor-General of Bengal under the Regulating Act, 1773?",
    ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord William Bentinck"],
    0,
    "Warren Hastings became the first Governor-General of Bengal under the Regulating Act, 1773."
  ],
  [
    "Which Act marked the beginning of parliamentary control over the East India Company's administration in India?",
    ["Regulating Act, 1773", "Charter Act, 1600", "Indian Councils Act, 1861", "Government of India Act, 1935"],
    0,
    "The Regulating Act, 1773 was an important early step in British parliamentary control over the Company's Indian administration."
  ],
  [
    "Which office was created by the Regulating Act, 1773?",
    ["Governor-General of Bengal", "President of India", "Prime Minister of India", "Chief Election Commissioner"],
    0,
    "The Act replaced the Governor of Bengal with a Governor-General of Bengal."
  ],
  [
    "Who were the first four members of the Governor-General's Council under the Regulating Act, 1773?",
    ["Philip Francis, General Clavering, George Monson and Richard Barwell", "Cornwallis, Wellesley, Dalhousie and Curzon", "Macaulay, Bentinck, Ripon and Canning", "Hastings, Clive, Dupleix and Munro"],
    0,
    "The first council consisted of Philip Francis, General Clavering, George Monson and Richard Barwell."
  ],
  [
    "Which Act provided for the establishment of a Supreme Court at Calcutta?",
    ["Regulating Act, 1773", "Charter Act, 1833", "Indian Councils Act, 1909", "Government of India Act, 1919"],
    0,
    "The Regulating Act, 1773 authorised the establishment of a Supreme Court at Fort William, Calcutta."
  ],
  [
    "When was the Supreme Court at Calcutta established?",
    ["1774", "1772", "1781", "1862"],
    0,
    "The Supreme Court at Fort William began functioning in 1774."
  ],
  [
    "Who was the first Chief Justice of the Supreme Court at Calcutta?",
    ["Sir Elijah Impey", "Sir William Jones", "Sir John Shore", "Sir Thomas Strange"],
    0,
    "Sir Elijah Impey was appointed the first Chief Justice of the Supreme Court at Calcutta."
  ],
  [
    "How many puisne judges were appointed along with the Chief Justice of the Supreme Court at Calcutta?",
    ["Three", "One", "Five", "Seven"],
    0,
    "The Supreme Court consisted of a Chief Justice and three other judges."
  ],
  [
    "Where was the Supreme Court established under the Regulating Act, 1773?",
    ["Fort William, Calcutta", "Fort St. George, Madras", "Bombay Castle", "Delhi Fort"],
    0,
    "The Supreme Court was established at Fort William in Calcutta."
  ],
  [
    "Which Act was passed to clarify and limit aspects of the jurisdiction of the Supreme Court at Calcutta?",
    ["Act of Settlement, 1781", "Charter Act, 1853", "Indian Councils Act, 1861", "Government of India Act, 1858"],
    0,
    "The Act of Settlement, 1781 addressed conflicts and uncertainties arising from the Supreme Court's jurisdiction."
  ],
  [
    "What was an important purpose of the Act of Settlement, 1781?",
    ["Clarifying the jurisdiction of the Supreme Court and protecting revenue administration", "Establishing the Supreme Court of India", "Introducing universal adult franchise", "Creating provincial legislatures"],
    0,
    "The Act limited certain aspects of the Supreme Court's jurisdiction over revenue matters and Company officials acting in official capacity."
  ],
  [
    "Which Act is also known as the Amending Act of 1781?",
    ["Act of Settlement, 1781", "Regulating Act, 1773", "Pitt's India Act, 1784", "Charter Act, 1813"],
    0,
    "The Act of Settlement, 1781 is commonly called the Amending Act of 1781."
  ],
  [
    "Which Act established the Board of Control in Britain?",
    ["Pitt's India Act, 1784", "Regulating Act, 1773", "Charter Act, 1833", "Indian Councils Act, 1892"],
    0,
    "Pitt's India Act, 1784 created the Board of Control to supervise the Company's political affairs."
  ],
  [
    "Who was the British Prime Minister when Pitt's India Act was passed?",
    ["William Pitt the Younger", "Robert Walpole", "William Gladstone", "Winston Churchill"],
    0,
    "William Pitt the Younger was the British Prime Minister associated with the Act of 1784."
  ],
  [
    "What was the main purpose of Pitt's India Act, 1784?",
    ["To establish a system of dual control over the Company's affairs", "To grant independence to India", "To abolish the East India Company immediately", "To establish the Federal Court"],
    0,
    "The Act created a system in which the Court of Directors managed commercial affairs while the Board of Control supervised political affairs."
  ],
  [
    "Which Act renewed the Company's trade monopoly but ended its monopoly over trade with India, except in specified areas?",
    ["Charter Act, 1813", "Charter Act, 1833", "Regulating Act, 1773", "Indian Independence Act, 1947"],
    0,
    "The Charter Act, 1813 ended the Company's trade monopoly in India, while retaining exceptions for tea and trade with China."
  ],
  [
    "Which Act ended the East India Company's commercial activities and made it primarily an administrative body?",
    ["Charter Act, 1833", "Charter Act, 1813", "Regulating Act, 1773", "Indian Councils Act, 1861"],
    0,
    "The Charter Act, 1833 ended the Company's commercial functions and centralised legislative authority."
  ],
  [
    "Which Act created the office of Governor-General of India?",
    ["Charter Act, 1833", "Regulating Act, 1773", "Pitt's India Act, 1784", "Charter Act, 1853"],
    0,
    "The Charter Act, 1833 changed the title from Governor-General of Bengal to Governor-General of India."
  ],
  [
    "Who became the first Governor-General of India under the Charter Act, 1833?",
    ["Lord William Bentinck", "Warren Hastings", "Lord Cornwallis", "Lord Dalhousie"],
    0,
    "Lord William Bentinck was the first Governor-General of India."
  ],
  [
    "Which Act introduced a law member into the Governor-General's Council?",
    ["Charter Act, 1833", "Regulating Act, 1773", "Indian Councils Act, 1892", "Government of India Act, 1919"],
    0,
    "The Charter Act, 1833 added a law member to the Governor-General's Council for legislative work."
  ],
  [
    "Who was the first Law Member of the Governor-General's Council?",
    ["Thomas Babington Macaulay", "Lord Cornwallis", "Warren Hastings", "Sir Elijah Impey"],
    0,
    "Macaulay became the first Law Member and played an important role in legal codification."
  ],
  [
    "Which commission was appointed in 1834 to examine the codification of Indian laws?",
    ["First Law Commission", "Hunter Commission", "Simon Commission", "Sarkaria Commission"],
    0,
    "The First Law Commission was established in 1834 under the chairmanship of Macaulay."
  ],
  [
    "Who was the chairman of the First Law Commission in India?",
    ["Lord Macaulay", "Lord Cornwallis", "Warren Hastings", "Sir Elijah Impey"],
    0,
    "Thomas Babington Macaulay chaired the First Law Commission."
  ],
  [
    "Which code was drafted by the First Law Commission?",
    ["Indian Penal Code", "Code of Civil Procedure, 1908", "Constitution of India", "Indian Evidence Act, 1872"],
    0,
    "The First Law Commission prepared the draft of the Indian Penal Code."
  ],
  [
    "In which year was the Indian Penal Code enacted?",
    ["1860", "1833", "1872", "1908"],
    0,
    "The Indian Penal Code was enacted in 1860 and came into force in 1862."
  ],
  [
    "Which Charter Act separated the legislative and executive functions of the Governor-General's Council to a greater extent?",
    ["Charter Act, 1853", "Charter Act, 1813", "Regulating Act, 1773", "Charter Act, 1600"],
    0,
    "The Charter Act, 1853 made an important change by separating legislative and executive functions within the Council."
  ],
  [
    "Which Act introduced open competition for recruitment to the civil services?",
    ["Charter Act, 1853", "Regulating Act, 1773", "Indian Councils Act, 1861", "Government of India Act, 1935"],
    0,
    "The Charter Act, 1853 provided for open competition in the recruitment of civil servants, subject to subsequent arrangements."
  ],
  [
    "Which event led to the end of Company rule in India?",
    ["Revolt of 1857", "Battle of Plassey", "Battle of Buxar", "Swadeshi Movement"],
    0,
    "The Revolt of 1857 led to major changes in British administration and the end of Company rule."
  ],
  [
    "Which Act transferred the government of India from the East India Company to the British Crown?",
    ["Government of India Act, 1858", "Regulating Act, 1773", "Charter Act, 1833", "Indian Councils Act, 1909"],
    0,
    "The Government of India Act, 1858 transferred the Company's governing powers to the British Crown."
  ],
  [
    "Who became the first Viceroy of India?",
    ["Lord Canning", "Lord Dalhousie", "Lord Cornwallis", "Lord Wellesley"],
    0,
    "Lord Canning became the first Viceroy after the transfer of power to the Crown."
  ],
  [
    "Which office was created in Britain under the Government of India Act, 1858?",
    ["Secretary of State for India", "President of the Board of Trade", "Prime Minister of India", "Chief Justice of India"],
    0,
    "The Act created the office of Secretary of State for India to supervise Indian administration."
  ],
  [
    "Which Act provided for the establishment of High Courts in India?",
    ["Indian High Courts Act, 1861", "Regulating Act, 1773", "Charter Act, 1833", "Government of India Act, 1919"],
    0,
    "The Indian High Courts Act, 1861 authorised the establishment of High Courts in the Presidency towns."
  ],
  [
    "Which three High Courts were established first under the Indian High Courts Act, 1861?",
    ["Calcutta, Bombay and Madras", "Delhi, Lahore and Allahabad", "Patna, Nagpur and Hyderabad", "Lucknow, Jaipur and Mysore"],
    0,
    "The High Courts at Calcutta, Bombay and Madras were established in 1862."
  ],
  [
    "When did the Calcutta High Court begin functioning?",
    ["1862", "1861", "1865", "1872"],
    0,
    "The Calcutta High Court began functioning in 1862."
  ],
  [
    "Which courts were abolished when the High Courts were established in the Presidency towns?",
    ["Supreme Courts and Sadar Adalats", "District Courts only", "Village Panchayats", "Federal Court and Privy Council"],
    0,
    "The High Courts replaced the Supreme Courts and the Sadar Diwani and Sadar Nizamat Adalats in the relevant Presidency jurisdictions."
  ],
  [
    "Which Act introduced additional Indian representation in legislative councils?",
    ["Indian Councils Act, 1861", "Regulating Act, 1773", "Charter Act, 1813", "Indian Independence Act, 1947"],
    0,
    "The Indian Councils Act, 1861 expanded legislative councils and allowed the nomination of additional members, including Indians."
  ],
  [
    "Which Act is associated with the portfolio system in the Governor-General's Council?",
    ["Indian Councils Act, 1861", "Charter Act, 1600", "Regulating Act, 1773", "Government of India Act, 1935"],
    0,
    "The portfolio system, introduced by Lord Canning, received statutory recognition under the Indian Councils Act, 1861."
  ],
  [
    "Which Act introduced the principle of indirect election to legislative councils?",
    ["Indian Councils Act, 1892", "Indian Councils Act, 1861", "Charter Act, 1833", "Government of India Act, 1858"],
    0,
    "The 1892 Act introduced an indirect electoral element through recommendations by specified bodies, although the word election was not used."
  ],
  [
    "Which Act is also known as the Morley-Minto Reforms?",
    ["Indian Councils Act, 1909", "Indian Councils Act, 1892", "Government of India Act, 1919", "Government of India Act, 1935"],
    0,
    "The Indian Councils Act, 1909 is known as the Morley-Minto Reforms."
  ],
  [
    "Which Act introduced separate electorates for Muslims?",
    ["Indian Councils Act, 1909", "Indian Councils Act, 1861", "Government of India Act, 1919", "Government of India Act, 1935"],
    0,
    "The 1909 reforms introduced separate electorates for Muslims."
  ],
  [
    "Which Act is known as the Montagu-Chelmsford Reforms?",
    ["Government of India Act, 1919", "Government of India Act, 1935", "Indian Councils Act, 1909", "Indian Independence Act, 1947"],
    0,
    "The Government of India Act, 1919 implemented the Montagu-Chelmsford constitutional reforms."
  ],
  [
    "Which system was introduced in the provinces by the Government of India Act, 1919?",
    ["Dyarchy", "Complete provincial autonomy", "Presidential government", "Federal court system"],
    0,
    "The 1919 Act introduced dyarchy in the provinces, dividing subjects into transferred and reserved categories."
  ],
  [
    "Which Act introduced bicameralism at the Centre?",
    ["Government of India Act, 1919", "Regulating Act, 1773", "Charter Act, 1833", "Indian Councils Act, 1861"],
    0,
    "The 1919 Act established a bicameral central legislature consisting of the Council of State and Legislative Assembly."
  ],
  [
    "Which commission was appointed in 1927 to review constitutional progress in India?",
    ["Simon Commission", "Hunter Commission", "First Law Commission", "Butler Committee"],
    0,
    "The Simon Commission was appointed in 1927 to examine the working of the 1919 constitutional reforms."
  ],
  [
    "Why was the Simon Commission opposed by many Indians?",
    ["It had no Indian member", "It proposed immediate independence", "It abolished all courts", "It introduced universal adult franchise"],
    0,
    "The Commission consisted entirely of British members, leading to widespread Indian opposition."
  ],
  [
    "Which report was prepared in 1928 by a committee chaired by Motilal Nehru?",
    ["Nehru Report", "Simon Report", "Hunter Report", "Cripps Report"],
    0,
    "The Nehru Report proposed a constitutional framework for self-government in India."
  ],
  [
    "Which Act introduced provincial autonomy in British India?",
    ["Government of India Act, 1935", "Government of India Act, 1919", "Indian Councils Act, 1909", "Regulating Act, 1773"],
    0,
    "The Government of India Act, 1935 introduced provincial autonomy and ended provincial dyarchy."
  ],
  [
    "Which Act proposed an All-India Federation?",
    ["Government of India Act, 1935", "Indian Councils Act, 1861", "Charter Act, 1813", "Government of India Act, 1858"],
    0,
    "The 1935 Act provided for an All-India Federation, but the federal scheme never came into operation."
  ],
  [
    "Which Act provided for the establishment of the Federal Court of India?",
    ["Government of India Act, 1935", "Regulating Act, 1773", "Indian Councils Act, 1892", "Charter Act, 1833"],
    0,
    "The Government of India Act, 1935 provided for a Federal Court, which began functioning in 1937."
  ],
  [
    "When was the Federal Court of India established?",
    ["1937", "1935", "1947", "1950"],
    0,
    "The Federal Court began functioning on 1 October 1937."
  ],
  [
    "Who was the first Chief Justice of the Federal Court of India?",
    ["Sir Maurice Gwyer", "Sir Elijah Impey", "H.J. Kania", "M.C. Setalvad"],
    0,
    "Sir Maurice Gwyer was the first Chief Justice of the Federal Court."
  ],
  [
    "Which Act transferred power from British rule to two independent dominions, India and Pakistan?",
    ["Indian Independence Act, 1947", "Government of India Act, 1935", "Indian Councils Act, 1909", "Charter Act, 1833"],
    0,
    "The Indian Independence Act, 1947 provided for the creation of the two independent dominions."
  ],
  [
    "On which date did India become independent?",
    ["15 August 1947", "26 January 1950", "9 December 1946", "26 November 1949"],
    0,
    "India became independent on 15 August 1947."
  ],
  [
    "Who was the first Governor-General of independent India?",
    ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
    0,
    "Lord Mountbatten continued as the first Governor-General of independent India."
  ],
  [
    "Who was the first Indian Governor-General of independent India?",
    ["C. Rajagopalachari", "Lord Mountbatten", "Dr. Rajendra Prasad", "Jawaharlal Nehru"],
    0,
    "C. Rajagopalachari became the first and only Indian Governor-General of India in 1948."
  ],
  [
    "When did the Constituent Assembly of India first meet?",
    ["9 December 1946", "15 August 1947", "26 November 1949", "26 January 1950"],
    0,
    "The Constituent Assembly held its first meeting on 9 December 1946."
  ],
  [
    "Who was the temporary President of the Constituent Assembly?",
    ["Dr. Sachchidananda Sinha", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "B.R. Ambedkar"],
    0,
    "Dr. Sachchidananda Sinha served as the temporary President of the Constituent Assembly."
  ],
  [
    "Who was elected President of the Constituent Assembly?",
    ["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
    0,
    "Dr. Rajendra Prasad was elected President of the Constituent Assembly."
  ],
  [
    "Who chaired the Drafting Committee of the Constituent Assembly?",
    ["Dr. B.R. Ambedkar", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "K.M. Munshi"],
    0,
    "Dr. B.R. Ambedkar chaired the Drafting Committee, established on 29 August 1947."
  ],
  [
    "When was the Constitution of India adopted?",
    ["26 November 1949", "15 August 1947", "26 January 1950", "9 December 1946"],
    0,
    "The Constituent Assembly adopted the Constitution on 26 November 1949."
  ],
  [
    "When did the Constitution of India come into force?",
    ["26 January 1950", "26 November 1949", "15 August 1947", "2 October 1950"],
    0,
    "The Constitution came into force on 26 January 1950, celebrated as Republic Day."
  ],
  [
    "Which colonial institution was the predecessor of the Supreme Court of India?",
    ["Federal Court of India", "Mayor's Court", "Sadar Diwani Adalat", "Mofussil Faujdari Adalat"],
    0,
    "The Federal Court, established under the Government of India Act, 1935, preceded the Supreme Court of India."
  ],
  [
    "When did the Supreme Court of India begin functioning?",
    ["28 January 1950", "26 January 1950", "15 August 1947", "26 November 1949"],
    0,
    "The Supreme Court of India was inaugurated and began functioning on 28 January 1950."
  ],
  [
    "Who was the first Chief Justice of India?",
    ["H.J. Kania", "M.C. Setalvad", "B.K. Mukherjea", "P.B. Gajendragadkar"],
    0,
    "Justice Harilal Jekisundas Kania was the first Chief Justice of India."
  ],
  [
    "Which body was the highest court of appeal for British India before the establishment of the Federal Court?",
    ["Judicial Committee of the Privy Council", "Supreme Court of India", "High Court of Delhi", "Constituent Assembly"],
    0,
    "The Judicial Committee of the Privy Council in Britain served as the highest appellate authority for many Indian cases."
  ],
  [
    "Which court system existed in the Presidency towns before the establishment of the Supreme Courts?",
    ["Mayor's Courts", "Federal Courts", "Supreme Court of India", "Constitutional Courts"],
    0,
    "Mayor's Courts were established in the Presidency towns under the Charter of 1726."
  ],
  [
    "Which judicial system developed in the Company's mofussil territories?",
    ["Adalat system", "Federal system", "Presidential system", "Jury-only system"],
    0,
    "The Adalat system developed through judicial reforms introduced by Warren Hastings and later administrators."
  ],
  [
    "What does the term 'Adalat' mean?",
    ["Court or place of justice", "Trading company", "Military camp", "Revenue village"],
    0,
    "Adalat is a term used for a court or judicial institution."
  ],
  [
    "Which Governor-General is associated with major judicial reforms in 1787, 1790 and 1793?",
    ["Lord Cornwallis", "Warren Hastings", "Lord Dalhousie", "Lord Curzon"],
    0,
    "Lord Cornwallis introduced a series of administrative and judicial reforms during his tenure."
  ],
  [
    "Which reform separated revenue collection from judicial administration under Cornwallis?",
    ["The 1787 reforms", "The Charter of 1600", "The Regulating Act, 1773", "The Indian Independence Act, 1947"],
    0,
    "Cornwallis's 1787 reforms reorganised district administration and altered the Collector's judicial and revenue responsibilities over time."
  ],
  [
    "Which reform is associated with the reorganisation of criminal justice under Cornwallis in 1790?",
    ["A reorganisation of criminal courts and the Nizamat system", "Establishment of the Supreme Court of India", "Creation of the Federal Court", "Introduction of the Constitution"],
    0,
    "Cornwallis reorganised the criminal justice administration in 1790, strengthening Company control over the system."
  ],
  [
    "Which document is commonly associated with Cornwallis's comprehensive judicial and administrative reforms of 1793?",
    ["Cornwallis Code", "Nehru Report", "Regulating Act", "Montagu Declaration"],
    0,
    "The Cornwallis Code of 1793 consolidated important administrative, revenue and judicial reforms."
  ],
  [
    "What was an important feature of Cornwallis's judicial reforms?",
    ["Greater separation of revenue and judicial functions", "Abolition of all civil courts", "Creation of elected village parliaments", "Establishment of the Supreme Court of India"],
    0,
    "Cornwallis's reforms aimed to reorganise judicial administration and separate several revenue and judicial responsibilities."
  ],
  [
    "Which court was the principal civil court at the district level under the Cornwallis system?",
    ["District Diwani Adalat", "Supreme Court of India", "Federal Court", "Mayor's Court"],
    0,
    "The District Diwani Adalat dealt with civil cases at the district level."
  ],
  [
    "Which court dealt with serious criminal matters under Cornwallis's reorganisation?",
    ["Circuit Courts", "Mayor's Courts", "Federal Court", "Supreme Court of India"],
    0,
    "Circuit Courts were part of the reorganised criminal justice system and heard criminal cases on circuit."
  ],
  [
    "Which official was associated with the Cornwallis reforms as the head of the district administration?",
    ["Collector", "Mayor", "Chief Justice of India", "Speaker of Parliament"],
    0,
    "The Collector remained an important district official, particularly in revenue administration."
  ],
  [
    "Who succeeded Cornwallis as Governor-General in 1798?",
    ["Lord Wellesley", "Warren Hastings", "Lord Dalhousie", "Lord Canning"],
    0,
    "Lord Wellesley became Governor-General in 1798."
  ],
  [
    "Which Governor-General is associated with the introduction of the Subsidiary Alliance system?",
    ["Lord Wellesley", "Lord Cornwallis", "Lord Ripon", "Lord Canning"],
    0,
    "Lord Wellesley used the Subsidiary Alliance system to expand British political influence in Indian states."
  ],
  [
    "Which Governor-General is associated with the abolition of Sati in 1829?",
    ["Lord William Bentinck", "Lord Dalhousie", "Lord Cornwallis", "Lord Curzon"],
    0,
    "Lord William Bentinck prohibited Sati in the Bengal Presidency through Regulation XVII of 1829."
  ],
  [
    "Who was the social reformer strongly associated with the campaign against Sati?",
    ["Raja Ram Mohan Roy", "Ishwar Chandra Vidyasagar", "Swami Vivekananda", "Bal Gangadhar Tilak"],
    0,
    "Raja Ram Mohan Roy campaigned strongly against Sati and supported social reform."
  ],
  [
    "Which Act legalised widow remarriage among Hindus in 1856?",
    ["Hindu Widows' Remarriage Act, 1856", "Hindu Marriage Act, 1955", "Special Marriage Act, 1954", "Indian Succession Act, 1925"],
    0,
    "The Hindu Widows' Remarriage Act, 1856 legalised the remarriage of Hindu widows."
  ],
  [
    "Who was a leading reformer associated with the movement for Hindu widow remarriage?",
    ["Ishwar Chandra Vidyasagar", "Lord Curzon", "Robert Clive", "Warren Hastings"],
    0,
    "Ishwar Chandra Vidyasagar played a major role in advocating widow remarriage."
  ],
  [
    "Which Governor-General introduced the policy known as the Doctrine of Lapse?",
    ["Lord Dalhousie", "Lord Cornwallis", "Lord Ripon", "Lord Canning"],
    0,
    "Lord Dalhousie used the Doctrine of Lapse to annex certain princely states where the ruler died without a natural male heir accepted under the policy."
  ],
  [
    "Which Governor-General is associated with the introduction of local self-government reforms in 1882?",
    ["Lord Ripon", "Lord Curzon", "Lord Dalhousie", "Lord Wellesley"],
    0,
    "Lord Ripon's 1882 resolution promoted local self-government in India."
  ],
  [
    "Which Act introduced separate electorates for Muslims in 1909?",
    ["Indian Councils Act, 1909", "Indian Councils Act, 1892", "Government of India Act, 1919", "Government of India Act, 1935"],
    0,
    "The Morley-Minto Reforms of 1909 introduced separate electorates for Muslims."
  ],
  [
    "Which legal development is associated with the creation of the Federal Court under the 1935 Act?",
    ["A federal judicial institution with limited constitutional and appellate jurisdiction", "A village court system", "A court for company trade disputes only", "A court replacing the Privy Council immediately"],
    0,
    "The Federal Court exercised jurisdiction under the Government of India Act, 1935, including specified federal disputes and appeals."
  ],
  [
    "Which body replaced the Federal Court of India in 1950?",
    ["Supreme Court of India", "Privy Council", "Mayor's Court", "Sadar Diwani Adalat"],
    0,
    "The Supreme Court of India replaced the Federal Court when the Constitution came into force."
  ],
  [
    "What is the historical importance of the Regulating Act, 1773?",
    ["It was an early parliamentary attempt to regulate Company administration in India", "It granted India independence", "It established the Supreme Court of India", "It introduced universal adult franchise"],
    0,
    "The Act marked a major step in parliamentary oversight of the East India Company's administration."
  ],
  [
    "What is the historical importance of the Charter Act, 1833?",
    ["It centralised legislative authority and ended the Company's commercial activities", "It created the Supreme Court of India", "It introduced provincial autonomy", "It transferred power to the Indian people"],
    0,
    "The Charter Act, 1833 centralised legislative powers and ended the Company's trading functions."
  ],
  [
    "What is the historical importance of the Government of India Act, 1858?",
    ["It ended Company rule and transferred administration to the Crown", "It created the Constituent Assembly", "It introduced the Constitution of India", "It established the NGT"],
    0,
    "The Act transferred the administration of India from the East India Company to the British Crown."
  ],
  [
    "What is the historical importance of the Indian High Courts Act, 1861?",
    ["It enabled the establishment of High Courts in the Presidency towns", "It established the Supreme Court of India", "It abolished all district courts", "It created the office of Governor-General"],
    0,
    "The Act enabled the creation of High Courts, replacing earlier superior court arrangements in the Presidency towns."
  ],
  [
    "What is the historical importance of the Government of India Act, 1935?",
    ["It introduced provincial autonomy and provided for a Federal Court", "It granted complete independence", "It adopted the Constitution of India", "It created the East India Company"],
    0,
    "The 1935 Act was a major constitutional statute and influenced several provisions of the Constitution of India."
  ],
  [
    "What is the historical importance of the Indian Independence Act, 1947?",
    ["It ended British rule and created the independent dominions of India and Pakistan", "It established the Mayor's Courts", "It introduced the Regulating Act", "It created the East India Company"],
    0,
    "The Act provided the legal basis for the end of British rule and the creation of India and Pakistan as independent dominions."
  ]
];

export const legalHistoryQuestions: PracticeQuestion[] = entries.map(
  ([question, options, answer, explanation]) => ({
    subject,
    question,
    options,
    answer,
    explanation
  })
);
