import { TickIcon } from "assets/icons/svgIcons";
import React from "react";

function PlanInfo({ title, content }) {
  return (
    <div className="flex gap-2">
      <div>
        <TickIcon />
      </div>

      <p>
        {title}
        <span className="ml-2 text-textGray">{content}</span>
      </p>
    </div>
  );
}

export default PlanInfo;
