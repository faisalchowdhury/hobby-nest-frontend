import React, { use, useContext, useRef } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const CreateGroup = () => {
  const textArea = useRef("");
  const { user } = useContext(AuthContext);
  const handleCreateGroup = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formFields = Object.fromEntries(formData);
    const textAreaData = textArea.current.value;
    const data = {
      ...formFields,
      description: textAreaData,
    };

    fetch("http://localhost:3000/create-group", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Group Created Successfully");
        form.reset();
      });
  };
  return (
    <div className="max-w-5xl mx-auto bg-slate-100 p-5 rounded-sm space-y-5 my-10">
      <h2 className="text-2xl">Create a group</h2>
      <form onSubmit={handleCreateGroup}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label htmlFor="">Group name</label>
            <input
              required
              name="group_name"
              type="text"
              placeholder="Type group name"
              className="input border border-slate-300 rounded-full w-full"
            />
          </div>
          <div>
            <label htmlFor="">Hobby Category </label>
            <select
              required
              name="hobby-category"
              defaultValue="Choose a hobby"
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
              className="input border border-slate-300 rounded-full w-full"
            />
          </div>
          <div>
            <label htmlFor="">User Name</label>
            <input
              required
              name="user_name"
              type="text"
              value={user?.displayName}
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
              value={user?.email}
              readOnly
              className="input border border-slate-300 rounded-full w-full "
            />
          </div>

          <div className="md:col-span-3 ">
            <label htmlFor="">Description</label>
            <textarea
              required
              ref={textArea}
              className="textarea border border-slate-300 rounded-lg w-full "
              placeholder="Bio"></textarea>
          </div>
          <input
            required
            type="submit"
            className="rounded-full w-full bg-primary text-white md:col-span-3 p-3"
            value={"Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
