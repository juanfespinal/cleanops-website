import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  primaryCTA?: string
  secondaryCTA?: string
  primaryHref?: string
  secondaryHref?: string
}

const Hero = ({
  title,
  subtitle,
  primaryCTA = "Solicitar Demo",
  secondaryCTA = "Calcular Ahorro",
  primaryHref = "/contacto",
  secondaryHref = "/recursos"
}: HeroProps) => {
  return (
    <section className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-display">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
              >
                {primaryCTA}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors duration-200 text-lg"
              >
                {secondaryCTA}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-4 bg-gray-100 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-8 bg-gradient-to-r from-primary to-blue-500 rounded w-32"></div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="w-6 h-6 bg-green-500 rounded mb-2"></div>
                        <div className="h-4 bg-green-200 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-green-100 rounded w-1/2"></div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="w-6 h-6 bg-blue-500 rounded mb-2"></div>
                        <div className="h-4 bg-blue-200 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-blue-100 rounded w-1/2"></div>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <div className="w-6 h-6 bg-orange-500 rounded mb-2"></div>
                        <div className="h-4 bg-orange-200 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-orange-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                          <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                        </div>
                        <div className="w-16 h-6 bg-primary rounded"></div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 rounded w-2/3 mb-1"></div>
                          <div className="h-3 bg-gray-100 rounded w-1/3"></div>
                        </div>
                        <div className="w-16 h-6 bg-green-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero