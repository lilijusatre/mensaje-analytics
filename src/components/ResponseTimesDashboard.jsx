import React from 'react';

const MetricsTable = ({ title, data, totalResponses }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-4 border-b">Tiempo de Respuesta</th>
            <th className="text-right p-4 border-b">Cantidad</th>
            <th className="text-right p-4 border-b">Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([range, count], index) => (
            <tr key={index} className={`border-b ${count === Math.max(...Object.values(data)) ? 'bg-green-50' : ''}`}>
              <td className="p-4">{range}</td>
              <td className="text-right p-4 font-mono">{count.toLocaleString()}</td>
              <td className="text-right p-4 font-mono">
                {((count / totalResponses) * 100).toFixed(1)}%
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50 font-bold">
            <td className="p-4">Total de respuestas</td>
            <td className="text-right p-4 font-mono">{totalResponses.toLocaleString()}</td>
            <td className="text-right p-4 font-mono">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const ResponseTimesDashboard = () => {
  const lizbethData = {
    "0-30 minutos": 316,
    "31-40 minutos": 61,
    "41-50 minutos": 53,
    "51-60 minutos": 59,
    "1-2 horas": 307,
    "2-3 horas": 202,
    "Más de 3 horas": 1328
  };

  const zoeyData = {
    "0-30 minutos": 177,
    "31-40 minutos": 34,
    "41-50 minutos": 32,
    "51-60 minutos": 31,
    "1-2 horas": 119,
    "2-3 horas": 97,
    "Más de 3 horas": 348
  };

  const totalData = {
    "0-30 minutos": 493,
    "31-40 minutos": 95,
    "41-50 minutos": 85,
    "51-60 minutos": 90,
    "1-2 horas": 426,
    "2-3 horas": 299,
    "Más de 3 horas": 1676
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h2 className="text-lg font-bold mb-2">Resumen de Hallazgos:</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Lizbeth atendió un total de 2,326 mensajes
            <ul className="list-circle pl-6 mt-1">
              <li>13.6% en menos de 30 minutos</li>
              <li>57.1% después de 3 horas</li>
            </ul>
          </li>
          <li>Zoey atendió un total de 838 mensajes
            <ul className="list-circle pl-6 mt-1">
              <li>21.1% en menos de 30 minutos</li>
              <li>41.5% después de 3 horas</li>
            </ul>
          </li>
          <li>Zoey tiene mejor tiempo de respuesta promedio, con mayor porcentaje de respuestas rápidas pero menor número de mensajes contestados</li>
        </ul>
      </div>

      <MetricsTable 
        title="Tiempos de Respuesta - Lizbeth Bernardo" 
        data={lizbethData}
        totalResponses={2326}
      />
      
      <MetricsTable 
        title="Tiempos de Respuesta - Zoey Vela" 
        data={zoeyData}
        totalResponses={838}
      />

      <MetricsTable 
        title="Tiempos de Respuesta - Totales Combinados" 
        data={totalData}
        totalResponses={3164}
      />
    </div>
  );
};

export default ResponseTimesDashboard;