import { motion } from 'framer-motion'

interface MetricCardProps {
  icon?: React.ReactNode
  title?: string
  metric?: string
  percentage?: string
  description: string
  index?: number
}

const MetricCard = ({ icon, title, metric, percentage, description, index = 0 }: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      {icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
          {icon}
        </div>
      )}

      {title && (
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
          {title}
        </h3>
      )}

      {(percentage || metric) && (
        <div className="text-3xl font-bold text-primary mb-2 font-display">
          {percentage || metric}
        </div>
      )}

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export default MetricCard