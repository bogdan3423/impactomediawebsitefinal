const productionUrl = "https://impactomedia.ro";
const siteUrl = (process.env.SITE_URL || productionUrl).replace(/\/+$/, "");
const forceNoIndex = process.env.SEO_NOINDEX === "true"
  || (Boolean(process.env.SITE_URL) && siteUrl !== productionUrl);
const homeFaq = [
  ["Ce servicii de marketing oferă ImpactoMedia?", "Serviciile noastre principale sunt producția video la locație, cu editare profesională și strategie de postare, campaniile PPC pe Google, Meta și TikTok, precum și website-urile de prezentare și magazinele online."],
  ["Cât durează, de regulă, un proiect?", "Durata depinde de volumul producției, locațiile de filmare, platformele de publicitate, cerințele website-ului și procesul de aprobare. Stabilim un calendar clar înainte de începerea proiectului."],
  ["Fiecare plan de marketing este personalizat?", "Da. Recomandările sunt adaptate brandului, audienței, obiectivelor, resurselor disponibile și bugetului aprobat."],
  ["Cât costă un proiect?", "Prețul este propus după definirea cerințelor de filmare, editare, publicitate sau dezvoltare web și a modelului de colaborare."],
  ["Oferiți asistență continuă pentru campanii?", "Raportarea și optimizarea PPC, producția video recurentă și mentenanța website-ului pot fi incluse în colaborarea convenită."]
];

export default {
  siteUrl,
  forceNoIndex,
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
  organization: {
    name: "ImpactoMedia",
    legalName: "APONTI DIGITAL S.R.L.",
    description: "Agenție de marketing din Cluj-Napoca specializată în producție video, publicitate PPC și dezvoltare web.",
    email: "contact@impactomedia.ro",
    telephone: "+40748030566",
    logo: "/assets/images/logos/logoimpactomedia.png",
    areaServed: "România",
    address: {
      streetAddress: "Str. București nr. 64, bl. D15, sc. 3, et. 3, ap. 65",
      addressLocality: "Cluj-Napoca",
      addressRegion: "Cluj",
      addressCountry: "RO"
    },
    sameAs: []
  },
  socialImage: {
    path: "/assets/images/logos/logoimpactomedia.png",
    width: 1536,
    height: 1024,
    alt: "Logo ImpactoMedia"
  },
  pages: {
    "404.html": {
      path: "/404.html",
      title: "Pagina nu a fost găsită | ImpactoMedia",
      description: "Pagina solicitată nu există. Revino la pagina principală ImpactoMedia sau consultă serviciile agenției.",
      noindex: true
    },
    "index.html": {
      path: "/",
      title: "ImpactoMedia | Marketing video, PPC și dezvoltare web",
      description: "Agenție de marketing din Cluj-Napoca pentru producție video, campanii Google, Meta și TikTok Ads, website-uri de prezentare și magazine online.",
      type: "website",
      faq: homeFaq
    },
    "html/index.html": {
      path: "/",
      title: "ImpactoMedia | Marketing video, PPC și dezvoltare web",
      description: "Agenție de marketing din Cluj-Napoca pentru producție video, campanii Google, Meta și TikTok Ads, website-uri de prezentare și magazine online.",
      redirectAlias: true,
      noindex: true
    },
    "html/services.html": {
      path: "/html/services.html",
      title: "Servicii de marketing video, PPC și web | ImpactoMedia",
      description: "Descoperă serviciile ImpactoMedia: producție și editare video, Google Ads, Meta Ads, TikTok Ads, website-uri de prezentare și magazine online.",
      breadcrumb: "Servicii",
      services: [
        ["Marketing video", "Producție video la locație, editare profesională și strategie de distribuție."],
        ["Publicitate PPC", "Planificare, configurare și optimizare pentru campanii Google Ads, Meta Ads și TikTok Ads."],
        ["Dezvoltare web", "Website-uri de prezentare și magazine online responsive, construite pentru un parcurs clar spre conversie."]
      ]
    },
    "html/about-us.html": {
      path: "/html/about-us.html",
      title: "Despre ImpactoMedia | Agenție de marketing din Cluj-Napoca",
      description: "Cunoaște echipa ImpactoMedia și modul în care conectăm producția video, publicitatea PPC și dezvoltarea web în proiecte coerente.",
      breadcrumb: "Despre noi"
    },
    "html/contact.html": {
      path: "/html/contact.html",
      title: "Contact ImpactoMedia | Agenție de marketing în Cluj-Napoca",
      description: "Contactează ImpactoMedia pentru producție video, campanii PPC, website-uri de prezentare sau magazine online. Suntem în Cluj-Napoca.",
      breadcrumb: "Contact"
    },
    "html/privacy-policy.html": {
      path: "/html/privacy-policy.html",
      title: "Politica de confidențialitate | ImpactoMedia",
      description: "Află cum ImpactoMedia și APONTI DIGITAL S.R.L. colectează, utilizează, protejează și păstrează datele personale transmise prin website.",
      breadcrumb: "Politica de confidențialitate"
    },
    "html/cookie-policy.html": {
      path: "/html/cookie-policy.html",
      title: "Politica de cookie-uri | ImpactoMedia",
      description: "Informații despre cookie-urile, stocarea locală și resursele tehnice externe utilizate de website-ul ImpactoMedia.",
      breadcrumb: "Politica de cookie-uri"
    },
    "html/terms-and-conditions.html": {
      path: "/html/terms-and-conditions.html",
      title: "Termeni și condiții | ImpactoMedia",
      description: "Termenii de utilizare ai website-ului ImpactoMedia și cadrul general pentru solicitări, oferte și colaborări cu APONTI DIGITAL S.R.L.",
      breadcrumb: "Termeni și condiții"
    },
    "html/404.html": {
      path: "/html/404.html",
      title: "Pagina nu a fost găsită | ImpactoMedia",
      description: "Pagina solicitată nu există. Revino la pagina principală ImpactoMedia sau consultă serviciile agenției.",
      noindex: true
    },
    "html/sign-in.html": {
      path: "/html/sign-in.html",
      title: "Autentificare | ImpactoMedia",
      description: "Pagină tehnică de autentificare ImpactoMedia.",
      noindex: true
    },
    "html/sign-up.html": {
      path: "/html/sign-up.html",
      title: "Înregistrare | ImpactoMedia",
      description: "Pagină tehnică de înregistrare ImpactoMedia.",
      noindex: true
    }
  }
};
