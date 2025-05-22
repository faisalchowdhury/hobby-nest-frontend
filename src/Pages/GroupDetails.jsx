import React from "react";
import { useLoaderData } from "react-router";

const GroupDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="">
      <div className="max-w-5xl mx-auto space-y-2 bg-slate-50 p-10 rounded-2xl shadow">
        <img
          className="w-full h-[300px] object-cover object-top rounded-lg"
          src={data.image_url}
          alt=""
        />

        <h1 className="text-5xl mt-10">{data.group_name}</h1>
        <h3 className="text-3xl">Category : {data["hobby-category"]}</h3>
        <p className="text-xl">
          End date: <span className="bg-amber-500">{data.end_date}</span>
        </p>
        <p className="text-xl">Meeting Location : {data.location}</p>
        <p className="text-xl">Group Admin : {data.user_name}</p>
        <p className="text-xl">Admin Contact : {data.user_email}</p>
        <p className="text-xl">Description : {data.description}</p>
        <button className="btn bg-primary border-none text-lg mt-5 text-white">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default GroupDetails;
