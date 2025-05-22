import React from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../Component/GroupCard";

const AllGroups = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5 ">
        {data.map((group) => (
          <GroupCard group={group}></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
