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

function ChatButton() {
  const [showChatWindow, setshowChatWindow] = useState(false);
  const [conversationId, setConversationId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  // GET CURRENT USER PROFILE
  const { data: userProfile, isFetchedAfterMount } = useGetUserProfile();

  const adminId = getSuperAdmin()?._id;
  const userId = userProfile?._id;

  // CREATE CONVERSATION
  const { mutateAsync: createConversationMutation } =
    useCreateConversation(setConversationId);

  // // GET CONVERSATION BY USER ID
  // const { data: conversationById, isError: conversationByIdError } =
  //   useGetConversationByUserId(userId);

  // // SEND MESSAGE
  // const { mutateAsync: sendMessageMutation } = useSendMessage();

  // const testConvoId = "662ba2df4452c45c8c6fd74d";

  // const enabled = false;
  // // GET MESSAGES
  // const {
  //   data: messages,
  //   isLoading: messagesLoading,
  //   refetch: refetchMessages,
  // } = useGetMessages({
  //   conversationId,
  //   enabled,
  // });

  // //   console.log("Messages in chat window: ", messages);

  // const sendMessage = (e) => {
  //   e.preventDefault();

  //   const messageData = {
  //     conversationId: conversationId,
  //     sender: userId,
  //     text: inputRef.current.value,
  //   };
  //   console.log("sending message data: ", messageData);
  //   sendMessageMutation(messageData);
  //   inputRef.current.value = "";
  // };

  // // console.log("From server convo by user id : ", conversationById)

  // // START A CONVERSATION
  // // const startConversation = () => {
  // //   if (conversationById) {
  // //     if (conversationById?.length === 0) {
  // //       createConversationMutation({
  // //         senderId: userId,
  // //         receiverId: adminId,
  // //       });
  // //     } else {
  // //       setConversationId(conversationById[0]?._id);
  // //       // console.log("first conversation id: ", conversationById?._id);
  // //     }
  // //   }
  // // };
  // console.log("is there convo id : ", conversationId);

  // // GET MESSAGES ONLY WHEN THERE IS A CONVERSATION
  // useEffect(() => {
  //   if (conversationId) {
  //     refetchMessages();
  //   }
  // }, [conversationId]);

  // // useEffect(() => {
  // //   if (userId && isFetchedAfterMount) {
  // //     startConversation();
  // //   }
  // // }, [userId, isFetchedAfterMount]);

  useEffect(() => {
    createConversationMutation({
      senderId: userId,
      receiverId: adminId,
    });
  }, [showChatWindow]);

  return (
    <>
      {showChatWindow && <ChatWindow conversationId={conversationId} userId={userId}/>}

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
