import React from "react";

type TopPanelProps = {
  onSelect: (top: number) => void;
};

const TopPanel: React.FC<TopPanelProps> = ({ onSelect }) => {
  const basePath = import.meta.env.BASE_URL;
  const tops = Array.from({ length: 2 }, (_, i) => i); // de 0 à 1

  return (
    <div className="panel">
      {tops.map((top) => (
        <button key={top} onClick={() => onSelect(top)}
        className="image-button">
          <img
            src={`${basePath}/images/haut/Haut${top}.png`}
            alt={`Haut ${top}`}
            className="button-image"
          />
        </button>
      ))}
    </div>
  );
};

export default TopPanel;