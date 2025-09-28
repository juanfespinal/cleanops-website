import { motion } from 'framer-motion'

interface UseCaseProps {
  title?: string
  problem?: string
  solution?: string
  result?: string
  description?: string
  metrics?: string[]
  image?: string
  icon?: React.ReactNode
  index?: number
  reverse?: boolean
}

const UseCase = ({
  title,
  problem,
  solution,
  result,
  description,
  metrics,
  image,
  icon,
  index = 0,
  reverse = false
}: UseCaseProps) => {
  // If we have title, description, and metrics, render the new format
  if (title && description && metrics) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}
      >
        <div className={reverse ? 'lg:col-start-2' : ''}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">
            {title}
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-blue-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">{metric}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${reverse ? 'lg:col-start-1' : ''} relative`}>
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="text-gray-400">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  // Original format for backward compatibility
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
    >
      {icon && (
        <div className="text-primary mb-6">
          {icon}
        </div>
      )}

      <div className="space-y-6">
        {problem && (
          <div>
            <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
              Problema
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {problem}
            </p>
          </div>
        )}

        {solution && (
          <div className="border-l-4 border-primary pl-4">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              Solución
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {solution}
            </p>
          </div>
        )}

        {result && (
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
              Resultado
            </h4>
            <p className="text-gray-700 leading-relaxed font-medium">
              {result}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default UseCase