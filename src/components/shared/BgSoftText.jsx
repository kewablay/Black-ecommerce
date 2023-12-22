import React from "react";

function BgSoftText({ text }) {
  return (
    <p className="absolute left-0 font-bold whitespace-nowrap bottom-[20%] sm:bottom-0 lg:text-[150px] text-950 -z-10 opacity-5 ">
      {text}
    </p>
  );
}

export default BgSoftText;
