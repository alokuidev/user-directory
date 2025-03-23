import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Redux/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser()); // Fetch users when component mounts
  }, [dispatch]);

  return (
    <div>
      <h2>Users List</h2>

      {status === "loading" && <p>Loading... ⏳</p>}
      {status === "Rejected" && <p>Error: {error} ❌</p>}
      {
        //console.log(JSON.stringify(users))
        console.log(status)
      }
      {status === "Success" && (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
