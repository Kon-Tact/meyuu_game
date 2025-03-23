import React from "react";

type AvatarProps = {
  character: string;
};

const Avatar: React.FC<AvatarProps> = ({ character }) => {
  const basePath = import.meta.env.BASE_URL;
  const imagePath = `${basePath}/images/characters/${character}.png`;

function downloadImage(imageUrl: string) {
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "Meyuu_Avatar.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const handleImageClick = () => {
  const isConfirmed = window.confirm("Voulez-vous télécharger cette image ?");
  if (isConfirmed) {
    downloadImage(imagePath);
  }
};

  return (
  <div className="avatar" onClick={handleImageClick} style={{ cursor: "pointer" }}>
      <img
        src={imagePath}
        alt="Character"
        style={{ width: "50%", height: "auto" }}
      />
  </div>
  );
};

export default Avatar;