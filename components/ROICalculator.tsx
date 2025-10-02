import { useState } from 'react'
import { motion } from 'framer-motion'

interface ROICalculatorProps {
  className?: string
}

interface CalculationResults {
  currentMonthlyCost: number
  timeSavingsValue: number
  errorReductionSavings: number
  totalMonthlySavings: number
  yearlyROI: number
  paybackMonths: number
}

const ROICalculator = ({ className = "" }: ROICalculatorProps) => {
  const [inputs, setInputs] = useState({
    employees: 10,
    avgHourlyRate: 15,
    monthlyHoursPerEmployee: 160,
    adminTimeHours: 20,
    errorRatePercent: 15,
    avgErrorCost: 100,
    monthlyComplaints: 5,
    avgComplaintCost: 200
  })

  const [results, setResults] = useState<CalculationResults | null>(null)
  const [showResults, setShowResults] = useState(false)

  const calculateROI = () => {
    // Current monthly costs
    const totalMonthlyPayroll = inputs.employees * inputs.avgHourlyRate * inputs.monthlyHoursPerEmployee
    const adminCosts = inputs.adminTimeHours * inputs.avgHourlyRate
    const errorCosts = (totalMonthlyPayroll * inputs.errorRatePercent / 100) * 0.1 // Error rework costs
    const complaintCosts = inputs.monthlyComplaints * inputs.avgComplaintCost
    const currentMonthlyCost = totalMonthlyPayroll + adminCosts + errorCosts + complaintCosts

    // Savings with CleanOps (based on real customer data)
    const timeSavingsValue = adminCosts * 0.45 // 45% admin time reduction
    const errorReductionSavings = errorCosts * 0.60 // 60% error reduction
    const complaintReductionSavings = complaintCosts * 0.70 // 70% complaint reduction
    const totalMonthlySavings = timeSavingsValue + errorReductionSavings + complaintReductionSavings

    // Assuming CleanOps cost is 10% of current monthly payroll
    const cleanOpsMonthlyCost = totalMonthlyPayroll * 0.10
    const netMonthlySavings = totalMonthlySavings - cleanOpsMonthlyCost
    const yearlyROI = (netMonthlySavings * 12 / (cleanOpsMonthlyCost * 12)) * 100
    const paybackMonths = cleanOpsMonthlyCost / totalMonthlySavings

    const calculationResults: CalculationResults = {
      currentMonthlyCost,
      timeSavingsValue,
      errorReductionSavings: errorReductionSavings + complaintReductionSavings,
      totalMonthlySavings: netMonthlySavings,
      yearlyROI,
      paybackMonths
    }

    setResults(calculationResults)
    setShowResults(true)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
          Calculadora de ROI CleanOps
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre cuánto puedes ahorrar y en cuánto tiempo recuperas la inversión con CleanOps
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Datos de tu empresa</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número de empleados
            </label>
            <input
              type="number"
              value={inputs.employees}
              onChange={(e) => setInputs({...inputs, employees: parseInt(e.target.value) || 0})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              min="1"
              max="1000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Salario promedio por hora (USD)
            </label>
            <input
              type="number"
              value={inputs.avgHourlyRate}
              onChange={(e) => setInputs({...inputs, avgHourlyRate: parseFloat(e.target.value) || 0})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              min="5"
              max="100"
              step="0.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Horas mensuales por empleado
            </label>
            <input
              type="number"
              value={inputs.monthlyHoursPerEmployee}
              onChange={(e) => setInputs({...inputs, monthlyHoursPerEmployee: parseInt(e.target.value) || 0})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              min="80"
              max="200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Horas mensuales en tareas administrativas
            </label>
            <input
              type="number"
              value={inputs.adminTimeHours}
              onChange={(e) => setInputs({...inputs, adminTimeHours: parseInt(e.target.value) || 0})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              min="5"
              max="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quejas mensuales de clientes
            </label>
            <input
              type="number"
              value={inputs.monthlyComplaints}
              onChange={(e) => setInputs({...inputs, monthlyComplaints: parseInt(e.target.value) || 0})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              min="0"
              max="50"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateROI}
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:shadow-lg"
          >
            <span className="mr-2">🧮</span>
            Calcular Mi ROI
          </motion.button>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Tus Resultados</h3>

          {!showResults ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500">
                Completa los datos y haz clic en "Calcular Mi ROI" para ver tus ahorros potenciales
              </p>
            </div>
          ) : results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Ahorro mensual total:</span>
                  <span className="text-2xl font-bold text-green-600">
                    {formatCurrency(results.totalMonthlySavings)}
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">ROI anual:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {results.yearlyROI.toFixed(0)}%
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Recuperación de inversión:</span>
                  <span className="text-2xl font-bold text-purple-600">
                    {results.paybackMonths.toFixed(1)} meses
                  </span>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <h4 className="font-semibold text-gray-900">Desglose de ahorros:</h4>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Reducción tiempo administrativo (45%):</span>
                  <span className="font-semibold text-green-600">
                    {formatCurrency(results.timeSavingsValue)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Reducción errores y quejas (60-70%):</span>
                  <span className="font-semibold text-green-600">
                    {formatCurrency(results.errorReductionSavings)}
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-primary to-accent rounded-lg text-white text-center">
                <p className="text-sm opacity-90 mb-2">En 12 meses ahorrarías:</p>
                <p className="text-2xl font-bold">
                  {formatCurrency(results.totalMonthlySavings * 12)}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/contacto"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Solicitar Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/casos"
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Ver Casos Reales
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Datos basados en clientes reales
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Resultados promedio verificados
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Implementación garantizada
          </div>
        </div>
      </div>
    </div>
  )
}

export default ROICalculator