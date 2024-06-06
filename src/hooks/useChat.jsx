import { data } from "autoprefixer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createConversation,
  getConversationByUserId,
  getMessages,
  getUserDetails,
  sendMessage,
} from "services/chat.services";

export const useCreateConversation = (setConversationId) => {
  return useMutation(createConversation, {
    onSuccess: (data) => {
      console.log("create conversation: ", data);
      setConversationId(data._id);
    },
  });
};

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  return useMutation(sendMessage, {
    onSuccess: (data, variables) => {
      // Assuming variables contains the conversationId
      const { conversationId } = variables;
      queryClient.invalidateQueries(["messages", conversationId]);
    },
  });
};

export const useGetMessages = (conversationId) => {
  return useQuery(
    ["messages", conversationId],
    () => getMessages(conversationId),
    {
      onSuccess: (data) => {
        console.log("get messages : ", data);
      },
    }
  );
};

export const useGetConversationByUserId = (userId) => {
  return useQuery(
    ["conversationById", userId],
    () => getConversationByUserId(userId),
    {
      onSuccess: (data) => {
        // console.log("conversation by user id: ", data);
      },
      select: (data) => {
        return data.slice().reverse();
      },
    }
  );
};

export const useGetUserDetails = (userId) => {
  return useQuery(
    ["conversationUserDetails", userId],
    () => getUserDetails(userId),
    {
      onSuccess: (data) => {
        // console.log("conversation user details: ", data);
      },
    }
  );
};
