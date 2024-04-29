import React from "react";
import emptyConvo from "assets/images/no-messages.png";

function EmptyConversation() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div>
        <img src={emptyConvo} alt="" />
      </div>
      <p className="text-200 ">No conversations.</p>
    </div>
  );
}

export default EmptyConversation;
