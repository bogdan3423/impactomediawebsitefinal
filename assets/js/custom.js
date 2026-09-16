document.addEventListener("DOMContentLoaded", function () {

    // Local Romanian / English language switch
    const englishTranslations = {
        "ImpactoMedia | Marketing video, PPC & Dezvoltare web": "ImpactoMedia | Video Marketing, PPC & Web Development",
        "Servicii | ImpactoMedia": "Services | ImpactoMedia",
        "Meniu": "Menu",
        "Acasă": "Home",
        "Proiecte": "Projects",
        "Servicii": "Services",
        "Resurse": "Resources",
        "Închide": "Close",
        "Suntem o echipă de tineri din Cluj-Napoca.": "We are a young team based in Cluj-Napoca.",
        "Facem marketing care atrage atenția și o transformă în acțiune.": "We create marketing that captures attention and turns it into action.",
        "Video și social media, Google Ads, Meta Ads, TikTok Ads și website-uri construite ca un sistem coerent pentru brandul tău.": "Video and social media, Google Ads, Meta Ads, TikTok Ads and websites built as one coherent system for your brand.",
        "Hai să creăm impact": "Let's create impact",
        "Ce facem?": "What we do",
        "Trei competențe principale pentru a atrage atenția, a ajunge la publicul potrivit și a transforma interesul în solicitări sau vânzări.": "Three core capabilities designed to capture attention, reach the right audience and turn interest into enquiries or sales.",
        "Marketing video": "Video marketing",
        "Filmare la locația clientului cu aparatură profesională, editare profesionistă și o strategie clară de postare.": "On-location filming with professional equipment, polished editing and a clear publishing strategy.",
        "Publicitate PPC": "PPC advertising",
        "Campanii Google Ads, Meta Ads și TikTok Ads planificate, gestionate și optimizate în jurul unor obiective comerciale clare.": "Google Ads, Meta Ads and TikTok Ads campaigns planned, managed and optimised around clear business goals.",
        "Website-uri & magazine online": "Websites & online stores",
        "Website-uri de prezentare și magazine online clare, responsive și construite pentru a ghida vizitatorii spre solicitări sau cumpărături.": "Clear, responsive presentation websites and online stores built to guide visitors towards enquiries or purchases.",
        "Descoperă serviciile": "Explore our services",
        "Hai să vezi cu cine am lucrat până acum:": "See who we have worked with so far:",
        "Hai să ne auzim la un telefon": "Let's talk on the phone",
        "Cifre și informații": "Facts & figures",
        "Video, promovare plătită și website-uri construite în jurul obiectivelor tale.": "Video, paid media and websites built around your goals.",
        "Din Cluj-Napoca, ImpactoMedia reunește producția video profesională, campaniile PPC și dezvoltarea web într-o ofertă digitală coerentă.": "Based in Cluj-Napoca, ImpactoMedia brings professional video production, PPC campaigns and web development together into one coherent digital offering.",
        "Producții video realizate pentru campaniile clienților": "Video productions created for client campaigns",
        "K+ euro": "K+ euros",
        "Bugete gestionate în campanii de publicitate plătită": "Budgets managed across paid advertising campaigns",
        "Website-uri de prezentare și magazine online realizate": "Presentation websites and online stores delivered",
        "Hai să discutăm": "Let's talk",
        "Portofoliu": "Portfolio",
        "Proiecte selectate": "Selected projects",
        "Proiectele aprobate vor fi prezentate aici cu un context clar, obiective și atribuirea corectă.": "Approved projects will be presented here with clear context, objectives and proper attribution.",
        "[NUME PROIECT]": "[PROJECT NAME]",
        "Strategie de postare": "Publishing strategy",
        "Website de prezentare": "Presentation website",
        "Dezvoltare web": "Web development",
        "Magazin online": "Online store",
        "Producție video": "Video production",
        "Editare profesională": "Professional editing",
        "Strategie PPC": "PPC strategy",
        "Despre noi": "About us",
        "De ce să ne alegi": "Why choose us",
        "Reunim filmarea la locație, gestionarea promovării plătite și dezvoltarea web într-un singur proces coordonat.": "We bring on-location filming, paid media management and web development together in one coordinated process.",
        "Construim fiecare colaborare în jurul obiectivului, resurselor disponibile și etapelor reale ale proiectului.": "We build each collaboration around the objective, available resources and the actual stages of the project.",
        "Totul lucrează împreună": "Everything works together",
        "Video-ul, campaniile PPC și website-ul sunt planificate ca părți ale aceleiași experiențe, nu ca livrabile izolate.": "Video, PPC campaigns and the website are planned as parts of the same experience, not as isolated deliverables.",
        "Strategie înainte de execuție": "Strategy before execution",
        "Pornim de la public, obiectiv și acțiunea dorită, apoi alegem canalele și execuția potrivite.": "We start with the audience, objective and desired action, then choose the right channels and execution.",
        "Proces clar și colaborativ": "A clear, collaborative process",
        "Stabilim pașii, responsabilitățile și punctele de feedback, astfel încât proiectul să avanseze predictibil.": "We define the steps, responsibilities and feedback points so the project can move forward predictably.",
        "Feedbackul verificat al clienților va fi adăugat aici după aprobare.": "Verified client feedback will be added here after approval.",
        "[INDICATOR]": "[METRIC]",
        "Satisfacție verificată a clienților": "Verified client satisfaction",
        "[NUME CLIENT]": "[CLIENT NAME]",
        "[COMPANIE]": "[COMPANY]",
        "Rezultate aprobate ale campaniilor": "Approved campaign results",
        "Amploarea verificată a colaborărilor": "Verified scale of collaborations",
        "Adaptăm producția, publicitatea și execuția web fiecărui brand, fiecărei audiențe și fiecărui obiectiv comercial.": "We adapt production, advertising and web execution to every brand, audience and business objective.",
        "Echipa": "Team",
        "Cunoaște echipa": "Meet the team",
        "Echipa noastră reunește producția video, promovarea plătită și dezvoltarea web într-un singur proces colaborativ.": "Our team brings video production, paid media and web development together in one collaborative process.",
        "Coordonator proiect & PPC specialist": "Project Coordinator & PPC Specialist",
        "Coordonator proiecte": "Project Coordinator",
        "Întrebări frecvente": "Frequently asked questions",
        "Află cum abordăm producția video, publicitatea plătită și dezvoltarea web pentru diferite nevoi ale afacerii.": "Learn how we approach video production, paid advertising and web development for different business needs.",
        "Ce servicii de marketing oferă ImpactoMedia?": "What marketing services does ImpactoMedia offer?",
        "Serviciile noastre principale sunt producția video la locație, cu editare profesională și strategie de postare, campaniile PPC pe Google, Meta și TikTok, precum și website-urile de prezentare și magazinele online.": "Our core services are on-location video production with professional editing and publishing strategy, PPC campaigns across Google, Meta and TikTok, plus presentation websites and online stores.",
        "Cât durează, de regulă, un proiect?": "How long does a project usually take?",
        "Durata depinde de volumul producției, locațiile de filmare, platformele de publicitate, cerințele website-ului și procesul de aprobare. Stabilim un calendar clar înainte de începerea proiectului.": "Timing depends on production volume, filming locations, advertising platforms, website requirements and the approval process. We agree on a clear schedule before the project starts.",
        "Fiecare plan de marketing este personalizat?": "Is every marketing plan tailored?",
        "Da. Recomandările sunt adaptate brandului, audienței, obiectivelor, resurselor disponibile și bugetului aprobat.": "Yes. Recommendations are tailored to the brand, audience, objectives, available resources and approved budget.",
        "Cât costă un proiect?": "How much does a project cost?",
        "Prețul este propus după definirea cerințelor de filmare, editare, publicitate sau dezvoltare web și a modelului de colaborare.": "Pricing is proposed after defining the filming, editing, advertising or web development requirements and the collaboration model.",
        "Oferiți asistență continuă pentru campanii?": "Do you provide ongoing campaign support?",
        "Raportarea și optimizarea PPC, producția video recurentă și mentenanța website-ului pot fi incluse în colaborarea convenită.": "PPC reporting and optimisation, recurring video production and website maintenance can be included in the agreed collaboration.",
        "Articole recente": "Recent articles",
        "Idei practice din cele două categorii principale: marketing video și publicitate PPC.": "Practical ideas from our two main categories: video marketing and PPC advertising.",
        "Planificarea conținutului video pentru postări consecvente": "Planning video content for consistent publishing",
        "Alegerea canalului PPC potrivit pentru fiecare obiectiv": "Choosing the right PPC channel for each objective",
        "7 tipuri de video care atrag atenția pe social media": "7 types of video that capture attention on social media",
        "Contactează-ne": "Contact us",
        "Spune-ne dacă ai nevoie de conținut video, campanii PPC, un website de prezentare sau un magazin online.": "Tell us whether you need video content, PPC campaigns, a presentation website or an online store.",
        "Folosim datele doar pentru a răspunde solicitării tale. Detalii în": "We use your data only to respond to your enquiry. Details are available in our",
        "Politica de confidențialitate": "Privacy Policy",
        "Trimite mesajul": "Send message",
        "Pregătit să crești": "Ready to grow",
        "cu o direcție clară?": "with a clear direction?",
        "Pregătit să crești cu o direcție clară?": "Ready to grow with a clear direction?",
        "Cluj-Napoca, România": "Cluj-Napoca, Romania",
        "Explorează": "Explore",
        "Termeni și condiții": "Terms & Conditions",
        "Politica de cookie-uri": "Cookie Policy",
        "Termeni": "Terms",
        "Eroare 404": "404 Error",

        "De la primul mesaj până la conversie, conectăm": "From the first message to conversion, we connect",
        "conținutul, promovarea și experiența digitală.": "content, promotion and the digital experience.",
        "Conținut video construit pentru atenție, claritate și distribuție": "Video content built for attention, clarity and distribution",
        "Nu pornim direct cu filmarea. Clarificăm publicul, mesajul și acțiunea pe care trebuie să o provoace materialul. Apoi transformăm ideea într-un concept care poate fi filmat eficient și adaptat canalelor unde va fi publicat.": "We do not start by filming. We first clarify the audience, message and action the content should drive. Then we turn the idea into a concept that can be filmed efficiently and adapted to the channels where it will be published.",
        "Putem prelua întregul flux: strategie, structură, scripting, pregătirea filmării, producție la locație, editare, subtitrări, formate verticale sau orizontale și recomandări de publicare.": "We can handle the full workflow: strategy, structure, scripting, shoot preparation, on-location production, editing, subtitles, vertical or horizontal formats and publishing recommendations.",
        "Video de prezentare": "Presentation video",
        "Reclame video": "Video ads",
        "Conținut educațional": "Educational content",
        "Testimoniale": "Testimonials",
        "Planifică o filmare": "Plan a shoot",
        "Strategie și preproducție": "Strategy and pre-production",
        "Obiective, audiență, direcție creativă, structură de conținut, scenariu, locație și plan de filmare.": "Objectives, audience, creative direction, content structure, script, location and shooting plan.",
        "Producție la locație": "On-location production",
        "Filmare cu echipament profesional, compoziție, lumină, sunet și ghidaj pentru persoanele din cadru.": "Filming with professional equipment, composition, lighting, sound and guidance for the people on camera.",
        "Editare și adaptare": "Editing and adaptation",
        "Selecție cadre, montaj, ritm, sunet, subtitrări și exporturi adaptate fiecărei platforme.": "Shot selection, editing, pacing, sound, subtitles and exports tailored to each platform.",
        "Distribuție": "Distribution",
        "Recomandări privind ordinea publicării, textele de însoțire și reutilizarea materialelor în campanii.": "Recommendations on publishing order, supporting copy and reusing the materials in campaigns.",
        "Campanii plătite care urmăresc o conversie reală": "Paid campaigns focused on real conversions",
        "Definim ce înseamnă o conversie pentru afacerea ta, configurăm măsurarea și construim campaniile în jurul intenției utilizatorului. Optimizarea se bazează pe datele contului, nu pe presupuneri sau indicatori izolați.": "We define what a conversion means for your business, configure measurement and build campaigns around user intent. Optimisation is based on account data, not assumptions or isolated metrics.",
        "Gestionăm Google Ads, Meta Ads și TikTok Ads atunci când canalul se potrivește obiectivului, audienței și materialelor disponibile.": "We manage Google Ads, Meta Ads and TikTok Ads when the channel fits the objective, audience and available creative assets.",
        "· specialist PPC cu pregătire în Google Ads": "· PPC specialist trained in Google Ads",
        "Solicită un audit": "Request an audit",
        "Ce configurăm": "What we configure",
        "Structura campaniilor și gruparea intențiilor": "Campaign structure and intent grouping",
        "Conversii, evenimente și parametri de măsurare": "Conversions, events and measurement parameters",
        "Audiențe, excluderi și remarketing": "Audiences, exclusions and remarketing",
        "Anunțuri, extensii și variante de mesaj": "Ads, assets and message variations",
        "Bugete, priorități și reguli de optimizare": "Budgets, priorities and optimisation rules",
        "Ce urmărim": "What we track",
        "Conversii și valoarea lor pentru business": "Conversions and their business value",
        "Costul per conversie sau achiziție": "Cost per conversion or acquisition",
        "Calitatea traficului și rata de conversie": "Traffic quality and conversion rate",
        "ROAS, când valoarea vânzărilor este disponibilă": "ROAS, when sales value is available",
        "Evoluția rezultatelor în raport cu bugetul": "How results evolve in relation to budget",
        "Obiectivul, perioada, audiența și punctul de plecare al contului.": "The objective, timeframe, audience and account starting point.",
        "Decizii": "Decisions",
        "Schimbările de structură, mesaje, licitare și pagini de destinație.": "Changes to structure, messaging, bidding and landing pages.",
        "Rezultate": "Results",
        "Doar date verificate și aprobate de client, prezentate împreună cu contextul lor.": "Only verified, client-approved data, presented together with its context.",
        "Website-uri care transformă oferta într-un parcurs clar": "Websites that turn your offer into a clear journey",
        "Definim mai întâi ce trebuie să înțeleagă și să facă vizitatorul. Pe această bază construim arhitectura paginilor, ierarhia mesajelor, designul responsive și componentele necesare.": "We first define what visitors need to understand and do. From there, we build the page architecture, message hierarchy, responsive design and required components.",
        "Livrăm website-uri de prezentare și magazine online pregătite pentru lansare, testate pe ecrane diferite și gândite pentru administrare și dezvoltare ulterioară.": "We deliver launch-ready presentation websites and online stores, tested across screen sizes and designed for ongoing management and development.",
        "Discută un website": "Discuss a website",
        "Pentru servicii, companii și branduri care au nevoie de o prezentare clară și de un traseu eficient spre contact.": "For services, companies and brands that need a clear presentation and an efficient path to contact.",
        "Structură și wireframe": "Structure and wireframe",
        "Design responsive": "Responsive design",
        "Pagini și formulare": "Pages and forms",
        "Optimizare tehnică de bază": "Core technical optimisation",
        "Pentru afaceri care trebuie să prezinte produse, să simplifice alegerea și să ofere un flux coerent de cumpărare.": "For businesses that need to present products, simplify choice and provide a coherent purchasing flow.",
        "Categorii și pagini de produs": "Categories and product pages",
        "Coș și proces de comandă": "Cart and checkout process",
        "Plăți și opțiuni de livrare": "Payments and delivery options",
        "Testare înainte de lansare": "Pre-launch testing",
        "Proces comun": "Shared process",
        "Un singur fir logic, indiferent de serviciu": "One clear workflow, whatever the service",
        "Fiecare proiect are livrabile diferite, dar deciziile urmează aceeași ordine.": "Each project has different deliverables, but decisions follow the same order.",
        "Clarificare": "Discovery",
        "Obiective, public, context, resurse disponibile și criterii de succes.": "Objectives, audience, context, available resources and success criteria.",
        "Direcție": "Direction",
        "Propunerea de lucru, prioritățile, livrabilele și calendarul proiectului.": "The proposed approach, priorities, deliverables and project timeline.",
        "Execuție": "Execution",
        "Producție, configurare sau dezvoltare, cu puncte clare de feedback.": "Production, setup or development, with clear feedback milestones.",
        "Lansare": "Launch",
        "Verificare finală, predare, publicare și pașii de optimizare ulterioară.": "Final review, handover, publishing and next optimisation steps.",
        "Înainte să începem": "Before we start",
        "Putem combina mai multe servicii?": "Can we combine multiple services?",
        "Da. Video-ul, promovarea și website-ul pot fi planificate împreună atunci când susțin același obiectiv.": "Yes. Video, promotion and the website can be planned together when they support the same objective.",
        "Cum se stabilește oferta?": "How is the proposal defined?",
        "După ce definim obiectivul, volumul de lucru, livrabilele, calendarul și responsabilitățile fiecărei părți.": "After we define the objective, workload, deliverables, timeline and each party's responsibilities.",
        "Putem începe cu un proiect pilot?": "Can we start with a pilot project?",
        "Da. Pentru multe colaborări este util să începem cu un livrabil sau o perioadă clar delimitată și să extindem ulterior.": "Yes. For many collaborations, it is useful to start with one deliverable or a clearly defined period and expand later.",
        "De ce aveți nevoie din partea clientului?": "What do you need from the client?",
        "Acces la informațiile relevante, materiale de brand, aprobări la timp și o persoană responsabilă pentru feedback.": "Access to relevant information, brand assets, timely approvals and a person responsible for feedback.",
        "Ai un obiectiv concret sau încă definești direcția?": "Do you have a clear objective, or are you still defining the direction?",
        "Spune-ne ce vrei să construiești.": "Tell us what you want to build.",

        "Combinăm": "We combine",
        "video, PPC și web": "video, PPC and web",
        "pentru ca brandurile să comunice clar și să crească online.": "to help brands communicate clearly and grow online.",
        "ImpactoMedia.": "ImpactoMedia.",
        "Marketingul funcționează cel mai bine atunci când mesajul, distribuția și experiența digitală susțin același obiectiv. Din Cluj-Napoca, ajutăm brandurile să transforme o idee clară în materiale video profesioniste, campanii plătite bine direcționate și website-uri construite pentru acțiune.": "Marketing works best when the message, distribution and digital experience support the same objective. From Cluj-Napoca, we help brands turn a clear idea into professional video content, well-targeted paid campaigns and websites built for action.",
        "La ImpactoMedia, filmăm la locația clientului cu aparatură profesională, edităm materialele pentru platformele potrivite și stabilim strategia de postare. Gestionăm și campanii Google Ads, Meta Ads și TikTok Ads și dezvoltăm website-uri de prezentare și magazine online.": "At ImpactoMedia, we film on location with professional equipment, edit content for the right platforms and define the publishing strategy. We also manage Google Ads, Meta Ads and TikTok Ads campaigns and develop presentation websites and online stores.",
        "Piețe și audiențe atinse": "Markets and audiences reached",
        "Contextul campaniei și relevanța audienței ghidează abordarea fiecărui canal.": "Campaign context and audience relevance guide the approach for each channel.",
        "Campanii și inițiative": "Campaigns and initiatives",
        "Planificarea, execuția și optimizarea rămân conectate pe tot parcursul proiectului.": "Planning, execution and optimisation remain connected throughout the project.",
        "Colaborări verificate cu branduri": "Verified brand collaborations",
        "Detaliile aprobate despre colaborări vor fi adăugate aici când devin disponibile.": "Approved details about collaborations will be added here when available.",
        "Website-uri de prezentare": "Presentation websites",
        "Magazine online": "Online stores",

        "Un": "A",
        "spațiu pentru proiecte aprobate,": "space for approved projects,",
        "prezentate cu un context clar și atribuirea corectă.": "presented with clear context and proper attribution.",
        "pregătit pentru detalii verificate despre campanie.": "ready for verified campaign details.",
        "Înapoi": "Back",
        "Servicii livrate": "Services delivered",
        "[SERVICII LIVRATE]": "[SERVICES DELIVERED]",
        "Industrie": "Industry",
        "[INDUSTRIE]": "[INDUSTRY]",
        "Obiectiv": "Objective",
        "[OBIECTIV]": "[OBJECTIVE]",
        "[LINK PROIECT]": "[PROJECT LINK]",
        "Descriere": "Description",
        "Această zonă este rezervată informațiilor aprobate despre cerințele proiectului, audiență, canale și rolul ImpactoMedia. Detaliile vor fi adăugate numai după ce pot fi verificate și publicate.": "This area is reserved for approved information about the project requirements, audience, channels and ImpactoMedia's role. Details will be added only after they can be verified and published.",
        "1. Provocarea": "1. The challenge",
        "[DESCRIEREA PROVOCĂRII — DE COMPLETAT]": "[CHALLENGE DESCRIPTION — TO BE COMPLETED]",
        "2. Abordarea": "2. The approach",
        "[DESCRIEREA ABORDĂRII — DE COMPLETAT]": "[APPROACH DESCRIPTION — TO BE COMPLETED]",

        "Descoperă": "Discover",
        "idei practice": "practical ideas",
        "despre marketing video și campanii PPC care susțin obiectivele afacerii tale.": "about video marketing and PPC campaigns that support your business goals.",
        "Resurse ImpactoMedia": "ImpactoMedia resources",
        "Alege subiectul care te interesează": "Choose the topic that interests you",
        "Filmări · Editare · Strategie": "Filming · Editing · Strategy",
        "Cum planifici o filmare la locația clientului": "How to plan an on-location client shoot",
        "Google Ads · Meta Ads · TikTok Ads": "Google Ads · Meta Ads · TikTok Ads",
        "Cum alegi canalul PPC potrivit pentru fiecare obiectiv": "How to choose the right PPC channel for each objective",
        "Google Ads sau Meta Ads: ce alegi pentru obiectivul tău?": "Google Ads or Meta Ads: which one fits your objective?",
        "conținut video": "strong piece of video content",
        "puternic pornește de la un obiectiv, un mesaj, o locație și un plan de publicare clare.": "starts with a clear objective, message, location and publishing plan.",
        "Producție video la locație": "On-location video production",
        "Derulează pentru a citi": "Scroll to read",
        "La ImpactoMedia, producția video începe cu audiența și scopul fiecărui material. Filmarea, editarea și strategia de postare sunt apoi construite în jurul acestei direcții.": "At ImpactoMedia, video production starts with the audience and purpose of each piece. Filming, editing and publishing strategy are then built around that direction.",
        "Filmarea la locația clientului poate prezenta oamenii, mediul, produsele și procesele reale din spatele unei afaceri. Un plan de producție bine făcut conectează aceste elemente cu mesajul și platforma pe care va fi publicat materialul final.": "Filming at the client's location can showcase the people, environment, products and real processes behind a business. A well-designed production plan connects these elements with the message and the platform where the final content will be published.",
        "Pașii esențiali pentru pregătirea unei producții eficiente la locație:": "Essential steps for preparing an effective on-location production:",
        "1. Definește obiectivul și formatul:": "1. Define the objective and format:",
        "Stabilește ce trebuie să înțeleagă sau să facă audiența, apoi alege formatul, durata și canalul potrivite obiectivului.": "Decide what the audience should understand or do, then choose the format, duration and channel that best fit the objective.",
        "2. Pregătește locația și mesajul:": "2. Prepare the location and message:",
        "Confirmă din timp spațiile de filmare, persoanele, produsele și ideile principale, pentru ca timpul de producție să fie folosit eficient.": "Confirm the filming spaces, people, products and main ideas in advance so production time is used efficiently.",
        "Filmează și editează pentru platforma aleasă:": "Film and edit for the chosen platform:",
        "Aparatura profesională asigură o imagine și un sunet consistente, iar editarea stabilește ritmul, încadrarea, subtitrările și formatul final pentru fiecare platformă selectată.": "Professional equipment ensures consistent image and sound, while editing defines the pace, framing, subtitles and final format for each selected platform.",
        "Planifică publicarea: integrează fiecare material final într-un calendar realist, cu texte clare și o campanie mai amplă, astfel încât conținutul să aibă un rol bine definit după producție.": "Plan publishing: integrate every final asset into a realistic calendar with clear copy and a broader campaign, so the content has a well-defined role after production.",

        "Ai nevoie de": "Do you need",
        "video, PPC sau un website nou?": "video, PPC or a new website?",
        "Spune-ne care este următorul obiectiv al afacerii tale.": "Tell us about your next business objective.",
        "Sună-ne direct": "Call us directly",
        "Nume": "Name",
        "Parolă": "Password",
        "Spune-ne despre proiectul tău": "Tell us about your project",
        "Mesaj": "Message",
        "Contactează echipa ImpactoMedia": "Contact the ImpactoMedia team",
        "Sună ImpactoMedia la +40 748 030 566": "Call ImpactoMedia at +40 748 030 566",
        "Navigare footer": "Footer navigation",
        "Navigare servicii": "Services navigation",
        "Explorează serviciile": "Explore services",
        "articol despre producție video": "article about video production",
        "Pregătirea unei filmări de marketing la locația clientului": "Preparing an on-location marketing shoot",
        "Conținut video pregătit pentru publicare pe social media": "Video content prepared for social media publishing",
        "Analiza performanței unei campanii PPC": "Analysing PPC campaign performance",
        "Google Ads și Meta Ads pentru promovarea unei afaceri": "Google Ads and Meta Ads for promoting a business",
        "Filmarea unui material de marketing video": "Filming a video marketing asset",
        "Filmarea unui material de marketing video cu echipament profesional": "Filming a video marketing asset with professional equipment",
        "Website și magazin online afișate pe tabletă": "Website and online store displayed on a tablet",
        "Website afișat pe o tabletă": "Website displayed on a tablet",
        "utilizator-1": "user-1",
        "utilizator-2": "user-2",
        "utilizator-3": "user-3",
        "utilizator-4": "user-4",
        "citat testimonial": "testimonial quote",
        "Bogdan Rus, coordonator proiecte": "Bogdan Rus, Project Coordinator",
        "Planificarea conținutului video": "Planning video content",
        "Analiza unei campanii PPC": "PPC campaign analysis",
        "Conținut video pentru social media": "Video content for social media",
        "servicii": "services",
        "Categorii blog": "Blog categories",
        "Rețele sociale": "Social networks",
        "Formate video disponibile": "Available video formats",
        "Servicii ImpactoMedia: marketing video, publicitate PPC și dezvoltare de website-uri și magazine online.": "ImpactoMedia services: video marketing, PPC advertising, presentation websites and online store development.",
        "și cu": "and the",

        "Termeni și condiții | ImpactoMedia": "Terms & Conditions | ImpactoMedia",
        "Consultă": "Review",
        "termenii și regulile": "the terms and rules",
        "aplicabile serviciilor noastre.": "that apply to our services.",
        "Ultima actualizare: 5 august 2026": "Last updated: 5 August 2026",
        "Un cadru clar pentru folosirea website-ului": "A clear framework for using the website",
        "Acești termeni reglementează accesarea website-ului ImpactoMedia și transmiterea solicitărilor. Ei nu înlocuiesc oferta sau contractul de servicii semnat cu fiecare client.": "These terms govern access to the ImpactoMedia website and the submission of enquiries. They do not replace the proposal or service agreement signed with each client.",
        "Cuprins": "Contents",
        "Identificarea operatorului": "Operator identification",
        "Scopul termenilor": "Purpose of the terms",
        "Solicitări și oferte": "Enquiries and proposals",
        "Servicii și contract": "Services and agreement",
        "Proprietate intelectuală": "Intellectual property",
        "Utilizare permisă": "Permitted use",
        "Răspundere": "Liability",
        "Consumatori și litigii": "Consumers and disputes",
        "1. Identificarea operatorului": "1. Operator identification",
        "Website-ul": "The website",
        "și marca ImpactoMedia sunt operate de:": "and the ImpactoMedia brand are operated by:",
        "Denumire": "Company name",
        "Nr. Registrul Comerțului": "Trade Register No.",
        "Sediu social": "Registered office",
        "Str. București nr. 64, bl. D15, sc. 3, et. 3, ap. 65, Cluj-Napoca, jud. Cluj, România": "64 București Street, D15 building, entrance 3, 3rd floor, apartment 65, Cluj-Napoca, Cluj County, Romania",
        "Activitatea principală a societății este CAEN 7311 - Activități ale agențiilor de publicitate.": "The company's main activity is CAEN 7311 - Advertising agency activities.",
        "2. Scopul și acceptarea termenilor": "2. Purpose and acceptance of the terms",
        "Prin accesarea website-ului accepți regulile de utilizare descrise aici. Dacă nu ești de acord, te rugăm să nu folosești website-ul. „Utilizator” înseamnă orice vizitator, iar „Client” înseamnă persoana sau organizația care solicită sau contractează servicii.": "By accessing the website, you accept the rules of use described here. If you do not agree, please do not use the website. ‘User’ means any visitor, while ‘Client’ means the person or organisation requesting or contracting services.",
        "Website-ul are rol de prezentare și informare. În forma actuală nu permite crearea unui cont, plata online sau încheierea automată a unui contract. Textele despre servicii, durate ori rezultate sunt generale și nu reprezintă o ofertă contractuală fermă.": "The website is intended for presentation and information. In its current form, it does not allow account creation, online payment or the automatic conclusion of an agreement. Text about services, timelines or results is general and does not constitute a binding contractual offer.",
        "3. Solicitări, comunicări și oferte": "3. Enquiries, communications and proposals",
        "Poți solicita informații prin formular, e-mail sau telefon. Transmiterea unei solicitări nu ne obligă să acceptăm proiectul și nu creează singură un contract. Colaborarea începe numai după acceptarea expresă a unei oferte, comenzi sau a unui contract care stabilește cel puțin serviciile, livrabilele, calendarul, prețul și condițiile de plată.": "You may request information through the form, by email or by phone. Submitting an enquiry does not oblige us to accept the project and does not by itself create an agreement. Collaboration begins only after the express acceptance of a proposal, order or agreement specifying at least the services, deliverables, schedule, price and payment terms.",
        "Utilizatorul trebuie să ofere informații corecte și să aibă dreptul de a comunica datele și materialele trimise. Putem refuza solicitări incomplete, ilicite, incompatibile cu resursele disponibile sau cu standardele profesionale.": "The User must provide accurate information and have the right to share the submitted data and materials. We may refuse enquiries that are incomplete, unlawful or incompatible with available resources or professional standards.",
        "4. Servicii, prețuri și condiții contractuale": "4. Services, prices and contractual terms",
        "ImpactoMedia oferă, în funcție de proiect, producție și editare video, strategie și conținut, publicitate PPC, website-uri de prezentare, magazine online și activități conexe. Descrierea exactă se stabilește în documentele comerciale acceptate de părți.": "Depending on the project, ImpactoMedia provides video production and editing, strategy and content, PPC advertising, presentation websites, online stores and related activities. The exact scope is set out in the commercial documents accepted by the parties.",
        "Prețuri:": "Prices:",
        "sunt personalizate după volum și complexitate. Oferta va preciza moneda, taxele aplicabile, eventualele costuri ale platformelor și calendarul plăților.": "are tailored according to volume and complexity. The proposal will specify the currency, applicable taxes, any platform costs and the payment schedule.",
        "Calendar:": "Schedule:",
        "termenele depind și de furnizarea la timp a materialelor, accesului, aprobărilor și feedbackului de către Client.": "deadlines also depend on the Client providing materials, access, approvals and feedback on time.",
        "Revizii:": "Revisions:",
        "numărul și aria reviziilor sunt cele din ofertă. Cererile suplimentare pot schimba prețul și termenul numai după informare și acceptare.": "the number and scope of revisions are those stated in the proposal. Additional requests may change the price and deadline only after notice and acceptance.",
        "Servicii terțe:": "Third-party services:",
        "bugetele media, licențele, găzduirea, domeniile, aplicațiile și alte costuri externe sunt incluse numai dacă oferta spune expres acest lucru.": "media budgets, licences, hosting, domains, applications and other external costs are included only when expressly stated in the proposal.",
        "Încetare:": "Termination:",
        "condițiile de suspendare, denunțare sau reziliere sunt stabilite în contractul aplicabil și de normele legale obligatorii.": "the conditions for suspension, withdrawal or termination are set out in the applicable agreement and mandatory legal provisions.",
        "Dacă există diferențe între acești termeni și un contract semnat, contractul prevalează pentru serviciile respective.": "If these terms differ from a signed agreement, the agreement prevails for the relevant services.",
        "5. Obligațiile Clientului": "5. Client obligations",
        "Clientul răspunde pentru exactitatea informațiilor, pentru legalitatea produselor și afirmațiilor promovate, pentru obținerea drepturilor asupra materialelor furnizate și pentru aprobările interne sau sectoriale necesare. Clientul va proteja credențialele conturilor și va comunica prompt orice incident ori acces neautorizat.": "The Client is responsible for the accuracy of information, the legality of promoted products and claims, securing rights to supplied materials and obtaining any required internal or sector-specific approvals. The Client will protect account credentials and promptly report any incident or unauthorised access.",
        "Nu vom publica în mod intenționat conținut ilegal, discriminatoriu, înșelător, care încalcă drepturile altora sau regulile platformelor. Putem suspenda activitatea afectată până la clarificare.": "We will not knowingly publish content that is unlawful, discriminatory, misleading or infringes the rights of others or platform rules. We may suspend the affected work until the matter is clarified.",
        "6. Platforme terțe și rezultate": "6. Third-party platforms and results",
        "Google, Meta, TikTok, furnizorii de găzduire, procesatorii de plăți și alte platforme funcționează după propriile reguli, algoritmi și condiții. Modificările, suspendările sau indisponibilitatea lor nu sunt sub controlul ImpactoMedia.": "Google, Meta, TikTok, hosting providers, payment processors and other platforms operate under their own rules, algorithms and terms. Their changes, suspensions or unavailability are outside ImpactoMedia's control.",
        "Aplicăm diligență profesională, însă rezultatele campaniilor și performanța comercială depind de factori precum oferta Clientului, bugetul, concurența, piața, pagina de destinație și deciziile platformelor. Nicio prezentare de pe website nu constituie o garanție privind un număr de vânzări, lead-uri, vizualizări, poziții sau un anumit randament.": "We exercise professional care, but campaign results and commercial performance depend on factors such as the Client's offer, budget, competition, market, landing page and platform decisions. Nothing presented on the website guarantees a specific number of sales, leads, views, positions or return.",
        "7. Proprietate intelectuală": "7. Intellectual property",
        "Conținutul website-ului - inclusiv textele, structura, elementele vizuale, fotografiile, materialele video și mărcile - aparține APONTI DIGITAL S.R.L. ori este folosit în baza unei licențe. Poți vizualiza și distribui linkuri către pagini, dar nu poți copia, republica, vinde, modifica sau folosi comercial materialele fără acord ori fără un alt temei legal.": "The website content - including text, structure, visual elements, photographs, video materials and trademarks - belongs to APONTI DIGITAL S.R.L. or is used under licence. You may view and share links to pages, but may not copy, republish, sell, modify or commercially use the materials without permission or another legal basis.",
        "Drepturile asupra livrabilelor pentru clienți, fișierelor sursă, elementelor preexistente, fonturilor, imaginilor stock și licențelor terțe se stabilesc în oferta sau contractul proiectului. Transferul sau licența convenită operează după plata sumelor aferente, dacă documentele comerciale nu prevăd altfel.": "Rights to client deliverables, source files, pre-existing elements, fonts, stock images and third-party licences are set out in the project proposal or agreement. The agreed transfer or licence takes effect after payment of the relevant amounts, unless the commercial documents provide otherwise.",
        "Proiectele și mărcile clienților sunt prezentate în portofoliu numai în limitele acordurilor și drepturilor aplicabile. Pentru o sesizare privind drepturile de autor sau o marcă, contactează-ne cu identificarea materialului și explicația dreptului invocat.": "Client projects and trademarks are shown in the portfolio only within the limits of applicable agreements and rights. To report a copyright or trademark matter, contact us identifying the material and explaining the right claimed.",
        "8. Utilizarea permisă a website-ului": "8. Permitted use of the website",
        "Este interzisă folosirea website-ului pentru a introduce cod malițios, a încerca accesarea neautorizată, a perturba infrastructura, a colecta automat conținut într-un mod abuziv, a uzurpa identitatea altcuiva ori a transmite conținut ilegal. Putem limita accesul și sesiza autoritățile dacă este necesar pentru securitate sau respectarea legii.": "You may not use the website to introduce malicious code, attempt unauthorised access, disrupt infrastructure, automatically collect content abusively, impersonate another person or transmit unlawful content. We may restrict access and notify the authorities where necessary for security or legal compliance.",
        "9. Confidențialitate și date personale": "9. Confidentiality and personal data",
        "Informațiile confidențiale schimbate într-o colaborare sunt tratate conform contractului și legii. Modul în care prelucrăm datele personale este descris în": "Confidential information exchanged during a collaboration is handled in accordance with the agreement and the law. How we process personal data is described in our",
        ", iar tehnologiile de stocare și resursele externe sunt explicate în": ", while storage technologies and external resources are explained in our",
        "10. Disponibilitate, linkuri și actualitatea informațiilor": "10. Availability, links and current information",
        "Încercăm să menținem website-ul disponibil și informațiile corecte, dar pot exista întreruperi, erori sau conținut care necesită actualizare. Putem modifica ori retrage secțiuni fără notificare prealabilă. Linkurile externe sunt oferite pentru comoditate; nu controlăm și nu aprobăm automat conținutul, securitatea sau politicile website-urilor terțe.": "We aim to keep the website available and its information accurate, but interruptions, errors or content requiring updates may occur. We may change or remove sections without prior notice. External links are provided for convenience; we do not control or automatically endorse the content, security or policies of third-party websites.",
        "11. Răspundere": "11. Liability",
        "În limitele permise de lege, informațiile generale de pe website nu reprezintă consultanță juridică, fiscală sau financiară și nu trebuie folosite ca unic temei pentru o decizie comercială. Răspunderea pentru serviciile contractate este cea stabilită în contractul aplicabil.": "To the extent permitted by law, general information on the website does not constitute legal, tax or financial advice and should not be used as the sole basis for a business decision. Liability for contracted services is as set out in the applicable agreement.",
        "Nimic din acești termeni nu exclude sau limitează răspunderea care nu poate fi exclusă prin lege, drepturile obligatorii ale consumatorilor, răspunderea pentru fraudă ori pentru prejudicii cauzate cu intenție sau culpă gravă.": "Nothing in these terms excludes or limits liability that cannot be excluded by law, mandatory consumer rights, liability for fraud or damage caused intentionally or through gross negligence.",
        "12. Consumatori, reclamații și soluționarea litigiilor": "12. Consumers, complaints and dispute resolution",
        "Pentru o reclamație, scrie mai întâi la": "For a complaint, first write to",
        ", descriind problema și soluția solicitată. Vom încerca o rezolvare amiabilă.": ", describing the issue and the requested solution. We will attempt an amicable resolution.",
        "Dacă ești consumator, beneficiezi de toate drepturile obligatorii prevăzute de legislația română și a Uniunii Europene. Atunci când se încheie efectiv un contract la distanță cu un consumator, informațiile precontractuale, dreptul de retragere și eventualele excepții vor fi comunicate în documentele contractuale, conform naturii serviciului și legii aplicabile.": "If you are a consumer, you benefit from all mandatory rights provided by Romanian and European Union law. When a distance contract is actually concluded with a consumer, pre-contractual information, the right of withdrawal and any exceptions will be communicated in the contractual documents according to the nature of the service and applicable law.",
        "Consumatorii pot consulta mecanismul de Soluționare Alternativă a Litigiilor al ANPC la": "Consumers may consult the ANPC Alternative Dispute Resolution mechanism at",
        "și pot depune o reclamație prin canalele oficiale ANPC.": "and may submit a complaint through the official ANPC channels.",
        "13. Legea aplicabilă și instanțele competente": "13. Governing law and competent courts",
        "Acești termeni sunt guvernați de legea română. Orice neînțelegere va fi abordată mai întâi pe cale amiabilă; dacă nu este posibil, competența aparține instanțelor stabilite conform normelor legale aplicabile. Pentru consumatori, această clauză nu restrânge protecția sau competența obligatorie acordată de lege.": "These terms are governed by Romanian law. Any disagreement will first be addressed amicably; where this is not possible, jurisdiction belongs to the courts determined under applicable legal rules. For consumers, this clause does not restrict any mandatory protection or jurisdiction granted by law.",
        "14. Modificări": "14. Changes",
        "Putem actualiza termenii pentru a reflecta schimbări ale website-ului, serviciilor sau legislației. Versiunea aplicabilă utilizării website-ului este cea publicată la momentul accesării. Modificările nu schimbă retroactiv contractele deja semnate, dacă părțile nu convin altfel sau legea nu impune aceasta.": "We may update these terms to reflect changes to the website, services or law. The version applicable to website use is the one published at the time of access. Changes do not retroactively alter agreements already signed unless the parties agree otherwise or the law requires it.",
        "15. Contact": "15. Contact",
        "E-mail:": "Email:",
        "Telefon:": "Phone:",
        "Sediu: Str. București nr. 64, bl. D15, sc. 3, et. 3, ap. 65, Cluj-Napoca, jud. Cluj, România": "Registered office: 64 București Street, D15 building, entrance 3, 3rd floor, apartment 65, Cluj-Napoca, Cluj County, Romania",
        "Cuprins termeni și condiții": "Terms and conditions contents",
        "Termenii de utilizare ai website-ului ImpactoMedia și cadrul general aplicabil solicitărilor de servicii.": "ImpactoMedia website terms of use and the general framework applicable to service enquiries.",

        "Politica de confidențialitate | ImpactoMedia": "Privacy Policy | ImpactoMedia",
        "Află cum sunt gestionate": "Learn how",
        "datele tale": "your data is handled",
        "atunci când folosești serviciile noastre.": "when you use our services.",
        "Pe scurt": "In brief",
        "ImpactoMedia este marca operată de APONTI DIGITAL S.R.L. Folosim datele pe care ni le trimiți pentru a răspunde solicitărilor și pentru a pregăti sau executa o colaborare. Nu vindem date personale, nu luăm decizii exclusiv automatizate și, în versiunea actuală a website-ului, nu folosim analytics ori pixeli de publicitate.": "ImpactoMedia is the brand operated by APONTI DIGITAL S.R.L. We use the data you send us to respond to enquiries and to prepare or carry out a collaboration. We do not sell personal data, make exclusively automated decisions or, in the current version of the website, use analytics or advertising pixels.",
        "Operatorul datelor": "Data controller",
        "Datele prelucrate": "Data processed",
        "Scopuri și temeiuri": "Purposes and legal bases",
        "Destinatari": "Recipients",
        "Transferuri": "Transfers",
        "Păstrarea datelor": "Data retention",
        "Drepturile tale": "Your rights",
        "Securitate": "Security",
        "1. Cine este operatorul datelor": "1. Who is the data controller",
        "Operatorul website-ului": "The controller of the website",
        "și al datelor descrise în această politică este:": "and of the data described in this policy is:",
        "APONTI DIGITAL S.R.L., operând sub marca ImpactoMedia": "APONTI DIGITAL S.R.L., operating under the ImpactoMedia brand",
        "E-mail": "Email",
        "Telefon": "Phone",
        "Orice întrebare sau solicitare privind datele personale poate fi transmisă la adresa de e-mail de mai sus.": "Any question or request regarding personal data may be sent to the email address above.",
        "2. Ce date putem prelucra și de unde provin": "2. What data we may process and where it comes from",
        "Date de contact și identificare profesională:": "Contact and professional identification data:",
        "nume, adresă de e-mail, număr de telefon, funcție și companie.": "name, email address, phone number, job title and company.",
        "Date incluse în solicitare:": "Data included in an enquiry:",
        "mesajul trimis, obiectivele proiectului, bugetul sau alte informații pe care alegi să ni le comunici.": "the message submitted, project objectives, budget or other information you choose to share with us.",
        "Date despre relația comercială:": "Business relationship data:",
        "corespondență, oferte, aprobări, livrabile, facturi și informații necesare executării contractului.": "correspondence, proposals, approvals, deliverables, invoices and information required to perform the agreement.",
        "Date tehnice:": "Technical data:",
        "adresă IP, data și ora accesării, pagina solicitată, tipul browserului și dispozitivului, sistemul de operare, URL-ul de referință și date de securitate sau eroare înregistrate de server.": "IP address, access date and time, requested page, browser and device type, operating system, referring URL and security or error data recorded by the server.",
        "Datele provin direct de la tine, de la organizația pe care o reprezinți sau sunt generate tehnic când accesezi website-ul. Te rugăm să nu transmiți prin formular date sensibile ori informații care nu sunt necesare solicitării.": "The data comes directly from you, from the organisation you represent or is generated technically when you access the website. Please do not send sensitive data or information unnecessary for your enquiry through the form.",
        "3. De ce folosim datele și care este temeiul legal": "3. Why we use data and the legal basis",
        "Scop": "Purpose",
        "Date": "Data",
        "Temei": "Legal basis",
        "Răspuns la solicitări și programarea unei discuții": "Responding to enquiries and scheduling a discussion",
        "Date de contact și mesaj": "Contact details and message",
        "Demersuri la cererea ta înaintea unui contract (art. 6 alin. 1 lit. b GDPR) și interesul legitim de a gestiona comunicările profesionale (art. 6 alin. 1 lit. f)": "Steps taken at your request before entering into an agreement (Article 6(1)(b) GDPR) and our legitimate interest in managing professional communications (Article 6(1)(f))",
        "Pregătirea ofertei și furnizarea serviciilor": "Preparing a proposal and providing services",
        "Date de contact, proiect și contract": "Contact, project and contractual data",
        "Încheierea și executarea contractului (art. 6 alin. 1 lit. b)": "Entering into and performing an agreement (Article 6(1)(b))",
        "Facturare, evidențe contabile și obligații legale": "Billing, accounting records and legal obligations",
        "Date contractuale și financiare": "Contractual and financial data",
        "Obligație legală (art. 6 alin. 1 lit. c)": "Legal obligation (Article 6(1)(c))",
        "Funcționarea, securitatea și diagnosticarea website-ului": "Website operation, security and diagnostics",
        "Date tehnice și loguri": "Technical data and logs",
        "Interes legitim pentru un website sigur și funcțional (art. 6 alin. 1 lit. f)": "Legitimate interest in a secure and functional website (Article 6(1)(f))",
        "Constatarea, exercitarea sau apărarea unor drepturi": "Establishing, exercising or defending legal claims",
        "Date relevante litigiului": "Data relevant to a dispute",
        "Interes legitim (art. 6 alin. 1 lit. f) și, după caz, obligație legală": "Legitimate interest (Article 6(1)(f)) and, where applicable, legal obligation",
        "Nu transmitem newslettere și nu folosim datele de contact pentru marketing electronic fără un temei legal distinct. Dacă vom introduce astfel de comunicări, vom solicita acordul atunci când legea îl cere și vom oferi o metodă simplă de dezabonare.": "We do not send newsletters or use contact details for electronic marketing without a separate legal basis. If we introduce such communications, we will request consent where required by law and provide a simple unsubscribe method.",
        "4. Cui putem divulga datele": "4. Who we may disclose data to",
        "Accesul este limitat la persoanele care au nevoie de date pentru scopurile de mai sus. Putem utiliza furnizori pentru găzduire, e-mail, mentenanță IT, contabilitate și consultanță juridică, fiecare în limitele rolului său și ale obligațiilor contractuale. Putem transmite date autorităților publice sau instanțelor atunci când legea ne obligă ori când este necesar pentru apărarea unui drept.": "Access is limited to people who need the data for the purposes above. We may use providers for hosting, email, IT maintenance, accounting and legal advice, each within the limits of their role and contractual obligations. We may disclose data to public authorities or courts when required by law or necessary to defend a right.",
        "Website-ul încarcă resurse tehnice de la:": "The website loads technical resources from:",
        ", pentru afișarea fonturilor. Browserul transmite către Google adresa IP și antete tehnice; Google declară că serviciul nu setează sau înregistrează cookie-uri și nu folosește aceste date pentru profilare ori publicitate țintită. Consultă": ", to display fonts. The browser sends the IP address and technical headers to Google; Google states that the service does not set or log cookies and does not use this data for profiling or targeted advertising. See the",
        "informarea Google Fonts": "Google Fonts information",
        ", pentru livrarea componentei Iconify. Furnizorii CDN primesc adresa IP și informațiile tehnice transmise de browser pentru livrare, securitate și analiză operațională. Consultă": ", to deliver the Iconify component. CDN providers receive the IP address and technical information sent by the browser for delivery, security and operational analysis. See the",
        "lista de furnizori jsDelivr": "jsDelivr provider list",
        ", de unde componenta încarcă la cerere datele iconurilor. Consultă": ", from which the component loads icon data on demand. See the",
        "politica Iconify": "Iconify policy",
        "Nu vindem și nu închiriem datele tale personale.": "We do not sell or rent your personal data.",
        "5. Transferuri în afara Spațiului Economic European": "5. Transfers outside the European Economic Area",
        "Unii furnizori tehnici pot prelucra date în afara Spațiului Economic European. Când are loc un astfel de transfer, acesta trebuie să se bazeze pe o decizie de adecvare, clauze contractuale standard ori alt mecanism permis de capitolul V din GDPR. Informații suplimentare despre mecanismele folosite pot fi solicitate la": "Some technical providers may process data outside the European Economic Area. Where such a transfer occurs, it must rely on an adequacy decision, standard contractual clauses or another mechanism permitted under Chapter V of the GDPR. Additional information about the mechanisms used may be requested at",
        "6. Cât timp păstrăm datele": "6. How long we retain data",
        "Solicitările care nu duc la o colaborare: cel mult 24 de luni de la ultima comunicare, dacă nu soliciți ștergerea mai devreme și nu există un motiv legal de păstrare.": "Enquiries that do not lead to a collaboration: no more than 24 months from the last communication, unless you request earlier deletion and there is no legal reason to retain them.",
        "Datele proiectelor și contractelor: pe durata colaborării și ulterior conform termenelor legale de prescripție, contabilitate și arhivare aplicabile.": "Project and contractual data: for the duration of the collaboration and afterwards in accordance with applicable limitation, accounting and archiving periods.",
        "Logurile tehnice aflate sub controlul nostru: de regulă maximum 90 de zile; pot fi păstrate mai mult dacă sunt necesare investigării unui incident ori unei obligații legale.": "Technical logs under our control: generally no more than 90 days; they may be retained longer where needed to investigate an incident or meet a legal obligation.",
        "Cererile privind drepturile GDPR: cât este necesar pentru soluționare și pentru a demonstra respectarea obligațiilor legale.": "GDPR rights requests: for as long as necessary to resolve them and demonstrate compliance with legal obligations.",
        "La expirarea perioadei aplicabile, datele sunt șterse sau anonimizate în condiții rezonabile tehnic.": "At the end of the applicable period, data is deleted or anonymised where technically reasonable.",
        "7. Dacă trebuie să ne furnizezi datele": "7. Whether you must provide data",
        "Furnizarea datelor prin website este voluntară. Avem însă nevoie cel puțin de o metodă de contact și de informațiile esențiale despre solicitare pentru a putea răspunde. Datele cerute prin lege sau prin contract pot fi obligatorii pentru încheierea ori executarea colaborării.": "Providing data through the website is voluntary. However, we need at least one contact method and the essential information about your enquiry in order to respond. Data required by law or contract may be mandatory for entering into or performing the collaboration.",
        "8. Drepturile tale": "8. Your rights",
        "În condițiile GDPR, poți solicita accesul la date, rectificarea, ștergerea, restricționarea prelucrării, portabilitatea și poți formula opoziție la prelucrările bazate pe interes legitim. Dacă o prelucrare se bazează pe consimțământ, îl poți retrage oricând, fără a afecta prelucrarea anterioară.": "Under the GDPR, you may request access, rectification, erasure, restriction of processing and portability, and may object to processing based on legitimate interests. Where processing relies on consent, you may withdraw it at any time without affecting prior processing.",
        "Trimite solicitarea la": "Send your request to",
        ". Putem cere informații suplimentare pentru confirmarea identității. Răspundem, de regulă, în cel mult o lună, cu posibilitatea prelungirii în cazurile prevăzute de GDPR.": ". We may request additional information to confirm your identity. We generally respond within one month, with the possibility of an extension in the cases provided for by the GDPR.",
        "Ai dreptul să depui o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal. Detaliile și formularul sunt disponibile pe": "You have the right to lodge a complaint with the Romanian National Supervisory Authority for Personal Data Processing. Details and the form are available at",
        ". Îți recomandăm să ne contactezi mai întâi pentru a încerca soluționarea directă.": ". We recommend contacting us first so we can try to resolve the matter directly.",
        "9. Decizii automate și profilare": "9. Automated decision-making and profiling",
        "Nu folosim datele colectate prin acest website pentru decizii bazate exclusiv pe prelucrare automată care produc efecte juridice sau te afectează în mod similar semnificativ.": "We do not use data collected through this website for decisions based solely on automated processing that produce legal effects or similarly significantly affect you.",
        "10. Securitatea datelor": "10. Data security",
        "Aplicăm măsuri tehnice și organizatorice proporționale cu riscurile, inclusiv controlul accesului, actualizarea componentelor și limitarea datelor colectate. Nicio transmisie prin internet nu este complet lipsită de risc; dacă identificăm un incident, îl gestionăm și notificăm conform legii.": "We apply technical and organisational measures proportionate to the risks, including access controls, component updates and data minimisation. No internet transmission is entirely risk-free; if we identify an incident, we manage and report it as required by law.",
        "11. Datele minorilor": "11. Children's data",
        "Website-ul și serviciile sunt adresate în principal profesioniștilor și organizațiilor. Nu colectăm cu bună știință date de la copii prin website. Dacă afli că un minor ne-a transmis date fără un temei adecvat, contactează-ne pentru verificare și ștergere.": "The website and services are primarily intended for professionals and organisations. We do not knowingly collect children's data through the website. If you learn that a minor has sent us data without an appropriate basis, contact us so we can verify and delete it.",
        "12. Date prelucrate pentru clienți": "12. Data processed for clients",
        "În unele proiecte de marketing sau dezvoltare web putem prelucra date în numele unui client. Rolurile, instrucțiunile și măsurile aplicabile sunt stabilite separat în contract și, când este necesar, într-un acord de prelucrare a datelor. Această politică descrie activitățile în care APONTI DIGITAL S.R.L. este operator pentru propriul website și propriile relații comerciale.": "In some marketing or web development projects, we may process data on behalf of a client. The applicable roles, instructions and safeguards are set out separately in the agreement and, where necessary, in a data processing agreement. This policy describes activities where APONTI DIGITAL S.R.L. acts as controller for its own website and business relationships.",
        "13. Modificarea politicii": "13. Changes to this policy",
        "Putem actualiza politica atunci când se schimbă website-ul, furnizorii sau cerințele legale. Versiunea curentă este publicată aici, împreună cu data ultimei actualizări. Pentru schimbări care afectează semnificativ persoanele vizate vom folosi și alte metode de informare, dacă legea o cere.": "We may update this policy when the website, providers or legal requirements change. The current version is published here together with the date of the latest update. For changes that significantly affect data subjects, we will use other notification methods where required by law.",
        "14. Contact": "14. Contact",
        "Pentru întrebări, exercitarea drepturilor sau sesizarea unei probleme privind datele personale:": "For questions, exercising your rights or reporting a personal data issue:",
        "Informații despre tehnologiile website-ului sunt disponibile și în": "Information about website technologies is also available in our",
        "Cuprins politica de confidențialitate": "Privacy policy contents",
        "Politica de confidențialitate ImpactoMedia privind datele colectate prin website și comunicările comerciale.": "ImpactoMedia privacy policy regarding data collected through the website and business communications.",

        "Politica de cookie-uri | ImpactoMedia": "Cookie Policy | ImpactoMedia",
        "Informații clare despre": "Clear information about",
        "cookie-uri și resurse externe": "cookies and external resources",
        "Situația actuală": "Current status",
        "ImpactoMedia nu folosește în prezent cookie-uri proprii de analiză, publicitate sau profilare și nu are instalate Google Analytics, Meta Pixel ori TikTok Pixel. Din acest motiv, versiunea actuală nu afișează un banner pentru acceptarea cookie-urilor opționale.": "ImpactoMedia does not currently use first-party analytics, advertising or profiling cookies and does not have Google Analytics, Meta Pixel or TikTok Pixel installed. For this reason, the current version does not display an optional cookie consent banner.",
        "Ce sunt cookie-urile": "What cookies are",
        "Ce folosește site-ul": "What the website uses",
        "Resurse externe": "External resources",
        "Controlul cookie-urilor": "Cookie controls",
        "Schimbări viitoare": "Future changes",
        "1. Ce sunt cookie-urile": "1. What cookies are",
        "Cookie-urile sunt fișiere text de dimensiuni mici pe care un website sau un serviciu terț le poate stoca în browser. Tehnologii similare pot include local storage, session storage, pixeli, identificatori și alte mecanisme care stochează ori citesc informații de pe dispozitiv.": "Cookies are small text files that a website or third-party service may store in the browser. Similar technologies may include local storage, session storage, pixels, identifiers and other mechanisms that store or read information on a device.",
        "În funcție de scop, cookie-urile pot fi strict necesare, funcționale, de analiză sau de marketing. Cookie-urile care nu sunt strict necesare pot fi folosite numai după informare și obținerea acordului, conform legislației aplicabile.": "Depending on their purpose, cookies may be strictly necessary, functional, analytical or marketing-related. Cookies that are not strictly necessary may be used only after providing information and obtaining consent in accordance with applicable law.",
        "2. Ce folosește versiunea actuală a website-ului": "2. What the current website version uses",
        "Categorie": "Category",
        "Status actual": "Current status",
        "Cookie-uri proprii": "First-party cookies",
        "Nu sunt setate prin codul actual": "Not set by the current code",
        "Nu este instalat": "Not installed",
        "Nu urmărim comportamentul vizitatorilor": "We do not track visitor behaviour",
        "Publicitate / remarketing": "Advertising / remarketing",
        "Nu sunt instalați pixeli": "No pixels are installed",
        "Nu profilăm vizitatorii": "We do not profile visitors",
        "Conturi și autentificare": "Accounts and authentication",
        "Nu sunt funcționale": "Not functional",
        "Nu există sesiuni de utilizator": "There are no user sessions",
        "Resurse tehnice externe": "External technical resources",
        "Google Fonts, jsDelivr și Iconify": "Google Fonts, jsDelivr and Iconify",
        "Afișarea fonturilor și iconurilor": "Displaying fonts and icons",
        "Serverul de găzduire poate păstra loguri tehnice ale accesului, precum adresa IP și pagina solicitată. Aceste loguri nu sunt cookie-uri și sunt descrise în": "The hosting server may retain technical access logs, such as the IP address and requested page. These logs are not cookies and are described in our",
        "3. Resurse externe încărcate de browser": "3. External resources loaded by the browser",
        "Chiar dacă nu sunt folosite pentru publicitate sau măsurarea audienței de către ImpactoMedia, unele resurse vizuale sunt solicitate direct de browser de la furnizori externi:": "Although ImpactoMedia does not use them for advertising or audience measurement, some visual resources are requested directly by the browser from external providers:",
        "Furnizor": "Provider",
        "Rol": "Role",
        "Informații tehnice": "Technical information",
        "Livrează familiile de fonturi utilizate în design": "Delivers the font families used in the design",
        "Google primește adresa IP, URL-ul solicitat și antete HTTP. Furnizorul declară că API-ul Google Fonts nu setează și nu înregistrează cookie-uri și nu folosește datele pentru profilare sau publicitate țintită.": "Google receives the IP address, requested URL and HTTP headers. The provider states that the Google Fonts API does not set or log cookies and does not use the data for profiling or targeted advertising.",
        "Livrează fișierul JavaScript al componentei Iconify": "Delivers the Iconify component's JavaScript file",
        "Operatorii CDN primesc adresa IP și informațiile transmise de browser pentru livrare, securitate și analiză operațională; jsDelivr declară că nu urmărește utilizatorii individuali.": "CDN operators receive the IP address and information sent by the browser for delivery, security and operational analysis; jsDelivr states that it does not track individual users.",
        "Livrează la cerere datele iconurilor vizibile": "Delivers visible icon data on demand",
        "Solicitarea tehnică include în mod necesar adresa IP și antetele browserului. Iconify menționează utilizarea Cloudflare pentru anumite servicii și posibilitatea unor mecanisme tehnice de performanță sau securitate.": "The technical request necessarily includes the IP address and browser headers. Iconify mentions using Cloudflare for certain services and possible technical performance or security mechanisms.",
        "Politicile furnizorilor pot fi consultate aici:": "Provider policies are available here:",
        "și": "and",
        "4. Cum controlezi sau ștergi cookie-urile": "4. How to control or delete cookies",
        "Poți vedea, bloca și șterge cookie-urile din setările browserului. Blocarea tuturor cookie-urilor poate afecta funcționarea altor website-uri, iar ștergerea lor elimină preferințele salvate local. Pentru instrucțiuni, consultă secțiunea de ajutor a browserului pe care îl folosești.": "You can view, block and delete cookies in your browser settings. Blocking all cookies may affect how other websites work, while deleting them removes locally saved preferences. For instructions, consult your browser's help section.",
        "În versiunea actuală nu există un centru de preferințe deoarece ImpactoMedia nu setează cookie-uri opționale proprii și nu activează instrumente de analytics sau publicitate.": "The current version does not include a preference centre because ImpactoMedia does not set its own optional cookies or enable analytics or advertising tools.",
        "5. Dacă vom introduce analytics, pixeli sau conținut încorporat": "5. If we introduce analytics, pixels or embedded content",
        "Înainte de a activa o tehnologie opțională care stochează sau citește informații pe dispozitiv, vom actualiza această politică și vom implementa un mecanism de acord care permite acceptarea, refuzul și retragerea consimțământului la fel de ușor. Tehnologiile opționale nu vor fi încărcate înaintea alegerii utilizatorului.": "Before enabling optional technology that stores or reads information on a device, we will update this policy and implement a consent mechanism that makes accepting, refusing and withdrawing consent equally easy. Optional technologies will not load before the user makes a choice.",
        "Politica poate fi actualizată când se schimbă funcționalitățile sau furnizorii. Data de mai sus indică versiunea în vigoare.": "This policy may be updated when functionality or providers change. The date above identifies the current version.",
        "6. Cadrul legal": "6. Legal framework",
        "Informarea are în vedere art. 4 alin. (5)-(6) din Legea nr. 506/2004 și Regulamentul (UE) 2016/679. Stocarea ori accesarea informațiilor de pe dispozitiv este permisă fără acord numai pentru operațiuni tehnice de transmitere sau strict necesare serviciului solicitat expres de utilizator.": "This notice takes into account Article 4(5)-(6) of Law No. 506/2004 and Regulation (EU) 2016/679. Storing or accessing information on a device without consent is permitted only for technical transmission operations or where strictly necessary for a service expressly requested by the user.",
        "Textele oficiale sunt disponibile în": "Official texts are available on the",
        "Portalul Legislativ": "Romanian Legislative Portal",
        "și pe": "and on",
        "7. Contact": "7. Contact",
        "Pentru întrebări despre tehnologiile website-ului:": "For questions about website technologies:",
        "Cuprins politica de cookie-uri": "Cookie policy contents",
        "Informații despre cookie-urile și resursele tehnice utilizate pe website-ul ImpactoMedia.": "Information about cookies and technical resources used on the ImpactoMedia website.",
        "Înapoi sus": "Back to top",

        "Ups! Pagina nu a fost găsită": "Oops! Page not found",
        "Înapoi la pagina principală": "Back to the homepage",
        "Continuă cu": "Continue with",
        "SAU": "OR",
        "Autentificare": "Sign in",
        "Ai uitat parola?": "Forgot your password?",
        "Nu ai încă un cont?": "Don't have an account yet?",
        "Înregistrare": "Sign up",
        "Prin crearea unui cont, ești de acord cu": "By creating an account, you agree to the",
        "Termenii și condițiile": "Terms & Conditions",
        "Ai deja un cont?": "Already have an account?",
        "Autentifică-te": "Sign in",
        "Cuprins termeni și condiții": "Terms and conditions contents"
    };

    function normalizeTranslationText(value) {
        return value.replace(/\s+/g, ' ').trim();
    }

    function getSavedLanguage() {
        try {
            const savedLanguage = window.localStorage.getItem('impactomedia-language');
            if (savedLanguage === 'en' || savedLanguage === 'ro') {
                return savedLanguage;
            }
        } catch (error) {
            // Use the URL fallback below when storage is unavailable.
        }

        const languageFromUrl = new URLSearchParams(window.location.search).get('lang');
        return languageFromUrl === 'en' ? 'en' : 'ro';
    }

    function saveLanguage(language) {
        try {
            window.localStorage.setItem('impactomedia-language', language);
            return true;
        } catch (error) {
            return false;
        }
    }

    function translatePageToEnglish() {
        const ignoredTags = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE']);
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        let currentNode;

        while ((currentNode = walker.nextNode())) {
            const parent = currentNode.parentElement;
            if (!parent || ignoredTags.has(parent.tagName) || parent.closest('[translate="no"]')) {
                continue;
            }
            textNodes.push(currentNode);
        }

        textNodes.forEach(function (node) {
            const key = normalizeTranslationText(node.nodeValue);
            const translation = englishTranslations[key];

            if (!translation) {
                return;
            }

            const leadingWhitespace = node.nodeValue.match(/^\s*/)[0];
            const trailingWhitespace = node.nodeValue.match(/\s*$/)[0];
            node.nodeValue = leadingWhitespace + translation + trailingWhitespace;
        });

        document.querySelectorAll('[placeholder], [aria-label], [title], [alt], meta[name="description"]').forEach(function (element) {
            ['placeholder', 'aria-label', 'title', 'alt', 'content'].forEach(function (attribute) {
                if (!element.hasAttribute(attribute) || element.closest('[translate="no"]')) {
                    return;
                }

                const value = element.getAttribute(attribute);
                const translation = englishTranslations[normalizeTranslationText(value)];
                if (translation) {
                    element.setAttribute(attribute, translation);
                }
            });
        });

        const translatedTitle = englishTranslations[normalizeTranslationText(document.title)];
        if (translatedTitle) {
            document.title = translatedTitle;
        }
    }

    const selectedLanguage = getSavedLanguage();
    const headerActions = document.querySelector('.header-wrapper > .d-flex.align-items-center');

    if (headerActions) {
        const languageToggle = document.createElement('button');
        const nextLanguage = selectedLanguage === 'ro' ? 'en' : 'ro';

        languageToggle.type = 'button';
        languageToggle.className = 'language-toggle notranslate';
        languageToggle.setAttribute('data-language-toggle', '');
        languageToggle.setAttribute('translate', 'no');
        languageToggle.setAttribute('aria-label', selectedLanguage === 'ro'
            ? 'Tradu website-ul în limba engleză'
            : 'Show the website in Romanian');
        languageToggle.title = languageToggle.getAttribute('aria-label');
        languageToggle.innerHTML = '<iconify-icon icon="lucide:languages" aria-hidden="true"></iconify-icon>'
            + '<span>' + nextLanguage.toUpperCase() + '</span>';

        languageToggle.addEventListener('click', function () {
            if (saveLanguage(nextLanguage)) {
                window.location.reload();
                return;
            }

            const fallbackUrl = new URL(window.location.href);
            fallbackUrl.searchParams.set('lang', nextLanguage);
            window.location.href = fallbackUrl.toString();
        });

        headerActions.prepend(languageToggle);
    }

    if (selectedLanguage === 'en') {
        document.documentElement.lang = 'en';
        translatePageToEnglish();
    }

    // Lightweight menu dropdowns (replaces the full Bootstrap JavaScript bundle).
    const dropdownToggles = document.querySelectorAll('[data-bs-toggle="dropdown"]');

    function closeDropdown(toggle) {
        const group = toggle.closest('.btn-group');
        const menu = group && group.querySelector('.dropdown-menu');

        if (menu) {
            menu.classList.remove('show');
        }
        if (group) {
            group.classList.remove('show');
        }
        toggle.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
    }

    function closeAllDropdowns(exceptToggle) {
        dropdownToggles.forEach(function (toggle) {
            if (toggle !== exceptToggle) {
                closeDropdown(toggle);
            }
        });
    }

    dropdownToggles.forEach(function (toggle) {
        const group = toggle.closest('.btn-group');
        const menu = group && group.querySelector('.dropdown-menu');

        if (!menu) {
            return;
        }

        toggle.addEventListener('click', function (event) {
            event.stopPropagation();
            const shouldOpen = !menu.classList.contains('show');
            closeAllDropdowns(toggle);
            menu.classList.toggle('show', shouldOpen);
            group.classList.toggle('show', shouldOpen);
            toggle.classList.toggle('show', shouldOpen);
            toggle.setAttribute('aria-expanded', String(shouldOpen));
        });

        const closeButton = menu.querySelector('.btn-close');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                closeDropdown(toggle);
                toggle.focus();
            });
        }
    });

    document.addEventListener('click', function () {
        closeAllDropdowns();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeAllDropdowns();
        }
    });

    // Lightweight accordions with the same Bootstrap class states and height transition.
    function getCollapseToggle(panel) {
        return document.querySelector('[data-bs-toggle="collapse"][data-bs-target="#' + panel.id + '"]');
    }

    function finishCollapseTransition(panel, show) {
        panel.classList.remove('collapsing');
        panel.classList.add('collapse');
        panel.classList.toggle('show', show);
        panel.style.height = '';

        const toggle = getCollapseToggle(panel);
        if (toggle) {
            toggle.classList.toggle('collapsed', !show);
            toggle.setAttribute('aria-expanded', String(show));
        }
    }

    function setCollapseState(panel, show) {
        if (!panel || panel.classList.contains('collapsing') || panel.classList.contains('show') === show) {
            return;
        }

        const startHeight = panel.getBoundingClientRect().height;
        panel.classList.remove('collapse', 'show');
        panel.classList.add('collapsing');
        panel.style.height = show ? '0px' : startHeight + 'px';
        panel.offsetHeight;

        const onTransitionEnd = function (event) {
            if (event.target === panel && event.propertyName === 'height') {
                finishCollapseTransition(panel, show);
            }
        };
        panel.addEventListener('transitionend', onTransitionEnd, { once: true });

        window.requestAnimationFrame(function () {
            panel.style.height = show ? panel.scrollHeight + 'px' : '0px';
        });

        window.setTimeout(function () {
            if (panel.classList.contains('collapsing')) {
                finishCollapseTransition(panel, show);
            }
        }, 450);
    }

    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            const targetSelector = toggle.getAttribute('data-bs-target');
            const panel = targetSelector && document.querySelector(targetSelector);

            if (!panel) {
                return;
            }

            const shouldOpen = !panel.classList.contains('show');
            const parentSelector = panel.getAttribute('data-bs-parent');

            if (shouldOpen && parentSelector) {
                const parent = document.querySelector(parentSelector);
                if (parent) {
                    parent.querySelectorAll('.accordion-collapse.show').forEach(function (openPanel) {
                        if (openPanel !== panel) {
                            setCollapseState(openPanel, false);
                        }
                    });
                }
            }

            setCollapseState(panel, shouldOpen);
        });
    });

    // Header Scroll
    const siteHeader = document.querySelector("header");

    function updateHeaderState() {
        if (siteHeader) {
            siteHeader.classList.toggle("fixed-header", window.scrollY >= 60);
        }
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });


    // Count numbers when they enter the viewport
    const countElements = document.querySelectorAll('.count');
    const countReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animateCount(element) {
        const target = Number(element.dataset.countTarget || element.textContent.trim());

        if (!Number.isFinite(target)) {
            return;
        }

        if (countReducedMotion) {
            element.textContent = target;
            return;
        }

        const duration = 1300;
        const startTime = performance.now();

        function updateCount(currentTime) {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            element.textContent = Math.round(target * easedProgress);

            if (progress < 1) {
                window.requestAnimationFrame(updateCount);
            }
        }

        element.textContent = '0';
        window.requestAnimationFrame(updateCount);
    }

    if (!('IntersectionObserver' in window)) {
        countElements.forEach(animateCount);
    } else {
        const countObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -8% 0px'
        });

        countElements.forEach(function (element) {
            if (Number.isFinite(Number(element.textContent.trim()))) {
                countObserver.observe(element);
            }
        });
    }


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    if (btn) {
        btn.addEventListener("click", scrollToTop);

        function updateScrollButton() {
            btn.style.display = document.documentElement.scrollTop > 100 || document.body.scrollTop > 100
                ? "flex"
                : "none";
        }

        updateScrollButton();
        window.addEventListener("scroll", updateScrollButton, { passive: true });
    }

    // Load below-the-fold videos only when they approach the viewport.
    const lazyVideos = document.querySelectorAll("video[data-lazy-video]");

    function loadLazyVideo(video) {
        video.querySelectorAll("source[data-src]").forEach(function (source) {
            source.src = source.dataset.src;
            source.removeAttribute("data-src");
        });
        video.load();
        if (video.hasAttribute("autoplay")) {
            video.play().catch(function () {
                // Autoplay may be restricted by browser settings; the poster remains visible.
            });
        }
    }

    if (!("IntersectionObserver" in window)) {
        lazyVideos.forEach(loadLazyVideo);
    } else {
        const videoObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    loadLazyVideo(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: "300px 0px" });

        lazyVideos.forEach(function (video) {
            videoObserver.observe(video);
        });
    }


    // Staggered service titles
    document.querySelectorAll("[data-stagger-title]").forEach(function (title, titleIndex) {
        const label = title.textContent.trim();
        const fragment = document.createDocumentFragment();

        title.setAttribute("aria-label", label);
        title.textContent = "";

        let characterIndex = 0;
        label.split(" ").forEach(function (word, wordIndex, words) {
            const wordWrap = document.createElement("span");
            wordWrap.className = "stagger-title-word";
            wordWrap.setAttribute("aria-hidden", "true");

            Array.from(word).forEach(function (character) {
                const characterWrap = document.createElement("span");
                const baseLayer = document.createElement("span");
                const activeLayer = document.createElement("span");

                characterWrap.className = "stagger-title-char";
                characterWrap.style.setProperty("--char-delay", `${120 + titleIndex * 90 + characterIndex * 18}ms`);

                baseLayer.className = "stagger-title-layer stagger-title-layer-base";
                baseLayer.textContent = character;
                activeLayer.className = "stagger-title-layer stagger-title-layer-active";
                activeLayer.textContent = character;

                characterWrap.append(baseLayer, activeLayer);
                wordWrap.appendChild(characterWrap);
                characterIndex += 1;
            });

            fragment.appendChild(wordWrap);
            if (wordIndex < words.length - 1) {
                fragment.appendChild(document.createTextNode(" "));
                characterIndex += 1;
            }
        });

        title.appendChild(fragment);
    });

    const staggerTitleTriggers = document.querySelectorAll("[data-stagger-trigger]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || reducedMotion) {
        staggerTitleTriggers.forEach(function (trigger) {
            trigger.classList.add("is-title-visible");
        });
    } else {
        const serviceTitleObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-title-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.25,
            rootMargin: "0px 0px -8% 0px"
        });

        staggerTitleTriggers.forEach(function (trigger) {
            serviceTitleObserver.observe(trigger);
        });
    }


    // Aos
	if (window.AOS) {
		try {
			AOS.init({
				once: true,
			});
			document.documentElement.classList.add("aos-active");

			// Independent visibility fallback: content must never remain hidden if
			// the animation library misses a scroll/intersection update.
			const aosElements = document.querySelectorAll("[data-aos]");
			if ("IntersectionObserver" in window) {
				const aosVisibilityObserver = new IntersectionObserver(function (entries, observer) {
					entries.forEach(function (entry) {
						if (entry.isIntersecting) {
							entry.target.classList.add("aos-animate");
							observer.unobserve(entry.target);
						}
					});
				}, { rootMargin: "0px 0px -5% 0px" });

				aosElements.forEach(function (element) {
					aosVisibilityObserver.observe(element);
				});
			} else {
				aosElements.forEach(function (element) {
					element.classList.add("aos-animate");
				});
			}
		} catch (error) {
			document.documentElement.classList.remove("aos-active");
		}
	}

});

