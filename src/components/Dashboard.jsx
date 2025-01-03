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

const Dashboard = () => {
  // Datos de ejemplo basados en el análisis del CSV
  const data = {
    lizbethHourly: [
      { hora: "7:00", mensajes: 1, porcentaje: 0.1 },
      { hora: "8:00", mensajes: 3, porcentaje: 0.3 },
      { hora: "9:00", mensajes: 473, porcentaje: 15.7 },
      { hora: "10:00", mensajes: 391, porcentaje: 13.0 },
      { hora: "11:00", mensajes: 297, porcentaje: 9.9 },
      { hora: "12:00", mensajes: 248, porcentaje: 8.2 },
      { hora: "13:00", mensajes: 255, porcentaje: 8.5 },
      { hora: "14:00", mensajes: 263, porcentaje: 8.7 },
      { hora: "15:00", mensajes: 188, porcentaje: 6.2 },
      { hora: "16:00", mensajes: 230, porcentaje: 7.6 },
      { hora: "17:00", mensajes: 218, porcentaje: 7.2 },
      { hora: "18:00", mensajes: 252, porcentaje: 8.4 },
      { hora: "19:00", mensajes: 49, porcentaje: 1.6 },
      { hora: "20:00", mensajes: 20, porcentaje: 0.7 },
      { hora: "21:00", mensajes: 15, porcentaje: 0.5 },
      { hora: "22:00", mensajes: 32, porcentaje: 1.1 },
    ],
    lizbethDaily: [
      { dia: "Domingo", mensajes: 0, porcentaje: 0 },
      { dia: "Lunes", mensajes: 591, porcentaje: 20.1 },
      { dia: "Martes", mensajes: 481, porcentaje: 16.3 },
      { dia: "Miércoles", mensajes: 455, porcentaje: 15.4 },
      { dia: "Jueves", mensajes: 613, porcentaje: 20.8 },
      { dia: "Viernes", mensajes: 797, porcentaje: 27.1 },
      { dia: "Sábado", mensajes: 1, porcentaje: 0.3 },
    ],
    zoeyHourly: [
      { hora: "9:00", mensajes: 86, porcentaje: 8.92 },
      { hora: "10:00", mensajes: 136, porcentaje: 14.11 },
      { hora: "11:00", mensajes: 97, porcentaje: 10.06 },
      { hora: "12:00", mensajes: 60, porcentaje: 6.22 },
      { hora: "13:00", mensajes: 51, porcentaje: 5.29 },
      { hora: "14:00", mensajes: 37, porcentaje: 3.84 },
      { hora: "15:00", mensajes: 78, porcentaje: 8.09 },
      { hora: "16:00", mensajes: 43, porcentaje: 4.46 },
      { hora: "17:00", mensajes: 33, porcentaje: 3.42 },
      { hora: "18:00", mensajes: 22, porcentaje: 2.28 },
      { hora: "19:00", mensajes: 54, porcentaje: 5.29 },
      { hora: "20:00", mensajes: 86, porcentaje: 8.92 },
      { hora: "21:00", mensajes: 93, porcentaje: 9.34 },
      { hora: "22:00", mensajes: 49, porcentaje: 5.08 },
    ],
    zoeyDaily: [
      { dia: "Domingo", mensajes: 322, porcentaje: 33.4 },
      { dia: "Lunes", mensajes: 14, porcentaje: 1.45 },
      { dia: "Martes", mensajes: 63, porcentaje: 6.54 },
      { dia: "Miércoles", mensajes: 56, porcentaje: 5.81 },
      { dia: "Jueves", mensajes: 78, porcentaje: 7.47 },
      { dia: "Viernes", mensajes: 83, porcentaje: 8.61 },
      { dia: "Sábado", mensajes: 354, porcentaje: 36.72 },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-8">
        Dashboard de Análisis de Customer Support
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Análisis de Lizbeth */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">Lizbeth Bernardo</h2>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">
              Distribución por Hora
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.lizbethHourly}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hora" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="mensajes"
                    stroke="#4f46e5"
                    name="Mensajes"
                  />
                  <Line
                    type="monotone"
                    dataKey="porcentaje"
                    stroke="#10b981"
                    name="Porcentaje"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Análisis:</h4>
              <ul className="list-disc pl-5">
                <li>Mayor actividad: 9:00 AM (15.7% de mensajes)</li>
                <li>Horario productivo: 9:00 AM - 2:00 PM</li>
                <li>Actividad consistente durante horario laboral</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Distribución por Día</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.lizbethDaily}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dia" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="mensajes" fill="#4f46e5" name="Mensajes" />
                  <Bar dataKey="porcentaje" fill="#10b981" name="Porcentaje" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Análisis:</h4>
              <ul className="list-disc pl-5">
                <li>Mayor actividad: Viernes (27.1%)</li>
                <li>Distribución uniforme entre semana</li>
                <li>Mínima actividad en fin de semana</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Análisis de Zoey */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">Zoey Vela</h2>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">
              Distribución por Hora
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.zoeyHourly}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hora" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="mensajes"
                    stroke="#4f46e5"
                    name="Mensajes"
                  />
                  <Line
                    type="monotone"
                    dataKey="porcentaje"
                    stroke="#10b981"
                    name="Porcentaje"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Análisis:</h4>
              <ul className="list-disc pl-5">
                <li>Pico principal: 10:00 AM (14.11%)</li>
                <li>Segundo pico: 11:00 AM (10.06%)</li>
                <li>Actividad significativa en noche: 9:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Distribución por Día</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.zoeyDaily}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dia" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="mensajes" fill="#4f46e5" name="Mensajes" />
                  <Bar dataKey="porcentaje" fill="#10b981" name="Porcentaje" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Análisis:</h4>
              <ul className="list-disc pl-5">
                <li>Concentración en fin de semana (70.12%)</li>
                <li>Sábado: 36.72% de mensajes</li>
                <li>Domingo: 33.40% de mensajes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recomendaciones Generales */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recomendaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Lizbeth Bernardo:</h3>
            <ul className="list-disc pl-5">
              <li>Mantener horario actual (L-V 9am-7pm)</li>
              <li>Priorizar cobertura en horario pico (9am-2pm)</li>
              <li>Considerar apoyo adicional los viernes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Zoey Vela:</h3>
            <ul className="list-disc pl-5">
              <li>Reasignar como especialista de fin de semana</li>
              <li>Ajustar horario entre semana: 9am-12pm</li>
              <li>Expandir cobertura de fin de semana</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
