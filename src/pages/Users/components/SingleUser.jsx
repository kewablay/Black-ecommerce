import { DeleteIcon } from "assets/icons/svgIcons";
import { useDeleteUser } from "hooks/useUsers";
import React from "react";
import toast from "react-hot-toast";

function SingleUser({ username, email, userId, phone }) {
  const { data, mutateAsync: deletUserMutation } = useDeleteUser();

  const handleUserDelete = () => {
    console.log("Deleting user: ", userId);
    toast.promise(deletUserMutation(userId), {
      loading: "Deleting user...",
      success: "User deleted successfully.",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <div className="grid items-center grid-cols-12 gap-5 p-5 bg-white rounded-md shadow-sm text-300">
      {/* User name */}
      <div className="col-span-3">
        <p>{username}</p>
      </div>
      
      {/* Phone*/}
      <div className="col-span-3">
        <p>{phone}</p>
      </div>

      {/* Email */}
      <div className="col-span-4">
        <p>{email}</p>
      </div>

      {/* Actions */}
      <div className="col-span-1">
        <button onClick={handleUserDelete} className="flex items-center gap-1">
          <span>
            <DeleteIcon />
          </span>
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleUser;
