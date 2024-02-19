import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import { Routes, Route} from "react-router-dom";
import CreatureList from "./Pages/CreatureList";
import CreatureDetails from "./Pages/CreatureDetails";
import EquipmentList from "./Pages/EquipmentList";
import EquipmentDetails from "./Pages/EquipmentDetails";
import MonsterList from "./Pages/MonsterList";
import MonsterDetails from "./Pages/MonsterDetails";
import TreasureList from "./Pages/TreasureList";
import TreasureDetails from "./Pages/TreasureDetails";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creatures" element={<CreatureList />} />
        <Route path="/creatures/:id" element={<CreatureDetails />} />
        <Route path="/equipment" element={<EquipmentList />} />
        <Route path="/equipment/:id" element={<EquipmentDetails />} />
        <Route path="/monsters" element={<MonsterList />} />
        <Route path="/monsters/:id" element={<MonsterDetails />} />
        <Route path="/treasure" element={<TreasureList />} />
        <Route path="/treasure/:id" element={<TreasureDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
