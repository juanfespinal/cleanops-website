import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const InnovativeHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  const stats = [
    { number: "45%", label: "menos tiempo admin" },
    { number: "65%", label: "más satisfacción" },
    { number: "70%", label: "menos quejas" }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark-lighter overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Interactive Orb that follows mouse */}
      <motion.div
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 200 }}
      />

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
                  ¡El futuro de la limpieza está aquí!
                </motion.div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1]">
                  <span className="block">Digitaliza tu</span>
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                      operación
                    </span>
                  </span>
                  <span className="block">de limpieza</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  CleanOps automatiza rutinas, controla asistencia y supervisa calidad.
                  <span className="text-accent font-semibold"> Aumenta ganancias</span>,
                  mejora eficiencia y eleva satisfacción.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contacto"
                      className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-2xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-primary/30"
                    >
                      <span className="mr-2">🚀</span>
                      Solicitar Demo
                      <motion.span
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        initial={{ x: 0 }}
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/productos/rutinas"
                      className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-2xl text-lg hover:bg-white/5 transition-all duration-200"
                    >
                      Ver Productos
                    </Link>
                  </motion.div>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-8 pt-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex flex-col"
                    >
                      <span className="text-3xl font-bold text-accent font-display">
                        {stat.number}
                      </span>
                      <span className="text-sm text-gray-400">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* Main Dashboard Mockup */}
                <div className="relative">
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center text-2xl z-10"
                  >
                    🧹
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                    className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-xl z-10"
                  >
                    ✨
                  </motion.div>

                  {/* Main Dashboard */}
                  <div className="relative bg-gradient-to-br from-dark-light to-dark-lighter rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-primary text-sm font-medium">CleanOps Dashboard</div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="space-y-6">
                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-4 border border-primary/20"
                        >
                          <div className="text-primary text-2xl font-bold">95%</div>
                          <div className="text-gray-400 text-sm">Asistencia</div>
                        </motion.div>

                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                          className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl p-4 border border-accent/20"
                        >
                          <div className="text-accent text-2xl font-bold">12/15</div>
                          <div className="text-gray-400 text-sm">Rutinas</div>
                        </motion.div>
                      </div>

                      {/* Progress Bars */}
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-300">Torre Central</span>
                            <span className="text-primary">Completado</span>
                          </div>
                          <div className="w-full bg-dark rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 2, delay: 1 }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-300">Edificio A</span>
                            <span className="text-accent">En proceso</span>
                          </div>
                          <div className="w-full bg-dark rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-accent to-primary h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "75%" }}
                              transition={{ duration: 2, delay: 1.5 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="w-full h-32">
          <path
            fill="white"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default InnovativeHero