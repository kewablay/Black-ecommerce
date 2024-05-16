import React from "react";
import Skeleton from "react-loading-skeleton";

function CryptoCard({ name, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-5 p-5 bg-white border rounded-lg shadow-lg hover:border-primary transition-100"
    >
      {icon ? (
        <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden bg-bgGray">
          <img src={icon} alt={icon} className="object-cover w-full h-full" />
        </div>
      ) : (
        <div className="animate-pulse w-[7rem] h-[7rem] rounded-full overflow-hidden bg-bgGray"></div>
      )}

      <p>{name || <Skeleton width={80} />}</p>
    </div>
  );
}

export default CryptoCard;
