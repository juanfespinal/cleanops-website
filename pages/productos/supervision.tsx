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

const SupervisionPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CleanOps Supervisión Inteligente",
    "description": "Sistema inteligente de supervisión con IA para registro de hallazgos, workflow de mejora continua y recomendación de áreas críticas",
    "url": "https://cleanops.com/productos/supervision",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "featureList": [
      "Registro de hallazgos con evidencia fotográfica",
      "Asignación automática de responsables",
      "Workflow obligatorio para cierre",
      "Modelo recomendador con IA",
      "Dashboards de supervisión",
      "Reportes automatizados"
    ],
    "provider": {
      "@type": "Organization",
      "name": "CleanOps"
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo funciona la inteligencia artificial en la supervisión de CleanOps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La IA analiza patrones históricos de hallazgos, ubicaciones problemáticas y tendencias de calidad para recomendar qué áreas supervisar prioritariamente. Optimiza recursos y predice problemas antes de que ocurran."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de evidencia se puede registrar en los hallazgos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se pueden adjuntar fotografías, videos, ubicación GPS exacta, descripción detallada, nivel de severidad y fecha/hora automática. Todo queda documentado para auditorías y seguimiento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se asignan automáticamente los responsables de cada hallazgo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El sistema asigna responsables basado en roles, ubicación del hallazgo, carga de trabajo actual y expertise. Incluye fechas límite automáticas y escalamiento si no se resuelve a tiempo."
        }
      },
      {
        "@type": "Question",
        "name": "¿En cuánto se pueden reducir las quejas de clientes con supervisión inteligente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los clientes de CleanOps han reducido las quejas hasta 70% implementando supervisión proactiva. Al detectar y corregir problemas antes de que los clientes los noten, mejora significativamente la satisfacción."
        }
      },
      {
        "@type": "Question",
        "name": "¿El workflow de cierre de hallazgos es obligatorio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ningún hallazgo puede cerrarse sin completar el workflow: evidencia de corrección, verificación del supervisor, confirmación con foto y firma digital del responsable. Garantiza resolución completa."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué métricas incluyen los dashboards de supervisión?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Incluyen: hallazgos por área/supervisor, tiempo promedio de resolución, tendencias de calidad, cumplimiento de estándares, ranking de ubicaciones problemáticas y métricas de satisfacción del cliente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se puede personalizar los tipos de hallazgos según mi empresa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Completamente personalizable. Puede crear categorías específicas, niveles de severidad personalizados, workflows por tipo de hallazgo y formularios adaptados a sus estándares de calidad particulares."
        }
      },
      {
        "@type": "Question",
        "name": "¿Los supervisores pueden trabajar offline en terreno?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, la app móvil funciona completamente offline. Los hallazgos se registran localmente con fotos y GPS, sincronizándose automáticamente cuando hay conexión disponible."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo mejora la eficiencia del equipo de supervisión?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reduce hasta 45% el tiempo de supervisión mediante recomendaciones de IA, elimina reportes manuales, automatiza asignaciones y proporciona rutas optimizadas para revisiones múltiples."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se integra con sistemas de calidad existentes (ISO, HACCP)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, CleanOps se adapta a estándares ISO 9001, HACCP, protocolos hospitalarios y otras certificaciones. Genera reportes compatibles con auditorías y mantiene trazabilidad completa."
        }
      }
    ]
  }

  const heroFeatures = [
    "Registro detallado de hallazgos con evidencia fotográfica",
    "Asignación automática de responsables y fechas límite",
    "Workflow obligatorio para cierre de hallazgos",
    "Modelo recomendador de áreas críticas con IA"
  ]

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Registro de Hallazgos',
      description: 'Documenta incidencias con fotografías, ubicación GPS y descripción detallada para un seguimiento completo.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Asignación Automática',
      description: 'Sistema inteligente que asigna responsables basado en roles, ubicación y carga de trabajo actual.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Workflow de Cierre',
      description: 'Proceso estructurado que garantiza la resolución completa de incidencias antes del cierre.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'IA Predictiva',
      description: 'Algoritmos de machine learning que identifican patrones y recomiendan áreas prioritarias de supervisión.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Reportes Inteligentes',
      description: 'Dashboards interactivos con métricas de calidad, tendencias y recomendaciones de mejora.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'App Móvil',
      description: 'Aplicación móvil para supervisores con funcionalidad offline y sincronización automática.'
    }
  ]

  const useCases = [
    {
      title: 'Edificios Corporativos',
      description: 'Sistema de supervisión continua para mantener estándares de calidad en espacios corporativos críticos.',
      metrics: ['95% cumplimiento de estándares', '60% reducción en quejas', '40% mejora en eficiencia'],
      image: '/images/corporate-building.jpg'
    },
    {
      title: 'Centros Comerciales',
      description: 'Supervisión escalable para múltiples locales con reportes unificados y gestión centralizada.',
      metrics: ['200+ locales gestionados', '85% automatización', '50% menos tiempo supervisión'],
      image: '/images/shopping-center.jpg'
    },
    {
      title: 'Hospitales y Clínicas',
      description: 'Protocolos específicos de supervisión sanitaria con trazabilidad completa y auditorías.',
      metrics: ['100% trazabilidad', '99.5% cumplimiento sanitario', '30% reducción riesgos'],
      image: '/images/hospital.jpg'
    }
  ]

  const benefits = [
    {
      title: 'Mejora Continua',
      description: 'Proceso sistemático de identificación y resolución de problemas que impulsa la mejora constante.',
      percentage: '65%',
      metric: 'mejora en calidad'
    },
    {
      title: 'Eficiencia Operacional',
      description: 'Optimización de recursos de supervisión mediante priorización inteligente de áreas críticas.',
      percentage: '45%',
      metric: 'menos tiempo supervisión'
    },
    {
      title: 'Satisfacción del Cliente',
      description: 'Mayor satisfacción del cliente mediante resolución proactiva de incidencias.',
      percentage: '80%',
      metric: 'menos quejas'
    }
  ]

  const testimonials = [
    {
      content: "La supervisión inteligente nos permitió detectar problemas antes de que se convirtieran en quejas. El ROI fue inmediato.",
      author: "Ana García",
      role: "Gerente de Operaciones",
      company: "Clean Solutions Pro",
      rating: 5
    },
    {
      content: "El modelo recomendador nos ayuda a priorizar qué áreas supervisar. Hemos reducido 45% el tiempo de supervisión manteniendo la calidad.",
      author: "Carlos Mendoza",
      role: "Director de Calidad",
      company: "Limpieza Premium",
      rating: 5
    }
  ]

  return (
    <>
      <SEO
        title="Supervisión Inteligente con IA para Empresas de Limpieza | Reduce 70% Quejas"
        description="🤖 IA que detecta áreas críticas, registra hallazgos con evidencia y asigna responsables automáticamente. Reduce 70% quejas y mejora calidad. ¡Demo Gratis!"
        canonical="https://cleanops.com/productos/supervision"
        keywords="supervisión inteligente IA, supervisión limpieza automática, reducir quejas clientes, hallazgos supervisión, IA empresas limpieza, calidad supervisión automática"
        jsonLd={[jsonLd, faqJsonLd]}
      />

      <Navbar />
      <main>
        <ProductHero
          title="Supervisión Inteligente"
          subtitle="Registra hallazgos, asigna responsables automáticamente y mejora la calidad con IA predictiva"
          features={heroFeatures}
          primaryCTA="Solicitar Demo"
          primaryHref="/contacto"
          secondaryCTA="Ver Video Demo"
          secondaryHref="#video-demo"
        />

        <FeaturesGrid
          title="Funcionalidades Avanzadas"
          subtitle="Herramientas completas para una supervisión eficiente y efectiva"
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
                Supervisión en Acción
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre cómo la supervisión inteligente transforma la gestión de calidad
              </p>
            </motion.div>

            <VideoPlaceholder
              title="Demo: Supervisión Inteligente"
              description="Mira cómo funciona el registro de hallazgos, asignación automática y el modelo recomendador con IA"
              duration="4:15"
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
                Cómo diferentes industrias implementan supervisión inteligente con CleanOps
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
                Testimonios reales de empresas que han transformado su supervisión
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
          title="¿Listo para mejorar tu supervisión?"
          subtitle="Implementa supervisión inteligente y mejora la calidad de tus servicios"
          primaryText="Solicitar Demo"
          primaryHref="/contacto"
          secondaryText="Calcular ROI"
          secondaryHref="/recursos"
          background="blue"
        />
      </main>
      <Footer />
    </>
  )
}

export default SupervisionPage