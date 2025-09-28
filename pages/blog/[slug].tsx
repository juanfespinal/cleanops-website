import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import Navbar from '@/components/Navbar'
import BlogContent from '@/components/BlogContent'
import BlogCard from '@/components/BlogCard'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { getBlogPost, getBlogPosts, getFeaturedBlogPosts, BlogPost } from '@/lib/contentful'

interface BlogPostPageProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const BlogPostPage = ({ post, relatedPosts }: BlogPostPageProps) => {
  const imageUrl = post.featuredImage?.fields.file.url
  const authorAvatar = post.author?.fields.avatar?.fields.file.url

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": imageUrl ? (imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl) : '',
    "datePublished": post.publishedDate,
    "author": {
      "@type": "Person",
      "name": post.author?.fields.name || "CleanOps"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CleanOps",
      "url": "https://cleanops.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://cleanops.com/blog/${post.slug}`
    }
  }

  return (
    <>
      <SEO
        title={`${post.title} - Blog CleanOps`}
        description={post.metaDescription || post.excerpt}
        canonical={`https://cleanops.com/blog/${post.slug}`}
        image={imageUrl ? (imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl) : undefined}
        jsonLd={jsonLd}
      />

      <Navbar />
      <main>
        {/* Article Header */}
        <article className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-gray-900 font-medium truncate">
                  {post.title}
                </li>
              </ol>
            </motion.nav>

            {/* Article Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {post.category?.fields.name || 'Sin categoría'}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readingTime} min de lectura
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {post.excerpt}
            </motion.p>

            {/* Author & Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-between border-b border-gray-200 pb-8 mb-8"
            >
              <div className="flex items-center space-x-4">
                {authorAvatar ? (
                  <img
                    src={authorAvatar.startsWith('//') ? `https:${authorAvatar}` : authorAvatar}
                    alt={post.author?.fields.name || 'Autor'}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-medium">
                      {post.author?.fields.name?.charAt(0) || '?'}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">
                    {post.author?.fields.name || 'Autor desconocido'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {format(new Date(post.publishedDate), "dd 'de' MMMM, yyyy", { locale: es })}
                  </p>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">Compartir:</span>
                <button className="p-2 text-gray-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="p-2 text-gray-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Featured Image */}
          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
            >
              <img
                src={imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl}
                alt={post.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}

          {/* Article Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogContent content={post.content} />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Etiquetas:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                      #{tag.fields.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gradient-to-b from-light-gray to-clean">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                  Artículos Relacionados
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Continúa leyendo sobre temas similares
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogCard
                    key={relatedPost.slug}
                    post={relatedPost}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <CTA
          title="¿Te gustó este artículo?"
          subtitle="Suscríbete a nuestro blog para recibir las últimas novedades del sector"
          primaryText="Solicitar Demo"
          primaryHref="/contacto"
          secondaryText="Ver Más Artículos"
          secondaryHref="/blog"
          background="blue"
        />
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await getBlogPosts()
    const paths = posts.map((post) => ({
      params: { slug: post.slug }
    }))

    return {
      paths,
      fallback: 'blocking'
    }
  } catch (error) {
    console.error('Error generating static paths:', error)
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
}

export const getStaticProps: GetStaticProps<BlogPostPageProps, Params> = async ({ params }) => {
  try {
    if (!params?.slug) {
      return { notFound: true }
    }

    const post = await getBlogPost(params.slug)

    if (!post) {
      return { notFound: true }
    }

    // Get related posts (featured posts excluding current post)
    const allFeaturedPosts = await getFeaturedBlogPosts(6)
    const relatedPosts = allFeaturedPosts
      .filter(p => p.slug !== post.slug)
      .slice(0, 3)

    return {
      props: {
        post,
        relatedPosts
      },
      revalidate: 60
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return { notFound: true }
  }
}

export default BlogPostPage