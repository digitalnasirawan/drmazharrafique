import fs from 'fs';

const code = fs.readFileSync('src/data/routesRegistry.ts', 'utf8');

// Match page items
const regex = /pageId:\s*'(P\d+)',[\s\S]*?canonicalPath:\s*'([^']+)',[\s\S]*?publicationStatus:\s*'([^']+)'/g;
let match;
const published = [];
while ((match = regex.exec(code)) !== null) {
  if (match[3] === 'Published') {
    published.push(match[2]);
  }
}

const today = new Date().toISOString().split('T')[0];
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
];

for (const path of published) {
  const url = `https://drmazharrafique.com${path}`;
  const priority = path === '/' ? '1.0' : path.split('/').filter(Boolean).length === 1 ? '0.8' : '0.6';
  xml.push('  <url>');
  xml.push(`    <loc>${url}</loc>`);
  xml.push(`    <lastmod>${today}</lastmod>`);
  xml.push(`    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>`);
  xml.push(`    <priority>${priority}</priority>`);
  xml.push('  </url>');
}

xml.push('</urlset>');
fs.writeFileSync('public/sitemap.xml', xml.join('\n'));
console.log(`Generated sitemap.xml with ${published.length} published URLs`);
