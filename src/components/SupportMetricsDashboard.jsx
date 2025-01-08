import React from 'react';

const MetricsTable = ({ title, data }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-4 border-b">Categoría</th>
            <th className="text-right p-4 border-b">Cantidad</th>
            <th className="text-right p-4 border-b">Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4">{row.category}</td>
              <td className="text-right p-4 font-mono">{row.quantity.toLocaleString()}</td>
              <td className="text-right p-4 font-mono">{row.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SupportMetricsDashboard = () => {
  const lizbethData = [
    {
      category: "Mensajes recibidos en horario (L-V 9:00-19:00)",
      quantity: 1755,
      percentage: 26.8
    },
    {
      category: "Mensajes recibidos fuera de horario",
      quantity: 4804,
      percentage: 73.2
    },
    {
      category: "Respuestas a mensajes recibidos en horario",
      quantity: 1077,
      percentage: 61.4
    },
    {
      category: "Respuestas a mensajes recibidos fuera de horario",
      quantity: 1250,
      percentage: 26.0
    }
  ];

  const zoeyData = [
    {
      category: "Mensajes recibidos en horario (L-V 7:00-11:00, S-D 9:00-22:00)",
      quantity: 1592,
      percentage: 24.3
    },
    {
      category: "Mensajes recibidos fuera de horario",
      quantity: 4804,
      percentage: 75.7
    },
    {
      category: "Respuestas a mensajes recibidos en horario",
      quantity: 356,
      percentage: 22.4
    },
    {
      category: "Respuestas a mensajes recibidos fuera de horario",
      quantity: 482,
      percentage: 9.7
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h2 className="text-lg font-bold mb-2">Nota:</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Todos los horarios están ajustados a la zona horaria de México (UTC-6)</li><br></br>
          <li>Observaciones importantes: <br></br><br></br> 
          Lizbeth: Recibe 1,755 mensajes durante su horario y responde 1,077 de ellos (61.4%) <br></br> De los mensajes que llegan fuera de su horario, 26% <br></br>Está respondiendo más mensajes que llegan fuera de su horario que dentro de su horario <br></br><br></br>
          Zoey: Recibe 1,592 mensajes durante su horario y responde 356 de ellos (22.4%) <br></br>De los mensajes que llegan fuera de su horario, responde 9.7% <br></br> También está atendiendo mensajes fuera de su horario</li>
        </ul>
      </div>

      <MetricsTable 
        title="Métricas de Lizbeth Bernardo" 
        data={lizbethData}
      />
      
      <MetricsTable 
        title="Métricas de Zoey Vela" 
        data={zoeyData}
      />
    </div>
    
  );
};

export default SupportMetricsDashboard;