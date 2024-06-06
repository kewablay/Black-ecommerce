import { Chat } from "assets/icons/svgIcons";
import React, { useEffect, useRef, useState } from "react";
import ChatWindow from "../ChatWindow";
import {
  useCreateConversation,
  useGetConversationByUserId,
  useGetMessages,
  useSendMessage,
} from "hooks/useChat";
import { getSuperAdmin } from "utils/getSuperAdmin";
import { useGetUserProfile } from "hooks/useProfile";
import socket from "services/socket.services";
import { useQueryClient } from "react-query";

function ChatButton() {
  const [showChatWindow, setshowChatWindow] = useState(false);
  const [conversationId, setConversationId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const queryClient = useQueryClient();

  // GET CURRENT USER PROFILE
  const { data: userProfile, isFetchedAfterMount } = useGetUserProfile();

  const adminId = getSuperAdmin()?._id;
  const userId = userProfile?._id;

  // CREATE CONVERSATION
  const { mutateAsync: createConversationMutation } =
    useCreateConversation(setConversationId);

  // useEffect(() => {
  //   createConversationMutation({
  //     senderId: userId,
  //     receiverId: adminId,
  //   });
  // }, [showChatWindow]);

  useEffect(() => {
    if (showChatWindow && userId) {
      createConversationMutation({
        senderId: userId,
        receiverId: adminId,
      });

      console.log("About to run socket....");

      socket.emit("addUser", userId, () => {
        queryClient.invalidateQueries(["conversationById", adminId]);
      });
      socket.on("getUsers", (users) => {
        console.log("users from socket: ", users);
      });
    }
  }, [showChatWindow, userId]);

  return (
    <>
      {showChatWindow && (
        <ChatWindow conversationId={conversationId} userId={userId} />
      )}

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
