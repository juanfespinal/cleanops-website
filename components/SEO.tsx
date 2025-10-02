import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  url?: string
  canonical?: string
  image?: string
  type?: 'website' | 'article'
  jsonLd?: object | object[]
  keywords?: string
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    section?: string
    tags?: string[]
  }
  noindex?: boolean
}

const SEO = ({
  title,
  description,
  url = 'https://cleanops.com',
  canonical,
  image = 'https://cleanops.com/images/og-image.jpg',
  type = 'website',
  jsonLd,
  keywords,
  article,
  noindex = false
}: SEOProps) => {
  const fullTitle = title.includes('CleanOps') ? title : `${title} | CleanOps`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical || url} />

      {/* Keywords for SEO */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="CleanOps" />
      <meta property="og:locale" content="es_ES" />

      {/* Article specific Open Graph */}
      {article && type === 'article' && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@cleanops" />
      <meta name="twitter:creator" content="@cleanops" />

      {/* Additional SEO */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="language" content="Spanish" />
      <meta name="author" content="CleanOps" />
      <meta name="theme-color" content="#1E90FF" />
      <meta name="msapplication-TileColor" content="#1E90FF" />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        Array.isArray(jsonLd) ? (
          jsonLd.map((data, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
          ))
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )
      )}
    </Head>
  )
}

export default SEO