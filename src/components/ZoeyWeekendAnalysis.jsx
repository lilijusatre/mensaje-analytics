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

const ZoeyWeekendAnalysis = () => {
  const weeklyData = [
    { semana: "2024-W1", totalMensajes: 98, sabado: 0, domingo: 98 },
    { semana: "2024-W2", totalMensajes: 142, sabado: 82, domingo: 60 },
    { semana: "2024-W3", totalMensajes: 161, sabado: 86, domingo: 75 },
    { semana: "2024-W4", totalMensajes: 154, sabado: 86, domingo: 68 },
    { semana: "2024-W5", totalMensajes: 92, sabado: 71, domingo: 21 },
    { semana: "2024-W6", totalMensajes: 29, sabado: 29, domingo: 0 },
  ];

  const hourlyData = [
    { hora: "09:00", mensajes: 78 },
    { hora: "10:00", mensajes: 133 },
    { hora: "11:00", mensajes: 92 },
    { hora: "12:00", mensajes: 57 },
    { hora: "13:00", mensajes: 45 },
    { hora: "14:00", mensajes: 35 },
    { hora: "15:00", mensajes: 69 },
    { hora: "16:00", mensajes: 41 },
    { hora: "17:00", mensajes: 33 },
    { hora: "18:00", mensajes: 22 },
    { hora: "19:00", mensajes: 29 },
    { hora: "20:00", mensajes: 13 },
    { hora: "21:00", mensajes: 14 },
    { hora: "22:00", mensajes: 13 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Análisis de Actividad en Fines de Semana - Zoey Vela
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Total Mensajes</h3>
            <p className="text-3xl font-bold">676</p>
            <p className="text-sm text-gray-600">en fines de semana</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Distribución</h3>
            <p className="text-3xl font-bold">354 / 322</p>
            <p className="text-sm text-gray-600">Sábados / Domingos</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Hora Pico</h3>
            <p className="text-3xl font-bold">10:00</p>
            <p className="text-sm text-gray-600">133 mensajes</p>
          </div>
        </div>

        <div className="space-y-6">
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
                  <Bar dataKey="sabado" name="Sábado" fill="#8884d8" />
                  <Bar dataKey="domingo" name="Domingo" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

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
                    dataKey="mensajes"
                    name="Mensajes"
                    stroke="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Observaciones Clave</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="font-medium">1.</span>
                <span>
                  Mayor actividad durante las mañanas, especialmente entre 9:00
                  y 11:00
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">2.</span>
                <span>
                  Distribución equilibrada entre sábados (354) y domingos (322)
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">3.</span>
                <span>
                  Tendencia de disminución gradual de actividad después de las
                  15:00 horas
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium">4.</span>
                <span>
                  Volumen consistente durante las primeras 4 semanas, con
                  disminución en las últimas dos
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoeyWeekendAnalysis;
