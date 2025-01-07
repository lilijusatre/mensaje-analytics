import "./App.css";
import Distribucion from "./components/Distribucion";
import ZoeyWeekendAnalysis from "./components/ZoeyWeekendAnalysis";
import Dashboard from "./components/Dashboard";
import MensajeDashboard from "./components/MensajeDashboard";
import WeekdayAnalysis from "./components/WeekdayAnalysis";
import ResponseTimeAnalysis from "./components/ResponseTimeAnalysis";
import SupportMetricsDashboard from "./components/SupportMetricsDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Análisis de Mensajes Hostaway
          </h1>
        </div>
      </header>
      <main>
        <Dashboard />
        <MensajeDashboard />
        <Distribucion />
        <WeekdayAnalysis />
        <ZoeyWeekendAnalysis />
        <ResponseTimeAnalysis />
        <SupportMetricsDashboard />
      </main>
    </div>
  );
}

export default App;
