import { motion } from 'framer-motion'

interface MetricCardProps {
  icon: React.ReactNode
  metric: string
  description: string
  index?: number
}

const MetricCard = ({ icon, metric, description, index = 0 }: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2 font-display">
        {metric}
      </div>
      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  )
}

export default MetricCard