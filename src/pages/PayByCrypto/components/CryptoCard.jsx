import React from "react";

function CryptoCard({ name, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-5 p-5 bg-white border rounded-lg shadow-lg hover:border-primary transition-100"
    >
      <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden bg-bgGray">
        <img src={icon} alt={icon} className="object-cover w-full h-full" />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default CryptoCard;
