export default function handler(req, res) {
  const baseUrl = 'https://gymfitness-hocmon.vercel.app';
  const urls = [
    '', '/blog', '/products/whey-protein', '/products/creatine', '/products/preworkout'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>${baseUrl}${u}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(xml);
  res.end();
}
