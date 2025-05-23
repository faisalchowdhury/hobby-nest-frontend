import React from "react";
import { useLoaderData } from "react-router";

const GroupDetails = () => {
  const data = useLoaderData();

  const groupDateStr = data.end_date;
  const groupDate = new Date(groupDateStr);

  //Get todays date

  const today = new Date();
  console.log("Actual Today:", today.toString());

  today.setHours(0, 0, 0, 0);
  groupDate.setHours(0, 0, 0, 0);

  const isGroupActive = groupDate >= today;

  // console.log(isGroupActive);
  console.log(today);
  // console.log(groupDate);
  return (
    <div className="">
      <title>{data.group_name}</title>
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

        {isGroupActive ? (
          <button className="btn bg-primary border-none text-lg mt-5 text-white">
            Join Now
          </button>
        ) : (
          <p className="text-red-600 text-xl">
            Group ending date is expired at {data.end_date}, you cant join this
            group
          </p>
        )}
      </div>
    </div>
  );
};

export default GroupDetails;
