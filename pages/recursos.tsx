import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import Link from 'next/link'

const RecursosPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Recursos - CleanOps",
    "description": "Descarga guías gratuitas, calculadoras y recursos útiles para optimizar tu empresa de limpieza",
    "url": "https://cleanops.com/recursos"
  }

  const resources = [
    {
      title: 'Guía de Digitalización para Empresas de Limpieza',
      description: 'Paso a paso completo para digitalizar tu empresa de limpieza, desde la evaluación inicial hasta la implementación.',
      type: 'PDF Guide',
      downloadTime: '5 min read',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Calculadora de ROI CleanOps',
      description: 'Calcula el retorno de inversión estimado al implementar CleanOps en tu empresa según tu tamaño y operación.',
      type: 'Interactive Tool',
      downloadTime: 'Online Tool',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Checklist de Implementación',
      description: 'Lista verificable de todos los pasos necesarios para una implementación exitosa de CleanOps en tu empresa.',
      type: 'Checklist',
      downloadTime: '3 min read',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Plantillas de Rutinas de Limpieza',
      description: 'Plantillas predefinidas para diferentes tipos de espacios: oficinas, hospitales, centros comerciales y más.',
      type: 'Templates',
      downloadTime: 'Multiple files',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: 'Estudio: Tendencias en la Industria de Limpieza 2024',
      description: 'Análisis completo de las tendencias tecnológicas y de mercado que están transformando la industria.',
      type: 'Industry Report',
      downloadTime: '15 min read',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Videos Tutoriales de CleanOps',
      description: 'Serie de videos paso a paso para aprender a usar todas las funcionalidades de CleanOps.',
      type: 'Video Series',
      downloadTime: '2 hours total',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      )
    }
  ]

  const tools = [
    {
      title: 'Calculadora de Ahorro de Tiempo',
      description: 'Descubre cuánto tiempo puedes ahorrar automatizando tus procesos',
      link: '#calculadora-tiempo'
    },
    {
      title: 'Evaluador de Digitalización',
      description: 'Evalúa qué tan digital es tu empresa actualmente',
      link: '#evaluador-digital'
    },
    {
      title: 'Comparador de Costos',
      description: 'Compara costos actuales vs. con CleanOps',
      link: '#comparador-costos'
    }
  ]

  const webinars = [
    {
      title: 'Cómo Digitalizar tu Empresa de Limpieza en 30 Días',
      date: 'Próximo: 15 de Enero, 2025',
      duration: '45 minutos + Q&A',
      status: 'upcoming'
    },
    {
      title: 'Supervisión Inteligente: Mejora la Calidad con IA',
      date: 'Disponible bajo demanda',
      duration: '35 minutos',
      status: 'recorded'
    },
    {
      title: 'ROI Comprobado: Casos de Éxito Reales',
      date: 'Disponible bajo demanda',
      duration: '40 minutos',
      status: 'recorded'
    }
  ]

  return (
    <>
      <SEO
        title="Recursos Gratuitos - CleanOps"
        description="Descarga guías gratuitas, calculadoras y recursos útiles para optimizar tu empresa de limpieza. Herramientas, plantillas y estudios de la industria."
        canonical="https://cleanops.com/recursos"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-dark text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              <defs>
                <pattern id="recursos-hero-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1.5" fill="#ffffff" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#recursos-hero-pattern)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6"
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
                  100% Gratuito
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Recursos para tu Empresa
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Guías, herramientas y recursos gratuitos para optimizar y digitalizar
                  tu empresa de limpieza
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Wave Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-20">
              <path
                fill="white"
                d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,69.3C672,64,768,64,864,69.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              />
            </svg>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Descarga Gratuita
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recursos prácticos para implementar mejoras inmediatas en tu empresa
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-4">
                      {resource.icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-primary uppercase tracking-wide">
                        {resource.type}
                      </div>
                      <div className="text-xs text-gray-500">{resource.downloadTime}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {resource.description}
                  </p>

                  <button className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                    Descargar Gratis
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Tools */}
        <section className="py-20 bg-gradient-to-b from-light to-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Herramientas Interactivas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Calculadoras y evaluadores para tomar decisiones informadas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {tool.description}
                  </p>
                  <a
                    href={tool.link}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                  >
                    Usar Herramienta
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Webinars y Capacitaciones
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sesiones en vivo y grabadas con expertos de la industria
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      webinar.status === 'upcoming'
                        ? 'bg-accent text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {webinar.status === 'upcoming' ? 'Próximo' : 'Disponible'}
                    </span>
                    <span className="text-sm text-gray-600">{webinar.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {webinar.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{webinar.date}</p>

                  <button className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                    {webinar.status === 'upcoming' ? 'Registrarse Gratis' : 'Ver Grabación'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-dark text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Mantente Actualizado
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Recibe nuevos recursos, guías y actualizaciones directamente en tu bandeja de entrada
              </p>

              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="tu@empresa.com"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="bg-accent hover:bg-accent/80 text-white px-8 py-4 rounded-xl font-semibold transition-colors whitespace-nowrap">
                  Suscribirse Gratis
                </button>
              </div>

              <p className="text-sm text-blue-200 mt-4">
                Sin spam. Cancela cuando quieras.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default RecursosPage