# ImpactoMedia Website

Website static HTML pentru ImpactoMedia, agenție de marketing specializată în producție video, publicitate PPC și dezvoltare web.

## Dezvoltare locală

Nu există dependențe npm. Pentru a servi site-ul local:

```bash
python3 -m http.server 8000
```

Homepage-ul este disponibil la `http://localhost:8000/`.

## Build SEO

Datele companiei și metadata paginilor sunt centralizate în `seo.config.mjs`.

```bash
npm run build
npm run seo:audit
```

Build-ul generează blocurile metadata și JSON-LD din paginile HTML, plus `sitemap.xml` și `robots.txt`.

Variabile opționale:

- `SITE_URL`: originea deployment-ului. Orice valoare diferită de domeniul de producție activează automat `noindex` și blochează crawling-ul în `robots.txt`.
- `SEO_NOINDEX=true`: protecție explicită pentru staging sau preview.
- `GOOGLE_SITE_VERIFICATION`: adaugă meta tag-ul primit din Google Search Console; nu este setată nicio valoare falsă implicită.

Exemplu pentru staging:

```bash
SITE_URL=https://staging.domeniu.ro npm run build
```

## Hosting

- `_redirects` și `_headers` sunt pregătite pentru platforme compatibile cu formatul Netlify.
- `.htaccess` conține echivalentul pentru Apache.
- Pe altă platformă, regulile trebuie transpuse în configurația furnizorului: HTTPS, non-www, `/index.html` și `/html/index.html` către `/`, plus pagina custom `404.html`.

## Licența template-ului

Designul inițial provine din template-ul Studiova realizat de WrapPixel și distribuit de ThemeWagon sub licență MIT.
