import { motion } from 'framer-motion'

interface UseCaseProps {
  problem: string
  solution: string
  result: string
  icon?: React.ReactNode
  index?: number
}

const UseCase = ({ problem, solution, result, icon, index = 0 }: UseCaseProps) => {
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
        <div>
          <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
            Problema
          </h4>
          <p className="text-gray-700 leading-relaxed">
            {problem}
          </p>
        </div>

        <div className="border-l-4 border-primary pl-4">
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Solución
          </h4>
          <p className="text-gray-700 leading-relaxed">
            {solution}
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
            Resultado
          </h4>
          <p className="text-gray-700 leading-relaxed">
            {result}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default UseCase