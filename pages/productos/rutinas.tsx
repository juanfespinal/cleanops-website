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

const RutinasPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CleanOps Rutinas",
    "description": "Control de asistencia, gestión de rutinas y portal del cliente para empresas de limpieza",
    "url": "https://cleanops.com/productos/rutinas",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "featureList": [
      "Control de asistencia con QR/GPS",
      "Gestión de rutinas de limpieza",
      "Portal del cliente en tiempo real",
      "Reportes de incidencias",
      "Funcionalidad offline",
      "Dashboards interactivos"
    ],
    "provider": {
      "@type": "Organization",
      "name": "CleanOps"
    }
  }

  const heroFeatures = [
    "Control de asistencia con QR/GPS y funcionalidad offline",
    "Rutinas centralizadas con delimitación de áreas",
    "Portal del cliente con visibilidad en tiempo real",
    "Reportes automatizados de horas e incidencias"
  ]

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Control de Asistencia',
      description: 'Registro con QR/GPS, funcionalidad offline que sincroniza al reconectarse, y reportes automatizados de horas trabajadas por empleado y contrato.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Rutinas de Limpieza',
      description: 'Documentación centralizada de procedimientos, delimitación de áreas con QR/NFC, dashboards interactivos y control preciso de tiempos de ejecución.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Portal del Cliente',
      description: 'Visibilidad completa del cumplimiento de servicios, gestión de incidencias, acceso a documentos de empleados y solicitudes de servicios adicionales.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Reportes de Incidencias',
      description: 'Registro detallado de incidencias con evidencia fotográfica, notificaciones automáticas a responsables y tracking completo hasta resolución.'
    }
  ]

  const useCases = [
    {
      problem: "Los empleados llegan tarde o no registran correctamente su asistencia, generando conflictos y pérdida de productividad.",
      solution: "Control de asistencia automático con QR/GPS que funciona offline y sincroniza datos cuando hay conexión.",
      result: "Reducción del 40% en discrepancias de horarios y mejora significativa en puntualidad del personal.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      problem: "Los clientes no tienen visibilidad del trabajo realizado y constantemente solicitan reportes de estado.",
      solution: "Portal del cliente con acceso en tiempo real al cumplimiento de servicios, incidencias y documentación.",
      result: "Aumento del 65% en satisfacción del cliente y reducción del 50% en llamadas de consulta.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      problem: "Las rutinas de limpieza no se ejecutan consistentemente, generando quejas y problemas de calidad.",
      solution: "Documentación centralizada con check-lists digitales y control de tiempos por área específica.",
      result: "Mejora del 55% en consistencia de servicios y reducción del 70% en quejas de calidad.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const metrics = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "45%",
      description: "Reducción en tiempo de gestión administrativa"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      metric: "65%",
      description: "Mejora en satisfacción del cliente"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      metric: "70%",
      description: "Reducción en quejas de calidad"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      metric: "30%",
      description: "Ahorro en costos operativos"
    }
  ]

  const testimonial = {
    quote: "CleanOps Rutinas transformó completamente nuestra operación. Ahora tenemos control total sobre nuestros equipos y nuestros clientes están más satisfechos que nunca. La funcionalidad offline fue clave para nosotros.",
    author: "María González",
    company: "LimpiezaTotal SA",
    role: "Gerente de Operaciones"
  }

  const rutinasHeroMockup = (
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
              <div className="h-8 bg-gradient-to-r from-primary to-blue-500 rounded w-48 flex items-center px-3">
                <span className="text-white text-sm font-medium">CleanOps Rutinas</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded mr-2"></div>
                  <span className="text-sm font-medium">Asistencia</span>
                </div>
                <div className="text-xs text-green-600 font-semibold">95% Puntualidad</div>
                <div className="h-2 bg-green-200 rounded mt-1">
                  <div className="h-2 bg-green-500 rounded w-4/5"></div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-blue-500 rounded mr-2"></div>
                  <span className="text-sm font-medium">Rutinas</span>
                </div>
                <div className="text-xs text-blue-600 font-semibold">12/15 Completadas</div>
                <div className="h-2 bg-blue-200 rounded mt-1">
                  <div className="h-2 bg-blue-500 rounded w-4/5"></div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-700 border-b pb-2">Portal del Cliente</div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">TC</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Torre Central</div>
                    <div className="text-xs text-gray-500">Oficinas - Piso 3</div>
                  </div>
                </div>
                <div className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Completado</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">BA</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Baños Edificio A</div>
                    <div className="text-xs text-gray-500">Sanitarios - Planta baja</div>
                  </div>
                </div>
                <div className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">En proceso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <SEO
        title="CleanOps Rutinas — Control de asistencia, rutinas y portal cliente"
        description="CleanOps Rutinas centraliza control de asistencia, documentación de rutinas y portal cliente para mejorar cumplimiento y visibilidad en tiempo real."
        url="https://cleanops.com/productos/rutinas"
        jsonLd={jsonLd}
      />

      <Navbar />

      <ProductHero
        title="Organiza y controla toda tu operación de limpieza en un solo lugar"
        subtitle="Incluye control de asistencia, gestión de rutinas y portal del cliente, todo integrado y en tiempo real."
        features={heroFeatures}
        mockupContent={rutinasHeroMockup}
      />

      <FeaturesGrid
        title="Funcionalidades Principales"
        subtitle="Todo lo que necesitas para digitalizar la operación de tu empresa de limpieza"
        features={features}
        columns={2}
      />

      {/* Video Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Ve CleanOps Rutinas en Acción
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo nuestros clientes utilizan CleanOps Rutinas para transformar sus operaciones diarias
            </p>
          </div>

          <VideoPlaceholder
            title="Demo: Control de Asistencia y Rutinas"
            description="Mira cómo funciona el control de asistencia con QR, la gestión de rutinas y el portal del cliente en tiempo real"
            duration="3:20"
            videoUrl="https://www.youtube.com/watch?v=EsBuWG7jSo4"
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Casos de Uso Reales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo CleanOps Rutinas resuelve los problemas más comunes en empresas de limpieza
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <UseCase
                key={index}
                {...useCase}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Beneficios Cuantificables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados reales que impactan directamente en tu rentabilidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                {...metric}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <TestimonialCard {...testimonial} />
        </div>
      </section>

      <CTA
        title="Solicitar Demo"
        subtitle="Descubre cómo CleanOps Rutinas puede transformar tu operación de limpieza"
        primaryText="Solicitar Demo Gratuita"
        secondaryText="Ver Precios"
        secondaryHref="/precios"
      />

      <Footer />
    </>
  )
}

export default RutinasPage