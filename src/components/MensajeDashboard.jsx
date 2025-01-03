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

  useEffect(() => {
    const analyzeResponseTimes = async () => {
      try {
        const response = await fetch('/mensajes.csv');
      const text = await response.text();
      const result = Papa.parse(text, {
        header: true,
        skipEmptyLines: true
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
  }, []);

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

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">
          Estadísticas Detalladas de Tiempo de Respuesta
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Usuario</th>
                <th className="px-4 py-2 text-right">Promedio</th>
                <th className="px-4 py-2 text-right">Mediana</th>
                <th className="px-4 py-2 text-right">Tiempo Mínimo</th>
                <th className="px-4 py-2 text-right">Tiempo Máximo</th>
                <th className="px-4 py-2 text-right">Total Respuestas</th>
              </tr>
            </thead>
            <tbody>
              {responseData.map((user) => (
                <tr key={user.userId} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">{user.name}</td>
                  <td className="px-4 py-2 text-right">
                    {`${Math.floor(user.promedioMinutos / 60)}h ${Math.round(
                      user.promedioMinutos % 60
                    )}m`}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {`${Math.floor(user.medianaMinutos / 60)}h ${Math.round(
                      user.medianaMinutos % 60
                    )}m`}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {`${Math.floor(user.tiempoMinimo / 60)}h ${Math.round(
                      user.tiempoMinimo % 60
                    )}m`}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {`${Math.floor(user.tiempoMaximo / 60)}h ${Math.round(
                      user.tiempoMaximo % 60
                    )}m`}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {user.cantidadRespuestas.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResponseTimeDashboard;
