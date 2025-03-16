import React from "react";

type AvatarProps = {
  character: string;
};

const Avatar: React.FC<AvatarProps> = ({ character }) => {
  const basePath = import.meta.env.BASE_URL;
  const imagePath = `${basePath}images/characters/${character}`;

  return (
    <div className="relative flex justify-center">
      <img
        src={imagePath}
        alt="Character"
        style={{ width: "60%", height: "auto" }} // 🔥 Taille divisée par 2
      />
    </div>
  );
};

export default Avatar;
