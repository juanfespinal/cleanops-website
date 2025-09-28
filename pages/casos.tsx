import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import UseCase from '@/components/UseCase'
import MetricCard from '@/components/MetricCard'
import TestimonialCard from '@/components/TestimonialCard'

const CasosPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Casos de Éxito - CleanOps",
    "description": "Descubre cómo empresas de limpieza han transformado sus operaciones y mejorado sus resultados con CleanOps",
    "url": "https://cleanops.com/casos"
  }

  const caseStudies = [
    {
      title: 'CleanCorp SA - Transformación Digital Completa',
      description: 'Empresa de limpieza comercial con 150+ empleados que digitalizó completamente sus operaciones, reduciendo costos administrativos en 45% y mejorando la satisfacción del cliente.',
      metrics: ['150+ empleados', '45% menos tiempo administrativo', '95% satisfacción cliente'],
      image: '/images/cleancorp-case.jpg'
    },
    {
      title: 'HigieneTotal - Optimización Multi-Sede',
      description: 'Cadena de limpieza hospitalaria que implementó control centralizado para 25 ubicaciones, mejorando estándares de calidad y reduciendo costos operativos en 30%.',
      metrics: ['25 ubicaciones', '30% reducción costos', '99.8% cumplimiento sanitario'],
      image: '/images/higieketotal-case.jpg'
    },
    {
      title: 'ServiciosPlus - Crecimiento Escalable',
      description: 'Empresa familiar que pasó de 20 a 200 empleados manteniendo control total de operaciones gracias a la automatización de procesos con CleanOps.',
      metrics: ['10x crecimiento', '200 empleados', '40% mejora eficiencia'],
      image: '/images/serviciosplus-case.jpg'
    },
    {
      title: 'LimpiezaTec - Innovación en Supervisión',
      description: 'Pioneros en implementar supervisión inteligente con IA, reduciendo quejas de clientes en 70% y mejorando la calidad del servicio de manera consistente.',
      metrics: ['70% menos quejas', '95% estándares cumplidos', '50% menos tiempo supervisión'],
      image: '/images/limpiezatec-case.jpg'
    }
  ]

  const industryResults = [
    {
      title: 'Limpieza Comercial',
      description: 'Empresas que atienden oficinas, centros comerciales y espacios corporativos.',
      percentage: '42%',
      metric: 'promedio reducción costos'
    },
    {
      title: 'Servicios Hospitalarios',
      description: 'Limpieza especializada en centros de salud con protocolos estrictos.',
      percentage: '35%',
      metric: 'mejora en cumplimiento'
    },
    {
      title: 'Limpieza Industrial',
      description: 'Operaciones de gran escala en plantas industriales y manufactura.',
      percentage: '50%',
      metric: 'optimización tiempo'
    }
  ]

  const testimonials = [
    {
      content: "CleanOps transformó completamente nuestra operación. Pasamos de gestión manual a una plataforma integral que nos permite escalar sin perder control.",
      author: "María González",
      role: "CEO",
      company: "CleanCorp SA",
      rating: 5
    },
    {
      content: "La supervisión inteligente nos permitió mantener estándares hospitalarios en todas nuestras ubicaciones. El ROI se vio desde el primer mes.",
      author: "Dr. Carlos Méndez",
      role: "Director Operaciones",
      company: "HigieneTotal",
      rating: 5
    },
    {
      content: "Crecimos 10 veces en 2 años sin perder calidad. CleanOps nos dio la estructura tecnológica para escalar de manera inteligente.",
      author: "Roberto Silva",
      role: "Fundador",
      company: "ServiciosPlus",
      rating: 5
    },
    {
      content: "La reducción en quejas de clientes fue inmediata. Ahora tenemos datos precisos para mejorar continuamente nuestro servicio.",
      author: "Ana López",
      role: "Gerente de Calidad",
      company: "LimpiezaTec",
      rating: 5
    }
  ]

  return (
    <>
      <SEO
        title="Casos de Éxito - CleanOps"
        description="Descubre cómo empresas de limpieza han transformado sus operaciones y mejorado sus resultados con CleanOps. Casos reales de éxito y testimonios verificados."
        canonical="https://cleanops.com/casos"
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
                <pattern id="casos-hero-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1.5" fill="#ffffff" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#casos-hero-pattern)" />
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
                  Resultados Comprobados
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Casos de Éxito
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Descubre cómo empresas de limpieza reales han transformado sus operaciones
                  y mejorado sus resultados con CleanOps
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

        {/* Case Studies Section */}
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
                Historias de Transformación
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empresas reales que han revolucionado sus operaciones con CleanOps
              </p>
            </motion.div>

            <div className="space-y-16">
              {caseStudies.map((caseStudy, index) => (
                <UseCase
                  key={index}
                  {...caseStudy}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Industry Results */}
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
                Resultados por Industria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Métricas promedio de mejora según el tipo de operación
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {industryResults.map((result, index) => (
                <MetricCard
                  key={index}
                  {...result}
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
                Testimonios verificados de empresarios que han transformado sus negocios
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-dark text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                ¿Listo para ser el próximo caso de éxito?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Únete a cientos de empresas que ya han transformado sus operaciones con CleanOps
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Solicitar Demo Personalizada
                </a>
                <Link
                  href="/recursos"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  Descargar Casos Completos
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default CasosPage