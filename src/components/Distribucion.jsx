import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Papa from "papaparse";

const MessageVisualization = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/mensajes.csv");
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: function (results) {
            if (!results.data || results.data.length === 0) {
              setError("No se encontraron datos en el CSV");
              return;
            }

            const processedData = Array(24)
              .fill()
              .map((_, hora) => ({
                hora: `${hora}:00`,
                promedioMensajes: 0,
                ...diasSemana.reduce((acc, dia) => ({ ...acc, [dia]: 0 }), {}),
              }));

            let totalMensajes = 0;
            results.data.forEach((row) => {
              if (row.Fecha) {
                try {
                  const fecha = new Date(row.Fecha);
                  fecha.setHours(fecha.getHours() - 6); // Ajuste de zona horaria
                  const dia = fecha.getDay();
                  const hora = fecha.getHours();
                  if (!isNaN(dia) && !isNaN(hora)) {
                    processedData[hora][diasSemana[dia]]++;
                    totalMensajes++;
                  }
                } catch (e) {
                  console.error("Error procesando fecha:", row.Fecha, e);
                }
              }
            });

            console.log(`Procesados ${totalMensajes} mensajes`);
            setData(processedData);
          },
          error: function (error) {
            setError("Error al procesar el CSV: " + error.message);
          },
        });
      } catch (error) {
        setError("Error al cargar el archivo: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border rounded shadow-lg">
          <p className="font-bold">{`Hora: ${label}`}</p>
          {payload.map((item, index) => (
            <p key={index} className="text-sm" style={{ color: item.color }}>
              {`${item.name}: ${item.value} mensajes`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          Cargando datos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow p-6 text-center text-red-600">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Distribución de Mensajes por Día y Hora
        </h2>

        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="hora"
                label={{ value: "Hora del día", position: "bottom" }}
              />
              <YAxis
                label={{
                  value: "              Número de mensajes",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {diasSemana.map((dia, index) => (
                <Bar
                  key={dia}
                  dataKey={dia}
                  name={dia}
                  fill={`hsl(${(index * 360) / 7}, 70%, 50%)`}
                  stackId="stack"
                />
              ))}
              <Line
                type="monotone"
                dataKey="promedioMensajes"
                name="Promedio por hora"
                stroke="#000000"
                strokeWidth={4}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          * Datos ajustados al horario de México (UTC-6)
          <br />* La línea negra representa el promedio de mensajes por hora
        </div>
      </div>
    </div>
  );
};

export default MessageVisualization;
