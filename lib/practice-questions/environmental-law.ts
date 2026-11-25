
import type { PracticeQuestion } from "./types";

const subject = "Environmental Law";
type Entry = [string, string[], number, string];

const entries: Entry[] = [
  [
    "What does environmental law primarily deal with?",
    ["Regulation of business profits", "Protection of the environment and control of environmental harm", "Only wildlife protection", "Only industrial development"],
    1,
    "Environmental law regulates human activities to protect the environment and public health."
  ],
  [
    "What is the environment?",
    ["Only air and water", "Only plants and animals", "The surroundings, including air, water, land and living organisms", "Only forests"],
    2,
    "Environment includes physical, biological and human surroundings and their relationships."
  ],
  [
    "What is ecology?",
    ["Study of rocks", "Study of relationships between organisms and their environment", "Study of law", "Study of weather alone"],
    1,
    "Ecology studies how living organisms interact with one another and their surroundings."
  ],
  [
    "What is an ecosystem?",
    ["A group of buildings", "A community of organisms interacting with their physical environment", "A type of pollution", "A government department"],
    1,
    "An ecosystem includes living organisms and non-living components interacting as a system."
  ],
  [
    "Which of the following is a biotic component?",
    ["Water", "Air", "Soil minerals", "Plants"],
    3,
    "Biotic components are living parts of an ecosystem, such as plants and animals."
  ],
  [
    "Which of the following is an abiotic component?",
    ["Bacteria", "Animals", "Sunlight", "Trees"],
    2,
    "Abiotic components are non-living environmental factors such as sunlight, air and water."
  ],
  [
    "What is biodiversity?",
    ["The variety of life forms", "The amount of rainfall", "The number of factories", "The level of noise"],
    0,
    "Biodiversity refers to the variety of living organisms, including diversity within species, between species and of ecosystems."
  ],
  [
    "What is conservation?",
    ["Uncontrolled use of resources", "Protection and careful management of natural resources", "Complete destruction of forests", "Increasing pollution"],
    1,
    "Conservation involves protecting and sustainably managing natural resources."
  ],
  [
    "What is sustainable development?",
    ["Development without considering the future", "Development that meets present needs without compromising future generations' ability to meet their needs", "Stopping all development", "Development based only on industrial growth"],
    1,
    "This is the widely accepted definition given by the Brundtland Commission."
  ],
  [
    "Which report popularised the modern definition of sustainable development?",
    ["Brundtland Report", "Club of Rome Report only", "Montreal Protocol", "Kyoto Protocol"],
    0,
    "The 1987 Brundtland Report, Our Common Future, popularised this definition."
  ],
  [
    "What is pollution?",
    ["Improvement of natural resources", "Introduction of harmful substances or energy into the environment", "Planting trees", "Rainwater harvesting"],
    1,
    "Pollution involves harmful changes to environmental conditions caused by substances or energy."
  ],
  [
    "Which is an example of air pollution?",
    ["Planting trees", "Smoke released from factories", "Rainwater harvesting", "Composting leaves"],
    1,
    "Industrial emissions can release pollutants into the atmosphere."
  ],
  [
    "Which is a major cause of water pollution?",
    ["Untreated sewage discharge", "Rainwater collection", "Afforestation", "Drip irrigation"],
    0,
    "Untreated sewage can introduce harmful substances and microorganisms into water bodies."
  ],
  [
    "Which of the following is a form of land pollution?",
    ["Improper disposal of solid waste", "Solar energy use", "Tree plantation", "Water conservation"],
    0,
    "Improper waste disposal can contaminate soil and damage land quality."
  ],
  [
    "What is noise pollution?",
    ["Unwanted or harmful sound", "Natural sunlight", "Clean drinking water", "Soil fertility"],
    0,
    "Noise pollution is excessive or unwanted sound that may affect health and comfort."
  ],
  [
    "What is the main purpose of environmental impact assessment (EIA)?",
    ["To increase project costs", "To identify and assess likely environmental effects of a proposed project", "To replace all environmental laws", "To prevent every construction project"],
    1,
    "EIA helps decision-makers consider likely environmental impacts before approving covered projects."
  ],
  [
    "Which constitutional Article directs the State to protect and improve the environment?",
    ["Article 14", "Article 48A", "Article 19", "Article 32"],
    1,
    "Article 48A directs the State to protect and improve the environment and safeguard forests and wildlife."
  ],
  [
    "Article 48A was inserted into the Constitution by which Amendment?",
    ["24th Amendment", "42nd Amendment", "44th Amendment", "86th Amendment"],
    1,
    "The 42nd Constitutional Amendment Act, 1976 inserted Article 48A."
  ],
  [
    "Which Article places a fundamental duty on citizens to protect the natural environment?",
    ["Article 51A(g)", "Article 21A", "Article 17", "Article 25"],
    0,
    "Article 51A(g) requires citizens to protect and improve the natural environment and show compassion for living creatures."
  ],
  [
    "Article 51A(g) is part of which constitutional section?",
    ["Fundamental Rights", "Directive Principles of State Policy", "Fundamental Duties", "Emergency Provisions"],
    2,
    "Article 51A is contained in Part IVA, which deals with Fundamental Duties."
  ],
  [
    "Which Fundamental Right has been interpreted by the Supreme Court to include the right to a healthy environment?",
    ["Article 14", "Article 21", "Article 20", "Article 29"],
    1,
    "The Supreme Court has interpreted the right to life under Article 21 to include environmental dimensions such as protection against serious pollution."
  ],
  [
    "Which Article allows a person to approach the Supreme Court for enforcement of Fundamental Rights?",
    ["Article 32", "Article 40", "Article 48A", "Article 51"],
    0,
    "Article 32 provides the right to move the Supreme Court for enforcement of Fundamental Rights."
  ],
  [
    "Which Article empowers High Courts to issue writs?",
    ["Article 226", "Article 123", "Article 280", "Article 368"],
    0,
    "Article 226 gives High Courts power to issue writs for Fundamental Rights and for other purposes."
  ],
  [
    "Which writ may be used to require a public authority to perform a legal public duty?",
    ["Habeas corpus", "Mandamus", "Certiorari", "Quo warranto"],
    1,
    "Mandamus is a writ directing a public authority to perform a duty imposed by law."
  ],
  [
    "Which constitutional provision is associated with the State's duty to organise village panchayats?",
    ["Article 40", "Article 21", "Article 51A", "Article 32"],
    0,
    "Article 40 is a Directive Principle concerning the organisation of village panchayats."
  ],
  [
    "Which constitutional provision concerns the protection of forests and wildlife under the Directive Principles?",
    ["Article 48A", "Article 19(1)(a)", "Article 22", "Article 300A"],
    0,
    "Article 48A specifically addresses environmental protection, forests and wildlife."
  ],
  [
    "Which entry in the Concurrent List deals with forests?",
    ["Entry 17A", "Entry 1", "Entry 84", "Entry 97"],
    0,
    "Entry 17A of the Concurrent List concerns forests."
  ],
  [
    "Which entry in the Concurrent List deals with the protection of wild animals and birds?",
    ["Entry 17B", "Entry 5", "Entry 45", "Entry 66"],
    0,
    "Entry 17B concerns the protection of wild animals and birds."
  ],
  [
    "Which Act is the principal umbrella legislation for environmental protection in India?",
    ["Environment (Protection) Act, 1986", "Indian Contract Act, 1872", "Transfer of Property Act, 1882", "Evidence Act, 1872"],
    0,
    "The Environment (Protection) Act, 1986 provides a broad framework for environmental protection."
  ],
  [
    "The Environment (Protection) Act, 1986 was enacted after which major industrial disaster?",
    ["Bhopal Gas Tragedy", "Chernobyl disaster", "Fukushima disaster", "Titanic disaster"],
    0,
    "The Bhopal Gas Tragedy of 1984 was an important background factor for stronger environmental legislation."
  ],
  [
    "Which section of the Environment (Protection) Act, 1986 empowers the Central Government to take measures to protect and improve the environment?",
    ["Section 3", "Section 10", "Section 19", "Section 25"],
    0,
    "Section 3 empowers the Central Government to take measures for environmental protection and improvement."
  ],
  [
    "Which section of the Environment (Protection) Act, 1986 concerns the power to give directions?",
    ["Section 5", "Section 2", "Section 12", "Section 20"],
    0,
    "Section 5 empowers the Central Government to issue directions, including directions for closure or regulation of industries or stoppage of services."
  ],
  [
    "Which section of the Environment (Protection) Act, 1986 deals with the power to make rules?",
    ["Section 25", "Section 4", "Section 8", "Section 14"],
    0,
    "Section 25 empowers the Central Government to make rules for carrying out the purposes of the Act."
  ],
  [
    "Which Act was enacted to prevent and control water pollution in India?",
    ["Water (Prevention and Control of Pollution) Act, 1974", "Air Act, 1981", "Wildlife Act, 1972", "Forest Rights Act, 2006"],
    0,
    "The Water Act, 1974 aims to prevent and control water pollution and maintain or restore the wholesomeness of water."
  ],
  [
    "Which Act provides for the establishment of the Central and State Pollution Control Boards?",
    ["Water (Prevention and Control of Pollution) Act, 1974", "Indian Easements Act, 1882", "Factories Act, 1948", "Indian Forest Act, 1927"],
    0,
    "The Water Act, 1974 provides for the Central Pollution Control Board and State Pollution Control Boards."
  ],
  [
    "What is the full form of CPCB?",
    ["Central Pollution Control Board", "Central Public Conservation Bureau", "Council for Pollution and Climate Balance", "Central Protection of Coastal Biodiversity"],
    0,
    "CPCB stands for Central Pollution Control Board."
  ],
  [
    "What is the full form of SPCB?",
    ["State Pollution Control Board", "State Public Conservation Bureau", "Supreme Pollution Control Board", "Special Protection Council of Biodiversity"],
    0,
    "SPCB stands for State Pollution Control Board."
  ],
  [
    "Which Act was enacted to prevent, control and abate air pollution?",
    ["Air (Prevention and Control of Pollution) Act, 1981", "Water Act, 1974", "Wildlife Protection Act, 1972", "Biological Diversity Act, 2002"],
    0,
    "The Air Act, 1981 provides a legal framework to prevent, control and abate air pollution."
  ],
  [
    "Under the Air Act, which authority has an important role in advising and coordinating air pollution control?",
    ["Central Pollution Control Board", "Election Commission", "Finance Commission", "University Grants Commission"],
    0,
    "The CPCB performs functions under the Air Act, including advising the Central Government and coordinating State Boards."
  ],
  [
    "Which Act primarily protects wild animals, birds and plants?",
    ["Wild Life (Protection) Act, 1972", "Water Act, 1974", "Air Act, 1981", "Environment Act, 1986"],
    0,
    "The Wild Life (Protection) Act, 1972 provides a framework for wildlife protection and related conservation measures."
  ],
  [
    "Which Act was enacted to provide for the conservation of forests and restrictions on dereservation and non-forest use?",
    ["Forest (Conservation) Act, 1980", "Air Act, 1981", "Water Act, 1974", "Public Liability Insurance Act, 1991"],
    0,
    "The Forest (Conservation) Act, 1980 placed restrictions on certain decisions involving forest land. Its current amended title and scope should be checked when studying recent law."
  ],
  [
    "Which legislation deals with access to biological resources and benefit sharing in India?",
    ["Biological Diversity Act, 2002", "Air Act, 1981", "Water Act, 1974", "Indian Contract Act, 1872"],
    0,
    "The Biological Diversity Act, 2002 provides for conservation, sustainable use and fair sharing of benefits arising from biological resources."
  ],
  [
    "Which Act established the National Green Tribunal?",
    ["National Green Tribunal Act, 2010", "Environment Act, 1986", "Water Act, 1974", "Wildlife Act, 1972"],
    0,
    "The National Green Tribunal Act, 2010 established the National Green Tribunal."
  ],
  [
    "What is the primary role of the National Green Tribunal?",
    ["To decide environmental cases within its statutory jurisdiction", "To conduct university examinations", "To regulate elections", "To hear only criminal appeals"],
    0,
    "The NGT provides specialised adjudication of civil cases involving substantial environmental questions and related matters within its jurisdiction."
  ],
  [
    "Where is the principal bench of the National Green Tribunal located?",
    ["New Delhi", "Mumbai", "Chennai", "Hyderabad"],
    0,
    "The principal bench of the NGT is located in New Delhi."
  ],
  [
    "Which Act provides for public liability insurance for accidents involving hazardous substances?",
    ["Public Liability Insurance Act, 1991", "Water Act, 1974", "Air Act, 1981", "Wildlife Act, 1972"],
    0,
    "The Public Liability Insurance Act, 1991 provides for immediate relief to persons affected by accidents while handling hazardous substances."
  ],
  [
    "What is the main objective of the Public Liability Insurance Act, 1991?",
    ["Providing immediate relief to victims of accidents involving hazardous substances", "Regulating marriage", "Protecting trademarks", "Regulating land registration"],
    0,
    "The Act creates a mechanism for immediate relief on a no-fault basis in specified accidents involving hazardous substances."
  ],
  [
    "Which principle requires the polluter to bear the cost of preventing and remedying pollution?",
    ["Polluter Pays Principle", "Rule of Caveat Emptor", "Doctrine of Eclipse", "Rule of Law"],
    0,
    "The Polluter Pays Principle places the cost of pollution prevention and remediation on the polluter."
  ],
  [
    "Which principle requires preventive action where there is a threat of serious environmental harm despite scientific uncertainty?",
    ["Precautionary Principle", "Doctrine of Merger", "Rule of Estoppel", "Doctrine of Election"],
    0,
    "The Precautionary Principle supports preventive measures where serious or irreversible harm is threatened."
  ],
  [
    "Which doctrine treats certain natural resources as held by the State in trust for the public?",
    ["Public Trust Doctrine", "Doctrine of Indoor Management", "Doctrine of Waiver", "Doctrine of Lis Pendens"],
    0,
    "Under the Public Trust Doctrine, the State has a fiduciary responsibility to protect certain resources for public use."
  ],
  [
    "Which principle considers the interests of future generations?",
    ["Intergenerational Equity", "Res Judicata", "Strict Construction", "Promissory Estoppel"],
    0,
    "Intergenerational equity requires present generations to consider the environmental needs and rights of future generations."
  ],
  [
    "Which principle supports balancing environmental protection with economic and social development?",
    ["Sustainable Development", "Absolute Privilege", "Doctrine of Notice", "Rule of Specific Performance"],
    0,
    "Sustainable development seeks to balance environmental protection with development needs."
  ],
  [
    "Which case is associated with the absolute liability principle in Indian environmental law?",
    ["M.C. Mehta v. Union of India (Oleum Gas Leak case)", "Donoghue v. Stevenson", "Carlill v. Carbolic Smoke Ball Co.", "Kesavananda Bharati v. State of Kerala"],
    0,
    "In the Oleum Gas Leak case, the Supreme Court developed the principle of absolute liability for enterprises engaged in hazardous or inherently dangerous activities."
  ],
  [
    "Who is associated with the development of the absolute liability principle in India?",
    ["Justice P.N. Bhagwati", "Justice H.R. Khanna", "Justice M. Hidayatullah", "Justice A.N. Ray"],
    0,
    "The Supreme Court, in a judgment authored by Justice P.N. Bhagwati, developed the absolute liability principle in the Oleum Gas Leak litigation."
  ],
  [
    "Which case is strongly associated with the Precautionary Principle and Polluter Pays Principle in India?",
    ["Vellore Citizens Welfare Forum v. Union of India", "A.K. Gopalan v. State of Madras", "Golaknath v. State of Punjab", "Bachan Singh v. State of Punjab"],
    0,
    "The Supreme Court recognised the Precautionary Principle and Polluter Pays Principle as essential features of sustainable development in this case."
  ],
  [
    "Which case is associated with the Public Trust Doctrine in Indian environmental law?",
    ["M.C. Mehta v. Kamal Nath", "Maneka Gandhi v. Union of India", "Minerva Mills v. Union of India", "Shreya Singhal v. Union of India"],
    0,
    "In M.C. Mehta v. Kamal Nath, the Supreme Court applied the Public Trust Doctrine to protect natural resources."
  ],
  [
    "Which case linked the right to life with the right to enjoy pollution-free water and air?",
    ["Subhash Kumar v. State of Bihar", "A.K. Kraipak v. Union of India", "B.R. Kapoor v. State of Tamil Nadu", "Kedar Nath Singh v. State of Bihar"],
    0,
    "The Supreme Court observed that Article 21 includes the right to enjoy pollution-free water and air."
  ],
  [
    "Which case is associated with environmental protection and the closure of polluting tanneries?",
    ["M.C. Mehta v. Union of India (Ganga Pollution case)", "Shankari Prasad v. Union of India", "Bharatiya Janata Party v. State of Karnataka", "S.R. Bommai v. Union of India"],
    0,
    "The Ganga pollution litigation addressed industrial discharge and environmental protection, including directions concerning polluting tanneries."
  ],
  [
    "Which case is associated with forest conservation and continuing Supreme Court supervision of forest matters?",
    ["T.N. Godavarman Thirumulpad v. Union of India", "R.C. Cooper v. Union of India", "Kihoto Hollohan v. Zachillhu", "State of Madras v. Champakam Dorairajan"],
    0,
    "The Godavarman case became a major continuing proceeding concerning forest conservation and the meaning of forests."
  ],
  [
    "Which case concerned quarrying activities in the Mussoorie-Dehradun region and environmental protection?",
    ["Rural Litigation and Entitlement Kendra v. State of Uttar Pradesh", "Kesavananda Bharati v. State of Kerala", "D.K. Basu v. State of West Bengal", "Shayara Bano v. Union of India"],
    0,
    "The Supreme Court addressed environmental damage caused by limestone quarrying in the Dehradun-Mussoorie region."
  ],
  [
    "Which case is associated with scientific uncertainty and the Precautionary Principle?",
    ["A.P. Pollution Control Board v. M.V. Nayudu", "Bennett Coleman v. Union of India", "K.M. Nanavati v. State of Maharashtra", "Indra Sawhney v. Union of India"],
    0,
    "The Supreme Court discussed the role of scientific uncertainty and the Precautionary Principle in environmental decision-making."
  ],
  [
    "Which case applied the Polluter Pays Principle to industries responsible for environmental damage?",
    ["Indian Council for Enviro-Legal Action v. Union of India", "Golaknath v. State of Punjab", "S.P. Gupta v. Union of India", "A.D.M. Jabalpur v. Shivkant Shukla"],
    0,
    "The Supreme Court required polluting industries to bear the costs of remedial measures in this environmental case."
  ],
  [
    "What is absolute liability?",
    ["Liability with no exceptions of the kind recognised under the traditional rule of strict liability", "Liability only when a contract exists", "Liability only for intentional harm", "Liability that never involves compensation"],
    0,
    "Indian absolute liability, developed for hazardous enterprises, does not permit the traditional exceptions to strict liability."
  ],
  [
    "Which English case established the rule of strict liability for the escape of dangerous things?",
    ["Rylands v. Fletcher", "Donoghue v. Stevenson", "Carlill v. Carbolic Smoke Ball Co.", "Hadley v. Baxendale"],
    0,
    "Rylands v. Fletcher established a rule of strict liability for the escape of a dangerous thing brought onto land for a non-natural use."
  ],
  [
    "Which of the following is a traditional exception to the rule in Rylands v. Fletcher?",
    ["Act of God", "Every ordinary accident", "Every case of negligence", "Every breach of contract"],
    0,
    "Act of God is one of the recognised traditional exceptions to the rule in Rylands v. Fletcher."
  ],
  [
    "Which principle was developed in Rylands v. Fletcher?",
    ["Strict Liability", "Absolute Liability", "Public Trust Doctrine", "Precautionary Principle"],
    0,
    "The case established the rule commonly known as strict liability."
  ],
  [
    "Which statement best distinguishes absolute liability from the traditional rule in Rylands v. Fletcher?",
    ["Absolute liability does not allow the traditional exceptions available under Rylands v. Fletcher", "Absolute liability always requires a contract", "Strict liability applies only to criminal offences", "There is no difference between them"],
    0,
    "The Indian absolute liability rule is stricter and does not recognise the traditional Rylands exceptions."
  ],
  [
    "What is environmental degradation?",
    ["Deterioration in environmental quality", "Improvement in biodiversity", "Increase in forest cover", "Restoration of polluted rivers"],
    0,
    "Environmental degradation means damage or deterioration to the natural environment."
  ],
  [
    "What is deforestation?",
    ["Large-scale removal of forest cover", "Planting new forests", "Protection of wildlife", "Restoration of wetlands"],
    0,
    "Deforestation involves the clearing or removal of forests, often for agriculture, infrastructure or other uses."
  ],
  [
    "Which of the following is a likely consequence of deforestation?",
    ["Loss of biodiversity", "Automatic increase in forest cover", "Complete prevention of soil erosion", "Elimination of climate change"],
    0,
    "Deforestation can destroy habitats, reduce biodiversity and increase soil erosion."
  ],
  [
    "What is afforestation?",
    ["Establishing forest cover on land that was not recently forested", "Cutting down old forests", "Dumping industrial waste", "Removing all vegetation"],
    0,
    "Afforestation means establishing forest cover on land that was not recently forested."
  ],
  [
    "What is reforestation?",
    ["Replanting trees in an area where forest cover has been lost", "Converting forests into factories", "Removing natural vegetation", "Mining forest land"],
    0,
    "Reforestation restores tree cover in areas where forests have previously existed."
  ],
  [
    "What is desertification?",
    ["Land degradation in arid, semi-arid and dry sub-humid areas", "Formation of new oceans", "Increase in forest biodiversity", "Natural purification of water"],
    0,
    "Desertification is land degradation in dryland areas caused by factors including climatic variations and human activities."
  ],
  [
    "What is global warming?",
    ["Long-term increase in Earth's average surface temperature", "Daily change in local weather", "Decrease in ocean salinity", "Movement of tectonic plates"],
    0,
    "Global warming refers to the long-term rise in Earth's average temperature, mainly driven by human greenhouse gas emissions."
  ],
  [
    "Which gas is a major human-caused greenhouse gas?",
    ["Carbon dioxide", "Oxygen", "Argon", "Neon"],
    0,
    "Carbon dioxide is a major greenhouse gas emitted through fossil fuel use and land-use changes."
  ],
  [
    "Which gas is released in significant quantities by livestock digestion and some waste processes?",
    ["Methane", "Helium", "Neon", "Hydrogen"],
    0,
    "Methane is emitted by sources including livestock, landfills and fossil fuel systems."
  ],
  [
    "What is the greenhouse effect?",
    ["Warming caused when greenhouse gases absorb and re-emit infrared radiation", "Cooling caused only by ocean waves", "The removal of all gases from the atmosphere", "The formation of soil"],
    0,
    "Greenhouse gases trap heat by absorbing and re-emitting infrared radiation in the atmosphere."
  ],
  [
    "Which international agreement aims to limit global warming through national climate commitments?",
    ["Paris Agreement", "Ramsar Convention", "CITES", "Basel Convention"],
    0,
    "The Paris Agreement is a climate treaty adopted in 2015 under the UN Framework Convention on Climate Change."
  ],
  [
    "What is ozone layer depletion?",
    ["Reduction in the concentration of ozone in the stratosphere", "Increase in oxygen in rivers", "Loss of soil nutrients", "Increase in forest cover"],
    0,
    "Ozone layer depletion refers to the reduction of stratospheric ozone that helps shield Earth from harmful ultraviolet radiation."
  ],
  [
    "Which international agreement aims to protect the ozone layer?",
    ["Montreal Protocol", "Kyoto Protocol", "Paris Agreement", "Ramsar Convention"],
    0,
    "The Montreal Protocol, adopted in 1987, controls the production and consumption of ozone-depleting substances."
  ],
  [
    "Which substances were widely used as ozone-depleting chemicals in refrigeration and aerosols?",
    ["Chlorofluorocarbons", "Nitrogen", "Oxygen", "Water vapour"],
    0,
    "Chlorofluorocarbons, or CFCs, were widely used and are important ozone-depleting substances."
  ],
  [
    "What is acid rain?",
    ["Rain or other precipitation made unusually acidic by atmospheric pollutants", "Rainwater collected in tanks", "Rain falling only in forests", "Pure distilled water"],
    0,
    "Sulphur dioxide and nitrogen oxides can react in the atmosphere to form acids that contribute to acid deposition."
  ],
  [
    "Which pollutants are major contributors to acid rain?",
    ["Sulphur dioxide and nitrogen oxides", "Oxygen and hydrogen", "Helium and neon", "Argon and nitrogen"],
    0,
    "Sulphur dioxide and nitrogen oxides react with atmospheric moisture and other substances to form acidic compounds."
  ],
  [
    "What is eutrophication?",
    ["Excessive nutrient enrichment of a water body", "Complete removal of nutrients from soil", "Formation of mountains", "Purification of industrial gases"],
    0,
    "Excess nutrients, especially nitrogen and phosphorus, can cause algal blooms and oxygen depletion in water bodies."
  ],
  [
    "Which activity can contribute to eutrophication?",
    ["Excessive fertiliser runoff", "Planting trees on slopes", "Collecting rainwater", "Using solar panels"],
    0,
    "Fertilisers washed into water bodies can add excess nutrients and contribute to eutrophication."
  ],
  [
    "What is a major source of thermal pollution in water bodies?",
    ["Discharge of heated water from industries or power plants", "Planting mangroves", "Collecting rainwater", "Using compost"],
    0,
    "Discharge of heated cooling water can raise water temperature and affect aquatic organisms."
  ],
  [
    "What is biomedical waste?",
    ["Waste generated during diagnosis, treatment or immunisation of humans or animals, or related research and production", "Only household kitchen waste", "Only construction debris", "Only agricultural soil"],
    0,
    "Biomedical waste is regulated because it may contain infectious or hazardous materials."
  ],
  [
    "Which rules specifically regulate biomedical waste management in India?",
    ["Bio-Medical Waste Management Rules, 2016", "Motor Vehicles Rules, 1989", "Contract Labour Rules, 1971", "Factories Rules only"],
    0,
    "The Bio-Medical Waste Management Rules, 2016 provide requirements for handling and disposal of biomedical waste."
  ],
  [
    "Which rules regulate the management of solid waste in India?",
    ["Solid Waste Management Rules, 2016", "Arms Rules, 2016", "Evidence Rules, 2016", "Civil Procedure Rules, 2016"],
    0,
    "The Solid Waste Management Rules, 2016 establish requirements for segregation, collection, processing and disposal of solid waste."
  ],
  [
    "What is e-waste?",
    ["Discarded electrical and electronic equipment and their components", "Only food waste", "Only garden waste", "Only untreated sewage"],
    0,
    "E-waste includes discarded electrical and electronic equipment and components."
  ],
  [
    "Why is improper disposal of e-waste dangerous?",
    ["It may release hazardous substances into the environment", "It always improves soil quality", "It creates clean drinking water", "It eliminates air pollution"],
    0,
    "Some electronic products contain hazardous substances that can contaminate soil, air and water if improperly handled."
  ],
  [
    "What is the main purpose of rainwater harvesting?",
    ["Collecting and storing rainwater for later use or groundwater recharge", "Increasing industrial smoke", "Destroying wetlands", "Increasing plastic waste"],
    0,
    "Rainwater harvesting helps conserve water and can support groundwater recharge."
  ],
  [
    "What is watershed management?",
    ["Managing land and water resources within a drainage area", "Managing only city traffic", "Regulating marriage registration", "Managing only industrial profits"],
    0,
    "Watershed management aims to conserve soil and water and improve the sustainable use of resources within a watershed."
  ],
  [
    "What is the Ramsar Convention concerned with?",
    ["Conservation and wise use of wetlands", "International trade in endangered species", "Ozone layer protection", "Control of hazardous waste movements"],
    0,
    "The Ramsar Convention is an international treaty concerning wetlands of international importance."
  ],
  [
    "What is CITES primarily concerned with?",
    ["International trade in endangered species of wild animals and plants", "Protection of the ozone layer", "Control of climate change", "Conservation of cultural monuments"],
    0,
    "CITES regulates international trade in listed wild animal and plant species to ensure it does not threaten their survival."
  ],
  [
    "What is the Basel Convention concerned with?",
    ["Control of transboundary movements of hazardous wastes and their disposal", "Protection of wetlands", "International trade in wildlife", "Control of greenhouse gases"],
    0,
    "The Basel Convention controls transboundary movements of hazardous wastes and their environmentally sound management."
  ],
  [
    "Which international conference held in 1972 is regarded as a landmark in global environmental awareness?",
    ["United Nations Conference on the Human Environment at Stockholm", "Rio+20 Conference", "Paris Climate Conference", "Earth Summit 1992"],
    0,
    "The 1972 Stockholm Conference was a major milestone in international environmental law and policy."
  ],
  [
    "Which declaration was adopted at the 1972 Stockholm Conference?",
    ["Stockholm Declaration", "Rio Declaration", "Universal Declaration of Human Rights", "Delhi Declaration"],
    0,
    "The Stockholm Declaration set out principles concerning the human environment."
  ],
  [
    "Which conference is commonly known as the Earth Summit?",
    ["United Nations Conference on Environment and Development, Rio de Janeiro, 1992", "Stockholm Conference, 1972", "Paris Conference, 2015", "Montreal Conference, 1987"],
    0,
    "The 1992 Rio Conference is commonly known as the Earth Summit."
  ],
  [
    "Which document was adopted at the 1992 Earth Summit and contains 27 principles?",
    ["Rio Declaration", "Stockholm Declaration", "Montreal Protocol", "Kyoto Protocol"],
    0,
    "The Rio Declaration on Environment and Development contains 27 principles."
  ],
  [
    "Which international action plan was adopted at the 1992 Earth Summit?",
    ["Agenda 21", "Agenda 2030", "Montreal Plan", "Kyoto Schedule"],
    0,
    "Agenda 21 is a non-binding action plan for sustainable development adopted at the 1992 Earth Summit."
  ],
  [
    "Which international treaty was adopted in 1992 to address climate change?",
    ["United Nations Framework Convention on Climate Change", "Ramsar Convention", "Basel Convention", "CITES"],
    0,
    "The UNFCCC was adopted in 1992 and provides the international framework for addressing climate change."
  ],
  [
    "Which protocol was adopted in 1997 under the UNFCCC?",
    ["Kyoto Protocol", "Montreal Protocol", "Cartagena Protocol", "Nagoya Protocol"],
    0,
    "The Kyoto Protocol was adopted in 1997 and established emission-reduction commitments for certain developed countries."
  ],
  [
    "What is the main objective of environmental law?",
    ["To protect the environment and promote sustainable use of natural resources", "To eliminate all human activity", "To protect only private property", "To regulate only commercial contracts"],
    0,
    "Environmental law seeks to prevent environmental harm, protect ecological systems and support sustainable development."
  ],
  [
    "Which of the following is an example of renewable energy?",
    ["Solar energy", "Coal", "Petroleum", "Natural gas"],
    0,
    "Solar energy is renewable because it comes from a naturally replenished source."
  ],
  [
    "Which of the following is a non-renewable resource?",
    ["Coal", "Wind", "Sunlight", "Tidal energy"],
    0,
    "Coal is a fossil fuel that takes millions of years to form and is considered non-renewable."
  ],
  [
    "What is the main purpose of environmental awareness?",
    ["Encouraging understanding and responsible action to protect the environment", "Encouraging wasteful use of resources", "Promoting illegal wildlife trade", "Increasing pollution"],
    0,
    "Environmental awareness helps people understand environmental problems and adopt responsible practices."
  ],
  [
    "What is the main purpose of environmental education?",
    ["Developing knowledge, values and skills for environmental protection", "Teaching only industrial accounting", "Replacing all legal education", "Promoting unrestricted resource extraction"],
    0,
    "Environmental education develops awareness, knowledge, attitudes and skills that support environmental protection."
  ],
  [
    "Which of the following is an example of in-situ conservation?",
    ["Protecting wildlife in a national park", "Keeping seeds only in a laboratory freezer", "Displaying animals in a museum", "Storing plant samples in a herbarium"],
    0,
    "In-situ conservation protects species in their natural habitats, such as national parks and wildlife sanctuaries."
  ],
  [
    "Which of the following is an example of ex-situ conservation?",
    ["Conservation of seeds in a seed bank", "Protecting elephants in their natural habitat", "Protecting a forest as a national park", "Protecting coral reefs in the sea"],
    0,
    "Ex-situ conservation protects species outside their natural habitats, such as in seed banks and botanical gardens."
  ],
  [
    "What is the main purpose of a national park?",
    ["Protecting wildlife, habitats and ecosystems under law", "Allowing unrestricted hunting", "Promoting uncontrolled mining", "Encouraging illegal logging"],
    0,
    "National parks are protected areas established for conservation under the applicable wildlife law."
  ],
  [
    "What is the main purpose of a wildlife sanctuary?",
    ["Providing legal protection to wildlife and its habitat", "Allowing unrestricted commercial hunting", "Promoting pollution", "Converting all forests into farmland"],
    0,
    "Wildlife sanctuaries are protected areas intended to conserve wildlife and habitats."
  ],
  [
    "What is the main purpose of the National Green Tribunal's specialised structure?",
    ["To provide specialised environmental adjudication", "To decide all election disputes", "To conduct criminal trials of every kind", "To regulate universities"],
    0,
    "The NGT brings specialised judicial and expert knowledge to environmental disputes within its statutory jurisdiction."
  ],
  [
    "Which of the following is a common civil remedy for environmental nuisance?",
    ["Injunction", "Passport", "Probate", "Copyright registration"],
    0,
    "A court may grant an injunction to prevent or restrain a continuing or threatened nuisance, subject to legal requirements."
  ],
  [
    "What is public interest litigation (PIL) in environmental matters?",
    ["A legal action brought to protect public interest, including environmental interests", "A private contract between two companies", "A tax return", "A criminal appeal only"],
    0,
    "PIL has been used in India to raise environmental issues affecting the public and communities."
  ],
  [
    "What is the significance of Article 32 in environmental public interest litigation?",
    ["It enables the Supreme Court to enforce Fundamental Rights", "It creates the Pollution Control Boards", "It establishes the NGT", "It regulates international trade"],
    0,
    "Article 32 allows the Supreme Court to enforce Fundamental Rights, including Article 21 as interpreted by the Court."
  ],
  [
    "Which statement about Article 48A is correct?",
    ["It is a Directive Principle of State Policy", "It is a Fundamental Right", "It is a criminal offence provision", "It is part of the Union List"],
    0,
    "Article 48A is included in Part IV of the Constitution as a Directive Principle of State Policy."
  ],
  [
    "Which statement about Article 51A(g) is correct?",
    ["It is a Fundamental Duty of every citizen", "It is a Directive Principle", "It is a power of the Supreme Court", "It is a provision dealing with emergency powers"],
    0,
    "Article 51A(g) forms part of the Fundamental Duties in Part IVA."
  ],
  [
    "Which of the following best describes environmental justice?",
    ["Fair treatment and meaningful involvement of people in environmental decision-making", "Giving environmental protection only to wealthy communities", "Allowing pollution without limits", "Removing all public participation"],
    0,
    "Environmental justice concerns fairness in the distribution of environmental benefits and burdens and participation in decisions."
  ],
  [
    "What is the main idea behind the principle of common but differentiated responsibilities?",
    ["All States share responsibility, but their responsibilities differ according to relevant circumstances and capabilities", "Only developing countries have environmental duties", "Only developed countries may protect the environment", "No State has environmental responsibilities"],
    0,
    "This principle recognises shared environmental responsibilities while taking account of differing contributions and capacities."
  ],
  [
    "Which of the following is an example of sustainable waste management?",
    ["Reduce, reuse and recycle", "Dumping all waste into rivers", "Burning all waste in open spaces", "Mixing hazardous and household waste"],
    0,
    "The 3Rs reduce waste generation and help conserve resources."
  ],
  [
    "What is the main purpose of environmental audit?",
    ["Reviewing an organisation's environmental performance and compliance", "Preparing marriage certificates", "Conducting criminal sentencing", "Registering trademarks"],
    0,
    "An environmental audit evaluates environmental practices, impacts and compliance with applicable requirements."
  ],
  [
    "What is the main purpose of the National Action Plan on Climate Change (NAPCC)?",
    ["Providing a national framework for addressing climate change through missions", "Regulating marriage and divorce", "Replacing the Constitution", "Establishing criminal courts"],
    0,
    "The NAPCC, launched in 2008, sets out national missions addressing climate change and related development priorities."
  ],
  [
    "Which NAPCC mission focuses on improving energy efficiency?",
    ["National Mission for Enhanced Energy Efficiency", "National Mission for Sustaining the Himalayan Ecosystem", "National Water Mission", "Green India Mission"],
    0,
    "The National Mission for Enhanced Energy Efficiency aims to promote energy efficiency across relevant sectors."
  ],
  [
    "Which NAPCC mission focuses on increasing forest and tree cover?",
    ["Green India Mission", "National Solar Mission", "National Water Mission", "National Mission on Strategic Knowledge for Climate Change"],
    0,
    "The Green India Mission aims to protect, restore and enhance forest and tree cover and related ecosystem services."
  ],
  [
    "Which NAPCC mission focuses on solar energy?",
    ["Jawaharlal Nehru National Solar Mission", "National Water Mission", "Green India Mission", "National Mission for Sustainable Agriculture"],
    0,
    "The National Solar Mission promotes the development and deployment of solar energy."
  ],
  [
    "What is the main purpose of the National Water Mission?",
    ["Conservation of water, minimising wastage and ensuring more equitable distribution", "Increasing plastic production", "Regulating wildlife trade", "Controlling noise in factories only"],
    0,
    "The National Water Mission is one of the NAPCC missions and focuses on water conservation and efficient use."
  ],
  [
    "Which of the following is a practical way to reduce air pollution from transport?",
    ["Using public transport and cleaner vehicles", "Burning waste on roads", "Keeping vehicle engines poorly maintained", "Increasing unnecessary idling"],
    0,
    "Public transport and cleaner vehicles can reduce emissions per passenger or journey."
  ],
  [
    "Which of the following practices helps conserve soil?",
    ["Contour farming and maintaining vegetation cover", "Removing all vegetation", "Uncontrolled deforestation", "Dumping chemical waste"],
    0,
    "Contour farming and vegetation cover can reduce runoff and soil erosion."
  ],
  [
    "What is the main purpose of environmental regulation of hazardous industries?",
    ["Preventing accidents and reducing risks to people and the environment", "Encouraging unsafe handling", "Removing all safety duties", "Allowing unlimited pollution"],
    0,
    "Environmental regulation seeks to control hazardous activities and reduce risks through standards, permissions and safety requirements."
  ],
  [
    "Which statement about the Environment (Protection) Act, 1986 is correct?",
    ["It extends to the whole of India", "It applies only to Delhi", "It applies only to marine areas", "It applies only to government offices"],
    0,
    "The Environment (Protection) Act, 1986 extends to the whole of India."
  ],
  [
    "What is the purpose of environmental standards prescribed under environmental legislation?",
    ["Setting limits or requirements to prevent or control environmental harm", "Allowing unlimited emissions", "Replacing all judicial remedies", "Preventing environmental monitoring"],
    0,
    "Environmental standards set regulatory requirements, such as limits on emissions or discharges."
  ],
  [
    "Which of the following is an important function of State Pollution Control Boards?",
    ["Implementing pollution-control laws and monitoring pollution within the State", "Conducting national elections", "Issuing passports", "Regulating university admissions"],
    0,
    "SPCBs perform statutory functions including monitoring, advising and enforcing pollution-control requirements."
  ],
  [
    "Which of the following best describes the precautionary approach?",
    ["Lack of complete scientific certainty should not automatically delay measures against serious environmental threats", "Action must always wait until damage is irreversible", "Only proven criminal conduct can cause environmental harm", "Environmental risks should never be assessed"],
    0,
    "The precautionary approach supports preventive measures where there are threats of serious or irreversible environmental damage."
  ],
  [
    "What is the central purpose of the Polluter Pays Principle?",
    ["Making the polluter bear pollution-related costs", "Making victims pay all remediation costs", "Exempting industries from environmental duties", "Preventing compensation claims"],
    0,
    "The principle requires polluters to bear the costs associated with preventing and remedying pollution."
  ],
  [
    "Which of the following best describes the Public Trust Doctrine?",
    ["The State must protect certain natural resources for public use and benefit", "The State owns every private household item", "Natural resources may always be transferred without restriction", "Only private companies may protect rivers"],
    0,
    "The doctrine recognises the State's responsibility to protect important resources such as rivers, forests and public lands."
  ],
  [
    "Which of the following is a likely effect of climate change?",
    ["Changes in temperature and rainfall patterns", "Permanent elimination of extreme weather", "Cessation of ocean circulation", "Complete disappearance of greenhouse gases"],
    0,
    "Climate change can alter temperature, rainfall, sea levels and the frequency or intensity of some extreme events."
  ],
  [
    "What is climate change adaptation?",
    ["Adjusting to actual or expected climate impacts", "Increasing greenhouse gas emissions", "Removing all environmental laws", "Stopping all scientific research"],
    0,
    "Adaptation means adjusting natural or human systems to actual or expected climate effects to reduce harm."
  ],
  [
    "What is climate change mitigation?",
    ["Reducing greenhouse gas emissions or increasing their removal", "Building only flood barriers", "Moving people away from coastlines only", "Measuring rainfall without taking action"],
    0,
    "Mitigation addresses the causes of climate change by reducing emissions or enhancing sinks."
  ],
  [
    "Which of the following is an example of climate adaptation?",
    ["Developing flood-resilient infrastructure", "Increasing coal consumption", "Removing coastal wetlands", "Burning agricultural waste openly"],
    0,
    "Flood-resilient infrastructure helps communities adjust to climate-related risks."
  ],
  [
    "Which of the following is an example of climate mitigation?",
    ["Replacing fossil-fuel electricity with renewable energy", "Increasing deforestation", "Increasing methane leakage", "Burning more coal"],
    0,
    "Renewable energy can reduce greenhouse gas emissions when it replaces fossil-fuel energy."
  ],
  [
    "What is the main aim of environmental impact assessment before a project is approved?",
    ["Informing decision-making about likely environmental impacts and safeguards", "Guaranteeing that no environmental impact can occur", "Replacing public consultation in every case", "Automatically approving every project"],
    0,
    "EIA supports informed decisions by identifying likely impacts, alternatives and mitigation measures."
  ],
  [
    "Which of the following is a recognised way for the public to participate in certain environmental clearance processes?",
    ["Public consultation or hearing, where required by the applicable rules", "Secret approval in every case", "Automatic approval without information", "Private voting by project owners only"],
    0,
    "The EIA framework provides for public consultation in specified cases, subject to applicable exemptions and procedures."
  ],
  [
    "What is the basic purpose of environmental restoration?",
    ["Repairing or assisting the recovery of damaged ecosystems", "Increasing ecosystem damage", "Removing all native species", "Preventing ecological recovery"],
    0,
    "Environmental restoration aims to recover ecological functions and improve degraded ecosystems."
  ],
  [
    "Which of the following is an example of a wetland?",
    ["Marsh", "Desert dune", "Dry rocky plateau", "Urban flyover"],
    0,
    "Marshes are wetlands characterised by water-saturated soils and wetland vegetation."
  ],
  [
    "Why are mangrove forests environmentally important?",
    ["They provide coastal protection and habitats for many species", "They increase desertification", "They eliminate all tidal activity", "They prevent all rainfall"],
    0,
    "Mangroves support biodiversity, store carbon and help reduce coastal erosion and storm impacts."
  ],
  [
    "What is the main purpose of environmental legislation?",
    ["Establishing legal duties, standards and remedies for environmental protection", "Encouraging unrestricted pollution", "Removing public health protections", "Replacing all criminal law"],
    0,
    "Environmental legislation creates enforceable frameworks for preventing and addressing environmental harm."
  ]
];

export const environmentalLawQuestions: PracticeQuestion[] = entries.map(
  ([question, options, answer, explanation]) => ({
    subject,
    question,
    options,
    answer,
    explanation
  })
);
