import { SendIcon } from "assets/icons/svgIcons";
import {
  useCreateConversation,
  useGetMessages,
  useSendMessage,
} from "hooks/useChat";
import { useGetAdminProfile, useGetUserProfile } from "hooks/useProfile";
import React, { useEffect, useRef, useState } from "react";
import { getSuperAdmin } from "utils/getSuperAdmin";
import Loader from "../Loader";
import ScrollToBottom from "react-scroll-to-bottom";
import socket from "services/socket.services";
import { useQueryClient } from "react-query";
import { getMessageTimeStamp } from "utils/formatTme";

function ChatWindow({ conversationId, userId }) {
  const inputRef = useRef();
  const queryClient = useQueryClient();

  // SEND MESSAGE
  const { mutateAsync: sendMessageMutation } = useSendMessage();

  // GET MESSAGES
  const {
    data: messages,
    isLoading: messagesLoading,
    refetch: refetchMessages,
  } = useGetMessages(conversationId);

  // On send button click send message to the admin
  const sendMessage = (e) => {
    e.preventDefault();

    const messageData = {
      conversationId: conversationId,
      sender: userId,
      text: inputRef.current.value,
    };
    console.log("sending message data: ", messageData);
    sendMessageMutation(messageData, {
      onSuccess: (data) => {
        console.log(
          "sending message from: ",
          userId,
          "to : ",
          getSuperAdmin()?._id
        );
        socket.emit("sendMessage", {
          senderId: userId,
          receiverId: getSuperAdmin()?._id,
          text: messageData.text,
        });
      },
    });
    inputRef.current.value = "";
  };

  useEffect(() => {
    socket.on("getMessage", (data) => {
      console.log("Received message: ", data);
      refetchMessages();
    });

    // Clean up socket listener on unmount
    return () => {
      socket.off("getMessage");
    };
  }, [conversationId, refetchMessages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent newline insertion
      sendMessage(e);
    }
  };

  return (
    <div className="absolute z-50 right-5 bottom-24  md:right-24 md:bottom-10 w-[20rem] h-[20rem] rounded-md shadow-2xl bg-white">
      {/* WINDOW HEADER */}
      <div className="flex items-center justify-center p-4 bg-black rounded-tr-md rounded-tl-md">
        <span className="w-3 h-3 mr-2 bg-green-600 rounded-full"></span>
        <p className="font-medium text-white text-200">Live Chat</p>
      </div>

      {/* CHATS AREA */}
      <ScrollToBottom className="flex flex-col gap-2 p-3  h-[13.2rem] w-full text-100">
        {messagesLoading ? (
          <div className="mt-[25%]">
            <Loader text={"Loading Messages..."} />
          </div>
        ) : (
          messages?.map((message, index) => (
            <div
              key={index}
              className={`${
                message.sender === userId
                  ? "outgoing-message"
                  : "incoming-message"
              } mb-1.5 mr-1`}
            >
              <p>{message.text}</p>

              <small className="text-[8px] w-full flex justify-end text-gray-800">
                {getMessageTimeStamp(message.createdAt)}
              </small>
            </div>
          ))
        )}
      </ScrollToBottom>

      {/* MESSAGE BOX */}
      <form onSubmit={sendMessage} className="relative p-3 pt-1">
        <textarea
          name="message-box"
          id="message-box"
          ref={inputRef}
          className="w-full h-10 p-2 border border-gray-300 rounded-md resize-none pr-7 text-100 focus-visible:outline-blue-300"
          onKeyDown={handleKeyDown}
          required
        ></textarea>

        {/* SEND BUTTON */}
        <button className="absolute z-50 p-1 bg-white rounded-md top-3 right-4">
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;
