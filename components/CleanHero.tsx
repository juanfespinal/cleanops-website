import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const CleanHero = () => {
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
    <section className="relative min-h-screen bg-gradient-to-br from-clean via-light to-light-gray overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#1E90FF" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Interactive Elements */}
      <motion.div
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl pointer-events-none z-0"
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
                {/* Clean Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium shadow-sm"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
                  ✨ La limpieza del futuro está aquí
                </motion.div>

                {/* Clean Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1]">
                  <span className="block">Digitaliza tu</span>
                  <span className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      operación
                    </span>
                  </span>
                  <span className="block">de limpieza</span>
                </h1>

                {/* Clean Subtitle */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  CleanOps automatiza rutinas, controla asistencia y supervisa calidad.
                  <span className="text-primary font-semibold"> Aumenta ganancias</span>,
                  mejora eficiencia y eleva satisfacción.
                </p>

                {/* Clean Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contacto"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl text-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
                    >
                      <span className="mr-2">🚀</span>
                      Solicitar Demo
                      <motion.span
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        initial={{ x: 0 }}
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/productos/rutinas"
                      className="inline-flex items-center justify-center px-8 py-4 bg-clean border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl text-lg hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-lg"
                    >
                      Ver Productos
                    </Link>
                  </motion.div>
                </div>

                {/* Clean Stats */}
                <div className="flex flex-wrap gap-8 pt-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex flex-col"
                    >
                      <span className="text-3xl font-bold text-primary font-display">
                        {stat.number}
                      </span>
                      <span className="text-sm text-gray-500">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Clean Visual */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* Clean Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center text-xl shadow-lg z-10"
                >
                  🧹
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                  className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-lg shadow-lg z-10"
                >
                  ✨
                </motion.div>

                {/* Main Clean Dashboard */}
                <div className="relative bg-clean rounded-3xl p-8 shadow-2xl border border-gray-100">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-primary text-sm font-medium">CleanOps Dashboard</div>
                  </div>

                  {/* Clean Dashboard Content */}
                  <div className="space-y-6">
                    {/* Clean Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/10 shadow-sm"
                      >
                        <div className="text-primary text-2xl font-bold">95%</div>
                        <div className="text-gray-500 text-sm">Asistencia</div>
                      </motion.div>

                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                        className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-4 border border-accent/10 shadow-sm"
                      >
                        <div className="text-accent text-2xl font-bold">12/15</div>
                        <div className="text-gray-500 text-sm">Rutinas</div>
                      </motion.div>
                    </div>

                    {/* Clean Progress Bars */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-700 font-medium">Torre Central</span>
                          <span className="text-primary font-medium">Completado</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                          <motion.div
                            className="bg-gradient-to-r from-primary to-accent h-3 rounded-full shadow-sm"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, delay: 1 }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-700 font-medium">Edificio A</span>
                          <span className="text-accent font-medium">En proceso</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                          <motion.div
                            className="bg-gradient-to-r from-accent to-primary h-3 rounded-full shadow-sm"
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 2, delay: 1.5 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Clean Activity Feed */}
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-gray-700 border-b pb-2">Actividad Reciente</div>
                      <div className="flex items-center space-x-3 p-3 bg-light-gray rounded-lg">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                          JD
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-700">Juan completó Oficina 301</div>
                          <div className="text-xs text-gray-500">Hace 2 minutos</div>
                        </div>
                        <div className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">✓</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CleanHero