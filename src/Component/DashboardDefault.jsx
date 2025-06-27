import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const DashboardDefault = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-xl font-semibold">
        Welcome To Hobby Nest Admin Panel
      </h2>
      <br></br>
      <h2 className="text-2xl">User Name : {user.displayName}</h2>
      <p className="text-lg">Email : {user.email}</p>
    </div>
  );
};

export default DashboardDefault;
