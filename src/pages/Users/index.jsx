import DashboardLayout from "components/layout/DashboardLayout";
import React from "react";
import { getCurrentUser } from "utils/getCurrentUser";
import SingleUser from "./components/singleUser";

function Users() {
  const currentUser = getCurrentUser();
  console.log("current user: ", currentUser);

  const users = [
    { username: "Raymond Jackson", email: "raymondj132@gmail.com", _id: 31 },
    { username: "Jude Bellingham", email: "judej132@gmail.com", _id: 54 },
    { username: "Kingsley Lamptey", email: "kingsleyj132@gmail.com", _id: 52 },
    { username: "Auxy Jay", email: "auxyj132@gmail.com", _id: 16 },
  ];

  const isUsersEmpty = false;
  const isLoading = false;
  return (
    <DashboardLayout>
      {/* heading  */}
      <div className="my-7">
        <h2 className="font-bold text-700">Users</h2>
      </div>

      {/* Users list  */}
      <div className="space-y-4">
        {/* list header  */}
        <div className="grid items-center grid-cols-12 gap-5 p-3 font-bold text-white rounded-md bg-secondaryDark">
          <p className="col-span-5">Username</p>
          <p className="col-span-5">Email</p>
          <p className="col-span-2">Actions</p>
        </div>

        {/* list */}
        {isUsersEmpty ? (
          <div className="pt-32">
            <EmptyList
              title="No Users Found"
              description="Looks like you haven't added any users!"
            />
          </div>
        ) : (
          <div className="space-y-4">
            {isLoading ? (
              <div className="mt-32">
                <Loader text={"Loading Users..."} />
              </div>
            ) : (
              users?.map((user, index) => (
                <SingleUser
                  key={index}
                  username={user?.username}
                  email={user?.email}
                  userId={user?._id}
                />
              ))
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Users;
