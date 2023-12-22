import React from "react";
import { useSwiper } from "swiper/react";
import { Arrow } from "../../assets/icons/svgIcons";

function SwipperNavButtons() {
  const swipper = useSwiper();
  return (
    <div className="flex gap-4">
      <button
        onClick={() => swipper.slidePrev()}
        className="p-3 bg-white border rounded-full"
      >
        <Arrow />
      </button>
      <button
        onClick={() => swipper.slideNext()}
        className="p-3 rotate-180 bg-white border rounded-full"
      >
        <Arrow />
      </button>
    </div>
  );
}

export default SwipperNavButtons;
