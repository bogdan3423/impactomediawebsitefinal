import { access, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import config from "../seo.config.mjs";

const failures = [];
const publicPages = Object.entries(config.pages).filter(([, page]) => !page.redirectAlias);
const escapedSiteUrl = config.siteUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

for (const [file, page] of publicPages) {
  const html = await readFile(file, "utf8");
  const checks = {
    title: /<title>[^<]+<\/title>/i,
    description: /<meta name="description" content="[^"]+">/i,
    robots: /<meta name="robots" content="[^"]+">/i,
    canonical: new RegExp(`<link rel="canonical" href="${escapedSiteUrl}/[^\"]*">`, "i"),
    openGraph: /<meta property="og:title"/i,
    twitter: /<meta name="twitter:card"/i,
    lang: /<html lang="ro">/i
  };
  if (!page.noindex) {
    checks.h1 = /<h1[\s>][\s\S]*?<\/h1>/i;
    checks.jsonLd = /<script type="application\/ld\+json">/i;
    checks.main = /<main[\s>][\s\S]*?<\/main>/i;
  }
  for (const [name, pattern] of Object.entries(checks)) {
    if (!pattern.test(html)) failures.push(`${file}: lipsește ${name}`);
  }

  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|tel:|javascript:)/.test(value) || value.startsWith("[")) continue;
    const pathname = decodeURIComponent(value.split("?")[0]);
    try {
      await access(resolve(dirname(file), pathname));
    } catch {
      failures.push(`${file}: resursă sau link intern lipsă: ${value}`);
    }
  }
}

const sitemap = await readFile("sitemap.xml", "utf8");
const robots = await readFile("robots.txt", "utf8");
if (!sitemap.includes(`<loc>${config.siteUrl}/</loc>`)) failures.push("sitemap.xml: homepage lipsă");
if (!config.forceNoIndex && !robots.includes(`Sitemap: ${config.siteUrl}/sitemap.xml`)) failures.push("robots.txt: sitemap lipsă");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Audit SEO trecut: ${publicPages.length} pagini verificate, fără linkuri interne sau asset-uri lipsă.`);
}
