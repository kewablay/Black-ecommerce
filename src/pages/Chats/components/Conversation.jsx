import { useGetUserDetails } from "hooks/useChat";
import React, { useEffect, useState, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import socket from "services/socket.services";
import { formatTime } from "utils/formatTme";
import { getSuperAdmin } from "utils/getSuperAdmin";

function Conversation({
  convo,
  setActiveConversation,
  activeConversation,
  newMessageSenderId,
  setNewMessageSenderId,
}) {
  // const [newMessage, setNewMessage] = useState(false); // state to track when there is a new message in the convo
  // const newMessageRef = useRef(false); // ref to track new messages without causing re-renders
  // const [convoClicked, setConvoClicked] = useState(false);

  const getUserId = () => {
    const admin = getSuperAdmin()._id;
    const memberId = convo.members.find((id) => id !== admin._id);
    return memberId;
  };

  // GET USER DETAILS
  const { data: userDetail } = useGetUserDetails(getUserId());

  // useEffect(() => {
  //   console.log("USE EFFECT RUNNING...............")
  //   const handleMessage = (data) => {
  //     console.log("Received message: ", data);
  //     if (data.senderId === getUserId() && convo?._id !== activeConversation) {
  //       newMessageRef.current = true;
  //       setNewMessage(true);
  //     }
  //   };

  //   socket.on("getMessage", handleMessage);

  //   // Clean up socket listener on unmount
  //   return () => {
  //     socket.off("getMessage", handleMessage);
  //   };
  // });

  var isNewMessage =
    newMessageSenderId === getUserId() && convo._id !== activeConversation?._id;

  const handleClick = (convo) => {
    setActiveConversation(convo);
    setNewMessageSenderId("");
  };

  return (
    <div
      onClick={() => handleClick(convo)}
      className="flex flex-col gap-3 p-2 py-2 pb-3 border-b border-gray-200 cursor-pointer text-200 hover:bg-gray-100"
    >
      <div className="items-center flex-between ">
        <div className="flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 overflow-hidden bg-gray-300 rounded-full">
            {userDetail && (
              <img
                src={`https://ui-avatars.com/api/?name=${userDetail?.username}?&background=random&?bold=true`}
                alt=""
                className="object-cover w-full h-full"
              />
            )}
          </span>
          <h3 className="capitalize truncate  mr-[5px]">
            {userDetail?.username || <Skeleton width={100} />}
          </h3>
        </div>
        {userDetail ? (
          <div>
            {isNewMessage && (
              <span className=" shrink-0 px-2 py-1 text-[8px] text-white bg-green-600 mr-2 rounded-full">
                NEW
              </span>
            )}
            <small className="text-gray-400 text-[9px] shrink-0 whitespace-nowrap">
              {formatTime(convo.updatedAt)}
            </small>
          </div>
        ) : (
          <Skeleton width={20} />
        )}
      </div>
    </div>
  );
}

export default Conversation;
