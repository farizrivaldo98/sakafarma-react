import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Maintenance from "./pages/Maintenance";
import Pareto from "./pages/ParetoData";
import Instrument from "./pages/Instrument";
import CreateNew from "./pages/CreateNew";
import CreateEdit from "./pages/CreateEdit";
import AppPareto from "./pages/building";
import ParetoCoba from "./pages/ParetoCoba";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Instrument" element={<Instrument />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/pareto" element={<Pareto />} />
        <Route path="/createnew" element={<CreateNew />} />
        <Route path="/createedite/:id" element={<CreateEdit />} />
        <Route path="/building" element={<AppPareto />} />
        <Route path="/paretocoba" element={<ParetoCoba />} />
      </Routes>
    </div>
  );
}

export default App;
