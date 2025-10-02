import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import CalculadoraNomina from '@/components/CalculadoraNomina'
import { motion } from 'framer-motion'

const CalculadoraNominaPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Nómina Colombia 2025 - Industria Limpieza",
    "description": "Calculadora especializada para liquidar nómina en empresas de limpieza en Colombia. Incluye ARL, prestaciones, uniformes y EPP.",
    "url": "https://cleanops.com/calculadora-nomina",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "provider": {
      "@type": "Organization",
      "name": "CleanOps"
    },
    "featureList": [
      "Cálculo completo de nómina Colombia 2025",
      "Niveles de riesgo ARL específicos",
      "Prestaciones sociales automáticas",
      "Costos industria limpieza (uniformes, EPP)",
      "Cumplimiento legal 100% actualizado"
    ]
  }

  return (
    <>
      <SEO
        title="Calculadora Nómina Colombia 2025 | Empresas de Limpieza | Salario Mínimo $1.423.500"
        description="💰 Calculadora oficial nómina Colombia 2025 para industria limpieza. Incluye ARL, prestaciones, uniformes, EPP. Salario mínimo $1.423.500 + auxilio $200.000. ¡100% legal!"
        canonical="https://cleanops.com/calculadora-nomina"
        keywords="calculadora nomina colombia 2025, salario minimo 2025, liquidacion nomina limpieza, ARL niveles riesgo, prestaciones sociales colombia, costo empleado colombia"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main className="bg-gradient-to-b from-light to-clean">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
                Calculadora Interactiva Gratuita
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display">
                Calculadora de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Nómina</span> Colombia 2025
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Especializada para empresas de limpieza - Cálculos 100% legales con salario mínimo
                $1.423.500 y todas las prestaciones actualizadas
              </p>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold text-gray-900">Salario Mínimo 2025</div>
                  <div className="text-sm text-gray-600">$1.423.500 + auxilio $200.000</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-semibold text-gray-900">ARL Especializada</div>
                  <div className="text-sm text-gray-600">Niveles riesgo limpieza</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-2xl mb-2">🧽</div>
                  <div className="font-semibold text-gray-900">Industria Limpieza</div>
                  <div className="text-sm text-gray-600">Uniformes + EPP incluidos</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CalculadoraNomina />
            </motion.div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
                Información Legal Colombia 2025
              </h2>

              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$1.423.500</div>
                  <div className="text-gray-600">Salario mínimo mensual</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">$200.000</div>
                  <div className="text-gray-600">Auxilio de transporte</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">68%</div>
                  <div className="text-gray-600">Sobrecosto promedio empleado</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">5</div>
                  <div className="text-gray-600">Clases de riesgo ARL</div>
                </div>
              </div>

              <p className="text-gray-600 max-w-3xl mx-auto">
                Cálculos basados en la legislación colombiana vigente 2025. Incluye todos los aportes parafiscales,
                prestaciones sociales y costos específicos de la industria de limpieza.
              </p>
            </motion.div>
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
                ¿Listo para optimizar tu nómina?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                CleanOps automatiza el control de nómina y reduce errores de cálculo.
                Solicita tu demo y descubre cómo simplificar tu gestión de personal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contacto"
                  className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl"
                >
                  <span className="mr-2">💼</span>
                  Solicitar Demo CleanOps
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="/productos/rutinas"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  Ver Control Asistencia
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default CalculadoraNominaPage