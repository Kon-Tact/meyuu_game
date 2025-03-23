import React from "react";

type BodyPanelProps = {
  onSelect: (body: number) => void;
};

const BodyPanel: React.FC<BodyPanelProps> = ({ onSelect }) => {
  const basePath = import.meta.env.BASE_URL;
  const bodies = Array.from({ length: 5 }, (_, i) => i + 2); // de 2 à 6

  return (
    <div className="panel">
      {bodies.map((body) => (
        <button key={body} onClick={() => onSelect(body)}
        className="image-button">
          <img
            src={`${basePath}/images/body/Body${body}.png`}
            alt={`Body ${body}`}
            className="button-image"
          />
        </button>
      ))}
    </div>
  );
};

export default BodyPanel;
