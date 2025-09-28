import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTAProps {
  title: string
  subtitle?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
  background?: 'blue' | 'gray' | 'white'
  size?: 'sm' | 'md' | 'lg'
}

const CTA = ({
  title,
  subtitle,
  primaryText = "Solicitar Demo",
  primaryHref = "/contacto",
  secondaryText,
  secondaryHref,
  background = 'blue',
  size = 'md'
}: CTAProps) => {
  const bgClasses = {
    blue: 'bg-gradient-to-br from-primary to-primary-dark text-white',
    gray: 'bg-gradient-to-b from-light-gray to-clean text-gray-900',
    white: 'bg-clean text-gray-900 border border-gray-100'
  }

  const sizeClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20'
  }

  return (
    <section className={`${bgClasses[background]} ${sizeClasses[size]} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <defs>
            <pattern id="cta-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill={background === 'blue' ? '#ffffff' : '#1E90FF'} opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: 2 }}
        className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 font-display"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
                background === 'blue' ? 'text-blue-100' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={primaryHref}
                className={`group inline-flex items-center justify-center px-8 py-4 font-semibold rounded-2xl transition-all duration-300 text-lg shadow-lg ${
                  background === 'blue'
                    ? 'bg-clean text-primary hover:bg-gray-50 hover:shadow-xl hover:shadow-white/25'
                    : 'bg-primary text-white hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25'
                }`}
              >
                <span className="mr-2">🚀</span>
                {primaryText}
                <motion.span
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
            {secondaryText && secondaryHref && (
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={secondaryHref}
                  className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-2xl transition-all duration-300 text-lg border-2 ${
                    background === 'blue'
                      ? 'border-white text-white hover:bg-white hover:text-primary'
                      : 'border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {secondaryText}
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA