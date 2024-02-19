import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import { Routes, Route} from "react-router-dom";
import CreatureList from "./Pages/CreatureList";
import CreatureDetails from "./Pages/CreatureDetails";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creatures" element={<CreatureList />} />
        <Route path="/creatures/:id" element={<CreatureDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
