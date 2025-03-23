import React from "react";

type AvatarProps = {
  character: string;
};

const Avatar: React.FC<AvatarProps> = ({ character }) => {
  const basePath = import.meta.env.BASE_URL;
  const imagePath = `${basePath}/images/characters/${character}.png`;
  return (
  <div className="avatar">
      <img
        src={imagePath}
        alt="Character"
        style={{ width: "40%", height: "auto" }}
      />
  </div>
  );
};

export default Avatar;