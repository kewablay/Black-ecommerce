import { DeleteIcon } from "assets/icons/svgIcons";
import React from "react";

function SingleUser({ username, email, userId }) {
  const handleUserDelete = () => {
    console.log("Deleting user: ", userId);
  };

  return (
    <div className="grid items-center grid-cols-12 gap-5 p-5 bg-white rounded-md shadow-sm text-300">
      {/* User name */}
      <div className="col-span-5">
        <p>{username}</p>
      </div>

      {/* Email */}
      <div className="col-span-5">
        <p>{email}</p>
      </div>

      {/* Actions */}
      <div className="col-span-2">
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
