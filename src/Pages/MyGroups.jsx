import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { ThemeContext } from "../Context/ThemeContext";
const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    fetch(`https://hobbynest-server.vercel.app/my-groups/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
      });
  }, [user]);

  // Handle delete ;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this group ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://hobbynest-server.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const newGroups = groups.filter((group) => group._id != id);

              setGroups(newGroups);

              Swal.fire("Deleted", "", "success");
            }
          });
      }
    });
  };

  // Handle Edit
  const textArea = useRef("");
  const modalBox = useRef("");
  const [dataToUpdate, setDataToUpdate] = useState({});
  const openModal = (id) => {
    modalBox.current.showModal();

    fetch(`https://hobbynest-server.vercel.app/group/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDataToUpdate(data);
      });
  };

  const handleUpdateGroup = (id) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formFields = Object.fromEntries(formData);
    const textAreaData = textArea.current.value;
    const data = {
      ...formFields,
      description: textAreaData,
    };

    fetch(`https://hobbynest-server.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Group Information Updated successfully");
        } else if (data.modifiedCount === 0) {
          toast.error("You haven't change any field");
        }
      });
  };
  return (
    <div className="my-5">
      <title>My Groups</title>
      {groups.length > 0 ? (
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
                    <button>
                      <Link
                        to={`/group/${group._id}`}
                        className=" border-none btn-xs">
                        <FaEye
                          color="green"
                          title="Edit this Group information"
                          size={26}
                        />
                      </Link>
                    </button>
                    <button
                      onClick={() => openModal(group._id)}
                      className=" border-none btn-xs">
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
      ) : (
        <div className="flex flex-col items-center h-[50vh] justify-center gap-5">
          <h2 className="text-4xl">You Haven't Created any groups</h2>
          <Link
            className="btn bg-primary text-white border-none "
            to={"/create-group"}>
            Create Group
          </Link>
        </div>
      )}
      {/* MOdal Popup */}
      <dialog ref={modalBox} id="my_modal_7" className="modal">
        <Toaster></Toaster>
        <div
          className={`max-w-5xl  mx-auto ${
            darkMode === true ? "bg-slate-900" : "bg-slate-100"
          }  p-5 rounded-sm space-y-5 my-10 max-w-5xl p-5 relative`}>
          <h2 className="text-3xl my-5">Update Group</h2>
          <form
            onSubmit={() => handleUpdateGroup(dataToUpdate._id)}
            className="md:grid grid-cols-1 md:grid-cols-3 gap-5"
            method="dialog">
            <div>
              <label htmlFor="">Group name</label>
              <input
                required
                name="group_name"
                type="text"
                placeholder="Type group name"
                defaultValue={dataToUpdate.group_name}
                className="input border border-slate-300 rounded-full w-full"
              />
            </div>
            <div>
              <label htmlFor="">Hobby Category </label>
              <select
                required
                name="hobby-category"
                defaultValue={dataToUpdate["hobby-category"]}
                className="select border border-slate-300 rounded-full w-full">
                <option disabled={true}>Choose a hobby</option>

                <option value="Drawing & Painting">Drawing & Painting</option>
                <option value="Photography">Photography</option>
                <option value="Video Gaming">Video Gaming</option>
                <option value="Fishing">Fishing</option>
                <option value="Running">Running</option>
                <option value="Cooking">Cooking</option>
                <option value="Reading">Reading</option>
                <option value="Writing">Writing</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Meeting Location</label>
              <input
                required
                name="location"
                type="text"
                placeholder="Meeting location"
                defaultValue={dataToUpdate.location}
                className="input border border-slate-300 rounded-full w-full"
              />
            </div>
            <div>
              <label htmlFor="">Max member</label>
              <input
                required
                name="max-member"
                type="text"
                placeholder="Max member"
                defaultValue={dataToUpdate["max-member"]}
                className="input border border-slate-300 rounded-full w-full"
              />
            </div>
            <div>
              <label htmlFor="">End Date</label>
              <input
                required
                name="end_date"
                type="date"
                placeholder="Start Date"
                defaultValue={dataToUpdate.end_date}
                className="input border border-slate-300 rounded-full w-full"
              />
            </div>
            <div>
              <label htmlFor="">Image Url</label>
              <input
                required
                name="image_url"
                type="text"
                placeholder="Image Url"
                defaultValue={dataToUpdate.image_url}
                className="input border border-slate-300 rounded-full w-full"
              />
            </div>
            <div>
              <label htmlFor="">User Name</label>
              <input
                required
                name="user_name"
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="input border border-slate-300 rounded-full w-full"
              />
            </div>
            <div>
              <label htmlFor="">User Email</label>
              <input
                required
                name="user_email"
                type="text"
                defaultValue={user?.email}
                readOnly
                className="input border border-slate-300 rounded-full w-full "
              />
            </div>

            <div className="col-span-3 ">
              <label htmlFor="">Description</label>
              <textarea
                required
                ref={textArea}
                className="textarea border border-slate-300 rounded-lg w-full "
                placeholder="Bio"
                defaultValue={dataToUpdate.description}></textarea>
            </div>
            <input
              required
              type="submit"
              className="rounded-full w-full bg-primary text-white col-span-3 p-3"
              value={"Submit"}
            />
            <button
              type="button"
              onClick={() => modalBox.current.close()}
              className="modal-action btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyGroups;
