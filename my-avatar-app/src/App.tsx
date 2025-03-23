import { useState } from "react";
import Avatar from "./components/Avatar";
import HaircutPanel from "./components/HaircutPanel";
import TopPanel from "./components/TopPanel";
import BottomPanel from "./components/BottomPanel";
import BodyPanel from "./components/BodyPanel";
import "./App.css";

function App() {
  // États pour chaque élément de personnalisation
  const [selectedHaircut, setSelectedHaircut] = useState<number>(0);
  const [selectedTop, setSelectedTop] = useState<number>(0);
  const [selectedBottom, setSelectedBottom] = useState<number>(0);
  const [selectedBody, setSelectedBody] = useState<number>(-1); // -1 pour pas de body

  // Génération dynamique du nom du personnage
  const generateCharacterName = () => {
    const haircutCode = selectedHaircut.toString();
    const topCode = selectedTop.toString().padStart(1, "0");
    const bottomCode = selectedBottom.toString().padStart(1, "0");
    
    if (selectedBody !== -1) {
        const bodyCode = selectedBody.toString().padStart(1, "0") + selectedBody.toString().padStart(1, "0");
        return `Meyuu${haircutCode}${bodyCode}`;
    } else {
        return `Meyuu${haircutCode}${topCode}${bottomCode}`;
    }
};

  // Mise à jour du personnage lorsque le body est sélectionné
  const handleSelectBody = (body: number) => {
    setSelectedBody(body);
  };

  // Mise à jour du personnage lorsque le haut ou le bas est sélectionné
  const handleSelectTop = (top: number) => {
    setSelectedBody(-1);
    setSelectedTop(top);
  };

  const handleSelectBottom = (bottom: number) => {
    setSelectedBody(-1);
    setSelectedBottom(bottom);
  };

  // Mise à jour du personnage lorsque la coupe est sélectionnée
  const handleSelectHaircut = (haircut: number) => {
    setSelectedHaircut(haircut);
  };

  return (
    <div className="app-container">
      <h1 className="title">Mini Meyuu Customizer 🎨</h1>
      <Avatar character={generateCharacterName()} />
      <h2>Coupes</h2>
      <HaircutPanel onSelect={handleSelectHaircut} />
      <h2>Hauts</h2>
      <TopPanel onSelect={handleSelectTop} />
      <h2>Bas</h2>
      <BottomPanel onSelect={handleSelectBottom} />
      <h2>Body</h2>
      <BodyPanel onSelect={handleSelectBody} />
    </div>
  );
}

export default App;
