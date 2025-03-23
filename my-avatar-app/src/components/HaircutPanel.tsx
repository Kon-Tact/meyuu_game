import React from "react";

type HaircutPanelProps = {
  onSelect: (haircut: number) => void;
};

const HaircutPanel: React.FC<HaircutPanelProps> = ({ onSelect }) => {
  const basePath = import.meta.env.BASE_URL;
  const haircuts = Array.from({ length: 7 }, (_, i) => i); // de 0 à 6

  return (
    <div className="panel">
      {haircuts.map((haircut) => (
        <button 
          key={haircut} 
          onClick={() => onSelect(haircut)} 
          className="image-button">
          <img
            src={`${basePath}/images/haircut/MeyuuCoupe${haircut}.png`}
            alt={`Coupe ${haircut}`}
            className="button-image"
          />
        </button>
      ))}
    </div>
  );
};

export default HaircutPanel;
