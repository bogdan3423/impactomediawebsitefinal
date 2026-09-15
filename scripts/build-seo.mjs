import { readFile, writeFile } from "node:fs/promises";
import config from "../seo.config.mjs";

const START = "<!-- SEO:START -->";
const END = "<!-- SEO:END -->";

function absolute(path) {
  return new URL(path, `${config.siteUrl}/`).href;
}

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function organizationSchema() {
  const company = config.organization;
  const schema = {
    "@type": "Organization",
    "@id": `${config.siteUrl}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: `${config.siteUrl}/`,
    logo: {
      "@type": "ImageObject",
      url: absolute(company.logo),
      width: 1536,
      height: 1024
    },
    description: company.description,
    email: company.email,
    telephone: company.telephone,
    address: {
      "@type": "PostalAddress",
      ...company.address
    },
    areaServed: company.areaServed
  };
  if (company.sameAs.length) schema.sameAs = company.sameAs;
  return schema;
}

function pageSchema(page, canonical) {
  const graph = [
    organizationSchema(),
    {
      "@type": "WebSite",
      "@id": `${config.siteUrl}/#website`,
      url: `${config.siteUrl}/`,
      name: config.organization.name,
      inLanguage: "ro-RO",
      publisher: { "@id": `${config.siteUrl}/#organization` }
    },
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: "ro-RO",
      isPartOf: { "@id": `${config.siteUrl}/#website` },
      about: { "@id": `${config.siteUrl}/#organization` }
    }
  ];

  if (page.breadcrumb) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: `${config.siteUrl}/` },
        { "@type": "ListItem", position: 2, name: page.breadcrumb, item: canonical }
      ]
    });
  }

  if (page.services) {
    page.services.forEach(([name, description], index) => {
      graph.push({
        "@type": "Service",
        "@id": `${canonical}#service-${index + 1}`,
        name,
        description,
        provider: { "@id": `${config.siteUrl}/#organization` },
        areaServed: config.organization.areaServed,
        url: canonical
      });
    });
  }

  if (page.faq) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: page.faq.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text }
      }))
    });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2).replaceAll("<", "\\u003c");
}

function metadata(page) {
  const canonical = absolute(page.path);
  const image = absolute(config.socialImage.path);
  const robots = page.noindex || config.forceNoIndex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const tags = [
    `  <title>${escapeAttribute(page.title)}</title>`,
    `  <meta name="description" content="${escapeAttribute(page.description)}">`,
    `  <meta name="robots" content="${robots}">`,
    `  <link rel="canonical" href="${canonical}">`,
    `  <meta property="og:locale" content="ro_RO">`,
    `  <meta property="og:type" content="${page.type || "website"}">`,
    `  <meta property="og:site_name" content="${config.organization.name}">`,
    `  <meta property="og:title" content="${escapeAttribute(page.title)}">`,
    `  <meta property="og:description" content="${escapeAttribute(page.description)}">`,
    `  <meta property="og:url" content="${canonical}">`,
    `  <meta property="og:image" content="${image}">`,
    `  <meta property="og:image:width" content="${config.socialImage.width}">`,
    `  <meta property="og:image:height" content="${config.socialImage.height}">`,
    `  <meta property="og:image:alt" content="${escapeAttribute(config.socialImage.alt)}">`,
    `  <meta name="twitter:card" content="summary_large_image">`,
    `  <meta name="twitter:title" content="${escapeAttribute(page.title)}">`,
    `  <meta name="twitter:description" content="${escapeAttribute(page.description)}">`,
    `  <meta name="twitter:image" content="${image}">`,
    `  <meta name="twitter:image:alt" content="${escapeAttribute(config.socialImage.alt)}">`,
    `  <meta name="theme-color" content="#111111">`
  ];

  if (config.googleSiteVerification) {
    tags.push(`  <meta name="google-site-verification" content="${escapeAttribute(config.googleSiteVerification)}">`);
  }
  if (!page.noindex && !page.redirectAlias) {
    tags.push(`  <script type="application/ld+json">\n${pageSchema(page, canonical)}\n  </script>`);
  }
  return `${START}\n${tags.join("\n")}\n  ${END}`;
}

for (const [file, page] of Object.entries(config.pages)) {
  let source = await readFile(file, "utf8");
  if (file === "html/index.html") {
    source = source
      .replace(/\s*<!--\s+Testimonial Section temporarily disabled[\s\S]*?-->\s*/u, "\n\n")
      .replace(/\s*<!--\s+Pricing Section temporarily disabled[\s\S]*?-->\s*/u, "\n\n");
  }
  const pattern = new RegExp(`${START}[\\s\\S]*?${END}`);
  if (!pattern.test(source)) throw new Error(`Lipsesc markerii SEO în ${file}`);
  await writeFile(file, source.replace(pattern, metadata(page)));
}

const sitemapPages = Object.values(config.pages).filter((page) => !page.noindex && !page.redirectAlias);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapPages.map((page) => `  <url><loc>${absolute(page.path)}</loc></url>`),
  '</urlset>',
  ''
].join("\n");
await writeFile("sitemap.xml", sitemap);

const robots = config.forceNoIndex
  ? "User-agent: *\nDisallow: /\n"
  : `User-agent: *\nAllow: /\n\nSitemap: ${config.siteUrl}/sitemap.xml\n`;
await writeFile("robots.txt", robots);

console.log(`SEO generat pentru ${Object.keys(config.pages).length} pagini; ${sitemapPages.length} URL-uri în sitemap.`);
