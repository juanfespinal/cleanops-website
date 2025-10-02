import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface NominaCalculatorProps {
  className?: string
}

interface EmployeeData {
  salarioBase: number
  tipoContrato: 'indefinido' | 'fijo' | 'obra_labor'
  nivelRiesgo: 1 | 2 | 3 | 4 | 5
  tieneAuxilioTransporte: boolean
  horasExtrasOrdinarias: number
  horasExtrasFestivas: number
  bonificaciones: number
  comisiones: number
  incluirUniformes: boolean
  costoUniformes: number
  incluirEPP: boolean
  costoEPP: number
}

interface NominaResults {
  // Ingresos
  salarioBase: number
  auxilioTransporte: number
  horasExtrasOrdinarias: number
  horasExtrasFestivas: number
  bonificaciones: number
  comisiones: number
  totalIngresos: number

  // Deducciones Empleado
  saludEmpleado: number
  pensionEmpleado: number
  totalDeduccionesEmpleado: number

  // Prestaciones Sociales (Provisiones)
  cesantias: number
  interesesCesantias: number
  prima: number
  vacaciones: number
  totalPrestaciones: number

  // Aportes Patronales
  saludPatronal: number
  pensionPatronal: number
  arlPatronal: number
  totalSeguridadSocial: number

  // Parafiscales
  sena: number
  icbf: number
  cajaCompensacion: number
  totalParafiscales: number

  // Costos Adicionales
  uniformes: number
  epp: number
  totalCostosAdicionales: number

  // Totales
  netoPagadoEmpleado: number
  costoTotalEmpresa: number
  costoMensualCompleto: number
}

