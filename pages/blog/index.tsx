import { GetStaticProps } from 'next'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import BlogHero from '@/components/BlogHero'
import BlogCard from '@/components/BlogCard'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { getBlogPosts, getFeaturedBlogPosts, getBlogCategories, BlogPost, BlogCategory } from '@/lib/contentful'

interface BlogPageProps {
  posts: BlogPost[]
  featuredPosts: BlogPost[]
  categories: BlogCategory[]
}

const BlogPage = ({ posts, featuredPosts, categories }: BlogPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category?.fields.slug === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog de CleanOps",
    "description": "Consejos, tendencias y mejores prácticas para la industria de la limpieza",
    "url": "https://cleanops.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "CleanOps",
      "url": "https://cleanops.com"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://cleanops.com/blog/${post.slug}`,
      "datePublished": post.publishedDate,
      "author": {
        "@type": "Person",
        "name": post.author.fields.name
      }
    }))
  }

  return (
    <>
      <SEO
        title="Blog - CleanOps"
        description="Consejos, tendencias y mejores prácticas para la industria de la limpieza. Mantente actualizado con las últimas innovaciones en gestión de operaciones de limpieza."
        canonical="https://cleanops.com/blog"
        jsonLd={jsonLd}
      />

      <Navbar />
      <main>
        <BlogHero />

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-gradient-to-b from-clean to-light-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                  Artículos Destacados
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  No te pierdas nuestros artículos más populares y relevantes
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <BlogCard
                    key={post.slug}
                    post={post}
                    featured={index === 0}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filters and Search */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === 'all'
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Todos
                </button>
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.slug
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-96">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Todos los Artículos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}
                {selectedCategory !== 'all' && ` en ${categories.find(c => c.slug === selectedCategory)?.name}`}
                {searchTerm && ` para "${searchTerm}"`}
              </p>
            </motion.div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogCard
                    key={post.slug}
                    post={post}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron artículos</h3>
                <p className="text-gray-600">
                  Prueba ajustando los filtros o el término de búsqueda
                </p>
              </motion.div>
            )}
          </div>
        </section>

        <CTA
          title="¿Listo para digitalizar tu empresa de limpieza?"
          subtitle="Únete a cientos de empresas que ya confían en CleanOps para optimizar sus operaciones"
          primaryText="Solicitar Demo Gratuita"
          primaryHref="/contacto"
          secondaryText="Ver Productos"
          secondaryHref="/productos/rutinas"
          background="blue"
        />
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [posts, featuredPosts, categories] = await Promise.all([
      getBlogPosts(),
      getFeaturedBlogPosts(3),
      getBlogCategories()
    ])

    return {
      props: {
        posts,
        featuredPosts,
        categories
      },
      revalidate: 60 // Revalidate every minute
    }
  } catch (error) {
    console.error('Error fetching blog data:', error)

    // Return fallback data to prevent build failures
    return {
      props: {
        posts: [],
        featuredPosts: [],
        categories: []
      },
      revalidate: 60
    }
  }
}

export default BlogPage