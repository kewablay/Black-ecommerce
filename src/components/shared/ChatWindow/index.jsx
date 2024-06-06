import { CheckIcon, SendIcon } from "assets/icons/svgIcons";
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

import { getMessageTimeStamp } from "utils/formatTme";
import MessageLoader from "../MessageLoader";

function ChatWindow({ conversationId, userId }) {
  const inputRef = useRef();
  const [localMessages, setLocalMessages] = useState([]);

  // SEND MESSAGE
  const { mutateAsync: sendMessageMutation, onSuccess: sendMessageSuccess } =
    useSendMessage();

  // GET MESSAGES
  const {
    data: messages,
    isLoading: messagesLoading,
    refetch: refetchMessages,
  } = useGetMessages(conversationId);

  // SET THE LOCAL MESSAGES TO THE MESSAGES WE FETCH
  useEffect(() => {
    if (messages) {
      setLocalMessages(messages);
    }
  }, [messages]);

  // On send button click send message to the admin
  const sendMessage = (e) => {
    e.preventDefault();

    // add message to localMessages state
    const tempId = Date.now().toString(); // Temporary ID for the local message

    const newMessage = {
      _id: tempId,
      conversationId: conversationId,
      sender: userId,
      text: inputRef.current.value,
      createdAt: new Date().toISOString(),
      isSending: true, // Mark the message as being sent
    };
    setLocalMessages((prevMessages) => [...prevMessages, newMessage]);

    // send message to the API
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
        // find the new message and change the isSending status
        setLocalMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg._id === tempId
              ? { ...msg, isSending: false, _id: data._id }
              : msg
          )
        );
        socket.emit("sendMessage", {
          senderId: userId,
          receiverId: getSuperAdmin()?._id,
          text: messageData.text,
        });
      },
      onError: () => {
        setLocalMessages((prevMessages) =>
          prevMessages.filter((msg) => msg._id !== tempId)
        );
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
          localMessages?.map((message, index) => (
            <div
              key={index}
              className={`${
                message.sender === userId
                  ? "outgoing-message"
                  : "incoming-message"
              } mb-1.5 mr-1`}
            >
              <p>{message.text}</p>

              <small className="text-[9.5px] w-full flex justify-end items-center text-gray-800">
                {getMessageTimeStamp(message.createdAt)}
                {message.isSending ? (
                  <span className="ml-1.5 flex items-center">
                    <MessageLoader />
                  </span>
                ) : (
                  <span className="ml-1">
                    <CheckIcon />
                  </span>
                )}
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
