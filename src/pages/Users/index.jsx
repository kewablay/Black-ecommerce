import DashboardLayout from "components/layout/DashboardLayout";
import React from "react";
import { getCurrentUser } from "utils/getCurrentUser";
import SingleUser from "./components/SingleUser";
import { useGetAllUsers } from "hooks/useUsers";
import Loader from "components/shared/Loader";
import EmptyList from "components/shared/EmptyList";

function Users() {
  const currentUser = getCurrentUser();
  // console.log("current user: ", currentUser);

  const { data: users, isLoading } = useGetAllUsers();

  const isUsersEmpty = users?.length === 0;
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
              description="Looks like you there are no users yet!"
              icon="/src/assets/icons/no-users.png"
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