const CalculadoraNomina = ({ className = "" }: NominaCalculatorProps) => {
  // Valores legales Colombia 2025
  const SALARIO_MINIMO = 1423500
  const AUXILIO_TRANSPORTE = 200000

  // Porcentajes legales 2025
  const PORCENTAJES = {
    SALUD_EMPLEADO: 0.04,
    PENSION_EMPLEADO: 0.04,
    SALUD_PATRONAL: 0.085,
    PENSION_PATRONAL: 0.12,
    ARL: {
      1: 0.00522, // Clase I - Riesgo Mínimo
      2: 0.01044, // Clase II - Riesgo Bajo
      3: 0.02436, // Clase III - Riesgo Medio
      4: 0.04348, // Clase IV - Riesgo Alto
      5: 0.06960  // Clase V - Riesgo Máximo
    },
    SENA: 0.02,
    ICBF: 0.03,
    CAJA_COMPENSACION: 0.04,
    CESANTIAS: 0.0833,
    INTERESES_CESANTIAS: 0.12,
    PRIMA: 0.0833,
    VACACIONES: 0.0417
  }

  const [empleado, setEmpleado] = useState<EmployeeData>({
    salarioBase: SALARIO_MINIMO,
    tipoContrato: 'indefinido',
    nivelRiesgo: 3,
    tieneAuxilioTransporte: true,
    horasExtrasOrdinarias: 0,
    horasExtrasFestivas: 0,
    bonificaciones: 0,
    comisiones: 0,
    incluirUniformes: true,
    costoUniformes: 150000,
    incluirEPP: true,
    costoEPP: 80000
  })

  const [results, setResults] = useState<NominaResults | null>(null)

  const calcularNomina = () => {
    const salarioBase = empleado.salarioBase
    const auxilioTransporte = empleado.tieneAuxilioTransporte ?
      (salarioBase <= SALARIO_MINIMO * 2 ? AUXILIO_TRANSPORTE : 0) : 0

    // Horas extras
    const valorHoraOrdinaria = salarioBase / 240 // 240 horas mensuales
    const horasExtrasOrdinarias = empleado.horasExtrasOrdinarias * valorHoraOrdinaria * 1.25
    const horasExtrasFestivas = empleado.horasExtrasFestivas * valorHoraOrdinaria * 1.75

    // Total ingresos
    const totalIngresos = salarioBase + auxilioTransporte + horasExtrasOrdinarias +
                         horasExtrasFestivas + empleado.bonificaciones + empleado.comisiones

    // Base para cálculos (sin auxilio de transporte)
    const baseCalculo = salarioBase + horasExtrasOrdinarias + horasExtrasFestivas +
                       empleado.bonificaciones + empleado.comisiones

    // Deducciones empleado
    const saludEmpleado = baseCalculo * PORCENTAJES.SALUD_EMPLEADO
    const pensionEmpleado = baseCalculo * PORCENTAJES.PENSION_EMPLEADO
    const totalDeduccionesEmpleado = saludEmpleado + pensionEmpleado

    // Prestaciones sociales (provisiones mensuales)
    const cesantias = (baseCalculo + auxilioTransporte) * PORCENTAJES.CESANTIAS
    const interesesCesantias = cesantias * PORCENTAJES.INTERESES_CESANTIAS
    const prima = (baseCalculo + auxilioTransporte) * PORCENTAJES.PRIMA
    const vacaciones = baseCalculo * PORCENTAJES.VACACIONES
    const totalPrestaciones = cesantias + interesesCesantias + prima + vacaciones

    // Aportes patronales
    const saludPatronal = baseCalculo * PORCENTAJES.SALUD_PATRONAL
    const pensionPatronal = baseCalculo * PORCENTAJES.PENSION_PATRONAL
    const arlPatronal = baseCalculo * PORCENTAJES.ARL[empleado.nivelRiesgo]
    const totalSeguridadSocial = saludPatronal + pensionPatronal + arlPatronal

    // Parafiscales
    const sena = baseCalculo * PORCENTAJES.SENA
    const icbf = baseCalculo * PORCENTAJES.ICBF
    const cajaCompensacion = baseCalculo * PORCENTAJES.CAJA_COMPENSACION
    const totalParafiscales = sena + icbf + cajaCompensacion

    // Costos adicionales
    const uniformes = empleado.incluirUniformes ? empleado.costoUniformes / 12 : 0 // Amortizado mensual
    const epp = empleado.incluirEPP ? empleado.costoEPP / 6 : 0 // Amortizado semestral
    const totalCostosAdicionales = uniformes + epp

    // Totales finales
    const netoPagadoEmpleado = totalIngresos - totalDeduccionesEmpleado
    const costoTotalEmpresa = totalSeguridadSocial + totalParafiscales + totalPrestaciones
    const costoMensualCompleto = salarioBase + auxilioTransporte + costoTotalEmpresa + totalCostosAdicionales

    const calculationResults: NominaResults = {
      salarioBase,
      auxilioTransporte,
      horasExtrasOrdinarias,
      horasExtrasFestivas,
      bonificaciones: empleado.bonificaciones,
      comisiones: empleado.comisiones,
      totalIngresos,
      saludEmpleado,
      pensionEmpleado,
      totalDeduccionesEmpleado,
      cesantias,
      interesesCesantias,
      prima,
      vacaciones,
      totalPrestaciones,
      saludPatronal,
      pensionPatronal,
      arlPatronal,
      totalSeguridadSocial,
      sena,
      icbf,
      cajaCompensacion,
      totalParafiscales,
      uniformes,
      epp,
      totalCostosAdicionales,
      netoPagadoEmpleado,
      costoTotalEmpresa,
      costoMensualCompleto
    }

    setResults(calculationResults)
  }

  useEffect(() => {
    calcularNomina()
  }, [empleado])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const getRiskDescription = (nivel: number) => {
    const descriptions = {
      1: 'Clase I - Riesgo Mínimo (0.522%)',
      2: 'Clase II - Riesgo Bajo (1.044%)',
      3: 'Clase III - Riesgo Medio (2.436%)',
      4: 'Clase IV - Riesgo Alto (4.348%)',
      5: 'Clase V - Riesgo Máximo (6.960%)'
    }
    return descriptions[nivel as keyof typeof descriptions]
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 font-display">
            Calculadora de Nómina Colombia 2025
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Especializada para la industria de limpieza - Cálculos 100% legales y actualizados
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Salario mínimo 2025: {formatCurrency(SALARIO_MINIMO)}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Auxilio transporte: {formatCurrency(AUXILIO_TRANSPORTE)}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Input Form */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Datos del Empleado</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salario Base Mensual
              </label>
              <input
                type="number"
                value={empleado.salarioBase}
                onChange={(e) => setEmpleado({...empleado, salarioBase: Number(e.target.value)})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                min={SALARIO_MINIMO}
                step="50000"
              />
              <p className="text-xs text-gray-500 mt-1">Mínimo legal: {formatCurrency(SALARIO_MINIMO)}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nivel de Riesgo ARL
              </label>
              <select
                value={empleado.nivelRiesgo}
                onChange={(e) => setEmpleado({...empleado, nivelRiesgo: Number(e.target.value) as 1|2|3|4|5})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value={1}>Clase I - Riesgo Mínimo (0.522%)</option>
                <option value={2}>Clase II - Riesgo Bajo (1.044%)</option>
                <option value={3}>Clase III - Riesgo Medio (2.436%)</option>
                <option value={4}>Clase IV - Riesgo Alto (4.348%)</option>
                <option value={5}>Clase V - Riesgo Máximo (6.960%)</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Limpieza de edificios generalmente: Clase II o III
              </p>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={empleado.tieneAuxilioTransporte}
                  onChange={(e) => setEmpleado({...empleado, tieneAuxilioTransporte: e.target.checked})}
                  className="mr-2 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-gray-700">
                  Auxilio de Transporte
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Aplica para salarios hasta {formatCurrency(SALARIO_MINIMO * 2)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Horas Extra Ordinarias
                </label>
                <input
                  type="number"
                  value={empleado.horasExtrasOrdinarias}
                  onChange={(e) => setEmpleado({...empleado, horasExtrasOrdinarias: Number(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  min="0"
                  max="48"
                />
                <p className="text-xs text-gray-500 mt-1">Máx: 48 horas/mes</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Horas Extra Festivas
                </label>
                <input
                  type="number"
                  value={empleado.horasExtrasFestivas}
                  onChange={(e) => setEmpleado({...empleado, horasExtrasFestivas: Number(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  min="0"
                  max="24"
                />
                <p className="text-xs text-gray-500 mt-1">Recargo 75%</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bonificaciones
                </label>
                <input
                  type="number"
                  value={empleado.bonificaciones}
                  onChange={(e) => setEmpleado({...empleado, bonificaciones: Number(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comisiones
                </label>
                <input
                  type="number"
                  value={empleado.comisiones}
                  onChange={(e) => setEmpleado({...empleado, comisiones: Number(e.target.value)})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  min="0"
                />
              </div>
            </div>

            {/* Costos Adicionales Industria Limpieza */}
            <div className="border-t pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Costos Industria Limpieza</h4>

              <div>
                <label className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    checked={empleado.incluirUniformes}
                    onChange={(e) => setEmpleado({...empleado, incluirUniformes: e.target.checked})}
                    className="mr-2 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Uniformes anuales</span>
                </label>
                {empleado.incluirUniformes && (
                  <input
                    type="number"
                    value={empleado.costoUniformes}
                    onChange={(e) => setEmpleado({...empleado, costoUniformes: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Costo anual uniformes"
                  />
                )}
              </div>

              <div className="mt-4">
                <label className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    checked={empleado.incluirEPP}
                    onChange={(e) => setEmpleado({...empleado, incluirEPP: e.target.checked})}
                    className="mr-2 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">EPP (Elementos Protección)</span>
                </label>
                {empleado.incluirEPP && (
                  <input
                    type="number"
                    value={empleado.costoEPP}
                    onChange={(e) => setEmpleado({...empleado, costoEPP: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Costo semestral EPP"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">Liquidación de Nómina</h3>

                {/* Resumen Principal */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 text-center">
                    <div className="text-sm text-green-600 mb-1">Empleado Recibe</div>
                    <div className="text-2xl font-bold text-green-700">
                      {formatCurrency(results.netoPagadoEmpleado)}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 text-center">
                    <div className="text-sm text-blue-600 mb-1">Costo Empresa</div>
                    <div className="text-2xl font-bold text-blue-700">
                      {formatCurrency(results.costoMensualCompleto)}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 text-center">
                    <div className="text-sm text-purple-600 mb-1">% Sobrecosto</div>
                    <div className="text-2xl font-bold text-purple-700">
                      {((results.costoMensualCompleto / results.salarioBase - 1) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>

                {/* Desglose Detallado */}
                <div className="grid md:grid-cols-2 gap-6">

                  {/* Ingresos del Empleado */}
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-semibold text-green-900 mb-4">💰 Ingresos del Empleado</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Salario base:</span>
                        <span className="font-semibold">{formatCurrency(results.salarioBase)}</span>
                      </div>
                      {results.auxilioTransporte > 0 && (
                        <div className="flex justify-between">
                          <span>Auxilio transporte:</span>
                          <span className="font-semibold">{formatCurrency(results.auxilioTransporte)}</span>
                        </div>
                      )}
                      {results.horasExtrasOrdinarias > 0 && (
                        <div className="flex justify-between">
                          <span>Horas extra ordinarias:</span>
                          <span className="font-semibold">{formatCurrency(results.horasExtrasOrdinarias)}</span>
                        </div>
                      )}
                      {results.horasExtrasFestivas > 0 && (
                        <div className="flex justify-between">
                          <span>Horas extra festivas:</span>
                          <span className="font-semibold">{formatCurrency(results.horasExtrasFestivas)}</span>
                        </div>
                      )}
                      {results.bonificaciones > 0 && (
                        <div className="flex justify-between">
                          <span>Bonificaciones:</span>
                          <span className="font-semibold">{formatCurrency(results.bonificaciones)}</span>
                        </div>
                      )}
                      {results.comisiones > 0 && (
                        <div className="flex justify-between">
                          <span>Comisiones:</span>
                          <span className="font-semibold">{formatCurrency(results.comisiones)}</span>
                        </div>
                      )}
                      <div className="border-t border-green-200 pt-2 flex justify-between font-bold">
                        <span>Total ingresos:</span>
                        <span>{formatCurrency(results.totalIngresos)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deducciones del Empleado */}
                  <div className="bg-red-50 rounded-xl p-6">
                    <h4 className="font-semibold text-red-900 mb-4">📉 Deducciones del Empleado</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Salud (4%):</span>
                        <span className="font-semibold">-{formatCurrency(results.saludEmpleado)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pensión (4%):</span>
                        <span className="font-semibold">-{formatCurrency(results.pensionEmpleado)}</span>
                      </div>
                      <div className="border-t border-red-200 pt-2 flex justify-between font-bold">
                        <span>Total deducciones:</span>
                        <span>-{formatCurrency(results.totalDeduccionesEmpleado)}</span>
                      </div>
                      <div className="border-t border-red-200 pt-2 flex justify-between font-bold text-green-700">
                        <span>Neto a pagar:</span>
                        <span>{formatCurrency(results.netoPagadoEmpleado)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Prestaciones Sociales */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-4">🎁 Prestaciones Sociales (Provisiones)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Cesantías (8.33%):</span>
                        <span className="font-semibold">{formatCurrency(results.cesantias)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Intereses cesantías (12%):</span>
                        <span className="font-semibold">{formatCurrency(results.interesesCesantias)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Prima servicios (8.33%):</span>
                        <span className="font-semibold">{formatCurrency(results.prima)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vacaciones (4.17%):</span>
                        <span className="font-semibold">{formatCurrency(results.vacaciones)}</span>
                      </div>
                      <div className="border-t border-blue-200 pt-2 flex justify-between font-bold">
                        <span>Total prestaciones:</span>
                        <span>{formatCurrency(results.totalPrestaciones)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Aportes Patronales */}
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-900 mb-4">🏢 Aportes Patronales + Parafiscales</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Salud patronal (8.5%):</span>
                        <span className="font-semibold">{formatCurrency(results.saludPatronal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pensión patronal (12%):</span>
                        <span className="font-semibold">{formatCurrency(results.pensionPatronal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ARL ({(PORCENTAJES.ARL[empleado.nivelRiesgo] * 100).toFixed(3)}%):</span>
                        <span className="font-semibold">{formatCurrency(results.arlPatronal)}</span>
                      </div>
                      <div className="border-t border-yellow-300 pt-1 mt-1">
                        <div className="flex justify-between">
                          <span>SENA (2%):</span>
                          <span className="font-semibold">{formatCurrency(results.sena)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ICBF (3%):</span>
                          <span className="font-semibold">{formatCurrency(results.icbf)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Caja Compensación (4%):</span>
                          <span className="font-semibold">{formatCurrency(results.cajaCompensacion)}</span>
                        </div>
                      </div>
                      <div className="border-t border-yellow-200 pt-2 flex justify-between font-bold">
                        <span>Total aportes:</span>
                        <span>{formatCurrency(results.totalSeguridadSocial + results.totalParafiscales)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Costos Adicionales */}
                  {(results.uniformes > 0 || results.epp > 0) && (
                    <div className="bg-purple-50 rounded-xl p-6 md:col-span-2">
                      <h4 className="font-semibold text-purple-900 mb-4">🧽 Costos Industria Limpieza</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        {results.uniformes > 0 && (
                          <div className="flex justify-between">
                            <span>Uniformes (amortizado):</span>
                            <span className="font-semibold">{formatCurrency(results.uniformes)}</span>
                          </div>
                        )}
                        {results.epp > 0 && (
                          <div className="flex justify-between">
                            <span>EPP (amortizado):</span>
                            <span className="font-semibold">{formatCurrency(results.epp)}</span>
                          </div>
                        )}
                        <div className="border-t border-purple-200 pt-2 flex justify-between font-bold">
                          <span>Total costos adicionales:</span>
                          <span>{formatCurrency(results.totalCostosAdicionales)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Resumen Final */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 md:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">📊 Resumen Final</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Empleado recibe:</div>
                        <div className="font-bold text-lg text-green-600">{formatCurrency(results.netoPagadoEmpleado)}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Costo total empresa:</div>
                        <div className="font-bold text-lg text-blue-600">{formatCurrency(results.costoMensualCompleto)}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Sobrecosto vs salario base:</div>
                        <div className="font-bold text-lg text-purple-600">
                          {((results.costoMensualCompleto / results.salarioBase - 1) * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="/contacto"
                    className="flex-1 bg-primary hover:bg-primary-dark text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                  >
                    💼 Optimizar Mi Nómina con CleanOps
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href="/casos"
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                  >
                    📈 Ver Casos de Empresas Reales
                  </motion.a>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Información Legal:</strong> Cálculos basados en la legislación colombiana vigente 2025.
                Salario mínimo: {formatCurrency(SALARIO_MINIMO)} + Auxilio transporte: {formatCurrency(AUXILIO_TRANSPORTE)}.
                Los niveles de riesgo ARL pueden variar según la actividad específica (Decreto 768 de 2022).
                Esta calculadora es una herramienta informativa - consulte con un contador para casos específicos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculadoraNomina