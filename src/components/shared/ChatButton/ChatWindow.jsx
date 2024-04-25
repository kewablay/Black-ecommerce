import { SendIcon } from "assets/icons/svgIcons";
import React from "react";

function ChatWindow() {
  return (
    <div className="absolute z-50 right-5 bottom-24  md:right-24 md:bottom-10 w-[20rem] h-[20rem] rounded-md shadow-2xl bg-white">
      {/* WINDOW HEADER */}
      <div className="flex items-center justify-center p-4 bg-black rounded-tr-md rounded-tl-md">
        <span className="w-3 h-3 mr-2 bg-green-600 rounded-full"></span>
        <p className="font-medium text-white text-200">Live Chat</p>
      </div>

      {/* CHATS AREA */}
      <div className="flex flex-col gap-2 p-3 overflow-auto h-[12.5rem] text-100">
        {/* incoming message */}
        <p className="w-2/3 p-2 mr-auto bg-gray-200 rounded-md">
          Hi 👋, welcome to customer support. How may i assist you
        </p>
        {/* outgoing message */}
        <p className="w-2/3 p-2 ml-auto bg-blue-200 rounded-md ">
          Hi , Please my order is still pending approval.
        </p>
        <p className="w-2/3 p-2 ml-auto bg-blue-200 rounded-md ">
          Hi , Please my order is still pending approval.
        </p>
        <p className="w-2/3 p-2 ml-auto bg-blue-200 rounded-md ">
          Hi , Please my order is still pending approval.
        </p>
        <p className="w-2/3 p-2 ml-auto bg-blue-200 rounded-md ">
          Hi , Please my order is still pending approval.
        </p>
        <p className="w-2/3 p-2 ml-auto bg-blue-200 rounded-md ">
          Hi , Please my order is still pending approval.
        </p>
        <p className="w-2/3 p-2 ml-auto bg-blue-200 rounded-md ">
          Hi , Please my order is still pending approval.
        </p>
      </div>

      {/* MESSAGE BOX */}
      <div className="relative p-3">
        <textarea
          name="message-box"
          id="message-box"
          class="text-100 p-2 w-full h-10 border border-gray-300 rounded-md focus-visible:outline-blue-300 resize-none"
        ></textarea>

        {/* SEND BUTTON */}
        <button className="absolute z-50 p-1 bg-white rounded-md top-5 right-4">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
