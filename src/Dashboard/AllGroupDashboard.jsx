import React from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../Component/GroupCard";

const AllGroupDashboard = () => {
  const data = useLoaderData();
  return (
    <div>
      <title>All Groups</title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5 ">
        {data.map((group) => (
          <GroupCard key={group._id} group={group}></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default AllGroupDashboard;
