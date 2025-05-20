import React from "react";
import Slider from "../Component/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-3 gap-5 py-5">
        <div className="border border-gray-700 rounded-lg p-5 bg-slate-100 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
          <h2 className="text-lg">Drawing & Painting Hub</h2>
          <p>Start Date : 12/02/2025</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius dicta quaerat nesciunt at error .
          </p>
        </div>

        <div className="border border-gray-700 rounded-lg p-5 bg-slate-100 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
          <h2 className="text-lg">Drawing & Painting Hub</h2>
          <p>Start Date : 12/02/2025</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius dicta quaerat nesciunt at error .
          </p>
        </div>

        <div className="border border-gray-700 rounded-lg p-5 bg-slate-100 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
          <h2 className="text-lg">Drawing & Painting Hub</h2>
          <p>Start Date : 12/02/2025</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius dicta quaerat nesciunt at error .
          </p>
        </div>

        <div className="border border-gray-700 rounded-lg p-5 bg-slate-100 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
          <h2 className="text-lg">Drawing & Painting Hub</h2>
          <p>Start Date : 12/02/2025</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius dicta quaerat nesciunt at error .
          </p>
        </div>

        <div className="border border-gray-700 rounded-lg p-5 bg-slate-100 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
          <h2 className="text-lg">Drawing & Painting Hub</h2>
          <p>Start Date : 12/02/2025</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius dicta quaerat nesciunt at error .
          </p>
        </div>

        <div className="border border-gray-700 rounded-lg p-5 bg-slate-100 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
          <h2 className="text-lg">Drawing & Painting Hub</h2>
          <p>Start Date : 12/02/2025</p>
          <p>
            Description : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius dicta quaerat nesciunt at error .
          </p>
        </div>
      </div>

      {/* Popular Hobbies */}

      <div className="space-y-5">
        <div className="space-y-3">
          <h3 className="text-2xl">Popular Groups</h3>
          <h1 className="text-6xl font-semibold">
            Join the most active and inspiring hobby communities.
          </h1>
        </div>
        <div className="popular-hobby grid grid-cols-2 gap-5">
          <div className="bg-[#004122] text-white p-10 rounded-xl space-y-3">
            <h2 className="text-2xl">Drawing & Painting Hub</h2>
            <h1 className="text-3xl font-semibold">
              Check the current status of Upwork services
            </h1>
            <button className="btn border-none bg-white rounded-md text-black hover:bg-black hover:text-white">
              Join Now
            </button>
          </div>
          <div className="bg-slate-200 text-black p-10 rounded-xl space-y-3">
            <h2 className="text-2xl">Drawing & Painting Hub</h2>
            <h1 className="text-3xl font-semibold">
              Check the current status of Upwork services
            </h1>
            <button className="btn border-none bg-white rounded-md text-black hover:bg-black hover:text-white">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Why Us */}

      <div className="grid grid-cols-3">
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
