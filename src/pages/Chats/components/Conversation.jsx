import { useGetUserDetails } from "hooks/useChat";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { formatTime } from "utils/formatTme";
import { getSuperAdmin } from "utils/getSuperAdmin";

function Conversation({ convo, setActiveConversation }) {
  // const userId  = convo.members
  // getSuperAdmin()._id

  const getUserId = () => {
    const admin = getSuperAdmin()._id;
    const memberId = convo.members.find((id) => id !== admin._id);
    return memberId;
  };

  //   GET USER DETAILS
  const { data: userDetail } = useGetUserDetails(getUserId());
//   console.log("userDetail: ", userDetail)

  return (
    <div
      onClick={() => setActiveConversation(convo)}
      className="flex flex-col gap-3 p-2 py-2 pb-3 border-b border-gray-200 cursor-pointer text-200 hover:bg-gray-100"
    >
      <div className="items-center flex-between ">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 overflow-hidden bg-gray-300 rounded-full"></span>
          <h3 className="capitalize">{userDetail?.username || <Skeleton width={100}/>} </h3>
        </div>

        <small className="text-gray-400">{formatTime(convo.updatedAt)}</small>
      </div>
    </div>
  );
}

export default Conversation;
