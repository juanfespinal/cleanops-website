import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      name: 'Productos',
      submenu: [
        { name: 'CleanOps Rutinas', href: '/productos/rutinas' },
        { name: 'Supervisión Inteligente', href: '/productos/supervision' },
        { name: 'Gestión de Materiales', href: '/productos/materiales' },
        { name: 'Gestión de Maquinaria', href: '/productos/maquinaria' },
      ]
    },
    { name: 'Casos de Éxito', href: '/casos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Recursos', href: '/recursos' },
  ]

  return (
    <nav className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100/50 rounded-2xl px-6 py-3">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.svg" alt="CleanOps" className="h-8 w-auto" />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.submenu ? (
                      <>
                        <button className="text-gray-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                          {item.name}
                        </button>
                        <div className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="py-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className="text-gray-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Link
                href="/contacto"
                className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Solicitar Demo
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-dark hover:text-primary"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden"
          >
            <div className="mt-3 bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100/50 rounded-2xl px-4 pt-4 pb-6 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="text-gray-dark px-3 py-2 font-medium">{item.name}</div>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-600 hover:text-primary px-6 py-2 text-sm transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block text-gray-dark hover:text-primary px-3 py-2 font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contacto"
                className="block bg-primary hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-medium transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Demo
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar