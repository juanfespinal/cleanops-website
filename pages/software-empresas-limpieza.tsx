import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import CTA from '@/components/CTA'

const SoftwareEmpresasLimpiezaPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Software para Empresas de Limpieza - Guía Completa 2025",
      "description": "Guía definitiva de software para empresas de limpieza: tipos, beneficios, características clave y cómo elegir la mejor solución para tu negocio.",
      "url": "https://cleanops.com/software-empresas-limpieza"
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Cómo elegir el mejor software para tu empresa de limpieza",
      "description": "Guía paso a paso para seleccionar e implementar software de gestión en empresas de limpieza",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Evalúa las necesidades de tu empresa",
          "text": "Identifica áreas problemáticas: control de asistencia, gestión de rutinas, supervisión de calidad"
        },
        {
          "@type": "HowToStep",
          "name": "Compara funcionalidades clave",
          "text": "Control QR/GPS, portal cliente, supervisión IA, gestión materiales, reportes automatizados"
        },
        {
          "@type": "HowToStep",
          "name": "Calcula el ROI esperado",
          "text": "Utiliza calculadoras ROI para estimar ahorros en tiempo administrativo y reducción de errores"
        },
        {
          "@type": "HowToStep",
          "name": "Solicita demos y pruebas",
          "text": "Prueba el software con tu equipo antes de tomar la decisión final"
        }
      ]
    }
  ]

  const tableOfContents = [
    { title: "¿Qué es un Software para Empresas de Limpieza?", anchor: "que-es" },
    { title: "Tipos de Software de Limpieza", anchor: "tipos" },
    { title: "Beneficios Clave del Software de Limpieza", anchor: "beneficios" },
    { title: "Funcionalidades Esenciales", anchor: "funcionalidades" },
    { title: "Control de Asistencia y Rutinas", anchor: "control-asistencia" },
    { title: "Supervisión Inteligente con IA", anchor: "supervision-ia" },
    { title: "Gestión de Materiales y Maquinaria", anchor: "gestion-materiales" },
    { title: "Cómo Elegir el Software Adecuado", anchor: "como-elegir" },
    { title: "ROI y Casos de Éxito", anchor: "roi-casos" },
    { title: "Implementación y Mejores Prácticas", anchor: "implementacion" }
  ]

  const softwareTypes = [
    {
      name: "Software de Control de Asistencia",
      description: "Automatiza el registro de entrada y salida de empleados con tecnología QR/GPS",
      features: ["Control QR/GPS", "Funcionalidad offline", "Reportes de horas", "Geolocalización"],
      link: "/productos/rutinas",
      linkText: "Ver CleanOps Rutinas"
    },
    {
      name: "Sistemas de Supervisión Inteligente",
      description: "Utiliza IA para optimizar la supervisión y mejorar la calidad del servicio",
      features: ["IA predictiva", "Registro hallazgos", "Workflow automático", "Dashboards inteligentes"],
      link: "/productos/supervision",
      linkText: "Ver Supervisión IA"
    },
    {
      name: "Software de Gestión de Inventarios",
      description: "Controla materiales, supplies y maquinaria en tiempo real",
      features: ["Control inventarios", "Alertas automáticas", "Workflow pedidos", "Trazabilidad"],
      link: "/productos/materiales",
      linkText: "Ver Gestión Materiales"
    },
    {
      name: "Plataformas Integrales",
      description: "Solución completa que combina todas las funcionalidades en una plataforma unificada",
      features: ["Todo integrado", "Portal cliente", "Análisis avanzado", "Escalabilidad total"],
      link: "/",
      linkText: "Ver CleanOps Completo"
    }
  ]

  const keyBenefits = [
    {
      title: "Reducción de Costos Operativos",
      description: "Automatización que reduce hasta 45% el tiempo administrativo",
      icon: "💰",
      details: [
        "Eliminación de reportes manuales",
        "Reducción de errores humanos",
        "Optimización de rutas y recursos",
        "Control preciso de horas trabajadas"
      ]
    },
    {
      title: "Mejora en la Calidad del Servicio",
      description: "Supervisión inteligente que reduce quejas hasta 70%",
      icon: "⭐",
      details: [
        "Detección proactiva de problemas",
        "Estándares de calidad consistentes",
        "Seguimiento de incidencias en tiempo real",
        "Mejora continua basada en datos"
      ]
    },
    {
      title: "Transparencia con el Cliente",
      description: "Portal del cliente que mejora satisfacción en 95%",
      icon: "👁️",
      details: [
        "Visibilidad en tiempo real del servicio",
        "Comunicación directa con el equipo",
        "Reportes automatizados de progreso",
        "Historial completo de servicios"
      ]
    },
    {
      title: "Escalabilidad del Negocio",
      description: "Estructura tecnológica que permite crecimiento sostenible",
      icon: "📈",
      details: [
        "Gestión eficiente de múltiples ubicaciones",
        "Onboarding rápido de nuevos empleados",
        "Procesos estandarizados y replicables",
        "Análisis de datos para toma de decisiones"
      ]
    }
  ]

  return (
    <>
      <SEO
        title="Software para Empresas de Limpieza - Guía Completa 2025 | CleanOps"
        description="🚀 Guía definitiva de software para empresas de limpieza: tipos, beneficios, ROI y cómo elegir la mejor solución. Reduce costos 45% y aumenta eficiencia. ¡Guía gratuita!"
        canonical="https://cleanops.com/software-empresas-limpieza"
        keywords="software empresas limpieza, software gestión limpieza, automatizar empresa limpieza, tecnología limpieza 2025, sistema gestión limpieza, software control asistencia limpieza"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-dark text-white overflow-hidden pt-32 pb-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              <defs>
                <pattern id="pillar-hero-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1.5" fill="#ffffff" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pillar-hero-pattern)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
                Guía Completa 2025
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
                Software para Empresas de Limpieza
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                La guía definitiva para elegir, implementar y maximizar el ROI del software
                de gestión en tu empresa de limpieza
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#que-es"
                  className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl"
                >
                  Leer Guía Completa
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="/calculadora-nomina"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  Calcular Mi ROI
                </motion.a>
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">45%</div>
                  <div className="text-sm text-blue-100">Reducción costos admin</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">70%</div>
                  <div className="text-sm text-blue-100">Menos quejas clientes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">3.2</div>
                  <div className="text-sm text-blue-100">Meses recuperación ROI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contenido de esta guía</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                {tableOfContents.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.anchor}`}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 group-hover:text-primary font-medium">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">

            {/* Section 1: What is cleaning software */}
            <section id="que-es" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                ¿Qué es un Software para Empresas de Limpieza?
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Un software para empresas de limpieza es una plataforma tecnológica diseñada específicamente
                para automatizar, optimizar y controlar las operaciones de empresas de servicios de limpieza.
                Estas soluciones integran múltiples aspectos del negocio: desde el <Link href="/productos/rutinas" className="text-primary hover:text-primary-dark font-semibold">control de asistencia con QR/GPS</Link> hasta la <Link href="/productos/supervision" className="text-primary hover:text-primary-dark font-semibold">supervisión inteligente con IA</Link>.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <p className="text-gray-800 font-medium">
                  <strong>💡 Dato clave:</strong> Las empresas de limpieza que implementan software especializado
                  reducen sus costos operativos en promedio 45% y mejoran la satisfacción del cliente en 65%.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                A diferencia del software genérico de gestión empresarial, las plataformas especializadas
                como <Link href="/" className="text-primary hover:text-primary-dark font-semibold">CleanOps</Link> están
                diseñadas para resolver problemas específicos de la industria de limpieza:
              </p>

              <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
                <li><strong>Control de asistencia impreciso:</strong> Empleados que trabajan en múltiples ubicaciones</li>
                <li><strong>Falta de visibilidad:</strong> Clientes sin acceso a información en tiempo real</li>
                <li><strong>Supervisión ineficiente:</strong> Detección tardía de problemas de calidad</li>
                <li><strong>Gestión manual:</strong> Reportes y administración que consumen tiempo excesivo</li>
                <li><strong>Escalabilidad limitada:</strong> Dificultad para crecer manteniendo la calidad</li>
              </ul>
            </section>

            {/* Section 2: Types of software */}
            <section id="tipos" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
                Tipos de Software de Limpieza
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {softwareTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>

                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={type.link}
                      className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
                    >
                      {type.linkText}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Section 3: Key Benefits */}
            <section id="beneficios" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
                Beneficios Clave del Software de Limpieza
              </h2>

              <div className="space-y-12">
                {keyBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{benefit.icon}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                      </div>
                      <p className="text-xl text-gray-600 mb-6">{benefit.description}</p>

                      <ul className="space-y-3">
                        {benefit.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-1 max-w-lg">
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <div className="text-2xl font-bold text-primary mb-2">
                          {index === 0 ? "45%" : index === 1 ? "70%" : index === 2 ? "95%" : "300%"}
                        </div>
                        <div className="text-gray-600">
                          {index === 0 ? "Reducción tiempo admin" :
                           index === 1 ? "Menos quejas" :
                           index === 2 ? "Mejora satisfacción" : "Crecimiento promedio"}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="my-16">
              <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">¿Quieres calcular el ROI específico para tu empresa?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Nuestra calculadora gratuita te mostrará exactamente cuánto puedes ahorrar y en cuánto tiempo
                  recuperas la inversión con datos personalizados de tu empresa.
                </p>
                <Link
                  href="/calculadora-nomina"
                  className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <span className="mr-2">🧮</span>
                  Calcular Mi ROI Gratis
                </Link>
              </div>
            </section>

            {/* Internal Linking Section */}
            <section id="funcionalidades" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
                Funcionalidades Esenciales que Debes Buscar
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Control de Tiempo</h3>
                  <p className="text-gray-600 text-sm">QR/GPS, offline sync, reportes automáticos</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Supervisión IA</h3>
                  <p className="text-gray-600 text-sm">Detección automática, workflow optimizado</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Portal Cliente</h3>
                  <p className="text-gray-600 text-sm">Tiempo real, transparencia total</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Al evaluar software para tu empresa de limpieza, estas son las funcionalidades que más impacto
                tendrán en tu ROI y eficiencia operacional:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex items-start">
                  <span className="font-bold text-primary mr-3">1.</span>
                  <div>
                    <strong>Control de Asistencia Inteligente:</strong> Implementa <Link href="/productos/rutinas" className="text-primary hover:text-primary-dark font-semibold">control de asistencia con QR y GPS</Link> para eliminar errores de marcación y obtener reportes precisos de horas trabajadas.
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="font-bold text-primary mr-3">2.</span>
                  <div>
                    <strong>Supervisión con Inteligencia Artificial:</strong> Utiliza <Link href="/productos/supervision" className="text-primary hover:text-primary-dark font-semibold">supervisión inteligente con IA</Link> para predecir áreas problemáticas y optimizar rutas de inspección.
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="font-bold text-primary mr-3">3.</span>
                  <div>
                    <strong>Gestión Integral de Recursos:</strong> Controla <Link href="/productos/materiales" className="text-primary hover:text-primary-dark font-semibold">materiales y maquinaria</Link> con alertas automáticas y workflow de pedidos optimizado.
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="font-bold text-primary mr-3">4.</span>
                  <div>
                    <strong>Portal del Cliente Transparente:</strong> Proporciona visibilidad completa del servicio con reportes automáticos y comunicación directa.
                  </div>
                </div>
              </div>
            </section>

            {/* ROI and Case Studies */}
            <section id="roi-casos" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
                ROI Real y Casos de Éxito
              </h2>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Resultados Promedio de Nuestros Clientes</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">285%</div>
                    <div className="text-gray-600 text-sm">ROI promedio primer año</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">3.2</div>
                    <div className="text-gray-600 text-sm">Meses recuperación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$2,840</div>
                    <div className="text-gray-600 text-sm">Ahorro mensual promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">127+</div>
                    <div className="text-gray-600 text-sm">Empresas validadas</div>
                  </div>
                </div>

                <p className="text-gray-700">
                  Estos números provienen del análisis de 127+ empresas de limpieza que han implementado
                  CleanOps durante los últimos 12 meses. Ve <Link href="/casos" className="text-primary hover:text-primary-dark font-semibold">casos de éxito detallados</Link> con testimonios verificados y métricas específicas.
                </p>
              </div>

              <div className="text-center">
                <Link
                  href="/calculadora-nomina"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-lg"
                >
                  <span className="mr-2">🧮</span>
                  Calcula Tu ROI Personalizado
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* CTA Section */}
        <CTA
          title="¿Listo para transformar tu empresa de limpieza?"
          subtitle="Únete a 127+ empresas que ya están ahorrando costos y mejorando su eficiencia con CleanOps"
          primaryText="Solicitar Demo Personalizada"
          primaryHref="/contacto"
          secondaryText="Ver Casos de Éxito"
          secondaryHref="/casos"
          background="blue"
        />

      </main>

      <Footer />
    </>
  )
}

export default SoftwareEmpresasLimpiezaPage