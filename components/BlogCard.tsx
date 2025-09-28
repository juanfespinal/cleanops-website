import { motion } from 'framer-motion'
import Link from 'next/link'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { BlogPost } from '@/lib/contentful'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  index?: number
}

const BlogCard = ({ post, featured = false, index = 0 }: BlogCardProps) => {
  const imageUrl = post.featuredImage?.fields.file.url
  const authorAvatar = post.author?.fields.avatar?.fields.file.url

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl bg-clean shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative">
          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                Destacado
              </span>
            </div>
          )}

          {/* Image */}
          <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
            {imageUrl ? (
              <motion.img
                src={imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <svg className="w-12 h-12 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category & Reading Time */}
            <div className="flex items-center justify-between mb-3">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category?.fields.name || 'Sin categoría'}
              </span>
              <span className="text-gray-500 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime} min
              </span>
            </div>

            {/* Title */}
            <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 font-display ${
              featured ? 'text-2xl' : 'text-xl'
            }`}>
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author & Date */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {authorAvatar ? (
                  <img
                    src={authorAvatar.startsWith('//') ? `https:${authorAvatar}` : authorAvatar}
                    alt={post.author?.fields.name || 'Autor'}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-sm font-medium">
                      {post.author?.fields.name?.charAt(0) || '?'}
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {post.author?.fields.name || 'Autor desconocido'}
                  </p>
                </div>
              </div>

              <time className="text-sm text-gray-500">
                {format(new Date(post.publishedDate), 'dd MMM yyyy', { locale: es })}
              </time>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                  >
                    #{tag.fields.name}
                  </span>
                ))}
              </div>
            )}

            {/* Read More */}
            <div className="mt-4 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
              <span className="mr-2">Leer más</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default BlogCard