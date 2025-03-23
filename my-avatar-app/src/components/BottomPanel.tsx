import React from "react";

type BottomPanelProps = {
  onSelect: (bottom: number) => void;
};

const BottomPanel: React.FC<BottomPanelProps> = ({ onSelect }) => {
  const basePath = import.meta.env.BASE_URL;
  const bottoms = Array.from({ length: 2 }, (_, i) => i); // de 0 à 1

  return (
    <div className="panel">
      {bottoms.map((bottom) => (
        <button key={bottom} onClick={() => onSelect(bottom)}
        className="image-button">
          <img
            src={`${basePath}/images/bas/Bas${bottom}.png`}
            alt={`Bas ${bottom}`}
            className="button-image"
          />
        </button>
      ))}
    </div>
  );
};

export default BottomPanel;