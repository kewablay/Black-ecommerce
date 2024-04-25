import { Chat } from "assets/icons/svgIcons";
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

function ChatButton() {
  const [showChatWindow, setshowChatWindow] = useState(false);

  return (
    <>
      {/* CHAT WINDOW */}
      <div
        className={`${
          !showChatWindow && " hidden"
        } transition-transform  duration-100 ease-in-out`}
      >
        <ChatWindow />
      </div>

      <div className="absolute z-50 right-5 bottom-5 md:right-10 md:bottom-10">
        <button
          onClick={() => setshowChatWindow((prev) => !prev)}
          className="p-4 rounded-full shadow-lg shrink-0 bg-primaryLight"
        >
          <Chat />
        </button>
      </div>
    </>
  );
}

export default ChatButton;
