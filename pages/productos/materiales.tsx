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

const MaterialesPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CleanOps Gestión de Materiales",
    "description": "Sistema inteligente para gestión de inventario, pedidos automáticos, control de consumo y optimización de costos de materiales de limpieza",
    "url": "https://cleanops.com/productos/materiales",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "featureList": [
      "Control de inventario en tiempo real",
      "Pedidos automáticos por stock mínimo",
      "Gestión de múltiples bodegas",
      "Análisis de consumo y rendimiento",
      "Integración con proveedores",
      "Reportes de costos"
    ],
    "provider": {
      "@type": "Organization",
      "name": "CleanOps"
    }
  }

  const heroFeatures = [
    "Control de inventario en tiempo real con códigos QR",
    "Pedidos automáticos cuando llega al stock mínimo",
    "Gestión centralizada de múltiples bodegas",
    "Análisis de consumo y rendimiento de productos"
  ]

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Inventario Inteligente',
      description: 'Control preciso del stock con códigos QR, alertas automáticas y trazabilidad completa de cada producto.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Pedidos Automáticos',
      description: 'Sistema que genera pedidos automáticamente al alcanzar stock mínimo, evitando faltantes y sobrecostos.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Múltiples Bodegas',
      description: 'Gestiona inventario de diferentes ubicaciones desde una sola plataforma con transferencias automáticas.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Análisis de Consumo',
      description: 'Reportes detallados de consumo por área, producto y período para optimizar compras y reducir costos.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Control de Costos',
      description: 'Monitorea gastos en tiempo real, compara precios de proveedores y optimiza el presupuesto de materiales.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      ),
      title: 'Integración Proveedores',
      description: 'Conecta directamente con catálogos de proveedores, compara precios y gestiona órdenes de compra.'
    }
  ]

  const useCases = [
    {
      title: 'Operaciones Multi-Sede',
      description: 'Gestión centralizada de inventario para empresas con múltiples ubicaciones y equipos distribuidos.',
      metrics: ['50+ ubicaciones', '30% reducción costos', '95% disponibilidad materiales'],
      image: '/images/multi-location.jpg'
    },
    {
      title: 'Contratos Gubernamentales',
      description: 'Control riguroso de inventario y costos para cumplir con normativas y auditorías del sector público.',
      metrics: ['100% trazabilidad', '40% menos desperdicios', 'Auditorías automáticas'],
      image: '/images/government.jpg'
    },
    {
      title: 'Servicios Hospitalarios',
      description: 'Gestión especializada de productos de limpieza hospitalaria con controles de calidad y vencimientos.',
      metrics: ['0% faltantes críticos', '99.9% disponibilidad', '25% optimización costos'],
      image: '/images/hospital-supplies.jpg'
    }
  ]

  const benefits = [
    {
      title: 'Reducción de Costos',
      description: 'Optimización de compras mediante análisis de consumo y negociación con múltiples proveedores.',
      percentage: '35%',
      metric: 'menos costos materiales'
    },
    {
      title: 'Eficiencia Operacional',
      description: 'Eliminación de faltantes y reducción de tiempo dedicado a gestión manual de inventarios.',
      percentage: '60%',
      metric: 'menos tiempo administrativo'
    },
    {
      title: 'Control de Desperdicios',
      description: 'Seguimiento preciso de consumo real vs. teórico para identificar y reducir desperdicios.',
      percentage: '45%',
      metric: 'menos desperdicios'
    }
  ]

  const testimonials = [
    {
      content: "La gestión automática de pedidos nos ha permitido reducir 35% los costos de materiales sin afectar la operación. Nunca más nos quedamos sin stock.",
      author: "María López",
      role: "Gerente de Compras",
      company: "ServiLimpio Integral",
      rating: 5
    },
    {
      content: "El control de múltiples bodegas desde una sola plataforma transformó nuestra operación. Ahora sabemos exactamente qué tenemos en cada ubicación.",
      author: "Roberto Silva",
      role: "Director Operaciones",
      company: "Clean Corp",
      rating: 5
    }
  ]

  return (
    <>
      <SEO
        title="Gestión de Materiales - CleanOps"
        description="Sistema inteligente para gestión de inventario, pedidos automáticos, control de consumo y optimización de costos de materiales de limpieza."
        canonical="https://cleanops.com/productos/materiales"
        jsonLd={jsonLd}
      />

      <Navbar />
      <main>
        <ProductHero
          title="Gestión de Materiales"
          subtitle="Optimiza inventario, automatiza pedidos y reduce costos con control inteligente"
          features={heroFeatures}
          primaryCTA="Solicitar Demo"
          primaryHref="/contacto"
          secondaryCTA="Ver Video Demo"
          secondaryHref="#video-demo"
        />

        <FeaturesGrid
          title="Control Total de Inventario"
          subtitle="Herramientas avanzadas para optimizar la gestión de materiales y reducir costos"
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
                Gestión Inteligente en Acción
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre cómo optimizar tu inventario y reducir costos de materiales
              </p>
            </motion.div>

            <VideoPlaceholder
              title="Demo: Gestión de Materiales"
              description="Mira cómo funciona el control de inventario, pedidos automáticos y análisis de consumo"
              duration="3:45"
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
                Casos de Uso Reales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cómo diferentes tipos de empresas optimizan su gestión de materiales
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
                Resultados reales que obtienen nuestros clientes
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
                Testimonios reales de empresas que han optimizado su gestión de materiales
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
          title="¿Listo para optimizar tu inventario?"
          subtitle="Reduce costos y mejora la eficiencia con gestión inteligente de materiales"
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

export default MaterialesPage