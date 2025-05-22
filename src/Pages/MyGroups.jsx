import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  console.log(user?.email);
  useEffect(() => {
    fetch(`http://localhost:3000/my-groups/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, [user]);

  // Handle delete ;

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/delete/${id}`);
  };
  return (
    <div className="my-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Group Name</th>
              <th>Meetup Info</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {groups.map((group, i) => (
              <tr key={group._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={group.image_url} alt={group.group_name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xl">
                        {group.group_name}
                      </div>
                      <div className="text-sm opacity-50">
                        End Date : {group.end_date}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {group.location}
                  <br />
                  <span className="badge badge-ghost badge-sm bg-green-900 text-white">
                    Max Member : {group["max-member"]}
                  </span>
                </td>
                <td>{group["hobby-category"]}</td>
                <th className="space-x-3">
                  <button className=" border-none btn-xs">
                    <FaEdit
                      color="gray"
                      title="Edit this Group information"
                      size={26}
                    />
                  </button>
                  <button
                    onClick={() => handleDelete(group._id)}
                    className=" border-none btn-xs">
                    <MdDeleteOutline
                      color="red"
                      title="Are you want to delete this ?"
                      size={26}
                    />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
