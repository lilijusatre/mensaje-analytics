import "./App.css";
import Dashboard from "./components/Dashboard";
import MensajeDashboard from "./components/MensajeDashboard";

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
      </main>
    </div>
  );
}

export default App;
