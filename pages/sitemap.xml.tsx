import { GetServerSideProps } from 'next'

const Sitemap = () => {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Static pages
  const staticPages = [
    '',
    '/productos/rutinas',
    '/productos/supervision',
    '/productos/maquinaria',
    '/productos/materiales',
    '/casos',
    '/recursos',
    '/blog',
    '/contacto'
  ]

  const baseUrl = 'https://cleanops.com'

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${staticPages
  .map((url) => {
    const priority = url === '' ? '1.0' : url.includes('/productos/') ? '0.9' : '0.8'
    const changefreq = url === '' ? 'weekly' : url.includes('/blog') ? 'weekly' : 'monthly'

    return `<url>
<loc>${baseUrl}${url}</loc>
<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority>
</url>`
  })
  .join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  // Instructing the Vercel edge to cache the file for 24 hours
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=86400')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap