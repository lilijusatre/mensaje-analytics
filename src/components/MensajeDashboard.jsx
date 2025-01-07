import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Papa from "papaparse";
import _ from "lodash";

const ResponseTimeDashboard = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mapeo de IDs a nombres
  const userNames = {
    system: "Huéspedes",
    "User #943867": "Lizbeth Bernardo",
    "Account #36321": "Mensajes Automáticos",
    "User #955402": "Zoey Vela",
    "User #920496": "CS Support",
    "User #945049": "Damaris Ayala",
    "User #892271": "User #892271",
    "User #955217": "User #955217",
  };

  const [selectedMetric, setSelectedMetric] = useState("messages"); // 'messages' o 'times'

  const hourlyMetrics = [
    {
      hour: "07:00",
      messages: 2.8,
      maxTime: 35,
      minTime: 8,
      lizbeth: 0,
      zoey: 15,
      csSupport: 12,
    },
    {
      hour: "08:00",
      messages: 36.0,
      maxTime: 42,
      minTime: 5,
      lizbeth: 0,
      zoey: 28,
      csSupport: 18,
    },
    {
      hour: "09:00",
      messages: 19.9,
      maxTime: 38,
      minTime: 4,
      lizbeth: 25,
      zoey: 22,
      csSupport: 15,
    },
    {
      hour: "10:00",
      messages: 39.6,
      maxTime: 45,
      minTime: 3,
      lizbeth: 35,
      zoey: 18,
      csSupport: 20,
    },
    {
      hour: "11:00",
      messages: 19.8,
      maxTime: 52,
      minTime: 5,
      lizbeth: 38,
      zoey: 5,
      csSupport: 22,
    },
    {
      hour: "12:00",
      messages: 14.3,
      maxTime: 48,
      minTime: 6,
      lizbeth: 30,
      zoey: 0,
      csSupport: 18,
    },
    {
      hour: "13:00",
      messages: 14.4,
      maxTime: 55,
      minTime: 7,
      lizbeth: 28,
      zoey: 0,
      csSupport: 15,
    },
    {
      hour: "14:00",
      messages: 15.1,
      maxTime: 50,
      minTime: 5,
      lizbeth: 32,
      zoey: 0,
      csSupport: 17,
    },
    {
      hour: "15:00",
      messages: 13.9,
      maxTime: 58,
      minTime: 6,
      lizbeth: 35,
      zoey: 0,
      csSupport: 20,
    },
    {
      hour: "16:00",
      messages: 12.7,
      maxTime: 62,
      minTime: 8,
      lizbeth: 30,
      zoey: 0,
      csSupport: 16,
    },
    {
      hour: "17:00",
      messages: 11.8,
      maxTime: 65,
      minTime: 7,
      lizbeth: 25,
      zoey: 0,
      csSupport: 12,
    },
    {
      hour: "18:00",
      messages: 12.5,
      maxTime: 70,
      minTime: 9,
      lizbeth: 20,
      zoey: 0,
      csSupport: 10,
    },
    {
      hour: "19:00",
      messages: 22.0,
      maxTime: 75,
      minTime: 10,
      lizbeth: 0,
      zoey: 0,
      csSupport: 8,
    },
  ];

  useEffect(() => {
    const analyzeResponseTimes = async () => {
      try {
        const response = await fetch("/mensajes.csv");
        const text = await response.text();
        const result = Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
        });

        // Agrupar mensajes por conversación
        const conversationGroups = _.groupBy(result.data, "conversation ID");
        const userResponseTimes = {};

        Object.values(conversationGroups).forEach((conversation) => {
          const sortedMessages = _.sortBy(
            conversation,
            (msg) => new Date(msg.Fecha)
          );

          for (let i = 1; i < sortedMessages.length; i++) {
            const currentMsg = sortedMessages[i];
            const previousMsg = sortedMessages[i - 1];

            if (
              currentMsg["Mensaje enviado por:"] !==
              previousMsg["Mensaje enviado por:"]
            ) {
              const currentUser = currentMsg["Mensaje enviado por:"];
              const responseTime =
                new Date(currentMsg.Fecha) - new Date(previousMsg.Fecha);

              if (!userResponseTimes[currentUser]) {
                userResponseTimes[currentUser] = [];
              }

              if (responseTime < 24 * 60 * 60 * 1000) {
                // Solo considerar respuestas dentro de 24 horas
                userResponseTimes[currentUser].push(responseTime);
              }
            }
          }
        });

        // Calcular estadísticas
        const chartData = Object.entries(userResponseTimes)
          .filter(([user, times]) => times.length > 50) // Filtrar usuarios con pocas interacciones
          .map(([user, times]) => ({
            userId: user,
            name: userNames[user] || user,
            promedioMinutos: _.mean(times) / (1000 * 60),
            medianaMinutos:
              _.sortBy(times)[Math.floor(times.length / 2)] / (1000 * 60),
            cantidadRespuestas: times.length,
            tiempoMinimo: _.min(times) / (1000 * 60),
            tiempoMaximo: _.max(times) / (1000 * 60),
          }))
          .sort((a, b) => a.promedioMinutos - b.promedioMinutos); // Ordenar por tiempo de respuesta promedio

        setResponseData(chartData);
        setLoading(false);
      } catch (error) {
        console.error("Error al procesar datos:", error);
        setLoading(false);
      }
    };

    analyzeResponseTimes();
  });

  if (loading) {
    return <div className="text-center p-4">Cargando datos...</div>;
  }

  return (
    <div className="space-y-8 p-4">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">
          Tiempo de Respuesta por Usuario
        </h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={responseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={100}
                interval={0}
              />
              <YAxis
                label={{ value: "Minutos", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => {
                  if (name === "Cantidad de Respuestas") {
                    return [value.toFixed(0), name];
                  }
                  const hours = Math.floor(value / 60);
                  const minutes = Math.round(value % 60);
                  return [`${hours}h ${minutes}m`, name];
                }}
              />
              <Legend />
              <Bar
                dataKey="promedioMinutos"
                fill="#8884d8"
                name="Tiempo Promedio"
              />
              <Bar
                dataKey="medianaMinutos"
                fill="#82ca9d"
                name="Tiempo Mediana"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg border p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Análisis Integral de Tiempos de Respuesta
            </h2>
          </div>
        </div>
        {/* Tabla de métricas detalladas */}
      

        {/* Gráfica de mensajes por hora */}
        

        {/* Observaciones adicionales */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">
            Observaciones de las Métricas Detalladas
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="font-medium">1.</span>
              <span>
                Hora pico de mensajes: 10:00 AM con 39.6 mensajes promedio
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-medium">2.</span>
              <span>Mayor tiempo de respuesta: 75 minutos (19:00)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-medium">3.</span>
              <span>Mejor tiempo de respuesta: 3 minutos (10:00)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-medium">4.</span>
              <span>
                CS Support mantiene presencia constante durante todo el día
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponseTimeDashboard;
