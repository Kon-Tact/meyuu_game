import { useState } from "react";
import Avatar from "./components/Avatar";
import HaircutPanel from "./components/HaircutPanel";
import "./App.css";

const characters = ["Meyuu0.png", "Meyuu1.png"];
const haircutList = ["MeyuuCoupe0.png", "MeyuuCoupe1.png"];

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<string>(characters[0]);

  const handleSelectHaircut = (haircut: string) => {
    if (haircut === "MeyuuCoupe1.png") {
      setSelectedCharacter("Meyuu1.png");
    } else {
      setSelectedCharacter("Meyuu0.png");
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Mini Meyuu Customizer 🎨</h1>

      {/* Avatar centré */}
      <div className="avatar-container">
        <Avatar character={selectedCharacter} />
      </div>

      {/* Sélection des coupes */}
      <HaircutPanel haircutList={haircutList} onSelect={handleSelectHaircut} />
    </div>
  );
}

export default App;
