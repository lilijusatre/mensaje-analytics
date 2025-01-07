import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WeekdayAnalysis = () => {
  // Datos de ejemplo basados en el análisis anterior
  const weeklyData = [
    { semana: "2024-W1", lizbeth: 185, zoey: 45, csupport: 120 },
    { semana: "2024-W2", lizbeth: 195, zoey: 52, csupport: 115 },
    { semana: "2024-W3", lizbeth: 178, zoey: 48, csupport: 125 },
    { semana: "2024-W4", lizbeth: 190, zoey: 50, csupport: 118 },
    { semana: "2024-W5", lizbeth: 182, zoey: 42, csupport: 110 },
    { semana: "2024-W6", lizbeth: 170, zoey: 38, csupport: 105 },
  ];

  const hourlyData = [
    { hour: "07:00", messages: 2.8, maxTime: 35, minTime: 8, lizbeth: 0, zoey: 15, csSupport: 12 },
    { hour: "08:00", messages: 36.0, maxTime: 42, minTime: 5, lizbeth: 0, zoey: 28, csSupport: 18 },
    { hour: "09:00", messages: 19.9, maxTime: 38, minTime: 4, lizbeth: 25, zoey: 22, csSupport: 15 },
    { hour: "10:00", messages: 39.6, maxTime: 45, minTime: 3, lizbeth: 35, zoey: 18, csSupport: 20 },
    { hour: "11:00", messages: 19.8, maxTime: 52, minTime: 5, lizbeth: 38, zoey: 5, csSupport: 22 },
    { hour: "12:00", messages: 14.3, maxTime: 48, minTime: 6, lizbeth: 30, zoey: 0, csSupport: 18 },
    { hour: "13:00", messages: 14.4, maxTime: 55, minTime: 7, lizbeth: 28, zoey: 0, csSupport: 15 },
    { hour: "14:00", messages: 15.1, maxTime: 50, minTime: 5, lizbeth: 32, zoey: 0, csSupport: 17 },
    { hour: "15:00", messages: 13.9, maxTime: 58, minTime: 6, lizbeth: 35, zoey: 0, csSupport: 20 },
    { hour: "16:00", messages: 12.7, maxTime: 62, minTime: 8, lizbeth: 30, zoey: 0, csSupport: 16 },
    { hour: "17:00", messages: 11.8, maxTime: 65, minTime: 7, lizbeth: 25, zoey: 0, csSupport: 12 },
    { hour: "18:00", messages: 12.5, maxTime: 70, minTime: 9, lizbeth: 20, zoey: 0, csSupport: 10 },
    { hour: "19:00", messages: 22.0, maxTime: 75, minTime: 10, lizbeth: 0, zoey: 0, csSupport: 8 },
    { hour: "20:00", messages: 14.3, maxTime: 80, minTime: 12, lizbeth: 0, zoey: 10, csSupport: 6 },
    { hour: "21:00", messages: 9.6, maxTime: 85, minTime: 15, lizbeth: 0, zoey: 8, csSupport: 5 },
    { hour: "22:00", messages: 9.2, maxTime: 90, minTime: 18, lizbeth: 0, zoey: 6, csSupport: 4 },
    { hour: "23:00", messages: 5.6, maxTime: 95, minTime: 20, lizbeth: 0, zoey: 4, csSupport: 3 },
    { hour: "00:00", messages: 2.5, maxTime: 100, minTime: 25, lizbeth: 0, zoey: 0, csSupport: 2 }
  ];

  // const dailyDistribution = {
  //   "Lizbeth Bernardo": { L: 210, M: 195, X: 205, J: 198, V: 192 },
  //   "Zoey Vela": { L: 45, M: 48, X: 42, J: 50, V: 40 },
  //   "CS Support": { L: 120, M: 115, X: 118, J: 122, V: 113 },
  // };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Análisis de Actividad Entre Semana - Equipo de Soporte
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Lizbeth Bernardo</h3>
            <p className="text-3xl font-bold">1,000</p>
            <p className="text-sm text-gray-600">mensajes semanales</p>
            <p className="text-sm text-gray-600">9:00 AM - 7:00 PM</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Zoey Vela</h3>
            <p className="text-3xl font-bold">225</p>
            <p className="text-sm text-gray-600">mensajes semanales</p>
            <p className="text-sm text-gray-600">7:00 AM - 11:00 AM</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">CS Support</h3>
            <p className="text-3xl font-bold">588</p>
            <p className="text-sm text-gray-600">mensajes semanales</p>
            <p className="text-sm text-gray-600">Soporte continuo</p>
          </div>
        </div>

        <div className="space-y-8">
           {/* Tabla de métricas detalladas */}
        <div className="mb-8 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2 text-left">Hora</th>
                <th className="border p-2 text-right">Mensajes Promedio</th>
                <th className="border p-2 text-right">Tiempo Máx. (min)</th>
                <th className="border p-2 text-right">Tiempo Mín. (min)</th>
                <th className="border p-2 text-right">Lizbeth</th>
                <th className="border p-2 text-right">Zoey</th>
                <th className="border p-2 text-right">CS Support</th>
              </tr>
            </thead>
            <tbody>
              {hourlyData.map((row) => (
                <tr key={row.hour} className="hover:bg-gray-50">
                  <td className="border p-2 font-medium">{row.hour}</td>
                  <td className="border p-2 text-right">{row.messages.toFixed(1)}</td>
                  <td className="border p-2 text-right">{row.maxTime}</td>
                  <td className="border p-2 text-right">{row.minTime}</td>
                  <td className="border p-2 text-right">{row.lizbeth}</td>
                  <td className="border p-2 text-right">{row.zoey}</td>
                  <td className="border p-2 text-right">{row.csSupport}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td className="border p-2 font-medium">Total</td>
                <td className="border p-2 text-right">
                  {hourlyData.reduce((sum, row) => sum + row.messages, 0).toFixed(1)}
                </td>
                <td className="border p-2 text-right">
                  {Math.max(...hourlyData.map(row => row.maxTime))}
                </td>
                <td className="border p-2 text-right">
                  {Math.min(...hourlyData.map(row => row.minTime))}
                </td>
                <td className="border p-2 text-right">
                  {hourlyData.reduce((sum, row) => sum + row.lizbeth, 0)}
                </td>
                <td className="border p-2 text-right">
                  {hourlyData.reduce((sum, row) => sum + row.zoey, 0)}
                </td>
                <td className="border p-2 text-right">
                  {hourlyData.reduce((sum, row) => sum + row.csSupport, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Gráfica de mensajes por hora */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Distribución de Mensajes y Respuestas por Hora</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="messages" name="Mensajes Promedio" stroke="#8884d8" />
                <Line type="monotone" dataKey="lizbeth" name="Lizbeth" stroke="#82ca9d" />
                <Line type="monotone" dataKey="zoey" name="Zoey" stroke="#ffc658" />
                <Line type="monotone" dataKey="csSupport" name="CS Support" stroke="#ff8042" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Actividad Semanal</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semana" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="lizbeth" name="Lizbeth" fill="#8884d8" />
                  <Bar dataKey="zoey" name="Zoey" fill="#82ca9d" />
                  <Bar dataKey="csupport" name="CS Support" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Observaciones Clave</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="font-medium">1.</span>
                <span>
                  Lizbeth maneja el mayor volumen de mensajes, con picos de
                  actividad entre 10:00 y 11:00 AM
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">2.</span>
                <span>
                  Zoey proporciona cobertura temprana pero baja cantidad de mensajes (7:00 - 11:00 AM)
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">3.</span>
                <span>
                  CS Support mantiene un nivel constante de actividad a lo largo
                  del día
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">4.</span>
                <span>
                  La cobertura es más fuerte durante las mañanas cuando los tres
                  agentes están activos
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Recomendaciones</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="font-medium">1.</span>
                <span>
                  Considerar extender el horario de Zoey o reajustarlo.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">2.</span>
                <span>
                  Evaluar la necesidad de soporte adicional durante las tardes
                  (4:00 - 7:00 PM)
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">3.</span>
                <span>
                  Optimizar la distribución de carga de trabajo entre Lizbeth y
                  CS Support durante horas pico
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekdayAnalysis;
