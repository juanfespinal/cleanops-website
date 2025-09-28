import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Productos',
      links: [
        { name: 'CleanOps Rutinas', href: '/productos/rutinas' },
        { name: 'Supervisión Inteligente', href: '/productos/supervision' },
        { name: 'Gestión de Materiales', href: '/productos/materiales' },
        { name: 'Gestión de Maquinaria', href: '/productos/maquinaria' },
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Casos de Éxito', href: '/casos' },
        { name: 'Blog', href: '/blog' },
        { name: 'Recursos', href: '/recursos' },
        { name: 'Contacto', href: '/contacto' },
      ]
    },
    {
      title: 'Soporte',
      links: [
        { name: 'Centro de Ayuda', href: '#' },
        { name: 'Documentación', href: '#' },
        { name: 'Estado del Sistema', href: '#' },
        { name: 'Seguridad y Datos', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos de Servicio', href: '#' },
        { name: 'Política de Privacidad', href: '#' },
        { name: 'Política de Cookies', href: '#' },
        { name: 'ANS', href: '#' },
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <defs>
            <pattern id="footer-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#1E90FF" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 right-20 w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-lg"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, delay: 3 }}
        className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-lg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center mb-6">
              <motion.span
                className="text-2xl font-bold text-white font-display"
                whileHover={{ scale: 1.05 }}
              >
                CleanOps
              </motion.span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Digitaliza y controla la operación de tu empresa de limpieza con
              CleanOps, la plataforma SaaS que automatiza rutinas, mejora la
              supervisión y optimiza la gestión de recursos.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="p-2 text-gray-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="p-2 text-gray-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="p-2 text-gray-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 font-display">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} CleanOps. Todos los derechos reservados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 md:mt-0">
              <motion.span
                className="text-gray-400 text-sm flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="mr-2">🔒</span>
                Datos seguros y cifrados
              </motion.span>
              <motion.span
                className="text-gray-400 text-sm flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="mr-2">✓</span>
                ANS 99.9% uptime
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer