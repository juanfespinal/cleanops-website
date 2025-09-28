import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import ProductHero from '@/components/ProductHero'
import FeaturesGrid from '@/components/FeaturesGrid'
import UseCase from '@/components/UseCase'
import MetricCard from '@/components/MetricCard'
import TestimonialCard from '@/components/TestimonialCard'
import VideoPlaceholder from '@/components/VideoPlaceholder'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

const MaquinariaPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CleanOps Gestión de Maquinaria",
    "description": "Sistema completo para gestión de equipos de limpieza con registro de activos, mantenimiento preventivo, control de uso y optimización de costos",
    "url": "https://cleanops.com/productos/maquinaria",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "featureList": [
      "Registro completo de activos",
      "Mantenimiento preventivo programado",
      "Control de uso y rendimiento",
      "Gestión de reparaciones",
      "Análisis de costos operativos",
      "Alertas de mantenimiento"
    ],
    "provider": {
      "@type": "Organization",
      "name": "CleanOps"
    }
  }

  const heroFeatures = [
    "Registro completo de activos con códigos QR y documentación",
    "Mantenimiento preventivo con alertas automáticas",
    "Control detallado de uso, horas de operación y rendimiento",
    "Gestión de reparaciones con historial completo"
  ]

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Registro de Activos',
      description: 'Catalogación completa de maquinaria con códigos QR, especificaciones técnicas, manuales y documentación de garantías.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Mantenimiento Preventivo',
      description: 'Programación automática de mantenimientos basada en horas de uso, calendario y recomendaciones del fabricante.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Control de Uso',
      description: 'Registro detallado de horas de operación, operadores asignados y rendimiento para optimizar la vida útil.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Gestión de Reparaciones',
      description: 'Workflow completo para reportar, gestionar y dar seguimiento a reparaciones con proveedores autorizados.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Análisis de Costos',
      description: 'Control detallado de costos de adquisición, mantenimiento, reparaciones y depreciación de equipos.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-5 5v-5zM4.343 4.343l-.707-.707m12.728 0l-.707.707m-6.314 8.485a9 9 0 019-9 9 9 0 01-9 9zm0 0a9 9 0 019-9 9 9 0 01-9 9z" />
        </svg>
      ),
      title: 'Alertas Inteligentes',
      description: 'Notificaciones automáticas para mantenimientos programados, vencimiento de garantías y anomalías de rendimiento.'
    }
  ]

  const useCases = [
    {
      title: 'Empresas Multi-Sede',
      description: 'Control centralizado de flota de equipos distribuidos en múltiples ubicaciones con gestión unificada.',
      metrics: ['100+ equipos gestionados', '25% reducción costos mantenimiento', '90% disponibilidad equipos'],
      image: '/images/multi-site-equipment.jpg'
    },
    {
      title: 'Operaciones Industriales',
      description: 'Gestión de maquinaria especializada para limpieza industrial con mantenimiento crítico y alta disponibilidad.',
      metrics: ['99.5% uptime crítico', '40% extensión vida útil', '35% optimización costos'],
      image: '/images/industrial-cleaning.jpg'
    },
    {
      title: 'Servicios Especializados',
      description: 'Control de equipos especializados para diferentes tipos de limpieza con protocolos específicos de mantenimiento.',
      metrics: ['15+ tipos de equipos', '50% menos fallas imprevistas', '30% mejora eficiencia'],
      image: '/images/specialized-equipment.jpg'
    }
  ]

  const benefits = [
    {
      title: 'Vida Útil Extendida',
      description: 'Mantenimiento preventivo programado que maximiza la vida útil de los equipos y reduce reemplazos prematuros.',
      percentage: '40%',
      metric: 'más vida útil'
    },
    {
      title: 'Reducción de Costos',
      description: 'Control integrado de costos de mantenimiento, reparaciones y operación para optimizar el presupuesto.',
      percentage: '30%',
      metric: 'menos costos operativos'
    },
    {
      title: 'Disponibilidad de Equipos',
      description: 'Mayor disponibilidad mediante mantenimiento preventivo y gestión proactiva de reparaciones.',
      percentage: '95%',
      metric: 'disponibilidad garantizada'
    }
  ]

  const testimonials = [
    {
      content: "El control de mantenimiento preventivo nos ha permitido extender 40% la vida útil de nuestros equipos. El ROI se pagó en 6 meses.",
      author: "Miguel Rodríguez",
      role: "Gerente de Operaciones",
      company: "LimpiezaTec Solutions",
      rating: 5
    },
    {
      content: "Gestionamos más de 150 equipos en 20 ubicaciones. CleanOps nos permite tener control total desde una sola plataforma.",
      author: "Patricia Vega",
      role: "Directora de Mantenimiento",
      company: "Clean Master Pro",
      rating: 5
    }
  ]

  return (
    <>
      <SEO
        title="Gestión de Maquinaria - CleanOps"
        description="Sistema completo para gestión de equipos de limpieza con registro de activos, mantenimiento preventivo, control de uso y optimización de costos. Maximiza la vida útil de tus equipos."
        canonical="https://cleanops.com/productos/maquinaria"
        jsonLd={jsonLd}
      />

      <Navbar />
      <main>
        <ProductHero
          title="Gestión de Maquinaria"
          subtitle="Maximiza la vida útil, controla costos y optimiza el rendimiento de tus equipos"
          features={heroFeatures}
          ctaText="Solicitar Demo"
          ctaHref="/contacto"
          secondaryCtaText="Ver Video Demo"
          secondaryCtaHref="#video-demo"
          image="/images/machinery-dashboard.png"
        />

        <FeaturesGrid
          title="Gestión Integral de Equipos"
          subtitle="Herramientas completas para maximizar el valor y rendimiento de tu maquinaria"
          features={features}
          columns={3}
        />

        {/* Video Demo Section */}
        <section className="py-20 bg-gradient-to-b from-light-gray to-clean" id="video-demo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Gestión de Equipos en Acción
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre cómo optimizar el mantenimiento y control de tu maquinaria
              </p>
            </motion.div>

            <VideoPlaceholder
              title="Demo: Gestión de Maquinaria"
              description="Mira cómo funciona el registro de activos, mantenimiento preventivo y control de costos"
              duration="4:30"
              className="max-w-4xl mx-auto"
            />
          </div>
        </section>

        {/* Use Cases Section */}
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
                Casos de Uso Exitosos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cómo diferentes tipos de operaciones optimizan la gestión de sus equipos
              </p>
            </motion.div>

            <div className="space-y-16">
              {useCases.map((useCase, index) => (
                <UseCase
                  key={index}
                  {...useCase}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Beneficios Comprobados
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Resultados medibles que obtienen nuestros clientes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <MetricCard
                  key={index}
                  {...benefit}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                Lo que Dicen Nuestros Clientes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Testimonios reales de empresas que han optimizado la gestión de sus equipos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  {...testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="¿Listo para optimizar tu maquinaria?"
          subtitle="Maximiza la vida útil y reduce costos con gestión inteligente de equipos"
          primaryText="Solicitar Demo"
          primaryHref="/contacto"
          secondaryText="Calcular Ahorro"
          secondaryHref="/recursos"
          background="blue"
        />
      </main>
      <Footer />
    </>
  )
}

export default MaquinariaPage