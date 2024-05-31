/** app/sitemap.xml/route.ts **/

// dynamically generate sitemap xml data
function getSitemap() {
  const map = [
    {
      url: 'https://contrahr.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://contrahr.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${map
          .map(
            (item) => `
                <url>
                  <loc>${item.url}</loc>
                  <lastmod>${item.lastModified.toISOString()}</lastmod>
                  <changefreq>${item.changeFrequency}</changefreq>
                  <priority>${item.priority}</priority>
                </url>
              `
          )
          .join('')}
        </urlset>
      `
}

export async function GET() {
  return new Response(getSitemap(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
