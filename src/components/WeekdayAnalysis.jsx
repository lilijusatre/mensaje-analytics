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
    { hora: "07:00", lizbeth: 0, zoey: 15, csupport: 5 },
    { hora: "08:00", lizbeth: 0, zoey: 18, csupport: 8 },
    { hora: "09:00", lizbeth: 25, zoey: 12, csupport: 15 },
    { hora: "10:00", lizbeth: 35, zoey: 8, csupport: 20 },
    { hora: "11:00", lizbeth: 38, zoey: 5, csupport: 22 },
    { hora: "12:00", lizbeth: 30, zoey: 0, csupport: 18 },
    { hora: "13:00", lizbeth: 28, zoey: 0, csupport: 15 },
    { hora: "14:00", lizbeth: 32, zoey: 0, csupport: 17 },
    { hora: "15:00", lizbeth: 35, zoey: 0, csupport: 20 },
    { hora: "16:00", lizbeth: 30, zoey: 0, csupport: 16 },
    { hora: "17:00", lizbeth: 25, zoey: 0, csupport: 12 },
    { hora: "18:00", lizbeth: 20, zoey: 0, csupport: 10 },
    { hora: "19:00", lizbeth: 15, zoey: 0, csupport: 8 },
  ];

  const dailyDistribution = {
    "Lizbeth Bernardo": { L: 210, M: 195, X: 205, J: 198, V: 192 },
    "Zoey Vela": { L: 45, M: 48, X: 42, J: 50, V: 40 },
    "CS Support": { L: 120, M: 115, X: 118, J: 122, V: 113 },
  };

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
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Distribución por Hora
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hora" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="lizbeth"
                    name="Lizbeth"
                    stroke="#8884d8"
                  />
                  <Line
                    type="monotone"
                    dataKey="zoey"
                    name="Zoey"
                    stroke="#82ca9d"
                  />
                  <Line
                    type="monotone"
                    dataKey="csupport"
                    name="CS Support"
                    stroke="#ffc658"
                  />
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
