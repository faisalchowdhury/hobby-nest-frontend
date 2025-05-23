import React, { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../Context/ThemeContext";

const GroupCard = ({ group }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div>
      <div
        key={group._id}
        className={`${
          darkMode === true ? "bg-black" : "bg-slate-100"
        } border border-gray-700 rounded-lg p-5  shadow hover:shadow-xl hover:-translate-y-1 transition-all space-y-3`}>
        <img
          className="w-full h-[200px] object-cover rounded-t-lg"
          src={group.image_url}
          alt=""
        />
        <div className="p-5 space-y-2">
          <h2 className="text-2xl">{group.group_name}</h2>
          <p>End Date : {group.end_date}</p>
          <span className="bg-primary text-white px-2">
            {" "}
            Group Category : {group["hobby-category"]}
          </span>
          <p>Description :{group.description.slice(0, 130)}...</p>

          <Link
            to={`/group/${group._id}`}
            className="btn bg-primary text-white hover:bg-black">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
