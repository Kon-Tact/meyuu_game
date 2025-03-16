import React from "react";

type HaircutPanelProps = {
  haircutList: string[];
  onSelect: (haircut: string) => void;
};

const HaircutPanel: React.FC<HaircutPanelProps> = ({ haircutList, onSelect }) => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2">Choisissez une coupe</h2>

      {/* Ajout de la classe haircut-container pour s'assurer du bon alignement */}
      <div className="haircut-container">
        {haircutList.map((haircut, index) => {
          const imagePath = `${basePath}images/haircut/${haircut}`;

          return (
            <button
              key={index}
              className="border-4 border-black hover:border-gray-500 rounded-lg flex items-center justify-center bg-black"
              onClick={() => onSelect(haircut)}
              style={{
                width: "160px",
                height: "160px",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={imagePath}
                alt={haircut}
                style={{
                  width: "120px",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HaircutPanel;