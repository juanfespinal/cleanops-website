import { GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import CleanHero from '@/components/CleanHero'
import FeaturesGrid from '@/components/FeaturesGrid'
import BlogCard from '@/components/BlogCard'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import Link from 'next/link'
import { getBlogPosts, BlogPost } from '@/lib/contentful'

interface HomePageProps {
  latestPosts: BlogPost[]
}

const HomePage = ({ latestPosts }: HomePageProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CleanOps",
    "description": "Plataforma SaaS para digitalizar y controlar la operación de empresas de limpieza. Automatiza rutinas, control de asistencia, pedidos y supervisión.",
    "url": "https://cleanops.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "@id": "https://cleanops.com/#organization"
    },
    "featureList": [
      "Control de asistencia con QR/GPS",
      "Gestión de rutinas de limpieza",
      "Portal del cliente",
      "Supervisión inteligente",
      "Gestión de materiales",
      "Gestión de maquinaria",
      "Reportes automatizados"
    ]
  }

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://cleanops.com/#organization",
    "name": "CleanOps",
    "url": "https://cleanops.com",
    "logo": "https://cleanops.com/images/logo.png",
    "description": "CleanOps es la plataforma SaaS líder para digitalizar empresas de limpieza",
    "foundingDate": "2024",
    "industry": "Software",
    "areaServed": "América Latina",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "areaServed": "América Latina",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://linkedin.com/company/cleanops",
      "https://twitter.com/cleanops"
    ]
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo puede CleanOps reducir los costos de mi empresa de limpieza?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CleanOps reduce costos administrativos hasta 45% mediante automatización de rutinas, control inteligente de asistencia, optimización de materiales y supervisión eficiente. Elimina tareas manuales y errores humanos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué incluye el software de gestión de CleanOps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CleanOps incluye: Control de asistencia con QR/GPS, gestión de rutinas automatizadas, portal del cliente, supervisión inteligente con IA, gestión de materiales e inventarios, control de maquinaria y reportes en tiempo real."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma implementar CleanOps en mi empresa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La implementación de CleanOps toma entre 1-2 semanas. Incluye configuración personalizada, migración de datos, capacitación del equipo y acompañamiento durante el primer mes de operación."
        }
      }
    ]
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://cleanops.com"
      }
    ]
  }

  const trustLogos = [
    { name: 'Empresa 1', logo: '/images/logo1.png' },
    { name: 'Empresa 2', logo: '/images/logo2.png' },
    { name: 'Empresa 3', logo: '/images/logo3.png' },
    { name: 'Empresa 4', logo: '/images/logo4.png' },
  ]

  const mainFeatures = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'CleanOps Rutinas',
      description: 'Control de asistencia con QR/GPS, gestión de rutinas de limpieza y portal del cliente con visibilidad en tiempo real.',
      href: '/productos/rutinas'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Supervisión Inteligente',
      description: 'Registro de hallazgos, workflow de mejora continua y modelo recomendador de áreas críticas para supervisión eficiente.',
      href: '/productos/supervision'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Gestión de Materiales',
      description: 'Control de inventarios, alertas automáticas, workflow de pedidos con aprobación y trazabilidad completa.',
      href: '/productos/materiales'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Gestión de Maquinaria',
      description: 'Registro de activos, mantenimiento preventivo, logs de uso y control de costos para maximizar vida útil.',
      href: '/productos/maquinaria'
    }
  ]

  const caseStudies = [
    {
      company: 'CleanCorp SA',
      metric: '45% menos tiempo',
      description: 'en gestión de asistencia',
      industry: 'Limpieza de oficinas'
    },
    {
      company: 'HigieneTotal',
      metric: '30% reducción',
      description: 'en costos operativos',
      industry: 'Limpieza hospitalaria'
    },
    {
      company: 'ServiciosPlus',
      metric: '95% satisfacción',
      description: 'del cliente mejorada',
      industry: 'Limpieza comercial'
    }
  ]


  return (
    <>
      <SEO
        title="CleanOps - Software para Empresas de Limpieza | Automatiza y Aumenta Ganancias 45%"
        description="💰 Reduce costos 45% y aumenta ganancias con CleanOps. Software líder para empresas de limpieza: control de asistencia, rutinas automatizadas, supervisión inteligente. ¡Demo Gratis!"
        url="https://cleanops.com"
        keywords="software empresas limpieza, automatizar empresa limpieza, control asistencia QR, gestión rutinas limpieza, supervisión inteligente, aumentar ganancias limpieza, reducir costos operativos, portal cliente limpieza"
        jsonLd={[jsonLd, organizationJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      <Navbar />

      <CleanHero />

      {/* Trust Bar */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Confían en CleanOps</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {trustLogos.map((logo, index) => (
              <div key={index} className="h-12 w-24 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <FeaturesGrid
        title="¿Qué hacemos?"
        subtitle="Soluciones integrales para digitalizar y optimizar cada aspecto de tu empresa de limpieza"
        features={mainFeatures}
        columns={2}
      />


      {/* Quick Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-display">
            Resultados que hablan por sí solos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">{study.metric}</div>
                <div className="text-gray-600 mb-4">{study.description}</div>
                <div className="text-sm text-gray-500 font-medium">{study.company}</div>
                <div className="text-xs text-gray-400">{study.industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                Checklist: Digitalización para empresas de limpieza
              </h2>
              <p className="text-gray-600 mb-6">
                Descarga nuestra guía gratuita con los pasos esenciales para digitalizar
                tu empresa de limpieza y mejorar la eficiencia operativa.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Evaluación de procesos actuales
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Priorización de implementación
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Métricas de éxito
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="tu@empresa.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Descargar Checklist Gratuito
                </button>
                <p className="text-xs text-gray-500 text-center">
                  No spam. Puedes darte de baja en cualquier momento.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      {latestPosts.length > 0 && (
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
                Últimas Publicaciones
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Mantente al día con las últimas tendencias, consejos y mejores prácticas para tu empresa de limpieza
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-lg group"
              >
                Ver todo el blog
                <motion.span
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.slice(0, 3).map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Digitaliza tu empresa de limpieza hoy"
        subtitle="Únete a cientos de empresas que ya optimizan sus operaciones con CleanOps"
        primaryText="Solicitar Demo"
        secondaryText="Calcular Ahorro"
        secondaryHref="/recursos"
      />

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Get latest 3 blog posts
    const allPosts = await getBlogPosts()
    const latestPosts = allPosts.slice(0, 3)

    return {
      props: {
        latestPosts
      },
      revalidate: 60 // Revalidate every minute
    }
  } catch (error) {
    console.error('Error fetching blog posts for homepage:', error)

    // Return empty array if there's an error
    return {
      props: {
        latestPosts: []
      },
      revalidate: 60
    }
  }
}

export default HomePage