import React, { useEffect } from "react";
import startConvo from "/public/images/start-conversation.png";
import socket from "services/socket.services";

function StartConversation({ setNewMessageSenderId }) {
  useEffect(() => {
    // Add socket listener for receiving messages
    socket.on("getMessage", (data) => {
      console.log("Received message: ", data);
      // update sender id state to be used to show new message tag
      setNewMessageSenderId(data.senderId);
    });

    // Clean up socket listener on unmount
    return () => {
      socket.off("getMessage");
    };
  }, []);

  return (
    <div className="flex flex-col h-[60vh] items-center justify-center gap-3">
      <div>
        <img src={startConvo} alt="start-convo" />
      </div>
      <div className="space-y-2 text-center md:w-1/2 xl:w-2/5">
        <h4 className="font-bold">Start a conversation</h4>
        <p className="font-normal text-200">
          Open a new conversation to start chating with your customers
        </p>
      </div>
    </div>
  );
}

export default StartConversation;
