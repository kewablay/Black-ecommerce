import { SendIcon } from "assets/icons/svgIcons";
import Loader from "components/shared/Loader";
import {
  useGetMessages,
  useGetUserDetails,
  useSendMessage,
} from "hooks/useChat";
import React, { useRef } from "react";
import Skeleton from "react-loading-skeleton";
import { getSuperAdmin } from "utils/getSuperAdmin";
import ScrollToBottom from "react-scroll-to-bottom";

function AdminChatArea({ activeConversation, adminId }) {
  const inputRef = useRef();
  // console.log("Active conversation: ", activeConversation);
  const conversationId = activeConversation?._id;

  // SEND MESSAGE
  const { mutateAsync: sendMessageMutation, isLoading: sendMessageLoading } =
    useSendMessage();

  const enabled = true;
  // GET MESSAGES
  const {
    data: messages,
    isLoading: messagesLoading,
    refetch: refetchMessages,
  } = useGetMessages({
    conversationId,
    enabled,
  });

  const getUserId = () => {
    const admin = getSuperAdmin()._id;
    const memberId = activeConversation.members.find((id) => id !== admin._id);
    return memberId;
  };

  // //   GET USER DETAILS
  const { data: userDetail } = useGetUserDetails(getUserId());

  const sendMessage = (e) => {
    e.preventDefault();

    const messageData = {
      conversationId: conversationId,
      sender: adminId,
      text: inputRef.current.value,
    };
    console.log("sending message data: ", messageData);
    sendMessageMutation(messageData);
    inputRef.current.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent newline insertion
      sendMessage(e);
    }
  };

  // console.log("Fetched messages:", messages);
  return (
    <>
      {/* header  */}
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="w-10 h-10 overflow-hidden bg-gray-300 rounded-full"></span>
          <h3 className="font-bold capitalize">
            {userDetail?.username || <Skeleton width={100} />}
          </h3>
        </div>
      </div>

      {/* chat area */}

      {/* CHATS AREA */}
      <div className="p-3 text-200 h-[50vh] flex flex-col justify-end">
        {messagesLoading ? (
          <div className="pb-[38%]">
            <Loader text={"Loading Messages..."} />
          </div>
        ) : (
          <ScrollToBottom className="flex flex-col w-full h-full gap-2 pr-1 mt-auto messages">
            {messages?.map((message, index) => (
              <p
                key={index}
                className={`${
                  message.sender === adminId
                    ? "admin-outgoing-message"
                    : "admin-incoming-message"
                } mb-2 mr-1`}
              >
                {message.text}
              </p>
            ))}
            {sendMessageLoading && (
              <p className="admin-outgoing-message">
                <Skeleton width={80} height={10} baseColor="#99B4D6" />
              </p>
            )}
          </ScrollToBottom>
        )}
      </div>

      {/* MESSAGE BOX */}
      <form onSubmit={sendMessage} className="relative p-3">
        <textarea
          name="message-box"
          id="message-box"
          className="w-full h-12 p-2 border border-gray-300 rounded-md resize-none text-100 focus-visible:outline-blue-300"
          onKeyDown={handleKeyDown}
          ref={inputRef}
        ></textarea>

        {/* SEND BUTTON */}
        <button className="absolute z-50 p-1 bg-white rounded-md top-6 right-5">
          <SendIcon />
        </button>
      </form>
    </>
  );
}

export default AdminChatArea;
