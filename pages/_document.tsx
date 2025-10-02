import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WF72M2JLHW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WF72M2JLHW');
            `
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />

        {/* Zoho SalesIQ Chat Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`
          }}
        />
        <script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siqcbed808b1c8c5b623c4ac0a667f3242b57e39d656f634ba0af96c1f1d8252f7a"
          defer
        />

        {/* Global LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "CleanOps",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Software líder para digitalizar y automatizar empresas de limpieza en América Latina",
              "url": "https://cleanops.com",
              "provider": {
                "@type": "Organization",
                "name": "CleanOps",
                "url": "https://cleanops.com"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "category": "Software"
              }
            })
          }}
        />
      </body>
    </Html>
  )
}